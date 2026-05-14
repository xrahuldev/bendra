'use client';

import React, { useEffect, useRef } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { ArrowForward, PlayArrow } from '@mui/icons-material';
import Link from 'next/link';

/* ── Global keyframes (injected once, avoids SSR issues with MUI sx @keyframes) ── */
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
      0%, 100% { transform: translateY(-50%) translateY(0px);   }
      50%       { transform: translateY(-50%) translateY(-16px); }
    }
    @keyframes smokePulse {
      0%, 100% { opacity: 0.55; transform: scale(1);   }
      50%       { opacity: 0.85; transform: scale(1.12); }
    }
    @keyframes particleDrift {
      0%, 100% { opacity: 0.4; transform: translateY(0px);    }
      50%       { opacity: 0.75; transform: translateY(-12px); }
    }
    @keyframes shimmerCta {
      0%   { background-position: -200% center; }
      100% { background-position:  200% center; }
    }
    @keyframes borderPulse {
      0%, 100% { border-color: rgba(255,255,255,0.25); }
      50%       { border-color: rgba(255,255,255,0.55); }
    }
    @keyframes badgePop {
      from { opacity: 0; transform: scale(0.85) translateY(8px); }
      to   { opacity: 1; transform: scale(1)    translateY(0);   }
    }

    .hero-tagline   { animation: heroTagline 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s both; }
    .hero-heading   { animation: heroFadeUp  0.9s cubic-bezier(0.16,1,0.3,1) 0.25s both; }
    .hero-desc      { animation: heroFadeUp  0.9s cubic-bezier(0.16,1,0.3,1) 0.4s both; }
    .hero-btns      { animation: heroFadeUp  0.9s cubic-bezier(0.16,1,0.3,1) 0.55s both; }
    .hero-badges    { animation: heroFadeUp  0.9s cubic-bezier(0.16,1,0.3,1) 0.7s both; }

    .hero-logo      { animation: logoFloat 5s ease-in-out infinite; }
    .hero-glow      { animation: smokePulse 5s ease-in-out infinite; }
    .hero-particles { animation: particleDrift 8s ease-in-out infinite; }

    .cta-primary {
      background-image: linear-gradient(110deg, #1a4fd8 0%, #3b82f6 35%, #7ec8fc 50%, #3b82f6 65%, #1a4fd8 100%);
      background-size: 200% auto;
      animation: shimmerCta 3s linear infinite;
      transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s !important;
    }
    .cta-primary:hover {
      transform: translateY(-3px) scale(1.03) !important;
      box-shadow: 0 12px 32px rgba(59,130,246,0.55) !important;
    }
    .cta-primary:active { transform: scale(0.97) !important; }

    .cta-secondary {
      animation: borderPulse 3s ease-in-out infinite;
      transition: all 0.3s ease !important;
    }
    .cta-secondary:hover {
      background: rgba(255,255,255,0.1) !important;
      transform: translateY(-3px) !important;
      border-color: rgba(255,255,255,0.7) !important;
    }

    .stat-badge {
      animation: badgePop 0.6s cubic-bezier(0.16,1,0.3,1) both;
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
  return (
    <>
      <HeroStyles />

      <Box
        sx={{
          position: 'relative',
          /* ── FIX: paddingTop accounts for fixed Navbar (76px desktop, 66px mobile) ── */
          pt: { xs: '66px', md: '76px' },
          minHeight: { xs: '100svh', md: '100vh' },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #060d1e 0%, #0a1530 50%, #0d1c3c 100%)',
        }}
      >
        {/* ── Background image (won't break layout if missing) ── */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/banner.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0,
          }}
        />

        {/* ── Dark overlay ── */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: `
              radial-gradient(ellipse at 70% 50%, rgba(6,13,30,0.25) 0%, rgba(6,13,30,0.72) 50%, rgba(6,13,30,0.97) 100%),
              linear-gradient(90deg, rgba(6,13,30,0.96) 0%, rgba(6,13,30,0.7) 40%, rgba(6,13,30,0.2) 70%, rgba(6,13,30,0.05) 100%)
            `,
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />

        {/* ── Floating particles ── */}
        <Box
          className="hero-particles"
          sx={{
            position: 'absolute',
            inset: 0,
            background: `
              radial-gradient(2px 2px at 18% 28%, rgba(255,255,255,0.12), transparent),
              radial-gradient(2px 2px at 38% 68%, rgba(255,255,255,0.09), transparent),
              radial-gradient(1px 1px at 62% 38%, rgba(255,255,255,0.07), transparent),
              radial-gradient(2px 2px at 82% 58%, rgba(255,255,255,0.05), transparent),
              radial-gradient(2px 2px at 28% 52%, rgba(99,179,237,0.12), transparent),
              radial-gradient(3px 3px at 72% 18%, rgba(99,179,237,0.09), transparent)
            `,
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />

        {/* ── Blue ambient glow (left) ── */}
        <Box
          sx={{
            position: 'absolute',
            left: '-10%',
            top: '30%',
            width: '40%',
            height: '40%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />

        {/* ── Floating Logo (desktop only) ── */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            right: { md: '8%', lg: '12%', xl: '16%' },
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2,
            pointerEvents: 'none',
          }}
          className="hero-logo"
        >
          {/* Glow halo behind logo */}
          <Box
            className="hero-glow"
            sx={{
              position: 'absolute',
              width: { md: '360px', lg: '440px' },
              height: { md: '360px', lg: '440px' },
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(8,18,42,0.85) 0%, rgba(59,130,246,0.22) 45%, rgba(8,18,42,0) 72%)',
              filter: 'blur(55px)',
            }}
          />
          <Box
            component="img"
            src="/logo.png"
            alt="Bendra"
            sx={{
              position: 'relative',
              zIndex: 1,
              height: { md: '290px', lg: '370px', xl: '420px' },
              width: 'auto',
              maxWidth: '100%',
              filter: 'drop-shadow(0 0 36px rgba(59,130,246,0.65)) drop-shadow(0 0 72px rgba(8,18,42,0.5))',
            }}
          />
        </Box>

        {/* ── Main Content ── */}
        <Container
          maxWidth="xl"
          sx={{
            position: 'relative',
            zIndex: 3,
            px: { xs: 3, sm: 4, md: 6 },
            py: { xs: 6, md: 8 },
          }}
        >
          <Box sx={{ maxWidth: { xs: '100%', md: '52%', lg: '48%' } }}>

            {/* Tagline pill */}
            <Box
              className="hero-tagline"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                mb: 3,
                px: 2,
                py: 0.6,
                borderRadius: '999px',
                border: '1px solid rgba(99,179,237,0.3)',
                background: 'rgba(59,130,246,0.08)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <Box sx={{
                width: 6, height: 6, borderRadius: '50%',
                background: '#63b3ed',
                boxShadow: '0 0 8px rgba(99,179,237,0.8)',
              }} />
              <Typography sx={{
                fontFamily: "'Sora', sans-serif",
                color: '#90cdf4',
                fontWeight: 600,
                fontSize: { xs: '0.72rem', md: '0.78rem' },
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}>
                Build Smarter Systems
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
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem', lg: '3rem', xl: '3.4rem' },
                lineHeight: 1.15,
                mb: 2.5,
                letterSpacing: '-0.02em',
              }}
            >
              We build digital systems
              <br />
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(90deg, #63b3ed 0%, #90cdf4 50%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                that drive growth.
              </Box>
            </Typography>

            {/* Description */}
            <Typography
              className="hero-desc"
              sx={{
                fontFamily: "'DM Sans', sans-serif",
                color: 'rgba(255,255,255,0.68)',
                fontSize: { xs: '0.9rem', md: '1rem' },
                lineHeight: 1.8,
                mb: 4.5,
                maxWidth: '460px',
                fontWeight: 400,
              }}
            >
              Bendra is a technology partner helping businesses streamline
              operations and scale with smart CRM, custom software,
              and powerful digital solutions.
            </Typography>

            {/* Buttons */}
            <Box className="hero-btns" sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 5 }}>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  endIcon={<ArrowForward sx={{ fontSize: '1rem !important', transition: 'transform 0.3s' }} />}
                  className="cta-primary"
                  sx={{
                    fontFamily: "'Sora', sans-serif",
                    color: '#fff',
                    textTransform: 'none',
                    fontWeight: 700,
                    fontSize: { xs: '0.875rem', md: '0.95rem' },
                    letterSpacing: '0.03em',
                    px: { xs: 3, md: 3.5 },
                    py: { xs: 1.2, md: 1.35 },
                    borderRadius: '10px',
                    border: '1px solid rgba(99,179,237,0.2)',
                    boxShadow: '0 4px 20px rgba(59,130,246,0.4)',
                    '&:hover .MuiButton-endIcon': { transform: 'translateX(4px)' },
                  }}
                >
                  Get Started
                </Button>
              </Link>

              <Link href="/portfolio" style={{ textDecoration: 'none' }}>
                <Button
                  variant="outlined"
                  startIcon={<PlayArrow sx={{ fontSize: '1rem !important' }} />}
                  className="cta-secondary"
                  sx={{
                    fontFamily: "'Sora', sans-serif",
                    color: 'rgba(255,255,255,0.88)',
                    borderColor: 'rgba(255,255,255,0.25)',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: { xs: '0.875rem', md: '0.95rem' },
                    letterSpacing: '0.03em',
                    px: { xs: 3, md: 3.5 },
                    py: { xs: 1.2, md: 1.35 },
                    borderRadius: '10px',
                    backdropFilter: 'blur(8px)',
                    background: 'rgba(255,255,255,0.03)',
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
                gap: { xs: 2, md: 3 },
                flexWrap: 'wrap',
                pt: 3,
                borderTop: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {badges.map((b, i) => (
                <Box
                  key={b.label}
                  className="stat-badge"
                  sx={{ animationDelay: `${0.7 + i * 0.1}s` }}
                >
                  <Typography sx={{
                    fontFamily: "'Sora', sans-serif",
                    color: '#90cdf4',
                    fontWeight: 800,
                    fontSize: { xs: '1.3rem', md: '1.5rem' },
                    lineHeight: 1,
                    mb: 0.3,
                    letterSpacing: '-0.02em',
                  }}>
                    {b.value}
                  </Typography>
                  <Typography sx={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: 'rgba(255,255,255,0.4)',
                    fontSize: '0.75rem',
                    fontWeight: 400,
                    letterSpacing: '0.04em',
                  }}>
                    {b.label}
                  </Typography>
                </Box>
              ))}
            </Box>

          </Box>
        </Container>

        {/* ── Bottom fade ── */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '120px',
            background: 'linear-gradient(to top, rgba(6,13,30,1) 0%, transparent 100%)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />
      </Box>
    </>
  );
};

export default Hero;