import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const ContactUs = () => {
    const boxStyle = {
        padding: "16px",
        textAlign: "center",
        backgroundColor: "whitesmoke",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
    };

    const textStyles = {
        marginBottom: "8px", // Spacing between text lines
    };

    const iconStyles = {
        verticalAlign: "middle",
        marginRight: "8px",
    };

    return (
        <Box style={boxStyle}>
            <Typography variant="h6" color="primary">
                Contact Us
            </Typography>
            <div style={textStyles}>
                <PhoneIcon style={iconStyles} />
                <Typography variant="body1">
                    Phone: +1 (123) 456-7890
                </Typography>
            </div>
            <div style={textStyles}>
                <EmailIcon style={iconStyles} />
                <Typography variant="body1">
                    Email: challenge@itreboot.ba
                </Typography>
            </div>
        </Box>
    );
};

export default ContactUs;