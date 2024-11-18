import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Photos() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Check for small screens

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
        }}
      >
        {/* Content Rows */}
        {!isMobile ? (
          <>
            {/* First Row: Image on Left, Text on Right */}
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://i.ibb.co/5hQbMQx/Gameplay8.png"
                alt="FriendsGameplay"
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '90vh',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '6vw', md: '3vw', lg: '2vw' },
                  color: '#ffffff',
                  mx: 'auto',
                }}
              >
                Destroy waves of evil shrimp alone or with friends
              </Typography>
            </Grid>

            {/* Second Row: Text on Left, Image on Right */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '6vw', md: '3vw', lg: '2vw' },
                  color: '#ffffff',
                  mx: 'auto',
                  paddingLeft: 2,
                }}
              >
                Don’t let those bastards touch you
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://i.ibb.co/ft4wmfR/Gameplay4.png"
                alt="Example"
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '90vh',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </Grid>

            {/* Third Row: Image on Left, Text on Right */}
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://i.ibb.co/HHmHj8Z/Gameplay1.png"
                alt="Example"
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '90vh',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '6vw', md: '3vw', lg: '2vw' },
                  color: '#ffffff',
                  mx: 'auto',
                }}
              >
                Become a part of free beta access now!
              </Typography>
            </Grid>
          </>
        ) : (
          <>
            {/* Mobile View: Stacked Text Only */}
            <Grid item xs={12}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: '6vw',
                  color: '#ffffff',
                  m: 2, // Add some space between items
                }}
              >
                Destroy waves of evil shrimp alone or with friends
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: '6vw',
                  color: '#ffffff',
                  m: 2,
                }}
              >
                Don’t let those bastards touch you
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: '6vw',
                  color: '#ffffff',
                  m:2
                }}
              >
                Become a part of free beta access now!
              </Typography>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
}
