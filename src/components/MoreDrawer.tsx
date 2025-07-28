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
  Avatar
} from '@mui/material';
import { 
  User, 
  Settings, 
  HelpCircle, 
  Info, 
  LogOut,
  X
} from 'lucide-react';

interface MoreDrawerProps {
  open: boolean;
  onClose: () => void;
}

const MoreDrawer: React.FC<MoreDrawerProps> = ({ open, onClose }) => {
  const menuItems = [
    { icon: User, text: 'Profile', action: () => console.log('Profile clicked') },
    { icon: Settings, text: 'Settings', action: () => console.log('Settings clicked') },
    { icon: HelpCircle, text: 'Help & Support', action: () => console.log('Help clicked') },
    { icon: Info, text: 'About', action: () => console.log('About clicked') },
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
        {/* Header */}
        <Box sx={{ 
          p: 3, 
          bgcolor: 'primary.main', 
          color: 'primary.contrastText',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar sx={{ width: 48, height: 48, bgcolor: 'primary.light' }}>
              <User size={24} />
            </Avatar>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                John Doe
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                john.doe@example.com
              </Typography>
            </Box>
          </Box>
          <IconButton 
            onClick={onClose}
            sx={{ color: 'primary.contrastText' }}
          >
            <X size={24} />
          </IconButton>
        </Box>

        {/* Menu Items */}
        <Box sx={{ flex: 1 }}>
          <List sx={{ pt: 2 }}>
            {menuItems.map((item, index) => (
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
                    bgcolor: 'action.hover'
                  }
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <item.icon size={20} color="currentColor" />
                </ListItemIcon>
                <ListItemText 
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: '0.95rem',
                    fontWeight: 500
                  }}
                />
              </ListItem>
            ))}
          </List>

          <Divider sx={{ mx: 3, my: 2 }} />

          {/* Logout */}
          <List>
            <ListItem 
              onClick={() => {
                console.log('Logout clicked');
                onClose();
              }}
              sx={{
                py: 1.5,
                px: 3,
                cursor: 'pointer',
                '&:hover': {
                  bgcolor: 'error.light',
                  color: 'error.contrastText'
                }
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <LogOut size={20} color="currentColor" />
              </ListItemIcon>
              <ListItemText 
                primary="Sign Out"
                primaryTypographyProps={{
                  fontSize: '0.95rem',
                  fontWeight: 500
                }}
              />
            </ListItem>
          </List>
        </Box>

        {/* Footer */}
        <Box sx={{ p: 3, borderTop: 1, borderColor: 'divider' }}>
          <Typography variant="caption" color="text.secondary" align="center">
            App Version 1.0.0
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default MoreDrawer;