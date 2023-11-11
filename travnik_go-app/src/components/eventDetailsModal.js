import * as React from 'react';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Button from "@mui/material/Button";
import EventMap from "./eventMap";
import {Place, WatchLater} from "@mui/icons-material";

export default function EventDetailsModal({el}) {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <Button variant="outlined" size="small" onClick={() => setOpen(true)}>Learn More</Button>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
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
                    <ModalClose variant="plain" sx={{ m: 1 }} />
                    <Typography
                        component="h1"
                        id="modal-title"
                        level="h1"
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
                        <WatchLater /> {el.time}
                    </Typography>
                </Sheet>
            </Modal>
        </>
    );
}