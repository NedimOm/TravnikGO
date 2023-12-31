import axios from 'axios';

export const proba = () => {
    console.log("evo me");
    axios.get('http://localhost:3005/proba').then(resp => {
        console.log(resp);
    });
}

export async function getLocations(setLocations)
{
    await axios.get('http://localhost:3005/admin/getLocations').then(resp => {
        setLocations(resp.data.locations);
    });
}

export async function getLocation(setData, key)
{
    await axios.get(`http://localhost:3005/admin/getLocation/${key}`).then(resp => {
        setData(resp.data.location[0]);
    });
}

export async function deleteLocation(key)
{
    await axios.delete(`http://localhost:3005/admin/deletelocation/${key}`).then(resp => {
        //console.log(resp);
    });
}

export async function updateLocation(dataObject, key){
    console.log("Location added");
    await axios.put(`http://localhost:3005/admin/updatelocation/${key}`, dataObject).then(resp => {
    });
}


export const addLocation = (dataObject) => {
    console.log("Location added");
    axios.post('http://localhost:3005/admin/addlocation', dataObject).then(resp => {
    });
}

export const getCalendarEvents = () => {
    axios.get('http://localhost:3005/calendar').then(res => {
        console.log(res);
    });
}