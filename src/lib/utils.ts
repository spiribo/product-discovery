// Utility functions for the Material UI project

export function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

export function getInitials(firstname: string, lastname: string) {
  return `${firstname.charAt(0)}${lastname.charAt(0)}`.toUpperCase();
}
