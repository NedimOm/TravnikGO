import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import {Button} from "@mui/material";
import {Alert, ModalClose, Snackbar} from "@mui/joy";
import DialogTitle from "@mui/material/DialogTitle";
import MuiAlert from '@mui/material/Alert';
import TextField from "@mui/material/TextField";
import {useEffect, useState} from "react";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import {getLocation, updateLocation} from "../../api";
export default function EditLocationDrawer(props) {
    useEffect(()=>{
        locationData(props.kod);
    }, []);
    const [open, setOpen] = useState(false);
    const [openSnackbar, setOpenSnackbar] = React.useState(false);
    const [address, setAddress] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
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
        locationData(props.kod);
    };

    function locationData(key){
        getLocation(setData, key);
    }

    function setData(locationDataObject){
        setAddress(locationDataObject.adress);
        setLatitude(locationDataObject.latitude);
        setDetails(locationDataObject.details);
        setLongitude(locationDataObject.longitude);
    }

    function submitData(key){
        updateLocation({
            address:address,
            details:details,
            latitude:latitude,
            longitude:longitude
        }, key);
        props.getLocations(props.setLocations);
    }


    return (
        <Box sx={{ display: 'flex' }}>
            <IconButton aria-label="edit" color="primary"  onClick={toggleDrawer(true)}>
                <EditIcon />
            </IconButton>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Event edited successfully!
                </Alert>
            </Snackbar>
            <Drawer hideBackdrop anchor="right" open={open} onClose={() => setOpen(false)}>
                <ModalClose />
                <DialogTitle>Edit event</DialogTitle>

                <div className="d-flex justify-content-center">
                    <form style={{ width: '80%' }}>
                        <Box>
                            <TextField
                                sx={{ margin: "1rem 1rem 0 1rem" }}
                                label="Details"
                                value={details}
                                onChange={(e)=>setDetails(e.target.value)}
                                variant="outlined"
                                fullWidth
                            />
                        </Box>
                        <Box >
                            <TextField
                                sx={{ margin: "1rem 1rem 0 1rem" }}
                                label="Address"
                                value={address}
                                onChange={(e)=>setAddress(e.target.value)}
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                            />
                        </Box>
                        <Box>
                            <TextField
                                sx={{ margin: "1rem 1rem 0 1rem" }}
                                label="Latitude"
                                value={latitude}
                                onChange={(e)=>setLatitude(e.target.value)}
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                            />
                        </Box>
                        <Box>
                            <TextField
                                sx={{ margin: "1rem 1rem 0 1rem" }}
                                id="longitude"
                                label="Longitude"
                                type="text"
                                value={longitude}
                                onChange={(e)=>setLongitude(e.target.value)}
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                            />
                        </Box>
                    </form>
                </div>
                <div className="d-flex justify-content-end m-2">
                <Button onClick={() => {setOpen(false); submitData(props.kod); handleClick();}} sx={{ margin: "1rem 1rem 0 1rem" }} type="submit" variant="contained" color="primary">
                    Submit
                </Button>
                </div>
            </Drawer>
        </Box>
    );
}


