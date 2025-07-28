import React from 'react';
import { Box, Typography, Container, Card, CardContent } from '@mui/material';
import { Person, Message, Dashboard } from '@mui/icons-material';

const Home = () => {
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
            Willkommen in der App
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Ihr persönliches Dashboard und Kommunikationszentrum
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
          gap: 3 
        }}>
          <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
            <CardContent>
              <Dashboard sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Übersicht
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Erhalten Sie einen Überblick über Ihre Aktivitäten und wichtige Informationen
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
            <CardContent>
              <Person sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Persönliches Profil
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Anzeigen und Verwalten Ihrer persönlichen Informationen und Einstellungen
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
            <CardContent>
              <Message sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Nachrichten
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Bleiben Sie in Verbindung mit Gesprächen und Benachrichtigungen
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;