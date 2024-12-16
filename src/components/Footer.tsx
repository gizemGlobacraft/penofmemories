import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  useTheme,
} from "@mui/material";
import { Instagram, Facebook, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#f8f3ff",
        py: 6,
        borderTop: "1px solid rgba(0, 0, 0, 0.05)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Playfair Display",
                fontWeight: 700,
                color: "#9c7bb9",
                mb: 2,
              }}
            >
              PenOfMemories
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Anılarınızı minimalist sanat eserlerine dönüştürüyoruz. Her
              fotoğraf, tek çizgiyle anlatılan benzersiz bir hikayeye dönüşür.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Hızlı Bağlantılar
            </Typography>
            <Link href="#" color="inherit" sx={{ display: "block", mb: 1 }}>
              Nasıl Çalışır?
            </Link>
            <Link href="#" color="inherit" sx={{ display: "block", mb: 1 }}>
              Örnekler
            </Link>
            <Link href="#" color="inherit" sx={{ display: "block", mb: 1 }}>
              SSS
            </Link>
            <Link href="#" color="inherit" sx={{ display: "block" }}>
              İletişim
            </Link>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Bizi Takip Edin
            </Typography>
            <Box>
              <IconButton aria-label="Instagram" sx={{ color: "#9c7bb9" }}>
                <Instagram />
              </IconButton>
              <IconButton aria-label="Facebook" sx={{ color: "#9c7bb9" }}>
                <Facebook />
              </IconButton>
              <IconButton aria-label="Twitter" sx={{ color: "#9c7bb9" }}>
                <Twitter />
              </IconButton>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              Abone olun, yeniliklerden haberdar olun.
            </Typography>
          </Grid>
        </Grid>

        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 4 }}
        >
          © {new Date().getFullYear()} PenOfMemories. Tüm hakları saklıdır.
        </Typography>
      </Container>
    </Box>
  );
};
