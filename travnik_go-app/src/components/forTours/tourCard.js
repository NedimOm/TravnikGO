import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import Button from '@mui/material/Button';

export default function TourCard({el}) {
    const theme = useTheme();

    return (
        <Card sx={{ display: 'flex', mb: 3 }} style={{backgroundColor: "#f5f5f3"}}>
            <CardMedia
                component="img"
                sx={{ width: 200 }}
                image={el.image}
                alt={el.place}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="subtitle2" color="text.secondary">
                        Stop {el.stop}
                    </Typography>
                    <Typography component="div" variant="h5">
                        {el.place}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {el.description}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        <Button variant="outlined" color={"success"}>TAKE A CHALLENGE<SportsHandballIcon/></Button>
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
}