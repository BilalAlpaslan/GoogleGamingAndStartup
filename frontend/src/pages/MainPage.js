import {Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Typography} from "@mui/material";
import {CalendarToday, ExpandMore} from "@mui/icons-material";
import SpeakerBox from "../components/SpeakerBox";
import RoomIcon from "@mui/icons-material/Room";

const MainPage = () => {
    return (
    <>
        <Container sx={{mt: 10}}>
            <Box sx={{
                border: '2px solid  white',
                width: 'fit-content',
                color: 'white',
                p: 1,
                borderRadius: " 20px",
                m: 1
            }}>
                <Typography style={{fontSize: '40px', fontWeight: 'bold'}}>
                    Google Game & Startups Summit
                </Typography>
            </Box>
        </Container>


        <Box sx={{
            border: '2px solid  white',
            color: 'white',
            borderRadius: 2,
            p: 3,
            m: 1,
            justifyContent: 'space-around',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Typography style={{fontSize: '40px', fontWeight: 'bold'}}>
                    Day 1
                </Typography>
                <h4 style={{display: 'flex', alignItems: 'center'}}>
                    <CalendarToday style={{fontSize: '40px', marginRight: '8px'}}/>
                    <Typography style={{fontSize: '20px', fontWeight: 'bold'}}>11/12/2021 10:00 AM - 12:00
                        PM</Typography>
                </h4>
            </div>
            <div></div>
            <div></div>
            <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', alignItems: 'center'}}>
                <Typography style={{fontSize: '40px', fontWeight: 'bold'}}>
                    Speakers
                </Typography>

                <SpeakerBox
                    speaker="Emre Savcı"
                    image={process.env.PUBLIC_URL + '/images/emre-savci.jpg'}
                    description="Startup Developer"
                    time="10:00 AM - 12:00 PM"
                />
                <SpeakerBox
                    speaker="Kamil Koca"
                    image={process.env.PUBLIC_URL + '/images/kamilkoca.jpg'}
                    description="Evreka Satış ve iş geliştirme Müdürü"
                    time="12:00 AM - 2:00 PM"
                />
                <SpeakerBox
                    speaker="Speaker 3"
                    image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                    description="description"
                    time="10:00 AM - 12:00 PM"
                />
            </div>
        </Box>


        <Box sx={{
            border: '2px solid  white',
            color: 'white',
            borderRadius: 2,
            p: 2,
            m: 1,
            justifyContent: 'space-around',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
            <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', alignItems: 'center'}}>
                <Typography style={{fontSize: '40px', fontWeight: 'bold'}}>
                    Speakers
                </Typography>

                <SpeakerBox
                    speaker="Volkan Bozkaya"
                    image={process.env.PUBLIC_URL + '/images/volkanbozkaya.jpg'}
                    description="Digigame General Manager"
                    time="10:00 AM - 12:00 PM"
                />
                <SpeakerBox
                    speaker="Speaker 3"
                    image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                    description="description"
                    time="10:00 AM - 12:00 PM"
                />
                <SpeakerBox
                    speaker="Speaker 3"
                    image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                    description="description"
                    time="10:00 AM - 12:00 PM"
                />
            </div>
            <div></div>
            <div></div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Typography style={{fontSize: '40px', fontWeight: 'bold'}}>
                    Day 2
                </Typography>
                <h4 style={{display: 'flex', alignItems: 'center'}}>
                    <CalendarToday style={{fontSize: '40px', marginRight: '8px'}}/>
                    <Typography style={{fontSize: '20px', fontWeight: 'bold'}}>11/12/2021 10:00 AM - 12:00
                        PM</Typography>
                </h4>
            </div>
        </Box>

        <Box sx={{
            borderTop: '3px solid  white',
            color: "white",
            p: 2,
            m: 1,
            justifyContent: 'space-around',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            mt: 3,
        }}>

            {/* apply form section */}
            <Box sx={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
            }}>
                <Typography style={{fontSize: '40px', fontWeight: 'bold', color: 'white', padding: '20px'}}>
                    Summit ‘23
                </Typography>
                <Typography style={{fontSize: '20px', fontWeight: 'bold', color: 'white', paddingLeft: '20px'}}>
                    Sınırlı kontenjanla yapılacak etkinlik için biletlerinizi şimdiden alın.
                </Typography>
                <Accordion style={{
                    backgroundColor: 'white',
                    color: 'black',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    padding: '20px',
                    marginBottom: '30px',
                    marginTop: '30px',
                    borderRadius: '20px',
                    weight: '100%'
                }}>
                    <AccordionSummary
                        expandIcon={<ExpandMore/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{alignItems: 'center'}}
                    >
                        <Typography style={{fontSize: '40px', fontWeight: 'bold'}}>
                            Apply
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSdyyggQdxWsuKZLZcUwZrS6tpB8VBGOVVy5WKmP6lODD7Y3YA/viewform?embedded=true"
                            frameBorder="0" marginHeight="0" marginWidth="0" height="2000px" minWeight="580px"
                        >Yükleniyor…
                        </iframe>
                    </AccordionDetails>
                </Accordion>
            </Box>

            {/* Road */}
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <img src={process.env.PUBLIC_URL + '/images/mphoto.png'} style={{maxWidth: '400px'}}/>
                <Typography style={{fontSize: '30px', fontWeight: 'bold', margin: "10px"}}>
                    Ümraniye, Elmalıkent, 34764 Ümraniye/İstanbul
                </Typography>
                <Button variant="contained">
                    <RoomIcon/>
                    Yol tarifi
                </Button>
            </Box>

        </Box>

        {/* partner and sponsorship section */}
        <Box sx={{
            borderTop: '3px solid  white', color: 'white', marginTop: '30px', paddingTop: '30px', paddingBottom: '30px'
        }}>
            <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', alignItems: 'center'}}>
                <Typography style={{fontSize: '40px', fontWeight: 'bold'}}>
                    Partners
                </Typography>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                    width: '100%',
                    margin: '20px'
                }}>
                    <img src={process.env.PUBLIC_URL + '/images/GDSC.png'} alt="partner"
                         style={{width: '170px', height: '170px', margin: '10px'}}/>
                    <img src={process.env.PUBLIC_URL + '/images/GDSC-white.png'} alt="partner"
                         style={{width: '170px', height: '170px', margin: '10px'}}/>
                    <img src={process.env.PUBLIC_URL + '/images/umraniye.png'} alt="partner"
                         style={{width: '170px', height: '170px', margin: '10px'}}/>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', alignItems: 'center'}}>
                <Typography style={{fontSize: '40px', fontWeight: 'bold'}}>
                    Sponsors
                </Typography>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                    width: '100%',
                    margin: '20px'
                }}>
                    <img src={process.env.PUBLIC_URL + '/images/GDSC.png'} alt="partner"
                         style={{width: '170px', height: '170px', margin: '10px'}}/>
                    <img src={process.env.PUBLIC_URL + '/images/GDSC-white.png'} alt="partner"
                         style={{width: '170px', height: '170px', margin: '10px'}}/>
                    <img src={process.env.PUBLIC_URL + '/images/umraniye.png'} alt="partner"
                         style={{width: '170px', height: '170px', margin: '10px'}}/>
                </div>
            </div>
        </Box>


        {/* footer */}
        <Box sx={{
            borderTop: '3px solid  white', color: 'white', marginTop: '30px', paddingTop: '30px', paddingBottom: '30px'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                justifyContent: 'space-evenly',
                margin: '20px'
            }}>
                <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', alignItems: 'center'}}>
                    <Typography style={{fontSize: '30px', fontWeight: 'bold'}}>
                        Lorem
                    </Typography>
                    <Typography style={{fontSize: '15px', fontWeight: 'bold'}}>
                        Lorem
                    </Typography>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', alignItems: 'center'}}>
                    <Typography style={{fontSize: '30px', fontWeight: 'bold'}}>
                        Lorem
                    </Typography>
                    <Typography style={{fontSize: '15px', fontWeight: 'bold'}}>
                        Lorem
                    </Typography>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', alignItems: 'center'}}>
                    <Typography style={{fontSize: '30px', fontWeight: 'bold'}}>
                        Lorem
                    </Typography>
                    <Typography style={{fontSize: '15px', fontWeight: 'bold'}}>
                        Lorem
                    </Typography>
                </div>
            </div>
        </Box>
        <div style={{padding: '10px', display: 'flex', justifyContent: 'center', color: 'white'}}>
            <Typography>
                © 2023 Google Startup and Game Summit
            </Typography>
        </div>
    </>
    )
}

export default MainPage