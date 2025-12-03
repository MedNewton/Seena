// src/components/layout/Header.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Box, Button, Stack, Typography } from "@mui/material";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "APP", href: "/app" },
  { label: "EXPERIENCES", href: "/experiences" },
  { label: "CIRCLES", href: "/circles" },
  { label: "SCREENING", href: "/screening" },
  { label: "ABOUT", href: "/about" },
];

const SCROLL_THRESHOLD = 8;

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      component="header"
      sx={{
        position: "fixed",
        top: 16,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: (theme) => theme.zIndex.appBar + 1,
        width: "min(1280px, 100% - 32px)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 999,
          px: 3,
          py: 1.5,
          boxShadow: isScrolled
            ? "0px 16px 40px rgba(15, 23, 42, 0.24)"
            : "0px 24px 70px rgba(15, 23, 42, 0.32)",
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 0.72)"
            : "#FFFFFF",
          backdropFilter: isScrolled ? "blur(18px)" : "none",
          border: isScrolled
            ? "1px solid rgba(255, 255, 255, 0.8)"
            : "1px solid rgba(148, 163, 184, 0.16)",
          transition:
            "background-color 180ms ease-out, box-shadow 180ms ease-out, backdrop-filter 180ms ease-out, border-color 180ms ease-out",
        }}
      >
        {/* Left: Logo / Brand */}
        <Typography
          component={Link}
          href="/"
          sx={{
            textDecoration: "none",
            fontWeight: 500,
            fontSize: 24,
            color: "#111827",
          }}
        >
          Seena
        </Typography>

        {/* Center: Nav links */}
        <Stack
          direction="row"
          spacing={4}
          sx={{
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
          }}
        >
          {navItems.map((item) => (
            <Typography
              key={item.href}
              component={Link}
              href={item.href}
              sx={{
                position: "relative",
                textDecoration: "none",
                fontSize: 14,
                letterSpacing: 1.2,
                fontWeight: 500,
                textTransform: "uppercase",
                color: "#4B5563",
                pb: 0.5, // space between text and underline
                transition: "color 150ms ease-out",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: "100%",
                  height: 2,
                  borderRadius: 999,
                  backgroundColor: "#F9733C", // same orange as button
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 180ms ease-out",
                },
                "&:hover": {
                  color: "#111827",
                },
                "&:hover::after": {
                  transform: "scaleX(1)",
                },
              }}
            >
              {item.label}
            </Typography>
          ))}
        </Stack>

        {/* Right: CTA */}
        <Button
          component={Link}
          href="/join"
          sx={{
            borderRadius: 999,
            px: 4,
            py: 1.2,
            fontWeight: 600,
            letterSpacing: 1,
            fontSize: 14,
            textTransform: "uppercase",
            color: "#FFFFFF",
            backgroundColor: "#F9733C",
            boxShadow: "0px 2px 10px 2px rgba(249, 115, 60, 0.4)",
            "&:hover": {
              backgroundColor: "#fb6b2d",
              boxShadow: "0px 2px 10px 2px rgba(249, 115, 60, 0.4)",
            },
          }}
        >
          Join us
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
