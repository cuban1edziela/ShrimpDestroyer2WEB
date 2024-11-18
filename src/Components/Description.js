import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const BlinkingText = styled('span')`
  animation: blink-animation 0.5s infinite;

  @keyframes blink-animation {
    0%, 100% {
      color: #ffffff;
    }
    50% {
      color: #990d27;
    }
  }
`;

export default function Description() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: '100vh', // Ensure it takes the full height of the viewport
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid
        container
        spacing={4} // Add some space between the grid items
        justifyContent="center"
        alignItems="center"
        sx={{
          textAlign: 'center',
          flexDirection: { xs: 'column', md: 'row' }, // Stack items vertically on small screens
        }}
      >
        {/* Image Section */}
        <Grid item xs={12} md={6} lg={5}>
          <Box
            component="img"
            src="https://i.ibb.co/WKwYKcs/Shrimp-Logo-No-Bg.png"
            alt="Example"
            sx={{
              width: { xs: '60%', md: '80%' }, // Smaller width on phones
              height: 'auto', // Maintain aspect ratio
              maxHeight: '90vh', // Limit height to avoid overflow
              objectFit: 'cover', // Ensure it covers the area properly
              display: 'block',
              mx: 'auto', // Center horizontally
            }}
          />
        </Grid>
        
        {/* Text Section */}
        <Grid item xs={12} md={6} lg={5}>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '6vw', md: '3vw', lg: '2vw' }, // Adjust font size for responsiveness
              color: '#ffffff',
              mx: 'auto',
              padding:2
            }}
          >
            ARE YOU READY TO GIVE THEM <BlinkingText>HELL</BlinkingText>?
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
