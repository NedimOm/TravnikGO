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
            <DialogTitle>Write a Review</DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Rating
                            name="simple-controlled"
                            value={rating}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
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
                <Button onClick={handleSubmit} color="primary">
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ReviewModal;