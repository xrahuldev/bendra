'use client';

import React from 'react';
import { Box, Button, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { ArrowForward, PlayArrow } from '@mui/icons-material';
import Link from 'next/link';

/* ── Global keyframes ── */
const HeroStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

    @keyframes heroFadeUp {
      from { opacity: 0; transform: translateY(28px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes heroTagline {
      from { opacity: 0; transform: translateY(12px); letter-spacing: 6px; }
      to   { opacity: 1; transform: translateY(0);   letter-spacing: 3px; }
    }
    @keyframes logoFloat {
      0%, 100% { transform: translateY(-50%) translateY(0px) rotate(0deg) scale(1); }
      50%       { transform: translateY(-50%) translateY(-15px) rotate(1deg) scale(1.02); }
    }
    @keyframes logoFloatMobile {
      0%, 100% { transform: translateY(0px) scale(1); }
      50%       { transform: translateY(-10px) scale(1.03); }
    }
    @keyframes logoGlow {
      0%, 100% { 
        filter: drop-shadow(0 0 40px rgba(59,130,246,0.8)) 
                drop-shadow(0 0 80px rgba(59,130,246,0.4))
                drop-shadow(0 0 120px rgba(8,18,42,0.6)); 
      }
      50% { 
        filter: drop-shadow(0 0 60px rgba(59,130,246,1)) 
                drop-shadow(0 0 120px rgba(59,130,246,0.6))
                drop-shadow(0 0 180px rgba(8,18,42,0.8)); 
      }
    }
    @keyframes networkPulse {
      0%, 100% { opacity: 0.4; }
      50%       { opacity: 0.8; }
    }
    @keyframes dataFlow {
      0%   { transform: translateX(-100%) translateY(0); opacity: 0; }
      10%  { opacity: 1; }
      90%  { opacity: 1; }
      100% { transform: translateX(100%) translateY(-20px); opacity: 0; }
    }
    @keyframes shimmerCta {
      0%   { background-position: -200% center; }
      100% { background-position:  200% center; }
    }
    @keyframes borderPulse {
      0%, 100% { border-color: rgba(59,130,246,0.3); box-shadow: 0 0 0 rgba(59,130,246,0); }
      50%       { border-color: rgba(59,130,246,0.6); box-shadow: 0 0 20px rgba(59,130,246,0.3); }
    }
    @keyframes badgePop {
      from { opacity: 0; transform: scale(0.85) translateY(8px); }
      to   { opacity: 1; transform: scale(1)    translateY(0);   }
    }
    @keyframes gradientShift {
      0%   { background-position: 0% 50%; }
      50%  { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes pulseRing {
      0%   { transform: scale(1); opacity: 0.6; }
      100% { transform: scale(2.5); opacity: 0; }
    }
    @keyframes fadeInScale {
      from { opacity: 0; transform: scale(0.9); }
      to   { opacity: 1; transform: scale(1); }
    }
    @keyframes starTwinkle {
      0%, 100% { opacity: 0.3; transform: scale(1); }
      50%       { opacity: 1; transform: scale(1.2); }
    }
    @keyframes orbitRotate {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }
    @keyframes orbitReverse {
      from { transform: rotate(360deg); }
      to   { transform: rotate(0deg); }
    }
    @keyframes networkLine {
      0%   { stroke-dashoffset: 1000; opacity: 0.3; }
      50%  { opacity: 0.8; }
      100% { stroke-dashoffset: 0; opacity: 0.3; }
    }
    @keyframes nodeGlow {
      0%, 100% { 
        filter: drop-shadow(0 0 8px rgba(59,130,246,0.8));
        transform: scale(1);
      }
      50% { 
        filter: drop-shadow(0 0 16px rgba(59,130,246,1));
        transform: scale(1.15);
      }
    }
    @keyframes hexFloat {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50%       { transform: translateY(-20px) rotate(3deg); }
    }

    .hero-tagline   { animation: heroTagline 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s both; }
    .hero-heading   { animation: heroFadeUp  0.9s cubic-bezier(0.16,1,0.3,1) 0.25s both; }
    .hero-desc      { animation: heroFadeUp  0.9s cubic-bezier(0.16,1,0.3,1) 0.4s both; }
    .hero-btns      { animation: heroFadeUp  0.9s cubic-bezier(0.16,1,0.3,1) 0.55s both; }
    .hero-badges    { animation: heroFadeUp  0.9s cubic-bezier(0.16,1,0.3,1) 0.7s both; }
    .hero-mobile-logo { animation: fadeInScale 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s both; }

    .hero-logo      { animation: logoFloat 8s ease-in-out infinite, logoGlow 6s ease-in-out infinite; }
    .hero-logo-mobile { animation: logoFloatMobile 6s ease-in-out infinite, logoGlow 5s ease-in-out infinite; }

    .cta-primary {
      background-image: linear-gradient(110deg, #1a4fd8 0%, #3b82f6 35%, #7ec8fc 50%, #3b82f6 65%, #1a4fd8 100%);
      background-size: 200% auto;
      animation: shimmerCta 3s linear infinite;
      transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s !important;
    }
    .cta-primary:hover {
      transform: translateY(-3px) scale(1.03) !important;
      box-shadow: 0 16px 40px rgba(59,130,246,0.6) !important;
    }
    .cta-primary:active { transform: scale(0.97) !important; }

    .cta-secondary {
      animation: borderPulse 3s ease-in-out infinite;
      transition: all 0.3s ease !important;
    }
    .cta-secondary:hover {
      background: rgba(59,130,246,0.15) !important;
      transform: translateY(-3px) !important;
      border-color: rgba(59,130,246,0.7) !important;
    }

    .stat-badge {
      animation: badgePop 0.6s cubic-bezier(0.16,1,0.3,1) both;
    }

    @media (hover: none) {
      .cta-primary:active {
        transform: scale(0.96) !important;
        box-shadow: 0 4px 16px rgba(59,130,246,0.4) !important;
      }
      .cta-secondary:active {
        background: rgba(59,130,246,0.12) !important;
        transform: scale(0.96) !important;
      }
    }

    .hero-safe-area {
      padding-left: env(safe-area-inset-left, 0px);
      padding-right: env(safe-area-inset-right, 0px);
    }
  `}</style>
);

/* ── Stat badges ── */
const badges = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '8+', label: 'Years of Experience' },
];

const Hero: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery('(max-width:360px)');
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLandscape = useMediaQuery('(orientation: landscape) and (max-height: 500px)');

  return (
    <>
      <HeroStyles />

      <Box
        className="hero-safe-area"
        sx={{
          position: 'relative',
          pt: { xs: '60px', sm: '66px', md: '72px', lg: '76px' },
          minHeight: isLandscape ? 'auto' : { xs: '100svh', sm: '100svh', md: '100vh' },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: 'radial-gradient(ellipse at top, #0a0e27 0%, #030712 50%, #000000 100%)',
        }}
      >
        {/* ── Starfield Background ── */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
          }}
        >
          {/* Stars Layer 1 - Small distant stars */}
          {[...Array(80)].map((_, i) => (
            <Box
              key={`star1-${i}`}
              sx={{
                position: 'absolute',
                width: '1px',
                height: '1px',
                background: '#fff',
                borderRadius: '50%',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
                animation: `starTwinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
                boxShadow: '0 0 2px rgba(255,255,255,0.8)',
              }}
            />
          ))}
          
          {/* Stars Layer 2 - Medium stars */}
          {[...Array(40)].map((_, i) => (
            <Box
              key={`star2-${i}`}
              sx={{
                position: 'absolute',
                width: '2px',
                height: '2px',
                background: 'rgba(59,130,246,0.8)',
                borderRadius: '50%',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.6 + 0.3,
                animation: `starTwinkle ${Math.random() * 4 + 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
                boxShadow: '0 0 4px rgba(59,130,246,0.9)',
              }}
            />
          ))}

          {/* Stars Layer 3 - Bright accent stars */}
          {[...Array(20)].map((_, i) => (
            <Box
              key={`star3-${i}`}
              sx={{
                position: 'absolute',
                width: '3px',
                height: '3px',
                background: 'rgba(99,179,237,1)',
                borderRadius: '50%',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3,
                animation: `starTwinkle ${Math.random() * 5 + 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 4}s`,
                boxShadow: '0 0 8px rgba(99,179,237,1), 0 0 16px rgba(59,130,246,0.5)',
              }}
            />
          ))}
        </Box>

        {/* ── Network Visualization SVG ── */}
        <Box
          component="svg"
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            opacity: { xs: 0.4, md: 0.5 },
            pointerEvents: 'none',
          }}
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59,130,246,0.6)" />
              <stop offset="50%" stopColor="rgba(99,179,237,0.8)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0.6)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Network Connection Lines */}
          <line x1="15" y1="25" x2="85" y2="75" stroke="url(#lineGradient)" strokeWidth="0.15" strokeDasharray="200" filter="url(#glow)">
            <animate attributeName="stroke-dashoffset" from="200" to="-200" dur="8s" repeatCount="indefinite" />
          </line>
          <line x1="85" y1="25" x2="15" y2="75" stroke="url(#lineGradient)" strokeWidth="0.15" strokeDasharray="200" filter="url(#glow)">
            <animate attributeName="stroke-dashoffset" from="-200" to="200" dur="10s" repeatCount="indefinite" />
          </line>
          <line x1="50" y1="10" x2="50" y2="90" stroke="url(#lineGradient)" strokeWidth="0.12" strokeDasharray="150" filter="url(#glow)">
            <animate attributeName="stroke-dashoffset" from="150" to="-150" dur="12s" repeatCount="indefinite" />
          </line>
          <line x1="10" y1="50" x2="90" y2="50" stroke="url(#lineGradient)" strokeWidth="0.12" strokeDasharray="150" filter="url(#glow)">
            <animate attributeName="stroke-dashoffset" from="-150" to="150" dur="11s" repeatCount="indefinite" />
          </line>
          
          {/* Diagonal connections */}
          <line x1="25" y1="15" x2="75" y2="85" stroke="url(#lineGradient)" strokeWidth="0.1" strokeDasharray="180" opacity="0.6" filter="url(#glow)">
            <animate attributeName="stroke-dashoffset" from="180" to="-180" dur="14s" repeatCount="indefinite" />
          </line>
          <line x1="75" y1="15" x2="25" y2="85" stroke="url(#lineGradient)" strokeWidth="0.1" strokeDasharray="180" opacity="0.6" filter="url(#glow)">
            <animate attributeName="stroke-dashoffset" from="-180" to="180" dur="13s" repeatCount="indefinite" />
          </line>

          {/* Network Nodes */}
          <circle cx="15" cy="25" r="1.2" fill="#3b82f6" filter="url(#glow)">
            <animate attributeName="r" values="1;1.8;1" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="85" cy="25" r="1.2" fill="#3b82f6" filter="url(#glow)">
            <animate attributeName="r" values="1.2;2;1.2" dur="3.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;1;0.6" dur="3.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="15" cy="75" r="1.2" fill="#63b3ed" filter="url(#glow)">
            <animate attributeName="r" values="1;1.8;1" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="85" cy="75" r="1.2" fill="#63b3ed" filter="url(#glow)">
            <animate attributeName="r" values="1.2;2;1.2" dur="4.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;1;0.6" dur="4.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="50" r="1.5" fill="#7ec8fc" filter="url(#glow)">
            <animate attributeName="r" values="1.5;2.5;1.5" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;1;0.7" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="10" r="1" fill="#3b82f6" filter="url(#glow)">
            <animate attributeName="r" values="0.8;1.5;0.8" dur="3.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;1;0.5" dur="3.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="90" r="1" fill="#3b82f6" filter="url(#glow)">
            <animate attributeName="r" values="0.8;1.5;0.8" dur="3.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;1;0.5" dur="3.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="25" cy="40" r="0.8" fill="#63b3ed" filter="url(#glow)">
            <animate attributeName="r" values="0.8;1.4;0.8" dur="3.3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;1;0.5" dur="3.3s" repeatCount="indefinite" />
          </circle>
          <circle cx="75" cy="60" r="0.8" fill="#63b3ed" filter="url(#glow)">
            <animate attributeName="r" values="0.8;1.4;0.8" dur="3.7s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;1;0.5" dur="3.7s" repeatCount="indefinite" />
          </circle>
        </Box>

        {/* ── Floating Data Packets ── */}
        {[...Array(12)].map((_, i) => (
          <Box
            key={`packet-${i}`}
            className="data-flow"
            sx={{
              position: 'absolute',
              width: { xs: '5px', md: '7px' },
              height: { xs: '5px', md: '7px' },
              background: `rgba(${i % 2 === 0 ? '59,130,246' : '99,179,237'},0.9)`,
              borderRadius: '50%',
              boxShadow: `0 0 12px rgba(${i % 2 === 0 ? '59,130,246' : '99,179,237'},0.8)`,
              top: `${10 + (i * 7)}%`,
              left: i % 2 === 0 ? '0' : 'auto',
              right: i % 2 === 0 ? 'auto' : '0',
              zIndex: 2,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${4 + (i % 3) * 0.5}s`,
            }}
          />
        ))}

        {/* ── Hexagonal Grid Pattern ── */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            opacity: 0.08,
            zIndex: 1,
            backgroundImage: `
              linear-gradient(30deg, transparent 48%, rgba(59,130,246,0.3) 49%, rgba(59,130,246,0.3) 51%, transparent 52%),
              linear-gradient(90deg, transparent 48%, rgba(59,130,246,0.3) 49%, rgba(59,130,246,0.3) 51%, transparent 52%),
              linear-gradient(150deg, transparent 48%, rgba(59,130,246,0.3) 49%, rgba(59,130,246,0.3) 51%, transparent 52%)
            `,
            backgroundSize: '80px 140px',
            animation: 'hexFloat 20s ease-in-out infinite',
          }}
        />

        {/* ── Radial blue nebula glow ── */}
        <Box
          sx={{
            position: 'absolute',
            left: { xs: '5%', md: '10%' },
            top: '35%',
            width: { xs: '80%', md: '55%' },
            height: { xs: '60%', md: '65%' },
            background: 'radial-gradient(ellipse, rgba(59,130,246,0.25) 0%, rgba(99,179,237,0.1) 30%, transparent 70%)',
            filter: 'blur(100px)',
            zIndex: 1,
            pointerEvents: 'none',
            animation: 'networkPulse 8s ease-in-out infinite',
          }}
        />

        {/* ── Accent glow (right side) ── */}
        <Box
          sx={{
            position: 'absolute',
            right: { xs: '5%', md: '15%' },
            top: '25%',
            width: { xs: '60%', md: '40%' },
            height: { xs: '50%', md: '55%' },
            background: 'radial-gradient(circle, rgba(126,200,252,0.15) 0%, rgba(59,130,246,0.08) 40%, transparent 70%)',
            filter: 'blur(90px)',
            zIndex: 1,
            pointerEvents: 'none',
            animation: 'networkPulse 10s ease-in-out infinite',
            animationDelay: '2s',
          }}
        />

        {/* ── Floating Logo (desktop only) ── */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            right: { md: '6%', lg: '10%', xl: '14%' },
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 3,
            pointerEvents: 'none',
          }}
          className="hero-logo"
        >
          {/* Outer orbiting ring */}
          <Box
            sx={{
              position: 'absolute',
              width: { md: '480px', lg: '580px', xl: '680px' },
              height: { md: '480px', lg: '580px', xl: '680px' },
              border: '1px solid rgba(59,130,246,0.2)',
              borderRadius: '50%',
              animation: 'orbitRotate 40s linear infinite',
              '&::before': {
                content: '""',
                position: 'absolute',
                width: '10px',
                height: '10px',
                background: 'rgba(59,130,246,0.9)',
                borderRadius: '50%',
                top: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                boxShadow: '0 0 20px rgba(59,130,246,1)',
                animation: 'nodeGlow 2s ease-in-out infinite',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '8px',
                height: '8px',
                background: 'rgba(99,179,237,0.9)',
                borderRadius: '50%',
                bottom: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                boxShadow: '0 0 18px rgba(99,179,237,1)',
                animation: 'nodeGlow 2.5s ease-in-out infinite',
              },
            }}
          />

          {/* Inner orbiting ring */}
          <Box
            sx={{
              position: 'absolute',
              width: { md: '380px', lg: '460px', xl: '540px' },
              height: { md: '380px', lg: '460px', xl: '540px' },
              border: '1px solid rgba(99,179,237,0.25)',
              borderRadius: '50%',
              animation: 'orbitReverse 30s linear infinite',
              '&::before': {
                content: '""',
                position: 'absolute',
                width: '8px',
                height: '8px',
                background: 'rgba(126,200,252,0.9)',
                borderRadius: '50%',
                top: '50%',
                right: '0',
                transform: 'translateY(-50%)',
                boxShadow: '0 0 16px rgba(126,200,252,1)',
                animation: 'nodeGlow 2.2s ease-in-out infinite',
              },
            }}
          />

          {/* Pulsing nebula glow */}
          <Box
            sx={{
              position: 'absolute',
              width: { md: '520px', lg: '620px', xl: '720px' },
              height: { md: '520px', lg: '620px', xl: '720px' },
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(99,179,237,0.15) 30%, rgba(126,200,252,0.08) 50%, transparent 70%)',
              filter: 'blur(50px)',
              animation: 'networkPulse 6s ease-in-out infinite',
            }}
          />

          {/* Logo */}
          <Box
            component="img"
            src="/logo.png"
            alt="Bendra"
            sx={{
              position: 'relative',
              zIndex: 1,
              height: { md: '300px', lg: '380px', xl: '460px' },
              width: 'auto',
              maxWidth: '100%',
            }}
          />
        </Box>

        {/* ── Main Content ── */}
        <Container
          maxWidth="xl"
          sx={{
            position: 'relative',
            zIndex: 4,
            px: { xs: 2, sm: 3, md: 4, lg: 6 },
            py: { xs: 3, sm: 4, md: 6, lg: 8 },
          }}
        >
          <Box
            sx={{
              maxWidth: { xs: '100%', md: '55%', lg: '50%', xl: '48%' },
              textAlign: { xs: 'center', md: 'left' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
            }}
          >
            {/* ── Mobile Logo ── */}
            <Box
              className="hero-mobile-logo"
              sx={{
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'center',
                alignItems: 'center',
                mb: { xs: 3, sm: 3.5 },
                position: 'relative',
              }}
            >
              {/* Mobile outer ring */}
              <Box
                sx={{
                  position: 'absolute',
                  width: { xs: '180px', sm: '220px' },
                  height: { xs: '180px', sm: '220px' },
                  border: '1px solid rgba(59,130,246,0.2)',
                  borderRadius: '50%',
                  animation: 'orbitRotate 25s linear infinite',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    width: '8px',
                    height: '8px',
                    background: 'rgba(59,130,246,0.9)',
                    borderRadius: '50%',
                    top: '0',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    boxShadow: '0 0 15px rgba(59,130,246,1)',
                    animation: 'nodeGlow 2s ease-in-out infinite',
                  },
                }}
              />

              {/* Mobile inner ring */}
              <Box
                sx={{
                  position: 'absolute',
                  width: { xs: '140px', sm: '170px' },
                  height: { xs: '140px', sm: '170px' },
                  border: '1px solid rgba(99,179,237,0.25)',
                  borderRadius: '50%',
                  animation: 'orbitReverse 20s linear infinite',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    width: '6px',
                    height: '6px',
                    background: 'rgba(126,200,252,0.9)',
                    borderRadius: '50%',
                    top: '50%',
                    right: '0',
                    transform: 'translateY(-50%)',
                    boxShadow: '0 0 12px rgba(126,200,252,1)',
                    animation: 'nodeGlow 2.3s ease-in-out infinite',
                  },
                }}
              />

              {/* Mobile nebula glow */}
              <Box
                sx={{
                  position: 'absolute',
                  width: { xs: '240px', sm: '300px' },
                  height: { xs: '240px', sm: '300px' },
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, rgba(99,179,237,0.12) 40%, transparent 70%)',
                  filter: 'blur(40px)',
                  animation: 'networkPulse 5s ease-in-out infinite',
                }}
              />

              <Box
                component="img"
                src="/logo.png"
                alt="Bendra"
                className="hero-logo-mobile"
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  height: { xs: '120px', sm: '150px' },
                  width: 'auto',
                }}
              />
            </Box>

            {/* Tagline pill */}
            <Box
              className="hero-tagline"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: { xs: 0.8, md: 1 },
                mb: { xs: 2, sm: 2.5, md: 3 },
                px: { xs: 1.5, sm: 2 },
                py: { xs: 0.5, md: 0.6 },
                borderRadius: '999px',
                border: '1px solid rgba(59,130,246,0.4)',
                background: 'rgba(59,130,246,0.12)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                boxShadow: '0 0 25px rgba(59,130,246,0.3)',
              }}
            >
              <Box
                sx={{
                  width: { xs: 5, md: 6 },
                  height: { xs: 5, md: 6 },
                  borderRadius: '50%',
                  background: '#3b82f6',
                  boxShadow: '0 0 15px rgba(59,130,246,1)',
                  flexShrink: 0,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    inset: -2,
                    borderRadius: '50%',
                    border: '1px solid rgba(59,130,246,0.5)',
                    animation: 'pulseRing 2s ease-out infinite',
                  },
                }}
              />
              <Typography
                sx={{
                  fontFamily: "'Sora', sans-serif",
                  background: 'linear-gradient(90deg, #3b82f6 0%, #63b3ed 50%, #90cdf4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 600,
                  fontSize: { xs: '0.65rem', sm: '0.72rem', md: '0.78rem' },
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                Connected Technology Solutions
              </Typography>
            </Box>

            {/* Heading */}
            <Typography
              className="hero-heading"
              component="h1"
              sx={{
                fontFamily: "'Sora', sans-serif",
                color: '#fff',
                fontWeight: 800,
                fontSize: {
                  xs: isSmallMobile ? '1.5rem' : '1.7rem',
                  sm: '2.1rem',
                  md: '2.4rem',
                  lg: '2.9rem',
                  xl: '3.4rem',
                },
                lineHeight: { xs: 1.2, md: 1.15 },
                mb: { xs: 2, md: 2.5 },
                letterSpacing: '-0.02em',
                textShadow: '0 0 50px rgba(59,130,246,0.4)',
              }}
            >
              Transforming businesses with
              <br />
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #63b3ed 50%, #90cdf4 100%)',
                  backgroundSize: '200% auto',
                  animation: 'gradientShift 4s ease infinite',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                intelligent systems.
              </Box>
            </Typography>

            {/* Description */}
            <Typography
              className="hero-desc"
              sx={{
                fontFamily: "'DM Sans', sans-serif",
                color: 'rgba(255,255,255,0.72)',
                fontSize: {
                  xs: isSmallMobile ? '0.82rem' : '0.88rem',
                  sm: '0.92rem',
                  md: '0.96rem',
                  lg: '1rem',
                },
                lineHeight: { xs: 1.7, md: 1.8 },
                mb: { xs: 3.5, md: 4.5 },
                maxWidth: { xs: '100%', sm: '420px', md: '460px' },
                fontWeight: 400,
                px: { xs: 1, sm: 0 },
              }}
            >
              We engineer powerful digital ecosystems that streamline operations,
              enhance connectivity, and accelerate growth through cutting-edge CRM
              and custom software solutions.
            </Typography>

            {/* Buttons */}
            <Box
              className="hero-btns"
              sx={{
                display: 'flex',
                gap: { xs: 1.5, sm: 2 },
                flexWrap: 'wrap',
                mb: { xs: 4, md: 5 },
                justifyContent: { xs: 'center', md: 'flex-start' },
                width: { xs: '100%', md: 'auto' },
              }}
            >
              <Link href="/contact" style={{ textDecoration: 'none', flex: isMobile ? '1 1 auto' : 'none' }}>
                <Button
                  variant="contained"
                  fullWidth={isMobile}
                  endIcon={
                    <ArrowForward
                      sx={{
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        transition: 'transform 0.3s',
                      }}
                    />
                  }
                  className="cta-primary"
                  sx={{
                    fontFamily: "'Sora', sans-serif",
                    color: '#fff',
                    textTransform: 'none',
                    fontWeight: 700,
                    fontSize: { xs: '0.82rem', sm: '0.875rem', md: '0.95rem' },
                    letterSpacing: '0.03em',
                    px: { xs: 2.5, sm: 3, md: 3.5 },
                    py: { xs: 1.1, sm: 1.2, md: 1.35 },
                    borderRadius: { xs: '12px', md: '10px' },
                    border: '1px solid rgba(59,130,246,0.3)',
                    boxShadow: '0 4px 24px rgba(59,130,246,0.5)',
                    WebkitTapHighlightColor: 'transparent',
                    minWidth: { xs: 'auto', sm: '160px' },
                    whiteSpace: 'nowrap',
                    '&:hover .MuiButton-endIcon': { transform: 'translateX(4px)' },
                  }}
                >
                  Get Started
                </Button>
              </Link>

              <Link href="/portfolio" style={{ textDecoration: 'none', flex: isMobile ? '1 1 auto' : 'none' }}>
                <Button
                  variant="outlined"
                  fullWidth={isMobile}
                  startIcon={
                    <PlayArrow
                      sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}
                    />
                  }
                  className="cta-secondary"
                  sx={{
                    fontFamily: "'Sora', sans-serif",
                    color: 'rgba(255,255,255,0.9)',
                    borderColor: 'rgba(59,130,246,0.3)',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: { xs: '0.82rem', sm: '0.875rem', md: '0.95rem' },
                    letterSpacing: '0.03em',
                    px: { xs: 2.5, sm: 3, md: 3.5 },
                    py: { xs: 1.1, sm: 1.2, md: 1.35 },
                    borderRadius: { xs: '12px', md: '10px' },
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    background: 'rgba(59,130,246,0.05)',
                    WebkitTapHighlightColor: 'transparent',
                    minWidth: { xs: 'auto', sm: '160px' },
                    whiteSpace: 'nowrap',
                  }}
                >
                  View Work
                </Button>
              </Link>
            </Box>

            {/* Stat Badges */}
            <Box
              className="hero-badges"
              sx={{
                display: 'flex',
                gap: { xs: 0, sm: 2, md: 3 },
                flexWrap: 'nowrap',
                pt: { xs: 2.5, md: 3 },
                borderTop: '1px solid rgba(59,130,246,0.2)',
                width: '100%',
                justifyContent: { xs: 'space-around', md: 'flex-start' },
              }}
            >
              {badges.map((b, i) => (
                <Box
                  key={b.label}
                  className="stat-badge"
                  sx={{
                    animationDelay: `${0.7 + i * 0.1}s`,
                    textAlign: { xs: 'center', md: 'left' },
                    flex: { xs: '1 1 0', md: 'none' },
                    position: 'relative',
                    px: { xs: 1, sm: 0 },
                    '&:not(:last-child)::after': {
                      content: { xs: '""', md: 'none' },
                      position: 'absolute',
                      right: 0,
                      top: '10%',
                      height: '80%',
                      width: '1px',
                      background: 'rgba(59,130,246,0.2)',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Sora', sans-serif",
                      background: 'linear-gradient(135deg, #3b82f6 0%, #90cdf4 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 800,
                      fontSize: {
                        xs: isSmallMobile ? '1.1rem' : '1.2rem',
                        sm: '1.35rem',
                        md: '1.45rem',
                        lg: '1.5rem',
                      },
                      lineHeight: 1,
                      mb: 0.3,
                      letterSpacing: '-0.02em',
                      textShadow: '0 0 25px rgba(59,130,246,0.4)',
                    }}
                  >
                    {b.value}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: 'rgba(255,255,255,0.5)',
                      fontSize: {
                        xs: isSmallMobile ? '0.62rem' : '0.68rem',
                        sm: '0.72rem',
                        md: '0.75rem',
                      },
                      fontWeight: 400,
                      letterSpacing: '0.04em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {b.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>

        {/* ── Scroll indicator (desktop only) ── */}
        <Box
          sx={{
            display: { xs: 'none', lg: 'flex' },
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 3,
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
            animation: 'heroFadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 1s both',
          }}
        >
          <Typography
            sx={{
              fontFamily: "'DM Sans', sans-serif",
              color: 'rgba(255,255,255,0.3)',
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            Scroll
          </Typography>
          <Box
            sx={{
              width: '1px',
              height: '32px',
              background: 'linear-gradient(180deg, rgba(59,130,246,0.8) 0%, transparent 100%)',
              animation: 'dataFlow 2s ease-in-out infinite',
            }}
          />
        </Box>

        {/* ── Bottom fade ── */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: { xs: '80px', md: '120px' },
            background: 'linear-gradient(to top, #000000 0%, transparent 100%)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />
      </Box>
    </>
  );
};

export default Hero;