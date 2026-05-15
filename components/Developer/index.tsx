'use client';

import React, { useRef, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { CheckCircle, TrendingUp, Speed } from '@mui/icons-material';

/* ─── Optimized Styles ─────────────────────────────────────── */
const Styles = React.memo(() => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes slideRight {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    @keyframes glow {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 1; }
    }

    .fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
    .delay-1 { animation-delay: 0.1s; }
    .delay-2 { animation-delay: 0.2s; }
    .delay-3 { animation-delay: 0.3s; }
    .delay-4 { animation-delay: 0.4s; }

    .logo-track {
      display: flex;
      align-items: center;
      gap: 24px;
      will-change: transform;
      animation: slideRight 40s linear infinite;
    }

    .logo-track:hover {
      animation-play-state: paused;
    }

    .tech-card {
      position: relative;
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.06);
      border-radius: 16px;
      padding: 32px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      overflow: hidden;
    }

    .tech-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #3b82f6, #2563eb);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .tech-card:hover::before {
      transform: scaleX(1);
    }

    .tech-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
      border-color: rgba(59, 130, 246, 0.2);
    }

    .stat-card {
      background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
      border: 1px solid rgba(0, 0, 0, 0.06);
      border-radius: 12px;
      padding: 24px;
      text-align: center;
      transition: all 0.3s ease;
    }

    .stat-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
    }

    @media (max-width: 600px) {
      .tech-card { padding: 24px; }
      .stat-card { padding: 20px; }
    }
  `}</style>
));
Styles.displayName = 'Styles';

/* ─── Technology Logos (Optimized SVG) ─────────────────────── */
const techLogos = [
  {
    name: 'Salesforce',
    color: '#00A1E0',
    category: 'CRM',
    logo: (
      <svg width="140" height="40" viewBox="0 0 140 40" fill="none">
        <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="700" fill="#00A1E0">Salesforce</text>
      </svg>
    ),
  },
  {
    name: 'Zoho',
    color: '#E42527',
    category: 'CRM',
    logo: (
      <svg width="90" height="40" viewBox="0 0 90 40" fill="none">
        <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="700" fill="#E42527">Zoho</text>
      </svg>
    ),
  },
  {
    name: 'AWS',
    color: '#FF9900',
    category: 'Cloud',
    logo: (
      <svg width="70" height="40" viewBox="0 0 70 40" fill="none">
        <text x="0" y="26" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="800" fill="#232F3E">AWS</text>
        <path d="M5 35 Q35 42 65 35" stroke="#FF9900" strokeWidth="3" fill="none"/>
      </svg>
    ),
  },
  {
    name: 'Azure',
    color: '#0078D4',
    category: 'Cloud',
    logo: (
      <svg width="90" height="40" viewBox="0 0 90 40" fill="none">
        <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="600" fill="#0078D4">Azure</text>
      </svg>
    ),
  },
  {
    name: 'Google Cloud',
    color: '#4285F4',
    category: 'Cloud',
    logo: (
      <svg width="130" height="40" viewBox="0 0 130 40" fill="none">
        <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="500" fill="#5F6368">Google Cloud</text>
      </svg>
    ),
  },
  {
    name: 'HubSpot',
    color: '#FF7A59',
    category: 'Marketing',
    logo: (
      <svg width="100" height="40" viewBox="0 0 100 40" fill="none">
        <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" fill="#FF7A59">HubSpot</text>
      </svg>
    ),
  },
  {
    name: 'Microsoft',
    color: '#00A4EF',
    category: 'Enterprise',
    logo: (
      <svg width="110" height="40" viewBox="0 0 110 40" fill="none">
        <rect width="12" height="12" fill="#F25022"/>
        <rect x="14" width="12" height="12" fill="#7FBA00"/>
        <rect y="14" width="12" height="12" fill="#00A4EF"/>
        <rect x="14" y="14" width="12" height="12" fill="#FFB900"/>
        <text x="32" y="20" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="500" fill="#1A1A1A">Microsoft</text>
      </svg>
    ),
  },
  {
    name: 'Docker',
    color: '#2496ED',
    category: 'DevOps',
    logo: (
      <svg width="100" height="40" viewBox="0 0 100 40" fill="none">
        <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" fill="#2496ED">Docker</text>
      </svg>
    ),
  },
];

/* Double for seamless loop */
const infiniteLogos = [...techLogos, ...techLogos];

/* ─── Stats Data ─────────────────────────────────────────────── */
const stats = [
  { icon: <CheckCircle />, value: '8+', label: 'Technology Platforms', color: '#10b981' },
  { icon: <TrendingUp />, value: '200+', label: 'Projects Delivered', color: '#3b82f6' },
  { icon: <Speed />, value: '50+', label: 'Certified Experts', color: '#f59e0b' },
];

/* ─── Main Component ─────────────────────────────────────────── */
const Developer: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <>
      <Styles />

      <Box
        component="section"
        sx={{
          position: 'relative',
          py: { xs: 8, md: 12, lg: 14 },
          background: '#ffffff',
          overflow: 'hidden',
        }}
      >
        {/* Subtle Background Pattern */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            opacity: 0.4,
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            pointerEvents: 'none',
          }}
        />

        {/* Top Gradient Accent */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '400px',
            background: 'radial-gradient(ellipse at top, rgba(59, 130, 246, 0.05), transparent 60%)',
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          
          {/* ─── Header Section ─────────────────────────────── */}
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            
            {/* Badge */}
            <Box
              className="fade-up"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 2,
                py: 0.75,
                mb: 2.5,
                borderRadius: '50px',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                background: 'rgba(59, 130, 246, 0.05)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#3b82f6',
                  boxShadow: '0 0 0 4px rgba(59, 130, 246, 0.2)',
                  animation: 'glow 2s ease-in-out infinite',
                }}
              />
              <Typography
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#3b82f6',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                Technology Stack
              </Typography>
            </Box>

            {/* Main Heading */}
            <Typography
              className="fade-up delay-1"
              component="h2"
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.2,
                mb: 2,
                letterSpacing: '-0.02em',
              }}
            >
              Platforms We
              <Box
                component="span"
                sx={{
                  display: 'block',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Master & Scale
              </Box>
            </Typography>

            {/* Description */}
            <Typography
              className="fade-up delay-2"
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: { xs: '1rem', md: '1.125rem' },
                fontWeight: 400,
                color: '#64748b',
                lineHeight: 1.7,
                maxWidth: '680px',
                mx: 'auto',
              }}
            >
              From enterprise CRM systems to cloud infrastructure, we leverage industry-leading
              platforms to deliver robust, scalable solutions for modern businesses.
            </Typography>
          </Box>

          {/* ─── Featured Technologies Grid ───────────────── */}
          <Box
            className="fade-up delay-3"
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 3,
              mb: { xs: 6, md: 8 },
            }}
          >
            {/* Salesforce Card */}
            <Box className="tech-card">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #00A1E0 0%, #0089c7 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 16px rgba(0, 161, 224, 0.25)',
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="14" fill="white" opacity="0.9"/>
                  </svg>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#0f172a',
                      lineHeight: 1.2,
                    }}
                  >
                    Salesforce
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: '#64748b',
                    }}
                  >
                    Platinum Partner
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9375rem',
                  color: '#64748b',
                  lineHeight: 1.6,
                }}
              >
                Custom CRM development, Sales Cloud, Service Cloud, and Marketing Cloud
                implementations with certified expertise.
              </Typography>
            </Box>

            {/* Zoho Card */}
            <Box className="tech-card">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #E42527 0%, #c91f21 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 16px rgba(228, 37, 39, 0.25)',
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="20" fontWeight="700">Z</text>
                  </svg>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#0f172a',
                      lineHeight: 1.2,
                    }}
                  >
                    Zoho
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: '#64748b',
                    }}
                  >
                    Premium Partner
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9375rem',
                  color: '#64748b',
                  lineHeight: 1.6,
                }}
              >
                Complete suite integration including CRM, Books, Projects, and custom
                application development on Zoho Creator.
              </Typography>
            </Box>
          </Box>

          {/* ─── Logo Marquee ──────────────────────────────── */}
          <Box
            className="fade-up delay-4"
            sx={{
              position: 'relative',
              py: 4,
              mb: { xs: 6, md: 8 },
              overflow: 'hidden',
              '&::before, &::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                bottom: 0,
                width: '100px',
                zIndex: 2,
                pointerEvents: 'none',
              },
              '&::before': {
                left: 0,
                background: 'linear-gradient(to right, #ffffff, transparent)',
              },
              '&::after': {
                right: 0,
                background: 'linear-gradient(to left, #ffffff, transparent)',
              },
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <Box
              className="logo-track"
              sx={{
                animationPlayState: isPaused ? 'paused' : 'running',
              }}
            >
              {infiniteLogos.map((tech, index) => (
                <Box
                  key={`${tech.name}-${index}`}
                  sx={{
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '160px',
                    height: '80px',
                    px: 3,
                    background: '#ffffff',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.08)',
                      borderColor: tech.color,
                    },
                  }}
                >
                  {tech.logo}
                </Box>
              ))}
            </Box>
          </Box>

          {/* ─── Stats Grid ───────────────────────────────── */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
              gap: 3,
            }}
          >
            {stats.map((stat, index) => (
              <Box
                key={stat.label}
                className={`stat-card fade-up delay-${index + 1}`}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mb: 1.5,
                    color: stat.color,
                    '& svg': { fontSize: '2rem' },
                  }}
                >
                  {stat.icon}
                </Box>
                <Typography
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: '#0f172a',
                    lineHeight: 1,
                    mb: 0.5,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: '#64748b',
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>

        </Container>
      </Box>
    </>
  );
};

export default Developer;