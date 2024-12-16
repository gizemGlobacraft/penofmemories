import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./styles/theme";
import { LandingPage } from "./pages/LandingPage";
import "@fontsource/playfair-display";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <LandingPage />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
