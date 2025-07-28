import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  Box,
  Divider,
  Badge
} from '@mui/material';
import { 
  Person,
  Home,
  Store,
  Newspaper,
  AccountBox,
  Description,
  InsertDriveFile,
  BarChart,
  HelpOutline,
  Build,
  Close,
  ExitToApp
} from '@mui/icons-material';
import { useAuth } from '@/contexts/AuthContext';

interface MoreDrawerProps {
  open: boolean;
  onClose: () => void;
}

const MoreDrawer: React.FC<MoreDrawerProps> = ({ open, onClose }) => {
  const { logout, user } = useAuth();
  const topMenuItems = [
    { icon: Person, text: 'Kundenaccount', action: () => console.log('Kundenaccount clicked') },
    { icon: Home, text: 'Mein Zuhause', action: () => console.log('Mein Zuhause clicked') },
    { icon: Store, text: 'SPIRIBO Marktplatz', action: () => console.log('SPIRIBO Marktplatz clicked') },
  ];

  const landlordMenuItems = [
    { icon: Newspaper, text: 'Neuigkeiten', action: () => console.log('Neuigkeiten clicked') },
    { icon: AccountBox, text: 'Kundenkonto', action: () => console.log('Kundenkonto clicked') },
    { icon: Description, text: 'Formulare', action: () => console.log('Formulare clicked') },
    { icon: InsertDriveFile, text: 'Dokumente', action: () => console.log('Dokumente clicked'), badge: 1 },
    { icon: BarChart, text: 'Verbrauchsinformation', action: () => console.log('Verbrauchsinformation clicked') },
    { icon: HelpOutline, text: 'FAQs & Kontakt', action: () => console.log('FAQs & Kontakt clicked') },
    { icon: Build, text: 'Schadenscenter', action: () => console.log('Schadenscenter clicked') },
  ];

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 320,
          maxWidth: '85vw',
        }
      }}
    >
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Header with Close Button */}
        <Box sx={{ 
          p: 2, 
          display: 'flex',
          justifyContent: 'flex-end',
          borderBottom: 1,
          borderColor: 'divider'
        }}>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>

        {/* Top Menu Items */}
        <Box sx={{ bgcolor: 'background.paper' }}>
          <List sx={{ py: 0 }}>
            {topMenuItems.map((item, index) => (
              <ListItem 
                key={index}
                onClick={() => {
                  item.action();
                  onClose();
                }}
                sx={{
                  py: 2,
                  px: 3,
                  cursor: 'pointer',
                  borderBottom: index < topMenuItems.length - 1 ? 1 : 0,
                  borderColor: 'divider',
                  '&:hover': {
                    bgcolor: 'action.hover'
                  }
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <item.icon color="action" />
                </ListItemIcon>
                <ListItemText 
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    fontFamily: 'Roboto'
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Landlord Section */}
        <Box sx={{ 
          bgcolor: '#007070', // Using main theme color
          color: 'white',
          flex: 1
        }}>
          {/* Section Header */}
          <Box sx={{ p: 3, pb: 2 }}>
            <Typography variant="h6" sx={{ 
              fontWeight: 600, 
              color: 'white',
              fontFamily: 'Roboto'
            }}>
              Ihr Vermieter
            </Typography>
          </Box>

          {/* Landlord Menu Items */}
          <List sx={{ py: 0 }}>
            {landlordMenuItems.map((item, index) => (
              <ListItem 
                key={index}
                onClick={() => {
                  item.action();
                  onClose();
                }}
                sx={{
                  py: 1.5,
                  px: 3,
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  {item.badge ? (
                    <Badge badgeContent={item.badge} color="error">
                      <item.icon sx={{ color: 'white' }} />
                    </Badge>
                  ) : (
                    <item.icon sx={{ color: 'white' }} />
                  )}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    color: 'white',
                    fontFamily: 'Roboto'
                  }}
                />
              </ListItem>
            ))}
          </List>
          
          {/* Logout Section */}
          <Box sx={{ mt: 'auto', p: 2 }}>
            <ListItem 
              onClick={() => {
                logout();
                onClose();
              }}
              sx={{
                py: 1.5,
                px: 2,
                cursor: 'pointer',
                borderRadius: 1,
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <ExitToApp sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText 
                primary="Abmelden"
                primaryTypographyProps={{
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: 'white',
                  fontFamily: 'Roboto'
                }}
              />
            </ListItem>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default MoreDrawer;