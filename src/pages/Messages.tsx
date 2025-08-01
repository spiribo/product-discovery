import React from 'react';
import { MessageThread } from "@/components/MessageThread";
import { Box, Typography, Container } from '@mui/material';
import CatCard from '../components/CatCard';

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
      {/* Cat Header */}
      <Container maxWidth="md" sx={{ pt: 2, pb: 2 }}>
        <Typography variant="h5" sx={{ textAlign: 'center', color: 'primary.main', fontWeight: 'bold' }}>
          Katzen-Chat 💬🐾
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2, flexWrap: 'wrap' }}>
          <CatCard 
            catName="Fluffy"
            catImage="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=200&fit=crop"
            catDescription="Der flauschigste Chat-Moderator!"
          />
          <CatCard 
            catName="Whiskers"
            catImage="https://images.unsplash.com/photo-15352686477755-300dbf3d78d1?w=300&h=200&fit=crop"
            catDescription="Unser niedlichster Nachrichten-Assistent!"
          />
        </Box>
      </Container>

      <MessageThread 
        messages={sampleMessages}
        landlordName="John Smith (Property Manager)"
        tenantName="Sarah Johnson"
      />
    </Box>
  );
};

export default Messages;