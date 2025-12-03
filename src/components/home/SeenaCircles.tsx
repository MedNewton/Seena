// src/components/circles/SeenaCircles.tsx
"use client";

import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import circlesHero from "@/assets/images/circles1.webp";

type SeenaCirclesProps = {
  backgroundImageUrl?: string;
};

const SeenaCircles: React.FC<SeenaCirclesProps> = ({
  backgroundImageUrl = circlesHero.src,
}) => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: 1280,
          mx: "auto",
          borderRadius: 6,
          overflow: "hidden",
          height: { xs: 460, md: "80vh" },
          minHeight: { md: 520 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFFFF",
          textAlign: "center",
          boxShadow: {
            xs: "0px 18px 45px rgba(15,23,42,0.35)",
            md: "0px 30px 80px rgba(15,23,42,0.5)",
          },
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay so text stays readable */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.75) 100%)",
          }}
        />

        {/* Content */}
        <Stack
          spacing={{ xs: 2.5, md: 3 }}
          alignItems="center"
          sx={{
            position: "relative",
            zIndex: 1,
            px: { xs: 3, md: 6 },
            maxWidth: 800,
          }}
        >
          <Typography
            sx={{
              fontSize: 14,
              letterSpacing: 2,
              textTransform: "uppercase",
              fontWeight: 400,
              color: "rgba(249,250,251,0.9)",
            }}
          >
            Seena Circles
          </Typography>

          <Typography
            component="h2"
            sx={{
              fontSize: { xs: 32, md: 56 },
              lineHeight: { xs: 1.15, md: 1.05 },
              fontWeight: 400,
            }}
          >
            From Burnout to
            <br />
            balance together!
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 14, md: 18 },
              lineHeight: 1.6,
              fontWeight: 300,
              color: "rgba(249,250,251,0.92)",
              maxWidth: 640,
            }}
          >
            A complete transformation system that guides you from exhaustion to
            energy, confusion to clarity, and survival to thriving.
          </Typography>

          <Button
            sx={{
              mt: { xs: 2, md: 3 },
              position: "relative",
              overflow: "hidden",
              borderRadius: 2,
              minWidth: { xs: 170, md: 190 },
              px: 0,
              py: 1.6,
              fontSize: 14,
              textTransform: "uppercase",
              letterSpacing: 1.4,
              fontWeight: 600,
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
            Join Community
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default SeenaCircles;
