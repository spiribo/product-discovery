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
  User, 
  Home,
  Store,
  Newspaper,
  CreditCard,
  FileText,
  File,
  BarChart3,
  HelpCircle,
  Wrench,
  X
} from 'lucide-react';

interface MoreDrawerProps {
  open: boolean;
  onClose: () => void;
}

const MoreDrawer: React.FC<MoreDrawerProps> = ({ open, onClose }) => {
  const topMenuItems = [
    { icon: User, text: 'Customer Account', action: () => console.log('Customer Account clicked') },
    { icon: Home, text: 'My Home', action: () => console.log('My Home clicked') },
    { icon: Store, text: 'SPIRIBO Marketplace', action: () => console.log('Marketplace clicked') },
  ];

  const landlordMenuItems = [
    { icon: Newspaper, text: 'News', action: () => console.log('News clicked') },
    { icon: CreditCard, text: 'Customer Account', action: () => console.log('Customer Account clicked') },
    { icon: FileText, text: 'Forms', action: () => console.log('Forms clicked') },
    { icon: File, text: 'Documents', action: () => console.log('Documents clicked'), badge: 1 },
    { icon: BarChart3, text: 'Consumption Info', action: () => console.log('Consumption clicked') },
    { icon: HelpCircle, text: 'FAQs & Contact', action: () => console.log('FAQs clicked') },
    { icon: Wrench, text: 'Damage Center', action: () => console.log('Damage Center clicked') },
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
            <X size={24} />
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
        </Box>

        {/* Landlord Section */}
        <Box sx={{ 
          bgcolor: '#2196F3', // Blue background like in the image
          color: 'white',
          flex: 1
        }}>
          {/* Section Header */}
          <Box sx={{ p: 3, pb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: 'white' }}>
              Your Landlord
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
                      <item.icon size={20} color="white" />
                    </Badge>
                  ) : (
                    <item.icon size={20} color="white" />
                  )}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    color: 'white'
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Drawer>
  );
};

export default MoreDrawer;