import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

interface CatCardProps {
  catName: string;
  catImage: string;
  catDescription: string;
}

const CatCard: React.FC<CatCardProps> = ({ catName, catImage, catDescription }) => {
  return (
    <Card sx={{ 
      maxWidth: 300, 
      m: 2,
      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
      borderRadius: 3,
      overflow: 'hidden',
      '&:hover': {
        transform: 'translateY(-4px)',
        transition: 'transform 0.3s ease'
      }
    }}>
      <Box sx={{ position: 'relative' }}>
        <img 
          src={catImage} 
          alt={catName}
          style={{ 
            width: '100%', 
            height: '200px', 
            objectFit: 'cover' 
          }} 
        />
      </Box>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          {catName} 🐱
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {catDescription}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CatCard;