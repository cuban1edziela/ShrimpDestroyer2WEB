import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SHRIMP DESTROYER 2
          </Typography>
          <Button color="inherit"><Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>PLAY NOW</Typography></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
