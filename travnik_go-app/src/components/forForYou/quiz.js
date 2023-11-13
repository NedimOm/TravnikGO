import React, {useEffect, useState} from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimeClock } from '@mui/x-date-pickers/TimeClock';
import {DateCalendar} from "@mui/x-date-pickers";
import dayjs from "dayjs";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import {SERVER_URL} from "../../constants";

export default function Quiz({ isOpen, onClose, image }){
    const [activeStep, setActiveStep] = useState(0);
    const [selectedStartDate, setSelectedStartDate] = useState(dayjs(new Date()));
    const [selectedStartTime, setSelectedStartTime] = useState(dayjs(new Date()));
    const [selectedEndDate, setSelectedEndDate] = useState(dayjs(new Date()));
    const [selectedEndTime, setSelectedEndTime] = useState(dayjs(new Date()));
    const [selectedAge, setSelectedAge] = useState(18);
    const [ageError, setAgeError] = useState('')
    const [timeError, setTimeError] = useState(false)
    const [selectedCategories, setSelectedCategories] = useState({});

    useEffect(() => {
        axios.get(`${SERVER_URL}/forYou/getCategories`).then(resp => {
            const output = {};
            resp.data.categories.forEach(category => {
                output[category.name] = false;
            });

            setSelectedCategories(output);
        });
    }, [])

    const handleNext = () => {
        if(activeStep === 0){
            if(selectedAge === '' || selectedAge <= 0)
                setAgeError('Age must be positive')
            else if (selectedAge > 200)
                    setAgeError('Age to high')
            else{
                setAgeError('')
                setActiveStep(activeStep + 1);
            }
        }else{
            setActiveStep(activeStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep(activeStep - 1);
        }
    };

    const handleFinish = () => {
        let ends_date = selectedEndDate.toDate()
        let ends_time = selectedEndTime.toDate()
        let starts_date = selectedStartDate.toDate()
        let starts_time = selectedStartTime.toDate()
        const endsDate = new Date(
            ends_date.getFullYear(),
            ends_date.getMonth(),
            ends_date.getDate(),
            ends_time.getHours(),
            ends_time.getMinutes(),
            ends_time.getSeconds()
        );

        const startsDate = new Date(
            starts_date.getFullYear(),
            starts_date.getMonth(),
            starts_date.getDate(),
            starts_time.getHours(),
            starts_time.getMinutes(),
            starts_time.getSeconds()
        );
        if(startsDate > endsDate)
            setTimeError(true)
        else{
            setTimeError(false)
            let categories = [];
            Object.keys(selectedCategories).map(categoryName =>{
                if(selectedCategories[categoryName] === true)
                    categories.push(categoryName)
            })
            console.log(categories)
            localStorage.setItem('data', JSON.stringify({age:selectedAge, starts:startsDate, ends:endsDate, categories:categories}))
            onClose();
            window.location.href = "/for_you";
        }

    };

    const handleStartDateChange = (date) => {
        setSelectedStartDate(date);
    };
    const handleStartTimeChange = (date) => {
        setSelectedStartTime(date);
    };
    const handleEndDateChange = (date) => {
        setSelectedEndDate(date);
    };

    const handleEndTimeChange = (date) => {
        setSelectedEndTime(date);
    };

    const handleAgeChange = (age) => {
        setSelectedAge(age)
    }

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setSelectedCategories((prevData) => ({
                ...prevData,
                [name]: checked,
            }
        ));
    };

    return (
        <Dialog open={isOpen} onClose={onClose}  PaperProps={{
            sx: {
                width: "60%",
                height: "60%",
                '@media (max-width: 700px)': {
                    width: '100%',
                    height: '100%',
                },
            }
        }}>
            <DialogTitle>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>For You</div>
                    <Button variant="outlined" size="small" onClick={() => {localStorage.setItem('data', null); onClose(); window.location.href = "/for_you";}}>Quick search</Button>
                </div>
            </DialogTitle>
            <DialogContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
                {activeStep === 0 && (
                    <div>
                        { ageError === ''
                            ?   <TextField
                                    label="Age"
                                    type="number"
                                    name="age"
                                    fullWidth
                                    margin="normal"
                                    value={selectedAge}
                                    onChange={(e)=>{handleAgeChange(e.target.value)}}
                                />
                            :
                            <TextField
                                error
                                id="outlined-error-helper-text"
                                label={"Error"}
                                value={selectedAge}
                                onChange={(e)=>{handleAgeChange(e.target.value)}}
                                helperText={ageError}
                                margin="normal"
                            />
                        }

                    </div>
                )}
                {activeStep === 1 && (
                    <div>
                    <p>Provide date and time of your arrival</p>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar
                                value={selectedStartDate}
                                onChange={handleStartDateChange}
                            />
                            <TimeClock
                                ampm={false} views={['hours']}
                                value={selectedStartTime}
                                onChange={handleStartTimeChange}
                            />
                        </LocalizationProvider>
                    </div>
                )}
                {activeStep === 2 && (
                    <div>
                        <p>Provide date and time of your leave</p>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar
                                value={selectedEndDate}
                                onChange={handleEndDateChange}
                            />
                            <TimeClock
                                ampm={false} views={['hours']}
                                value={selectedEndTime}
                                onChange={handleEndTimeChange}
                            />
                        </LocalizationProvider>
                    </div>
                )}
                {timeError &&
                    <p style={{ color: "red" }}>
                        Arrival date must be before Leave date
                    </p>
                }
                {activeStep === 3 &&
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {Object.keys(selectedCategories).map(categoryName => (
                            <div key={categoryName} style={{ flexBasis: '33.33%', padding: '10px' }}>
                                <FormControlLabel
                                    control={<Checkbox checked={selectedCategories[categoryName]}  onChange={handleCheckboxChange} name={categoryName}/>}
                                    label={categoryName}
                                    style={{ marginTop: '10px' }}
                                />
                            </div>))
                        }
                    </div>
                }
            </DialogContent>
            <DialogActions>
                <MobileStepper
                    variant="progress"
                    steps={4}
                    position="static"
                    activeStep={activeStep}
                    sx={{ maxWidth: "100%", flexGrow: 1 }}
                    nextButton={
                        activeStep !== 3
                            ?   <Button size="small" onClick={handleNext} disabled={activeStep === 3}>
                                Next
                                <KeyboardArrowRight />
                            </Button>
                            :   <Button size="small" onClick={handleFinish} disabled={activeStep === 4}>
                                Finish
                                <KeyboardArrowRight />
                            </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            <KeyboardArrowLeft />
                            Back
                        </Button>
                    }
                />
            </DialogActions>
        </Dialog>
    );
};