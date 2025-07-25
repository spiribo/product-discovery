import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Avatar,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import {
  Person as PersonIcon,
  Home as HomeIcon,
  Schedule as ScheduleIcon,
} from '@mui/icons-material';

interface Message {
  id: string;
  senderId: string;
  senderType: 'landlord' | 'tenant';
  senderName: string;
  content: string;
  timestamp: string;
  isRead: boolean;
}

interface MessageThreadProps {
  messages: Message[];
  landlordName?: string;
  tenantName?: string;
}

export const MessageThread: React.FC<MessageThreadProps> = ({
  messages,
  landlordName = "Property Manager",
  tenantName = "Tenant"
}) => {
  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  const getSenderIcon = (senderType: 'landlord' | 'tenant') => {
    return senderType === 'landlord' ? <HomeIcon /> : <PersonIcon />;
  };

  const getSenderColor = (senderType: 'landlord' | 'tenant') => {
    return senderType === 'landlord' ? 'primary' : 'secondary';
  };

  return (
    <Paper elevation={3} sx={{ maxWidth: 600, mx: 'auto', overflow: 'hidden' }}>
      <Box sx={{ 
        p: 3, 
        bgcolor: 'primary.main', 
        color: 'primary.contrastText',
        textAlign: 'center' 
      }}>
        <Typography variant="h6" component="h2">
          Conversation
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.9, mt: 1 }}>
          {landlordName} ↔ {tenantName}
        </Typography>
      </Box>

      <List sx={{ p: 0 }}>
        {messages.map((message, index) => (
          <React.Fragment key={message.id}>
            <ListItem
              alignItems="flex-start"
              sx={{
                p: 2,
                bgcolor: message.senderType === 'landlord' ? 'action.hover' : 'background.paper',
                flexDirection: message.senderType === 'tenant' ? 'row-reverse' : 'row',
              }}
            >
              <ListItemAvatar sx={{ 
                minWidth: message.senderType === 'tenant' ? 'auto' : 56,
                ml: message.senderType === 'tenant' ? 1 : 0,
                mr: message.senderType === 'tenant' ? 0 : 1,
              }}>
                <Avatar sx={{ 
                  bgcolor: getSenderColor(message.senderType) + '.main',
                  width: 40,
                  height: 40 
                }}>
                  {getSenderIcon(message.senderType)}
                </Avatar>
              </ListItemAvatar>
              
              <ListItemText
                sx={{ 
                  textAlign: message.senderType === 'tenant' ? 'right' : 'left',
                  m: 0 
                }}
                primary={
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1,
                    justifyContent: message.senderType === 'tenant' ? 'flex-end' : 'flex-start',
                    mb: 0.5 
                  }}>
                    <Typography variant="subtitle2" component="span">
                      {message.senderName}
                    </Typography>
                    {!message.isRead && (
                      <Chip
                        label="New"
                        size="small"
                        color="warning"
                        sx={{ height: 20, fontSize: '0.7rem' }}
                      />
                    )}
                  </Box>
                }
                secondary={
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{ 
                        mb: 1, 
                        color: 'text.primary',
                        bgcolor: message.senderType === 'tenant' ? 'primary.light' : 'grey.100',
                        p: 2,
                        borderRadius: 2,
                        display: 'inline-block',
                        maxWidth: '90%'
                      }}
                    >
                      {message.content}
                    </Typography>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 0.5,
                      justifyContent: message.senderType === 'tenant' ? 'flex-end' : 'flex-start',
                      mt: 0.5 
                    }}>
                      <ScheduleIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
                      <Typography variant="caption" color="text.secondary">
                        {formatTimestamp(message.timestamp)}
                      </Typography>
                    </Box>
                  </Box>
                }
              />
            </ListItem>
            {index < messages.length - 1 && <Divider variant="inset" />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};