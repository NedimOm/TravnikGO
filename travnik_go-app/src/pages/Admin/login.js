import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Navbar} from "../../components/forHome/navbar";
import LoginForm from "../../components/forAdmin/loginForm";

export default function SignIn() {

    return (
        <>
            <header>
                <div
                    id="intro"
                    className="bg-image"
                    style={{
                        background: "whitesmoke",
                        "height": "100vh"
                    }}
                >
                    <div className="container d-flex align-items-center text-center h-100">
                        <div className="mx-auto">
                            <LoginForm/>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}