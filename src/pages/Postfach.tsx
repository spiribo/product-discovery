import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Postfach = () => {
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
          Postfach
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Hier finden Sie Ihre Nachrichten und Benachrichtigungen.
        </Typography>
      </Container>
    </Box>
  );
};

export default Postfach;