import React, {useEffect, useState} from 'react';
import Sidebar from "../../components/forAdmin/sidebar";
import AddLocationDrawer from "../../components/forAdmin/addLocationDrawer";
import LocationsTable from "../../components/forAdmin/locationsTable";
import {getLocations} from "../../api";
function AdminLocations({user, isAuthenticated}) {
    const [locations, setLocations] = useState([]);
    useEffect(() => {
        getLocations(setLocations);
    }, []);

    return (
        <div>
            <header>
                <Sidebar />
                <div
                    id="intro"
                    className="bg-image"
                    style={{
                        background: "whitesmoke",
                        "height": "100vh"
                    }}
                >
                    <div className="mask text-white mt-4">
                        <div className="container">
                            <div className="mt-5">
                                <h2 className="text-center m-2" style={{color: 'black'}}>Locations</h2>
                                <div className="mb-1 d-flex justify-content-end">
                                    <AddLocationDrawer getLocations={getLocations} setLocations={setLocations}/>
                                </div>
                                <LocationsTable locations={locations} getLocations={getLocations} setLocations={setLocations}/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default AdminLocations;