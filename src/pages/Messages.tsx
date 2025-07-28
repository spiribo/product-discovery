import React from 'react';
import { MessageThread } from "@/components/MessageThread";
import { Box, Typography, Container } from '@mui/material';

const Messages = () => {
  // Sample messages for demonstration
  const sampleMessages = [
    {
      id: "msg-1",
      senderId: "landlord-1",
      senderType: "landlord" as const,
      senderName: "John Smith",
      content: "Hi Sarah, I hope you're settling in well. Just wanted to check if everything is working properly in your apartment?",
      timestamp: "2024-01-15T09:30:00Z",
      isRead: true
    },
    {
      id: "msg-2",
      senderId: "tenant-1",
      senderType: "tenant" as const,
      senderName: "Sarah Johnson",
      content: "Hello! Thank you for checking in. Everything is great, but the kitchen faucet has been dripping. Could we arrange for someone to take a look at it?",
      timestamp: "2024-01-15T14:45:00Z",
      isRead: true
    },
    {
      id: "msg-3",
      senderId: "landlord-1",
      senderType: "landlord" as const,
      senderName: "John Smith",
      content: "Of course! I'll have our maintenance team come by this Thursday between 2-4 PM. Will that work for you?",
      timestamp: "2024-01-15T15:20:00Z",
      isRead: true
    },
    {
      id: "msg-4",
      senderId: "tenant-1",
      senderType: "tenant" as const,
      senderName: "Sarah Johnson",
      content: "Perfect! Thursday afternoon works well for me. I'll make sure to be home. Thank you for the quick response!",
      timestamp: "2024-01-15T16:10:00Z",
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
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Messages
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Your conversations and communications
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <MessageThread 
            messages={sampleMessages}
            landlordName="John Smith (Property Manager)"
            tenantName="Sarah Johnson"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Messages;