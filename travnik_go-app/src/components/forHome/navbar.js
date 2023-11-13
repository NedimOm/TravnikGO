import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import  '../../assets/css/main.css';
import { changeClassNameOnScroll } from "../../assets/javascript/skripta";
import {useEffect, useState} from "react";

export const Navbar = (props) => {
    useEffect(() => {
        changeClassNameOnScroll("navy", 2, "navbar-scrolled");

    }, []);

    const [activeNavItem, setActiveNavItem] = useState(props.page);
    const [hambClicked, setHambClicked] = useState(false);

    let hamburger = true;
    const handleNavItemClick = (item) => {
        setActiveNavItem(item);
    };

    return (
        <nav className={`navbar navbar-expand-sm fixed-top navbar-scroll navbar-dark ${hambClicked === true ? 'backgroundWhite' : ''} ${props.background === 'white' ? 'backgroundWhite' : '' }`}
             id="navy">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={require("../../assets/images/Logo_RGB_2-transparent.png")} alt="Avatar Logo" style={{width:'70px'}} className="rounded-pill"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavbar" onClick={()=>{setHambClicked(!hambClicked);}}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className={`nav-item ${activeNavItem === 'Home' ? 'active' : ''}`}>
                            <a
                                className={`nav-link ${activeNavItem === 'Home' ? 'active-link' : ''}`}
                                onClick={() => handleNavItemClick('Home')}
                                href="/"
                            >
                                Home
                            </a>
                        </li>
                        <li className={`nav-item ${activeNavItem === 'For you' ? 'active' : ''}`}>
                            <a
                                className={`nav-link ${activeNavItem === 'For you' ? 'active-link' : ''}`}
                                onClick={() => handleNavItemClick('For you')}
                                href="/for_you"
                            >
                                For you
                            </a>
                        </li>
                        <li className={`nav-item ${activeNavItem === 'Calendar' ? 'active' : ''}`}>
                        <a
                            className={`nav-link ${activeNavItem === 'Calendar' ? 'active-link' : ''}`}
                            onClick={() => handleNavItemClick('Calendar')}
                            href="/calendar"
                        >
                            Calendar
                        </a>
                    </li>
                        <li className={`nav-item ${activeNavItem === 'Tours' ? 'active' : ''}`}>
                            <a
                                className={`nav-link ${activeNavItem === 'Tours' ? 'active-link' : ''}`}
                                onClick={() => handleNavItemClick('Tours')}
                                href="/tours"
                            >
                                Tours
                            </a>
                        </li>
                        <li className={`nav-item ${activeNavItem === 'Locations' ? 'active' : ''}`}>
                            <a
                                className={`nav-link ${activeNavItem === 'Locations' ? 'active-link' : ''}`}
                                onClick={() => handleNavItemClick('Locations')}
                                href="/locations"
                            >
                                Locations
                            </a>
                        </li>
                        <li className={`nav-item ${activeNavItem === 'DidYouKnow' ? 'active' : ''}`}>
                            <a
                                className={`nav-link ${activeNavItem === 'DidYouKnow' ? 'active-link' : ''}`}
                                onClick={() => handleNavItemClick('DidYouKnow')}
                                href="#"
                            >
                                Did you know?
                            </a>
                        </li>
                    </ul>
                    <div>

                    </div>
                </div>
            </div>
        </nav>
    );
}