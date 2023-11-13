import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import EventDetailsModal from "./eventDetailsModal";
import { Place, WatchLater } from "@mui/icons-material";

const chipsColors = {
    Music: "success",
    Culture: "primary",
    Festival: "warning",
    Restaurant: 'info',
    Caffe: 'secondary',
    'Gas station' : 'error',
    Sport: 'error',
    Food : 'info'
}

export default function CalendarCard({el}) {
    return (
        <div>
            <Card sx={{ maxWidth: 345, minWidth: 345, height: 510}} style={{backgroundColor: "#f5f5f3"}}>
                <CardMedia
                    sx={{ height: 200 }}
                    image={el.image}
                    title={el.title}
                />
                <CardContent>
                    <Stack direction="row" spacing={1} className={"mb-3"}>
                        {el.categories.map((c) =>
                            <Chip label={c} color={chipsColors[c]} />
                        )}
                    </Stack>
                    <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: "bold"}}>
                        {el.typotitle}
                    </Typography>
                    <Typography variant="body2" color="text.primary" className={"mb-2"}>
                        <Place /> {el.location}
                    </Typography>
                    <Typography variant="body2" color="text.primary" className={"mb-2"}>
                        {el.time != null &&
                            <>
                                <WatchLater /> {el.time}
                            </>
                        }
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {el.description.substring(0, 175)}...
                    </Typography>
                </CardContent>
                <CardActions sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                }}>
                    <EventDetailsModal el={el}/>
                </CardActions>
            </Card>

        </div>
    );
}