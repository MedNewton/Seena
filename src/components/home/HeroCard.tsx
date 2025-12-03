// src/components/hero/HeroCard.tsx
"use client";

import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { AnimatePresence, motion } from "motion/react";

import heroCardBg from "@/assets/images/heroCard2.webp"


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
        height: { xs: 420, md: "80vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#FFFFFF",
        textAlign: "center",
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
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

      <Stack
        direction="row"
        spacing={{ xs: 1.5, md: 3 }}
        alignItems="center"
        sx={{
          position: "relative",
          zIndex: 1,
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
            minWidth: { xs: 160, md: 220 },
            display: "inline-flex",
            justifyContent: "center",
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
    </Box>
  );
};

export default HeroCard;
