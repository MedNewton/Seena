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
        backgroundColor: "#121E2F",
        backgroundImage: `
          radial-gradient(circle at 20% 10%, rgba(42, 77, 123, 0.85) 0, rgba(42, 77, 123, 0) 55%),
          radial-gradient(circle at 80% 85%, rgba(42, 77, 123, 0.8) 0, rgba(42, 77, 123, 0) 55%),
          radial-gradient(circle at 50% 35%, rgba(255, 255, 255, 0.18) 0, rgba(255, 255, 255, 0) 55%),
          linear-gradient(135deg, #121E2F 0%, #121E2F 60%, #0B1524 100%)
        `,
        backgroundBlendMode: "screen, normal, screen, normal",
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
