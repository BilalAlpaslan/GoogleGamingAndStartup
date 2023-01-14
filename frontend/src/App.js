import { CalendarToday, ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import Appbar from "./components/Appbar";
import MainPage from "./pages/MainPage.js"
import SpeakerBox from "./components/SpeakerBox";
import RoomIcon from '@mui/icons-material/Room';


function App() {
  return (
    <>
      <Appbar />
      <MainPage />
    </>
  );
}

export default App;
