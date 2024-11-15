import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


export default function Photos() {
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
        sx={{ textAlign: 'center' }} // Center text horizontally
      >
        {/* First Row: Image on Left, Text on Right */}
        <Grid item xs={12} md={6} lg={6}>
          <Box
            component="img"
            src="https://i.ibb.co/k5GHYxw/Gameplay5.png"
            alt="Example"
            sx={{
              width: '100%', // Full width of the grid item
              height: 'auto', // Maintain aspect ratio
              maxHeight: '90vh', // Limit height to avoid overflow
              objectFit: 'cover', // Ensure it covers the area properly
              display: 'block',
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '4vw', md: '3vw', lg: '2vw' }, // Adjusted to keep text responsive with viewport width
              color: '#ffffff',
              mx: 'auto',
              paddingRight:4,
            }}
          >
            Destroy waves of evil shrimp alone or with friends
          </Typography>
        </Grid>

        {/* Second Row: Text on Left, Image on Right */}
        <Grid item xs={12} md={6} lg={6}>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '4vw', md: '3vw', lg: '2vw' }, // Adjusted to keep text responsive with viewport width
              color: '#ffffff',
              mx: 'auto',
              paddingLeft: 4,
            }}
          >
            Dont let those basatards touch you
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Box
            component="img"
            src="https://i.ibb.co/ft4wmfR/Gameplay4.png"
            alt="Example"
            sx={{
              width: '100%', // Full width of the grid item
              height: 'auto', // Maintain aspect ratio
              maxHeight: '90vh', // Limit height to avoid overflow
              objectFit: 'cover', // Ensure it covers the area properly
              display: 'block',
            }}
          />
        </Grid>

        {/* Third Row: Image on Left, Text on Right */}
        <Grid item xs={12} md={6} lg={6}>
          <Box
            component="img"
            src="https://i.ibb.co/HHmHj8Z/Gameplay1.png"
            alt="Example"
            sx={{
              width: '100%', // Full width of the grid item
              height: 'auto', // Maintain aspect ratio
              maxHeight: '90vh', // Limit height to avoid overflow
              objectFit: 'cover', // Ensure it covers the area properly
              display: 'block',
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '4vw', md: '3vw', lg: '2vw' }, 
              color: '#ffffff',
              mx: 'auto',
              paddingRight:4,
            }}
          >
            Become a part of free beta access now!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
