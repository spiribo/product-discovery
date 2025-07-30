import React from "react"
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Container,
} from "@mui/material"
import {
  AccountCircle,
  HelpCenter,
  NewspaperOutlined,
  Build,
} from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import { useTheme } from "@mui/material/styles"
import { themeExtensions } from "../theme"

import TeaserCarousel from "../components/TeaserCarousel"
import quartiersbereichImg from "../assets/quartiersbereich.jpg"
import mietermagazinImg from "../assets/mietermagazin.jpg"
import gaestewohnungenImg from "../assets/gaestewohnungen.jpg"
import wohnungsangeboteImg from "../assets/wohnungsangebote.jpg"

const Home = () => {
  const navigate = useNavigate()
  const theme = useTheme()

  const services = [
    {
      icon: AccountCircle,
      label: "Kundenkonto",
      action: () => console.log("Kundenkonto clicked"),
    },
    {
      icon: HelpCenter,
      label: "Anliegen",
      action: () => console.log("Anliegen clicked"),
    },
    {
      icon: NewspaperOutlined,
      label: "Neuigkeiten",
      action: () => console.log("Neuigkeiten clicked"),
    },
    {
      icon: Build,
      label: "Schadencenter",
      action: () => console.log("Schadencenter clicked"),
    },
  ]

  return (
    <Box sx={{ bgcolor: "background.default", pb: 10 }}>
      {/* Teaser Carousel */}
      <TeaserCarousel />

      {/* Content */}
      <Container maxWidth="md">
        <Box sx={{ p: 2 }}>
          {/* Mein GBC Cockpit Section */}
          <Box sx={{ mb: 4 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(2, 1fr)",
                  sm: "repeat(3, 1fr)",
                  md: "repeat(4, 1fr)",
                },
                gap: 2,
              }}
            >
              {services.map((service, index) => (
                <Card
                  key={index}
                  sx={{
                    aspectRatio: "1/1",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover": { bgcolor: "action.hover" },
                  }}
                  onClick={() => service.action()}
                >
                  <CardContent
                    sx={{
                      p: 3,
                      "&:last-child": { pb: 3 },
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <service.icon
                      sx={{ fontSize: 40, color: "dark-gray", mb: 1 }}
                    />
                    <Typography variant="body1" sx={{ fontWeight: "normal" }}>
                      {service.label}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>

          {/* Image Cards Section */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Card
              sx={{ position: "relative", height: 160, overflow: "hidden" }}
            >
              <Box
                sx={{
                  height: "100%",
                  backgroundImage:
                    themeExtensions.gradients.primaryOverlay(
                      quartiersbereichImg
                    ),
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "light" }}>
                  QUARTIERSBEREICH
                </Typography>
              </Box>
            </Card>

            <Card
              sx={{ position: "relative", height: 160, overflow: "hidden" }}
            >
              <Box
                sx={{
                  height: "100%",
                  backgroundImage:
                    themeExtensions.gradients.primaryOverlay(mietermagazinImg),
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "light" }}>
                  DEIN MIETERMAGAZIN
                </Typography>
              </Box>
            </Card>

            <Card
              sx={{ position: "relative", height: 160, overflow: "hidden" }}
            >
              <Box
                sx={{
                  height: "100%",
                  backgroundImage:
                    themeExtensions.gradients.primaryOverlay(
                      gaestewohnungenImg
                    ),
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "light" }}>
                  GÄSTEWOHNUNGEN
                </Typography>
              </Box>
            </Card>

            <Card
              sx={{ position: "relative", height: 160, overflow: "hidden" }}
            >
              <Box
                sx={{
                  height: "100%",
                  backgroundImage:
                    themeExtensions.gradients.primaryOverlay(
                      wohnungsangeboteImg
                    ),
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "light" }}>
                  WOHNUNGSANGEBOTE
                </Typography>
              </Box>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Home
