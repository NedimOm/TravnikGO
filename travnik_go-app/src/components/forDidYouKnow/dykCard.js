import React from 'react';
import { Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '70vh',
    marginBottom: '3vh'
};

const transparentCardStyle = {
    width: '100%',
    maxWidth: 400,
    padding: '30px',
    textAlign: 'center',
    borderRadius: 12,
    backgroundColor: 'rgba(50, 169, 145, 0.65)',
    color: 'white',
};

const lightbulbIconStyle = {
    color: '#ffcc00',
    fontSize: 40,
    marginBottom: 9,
};

const whiteTextStyle = {
    color: 'white',
};

const DidYouKnowCard = () => {
    return (
        <div style={cardContainerStyle}>
            <Grid container spacing={1} justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={6}>
                    <Card style={transparentCardStyle}>
                        <CardContent>
                            <div style={lightbulbIconStyle}>
                                <LightbulbIcon />
                            </div>
                            <Typography style={whiteTextStyle} variant="h4" gutterBottom className={"pb-2"}>
                                Did you know?
                            </Typography>
                            <Typography style={whiteTextStyle} variant="h6">
                                The city of Travnik was the capital city of the governors of Bosnia from 1699 to 1850.
                            </Typography>
                            <Typography style={whiteTextStyle} variant="body2" className={"pt-4"}>
                                Come back tomorrow for more facts about Travnik
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} style={{maxWidth: 'auto'}}>
                    <Card style={{ width: '100%' }}>
                        <CardMedia
                            component="img"
                            height="auto"
                            image="https://bosnianhistorycom.files.wordpress.com/2019/01/travnik.jpg"
                        />
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default DidYouKnowCard;
