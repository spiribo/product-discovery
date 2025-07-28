import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { PersonCard } from '@/components/PersonCard';

const PersonView = () => {
  // Sample person data
  const samplePerson = {
    id: '123',
    created: '2023-01-15',
    updated: '2024-01-20',
    addressTitle: 'Dr.',
    firstname: 'Max',
    lastname: 'Mustermann',
    displayRoleName: 'Verwalter',
    phone: '+49 30 12345678',
    mobile: '+49 171 9876543',
    email: 'max.mustermann@example.com',
    url: 'https://www.example.com',
    additionalData: {
      id: '456',
      avatar: '',
      permissions: {
        'admin': { 'read': true, 'write': true },
        'user': { 'read': true, 'write': false }
      }
    }
  };

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
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
          Personen
        </Typography>
        <PersonCard person={samplePerson} />
      </Container>
    </Box>
  );
};

export default PersonView;