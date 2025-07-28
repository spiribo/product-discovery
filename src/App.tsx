import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import Home from "./pages/Home";
import Personal from "./pages/Personal";
import Messages from "./pages/Messages";
import NotFound from "./pages/NotFound";
import AppBottomNavigation from "./components/BottomNavigation";

const queryClient = new QueryClient();

// Create Material UI theme
const theme = createTheme({
  palette: {
    mode: 'light',
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
        <Box sx={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/messages" element={<Messages />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <AppBottomNavigation />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
