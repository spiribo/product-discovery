import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Create Material UI theme with custom color palette
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#606C38', // Dark moss green
    },
    secondary: {
      main: '#BC6C25', // Tiger's Eye
    },
    background: {
      default: '#283618', // Pakistan green
      paper: '#364328', // Slightly lighter than default
    },
    text: {
      primary: '#FEFAE0', // Cornsilk
      secondary: '#DDA15E', // Lighter orange for secondary text
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
