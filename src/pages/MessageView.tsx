import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { MessageThread } from '@/components/MessageThread';

const MessageView = () => {
  // Sample messages data
  const sampleMessages = [
    {
      id: '1',
      senderId: '123',
      senderType: 'landlord' as const,
      senderName: 'Max Mustermann',
      content: 'Guten Tag! Wie kann ich Ihnen behilflich sein?',
      timestamp: '2024-01-20T10:30:00Z',
      isRead: true
    },
    {
      id: '2',
      senderId: '456',
      senderType: 'tenant' as const,
      senderName: 'Anna Schmidt',
      content: 'Hallo! Ich habe eine Frage zur Heizung in meiner Wohnung.',
      timestamp: '2024-01-20T11:15:00Z',
      isRead: true
    },
    {
      id: '3',
      senderId: '123',
      senderType: 'landlord' as const,
      senderName: 'Max Mustermann',
      content: 'Gerne! Was ist denn das Problem mit der Heizung?',
      timestamp: '2024-01-20T11:20:00Z',
      isRead: false
    }
  ];

  return (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        bgcolor: 'background.default',
        py: 6,
        px: 2,
        pb: 10 // Add padding for bottom navigation
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
          Nachrichten
        </Typography>
        <MessageThread 
          messages={sampleMessages}
          landlordName="Max Mustermann"
          tenantName="Anna Schmidt"
        />
      </Container>
    </Box>
  );
};

export default MessageView;