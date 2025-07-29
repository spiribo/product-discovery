import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Home } from '@mui/icons-material';

const AppHeader = () => {
  return (
    <AppBar position="sticky" sx={{ bgcolor: '#007070', top: 0, zIndex: 1100 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 500 }}>
          Mein Zuhause
        </Typography>
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