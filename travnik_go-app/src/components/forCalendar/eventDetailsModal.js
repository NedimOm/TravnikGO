import * as React from 'react';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Button from "@mui/material/Button";
import EventMap from "./eventMap";
import {Place, WatchLater} from "@mui/icons-material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

export default function EventDetailsModal({el}) {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button variant="outlined" size="small" onClick={() => {if(el.link !== 'myPlace') setOpen(true); else window.location.href = '/locations/myPlace'; }}>Learn More</Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        maxWidth: 500,
                        borderRadius: 'md',
                        p: 3,
                        boxShadow: 'xs',
                    }}
                >
                    <ModalClose variant="plain" sx={{ m: 1}} onClick={handleClose}/>
                    <Typography
                        component="h1"
                        id="modal-title"
                        level="h2"
                        textColor="inherit"
                        fontWeight="lg"
                        mb={2}
                    >
                        {el.typotitle}
                    </Typography>
                    <Typography id="modal-desc" textColor="text.tertiary">
                        {el.description}
                    </Typography>
                    <EventMap />
                    <Typography variant="body2" color="text.primary" className={"mb-2"}>
                        <Place /> {el.location}
                    </Typography>
                    <Typography variant="body2" color="text.primary" className={"mb-2"}>
                        {el.time != null &&
                            <>
                                <WatchLater /> {el.time}
                            </>
                        }
                    </Typography>
                </Sheet>
            </Dialog>
        </>
    );
}