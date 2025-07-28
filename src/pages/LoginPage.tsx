import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Container,
  Alert,
  CircularProgress
} from '@mui/material';
import { useAuth } from '@/contexts/AuthContext';
import birdsBackground from '@/assets/birds-background.jpg';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const success = await login(email, password);
      if (!success) {
        setError('Login failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred during login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        backgroundImage: `url(${birdsBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Container maxWidth="sm">
        <Card sx={{ p: 4 }}>
          <CardContent>
            <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
              Willkommen zurück
            </Typography>
            
            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}

            <Box component="form" onSubmit={handleLogin}>
              <TextField
                fullWidth
                label="E-Mail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
                disabled={loading}
              />
              
              <TextField
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                required
                disabled={loading}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={loading}
                size="large"
              >
                {loading ? <CircularProgress size={24} /> : 'Anmelden'}
              </Button>
            </Box>

            <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
              Dies ist eine Demo-Anmeldung - verwenden Sie eine beliebige E-Mail und Passwort zum Anmelden
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default LoginPage;