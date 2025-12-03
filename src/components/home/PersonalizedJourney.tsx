// src/components/journey/PersonalizedJourney.tsx
"use client";

import React from "react";
import { Box, Stack, Typography } from "@mui/material";

type JourneyStep = {
  title: string;
  description: string;
};

const STEPS: JourneyStep[] = [
  {
    title: "Assess",
    description: "Discover your unique energy signature and baseline patterns",
  },
  {
    title: "Guide",
    description: "Discover your unique energy signature and baseline patterns",
  },
  {
    title: "Transform",
    description: "Discover your unique energy signature and baseline patterns",
  },
  {
    title: "Sustain",
    description: "Discover your unique energy signature and baseline patterns",
  },
];

const PersonalizedJourney: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        py: { xs: 8, md: 4 },
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          textAlign: "center",
          color: "#FFFFFF",
          fontSize: { xs: 26, md: 34 },
          fontWeight: 300,
          maxWidth: 640,
          mx: "auto",
          mb: { xs: 4, md: 6 },
        }}
      >
        Your Personalized
        <br />
        Energy Journey
      </Typography>

      {/* Card with mesh gradient */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 1280,
          mx: "auto",
          borderRadius: 6,
          overflow: "hidden",
          minHeight: { xs: 260, md: 280 },
          boxShadow: {
            xs: "0px 18px 45px rgba(15,23,42,0.35)",
            md: "0px 30px 80px rgba(15,23,42,0.5)",
          },
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "repeat",
          backgroundImage:
            'url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%223000%22 height=%221500%22%3E%3Cg filter=%22url(%23a)%22%3E%3Cpath fill=%22%232A4D7B%22 d=%22M-1500-750h6000v3000h-6000z%22%2F%3E%3Cpath d=%22M1022-84-653 86l1926 2071 259-1449%22 fill=%22%23756f61%22%2F%3E%3Cpath d=%22M1580-226 272 133l1479 1556 383-819%22 fill=%22%23121E2F%22%2F%3E%3Cpath d=%22m1440 683-70 25 91 1980 2140-1220%22 fill=%22%232A4D7B%22%2F%3E%3Cpath d=%22m-229 482-421 1164L964 2788l756-1633%22 fill=%22%23121E2F%22%2F%3E%3Cpath d=%22m1114 1338-562 521 59 1624 1930-712%22 fill=%22%23121E2F%22%2F%3E%3Cpath d=%22M3441 1230 1306 2378l1460 1225 940-1892%22 fill=%22%23756f61%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter id=%22a%22 x=%22-300%22 y=%22-300%22 width=%223600%22 height=%222100%22 filterUnits=%22userSpaceOnUse%22 color-interpolation-filters=%22sRGB%22%3E%3CfeFlood flood-opacity=%220%22 result=%22BackgroundImageFix%22%2F%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22BackgroundImageFix%22 result=%22shape%22%2F%3E%3CfeGaussianBlur stdDeviation=%22300%22 result=%22effect1_foregroundBlur_1_2%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E")',
        }}
      >
        <Box
          sx={{
            height: "100%",
            px: { xs: 3, md: 6 },
            py: { xs: 4, md: 8 },
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 4, md: 0 }}
            justifyContent="space-between"
            alignItems="center"
            sx={{
              height: "100%",
            }}
          >
            {STEPS.map((step) => (
              <Stack
                key={step.title}
                spacing={2}
                alignItems="center"
                sx={{
                  textAlign: "center",
                  color: "#FFFFFF",
                  flex: 1,
                }}
              >
                <Box
                  sx={{
                    width: { xs: 68, md: 80 },
                    height: { xs: 68, md: 80 },
                    borderRadius: "50%",
                    border: "2px solid rgba(255,255,255,0.9)",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: 18, md: 22 },
                    fontWeight: 400,
                  }}
                >
                  {step.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 13, md: 14 },
                    lineHeight: 1.6,
                    fontWeight: 300,
                    color: "rgba(249,250,251,0.95)",
                    maxWidth: 220,
                  }}
                >
                  {step.description}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default PersonalizedJourney;
