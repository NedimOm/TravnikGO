import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import  '../../assets/css/main.css';
import { changeClassNameOnScroll } from "../../assets/javascript/skripta";
import {useEffect} from "react";
import { proba } from "../../api";

export const Navbar = () => {
    useEffect(() => {
        changeClassNameOnScroll("navy", 2, "navbar-scrolled");
    }, []);

    return (
        <nav className="navbar navbar-expand-sm fixed-top navbar-scroll" id="navy">
            <div className="container-fluid">
                <a href="#">
                    <img src={require("../../assets/images/travnikgo-transparent-logo-cropped.png")} style={{"width":"220px"}}/>
                </a>
                <div className="collapse navbar-collapse" id="navbarExample01">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <button
                                onClick={proba}
                            >
                                Proba za axios
                            </button>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
                                rel="nofollow"
                                target="_blank"
                            >Demo</a
                            >
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="https://mdbootstrap.com/docs/standard/"
                                target="_blank"
                            >Events</a
                            >
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}