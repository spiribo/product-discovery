import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Home } from '@mui/icons-material';

const AppHeader = () => {
  return (
    <AppBar position="sticky" sx={{ bgcolor: 'primary.main', top: 0, zIndex: 1100 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="/lovable-uploads/13e1b903-f8c3-4e0f-854d-822ea7c37e38.png" 
            alt="App Logo" 
            style={{ 
              width: 24, 
              height: 24, 
              filter: 'brightness(0) invert(1)' // Makes the icon white
            }} 
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="body2">
            123456789-100
          </Typography>
          <Home sx={{ fontSize: 20 }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;