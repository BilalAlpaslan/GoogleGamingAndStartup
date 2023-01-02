import { CalendarToday, ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import Appbar from "./companents/Appbar";
import SpeakerBox from "./companents/SpeakerBox";


function App() {
  return (
    <>
      <Appbar />
      <div style={{ padding: "35px" }} />
      <div style={{ display: "flex", justifyContent: "center", paddingTop: '20px' }}>
        <Box sx={{ border: '2px solid  white', width: 'fit-content', color: 'white', padding: '20px', borderRadius: " 20px", margin: "10px" }}>
          <Typography style={{ fontSize: '40px', fontWeight: 'bold' }}>
            Google Game & Startups Summit
          </Typography>
        </Box>
      </div>


        <Box sx={{ border: '2px solid  white', color: 'white', borderRadius: " 20px", padding: '30px', margin: "10px", justifyContent: 'space-around', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Typography style={{ fontSize: '40px', fontWeight: 'bold' }}>
                Day 1
              </Typography>
              <h4 style={{ display: 'flex', alignItems: 'center' }}>
                <CalendarToday style={{ fontSize: '40px', marginRight: '8px' }} />
                <Typography style={{ fontSize: '20px', fontWeight: 'bold' }}>11/12/2021 10:00 AM - 12:00 PM</Typography>
              </h4>
            </div>
            <div></div>
            <div></div>
            <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', alignItems: 'center' }}>
              <Typography style={{ fontSize: '40px', fontWeight: 'bold' }}>
                Speakers
              </Typography>

              <SpeakerBox
                speaker="Speaker 1"
                image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                description="description"
                time="10:00 AM - 12:00 PM"
              />
              <SpeakerBox
                speaker="Speaker 2"
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
        </Box>


        <Box sx={{ border: '2px solid  white', color: 'white', borderRadius: " 20px", padding: '30px', margin: "10px", justifyContent: 'space-around', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', alignItems: 'center' }}>
              <Typography style={{ fontSize: '40px', fontWeight: 'bold' }}>
                Speakers
              </Typography>

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
              <SpeakerBox
                speaker="Speaker 3"
                image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                description="description"
                time="10:00 AM - 12:00 PM"
              />
            </div>
            <div></div>
            <div></div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Typography style={{ fontSize: '40px', fontWeight: 'bold' }}>
                Day 2
              </Typography>
              <h4 style={{ display: 'flex', alignItems: 'center' }}>
                <CalendarToday style={{ fontSize: '40px', marginRight: '8px' }} />
                <Typography style={{ fontSize: '20px', fontWeight: 'bold' }}>11/12/2021 10:00 AM - 12:00 PM</Typography>
              </h4>
            </div>
        </Box>

        {/* apply form section */} 
        <Box sx={{borderTop: '3px solid  white', backgroundColor: '', width:'100%', marginTop:'40px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'
      }}>
            <Accordion style={{ backgroundColor: 'white', color: 'black', fontSize: '20px', fontWeight: 'bold', padding: '30px',margin:'30px', borderRadius: '20px', width: '' }}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header" 
                sx={{ alignItems: 'center' }}
              >
                <Typography style={{ fontSize: '40px', fontWeight: 'bold' }}>
                  Apply
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', alignItems: 'center' }}>
                  {/* <Typography style={{ fontSize: '40px', fontWeight: 'bold' }}>
                    Apply
                  </Typography> */}
                  <form style={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', alignItems: 'center' }}>
                    <TextField id="outlined-basic" label="Name" variant="outlined" style={{ width: '100%', margin: '10px' }} />
                    <TextField id="outlined-basic" label="Email" variant="outlined" style={{ width: '100%', margin: '10px' }} />
                    <TextField id="outlined-basic" label="Phone Number" variant="outlined" style={{ width: '100%', margin: '10px' }} />
                    <TextField id="outlined-basic" label="Company" variant="outlined" style={{ width: '100%', margin: '10px' }} />
                    <TextField id="outlined-basic" label="Job Title" variant="outlined" style={{ width: '100%', margin: '10px' }} />
                    <TextField id="outlined-basic" label="LinkedIn" variant="outlined" style={{ width: '100%', margin: '10px' }} />
                    <TextField id="outlined-basic" label="Why do you want to attend?" variant="outlined" style={{ width: '100%', margin: '10px' }} />
                    <TextField id="outlined-basic" label="What do you hope to learn?" variant="outlined" style={{ width: '100%', margin: '10px' }} />
                    <Button variant="contained" style={{ backgroundColor: '#5700ff', color: 'white', fontSize: '20px', fontWeight: 'bold', width: 'fit-content', padding: '20px',marginTop:'15px', borderRadius: '20px' }}>
                      Submit
                    </Button>
                  </form>
                </div>
              </AccordionDetails>
            </Accordion>
        </Box>

        {/* partner and sponsorship section */}
        <Box sx={{borderTop: '3px solid  white', color: 'white', backgroundColor: '', width:'100%'
      , marginTop:'30px', paddingY:'30px'
      }}>
          <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', alignItems: 'center' }}>
              <Typography style={{ fontSize: '40px', fontWeight: 'bold' }}>
                Partners
              </Typography>
              <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', width:'100%', margin:'20px' }}>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="partner" style={{ width: '100px', height: '100px', margin: '10px' }} />
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="partner" style={{ width: '100px', height: '100px', margin: '10px' }} />
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="partner" style={{ width: '100px', height: '100px', margin: '10px' }} />
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="partner" style={{ width: '100px', height: '100px', margin: '10px' }} />
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="partner" style={{ width: '100px', height: '100px', margin: '10px' }} />
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="partner" style={{ width: '100px', height: '100px', margin: '10px' }} />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', alignItems: 'center' }}>
              <Typography style={{ fontSize: '40px', fontWeight: 'bold' }}>
                Sponsors
              </Typography>
              <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', width:'100%', margin:'20px' }}>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="partner" style={{ width: '100px', height: '100px', margin: '10px' }} />
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="partner" style={{ width: '100px', height: '100px', margin: '10px' }} />
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="partner" style={{ width: '100px', height: '100px', margin: '10px' }} />
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="partner" style={{ width: '100px', height: '100px', margin: '10px' }} />
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="partner" style={{ width: '100px', height: '100px', margin: '10px' }} />
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="partner" style={{ width: '100px', height: '100px', margin: '10px' }} />
              </div>
            </div>
        </Box>


        {/* footer */}
        <Box sx={{borderTop: '3px solid  white', color: 'white', backgroundColor: '', width:'100%'
      , marginTop:'30px', paddingY:'30px'
      }}>
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-evenly', width:'100%', margin:'20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', alignItems: 'center' }}>
              <Typography style={{ fontSize: '40px', fontWeight: 'bold' }}>
                Lorem ipsum
              </Typography>
              <Typography style={{ fontSize: '20px', fontWeight: 'bold' }}>
                Lorem ipsum
              </Typography>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', alignItems: 'center' }}>
              <Typography style={{ fontSize: '40px', fontWeight: 'bold' }}>
                Lorem ipsum
              </Typography>
              <Typography style={{ fontSize: '20px', fontWeight: 'bold' }}>
                Lorem ipsum
              </Typography>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', alignItems: 'center' }}>
              <Typography style={{ fontSize: '40px', fontWeight: 'bold' }}>
                Lorem ipsum
              </Typography>
              <Typography style={{ fontSize: '20px', fontWeight: 'bold' }}>
                Lorem ipsum
              </Typography>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', alignItems: 'center' }}>
              <Typography style={{ fontSize: '40px', fontWeight: 'bold' }}>
                Lorem ipsum
              </Typography>
              <Typography style={{ fontSize: '20px', fontWeight: 'bold' }}>
                Lorem ipsum
              </Typography>
            </div>
          </div>
        </Box>
    </>
  );
}

export default App;
