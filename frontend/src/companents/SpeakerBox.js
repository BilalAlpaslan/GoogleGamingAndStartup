
import React from 'react'
import { Box, Typography } from '@mui/material'

export default function SpeakerBox({speaker, image, description, time}) {
    return (
        <Box sx={{ border: '2px solid  white', color: 'white', borderRadius: " 20px", width: '100%', padding: '10px', marginY: "10px", marginLeft: '' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography style={{ fontSize: '30px', fontWeight: 'bold' }}>
                    {speaker}
                </Typography>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'white' }}>
                    <img src={image} alt="google" style={{ width: '100%', height: '100%', borderRadius: "50%" }} />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                <Typography style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    {description}
                </Typography>
                <Typography style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    {time}
                </Typography>
            </div>
        </Box>
    )
}