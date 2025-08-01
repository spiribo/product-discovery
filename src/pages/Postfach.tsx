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
          Katzen-Post 📮
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Hier finden Sie alle Nachrichten von und über Katzen! 🐱
        </Typography>
        
        {/* Cat Image */}
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <img 
            src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop" 
            alt="Süße Katze" 
            style={{ 
              width: '100%', 
              maxWidth: '400px', 
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }} 
          />
          <Typography variant="h6" sx={{ mt: 2, color: 'primary.main' }}>
            Heute: Keine neuen Katzennachrichten 😸
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Postfach;