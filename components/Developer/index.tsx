'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const DeveloperStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&display=swap');

    @keyframes marquee {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    .marquee-track {
      display: flex;
      width: max-content;
      animation: marquee 28s linear infinite;
    }

    .marquee-track:hover {
      animation-play-state: paused;
    }

    .logo-pill {
      transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease, background 0.3s ease;
    }
    .logo-pill:hover {
      transform: translateY(-3px) scale(1.06);
      background: rgba(0,0,0,0.04) !important;
      box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    }
  `}</style>
);

const logos = [
  {
    name: 'Zoho',
    icon: (
      <svg width="80" height="44" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="48" fontFamily="Arial Black,sans-serif" fontWeight="900" fontSize="52" fill="#E42527">Z</text>
        <text x="38" y="48" fontFamily="Arial Black,sans-serif" fontWeight="700" fontSize="38" fill="#1A1A1A">oho</text>
      </svg>
    ),
  },
  {
    name: 'Salesforce',
    icon: (
      <svg width="110" height="44" viewBox="0 0 220 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="110" cy="52" rx="92" ry="24" fill="#00A1E0"/>
        <ellipse cx="72"  cy="44" rx="38" ry="38" fill="#00A1E0"/>
        <ellipse cx="138" cy="36" rx="44" ry="44" fill="#00A1E0"/>
        <ellipse cx="108" cy="28" rx="34" ry="34" fill="#00A1E0"/>
        <text x="42" y="62" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="26" fill="white">salesforce</text>
      </svg>
    ),
  },
  {
    name: 'AWS',
    icon: (
      <svg width="72" height="44" viewBox="0 0 130 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="38" fontFamily="Arial Black,sans-serif" fontWeight="900" fontSize="42" fill="#232F3E">aws</text>
        <path d="M8 50 Q65 68 122 50" stroke="#FF9900" strokeWidth="5" fill="none" strokeLinecap="round"/>
        <polygon points="114,44 124,50 114,56" fill="#FF9900"/>
      </svg>
    ),
  },
  {
    name: 'Azure',
    icon: (
      <svg width="120" height="44" viewBox="0 0 260 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,72 28,0 56,72" fill="#0078D4"/>
        <polygon points="28,0 72,72 44,72 56,36" fill="#50B0F0"/>
        <text x="68" y="56" fontFamily="'Segoe UI',Arial,sans-serif" fontWeight="600" fontSize="30" fill="#0078D4">Azure</text>
      </svg>
    ),
  },
  {
    name: 'Google Cloud',
    icon: (
      <svg width="160" height="44" viewBox="0 0 340 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* G multicolor mark */}
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
      <svg width="120" height="44" viewBox="0 0 270 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* HubSpot sprocket */}
        <circle cx="36" cy="36" r="12" fill="#FF7A59"/>
        <rect x="30" y="4"  width="12" height="14" rx="4" fill="#FF7A59"/>
        <rect x="30" y="54" width="12" height="14" rx="4" fill="#FF7A59"/>
        <rect x="4"  y="30" width="14" height="12" rx="4" fill="#FF7A59"/>
        <rect x="54" y="30" width="14" height="12" rx="4" fill="#FF7A59"/>
        <circle cx="36" cy="36" r="6" fill="white"/>
        <text x="80" y="50" fontFamily="'Lexend Deca',Arial,sans-serif" fontWeight="700" fontSize="29" fill="#1C1C1C">HubSpot</text>
      </svg>
    ),
  },
  {
    name: 'Docker',
    icon: (
      <svg width="110" height="44" viewBox="0 0 240 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2"  y="20" width="16" height="16" rx="2" fill="#2496ED"/>
        <rect x="20" y="20" width="16" height="16" rx="2" fill="#2496ED"/>
        <rect x="38" y="20" width="16" height="16" rx="2" fill="#2496ED"/>
        <rect x="20" y="2"  width="16" height="16" rx="2" fill="#2496ED"/>
        <rect x="38" y="2"  width="16" height="16" rx="2" fill="#2496ED"/>
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
      <svg width="140" height="44" viewBox="0 0 280 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0"  y="2"  width="28" height="28" fill="#F25022"/>
        <rect x="30" y="2"  width="28" height="28" fill="#7FBA00"/>
        <rect x="0"  y="32" width="28" height="28" fill="#00A4EF"/>
        <rect x="30" y="32" width="28" height="28" fill="#FFB900"/>
        <text x="70" y="44" fontFamily="'Segoe UI',Arial,sans-serif" fontWeight="400" fontSize="26" fill="#1A1A1A">Microsoft</text>
      </svg>
    ),
  },
];

const allLogos = [...logos, ...logos];

const Developer: React.FC = () => {
  return (
    <>
      <DeveloperStyles />

      <Box
        sx={{
          background: '#ffffff',
          py: { xs: 4, md: 5 },
          borderTop: '1px solid rgba(0,0,0,0.06)',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Box sx={{
          position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)',
        }} />

        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
          <Typography
            sx={{
              fontFamily: "'Sora', sans-serif",
              color: 'rgba(0,0,0,0.35)',
              fontWeight: 600,
              fontSize: { xs: '0.68rem', md: '0.72rem' },
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              textAlign: 'center',
              mb: { xs: 3, md: 3.5 },
            }}
          >
            Trusted by businesses using leading platforms
          </Typography>
        </Container>

        {/* Left fade */}
        <Box sx={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px', zIndex: 2,
          background: 'linear-gradient(to right, #ffffff 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />
        {/* Right fade */}
        <Box sx={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px', zIndex: 2,
          background: 'linear-gradient(to left, #ffffff 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />

        <Box sx={{ overflow: 'hidden', width: '100%' }}>
          <Box className="marquee-track">
            {allLogos.map((logo, i) => (
              <Box
                key={`${logo.name}-${i}`}
                className="logo-pill"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: { xs: 2, md: 2.5 },
                  px: { xs: 2.5, md: 3.5 },
                  py: { xs: 1.2, md: 1.5 },
                  borderRadius: '14px',
                  border: '1px solid rgba(0,0,0,0.07)',
                  background: 'rgba(0,0,0,0.015)',
                  cursor: 'default',
                  flexShrink: 0,
                  whiteSpace: 'nowrap',
                  minHeight: { xs: '56px', md: '68px' },
                }}
              >
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: { xs: 36, md: 44 },
                }}>
                  {logo.icon}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Developer;