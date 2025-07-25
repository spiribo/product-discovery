import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Chip,
  Typography,
  Button,
  Box,
  Divider,
  Link
} from '@mui/material';
import {
  Email,
  Phone,
  Smartphone,
  Language,
  CalendarToday,
  Person,
  Visibility,
  Message
} from '@mui/icons-material';

interface PersonData {
  id: string;
  created: string;
  updated: string;
  addressTitle: string;
  firstname: string;
  lastname: string;
  displayRoleName: string;
  phone: string;
  mobile: string;
  email: string;
  url: string;
  additionalData: {
    id: string;
    avatar: string;
    permissions: {
      [key: string]: {
        [key: string]: boolean;
      };
    };
  };
}

interface PersonCardProps {
  person: PersonData;
  className?: string;
}

export const PersonCard = ({ person, className = "" }: PersonCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getInitials = (firstname: string, lastname: string) => {
    return `${firstname.charAt(0)}${lastname.charAt(0)}`.toUpperCase();
  };

  const permissionCount = Object.keys(person.additionalData?.permissions || {}).length;

  return (
    <Card 
      className={className}
      sx={{ 
        maxWidth: 400, 
        mx: 'auto',
        '&:hover': {
          boxShadow: 6,
        },
        transition: 'box-shadow 0.3s ease-in-out'
      }}
      elevation={3}
    >
      <CardHeader sx={{ 
        pb: 2,
        backgroundColor: 'background.paper',
        color: 'text.primary'
      }}>
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar 
            src={person.additionalData?.avatar} 
            alt={`${person.firstname} ${person.lastname}`}
            sx={{ width: 64, height: 64, fontSize: '1.5rem', fontWeight: 600 }}
          >
            {getInitials(person.firstname, person.lastname)}
          </Avatar>
          <Box flex={1} minWidth={0}>
            {person.addressTitle && (
              <Typography variant="caption" color="text.secondary" display="block">
                {person.addressTitle}
              </Typography>
            )}
            <Typography 
              variant="h6" 
              component="h3" 
              noWrap 
              sx={{ 
                fontWeight: 600,
                color: 'text.primary',
                display: 'block'
              }}
            >
              {person.firstname} {person.lastname}
            </Typography>
            {person.displayRoleName && (
              <Chip 
                label={person.displayRoleName} 
                size="small" 
                color="primary" 
                variant="outlined"
                sx={{ mt: 0.5 }}
              />
            )}
          </Box>
        </Box>
      </CardHeader>

      <CardContent sx={{ pt: 0 }}>
        {/* Contact Information */}
        <Box mb={3}>
          {person.email && (
            <Box display="flex" alignItems="center" gap={1.5} mb={1.5}>
              <Email fontSize="small" color="action" />
              <Link 
                href={`mailto:${person.email}`}
                color="inherit"
                underline="hover"
                sx={{ 
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  '&:hover': { color: 'primary.main' }
                }}
              >
                <Typography variant="body2">{person.email}</Typography>
              </Link>
            </Box>
          )}
          
          {person.phone && (
            <Box display="flex" alignItems="center" gap={1.5} mb={1.5}>
              <Phone fontSize="small" color="action" />
              <Link 
                href={`tel:${person.phone}`}
                color="inherit"
                underline="hover"
                sx={{ '&:hover': { color: 'primary.main' } }}
              >
                <Typography variant="body2">{person.phone}</Typography>
              </Link>
            </Box>
          )}
          
          {person.mobile && (
            <Box display="flex" alignItems="center" gap={1.5} mb={1.5}>
              <Smartphone fontSize="small" color="action" />
              <Link 
                href={`tel:${person.mobile}`}
                color="inherit"
                underline="hover"
                sx={{ '&:hover': { color: 'primary.main' } }}
              >
                <Typography variant="body2">{person.mobile}</Typography>
              </Link>
            </Box>
          )}
          
          {person.url && (
            <Box display="flex" alignItems="center" gap={1.5} mb={1.5}>
              <Language fontSize="small" color="action" />
              <Link 
                href={person.url}
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                underline="hover"
                sx={{ 
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  '&:hover': { color: 'primary.main' }
                }}
              >
                <Typography variant="body2">{person.url}</Typography>
              </Link>
            </Box>
          )}
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Metadata */}
        <Box display="flex" gap={2} sx={{ mb: 2 }}>
          <Box flex={1}>
            <Box display="flex" alignItems="center" gap={1}>
              <CalendarToday sx={{ fontSize: 16, color: 'text.secondary' }} />
              <Box>
                <Typography variant="caption" color="text.secondary" fontWeight={500}>
                  Created
                </Typography>
                <Typography variant="body2" fontSize="0.75rem">
                  {formatDate(person.created)}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box flex={1}>
            <Box display="flex" alignItems="center" gap={1}>
              <Person sx={{ fontSize: 16, color: 'text.secondary' }} />
              <Box>
                <Typography variant="caption" color="text.secondary" fontWeight={500}>
                  Permissions
                </Typography>
                <Typography variant="body2" fontSize="0.75rem">
                  {permissionCount} groups
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Action Buttons */}
        <Box display="flex" gap={1} pt={1}>
          <Button 
            variant="outlined" 
            size="small" 
            startIcon={<Visibility />}
            sx={{ flex: 1 }}
          >
            View Profile
          </Button>
          <Button 
            variant="contained" 
            size="small" 
            startIcon={<Message />}
            sx={{ flex: 1 }}
          >
            Contact
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};