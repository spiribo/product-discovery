import React from 'react';
import { PersonCard } from "@/components/PersonCard";
import { Box, Typography, Container, CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

const fetchPersonData = async () => {
  const response = await fetch('https://n8n.dev.spiribo.com/webhook/mock-data');
  if (!response.ok) {
    throw new Error('Failed to fetch person data');
  }
  return response.json();
};

const Personal = () => {
  const { data: personData, isLoading, error } = useQuery({
    queryKey: ['personData'],
    queryFn: fetchPersonData,
  });

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
            Personal Profile
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Your personal information and contact details
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          {isLoading ? (
            <CircularProgress />
          ) : error ? (
            <Typography color="error">Failed to load person data</Typography>
          ) : personData ? (
            <PersonCard person={personData} />
          ) : null}
        </Box>
      </Container>
    </Box>
  );
};

export default Personal;