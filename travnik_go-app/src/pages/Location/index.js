import React, {useState} from 'react';
import Carousel from 'react-material-ui-carousel';
import {Button, Grid, Popover} from '@mui/material';
import {Navbar} from "../../components/forHome/navbar";
import {Rating} from "@mui/lab";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Box from "@mui/joy/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/joy/Typography";
import CardActions from "@mui/material/CardActions";
import ReviewModal from "../../components/forLocation/Review";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import OurBottomNavigation from "../../components/forHome/bottomNavigation";

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
                        "height": "20vh"
                    }}
                >
                </div>
            </header>
            <div className="container d-flex">
                <Stack>
                    <h2 style={{ color: "#000" }}>My Place Caffe</h2>
                    <Stack direction={"row"}>
                        <Rating name="read-only" value={data.rating} readOnly />
                        <Link href="#" color="inherit" className={"mx-3"}>103 reviews</Link>
                        <Button size="small" onClick={openReviewModal}>
                            <b>Leave a Review</b>
                        </Button>
                    </Stack>
                    <Divider className={"my-4"}/>
                    <Box sx={{ display: 'flex',
                        flexWrap: 'wrap',
                        width:'60vw',
                        height:'50vh',
                        alignItems: 'center',
                        '@media (max-width: 700px)': {
                            justifyContent: 'center',
                            width:'100%',
                            height:'100%',
                        }}}>
                        <Grid
                            container fluid
                            direction="row"
                            justifyContent="start"
                            alignItems="start"
                            className={"mb-4"}
                            spacing={4}
                        >
                            <Grid item xs={12} md={6} lg={6}>
                                <i>About</i>
                                <p>In order to once again confirm that quality has created a priority, to the joy of all guests, visitors and citizens of Travnik, My Place garden was opened in the summer of 2019, i.e. a garden that offers a special atmosphere during summer days with almost over 140 seats. Most beautiful in the late afternoon, this terrace is considered one of the most beautiful in Travnik and its surroundings.</p>
                                <Divider className={"mb-3"}/>
                                <div>
                                    <h2>Reviews</h2>
                                    <div className={"my-2"}>
                                        <Stack direction="row" spacing={2}>
                                            <Avatar
                                                alt={`Avatar 1`}
                                                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn8P6POnmXE2YJlFMqlJ-b2F_t8bdqTq4CAb-mQWDeI813MCCXefNOg9RjN2AQZwPzy3Y&usqp=CAU`}
                                            />
                                            <Stack>
                                                <Rating name="size-small" value={data.rating} readOnly size={"small"}/>
                                                <span className={"text-secondary"}>Jul 2023</span>
                                                <div className={"my-2"}>Classy and cultural place, pleasant staff. Great atmosphere, all recommendations!</div>
                                            </Stack>

                                        </Stack>
                                    </div>
                                    <div className={"my-2"}>
                                        <Stack direction="row" spacing={2}>
                                            <Avatar
                                                alt={`Avatar 2`}
                                                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSla-p7MqWVSLL2rpSQHlxEO6mKceKYPvZjo4oslefoeXE7-oMcRHP5IfT3qgllHC8kKvQ&usqp=CAU`}
                                            />
                                            <Stack>
                                                <Rating name="size-small" value={data.rating} readOnly size={"small"}/>
                                                <span className={"text-secondary"}>Sep 2023</span>
                                                <div className={"my-2"}>My Place is a place for young people. The service is excellent...<Link href="#" color="inherit">Show more</Link></div>
                                                <img style={{width: "150px"}} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZU8EY7qQfqRGinAWXmd_vD1i9tBaDI7Ug5g&usqp=CAU"} alt={"kafica"}/>
                                            </Stack>
                                        </Stack>
                                    </div>
                                    <div className={"my-2"}>
                                        <Stack direction="row" spacing={2}>
                                            <Avatar
                                                alt={`Avatar 3`}
                                                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLg7YYue_VyRsQLCwmguYP8nSLBwe24G8WgqJr8i_YxHwyHXbn9wqkZXAwdAvSGF9kVMk&usqp=CAU`}
                                            />
                                            <Stack>
                                                <Rating name="size-small" value={data.rating} readOnly size={"small"}/>
                                                <span className={"text-secondary"}>Dec 2022</span>
                                                <div className={"my-2"}>My Place is a place for young people. The service is excellent and friendly. The only complaint is the loud music, which is practically impossible to talk to.</div>
                                            </Stack>

                                        </Stack>
                                    </div>
                                </div>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Button className={"mx-auto"} variant="outlined" size={"large"}>Show more</Button>
                                </Box>

                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <div style={{width:'600px', height: '600px'}}>
                                    <ImageCarousel/>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </Stack>
            </div>
            <ReviewModal open={isReviewModalOpen} onClose={closeReviewModal} />
            <div>
                <OurBottomNavigation fixed={"yes"}/>
            </div>
        </>
    )
}

