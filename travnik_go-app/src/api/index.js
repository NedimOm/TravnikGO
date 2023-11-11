import axios from 'axios';
export const proba = () => {
    console.log("evo me");
    axios.get('http://localhost:3005/proba').then(resp => {
        console.log(resp);
    });
}

export const getCalendarEvents = () => {
    axios.get('http://localhost:3005/calendar').then(res => {
        console.log(res);
    });
}