import { PersonCard } from "@/components/PersonCard";
import { MessageThread } from "@/components/MessageThread";
import { Box, Typography, Container, Paper, CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

const fetchPersonData = async () => {
  const response = await fetch('https://n8n.dev.spiribo.com/webhook/mock-data');
  if (!response.ok) {
    throw new Error('Failed to fetch person data');
  }
  return response.json();
};

const Index = () => {
  const { data: personData, isLoading, error } = useQuery({
    queryKey: ['personData'],
    queryFn: fetchPersonData,
  });

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
        px: 2
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Person Card Component
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Beautiful personal information display using Material-UI components
          </Typography>
        </Box>
        
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr',
          gap: 4,
          mb: 8 
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {isLoading ? (
              <CircularProgress />
            ) : error ? (
              <Typography color="error">Failed to load person data</Typography>
            ) : personData ? (
              <PersonCard person={personData} />
            ) : null}
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <MessageThread 
              messages={sampleMessages}
              landlordName="John Smith (Property Manager)"
              tenantName="Sarah Johnson"
            />
          </Box>
        </Box>
        
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
            Features
          </Typography>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 3
          }}>
            <Paper sx={{ p: 3, textAlign: 'left' }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
                Contact Information
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Displays email, phone, mobile, and website with clickable links and Material-UI icons
              </Typography>
            </Paper>
            <Paper sx={{ p: 3, textAlign: 'left' }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
                Avatar & Role
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Shows profile picture with fallback initials and role badge using MUI components
              </Typography>
            </Paper>
            <Paper sx={{ p: 3, textAlign: 'left' }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
                Metadata & Actions
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Creation date and permission count with Material-UI styled action buttons
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Index;
