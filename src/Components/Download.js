import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

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
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 15,
        paddingTop: 15,
      }}
    >
      <Button
        variant="outlined"
        sx={{
          fontSize: '2rem',
          padding: '1rem 3rem',
          color: '#ffffff',
          borderColor: '#ffffff',
        }}
        onClick={handleDownload}
      >
        DOWNLOAD
      </Button>
    </Box>
  );
}
