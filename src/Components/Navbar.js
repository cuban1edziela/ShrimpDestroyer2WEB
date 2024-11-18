import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Navbar({ onPlayNowClick }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SHRIMP DESTROYER <Typography component="span" variant="h6" sx={{color:"secondary.light"}}>2</Typography>
          </Typography>
          <Button
            color="inherit"
            variant="text"
            onClick={onPlayNowClick}
            sx={{
              '&:hover': {
                variant: 'contained',
                color: "secondary.light", 
                borderColor: "secondary.light"
              }
            }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              PLAY NOW
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
