"use client";

import React, { Suspense, lazy } from "react";
import { Box, CircularProgress } from "@mui/material";

// Eager load - Above the fold (turant dikhna chahiye)
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Lazy load - Below the fold (scroll pe load hoga)
const Developer = lazy(() => import("@/components/Developer"));
const Business = lazy(() => import("@/components/Business"));
const About = lazy(() => import("@/components/About"));
const OurWork = lazy(() => import("@/components/OurWork"));
const Footer = lazy(() => import("@/components/Footer"));

// Loading Skeleton
const SectionLoader = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "40vh",
      backgroundColor: "#050d1a",
    }}
  >
    <CircularProgress
      size={40}
      thickness={4}
      sx={{
        color: "#3b82f6",
        "& .MuiCircularProgress-circle": {
          strokeLinecap: "round",
        },
      }}
    />
  </Box>
);

export default function HomeClient() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        backgroundColor: "#050d1a",
        overflowX: "hidden",
      }}
    >
      {/* Always loaded immediately */}
      <Navbar />
      <Hero />

      {/* Lazy loaded sections */}
      <Suspense fallback={<SectionLoader />}>
        <Developer />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Business />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <OurWork />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </Box>
  );
}