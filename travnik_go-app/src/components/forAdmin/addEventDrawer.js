import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import AddIcon from '@mui/icons-material/Add';
import {Button} from "@mui/material";
import {Alert, ModalClose, Snackbar} from "@mui/joy";
import DialogTitle from "@mui/material/DialogTitle";
import MuiAlert from '@mui/material/Alert';
import TextField from "@mui/material/TextField";
import {useState} from "react";
export default function AddEventDrawer() {
    const [open, setOpen] = React.useState(false);
    const [openSnackbar, setOpenSnackbar] = React.useState(false);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [details, setDetails] = useState("");

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleClick = () => {
        setOpenSnackbar(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    const toggleDrawer = (inOpen) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(inOpen);
    };

    const dataObject = {
        name : name,
        location : location,
        details : details,
        date : date,
        time : time
    }

    function submitData(){
        console.log(dataObject);
        setName("");
        setLocation("");
        setDetails("");
        setTime("");
        setDate("");
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <Button variant="contained" startIcon={<AddIcon />} onClick={toggleDrawer(true)}>
                New event
            </Button>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Event created successfully!
                </Alert>
            </Snackbar>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <ModalClose/>
                <DialogTitle>New event</DialogTitle>

                <div className="d-flex justify-content-center">
                    <form>
                        <Box>
                            <TextField
                                sx={{ margin: "1rem 1rem 0 1rem" }}
                                className="custom-input"
                                id="name"
                                label="Name"
                                type="text"
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                            />
                        </Box>
                        <Box>
                            <TextField
                                sx={{ margin: "1rem 1rem 0 1rem" }}
                                id="location"
                                label="Location"
                                type="text"
                                value={location}
                                onChange={(e)=>setLocation(e.target.value)}
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                            />
                        </Box>
                        <Box>
                            <TextField
                                sx={{ margin: "1rem 1rem 0 1rem" }}
                                id="details"
                                label="Details"
                                multiline
                                rows={3}
                                value={details}
                                onChange={(e)=>setDetails(e.target.value)}
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                            />
                        </Box>
                        <Box>
                            <TextField
                                sx={{ margin: "1rem 1rem 0 1rem" }}
                                className="custom-input"
                                id="date"
                                label="Date"
                                type="date"
                                value={date}
                                onChange={(e)=>setDate(e.target.value)}
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                            />
                        </Box>
                        <Box>
                            <TextField
                                sx={{ margin: "1rem 1rem 0 1rem" }}
                                className="custom-input"
                                id="time"
                                label="Time"
                                type="time"
                                value={time}
                                onChange={(e)=>setTime(e.target.value)}
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                            />
                        </Box>
                    </form>
                </div>
                <Button onClick={() => {setOpen(false); submitData(); handleClick();}} sx={{ margin: "1rem 1rem 0 1rem" }} type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </Drawer>
        </Box>
    );
}