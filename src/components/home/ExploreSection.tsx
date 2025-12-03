// src/components/explore/ExploreSection.tsx
"use client";

import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import digitalGuidanceImg from "@/assets/images/meditation1.webp";
import realExperiencesImg from "@/assets/images/group-yoga1.webp";

type ExploreCardConfig = {
  id: "digital" | "real";
  title: string;
  subtitle: string;
  imageSrc: string;
};

const CARDS: ExploreCardConfig[] = [
  {
    id: "digital",
    title: "Digital Guidance",
    subtitle: "AI coach | breathwork & fitness | Inner balance",
    imageSrc: digitalGuidanceImg.src,
  },
  {
    id: "real",
    title: "Real Experiences",
    subtitle: "Live events | Retreats | Community",
    imageSrc: realExperiencesImg.src,
  },
];

const ExploreSection: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1280,
        mx: "auto",
        borderRadius: 6,
        overflow: "hidden",
        boxShadow: {
          xs: "0px 18px 45px rgba(15, 23, 42, 0.32)",
          md: "0px 30px 80px rgba(15, 23, 42, 0.45)",
        },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          minHeight: { xs: 420, md: 520 },
        }}
      >
        {CARDS.map((card) => (
          <Box
            key={card.id}
            sx={{
              position: "relative",
              color: "#FFFFFF",
              backgroundImage: `url(${card.imageSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-start",
            }}
          >
            {/* Dark bottom gradient for readability */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.65) 80%)",
              }}
            />

            <Stack
              spacing={2}
              sx={{
                position: "relative",
                zIndex: 1,
                p: { xs: 3, md: 5 },
                maxWidth: { xs: "90%", md: "80%" },
              }}
            >
              <Typography
                component="h3"
                sx={{
                  fontSize: { xs: 26, md: 34 },
                  lineHeight: { xs: 1.2, md: 1.15 },
                  fontWeight: 300,
                }}
              >
                {card.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 13, md: 16 },
                  fontWeight: 300,
                  lineHeight: 1.6,
                  color: "rgba(249, 250, 251, 0.9)",
                }}
              >
                {card.subtitle}
              </Typography>

              <Button
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  alignSelf: "flex-start",
                  mt: 1,
                  borderRadius: 2,
                  minWidth: { xs: 140, md: 170 },
                  px: 0,
                  py: 1.2,
                  fontSize: { xs: 13, md: 14 },
                  fontWeight: 600,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  borderWidth: 1.5,
                  borderStyle: "solid",
                  borderColor: "rgba(255,255,255,0.9)",
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  zIndex: 0,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "#F9733C",
                    borderRadius: 1,
                    transform: "translateY(100%)",
                    transformOrigin: "bottom center",
                    transition:
                      "transform 260ms cubic-bezier(0.22, 1, 0.36, 1)",
                    zIndex: -1,
                  },
                  "&:hover::before": {
                    transform: "translateY(0%)",
                  },
                  "&:hover": {
                    borderColor: "transparent",
                  },
                }}
              >
                Explore
              </Button>
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ExploreSection;
