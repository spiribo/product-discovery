import React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { Home, Person, Message } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const AppBottomNavigation = () => {
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
    }
  };

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        value={getValueFromPath(location.pathname)}
        onChange={handleChange}
        showLabels
      >
        <BottomNavigationAction label="Home" icon={<Home />} />
        <BottomNavigationAction label="Personal" icon={<Person />} />
        <BottomNavigationAction label="Messages" icon={<Message />} />
      </BottomNavigation>
    </Paper>
  );
};

export default AppBottomNavigation;