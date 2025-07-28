import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { Home, Person, Message } from '@mui/icons-material';
import { MoreHorizontal } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import MoreDrawer from './MoreDrawer';

const AppBottomNavigation = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const getValueFromPath = (path: string) => {
    switch (path) {
      case '/':
        return 0;
      case '/personal':
        return 1;
      case '/messages':
        return 2;
      case '/more':
        return 3;
      default:
        return 0;
    }
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    switch (newValue) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/personal');
        break;
      case 2:
        navigate('/messages');
        break;
      case 3:
        setDrawerOpen(true);
        break;
    }
  };

  return (
    <>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          value={getValueFromPath(location.pathname)}
          onChange={handleChange}
          showLabels
        >
          <BottomNavigationAction label="Startseite" icon={<Home />} />
          <BottomNavigationAction label="Persönlich" icon={<Person />} />
          <BottomNavigationAction label="Nachrichten" icon={<Message />} />
          <BottomNavigationAction 
            label="Mehr"
            icon={<MoreHorizontal size={24} />} 
          />
        </BottomNavigation>
      </Paper>
      
      <MoreDrawer 
        open={drawerOpen} 
        onClose={() => setDrawerOpen(false)} 
      />
    </>
  );
};

export default AppBottomNavigation;