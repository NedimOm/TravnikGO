import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import {Snackbar} from "@mui/joy";
import MuiAlert from "@mui/material/Alert";
import {deleteLocation} from "../../api";

export default function DeleteConfirmationDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [openSnackbar, setOpenSnackbar] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    function handleClose(){
        setOpen(false);
    }

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleClick = () => {
        setOpenSnackbar(true);
        deleteLocation(props.kod);
        props.getLocations(props.setLocations);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    return (
        <React.Fragment>
            <IconButton aria-label="delete" color="danger" onClick={handleClickOpen}>
                <DeleteIcon />
            </IconButton>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    Event deleted successfully!
                </Alert>
            </Snackbar>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Delete event"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this event?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={()=>{handleClose(); handleClick();}} autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
