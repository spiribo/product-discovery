import { PersonCard } from "@/components/PersonCard";

const Index = () => {
  // Sample person data for demonstration
  const samplePerson = {
    id: "person-123",
    created: "2023-08-24T14:15:22Z",
    updated: "2024-01-15T10:30:45Z",
    addressTitle: "Dr.",
    firstname: "Sarah",
    lastname: "Johnson",
    displayRoleName: "Senior Developer",
    phone: "+1 (555) 123-4567",
    mobile: "+1 (555) 987-6543",
    email: "sarah.johnson@example.com",
    url: "https://sarahjohnson.dev",
    additionalData: {
      id: "additional-456",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      permissions: {
        admin: {
          read: true,
          write: true,
          delete: true
        },
        developer: {
          read: true,
          write: true,
          delete: false
        },
        user: {
          read: true,
          write: false,
          delete: false
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Person Card Component</h1>
          <p className="text-xl text-muted-foreground">
            Beautiful personal information display using shadcn/ui components
          </p>
        </div>
        
        <div className="flex justify-center">
          <PersonCard person={samplePerson} />
        </div>
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="p-4 rounded-lg bg-card border">
              <h3 className="font-medium mb-2">Contact Information</h3>
              <p className="text-sm text-muted-foreground">
                Displays email, phone, mobile, and website with clickable links
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border">
              <h3 className="font-medium mb-2">Avatar & Role</h3>
              <p className="text-sm text-muted-foreground">
                Shows profile picture with fallback initials and role badge
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border">
              <h3 className="font-medium mb-2">Metadata</h3>
              <p className="text-sm text-muted-foreground">
                Creation date and permission group count with action buttons
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
