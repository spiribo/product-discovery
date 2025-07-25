import { PersonCard } from "@/components/PersonCard";
import { Box, Typography, Container, Paper } from '@mui/material';

const Index = () => {
  // Sample person data for demonstration
  const samplePerson = {
    id: "person-123",
    created: "2023-08-24T14:15:22Z",
    updated: "2024-01-15T10:30:45Z",
    addressTitle: "Dr.",
    firstname: "Sarah",
    lastname: "Johnson",
    displayRoleName: "Senior Developer",
    phone: "+1 (555) 123-4567",
    mobile: "+1 (555) 987-6543",
    email: "sarah.johnson@example.com",
    url: "https://sarahjohnson.dev",
    additionalData: {
      id: "additional-456",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      permissions: {
        admin: {
          read: true,
          write: true,
          delete: true
        },
        developer: {
          read: true,
          write: true,
          delete: false
        },
        user: {
          read: true,
          write: false,
          delete: false
        }
      }
    }
  };

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
        
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
          <PersonCard person={samplePerson} />
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
