import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepContent from '@mui/material/StepContent';
import StepButton from '@mui/material/StepButton';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import Button from "@mui/material/Button";
import ChallengeDialog from "./challengeDialog";

export default function TourStepper() {
    const data = [
        {
            stop: "1",
            place: "Šarena Džamija, Donja Carsija, Travnik",
            description: "Šarena džamija or Colorful Mosque is one of most magnificent mosques in Bosnia and Herzegovina",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/%C5%A0arena_d%C5%BEamija.jpg/800px-%C5%A0arena_d%C5%BEamija.jpg",
            duration: "30 min",
        },
        {
            stop: "2",
            place: "Museum Birth House of Nobel Prize Winner Ivo Andric, Zenjak bb, Travnik",
            description: "Travnik is a birthplace of the Nobel prize winner, Ivo Andrić and his house is preserved as a museum. Travnik tourism is based on history and geography.",
            image: "https://visitbih.ba/wp-content/uploads/2018/05/rodna-kuca-ive-andrica-u-travniku.jpg",
            duration: "30 min",
        },
        {
            stop: "3",
            place: "Ćevabdžinica Hari, Žitarnica bb, Travnik",
            description: "Ćevapi, ćevapčići is a grilled dish of minced meat found traditionally in the countries of southeast Europe (the Balkans). hey are usually served in groups of five to ten pieces on a plate or in a flatbread (lepinja or somun), often with chopped onions, kajmak, ajvar (optional), and salt. ",
            image: "https://scontent.fsjj2-1.fna.fbcdn.net/v/t39.30808-6/366381230_677743467720359_5116291423900547176_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=P7PYrOjGjH8AX_L8YLs&_nc_ht=scontent.fsjj2-1.fna&oh=00_AfB6QYcTabdTcCu1Ywwnx_u9_oGYf7ku73RRRZhVjlqA7g&oe=6553FE86",
            duration: "45 min",
        },
        {
            stop: "4",
            place: "Stari Grad, Old Town, Ulica Varos, Travnik",
            description: "Enjoy beautiful central Bosnia town with its unique arhitecture. Town is full of Traditional Bosnian houses.",
            image: "https://furaj.ba/wp-content/uploads/2021/03/Travnik-tvrdava5-e1684992707863-1024x672.jpg",
            duration: "1h 45min",
        }
    ]

    const [showMore, setShowMore] = React.useState(false);

    const [activeStep, setActiveStep] = React.useState(0);

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper nonLinear activeStep={activeStep} orientation={"vertical"}>
                {data.map((step, index) => (
                    <Step key={index}>
                        <StepButton color="inherit" onClick={handleStep(index)}>
                            <h6>{step.place}</h6>
                            <p><HourglassEmptyIcon/> <i>Duration: {step.duration}</i></p>
                        </StepButton>
                        <StepContent>
                            <img alt={step.place} src={step.image} style={{width: "280px"}}/>
                            <p>{step.description}</p>
                            <ChallengeDialog />
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}