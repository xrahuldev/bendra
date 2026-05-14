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
      0%, 100% { transform: translateY(-50%) translateY(0px);   }
      50%       { transform: translateY(-50%) translateY(-16px); }
    }
    @keyframes logoFloatMobile {
      0%, 100% { transform: translateY(0px);   }
      50%       { transform: translateY(-10px); }
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

    .hero-tagline   { animation: heroTagline 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s both; }
    .hero-heading   { animation: heroFadeUp  0.9s cubic-bezier(0.16,1,0.3,1) 0.25s both; }
    .hero-desc      { animation: heroFadeUp  0.9s cubic-bezier(0.16,1,0.3,1) 0.4s both; }
    .hero-btns      { animation: heroFadeUp  0.9s cubic-bezier(0.16,1,0.3,1) 0.55s both; }
    .hero-badges    { animation: heroFadeUp  0.9s cubic-bezier(0.16,1,0.3,1) 0.7s both; }
    .hero-mobile-logo { animation: fadeInScale 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s both; }

    .hero-logo      { animation: logoFloat 5s ease-in-out infinite; }
    .hero-logo-mobile { animation: logoFloatMobile 4s ease-in-out infinite; }
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

    /* Touch feedback for mobile */
    @media (hover: none) {
      .cta-primary:active {
        transform: scale(0.96) !important;
        box-shadow: 0 4px 16px rgba(59,130,246,0.4) !important;
      }
      .cta-secondary:active {
        background: rgba(255,255,255,0.12) !important;
        transform: scale(0.96) !important;
      }
    }

    /* Safe area support for notched phones */
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
          /* Accounts for fixed Navbar heights */
          pt: { xs: '60px', sm: '66px', md: '72px', lg: '76px' },
          minHeight: isLandscape
            ? 'auto'
            : { xs: '100svh', sm: '100svh', md: '100vh' },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #060d1e 0%, #0a1530 50%, #0d1c3c 100%)',
        }}
      >
        {/* ── Background image ── */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/banner.png)',
            backgroundSize: 'cover',
            backgroundPosition: { xs: 'center right', md: 'center' },
            backgroundRepeat: 'no-repeat',
            zIndex: 0,
          }}
        />

        {/* ── Dark overlay — adaptive for mobile/desktop ── */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: {
              xs: `
                linear-gradient(180deg, rgba(6,13,30,0.92) 0%, rgba(6,13,30,0.75) 35%, rgba(6,13,30,0.85) 65%, rgba(6,13,30,0.98) 100%)
              `,
              md: `
                radial-gradient(ellipse at 70% 50%, rgba(6,13,30,0.25) 0%, rgba(6,13,30,0.72) 50%, rgba(6,13,30,0.97) 100%),
                linear-gradient(90deg, rgba(6,13,30,0.96) 0%, rgba(6,13,30,0.7) 40%, rgba(6,13,30,0.2) 70%, rgba(6,13,30,0.05) 100%)
              `,
            },
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
            left: { xs: '-20%', md: '-10%' },
            top: { xs: '20%', md: '30%' },
            width: { xs: '60%', md: '40%' },
            height: { xs: '30%', md: '40%' },
            background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />

        {/* ── Mobile ambient glow (top-right) ── */}
        <Box
          sx={{
            display: { xs: 'block', md: 'none' },
            position: 'absolute',
            right: '-15%',
            top: '10%',
            width: '50%',
            height: '25%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
            filter: 'blur(50px)',
            zIndex: 1,
            pointerEvents: 'none',
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
              width: { md: '320px', lg: '400px', xl: '440px' },
              height: { md: '320px', lg: '400px', xl: '440px' },
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
              height: { md: '260px', lg: '340px', xl: '400px' },
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
            {/* ── Mobile Logo (shown above heading on mobile) ── */}
            <Box
              className="hero-mobile-logo"
              sx={{
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'center',
                alignItems: 'center',
                mb: { xs: 2.5, sm: 3 },
                position: 'relative',
              }}
            >
              {/* Mobile glow */}
              <Box
                className="hero-glow"
                sx={{
                  position: 'absolute',
                  width: { xs: '180px', sm: '220px' },
                  height: { xs: '180px', sm: '220px' },
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(8,18,42,0) 70%)',
                  filter: 'blur(40px)',
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
                  height: { xs: '100px', sm: '130px' },
                  width: 'auto',
                  filter: 'drop-shadow(0 0 24px rgba(59,130,246,0.5))',
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
                border: '1px solid rgba(99,179,237,0.3)',
                background: 'rgba(59,130,246,0.08)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
            >
              <Box
                sx={{
                  width: { xs: 5, md: 6 },
                  height: { xs: 5, md: 6 },
                  borderRadius: '50%',
                  background: '#63b3ed',
                  boxShadow: '0 0 8px rgba(99,179,237,0.8)',
                  flexShrink: 0,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    inset: -2,
                    borderRadius: '50%',
                    border: '1px solid rgba(99,179,237,0.3)',
                    animation: 'pulseRing 2s ease-out infinite',
                  },
                }}
              />
              <Typography
                sx={{
                  fontFamily: "'Sora', sans-serif",
                  color: '#90cdf4',
                  fontWeight: 600,
                  fontSize: { xs: '0.65rem', sm: '0.72rem', md: '0.78rem' },
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
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
              }}
            >
              We build digital systems
              <br />
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(90deg, #63b3ed 0%, #90cdf4 50%, #3b82f6 100%)',
                  backgroundSize: '200% auto',
                  animation: 'gradientShift 4s ease infinite',
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
              Bendra is a technology partner helping businesses streamline
              operations and scale with smart CRM, custom software,
              and powerful digital solutions.
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
                    border: '1px solid rgba(99,179,237,0.2)',
                    boxShadow: '0 4px 20px rgba(59,130,246,0.4)',
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
                    color: 'rgba(255,255,255,0.88)',
                    borderColor: 'rgba(255,255,255,0.25)',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: { xs: '0.82rem', sm: '0.875rem', md: '0.95rem' },
                    letterSpacing: '0.03em',
                    px: { xs: 2.5, sm: 3, md: 3.5 },
                    py: { xs: 1.1, sm: 1.2, md: 1.35 },
                    borderRadius: { xs: '12px', md: '10px' },
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    background: 'rgba(255,255,255,0.03)',
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
                borderTop: '1px solid rgba(255,255,255,0.07)',
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
                    /* Divider between badges on mobile */
                    '&:not(:last-child)::after': {
                      content: { xs: '""', md: 'none' },
                      position: 'absolute',
                      right: 0,
                      top: '10%',
                      height: '80%',
                      width: '1px',
                      background: 'rgba(255,255,255,0.08)',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Sora', sans-serif",
                      color: '#90cdf4',
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
                    }}
                  >
                    {b.value}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: 'rgba(255,255,255,0.4)',
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
              color: 'rgba(255,255,255,0.25)',
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
              background: 'linear-gradient(180deg, rgba(99,179,237,0.5) 0%, transparent 100%)',
              animation: 'particleDrift 2s ease-in-out infinite',
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