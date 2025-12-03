// src/components/restore/RestoreCard.tsx
"use client";

import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

const RestoreCard: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1280,
        mx: "auto",
        borderRadius: 6,
        overflow: "hidden",
        color: "#FFFFFF",
        textAlign: "center",
        py: { xs: 6, md: 6 },
        px: { xs: 3, md: 6 },
        boxShadow: {
          xs: "0px 18px 45px rgba(15, 23, 42, 0.35)",
          md: "0px 30px 80px rgba(15, 23, 42, 0.45)",
        },
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "repeat",
        backgroundImage:
          'url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%223000%22 height=%221500%22%3E%3Cg filter=%22url(%23a)%22%3E%3Cpath fill=%22%232A4D7B%22 d=%22M-1500-750h6000v3000h-6000z%22%2F%3E%3Cpath d=%22M-549.75-531.75-793.5 1185l253.5 656.25L1499.25 799.5%22 fill=%22%232A4D7B%22%2F%3E%3Cpath d=%22m524.25-438.75-331.5 864 777 1086.75 1392-1239.75M3039.75 429 1242 2151.75l93.75 520.5 2292.75-1866%22 fill=%22%23121E2F%22%2F%3E%3Cpath d=%22m1130.25 535.5-1506 733.5L795 1976.25l468-1066.5%22 fill=%22%232A4D7B%22%2F%3E%3Cpath d=%22M1771.5 1405.5 567 2607l543 858.75 1426.5-511.5%22 fill=%22%23121E2F%22%2F%3E%3Cpath d=%22m1822.5 1393.5-524.25 1446L2232 3315l1050-1263%22 fill=%22%232A4D7B%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter id=%22a%22 x=%22-300%22 y=%22-300%22 width=%223600%22 height=%222100%22 filterUnits=%22userSpaceOnUse%22 color-interpolation-filters=%22sRGB%22%3E%3CfeFlood flood-opacity=%220%22 result=%22BackgroundImageFix%22%2F%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22BackgroundImageFix%22 result=%22shape%22%2F%3E%3CfeGaussianBlur stdDeviation=%22300%22 result=%22effect1_foregroundBlur_1_2%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E")',
      }}
    >
      <Stack spacing={{ xs: 3, md: 4 }} alignItems="center">
        <Typography
          component="h2"
          sx={{
            maxWidth: 900,
            mx: "auto",
            fontSize: { xs: 28, md: 42 },
            lineHeight: { xs: 1.2, md: 1.15 },
            fontWeight: 300,
          }}
        >
          Seena restores your balance
          <br />
          from the inside out.
        </Typography>

        <Typography
          sx={{
            maxWidth: 640,
            mx: "auto",
            fontSize: { xs: 14, md: 18 },
            fontWeight: 300,
            lineHeight: 1.6,
            color: "rgba(249, 250, 251, 0.9)",
          }}
        >
          Physical, mental, and emotional balance.
        </Typography>

        <Stack
          direction="row"
          spacing={{ xs: 2.5, md: 4 }}
          justifyContent="center"
          sx={{ mt: { xs: 2, md: 3 } }}
        >
          {["Mind", "Body", "Soul"].map((label) => (
            <Button
              key={label}
              variant="outlined"
              sx={{
                width: { xs: 96, md: 128 },
                height: { xs: 96, md: 128 },
                borderRadius: "999px",
                borderWidth: 2,
                borderStyle: "solid",
                borderColor: "rgba(255,255,255,0.9)",
                color: "#FFFFFF",
                textTransform: "none",
                fontSize: { xs: 16, md: 18 },
                fontWeight: 400,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
                "&:hover": {
                  borderColor: "#FFFFFF",
                  backgroundColor: "rgba(255,255,255,0.08)",
                },
              }}
            >
              {label}
            </Button>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default RestoreCard;
