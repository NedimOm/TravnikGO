import CalendarCard from "../../components/forCalendar/calendarCard";
import { Navbar } from "../../components/forHome/navbar";
import {Grid, Popover} from "@mui/material";
import { SearchByCategory, SearchByWord } from "../../components/forCalendar/calendarSearchbars";
import {useState} from "react";
import Button from "@mui/material/Button";
import OurBottomNavigation from "../../components/forHome/bottomNavigation";
import Link from "@mui/material/Link";

function Locations() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const data = [
        {
            image: "https://lh3.googleusercontent.com/p/AF1QipNIEVzTnTIWqLAiuhb3YCNv-sDlwTYc23ItCdA=s680-w680-h510",
            title: "hari",
            typotitle: `Cevabdzinica Hari`,
            location: "Donja čaršija bb",
            time: "08:00 - 22:00",
            description: "Okusi Travnik i najpoznatije ćevape u regionu koji jedinstvenim mirisom i okusom osvajaju i ona najzahtjevnija nepca u nezaobilaznoj gastro stanici u samom srcu BiH",
            categories: ["Restaurant"],
        },
        {
            image: "https://lh3.googleusercontent.com/p/AF1QipPyj6hoalc9NrkeDcKlpeFnO-dTfJaQitf1WKv2=s680-w680-h510",
            title: "my place",
            link: "myPlace",
            typotitle: `Caffe My Place"`,
            location: "Bosanska 33",
            time: "07:00 - 23:00",
            description: `Caffe "in the heart of our vibrant city, come and visit us.. See you.`,
            categories: ["Caffe"],
        },
        {
            image: "https://www.aba.ba/wp-content/uploads/2019/06/Benzinske-pumpe-ABA.jpg",
            title: "aba",
            typotitle: `Benzinska pumpa ABA`,
            location: "Šumeće bb",
            time: "00:00 - 24:00",
            description: `Od početka rada na benzinskim pumpama ABA nastojima za svoje kupce osigurati isključivo najbolja i najkvalitetnija goriva. U tu svrhu imamo potpisane ugovore sa INA rafinerijom...`,
            categories: ["Gas station"],
        }
    ];

    return(
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
            <div className="container-fluid mb-4">
                <div className="container d-flex align-items-center text-center h-100">
                    <div className="mx-auto my-4">
                        <h3 style={{ color: "#000" }}>TravnikGO Locations</h3>
                        <p>Explore locations in Travnik</p>
                        <Grid item xs={"auto"}>
                            <Button aria-describedby={id} variant="outlined" onClick={handleClick}>
                                FILTER LOCATIONS
                            </Button>
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                            >
                                <div className={"m-3"}>
                                    <SearchByCategory />
                                </div>
                                <div className={"m-3"}>
                                    <SearchByWord />
                                </div>
                            </Popover>
                        </Grid>
                    </div>
                </div>

                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                >
                    { data.map((el) => (
                        <Grid item xs="auto">
                            <div id={"card"} style={{ position: "relative"}}>
                                <CalendarCard el={el} style={{ position: "absolute"}}/>
                            </div>
                        </Grid>
                    ))}
                    { data.map((el) => (
                        <Grid item xs="auto">
                            <div id={"card"} style={{ position: "relative"}}>
                                <CalendarCard el={el} style={{ position: "absolute"}}/>
                            </div>
                        </Grid>
                    ))}
                    { data.map((el) => (
                        <Grid item xs="auto">
                            <div id={"card"} style={{ position: "relative"}}>
                                <CalendarCard el={el} style={{ position: "absolute"}}/>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>
            <OurBottomNavigation/>
        </>
    );
}

export default Locations;
