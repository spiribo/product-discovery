import { createTheme, alpha } from "@mui/material/styles"

// Define the color palette
const palette = {
  primary: {
    main: "#1e455e",
    light: "#6ba0c4",
    dark: "#2f5470",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#f0f4f7",
    light: "#ffffff",
    dark: "#bdc3c7",
    contrastText: "#333333",
  },
  background: {
    default: "#fafafa",
    paper: "#ffffff",
  },
  text: {
    primary: "#333333",
    secondary: "#666666",
  },
  action: {
    hover: alpha("#457b9d", 0.05),
    selected: alpha("#457b9d", 0.1),
  },
  divider: "#e0e0e0",
}

// Create the theme
export const theme = createTheme({
  palette,
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    // Customize Material UI components here
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          "&:hover": {
            boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: "0.7rem",
        },
      },
    },
  },
})

// Additional theme extensions for custom usage
export const themeExtensions = {
  overlays: {
    primary: alpha(palette.primary.main, 0.8),
    primaryLight: alpha(palette.primary.main, 0.7),
    primarySubtle: alpha(palette.primary.main, 0.1),
    white: alpha("#ffffff", 0.5),
    whiteHover: alpha("#ffffff", 0.1),
  },
  gradients: {
    primary: `linear-gradient(${palette.primary.dark}, ${palette.primary.main})`,
    primaryOverlay: (imageUrl: string) =>
      `linear-gradient(${alpha(palette.primary.main, 0.7)}, ${alpha(
        palette.primary.main,
        0.7
      )}), url(${imageUrl})`,
  },
}

export default theme
