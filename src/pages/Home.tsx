import React from 'react';
import { Box, Typography, Card, CardContent, Chip } from '@mui/material';
import { AccountCircle, ContactSupport, Newspaper, ReportProblem, DeleteOutline, Warning } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const services = [
    { icon: AccountCircle, label: 'Kundenkonto', path: '/personal' },
    { icon: ContactSupport, label: 'Anliegen', path: '/anliegen' },
    { icon: Newspaper, label: 'Neuigkeiten', path: '/messages' },
    { icon: ReportProblem, label: 'Schadencenter', path: '/schaden' },
    { icon: DeleteOutline, label: 'Sperrmüll', path: '/postfach' },
    { icon: Warning, label: 'Notfall', path: '/postfach' },
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', pb: 10 }}>
      {/* Header Section */}
      <Box 
        sx={{ 
          bgcolor: '#007070',
          color: 'white',
          p: 3,
          textAlign: 'center',
          position: 'relative',
          minHeight: '200px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Schön, dass Du da bist!
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2 }}>
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'white' }} />
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.5)' }} />
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.5)' }} />
        </Box>
      </Box>

      {/* Content */}
      <Box sx={{ px: 2 }}>
        {/* Aktuelles Section */}
        <Box sx={{ mt: 3, mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#666', mb: 2 }}>
            Aktuelles
          </Typography>
          <Card sx={{ p: 0 }}>
            <CardContent sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                <Typography variant="caption" color="text.secondary">
                  07.02.2024
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  GBC GS
                </Typography>
              </Box>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                DIY-Idee: Winterliche Seife zum Verschenken
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Selbstgemachte Geschenke sind doch die Schönsten! Es fehlt noch eine kleine Aufmerksamkeit für einen lieben Menschen?
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Chip label="MEHR ERFAHREN" size="small" sx={{ bgcolor: '#007070', color: 'white', fontSize: '0.7rem' }} />
                <Chip label="ALLE BEITRÄGE" variant="outlined" size="small" sx={{ fontSize: '0.7rem' }} />
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Mein GBC Cockpit Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#007070', fontWeight: 'bold', mb: 3 }}>
            Mein GBC Cockpit
          </Typography>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 2
          }}>
            {services.map((service, index) => (
              <Card 
                key={index} 
                sx={{ 
                  textAlign: 'center', 
                  p: 2, 
                  cursor: 'pointer',
                  '&:hover': { bgcolor: 'rgba(0,112,112,0.05)' }
                }}
                onClick={() => navigate(service.path)}
              >
                <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                  <service.icon sx={{ fontSize: 40, color: '#007070', mb: 1 }} />
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {service.label}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Image Cards Section */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Card sx={{ position: 'relative', height: 120, overflow: 'hidden' }}>
            <Box 
              sx={{ 
                height: '100%',
                bgcolor: 'linear-gradient(135deg, #007070, #4a9999)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                QUARTIERSBEREICH
              </Typography>
            </Box>
          </Card>

          <Card sx={{ position: 'relative', height: 120, overflow: 'hidden' }}>
            <Box 
              sx={{ 
                height: '100%',
                bgcolor: 'linear-gradient(135deg, #007070, #4a9999)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                DEIN MIETERMAGAZIN
              </Typography>
            </Box>
          </Card>

          <Card sx={{ position: 'relative', height: 120, overflow: 'hidden' }}>
            <Box 
              sx={{ 
                height: '100%',
                bgcolor: 'linear-gradient(135deg, #007070, #4a9999)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                GÄSTEWOHNUNGEN
              </Typography>
            </Box>
          </Card>

          <Card sx={{ position: 'relative', height: 120, overflow: 'hidden' }}>
            <Box 
              sx={{ 
                height: '100%',
                bgcolor: 'linear-gradient(135deg, #007070, #4a9999)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                WOHNUNGSANGEBOTE
              </Typography>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;