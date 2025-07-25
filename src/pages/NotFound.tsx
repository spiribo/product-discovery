import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Box, Typography, Container, Button } from '@mui/material';
import { Home } from '@mui/icons-material';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        bgcolor: 'background.default'
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h1" component="h1" sx={{ fontSize: '4rem', fontWeight: 'bold', mb: 2 }}>
            404
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Oops! Page not found
          </Typography>
          <Button
            component={Link}
            to="/"
            variant="contained"
            startIcon={<Home />}
            size="large"
          >
            Return to Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFound;