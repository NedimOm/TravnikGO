import CalendarCard from "../../components/forCalendar/calendarCard";
import { Navbar } from "../../components/forHome/navbar";
import {Grid, Popover} from "@mui/material";
import { SearchByCategory, SearchByWord } from "../../components/forCalendar/calendarSearchbars";
import TextField from "@mui/material/TextField";
import * as React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import {SERVER_URL} from "../../constants";
import queryString from 'query-string';
import Button from "@mui/material/Button";
import OurBottomNavigation from "../../components/forHome/bottomNavigation";

function ForYou() {
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const [data, setData] = useState(null)
    useEffect(() => {
        let string = JSON.parse(localStorage.getItem('data'));
        const encodedData = queryString.stringify(string);
        if(encodedData === ''){
            axios.get(`${SERVER_URL}/forYou/getActivites`).then(resp => {
                let temp = []
                resp.data.activities.map((el)=>{
                    temp.push({
                        image: `slike/${el.id}.jpg`,
                        title: el.title,
                        typotitle: el.title,
                        location: el.address,
                        time: el.starts !== null ? (new Date(el.starts).toLocaleTimeString('bs', { hour: '2-digit', minute: '2-digit' })) : null,
                        date: el.starts !== null ? (new Date(el.starts).toLocaleTimeString('en-US', { day: '2-digit', month: '2-digit', timeZone: 'Europe/Sarajevo' })) : null,
                        description:el.description,
                        categories: el.categories.split(',')
                    })
                })
                setData(temp);
            });
        }else {
            axios.get(`${SERVER_URL}/forYou/getSpecialActivities/${encodedData}`).then(resp => {
                let temp = []
                resp.data.activities.map((el)=>{
                    temp.push({
                        image: `slike/${el.id}.jpg`,
                        title: el.title,
                        typotitle: el.title,
                        location: el.address,
                        time: el.starts !== null ? (new Date(el.starts).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Sarajevo' })) : null,
                        date: el.starts !== null ? (new Date(el.starts).toLocaleTimeString('en-US', { day: '2-digit', month: '2-digit', timeZone: 'Europe/Sarajevo' })) : null,
                        description:el.description,
                        categories: el.categories.split(', ')
                    })
                })
                    setData(temp);
            });
        }
    }, [])
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return(
        <>
            <header>
                <Navbar background={"white"} page={"For you"}/>
                <div
                    id="intro"
                    className="bg-image"
                    style={{
                        "height": "13vh"
                    }}
                >

                </div>
            </header>
            <div className="container-fluid  mb-5">
                <div className="container d-flex align-items-center text-center h-100">
                    <div className="mx-auto my-4">
                        <h3 style={{ color: "#000" }}>Events we recommend for you</h3>
                        <p>Explore events tailored for you</p>
                        <Grid item xs={"auto"}>
                            <Button aria-describedby={id} variant="outlined" onClick={handleClick}>
                                FILTER EVENTS
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
                                <div className={"m-3"}>
                                    <TextField
                                        type="date"
                                        name="dateOfEntry"
                                        style={{ border: 'none', outline: 'none' }}
                                    />
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
                    {data != null && data.map((el) => (
                        <Grid item xs="auto" key={el.title}>
                            { el.date !== '' &&
                                <div id={"card"} style={{ position: "relative"}}>
                                    { el.date !== null &&
                                        <span className={"p-2 mb-0"} style={{ position: "absolute", backgroundColor: "rgba(0,0,0,0.8)", borderRadius: "3px", color: "#fff"}}>
                                            <h4>{months[el.date.split('/')[0] - 1]}</h4>
                                            <h2 className={"text-center m-0"}>{[el.date.split('/')[1].split(',')[0]]}</h2>
                                        </span>
                                    }
                                    <CalendarCard el={el} style={{ position: "absolute"}} key={el.title}/>
                                </div>}
                        </Grid>

                    ))}
                </Grid>
            </div>
            <OurBottomNavigation/>
        </>
    );
}

export default ForYou;
