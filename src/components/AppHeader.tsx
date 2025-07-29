import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Home } from '@mui/icons-material';

const AppHeader = () => {
  return (
    <AppBar position="sticky" sx={{ bgcolor: 'primary.main', top: 0, zIndex: 1100 }}>
      <Toolbar sx={{ justifyContent: 'flex-end' }}>
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