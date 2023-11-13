import 'bootstrap/dist/css/bootstrap.css';
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../../assets/css/App.css';
import  '../../assets/css/main.css';
import { Navbar } from "../../components/forHome/navbar";
import { useGeolocated } from "react-geolocated";
import * as React from "react";
import TourTabs from "../../components/forTours/tabs";
import TourMap  from "../../components/forTours/tourMap";
import { useState, useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import GroupsIcon from '@mui/icons-material/Groups';
import Typography from "@mui/material/Typography";
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import TourStepper from "../../components/forTours/stepper";

const chipsColors = {
    History: "primary",
    Food: "warning",
}

function TourForYou(){
    const data = [
        {
            stop: "A",
            place: "Sarena Dzamija, Donja Carsija, Travnik",
            description: "Sarena dzamija or Colorful Mosque is one of most magnificent mosques in Bosnia and Herzegovina",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/%C5%A0arena_d%C5%BEamija.jpg/800px-%C5%A0arena_d%C5%BEamija.jpg",
        },
        {
            stop: "B",
            place: "Museum Birth House of Nobel Prize Winner Ivo Andric, Zenjak bb, Travnik",
            description: "Travnik is a birthplace of the Nobel prize winner, Ivo Andrić and his house is preserved as a museum. Travnik tourism is based on history and geography.",
            image: "https://visitbih.ba/wp-content/uploads/2018/05/rodna-kuca-ive-andrica-u-travniku.jpg",
        },
        {
            stop: "C",
            place: "Ćevabdžinica Hari, Žitarnica bb, Travnik",
            description: "Ćevapi, ćevapčići is a grilled dish of minced meat found traditionally in the countries of southeast Europe (the Balkans). hey are usually served in groups of five to ten pieces on a plate or in a flatbread (lepinja or somun), often with chopped onions, kajmak, ajvar (optional), and salt. ",
            image: "https://scontent.fsjj2-1.fna.fbcdn.net/v/t39.30808-6/366381230_677743467720359_5116291423900547176_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=P7PYrOjGjH8AX_L8YLs&_nc_ht=scontent.fsjj2-1.fna&oh=00_AfB6QYcTabdTcCu1Ywwnx_u9_oGYf7ku73RRRZhVjlqA7g&oe=6553FE86",
        },
        {
            stop: "D",
            place: "Stari Grad, Old Town, Ulica Varos, Travnik",
            description: "Enjoy beautiful central Bosnia town with its unique arhitecture. Town is full of Traditional Bosnian houses.",
            image: "https://furaj.ba/wp-content/uploads/2021/03/Travnik-tvrdava5-e1684992707863-1024x672.jpg",
        }
    ]

    const aboutData = {
        about: "Let's complete your visit to central Bosnia by visiting Travnik, truly natural and cultural treasure of the region. Refresh ourselves spirit at the Šarana džamija, take photos in every place, learn the rich history of medieval Bosnia. Enrich your knowledge about the Ottoman heritage in Travnik as the capital of Ottoman Bosnia for more than 150 years and try the best Ćevapi and Cheese in the country.",
        type: ["History", "Food"],
        ages: "7-77",
        duration: "3-4 hours",
    }

    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, [coords]);

    return(
        <>
            <header>
                <Navbar background={"white"} page={"Tours"}/>
                <div
                    id="intro"
                    className="bg-image"
                    style={{
                        "height": "30vh"
                    }}
                >
                    <div className="mask text-black">
                        <div className="container d-flex align-items-center text-center h-100">
                            <div className="mx-auto">
                                <h4 style={{ color: "rgba(0, 0, 0, 0.69)" }}>
                                    This App can generate your tour in Travnik. Just enter your location and you can start your adventure.
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {
                loading ? (
                    <div className={"container align-items-center d-flex"}>
                        <div className={"mx-auto"}>
                            <CircularProgress color="success" />
                        </div>
                    </div>
                ) : (
                    <>
                        <div className={"container"}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                minHeight="10vh"
                            >
                                <Button color={"success"} variant="contained" size={"large"}><AutoFixHighIcon/>Generate tour by my location</Button>
                            </Box>

                            <TourTabs props={coords}/>

                            <Stack direction="row" spacing={2} className={"my-3"}>
                                <TourStepper />
                                <div className={"container-fluid"}>
                                    <TourMap />
                                </div>
                            </Stack>
                        </div>
                        <div className={"container mt-4"}>
                            <section>
                                <p><b>About Tour</b></p>
                                <p>{aboutData.about}</p>
                                <Divider/>
                                <div className={"mt-3"}>
                                    <Typography variant="body2" color="text.primary" className={"mb-2"}>
                                        <GroupsIcon/><span className={"mx-3 py-3"}>Ages {aboutData.ages}</span>
                                    </Typography>
                                    <Typography variant="body2" color="text.primary" className={"mb-2"}>
                                        <HourglassEmptyIcon /><span className={"mx-3 py-3"}>Duration: {aboutData.duration}</span>
                                    </Typography>
                                    <Stack direction="row" spacing={2} className={"my-3"}>
                                        {aboutData.type.map((t) =>
                                            <Chip label={t} color={chipsColors[t]} size="large" className={"p-3"}/>
                                        )}
                                    </Stack>
                                    <Divider/>
                                </div>

                            </section>
                        </div>
                    </>
                )
            }

        </>
    );
}

export default TourForYou;
