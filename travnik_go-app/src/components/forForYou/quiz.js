import {useState} from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import {InputLabel} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import DialogActions from "@mui/material/DialogActions";
import * as React from "react";

export const Quiz = ({ isOpen, onClose, image }) => {
    const date = new Date();
    const [formData, setFormData] = useState({
        age: '',
        dateOfEntry: `${date.getFullYear()}-${date.getMonth().toString().padStart(2, '0')}-${date.getDay().toString().padStart(2, '0')}T${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`,
        dateOfLeave: '',
        categories: {
            category1: false,
            category2: false,
            category3: false,
        },
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            categories: {
                ...prevData.categories,
                [name]: checked,
            },
        }));
    };

    const handleSubmit = () => {
        console.log('Form Data:', formData);

        window.location.assign("/for_you");
        onClose();
    };


    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>{image?.title}</div>
                    <Button onClick={()=>{}}>
                        Quick Search
                    </Button>
                </div>
            </DialogTitle>
            <DialogContent>
                <TextField
                    label="Age"
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    style={{ marginBottom: '30px' }}
                />
                <InputLabel htmlFor="dateOfEntry">Date of Entry</InputLabel>
                <TextField
                    type="datetime-local"
                    name="dateOfEntry"
                    value={formData.dateOfEntry}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    style={{ marginBottom: '30px' }}
                />
                <InputLabel htmlFor="dateOfLeave">Date of Leave</InputLabel>
                <TextField
                    type="datetime-local"
                    name="dateOfLeave"
                    value={formData.dateOfLeave}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    style={{ marginBottom: '30px' }}
                />

                {/* Checkboxes for categories with added margin */}
                <FormControlLabel
                    control={<Checkbox checked={formData.categories.category1} onChange={handleCheckboxChange} name="category1" />}
                    label="Category 1"
                    style={{ marginTop: '10px' }}
                />
                <FormControlLabel
                    control={<Checkbox checked={formData.categories.category2} onChange={handleCheckboxChange} name="category2" />}
                    label="Category 2"
                    style={{ marginTop: '10px' }}
                />
                <FormControlLabel
                    control={<Checkbox checked={formData.categories.category3} onChange={handleCheckboxChange} name="category3" />}
                    label="Category 3"
                    style={{ marginTop: '10px' }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSubmit}>Submit</Button>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};
