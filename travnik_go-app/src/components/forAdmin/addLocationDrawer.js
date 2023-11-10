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
import {addLocation} from "../../api";
export default function AddLocationDrawer(props) {
    const [open, setOpen] = React.useState(false);
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
        props.getLocations(props.setLocations);
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
        address : address,
        latitude : latitude,
        details : details,
        longitude : longitude,
    };

    function submitData(){
        console.log(dataObject);
        addLocation(dataObject);
        setAddress("");
        setLatitude("");
        setDetails("");
        setLongitude("");
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <Button variant="contained" startIcon={<AddIcon />} onClick={toggleDrawer(true)}>
                New location
            </Button>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Location created successfully!
                </Alert>
            </Snackbar>
            <Drawer hideBackdrop anchor="right" open={open} onClose={() => setOpen(false)}>
                <ModalClose/>
                <DialogTitle>New location</DialogTitle>

                <div className="d-flex justify-content-center">
                    <form style={{ width: '80%' }}>
                        <Box>
                            <TextField
                                sx={{ margin: "1rem 1rem 0 1rem" }}
                                id="details"
                                label="Details"
                                value={details}
                                onChange={(e)=>setDetails(e.target.value)}
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                            />
                        </Box>
                        <Box >
                            <TextField
                                sx={{ margin: "1rem 1rem 0 1rem" }}
                                className="custom-input"
                                id="address"
                                label="Address"
                                type="text"
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
                                className="custom-input"
                                id="latitude"
                                label="Latitude"
                                type="text"
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
                                className="custom-input"
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
                <Button onClick={() => {setOpen(false); submitData(); handleClick();}} sx={{ margin: "1rem 1rem 0 1rem" }} type="submit" variant="contained" color="primary">
                    Submit
                </Button>
                </div>
            </Drawer>
        </Box>
    );
}