'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const DeveloperStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap');

    @keyframes marqueeSmooth {
      from {
        transform: translate3d(0, 0, 0);
      }
      to {
        transform: translate3d(-50%, 0, 0);
      }
    }

    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(18px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes softGlow {
      0%, 100% {
        opacity: 0.45;
        transform: scale(1);
      }
      50% {
        opacity: 0.8;
        transform: scale(1.06);
      }
    }

    .ecosystem-pill {
      animation: fadeUp 0.55s cubic-bezier(0.16,1,0.3,1) both;
    }

    .ecosystem-heading {
      animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.08s both;
    }

    .ecosystem-copy {
      animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.16s both;
    }

    .marquee-shell {
      position: relative;
      overflow: hidden;
    }

    .partner-track {
      display: flex;
      align-items: center;
      width: max-content;
      will-change: transform;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      animation: marqueeSmooth 34s linear infinite;
    }

    .logo-card {
      position: relative;
      overflow: hidden;
      transition:
        transform 0.3s ease,
        box-shadow 0.3s ease,
        border-color 0.3s ease,
        background 0.3s ease;
      animation: fadeUp 0.55s cubic-bezier(0.16,1,0.3,1) both;
      -webkit-tap-highlight-color: transparent;
      flex-shrink: 0;
    }

    .logo-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 18%;
      right: 18%;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(59,130,246,0.28), transparent);
      opacity: 0.75;
    }

    .logo-card::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at top, rgba(59,130,246,0.08), transparent 58%);
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
    }

    .logo-shell {
      transition: transform 0.3s ease, filter 0.3s ease;
      line-height: 0;
    }

    .logo-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 14px 32px rgba(15,23,42,0.08);
      border-color: rgba(59,130,246,0.18) !important;
      background: rgba(255,255,255,0.92) !important;
    }

    .logo-card:hover::after {
      opacity: 1;
    }

    .logo-card:hover .logo-shell {
      transform: scale(1.04);
      filter: saturate(1.05);
    }

    .ambient-glow {
      animation: softGlow 5s ease-in-out infinite;
    }

    @media (max-width: 900px) {
      .partner-track {
        animation-duration: 26s;
      }
    }

    @media (max-width: 600px) {
      .partner-track {
        animation-duration: 22s;
      }

      .logo-card:hover {
        transform: none;
      }
    }

    @media (hover: none) {
      .logo-card:active {
        transform: scale(0.98);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .partner-track {
        animation: none !important;
        transform: translateX(0) !important;
      }

      .logo-card,
      .logo-shell,
      .ambient-glow {
        animation: none !important;
        transition: none !important;
      }
    }
  `}</style>
);

const logos = [
  {
    name: 'Zoho',
    icon: (
      <svg width="90" height="48" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="48" fontFamily="Arial Black,sans-serif" fontWeight="900" fontSize="52" fill="#E42527">Z</text>
        <text x="38" y="48" fontFamily="Arial Black,sans-serif" fontWeight="700" fontSize="38" fill="#1A1A1A">oho</text>
      </svg>
    ),
  },
  {
    name: 'Salesforce',
    icon: (
      <svg width="125" height="48" viewBox="0 0 220 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="110" cy="52" rx="92" ry="24" fill="#00A1E0"/>
        <ellipse cx="72" cy="44" rx="38" ry="38" fill="#00A1E0"/>
        <ellipse cx="138" cy="36" rx="44" ry="44" fill="#00A1E0"/>
        <ellipse cx="108" cy="28" rx="34" ry="34" fill="#00A1E0"/>
        <text x="42" y="62" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="26" fill="white">salesforce</text>
      </svg>
    ),
  },
  {
    name: 'AWS',
    icon: (
      <svg width="82" height="48" viewBox="0 0 130 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="38" fontFamily="Arial Black,sans-serif" fontWeight="900" fontSize="42" fill="#232F3E">aws</text>
        <path d="M8 50 Q65 68 122 50" stroke="#FF9900" strokeWidth="5" fill="none" strokeLinecap="round"/>
        <polygon points="114,44 124,50 114,56" fill="#FF9900"/>
      </svg>
    ),
  },
  {
    name: 'Azure',
    icon: (
      <svg width="135" height="48" viewBox="0 0 260 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,72 28,0 56,72" fill="#0078D4"/>
        <polygon points="28,0 72,72 44,72 56,36" fill="#50B0F0"/>
        <text x="68" y="56" fontFamily="'Segoe UI',Arial,sans-serif" fontWeight="600" fontSize="30" fill="#0078D4">Azure</text>
      </svg>
    ),
  },
  {
    name: 'Google Cloud',
    icon: (
      <svg width="175" height="48" viewBox="0 0 340 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="34" cy="36" r="28" fill="none" stroke="#E0E0E0" strokeWidth="2"/>
        <path d="M34 12 A24 24 0 0 1 58 36 L34 36 Z" fill="#4285F4"/>
        <path d="M34 36 L58 36 A24 24 0 0 1 22 58 Z" fill="#34A853"/>
        <path d="M22 58 A24 24 0 0 1 10 14 Z" fill="#FBBC05"/>
        <path d="M10 14 A24 24 0 0 1 34 12 L22 58 Z" fill="#EA4335"/>
        <rect x="34" y="28" width="24" height="16" rx="2" fill="white"/>
        <text x="72" y="50" fontFamily="'Google Sans',Arial,sans-serif" fontWeight="400" fontSize="27" fill="#5F6368">Google Cloud</text>
      </svg>
    ),
  },
  {
    name: 'HubSpot',
    icon: (
      <svg width="135" height="48" viewBox="0 0 270 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="36" cy="36" r="12" fill="#FF7A59"/>
        <rect x="30" y="4" width="12" height="14" rx="4" fill="#FF7A59"/>
        <rect x="30" y="54" width="12" height="14" rx="4" fill="#FF7A59"/>
        <rect x="4" y="30" width="14" height="12" rx="4" fill="#FF7A59"/>
        <rect x="54" y="30" width="14" height="12" rx="4" fill="#FF7A59"/>
        <circle cx="36" cy="36" r="6" fill="white"/>
        <text x="80" y="50" fontFamily="'Lexend Deca',Arial,sans-serif" fontWeight="700" fontSize="29" fill="#1C1C1C">HubSpot</text>
      </svg>
    ),
  },
  {
    name: 'Docker',
    icon: (
      <svg width="125" height="48" viewBox="0 0 240 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="20" width="16" height="16" rx="2" fill="#2496ED"/>
        <rect x="20" y="20" width="16" height="16" rx="2" fill="#2496ED"/>
        <rect x="38" y="20" width="16" height="16" rx="2" fill="#2496ED"/>
        <rect x="20" y="2" width="16" height="16" rx="2" fill="#2496ED"/>
        <rect x="38" y="2" width="16" height="16" rx="2" fill="#2496ED"/>
        <rect x="56" y="20" width="16" height="16" rx="2" fill="#2496ED"/>
        <path d="M2 44 Q35 60 68 44" stroke="#2496ED" strokeWidth="4" fill="none" strokeLinecap="round"/>
        <circle cx="64" cy="30" r="6" fill="#2496ED"/>
        <text x="84" y="46" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="28" fill="#2496ED">Docker</text>
      </svg>
    ),
  },
  {
    name: 'Microsoft',
    icon: (
      <svg width="150" height="48" viewBox="0 0 280 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="2" width="28" height="28" fill="#F25022"/>
        <rect x="30" y="2" width="28" height="28" fill="#7FBA00"/>
        <rect x="0" y="32" width="28" height="28" fill="#00A4EF"/>
        <rect x="30" y="32" width="28" height="28" fill="#FFB900"/>
        <text x="70" y="44" fontFamily="'Segoe UI',Arial,sans-serif" fontWeight="400" fontSize="26" fill="#1A1A1A">Microsoft</text>
      </svg>
    ),
  },
];

const marqueeLogos = [...logos, ...logos];

const Developer: React.FC = () => {
  return (
    <>
      <DeveloperStyles />

      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          py: { xs: 6, sm: 7, md: 8 },
          background:
            'linear-gradient(180deg, #f7fbff 0%, #ffffff 45%, #f8fbff 100%)',
          borderTop: '1px solid rgba(15,23,42,0.06)',
          borderBottom: '1px solid rgba(15,23,42,0.06)',
        }}
      >
        {/* ambient glow */}
        <Box
          className="ambient-glow"
          sx={{
            position: 'absolute',
            left: '-8%',
            top: '12%',
            width: { xs: 180, md: 320 },
            height: { xs: 180, md: 320 },
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.10), transparent 70%)',
            filter: 'blur(34px)',
            pointerEvents: 'none',
          }}
        />
        <Box
          className="ambient-glow"
          sx={{
            position: 'absolute',
            right: '-10%',
            bottom: '8%',
            width: { xs: 180, md: 300 },
            height: { xs: 180, md: 300 },
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(14,165,233,0.08), transparent 70%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
            animationDelay: '1.4s',
          }}
        />

        <Container
          maxWidth="xl"
          sx={{
            position: 'relative',
            zIndex: 2,
            px: { xs: 2, sm: 3, md: 5, lg: 6 },
          }}
        >
          {/* Header */}
          <Box
            sx={{
              maxWidth: 760,
              mx: 'auto',
              textAlign: 'center',
              mb: { xs: 4, md: 5 },
            }}
          >
            <Box
              className="ecosystem-pill"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 1.6,
                py: 0.7,
                mb: 2,
                borderRadius: '999px',
                border: '1px solid rgba(59,130,246,0.16)',
                background: 'rgba(59,130,246,0.05)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <Box
                sx={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: '#3b82f6',
                  boxShadow: '0 0 12px rgba(59,130,246,0.55)',
                }}
              />
              <Typography
                sx={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 700,
                  color: '#2563eb',
                  fontSize: { xs: '0.68rem', sm: '0.72rem' },
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                }}
              >
                Our Ecosystem
              </Typography>
            </Box>

            <Typography
              className="ecosystem-heading"
              component="h2"
              sx={{
                fontFamily: "'Sora', sans-serif",
                color: '#0f172a',
                fontWeight: 800,
                fontSize: {
                  xs: '1.45rem',
                  sm: '1.8rem',
                  md: '2.2rem',
                  lg: '2.5rem',
                },
                lineHeight: 1.18,
                letterSpacing: '-0.03em',
                mb: 1.5,
              }}
            >
              Platforms we build, connect
              <br />
              and scale with
            </Typography>

            <Typography
              className="ecosystem-copy"
              sx={{
                fontFamily: "'DM Sans', sans-serif",
                color: 'rgba(15,23,42,0.62)',
                fontSize: { xs: '0.9rem', md: '1rem' },
                lineHeight: 1.75,
                maxWidth: 640,
                mx: 'auto',
              }}
            >
              From CRM and cloud to automation and DevOps, we work across
              trusted technology ecosystems to build fast, reliable and
              scalable business solutions.
            </Typography>
          </Box>

          {/* Single marquee */}
          <Box
            className="marquee-shell"
            sx={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: { xs: '22px', md: '28px' },
              border: '1px solid rgba(15,23,42,0.07)',
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.78) 0%, rgba(248,250,252,0.94) 100%)',
              boxShadow: '0 18px 40px rgba(15,23,42,0.05)',
              backdropFilter: 'blur(14px)',
              py: { xs: 2.4, sm: 2.8, md: 3.2 },
            }}
          >
            {/* top glow line */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: '12%',
                right: '12%',
                height: '1px',
                background:
                  'linear-gradient(90deg, transparent, rgba(59,130,246,0.25), transparent)',
                zIndex: 2,
              }}
            />

            {/* left fade */}
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: { xs: 30, sm: 50, md: 80 },
                zIndex: 2,
                pointerEvents: 'none',
                background:
                  'linear-gradient(to right, rgba(248,250,252,1) 0%, rgba(248,250,252,0) 100%)',
              }}
            />

            {/* right fade */}
            <Box
              sx={{
                position: 'absolute',
                right: 0,
                top: 0,
                bottom: 0,
                width: { xs: 30, sm: 50, md: 80 },
                zIndex: 2,
                pointerEvents: 'none',
                background:
                  'linear-gradient(to left, rgba(248,250,252,1) 0%, rgba(248,250,252,0) 100%)',
              }}
            />

            <Box sx={{ overflow: 'hidden', width: '100%' }}>
              <Box className="partner-track">
                {marqueeLogos.map((logo, i) => (
                  <Box
                    key={`${logo.name}-${i}`}
                    className="logo-card"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: { xs: 0.9, sm: 1.1, md: 1.35 },
                      px: { xs: 2.4, sm: 3.2, md: 3.8 },
                      py: { xs: 1.35, sm: 1.6, md: 1.8 },
                      minWidth: { xs: 150, sm: 170, md: 200 },
                      minHeight: { xs: 68, sm: 78, md: 88 },
                      borderRadius: { xs: '16px', md: '18px' },
                      border: '1px solid rgba(15,23,42,0.08)',
                      background:
                        'linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(248,250,252,0.94) 100%)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 4px 18px rgba(2,6,23,0.04)',
                      animationDelay: `${i * 0.03}s`,
                    }}
                  >
                    <Box
                      className="logo-shell"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '& svg': {
                          display: 'block',
                          height: { xs: 28, sm: 32, md: 38 },
                          width: 'auto',
                          maxWidth: { xs: 120, sm: 145, md: 180 },
                        },
                      }}
                    >
                      {logo.icon}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>

            <Typography
              sx={{
                fontFamily: "'DM Sans', sans-serif",
                textAlign: 'center',
                mt: { xs: 2, md: 2.4 },
                fontSize: { xs: '0.72rem', md: '0.78rem' },
                color: 'rgba(15,23,42,0.38)',
                letterSpacing: '0.04em',
              }}
            >
              Trusted by businesses using leading platforms
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Developer;