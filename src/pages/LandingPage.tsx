import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
} from "@mui/material";
import { Image, Brush, Palette, Send } from "lucide-react";

export const LandingPage = () => {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          background: "linear-gradient(45deg, #f8f3ff 30%, #fff5f5 90%)",
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  fontWeight: "light",
                  color: "#2d2d2d",
                  mb: 2,
                  fontFamily: "Playfair Display",
                }}
              >
                Anılarınız,
                <Box component="span" sx={{ color: "#9c7bb9" }}>
                  {" "}
                  tek çizgiyle{" "}
                </Box>
                sanata dönüşsün
              </Typography>
              <Typography
                sx={{
                  color: "#666",
                  mb: 4,
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  lineHeight: 1.8,
                }}
              >
                Fotoğraflarınızı minimalist sanat eserlerine dönüştürüyoruz. Her
                anı, tek çizgiyle anlatılan benzersiz bir hikayeye dönüşür.
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "#9c7bb9",
                  "&:hover": { bgcolor: "#856ba1" },
                  borderRadius: "28px",
                  px: 4,
                }}
              >
                Hemen Başlayın
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Örnek görsel alanı */}
              <Box
                sx={{
                  width: "100%",
                  height: { xs: "300px", md: "400px" },
                  bgcolor: "rgba(156, 123, 185, 0.1)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography color="text.secondary">Örnek Görsel</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Process Section */}
      <Box sx={{ width: "100%", py: { xs: 8, md: 12 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            sx={{
              mb: { xs: 6, md: 8 },
              fontFamily: "Playfair Display",
              color: "#2d2d2d",
            }}
          >
            Nasıl Çalışır?
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                icon: <Image size={40} />,
                title: "Fotoğrafınızı Gönderin",
                description: "En değerli anınızı seçin",
              },
              {
                icon: <Brush size={40} />,
                title: "Tasarımı Bekleyin",
                description: "Sanatçılarımız özenle çalışsın",
              },
              {
                icon: <Palette size={40} />,
                title: "Eserinizi Alın",
                description: "Tek çizgi sanatınızı teslim edelim",
              },
            ].map((step, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    bgcolor: "transparent",
                  }}
                >
                  <Box sx={{ color: "#9c7bb9", mb: 2 }}>{step.icon}</Box>
                  <Typography variant="h5" sx={{ mb: 2 }}>
                    {step.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {step.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Form */}
      <Box
        sx={{
          width: "100%",
          py: { xs: 8, md: 12 },
          bgcolor: "#f8f3ff",
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h3"
            align="center"
            sx={{
              mb: { xs: 6, md: 8 },
              fontFamily: "Playfair Display",
              color: "#2d2d2d",
            }}
          >
            Anılarınızı Paylaşın
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField fullWidth label="Adınız" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="E-posta"
                type="email"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Mesajınız"
                multiline
                rows={4}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                size="large"
                endIcon={<Send />}
                sx={{
                  bgcolor: "#9c7bb9",
                  "&:hover": { bgcolor: "#856ba1" },
                  borderRadius: "28px",
                }}
              >
                Gönder
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
