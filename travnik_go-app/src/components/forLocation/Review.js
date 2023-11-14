import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    TextField,
    Typography,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Chip,
    Stack,
} from '@mui/material';
import {Rating} from "@mui/lab";

const ReviewModal = ({ open, onClose }) => {
    const [rating, setRating] = useState(0);
    const [text, setText] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    const handleRatingChange = (value) => {
        setRating(value);
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
    };

    const handleClose = () => {
        setRating(0);
        setText('');
        setSelectedImage(null);
        onClose();
    };

    const handleSubmit = () => {
        onClose();
    };

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
            <DialogTitle><h3>Tell us, how was your visit?</h3></DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="body1" color="text.primary">
                            How would you rate your experience?
                        </Typography>
                        <Rating
                            name="simple-controlled"
                            value={rating}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }}
                            size={"large"}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1" color="text.primary">
                            When did you go?
                        </Typography>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-simple-select-autowidth-label">Select one</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                autoWidth
                                label="Age"
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1" color="text.primary">
                            Who did you go with?
                        </Typography>
                        <Stack direction="row" spacing={1} className={"mt-1"}>
                            <Chip label="Friends" onClick={() => {}} />
                            <Chip label="Family" onClick={() => {}} />
                            <Chip label="Solo" onClick={() => {}} />
                            <Chip label="Couples" onClick={() => {}} />
                            <Chip label="Business" onClick={() => {}} />
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1" color="text.primary" className={"mb-1"}>
                            Write your review
                        </Typography>
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            variant="outlined"
                            label="Your Review"
                            value={text}
                            onChange={handleTextChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            id="image-upload"
                            style={{ display: 'none' }}
                        />
                        <label htmlFor="image-upload">
                            <Button component="span" variant="outlined" color="primary">
                                Upload an Image
                            </Button>
                            {selectedImage && (
                                <Typography variant="subtitle1">{selectedImage.name}</Typography>
                            )}
                        </label>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary" variant={"contained"} className={"mx-3"}>
                    Send review
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ReviewModal;