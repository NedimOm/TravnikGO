import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Typography from "@mui/joy/Typography";

export default function OurBottomNavigation() {

    return (
        <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor: '#708090'}}>
            <div className={"container-fluid"}>
                <Typography variant="body2" style={{color: 'whitesmoke'}}>
                    TravnikGO
                    &copy; 2023
                </Typography>
                    <a href="#top" className="back-to-top">
                        <Typography variant="body2" style={{color: 'whitesmoke'}}>Back to top</Typography>
                    </a>
                </div>
            </nav>
    );
}