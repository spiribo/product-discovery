import React from 'react';
import { Box, Typography, Card, CardContent, Chip, Container } from '@mui/material';
import { AccountCircle, ContactSupport, Newspaper, ReportProblem, DeleteOutline, Warning } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { themeExtensions } from '../theme';

import TeaserCarousel from '../components/TeaserCarousel';
import quartiersbereichImg from '../assets/quartiersbereich.jpg';
import mietermagazinImg from '../assets/mietermagazin.jpg';
import gaestewohnungenImg from '../assets/gaestewohnungen.jpg';
import wohnungsangeboteImg from '../assets/wohnungsangebote.jpg';

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const services = [
    { icon: AccountCircle, label: 'Kundenkonto', action: () => console.log('Kundenkonto clicked') },
    { icon: ContactSupport, label: 'Anliegen', action: () => console.log('Anliegen clicked') },
    { icon: Newspaper, label: 'Neuigkeiten', action: () => console.log('Neuigkeiten clicked') },
    { icon: ReportProblem, label: 'Schadencenter', action: () => console.log('Schadencenter clicked') },
    { icon: DeleteOutline, label: 'Sperrmüll', action: () => console.log('Sperrmüll clicked') },
    { icon: Warning, label: 'Notfall', action: () => console.log('Notfall clicked') },
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', pb: 10 }}>
        {/* Teaser Carousel */}
        <TeaserCarousel />

        {/* Content */}
        <Container maxWidth="md">
          <Box sx={{ px: 2 }}>
            {/* Aktuelles Section */}
            <Box sx={{ mt: 3, mb: 4 }}>
              <Typography variant="h6" gutterBottom sx={{ color: 'text.secondary', mb: 2 }}>
                Aktuelles
              </Typography>
              <Card sx={{ p: 0, minHeight: 160 }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                    <Typography variant="caption" color="text.secondary">
                      07.02.2024
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      GBC GS
                    </Typography>
                  </Box>
                  <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                    Katzen-News: Neue Katzenbilder sind da! 🐱
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Unsere pelzigen Freunde haben wieder neue Abenteuer erlebt! Schau dir die süßesten Katzenmomente an und lass dich verzaubern.
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Chip label="MEHR KATZEN" size="small" sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }} />
                    <Chip label="ALLE KATZENBILDER" variant="outlined" size="small" />
                  </Box>
                </CardContent>
              </Card>
            </Box>

            {/* Mein GBC Cockpit Section */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold', mb: 3 }}>
                Mein Katzen Cockpit 🐾
              </Typography>
              <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: {
                  xs: 'repeat(2, 1fr)',
                  sm: 'repeat(3, 1fr)', 
                  md: 'repeat(4, 1fr)'
                },
                gap: 2
              }}>
                {services.map((service, index) => (
                  <Card 
                    key={index} 
                    sx={{ 
                      aspectRatio: '1/1',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '&:hover': { bgcolor: 'action.hover' }
                    }}
                    onClick={() => service.action()}
                  >
                    <CardContent sx={{ 
                      p: 3, 
                      '&:last-child': { pb: 3 },
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <service.icon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
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
              <Card sx={{ position: 'relative', height: 160, overflow: 'hidden' }}>
                <Box 
                  sx={{ 
                    height: '100%',
                    backgroundImage: themeExtensions.gradients.primaryOverlay(quartiersbereichImg),
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    KATZEN-QUARTIER
                  </Typography>
                </Box>
              </Card>

              <Card sx={{ position: 'relative', height: 160, overflow: 'hidden' }}>
                <Box 
                  sx={{ 
                    height: '100%',
                    backgroundImage: themeExtensions.gradients.primaryOverlay(mietermagazinImg),
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    KATZEN-MAGAZIN
                  </Typography>
                </Box>
              </Card>

              <Card sx={{ position: 'relative', height: 160, overflow: 'hidden' }}>
                <Box 
                  sx={{ 
                    height: '100%',
                    backgroundImage: themeExtensions.gradients.primaryOverlay(gaestewohnungenImg),
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    KATZEN-HOTEL
                  </Typography>
                </Box>
              </Card>

              <Card sx={{ position: 'relative', height: 160, overflow: 'hidden' }}>
                <Box 
                  sx={{ 
                    height: '100%',
                    backgroundImage: themeExtensions.gradients.primaryOverlay(wohnungsangeboteImg),
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    KATZEN-HÄUSER
                  </Typography>
                </Box>
              </Card>
            </Box>
          </Box>
        </Container>
    </Box>
  );
};

export default Home;