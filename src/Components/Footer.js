import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Box
        
      sx={{
        width: '100%',
        padding: '1rem',
        backgroundColor: 'primary.main',
        color: '#ffffff',
        position: 'static',
        bottom: 0,
        left: 0,
      }}
    >
      <Typography
        variant="body2"
        sx={{
          textAlign: 'left',
        }}
      >
        Shrimp Destroyer <Typography component="span" variant="body2" sx={{color:"secondary.light"}}>2</Typography> © 2024
      </Typography>
    </Box>
  );
}
