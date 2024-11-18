import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Navbar({ onPlayNowClick }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Adjust for small screens

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SHRIMP DESTROYER{' '}
            <Typography component="span" variant="h6" sx={{ color: 'secondary.light' }}>
              2
            </Typography>
          </Typography>
          {!isMobile && ( // Render the button only if the screen is not small
            <Button
              color="inherit"
              variant="text"
              onClick={onPlayNowClick}
              sx={{
                '&:hover': {
                  variant: 'contained',
                  color: 'secondary.light',
                  borderColor: 'secondary.light',
                },
              }}
            >
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                PLAY NOW
              </Typography>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
