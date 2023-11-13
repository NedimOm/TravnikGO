import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const ContactUs = () => {
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
                Contact Us
            </Typography>
            <div className="mb-3 mt-3">
                <Typography variant="body1">
                    <PhoneIcon style={iconStyles} />
                    Phone: +1 (123) 456-7890
                </Typography>
            </div>
            <div className="pb-4">
                <Typography variant="body1">
                    <EmailIcon style={iconStyles} />
                    Email: challenge@itreboot.ba
                </Typography>
            </div>
        </Box>
    );
};

export default ContactUs;