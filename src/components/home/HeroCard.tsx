// src/components/hero/HeroCard.tsx
"use client";

import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { AnimatePresence, motion } from "motion/react";

import heroCardBg from "@/assets/images/heroCard3.webp";

type HeroWord = "calm" | "control" | "clarity" | undefined;

const HERO_WORDS: HeroWord[] = ["calm", "control", "clarity"];

type HeroCardProps = {
  backgroundImageUrl?: string;
};

const HeroCard: React.FC<HeroCardProps> = ({
  backgroundImageUrl = heroCardBg.src,
}) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_WORDS.length);
    }, 2500);

    return () => window.clearInterval(id);
  }, []);

  const currentWord: HeroWord = HERO_WORDS[index];

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: 1280,
        mx: "auto",
        mt: 10,
        borderRadius: 6,
        overflow: "hidden",
        height: { xs: 420, md: "82vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#FFFFFF",
        textAlign: "center",
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: {
          xs: "0px 18px 45px rgba(15, 23, 42, 0.38)",
          md: "0px 30px 80px rgba(15, 23, 42, 0.45)",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          px: { xs: 2, md: 4 },
        }}
      >
        <Stack direction="column" spacing={{ xs: 2, md: 3 }} alignItems="center">
          {/* Main hero line */}
          <Stack
            direction="row"
            spacing={{ xs: 1.5, md: 3 }}
            alignItems="center"
            sx={{
              fontSize: { xs: 32, md: 64 },
              fontWeight: 300,
            }}
          >
            <Typography
              component="span"
              sx={{ fontSize: "inherit", fontWeight: "inherit" }}
            >
              Find
            </Typography>

            <Typography
              component="span"
              sx={{ fontSize: { xs: 30, md: 56 }, lineHeight: 1 }}
            >
              •
            </Typography>

            <Box
              sx={{
                width: { xs: 160, md: 220 },
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ y: -24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 24, opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    display: "inline-block",
                    fontSize: "inherit",
                    fontWeight: 300,
                  }}
                >
                  {currentWord}
                </motion.span>
              </AnimatePresence>
            </Box>

            <Typography
              component="span"
              sx={{ fontSize: { xs: 30, md: 56 }, lineHeight: 1 }}
            >
              •
            </Typography>

            <Typography
              component="span"
              sx={{ fontSize: "inherit", fontWeight: "inherit" }}
            >
              within
            </Typography>
          </Stack>

          {/* Subtitle */}
          <Typography
            sx={{
              mt: { xs: 1, md: 3 },
              maxWidth: 640,
              mx: "auto",
              fontSize: { xs: 14, md: 18 },
              fontWeight: 300,
              lineHeight: 1.6,
              color: "rgba(249, 250, 251, 0.9)",
            }}
          >
            Moderns live rewards overdrive. Our body calls it inflammation, our
            mind calls it burnout.
          </Typography>

          {/* CTAs: PHYSICAL / DIGITAL */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mt: { xs: 2.5, md: 3.5 } }}
            justifyContent="center"
            alignItems="center"
            pt={2}
          >
            {["PHYSICAL", "DIGITAL"].map((label) => (
              <Button
                key={label}
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 2,
                  minWidth: { xs: 140, md: 170 }, // same size
                  px: 0,
                  py: 1.4,
                  fontSize: 14,
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
                {label}
              </Button>
            ))}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default HeroCard;
