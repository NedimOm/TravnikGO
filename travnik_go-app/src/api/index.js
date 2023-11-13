import axios from 'axios';
import {SERVER_URL} from "../constants";


export const proba = () => {
    console.log("evo me");
    axios.get(`${SERVER_URL}/proba`).then(resp => {
        console.log(resp);
    });
}

export const proba2 = () => {
    console.log("evo me");
    axios.get(`${SERVER_URL}/forYou/getActivites`).then(resp => {
        console.log(resp);
    });
}

export const proba3 = () => {
    console.log("evo me");
    axios.get(`${SERVER_URL}/forYou/getCategories`).then(resp => {
        console.log(resp);
    });
}

export async function getLocations(setLocations)
{
    await axios.get('http://localhost:3005/admin/getLocations').then(resp => {
        setLocations(resp.data.locations);
        console.log(resp.data.locations);
    });
}

export async function getLocation(setData, key)
{
    await axios.get(`http://localhost:3005/admin/getLocation/${key}`).then(resp => {
        console.log(resp.data);
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
        console.log(resp);
    });
}


export const addLocation = (dataObject) => {
    console.log("Location added");
    axios.post('http://localhost:3005/admin/addlocation', dataObject).then(resp => {
        console.log(resp);
    });
}