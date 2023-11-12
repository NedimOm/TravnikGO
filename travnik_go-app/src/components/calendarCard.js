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
    'Gas station' : 'error'
}

export default function CalendarCard({el}) {
    /*const data = [
        {
            image: "https://centralna.ba/wp-content/uploads/2023/10/received_1009472720280862.jpeg",
            title: "novi zivot",
            typotitle: `Predstava "Novi život"`,
            location: "Hrvatsko kazalište Travnik u Jankovićima",
            time: "19:30",
            date: "Oct 28",
            description: "Predstava “KRUGOVI” inspirirano djelima Ive Andrića u izvedbi Kazališta slijepih i slabovidnih “Novi život” Zagreb, režija Mario Kovač.",
        },
        {
            image: "https://centralna.ba/wp-content/uploads/2023/10/received_2213112549025156.jpeg",
            title: "oblaci",
            typotitle: `Predstava "Oblaci"`,
            location: "Hrvatsko kazalište Travnik u Jankovićima",
            time: "19:30",
            date: "Oct 28",
            description: `Predstava “OBLACI” u izvedbi Hrvatskog Kazališta Travnik, igraju Renata Ignjić, Matej Baškarad i Antonio Bilić, režija Anto Bilić. Predstava je nagrađivana na festivalu “FEDRA” u Bugojnu i na “Festivalu festivala” u Trebinju.`,
        },
        {
            image: "https://centralna.ba/wp-content/uploads/2023/11/IMG_20231103_044157_143.jpg",
            title: "nova godina",
            typotitle: `Šankanje`,
            location: "Vlašić",
            time: "19:30",
            date: "Oct 28",
            description: `Festival “ŠANKANJE” postao je prepoznatljiv brend među mlađom populacijom i trenutno drži status najboljeg zimskog festivala u Bosni i Hercegovini. Prvo “Šankanje” organizovano je 2011. godine i od tada se tradicionalno održava na planini Vlašić u drugoj polovini decembra, okupljajući sve veći broj posjetilaca iz godine u godinu. Program Šankanje nudi: 2 noćenja na Vlašiću (Hotel Blanca Resort, Hotel Pahuljica, Hotel Sunce, Pansion A&M itd); 2 noćne i 2 dnevne žurke, kao i brojne druge dnevne aktivnosti: Igre bez granica, ski i snowboard takmičenja, animacijski program za najmlađe itd.`,
        }
    ]*/
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
                        <WatchLater /> {el.time}
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