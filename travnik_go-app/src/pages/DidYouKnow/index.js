import { Navbar } from "../../components/forHome/navbar";
import OurBottomNavigation from "../../components/forHome/bottomNavigation";
import * as React from "react";
import DidYouKnowCard from "../../components/forDidYouKnow/dykCard";

function DidYouKnow() {

    return(
        <>
            <header className={"m-3 mb-5"}>
                <Navbar background={"white"} page={"DidYouKnow"}/>
                <div
                    style={{
                    "height": "13vh"
                }}
                >
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "auto", // Adjust the height as needed
                    }}
                >
                    <DidYouKnowCard />
                </div>
            </header>

            <OurBottomNavigation fixed={"yes"}/>
        </>
    );
}

export default DidYouKnow;
