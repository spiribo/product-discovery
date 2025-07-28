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
      content: "Hallo Sarah, ich hoffe, Sie haben sich gut eingelebt. Ich wollte nur fragen, ob in Ihrer Wohnung alles richtig funktioniert?",
      timestamp: "2024-01-15T09:30:00Z",
      isRead: true
    },
    {
      id: "msg-2",
      senderId: "tenant-1",
      senderType: "tenant" as const,
      senderName: "Sarah Johnson",
      content: "Hallo! Vielen Dank für die Nachfrage. Alles ist großartig, aber der Wasserhahn in der Küche tropft. Könnten wir jemanden arrangieren, der sich das ansieht?",
      timestamp: "2024-01-15T14:45:00Z",
      isRead: true
    },
    {
      id: "msg-3",
      senderId: "landlord-1",
      senderType: "landlord" as const,
      senderName: "John Smith",
      content: "Natürlich! Unser Wartungsteam wird am Donnerstag zwischen 14:00 und 16:00 Uhr vorbeikommen. Passt Ihnen das?",
      timestamp: "2024-01-15T15:20:00Z",
      isRead: true
    },
    {
      id: "msg-4",
      senderId: "tenant-1",
      senderType: "tenant" as const,
      senderName: "Sarah Johnson",
      content: "Perfekt! Donnerstagnachmittag passt mir gut. Ich werde sicherstellen, dass ich zu Hause bin. Vielen Dank für die schnelle Antwort!",
      timestamp: "2024-01-15T16:10:00Z",
      isRead: false
    }
  ];

  return (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        bgcolor: 'background.default',
        pb: 8 // Add padding for bottom navigation only
      }}
    >
      <MessageThread 
        messages={sampleMessages}
        landlordName="John Smith (Property Manager)"
        tenantName="Sarah Johnson"
      />
    </Box>
  );
};

export default Messages;