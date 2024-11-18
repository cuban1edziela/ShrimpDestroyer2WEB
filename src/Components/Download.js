import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

// Define the blinking animation
const blink = keyframes`
  0%, 100% { color: #ffb242; } 
  50% { color: #ffffff; } 
`;

export default function Download() {
  const handleDownload = () => {
    // The file path to the setup file in the public folder
    const fileUrl = `${process.env.PUBLIC_URL}/ShrimpDestroyer2_Setup.exe`;

    // Create an invisible anchor element to trigger the download
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'ShrimpDestroyer2_Setup.exe'; // File name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 5,
          paddingTop: 15,
        }}
      >
        <Button
          variant="outlined"
          sx={{
            fontSize: '1.5rem',
            padding: '1rem 3rem',
            color: 'primary.light',
            borderColor: 'primary.light',
            ':hover': { color: 'secondary.light', borderColor: 'secondary.light' },
          }}
          onClick={handleDownload}
        >
          DOWNLOAD
        </Button>
      </Box>

      <Box sx={{ justifyItems: 'center', paddingBottom: 1 }}>
        <Typography>
          JOIN{' '}
          <Typography
            component="span"
            sx={{
              animation: `${blink} 0.5s infinite`, // Blink animation, 1 second duration, repeating infinitely
            }}
          >
            OPEN BETA
          </Typography>{' '}
          VERSION B1.0
        </Typography>
      </Box>
      <Box sx={{ justifyItems: 'center', paddingBottom: 15 }}>
        <Typography>WINDOWS 10, WINDOWS 11 64 BIT</Typography>
      </Box>
    </div>
  );
}