import React, {useState} from 'react';
import Carousel from 'react-material-ui-carousel';
import {Paper, Button, Grid, Popover} from '@mui/material';
import {Navbar} from "../../components/forHome/navbar";
import {SearchByCategory, SearchByWord} from "../../components/forCalendar/calendarSearchbars";
import {Rating} from "@mui/lab";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Box from "@mui/joy/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/joy/Typography";
import CardActions from "@mui/material/CardActions";
import ReviewModal from "../../components/forLocation/Review";

const images = [
    '/slike/MyPlace1.jpg',
    '/slike/MyPlace2.jpg',
    '/slike/MyPlace3.jpg',
    '/slike/MyPlace5.jpg',
    '/slike/MyPlace6.jpg',
    '/slike/MyPlace7.jpg',
    '/slike/MyPlace8.jpg',
];

const data = {
    rating : 4,
}

function ImageCarousel() {
    return (
        <Box>
            <Carousel
                showThumbs={false}
                showStatus={false}
                showArrows={true}
            >
                {images.map((item, i) => (
                    <div key={i}>
                        <img src={item} alt={`Image ${i}`} style={{width:'100%', aspectRatio: "4/3"}} />
                    </div>
                ))}
            </Carousel>
        </Box>
    );
}

export default function Location(){
    const [isReviewModalOpen, setReviewModalOpen] = useState(false);

    const openReviewModal = () => {
        setReviewModalOpen(true);
    };

    const closeReviewModal = () => {
        setReviewModalOpen(false);
    };
    return (
        <>
            <header>
                <Navbar background={"white"} page={"Locations"}/>
                <div
                    style={{
                        "height": "13vh"
                    }}
                >
                </div>
            </header>
            <div className="container d-flex">
                <Stack>
                    <h2 style={{ color: "#000" }}>My Place Caffe</h2>
                    <Rating name="read-only" value={data.rating} readOnly />
                    <Box sx={{ display: 'flex',
                        flexWrap: 'wrap',
                        width:'60vw',
                        height:'50vh',
                        alignItems: 'center',
                        '@media (max-width: 700px)': {
                            justifyContent: 'center',
                            width:'100%',
                            height:'100%',
                        },}}>
                        <Card style={{width: '400px', height: '600px'}}>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Kako bi još jednom potvrdili da je kvalitet ustvari prioritet, na radost svih gostiju,
                                    posjetitelja i građana Travnika, u ljeto 2019. godine, otvoren je My Place garden odnosno bašta
                                    koja nudi poseban ugođaj za vrijeme ljetnih dana sa gotovo od preko 140 sjedećih mjesta.
                                    Najljepša u kasnim popodnevnim satima, ova terasa glasi za jednu od najljepših u Travniku i okolici.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Grid container justifyContent="start">
                                    <Button size="small" onClick={openReviewModal}>
                                        Leave a Review
                                    </Button>

                                </Grid>
                            </CardActions>
                        </Card>
                        <div style={{width:'600px', height: '600px'}}>
                            <ImageCarousel/>
                        </div>
                    </Box>
                    <div>
                        <h2>Reviews</h2>
                    </div>
                    <ReviewModal open={isReviewModalOpen} onClose={closeReviewModal} />

                </Stack>
            </div>

        </>
    )
}

