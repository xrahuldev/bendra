'use client';

import React, { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { ArrowForward, OpenInNew } from '@mui/icons-material';
import Link from 'next/link';

const OurWorkStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

    @keyframes fadeUpWork {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeUpCard {
      from { opacity: 0; transform: translateY(32px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .work-header { animation: fadeUpWork 0.75s cubic-bezier(0.16,1,0.3,1) 0.05s both; }

    .proj-card {
      transition:
        transform 0.45s cubic-bezier(0.34,1.56,0.64,1),
        box-shadow 0.4s ease !important;
    }
    .proj-card:hover {
      transform: translateY(-12px) !important;
    }
    .proj-card:hover .proj-img {
      transform: scale(1.08) !important;
    }
    .proj-card:hover .proj-cta {
      opacity: 1 !important;
      transform: translateY(0px) !important;
    }
    .proj-card:hover .proj-arrow-link {
      transform: translateX(4px) !important;
      opacity: 1 !important;
    }
    .proj-card:hover .proj-industry-tag {
      background: rgba(255,255,255,0.18) !important;
    }

    .proj-img {
      transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94) !important;
    }
    .proj-cta {
      transition: opacity 0.3s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1) !important;
    }
    .proj-arrow-link {
      transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease !important;
    }
    .proj-industry-tag {
      transition: background 0.3s ease !important;
    }

    .view-all-btn {
      transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1) !important;
    }
    .view-all-btn:hover {
      transform: translateX(4px) !important;
    }
    .view-all-btn:hover .view-arrow {
      transform: translateX(4px);
    }
    .view-arrow {
      transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
    }
  `}</style>
);

const projects = [
  {
    title: 'CRM Solution',
    titleLine2: 'for Real Estate',
    industry: 'Real Estate',
    bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    overlay: 'linear-gradient(160deg, rgba(10,22,40,0.88) 0%, rgba(30,41,90,0.82) 100%)',
    accentColor: '#7c3aed',
    accentLight: '#ede9fe',
    tagColor: 'rgba(124,58,237,0.15)',
    tagText: '#c4b5fd',
    dark: true,
  },
  {
    title: 'Learning Management',
    titleLine2: 'System',
    industry: 'EdTech',
    bgImage: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    overlay: 'linear-gradient(160deg, rgba(240,249,255,0.96) 0%, rgba(219,234,254,0.92) 100%)',
    accentColor: '#3b82f6',
    accentLight: '#dbeafe',
    tagColor: 'rgba(59,130,246,0.12)',
    tagText: '#2563eb',
    dark: false,
  },
  {
    title: 'Sales Automation',
    titleLine2: 'for Retail',
    industry: 'Retail',
    bgImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    overlay: 'linear-gradient(160deg, rgba(10,22,40,0.9) 0%, rgba(15,32,70,0.84) 100%)',
    accentColor: '#06b6d4',
    accentLight: '#cffafe',
    tagColor: 'rgba(6,182,212,0.15)',
    tagText: '#67e8f9',
    dark: true,
  },
  {
    title: 'Healthcare CRM',
    titleLine2: 'Platform',
    industry: 'Healthcare',
    bgImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    overlay: 'linear-gradient(160deg, rgba(240,253,244,0.96) 0%, rgba(209,250,229,0.92) 100%)',
    accentColor: '#10b981',
    accentLight: '#d1fae5',
    tagColor: 'rgba(16,185,129,0.12)',
    tagText: '#059669',
    dark: false,
  },
];

const OurWork: React.FC = () => {
  return (
    <>
      <OurWorkStyles />

      <Box
        sx={{
          background: '#ffffff',
          py: { xs: 9, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Dot grid */}
        <Box sx={{
          position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(rgba(59,130,246,0.055) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }} />

        {/* Ambient blobs */}
        <Box sx={{
          position: 'absolute', top: '-8%', right: '-5%',
          width: '35%', height: '55%', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
        }} />
        <Box sx={{
          position: 'absolute', bottom: '-5%', left: '-5%',
          width: '30%', height: '45%', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
        }} />

        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 }, position: 'relative', zIndex: 1 }}>

          {/* ── Header ── */}
          <Box
            className="work-header"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'flex-start', sm: 'flex-end' },
              justifyContent: 'space-between',
              gap: { xs: 2.5, sm: 3 },
              mb: { xs: 6, md: 8 },
            }}
          >
            <Box>
              {/* Pill tag */}
              <Box sx={{
                display: 'inline-flex', alignItems: 'center', gap: 1,
                mb: 2.5, px: 2, py: 0.65, borderRadius: '999px',
                border: '1.5px solid rgba(59,130,246,0.2)',
                background: '#eff6ff',
              }}>
                <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: '#3b82f6' }} />
                <Typography sx={{
                  fontFamily: "'Sora', sans-serif",
                  color: '#3b82f6', fontWeight: 600,
                  fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                }}>
                  Our Work
                </Typography>
              </Box>

              <Typography
                component="h2"
                sx={{
                  fontFamily: "'Sora', sans-serif",
                  color: '#0a1628', fontWeight: 800,
                  fontSize: { xs: '1.8rem', sm: '2.1rem', md: '2.6rem', lg: '3rem' },
                  lineHeight: 1.15, letterSpacing: '-0.025em',
                }}
              >
                Solutions we&apos;re{' '}
                <Box component="span" sx={{
                  background: 'linear-gradient(90deg, #3b82f6 0%, #6366f1 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  proud of
                </Box>
              </Typography>
            </Box>

            {/* View all */}
            <Link href="/portfolio" style={{ textDecoration: 'none' }}>
              <Box
                className="view-all-btn"
                sx={{
                  display: 'inline-flex', alignItems: 'center', gap: 1,
                  color: '#3b82f6', cursor: 'pointer',
                  pb: { sm: 0.5 },
                }}
              >
                <Typography sx={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 600, fontSize: { xs: '0.875rem', md: '0.95rem' },
                  color: 'inherit',
                }}>
                  View All Projects
                </Typography>
                <ArrowForward className="view-arrow" sx={{ fontSize: '1rem' }} />
              </Box>
            </Link>
          </Box>

          {/* ── Projects Grid ── */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                lg: 'repeat(4, 1fr)',
              },
              gap: { xs: 2.5, md: 2.5 },
            }}
          >
            {projects.map((proj, i) => (
              <Box
                key={i}
                className="proj-card"
                sx={{
                  position: 'relative',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  minHeight: { xs: '280px', md: '320px' },
                  cursor: 'pointer',
                  border: proj.dark
                    ? '1px solid rgba(255,255,255,0.06)'
                    : '1.5px solid #f1f5f9',
                  boxShadow: proj.dark
                    ? '0 4px 20px rgba(0,0,0,0.12)'
                    : '0 4px 20px rgba(0,0,0,0.05)',
                  animation: `fadeUpCard 0.65s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.1}s both`,
                  '&:hover': {
                    boxShadow: proj.dark
                      ? `0 24px 60px rgba(0,0,0,0.25), 0 0 0 1px ${proj.accentColor}40`
                      : `0 24px 60px rgba(0,0,0,0.1), 0 0 0 1.5px ${proj.accentColor}30`,
                  },
                }}
              >
                {/* Background image */}
                <Box
                  className="proj-img"
                  sx={{
                    position: 'absolute', inset: 0,
                    backgroundImage: `url(${proj.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />

                {/* Overlay */}
                <Box sx={{
                  position: 'absolute', inset: 0,
                  background: proj.overlay,
                  zIndex: 1,
                }} />

                {/* Content */}
                <Box
                  sx={{
                    position: 'relative', zIndex: 2,
                    p: { xs: 3, md: 3.5 },
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: { xs: '280px', md: '320px' },
                  }}
                >
                  {/* Top */}
                  <Box>
                    {/* Industry tag */}
                    <Box
                      className="proj-industry-tag"
                      sx={{
                        display: 'inline-flex', alignItems: 'center',
                        px: 1.5, py: 0.45, borderRadius: '999px',
                        background: proj.tagColor,
                        mb: 2,
                        border: `1px solid ${proj.accentColor}25`,
                      }}
                    >
                      <Typography sx={{
                        fontFamily: "'Sora', sans-serif",
                        color: proj.tagText,
                        fontWeight: 600,
                        fontSize: '0.68rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}>
                        {proj.industry}
                      </Typography>
                    </Box>

                    {/* Title */}
                    <Typography sx={{
                      fontFamily: "'Sora', sans-serif",
                      color: proj.dark ? '#fff' : '#0a1628',
                      fontWeight: 800,
                      fontSize: { xs: '1.15rem', md: '1.3rem' },
                      lineHeight: 1.25,
                      letterSpacing: '-0.02em',
                    }}>
                      {proj.title}
                      <br />
                      {proj.titleLine2}
                    </Typography>
                  </Box>

                  {/* Bottom */}
                  <Box
                    className="proj-cta"
                    sx={{
                      opacity: 0,
                      transform: 'translateY(8px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Button
                      variant="contained"
                      endIcon={<OpenInNew sx={{ fontSize: '0.85rem !important' }} />}
                      sx={{
                        fontFamily: "'Sora', sans-serif",
                        background: proj.accentColor,
                        color: '#fff',
                        textTransform: 'none',
                        fontWeight: 600,
                        fontSize: '0.78rem',
                        letterSpacing: '0.03em',
                        px: 2.2, py: 0.85,
                        borderRadius: '8px',
                        boxShadow: `0 4px 16px ${proj.accentColor}40`,
                        '&:hover': {
                          background: proj.accentColor,
                          boxShadow: `0 6px 22px ${proj.accentColor}55`,
                        },
                      }}
                    >
                      Case Study
                    </Button>

                    {/* Arrow circle */}
                    <Box
                      className="proj-arrow-link"
                      sx={{
                        width: 36, height: 36, borderRadius: '50%',
                        border: proj.dark
                          ? '1.5px solid rgba(255,255,255,0.2)'
                          : `1.5px solid ${proj.accentColor}30`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        opacity: 0,
                        color: proj.dark ? '#fff' : proj.accentColor,
                      }}
                    >
                      <ArrowForward sx={{ fontSize: '1rem' }} />
                    </Box>
                  </Box>
                </Box>

                {/* Bottom accent line */}
                <Box sx={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  height: '3px', zIndex: 3,
                  background: `linear-gradient(90deg, ${proj.accentColor}, transparent)`,
                }} />
              </Box>
            ))}
          </Box>

        </Container>
      </Box>
    </>
  );
};

export default OurWork;