import CalendarCard from "../../components/calendarCard";
import { Navbar } from "../../components/forHome/navbar";
import {Grid, Stack} from "@mui/material";
import { SearchByCategory, SearchByWord } from "../../components/calendarSearchbars";

function Calendar() {
    const data = [
        {
            image: "https://centralna.ba/wp-content/uploads/2023/10/received_1009472720280862.jpeg",
            title: "novi zivot",
            typotitle: `Predstava "Novi život"`,
            location: "Hrvatsko kazalište Travnik u Jankovićima",
            time: "19:30",
            date: "Oct 28",
            description: "Predstava “KRUGOVI” inspirirano djelima Ive Andrića u izvedbi Kazališta slijepih i slabovidnih “Novi život” Zagreb, režija Mario Kovač. I jos neke potrebne infornacije, kad sta kako gjde bla bla",
            categories: ["Culture"],
        },
        {
            image: "https://centralna.ba/wp-content/uploads/2023/10/received_2213112549025156.jpeg",
            title: "oblaci",
            typotitle: `Predstava "Oblaci"`,
            location: "Hrvatsko kazalište Travnik u Jankovićima",
            time: "19:30",
            date: "Oct 28",
            description: `Predstava “OBLACI” u izvedbi Hrvatskog Kazališta Travnik, igraju Renata Ignjić, Matej Baškarad i Antonio Bilić, režija Anto Bilić. Predstava je nagrađivana na festivalu “FEDRA” u Bugojnu i na “Festivalu festivala” u Trebinju.\n31.10. 2023 g. utorak sa početkom u 19:30 sati, ulaznice 6.00 KM.`,
            categories: ["Culture"],
        },
        {
            image: "https://centralna.ba/wp-content/uploads/2023/11/IMG_20231103_044157_143.jpg",
            title: "nova godina",
            typotitle: `Šankanje`,
            location: "Vlašić",
            time: "19:30",
            date: "Oct 28",
            description: `Festival “ŠANKANJE” postao je prepoznatljiv brend među mlađom populacijom i trenutno drži status najboljeg zimskog festivala u Bosni i Hercegovini. Prvo “Šankanje”...`,
            categories: ["Music", "Festival"],
        }
    ];
    return(
        <>
            <header>
                <Navbar />
                <div
                    id="intro"
                    className="bg-image"
                    style={{
                        "height": "20vh"
                    }}
                >

                </div>
            </header>
            <div className="container-fluid  mb-5">
                <div className="container d-flex align-items-center text-center h-100">
                    <div className="mx-auto my-4">
                        <h1 style={{ color: "#000" }}>TravnikGO Event Calendar 2023/24</h1>
                        <p>Explore events and plan your trip</p>
                    </div>
                </div>
                <div className={"container"}>
                    <Stack direction="row" spacing={3} className="mb-4 d-flex justify-content-start">
                        <SearchByCategory/>
                        <SearchByWord/>
                    </Stack>
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
                            <span className={"p-2 mb-0"} style={{ position: "absolute", backgroundColor: "rgba(0,0,0,0.8)", borderRadius: "3px", color: "#fff"}}>
                                <h4>MAR</h4>
                                <h2 className={"text-center m-0"}>5</h2>
                            </span>
                            <CalendarCard el={el} style={{ position: "absolute"}}/>
                        </div>

                    </Grid>

                    ))}
                    { data.map((el) => (
                        <Grid item xs="auto">
                            <div id={"card"} style={{ position: "relative"}}>
                            <span className={"p-2 mb-0"} style={{ position: "absolute", backgroundColor: "rgba(0,0,0,0.8)", borderRadius: "3px", color: "#fff"}}>
                                <h4>MAR</h4>
                                <h2 className={"text-center m-0"}>5</h2>
                            </span>
                                <CalendarCard el={el} style={{ position: "absolute"}}/>
                            </div>

                        </Grid>

                    ))}
                    { data.map((el) => (
                        <Grid item xs="auto">
                            <div id={"card"} style={{ position: "relative"}}>
                            <span className={"p-2 mb-0"} style={{ position: "absolute", backgroundColor: "rgba(0,0,0,0.8)", borderRadius: "3px", color: "#fff"}}>
                                <h4>MAR</h4>
                                <h2 className={"text-center m-0"}>5</h2>
                            </span>
                                <CalendarCard el={el} style={{ position: "absolute"}}/>
                            </div>

                        </Grid>

                    ))}
                </Grid>
            </div>

        </>
    );
}

export default Calendar;
