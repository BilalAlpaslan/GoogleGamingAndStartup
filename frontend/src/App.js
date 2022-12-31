import { CalendarToday } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import Appbar from "./companents/Appbar";
import SpeakerBox from "./companents/SpeakerBox";


function App() {
  return (
    <div>
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

    </div>
  );
}

export default App;
