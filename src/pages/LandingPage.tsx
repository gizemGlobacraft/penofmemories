import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import { Image, Brush, Palette, Send } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

interface ContactFormData {
  name: string;
  email: string;
  description: string;
}

export const LandingPage = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
    // Form submission logic here
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          bgcolor: "#faf7f5",
          minHeight: "100vh",
        }}
      >
        {/* Hero Section */}
        <Box
          sx={{
            pt: { xs: 10, md: 15 }, // Mobile için daha az padding
            pb: { xs: 6, md: 8 },
            background: "linear-gradient(45deg, #f8f3ff 30%, #fff5f5 90%)",
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
                    lineHeight: { xs: 1.2, md: 1.4 },
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
                  variant="h6"
                  sx={{
                    color: "#666",
                    mb: 4,
                    fontWeight: "light",
                    lineHeight: 1.8,
                  }}
                >
                  Fotoğraflarınızı minimalist sanat eserlerine dönüştürüyoruz.
                  Her anı, tek çizgiyle anlatılan benzersiz bir hikayeye
                  dönüşür.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "#9c7bb9",
                    "&:hover": {
                      bgcolor: "#856ba1",
                    },
                    borderRadius: "28px",
                    px: 4,
                  }}
                >
                  Nasıl Çalışır?
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* Buraya örnek bir line art SVG eklenebilir */}
              </Grid>
            </Grid>
          </Container>
        </Box>
        {/* Process Section */}
        <Container maxWidth="lg" sx={{ py: 12 }}>
          <Typography
            variant="h3"
            align="center"
            sx={{
              mb: 8,
              fontFamily: '"Playfair Display", serif',
              color: "#2d2d2d",
            }}
          >
            Süreç
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                icon: <Image size={40} />, // Memory yerine Image kullanıyoruz
                title: "Anınızı Seçin",
                description: "En değerli fotoğrafınızı bize gönderin",
              },
              {
                icon: <Brush size={40} />,
                title: "Tasarım",
                description:
                  "Sanatçılarımız tek çizgi tekniğiyle eserinizi oluştursun",
              },
              {
                icon: <Palette size={40} />,
                title: "Son Rötuşlar",
                description: "İstediğiniz düzenlemeleri yapalım",
              },
            ].map((step, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    bgcolor: "transparent",
                    textAlign: "center",
                    p: 2,
                  }}
                >
                  <Box
                    sx={{
                      color: "#9c7bb9",
                      mb: 2,
                    }}
                  >
                    {step.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      color: "#2d2d2d",
                    }}
                  >
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
        {/* Contact Form */}
        <Box sx={{ bgcolor: "#fff", py: 12 }}>
          <Container maxWidth="md">
            <Typography
              variant="h3"
              align="center"
              sx={{
                mb: 6,
                fontFamily: '"Playfair Display", serif',
                color: "#2d2d2d",
              }}
            >
              Anınızı Sanata Dönüştürelim
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Adınız"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Anınızı Anlatın"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<Send />}
                    sx={{
                      bgcolor: "#9c7bb9",
                      "&:hover": {
                        bgcolor: "#856ba1",
                      },
                      borderRadius: "28px",
                    }}
                  >
                    Gönder
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Container>
        </Box>
        {/* Footer */}
        <Box sx={{ bgcolor: "#f8f3ff", py: 4 }}>
          <Container>
            <Typography align="center" color="text.secondary">
              © 2024 PenOfMemories. Tüm hakları saklıdır.
            </Typography>
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  );
};
