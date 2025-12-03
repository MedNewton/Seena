// src/components/branches/Branches.tsx
"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import type { StaticImageData } from "next/image";

import liveImg from "@/assets/images/training1.webp";
import resetImg from "@/assets/images/retreat1.webp";
import dinnerImg from "@/assets/images/dinner1.webp";

type BranchCardProps = {
  title: string;
  description: string;
  image: StaticImageData;
  isTall?: boolean;
};

const BranchCard: React.FC<BranchCardProps> = ({
  title,
  description,
  image,
  isTall = false,
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: 4,
        overflow: "hidden",
        minHeight: isTall
          ? { xs: 260, md: 320 }
          : { xs: 260, md: 260 },
        color: "#FFFFFF",
        cursor: "pointer",
        boxShadow: "0px 24px 60px rgba(15, 23, 42, 0.40)",
        "&:hover .branch-image": {
          transform: "scale(1.05)",
        },
        "&:hover .branch-overlay": {
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.55) 100%)",
        },
      }}
    >
      {/* Background image */}
      <Box
        className="branch-image"
        sx={{
          position: "absolute",
          inset: 0,
          transform: "scale(1.02)",
          transformOrigin: "center",
          transition: "transform 500ms ease-out",
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          style={{
            objectFit: "cover",
          }}
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={false}
        />
      </Box>

      {/* Dark gradient overlay */}
      <Box
        className="branch-overlay"
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.70) 100%)",
          transition: "background 350ms ease-out",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          px: { xs: 3, md: 4 },
          py: { xs: 3, md: 4 },
        }}
      >
        <Box>
          <Typography
            component="h3"
            sx={{
              fontSize: { xs: 22, md: 26 },
              fontWeight: 500,
              mb: 1.5,
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              maxWidth: 360,
              fontSize: { xs: 13, md: 15 },
              lineHeight: 1.6,
              fontWeight: 300,
              color: "rgba(249,250,251,0.95)",
            }}
          >
            {description}
          </Typography>
        </Box>

        <Button
          sx={{
            position: "relative",
            overflow: "hidden",
            alignSelf: "flex-start",
            mt: { xs: 3, md: 4 },
            borderRadius: 2,
            minWidth: { xs: 140, md: 170 },
            px: 0,
            py: 1.2,
            fontSize: 14,
            textTransform: "uppercase",
            letterSpacing: 1,
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
              transition: "transform 260ms cubic-bezier(0.22, 1, 0.36, 1)",
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
      </Box>
    </Box>
  );
};

const Branches: React.FC = () => {
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
          fontSize: { xs: 24, md: 32 },
          fontWeight: 300,
          maxWidth: 820,
          mx: "auto",
          mb: { xs: 4, md: 6 },
        }}
      >
        Helping you create an environment you don&apos;t have to
        <br />
        fight against.
      </Typography>

      {/* Cards grid */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 1280,
          mx: "auto",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2, minmax(0, 1fr))",
          },
          gap: { xs: 3, md: 4 },
        }}
      >
        {/* Top-left */}
        <BranchCard
          title="Seena Live"
          description="Community fitness & wellness events in your city."
          image={liveImg}
          isTall
        />

        {/* Top-right */}
        <BranchCard
          title="Seena Reset"
          description="Local & international wellness retreats designed to rejuvenate you."
          image={resetImg}
          isTall
        />

        {/* Bottom full-width */}
        <Box
          sx={{
            gridColumn: { xs: "auto", md: "1 / -1" },
          }}
        >
          <BranchCard
            title="Seena Dinner Club"
            description="Exclusive invite-only events that bring together dynamic business leaders, innovators, and influencers in the wellness space."
            image={dinnerImg}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Branches;
