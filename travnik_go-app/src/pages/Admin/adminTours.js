import React, {useState} from 'react';
import EventsTable from "../../components/forAdmin/eventsTable";
import Sidebar from "../../components/forAdmin/sidebar";
import AddEventDrawer from "../../components/forAdmin/addEventDrawer";
function AdminTours({user, isAuthenticated}) {
    //setTimeout(protect, 120);

    /*function protect()
    {
        if (!isAuthenticated && user == null)
            return (<Navigate to={"/"}/>)
    }*/

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
                                <h2 className="text-center m-2" style={{color: 'black'}}>Tours</h2>
                                <div className="mb-1 d-flex justify-content-end">
                                    <AddEventDrawer/>
                                </div>
                                <EventsTable/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default AdminTours;