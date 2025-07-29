import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const TeaserCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Schön, dass Du da bist!',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop',
      overlay: 'rgba(0, 112, 112, 0.8)'
    },
    {
      id: 2,
      title: 'Willkommen in Deinem Zuhause',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop',
      overlay: 'rgba(0, 112, 112, 0.8)'
    },
    {
      id: 3,
      title: 'Deine Wohlfühloase wartet',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=400&fit=crop',
      overlay: 'rgba(0, 112, 112, 0.8)'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <Box 
      sx={{ 
        position: 'relative',
        aspectRatio: '2/1',
        overflow: 'hidden'
      }}
    >
      {slides.map((slide, index) => (
        <Box
          key={slide.id}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: currentSlide === index ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            textAlign: 'center',
            p: 3,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: slide.overlay,
              zIndex: 1
            }
          }}
        >
          <Typography 
            variant="h4" 
            component="h1" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold',
              position: 'relative',
              zIndex: 2
            }}
          >
            {slide.title}
          </Typography>
        </Box>
      ))}
      
      {/* Dots Indicator */}
      <Box 
        sx={{ 
          position: 'absolute',
          bottom: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', 
          justifyContent: 'center', 
          gap: 1,
          zIndex: 3
        }}
      >
        {slides.map((_, index) => (
          <Box 
            key={index}
            sx={{ 
              width: 8, 
              height: 8, 
              borderRadius: '50%', 
              bgcolor: currentSlide === index ? 'white' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TeaserCarousel;