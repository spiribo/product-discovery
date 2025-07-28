import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Schaden = () => {
  return (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        bgcolor: 'background.default',
        py: 6,
        px: 2,
        pb: 10 // Add padding for bottom navigation
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Schaden
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Hier können Sie Schäden melden und verwalten.
        </Typography>
      </Container>
    </Box>
  );
};

export default Schaden;