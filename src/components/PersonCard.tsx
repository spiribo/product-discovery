import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Mail, 
  Phone, 
  Smartphone, 
  Globe, 
  Calendar, 
  User, 
  Eye, 
  MessageCircle 
} from 'lucide-react';

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
    <Card className={`w-full max-w-md mx-auto hover:shadow-lg transition-shadow duration-300 ${className}`}>
      <CardHeader className="pb-4">
        <div className="flex items-center gap-4">
          <Avatar className="w-16 h-16">
            <AvatarImage 
              src={person.additionalData?.avatar} 
              alt={`${person.firstname} ${person.lastname}`}
            />
            <AvatarFallback className="text-lg font-semibold">
              {getInitials(person.firstname, person.lastname)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            {person.addressTitle && (
              <p className="text-sm text-muted-foreground mb-1">
                {person.addressTitle}
              </p>
            )}
            <h3 className="text-lg font-semibold truncate">
              {person.firstname} {person.lastname}
            </h3>
            {person.displayRoleName && (
              <Badge variant="outline" className="mt-1">
                {person.displayRoleName}
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Contact Information */}
        <div className="space-y-3 mb-6">
          {person.email && (
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <a 
                href={`mailto:${person.email}`}
                className="text-sm hover:text-primary transition-colors truncate"
              >
                {person.email}
              </a>
            </div>
          )}
          
          {person.phone && (
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-muted-foreground" />
              <a 
                href={`tel:${person.phone}`}
                className="text-sm hover:text-primary transition-colors"
              >
                {person.phone}
              </a>
            </div>
          )}
          
          {person.mobile && (
            <div className="flex items-center gap-3">
              <Smartphone className="w-4 h-4 text-muted-foreground" />
              <a 
                href={`tel:${person.mobile}`}
                className="text-sm hover:text-primary transition-colors"
              >
                {person.mobile}
              </a>
            </div>
          )}
          
          {person.url && (
            <div className="flex items-center gap-3">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <a 
                href={person.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-primary transition-colors truncate"
              >
                {person.url}
              </a>
            </div>
          )}
        </div>

        <Separator className="mb-4" />

        {/* Metadata */}
        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-xs font-medium text-muted-foreground">
                  Created
                </p>
                <p className="text-xs">
                  {formatDate(person.created)}
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-xs font-medium text-muted-foreground">
                  Permissions
                </p>
                <p className="text-xs">
                  {permissionCount} groups
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
          >
            <Eye className="w-4 h-4 mr-2" />
            View Profile
          </Button>
          <Button 
            size="sm" 
            className="flex-1"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Contact
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};