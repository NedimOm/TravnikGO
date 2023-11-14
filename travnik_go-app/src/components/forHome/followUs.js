import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram} from '@fortawesome/free-brands-svg-icons'

const FollowUs = () => {
    const boxStyle = {

        textAlign: "center",
        backgroundColor: "white",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
    };

    const iconStyles = {
        verticalAlign: "middle",
        marginRight: "8px",
    };

    return (
        <Box style={boxStyle}>
            <Typography variant="h6" color="primary" className="mb-1 mt-3">
                Follow us on social media
            </Typography>
            <div className="mb-3 mt-3">
                <Typography variant="body1">
                    <FacebookOutlinedIcon color="primary" style={iconStyles} />
                    Facebook
                </Typography>
            </div>
            <div className="pb-2">
                <Typography variant="body1">
                    <FontAwesomeIcon icon={faInstagram} style={iconStyles} size="lg"/>
                    Instagram
                </Typography>
            </div>
        </Box>
    );
};

export default FollowUs;