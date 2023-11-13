import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ChallengeDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button variant="outlined" color={"success"} onClick={handleClickOpen}>
                TAKE A CHALLENGE <SportsHandballIcon/>
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Ready to take TravnikGO challenge?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Ćevapčići are the most delicious Bosnian dish so we challenge you to try!
                        Here are steps of this challenge. Go to Hari and order like this:
                        <div className={"my-2"}>
                            <Stack direction="row" spacing={2}>
                                <Avatar
                                    alt={`Cevap avatar`}
                                    src={`https://scontent.fsjj2-1.fna.fbcdn.net/v/t1.6435-9/133937150_3977797915572226_3616824134043827137_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=810d5f&_nc_ohc=wMsBZCIkI4IAX8pU8EY&_nc_oc=AQmFRMPZZKVafq3U9yExF5pMHD3oy4muzsMjkQmxrGyNwK_dEUm0fGzx9gnHNCCrUU7osQTMp62lO90pR0vKQa98&_nc_ht=scontent.fsjj2-1.fna&oh=00_AfDDhOMjEZKWYRHoXXsPpEXhCSN6oB_mcx3h-p9aT_2Low&oe=6578F60E`}
                                />
                                <div className={"my-2"}>10 ćevaps in lepina</div>
                            </Stack>
                        </div>
                        <div className={"my-2"}>
                            <Stack direction="row" spacing={2}>
                                <Avatar
                                    alt={`Luk avatar`}
                                    src={`https://www.southernliving.com/thmb/IzINwpOsHUP0qemN1pgChxa3fFw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1279120925-1-175489607f764e03be03927e5b90c11a.jpg`}
                                />
                                <div className={"my-2"}>Lots of cuttet onion</div>
                            </Stack>
                        </div>
                        <div className={"my-2"}>
                            <Stack direction="row" spacing={2}>
                                <Avatar
                                    alt={`Kajmak avatar`}
                                    src={`https://cdn.agroklub.com/upload/images/text/thumb/skorup-kajmak-880x495.jpg`}
                                />
                                <div className={"my-2"}>Travniks kajmak</div>
                            </Stack>
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant={"contained"} color={"success"}>I AM ON MY WAY!</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}