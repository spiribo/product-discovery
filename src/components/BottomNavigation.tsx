import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { Home, ReportProblem, ContactSupport, Mail, MoreHoriz } from '@mui/icons-material';
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
      case '/schaden':
        return 1;
      case '/anliegen':
        return 2;
      case '/postfach':
        return 3;
      case '/more':
        return 4;
      default:
        return 0;
    }
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    switch (newValue) {
      case 0:
        console.log('Home clicked');
        break;
      case 1:
        console.log('Schaden clicked');
        break;
      case 2:
        console.log('Anliegen clicked');
        break;
      case 3:
        console.log('Postfach clicked');
        break;
      case 4:
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
          <BottomNavigationAction label="Start" icon={<Home />} />
          <BottomNavigationAction label="Schaden" icon={<ReportProblem />} />
          <BottomNavigationAction label="Anliegen" icon={<ContactSupport />} />
          <BottomNavigationAction label="Postfach" icon={<Mail />} />
          <BottomNavigationAction 
            label="Mehr"
            icon={<MoreHoriz />} 
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