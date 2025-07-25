import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Smartphone, Globe, Calendar, User } from "lucide-react";

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
    <Card className={`w-full max-w-md mx-auto hover:shadow-lg transition-shadow duration-200 ${className}`}>
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-4">
          <Avatar className="h-16 w-16">
            <AvatarImage 
              src={person.additionalData?.avatar} 
              alt={`${person.firstname} ${person.lastname}`} 
            />
            <AvatarFallback className="text-lg font-semibold">
              {getInitials(person.firstname, person.lastname)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              {person.addressTitle && (
                <span className="text-sm text-muted-foreground">{person.addressTitle}</span>
              )}
            </div>
            <h3 className="text-xl font-semibold text-foreground truncate">
              {person.firstname} {person.lastname}
            </h3>
            {person.displayRoleName && (
              <Badge variant="secondary" className="mt-1">
                {person.displayRoleName}
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Contact Information */}
        <div className="space-y-3">
          {person.email && (
            <div className="flex items-center space-x-3 text-sm">
              <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <a 
                href={`mailto:${person.email}`}
                className="text-foreground hover:text-primary transition-colors truncate"
              >
                {person.email}
              </a>
            </div>
          )}
          
          {person.phone && (
            <div className="flex items-center space-x-3 text-sm">
              <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <a 
                href={`tel:${person.phone}`}
                className="text-foreground hover:text-primary transition-colors"
              >
                {person.phone}
              </a>
            </div>
          )}
          
          {person.mobile && (
            <div className="flex items-center space-x-3 text-sm">
              <Smartphone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <a 
                href={`tel:${person.mobile}`}
                className="text-foreground hover:text-primary transition-colors"
              >
                {person.mobile}
              </a>
            </div>
          )}
          
          {person.url && (
            <div className="flex items-center space-x-3 text-sm">
              <Globe className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <a 
                href={person.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors truncate"
              >
                {person.url}
              </a>
            </div>
          )}
        </div>

        {/* Metadata */}
        <div className="pt-4 border-t border-border">
          <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Calendar className="h-3 w-3" />
              <div>
                <div className="font-medium">Created</div>
                <div>{formatDate(person.created)}</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <User className="h-3 w-3" />
              <div>
                <div className="font-medium">Permissions</div>
                <div>{permissionCount} groups</div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button variant="outline" size="sm" className="flex-1">
            View Profile
          </Button>
          <Button variant="default" size="sm" className="flex-1">
            Contact
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};