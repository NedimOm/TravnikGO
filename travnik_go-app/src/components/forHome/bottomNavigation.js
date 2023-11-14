import * as React from 'react';
import Typography from "@mui/joy/Typography";
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';

export default function OurBottomNavigation(props) {

    return (
        <nav className={`navbar navbar-expand-sm navbar-dark`}
             style={{backgroundColor: '#708090', position: `${props.fixed === 'yes' ? 'fixed' : 'relative'}`,
                    bottom: 0,
                    left: 0,
                    right: 0}}>
            <div className={"container-fluid"}>
                <Typography variant="body2" style={{color: 'whitesmoke'}}>
                    TravnikGO
                    &copy; 2023
                </Typography>
                    <a href="#top" className="back-to-top">
                        <Typography variant="body2" style={{color: 'whitesmoke'}}><ArrowCircleUpOutlinedIcon/></Typography>
                    </a>
                </div>
            </nav>
    );
}