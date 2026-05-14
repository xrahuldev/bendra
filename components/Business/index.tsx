'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import {
  Inventory2Outlined,
  CodeOutlined,
  HubOutlined,
  CloudOutlined,
  PhoneIphoneOutlined,
  ArrowForward,
} from '@mui/icons-material';

const BusinessStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

    @keyframes fadeUpCard {
      from { opacity: 0; transform: translateY(28px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeUpText {
      from { opacity: 0; transform: translateY(16px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .biz-tag   { animation: fadeUpText 0.7s cubic-bezier(0.16,1,0.3,1) 0.05s both; }
    .biz-title { animation: fadeUpText 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s both; }
    .biz-desc  { animation: fadeUpText 0.8s cubic-bezier(0.16,1,0.3,1) 0.25s both; }

    .svc-card {
      transition:
        transform 0.4s cubic-bezier(0.34,1.56,0.64,1),
        box-shadow 0.35s ease,
        border-color 0.35s ease !important;
    }
    .svc-card:hover {
      transform: translateY(-10px) !important;
    }
    .svc-icon-box {
      transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
    }
    .svc-card:hover .svc-icon-box {
      transform: scale(1.1) rotate(-4deg);
    }
    .svc-arrow {
      transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease !important;
    }
    .svc-card:hover .svc-arrow {
      transform: translateX(5px) !important;
      opacity: 1 !important;
    }
    .svc-num {
      transition: color 0.3s ease !important;
    }
    .svc-card:hover .svc-num {
      color: #3b82f6 !important;
    }
  `}</style>
);

const services = [
  {
    icon: <Inventory2Outlined sx={{ fontSize: 26, color: '#fff' }} />,
    iconBg: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    iconGlow: '0 8px 24px rgba(59,130,246,0.28)',
    accentColor: '#3b82f6',
    tag: '01',
    title: 'CRM Development',
    description:
      'Zoho, Salesforce, and custom CRM solutions to streamline your business processes and customer relationships.',
  },
  {
    icon: <CodeOutlined sx={{ fontSize: 26, color: '#fff' }} />,
    iconBg: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    iconGlow: '0 8px 24px rgba(16,185,129,0.28)',
    accentColor: '#10b981',
    tag: '02',
    title: 'Web Development',
    description:
      'Modern, responsive, high-performance websites built for growth and exceptional user experience.',
  },
  {
    icon: <HubOutlined sx={{ fontSize: 26, color: '#fff' }} />,
    iconBg: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)',
    iconGlow: '0 8px 24px rgba(168,85,247,0.28)',
    accentColor: '#a855f7',
    tag: '03',
    title: 'Business Automation',
    description:
      'Automate workflows and processes to save time, reduce costs, and improve operational efficiency.',
  },
  {
    icon: <CloudOutlined sx={{ fontSize: 26, color: '#fff' }} />,
    iconBg: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    iconGlow: '0 8px 24px rgba(245,158,11,0.28)',
    accentColor: '#f59e0b',
    tag: '04',
    title: 'SaaS Solutions',
    description:
      'Scalable SaaS applications designed to solve real business problems and drive measurable impact.',
  },
  {
    icon: <PhoneIphoneOutlined sx={{ fontSize: 26, color: '#fff' }} />,
    iconBg: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
    iconGlow: '0 8px 24px rgba(6,182,212,0.28)',
    accentColor: '#06b6d4',
    tag: '05',
    title: 'Mobile Development',
    description:
      'Custom mobile apps for iOS and Android that engage users and convert them into loyal customers.',
  },
];

const Business: React.FC = () => {
  return (
    <>
      <BusinessStyles />

      <Box
        sx={{
          background: '#ffffff',
          py: { xs: 9, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Dot grid texture */}
        <Box sx={{
          position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(rgba(59,130,246,0.06) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }} />

        {/* Soft blobs */}
        <Box sx={{
          position: 'absolute', top: '-8%', right: '-6%',
          width: '38%', height: '55%', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
        }} />
        <Box sx={{
          position: 'absolute', bottom: '-5%', left: '-5%',
          width: '32%', height: '45%', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
        }} />

        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 }, position: 'relative', zIndex: 1 }}>

          {/* ── Header ── */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'flex-end' },
              justifyContent: 'space-between',
              gap: { xs: 3, md: 8 },
              mb: { xs: 7, md: 9 },
            }}
          >
            <Box sx={{ flex: '1 1 55%' }}>
              {/* Pill */}
              <Box
                className="biz-tag"
                sx={{
                  display: 'inline-flex', alignItems: 'center', gap: 1,
                  mb: 3, px: 2, py: 0.65, borderRadius: '999px',
                  border: '1.5px solid rgba(59,130,246,0.2)',
                  background: '#eff6ff',
                }}
              >
                <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: '#3b82f6' }} />
                <Typography sx={{
                  fontFamily: "'Sora', sans-serif",
                  color: '#3b82f6', fontWeight: 600,
                  fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                }}>
                  What We Do
                </Typography>
              </Box>

              <Typography
                className="biz-title"
                component="h2"
                sx={{
                  fontFamily: "'Sora', sans-serif",
                  color: '#0a1628', fontWeight: 800,
                  fontSize: { xs: '1.85rem', sm: '2.2rem', md: '2.6rem', lg: '3rem' },
                  lineHeight: 1.15, letterSpacing: '-0.025em',
                }}
              >
                Solutions that empower
                <br />
                <Box component="span" sx={{
                  background: 'linear-gradient(90deg, #3b82f6 0%, #6366f1 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  your business.
                </Box>
              </Typography>
            </Box>

            <Box className="biz-desc" sx={{ flex: '0 1 400px' }}>
              <Box sx={{ borderLeft: '3px solid #3b82f6', pl: 2.5 }}>
                <Typography sx={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: '#64748b',
                  fontSize: { xs: '0.92rem', md: '1rem' },
                  lineHeight: 1.8, fontWeight: 400,
                }}>
                  From CRM development to custom web solutions, we build systems
                  that are efficient, scalable, and tailored to your goals.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* ── Cards ── */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(5, 1fr)',
              },
              gap: { xs: 2.5, md: 2 },
            }}
          >
            {services.map((svc, i) => (
              <Box
                key={i}
                className="svc-card"
                sx={{
                  background: '#fff',
                  borderRadius: '20px',
                  p: { xs: 3, md: 3 },
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  border: '1.5px solid #f1f5f9',
                  minHeight: { md: '300px' },
                  position: 'relative',
                  overflow: 'hidden',
                  animation: `fadeUpCard 0.65s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.09}s both`,
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  '&:hover': {
                    boxShadow: `0 20px 50px rgba(0,0,0,0.09), 0 0 0 1.5px ${svc.accentColor}40`,
                    borderColor: `${svc.accentColor}30`,
                  },
                }}
              >
                {/* Top color stripe */}
                <Box sx={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                  background: svc.iconBg,
                  borderRadius: '20px 20px 0 0',
                }} />

                {/* Number */}
                <Typography
                  className="svc-num"
                  sx={{
                    fontFamily: "'Sora', sans-serif",
                    color: '#cbd5e1', fontWeight: 700,
                    fontSize: '0.7rem', letterSpacing: '0.14em',
                    mb: 2.5, mt: 0.5,
                  }}
                >
                  {svc.tag}
                </Typography>

                {/* Icon */}
                <Box
                  className="svc-icon-box"
                  sx={{
                    width: 50, height: 50, borderRadius: '13px',
                    background: svc.iconBg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    mb: 2.5, boxShadow: svc.iconGlow,
                  }}
                >
                  {svc.icon}
                </Box>

                {/* Title */}
                <Typography sx={{
                  fontFamily: "'Sora', sans-serif",
                  color: '#0f172a', fontWeight: 700,
                  fontSize: { xs: '1rem', md: '1.02rem' },
                  lineHeight: 1.3, letterSpacing: '-0.01em', mb: 1.2,
                }}>
                  {svc.title}
                </Typography>

                {/* Description */}
                <Typography sx={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: '#64748b',
                  fontSize: { xs: '0.84rem', md: '0.86rem' },
                  lineHeight: 1.7, flex: 1, fontWeight: 400,
                }}>
                  {svc.description}
                </Typography>

                {/* Learn more */}
                <Box
                  className="svc-arrow"
                  sx={{
                    display: 'flex', alignItems: 'center', gap: 0.5,
                    color: svc.accentColor, mt: 2.5, opacity: 0.45,
                  }}
                >
                  <Typography sx={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 600, fontSize: '0.8rem',
                    letterSpacing: '0.04em', color: 'inherit',
                  }}>
                    Learn more
                  </Typography>
                  <ArrowForward sx={{ fontSize: 15 }} />
                </Box>
              </Box>
            ))}
          </Box>

        </Container>
      </Box>
    </>
  );
};

export default Business;