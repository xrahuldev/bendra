'use client';

import React from 'react';
import { Box, Button, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
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
      from { opacity: 0; transform: translateY(32px) rotateX(6deg); }
      to   { opacity: 1; transform: translateY(0) rotateX(0deg); }
    }

    @keyframes shineSlide {
      0%   { transform: translateX(-100%) skewX(-15deg); }
      100% { transform: translateX(350%) skewX(-15deg); }
    }

    @keyframes pulseAccent {
      0%, 100% { opacity: 0.7; }
      50%      { opacity: 1; }
    }

    @keyframes floatBadge {
      0%, 100% { transform: translateY(0px); }
      50%      { transform: translateY(-4px); }
    }

    .work-header {
      animation: fadeUpWork 0.75s cubic-bezier(0.16,1,0.3,1) 0.05s both;
    }

    .proj-card {
      -webkit-tap-highlight-color: transparent;
      perspective: 1200px;
      transition:
        transform 0.45s cubic-bezier(0.34,1.56,0.64,1),
        box-shadow 0.4s ease !important;
    }

    .proj-img {
      transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.5s ease !important;
    }

    .proj-overlay {
      transition: opacity 0.4s ease !important;
    }

    .proj-cta {
      transition: opacity 0.35s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1) !important;
    }

    .proj-arrow-link {
      transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease, background 0.3s ease !important;
    }

    .proj-industry-tag {
      transition: background 0.3s ease, transform 0.3s ease !important;
    }

    .proj-title {
      transition: transform 0.35s ease !important;
    }

    .proj-shine {
      position: absolute;
      top: 0; left: 0;
      width: 45%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
      transform: translateX(-100%) skewX(-15deg);
      pointer-events: none;
      z-index: 10;
    }

    .proj-accent-line {
      transition: height 0.35s ease, box-shadow 0.35s ease !important;
    }

    .proj-number {
      transition: opacity 0.3s ease, transform 0.3s ease !important;
    }

    /* ── Desktop hover ── */
    @media (hover: hover) {
      .proj-card:hover {
        transform: translateY(-14px) scale(1.02) !important;
      }

      .proj-card:hover .proj-img {
        transform: scale(1.12);
        filter: brightness(0.85);
      }

      .proj-card:hover .proj-overlay {
        opacity: 0.95;
      }

      .proj-card:hover .proj-cta {
        opacity: 1 !important;
        transform: translateY(0px) !important;
      }

      .proj-card:hover .proj-arrow-link {
        transform: translateX(0px) !important;
        opacity: 1 !important;
      }

      .proj-card:hover .proj-industry-tag {
        background: rgba(255,255,255,0.16) !important;
        transform: translateY(-2px);
      }

      .proj-card:hover .proj-title {
        transform: translateY(-2px);
      }

      .proj-card:hover .proj-shine {
        animation: shineSlide 0.7s ease-out forwards;
      }

      .proj-card:hover .proj-accent-line {
        height: 5px !important;
        box-shadow: var(--accent-glow);
      }

      .proj-card:hover .proj-number {
        opacity: 0.3 !important;
        transform: scale(1.1) !important;
      }

      .proj-card:hover .proj-card-glow {
        opacity: 1;
      }
    }

    /* ── Mobile touch ── */
    @media (hover: none) {
      .proj-card:active {
        transform: scale(0.97) !important;
      }

      .proj-card:active .proj-cta {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
    }

    .view-all-btn {
      transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1) !important;
      -webkit-tap-highlight-color: transparent;
    }

    .view-all-btn:hover {
      transform: translateX(4px) !important;
      color: #2563eb !important;
    }

    .view-all-btn:hover .view-arrow {
      transform: translateX(4px);
    }

    .view-arrow {
      transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
    }

    @media (prefers-reduced-motion: reduce) {
      .proj-card, .proj-img, .proj-overlay,
      .proj-cta, .proj-arrow-link, .proj-industry-tag,
      .proj-title, .proj-shine, .proj-accent-line,
      .proj-number, .view-all-btn, .view-arrow,
      .work-header, .proj-card-glow {
        animation: none !important;
        transition: none !important;
      }
    }
  `}</style>
);

const projects = [
  {
    title: 'CRM Solution',
    titleLine2: 'for Real Estate',
    industry: 'Real Estate',
    description: 'Custom Zoho CRM implementation with automated lead tracking and property management.',
    bgImage:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    overlay:
      'linear-gradient(160deg, rgba(10,22,40,0.92) 0%, rgba(30,41,90,0.86) 100%)',
    accentColor: '#7c3aed',
    accentGlow: '0 0 18px rgba(124,58,237,0.5)',
    tagColor: 'rgba(124,58,237,0.15)',
    tagText: '#c4b5fd',
    dark: true,
    href: '/portfolio',
  },
  {
    title: 'Learning Management',
    titleLine2: 'System',
    industry: 'EdTech',
    description: 'Full-stack LMS with real-time analytics, course builder and student engagement tools.',
    bgImage:
      'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    overlay:
      'linear-gradient(160deg, rgba(240,249,255,0.96) 0%, rgba(219,234,254,0.94) 100%)',
    accentColor: '#3b82f6',
    accentGlow: '0 0 18px rgba(59,130,246,0.5)',
    tagColor: 'rgba(59,130,246,0.12)',
    tagText: '#2563eb',
    dark: false,
    href: '/portfolio',
  },
  {
    title: 'Sales Automation',
    titleLine2: 'for Retail',
    industry: 'Retail',
    description: 'End-to-end sales pipeline automation with inventory sync and POS integration.',
    bgImage:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    overlay:
      'linear-gradient(160deg, rgba(10,22,40,0.92) 0%, rgba(15,32,70,0.88) 100%)',
    accentColor: '#06b6d4',
    accentGlow: '0 0 18px rgba(6,182,212,0.5)',
    tagColor: 'rgba(6,182,212,0.15)',
    tagText: '#67e8f9',
    dark: true,
    href: '/portfolio',
  },
  {
    title: 'Healthcare CRM',
    titleLine2: 'Platform',
    industry: 'Healthcare',
    description: 'HIPAA-compliant CRM with patient management, scheduling and automated follow-ups.',
    bgImage:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    overlay:
      'linear-gradient(160deg, rgba(240,253,244,0.96) 0%, rgba(209,250,229,0.94) 100%)',
    accentColor: '#10b981',
    accentGlow: '0 0 18px rgba(16,185,129,0.5)',
    tagColor: 'rgba(16,185,129,0.12)',
    tagText: '#059669',
    dark: false,
    href: '/portfolio',
  },
];

const OurWork: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmallMobile = useMediaQuery('(max-width:360px)');

  return (
    <>
      <OurWorkStyles />

      <Box
        sx={{
          background: '#ffffff',
          py: { xs: 7, sm: 8, md: 10, lg: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Dot grid */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
            backgroundImage:
              'radial-gradient(rgba(59,130,246,0.05) 1.3px, transparent 1.3px)',
            backgroundSize: { xs: '22px 22px', md: '28px 28px' },
          }}
        />

        {/* Ambient blobs */}
        <Box
          sx={{
            position: 'absolute',
            top: '-8%',
            right: '-5%',
            width: { xs: '50%', md: '35%' },
            height: '55%',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '-5%',
            left: '-5%',
            width: { xs: '45%', md: '30%' },
            height: '45%',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        <Container
          maxWidth="xl"
          sx={{
            px: { xs: 2, sm: 3, md: 5, lg: 6 },
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* ── Header ── */}
          <Box
            className="work-header"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'center', sm: 'flex-end' },
              justifyContent: 'space-between',
              gap: { xs: 2, sm: 3 },
              mb: { xs: 5, sm: 6, md: 7 },
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            <Box>
              {/* Pill tag */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.8,
                  mb: 2,
                  px: 1.8,
                  py: 0.55,
                  borderRadius: '999px',
                  border: '1px solid rgba(59,130,246,0.18)',
                  background: '#eff6ff',
                }}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: '#3b82f6',
                    boxShadow: '0 0 8px rgba(59,130,246,0.5)',
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: "'Sora', sans-serif",
                    color: '#3b82f6',
                    fontWeight: 600,
                    fontSize: { xs: '0.66rem', sm: '0.7rem' },
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                  }}
                >
                  Our Work
                </Typography>
              </Box>

              <Typography
                component="h2"
                sx={{
                  fontFamily: "'Sora', sans-serif",
                  color: '#0a1628',
                  fontWeight: 800,
                  fontSize: {
                    xs: isSmallMobile ? '1.45rem' : '1.65rem',
                    sm: '2rem',
                    md: '2.4rem',
                    lg: '2.7rem',
                  },
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em',
                }}
              >
                Solutions we&apos;re{' '}
                <Box
                  component="span"
                  sx={{
                    background:
                      'linear-gradient(90deg, #3b82f6 0%, #6366f1 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  proud of
                </Box>
              </Typography>
            </Box>

            {/* View all */}
            <Link href="/portfolio" style={{ textDecoration: 'none' }}>
              <Box
                className="view-all-btn"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  color: '#3b82f6',
                  cursor: 'pointer',
                  pb: { sm: 0.5 },
                  px: { xs: 2, sm: 0 },
                  py: { xs: 1, sm: 0 },
                  borderRadius: { xs: '10px', sm: 0 },
                  border: { xs: '1px solid rgba(59,130,246,0.2)', sm: 'none' },
                  background: { xs: 'rgba(59,130,246,0.04)', sm: 'transparent' },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 600,
                    fontSize: { xs: '0.84rem', md: '0.92rem' },
                    color: 'inherit',
                  }}
                >
                  View All Projects
                </Typography>
                <ArrowForward
                  className="view-arrow"
                  sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}
                />
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
              gap: { xs: 2.5, sm: 2.5, md: 3 },
            }}
          >
            {projects.map((proj, i) => (
              <Link
                key={i}
                href={proj.href}
                style={{
                  textDecoration: 'none',
                  display: 'block',
                  perspective: '1200px',
                }}
              >
                <Box
                  className="proj-card"
                  sx={{
                    '--accent-glow': proj.accentGlow,
                    position: 'relative',
                    borderRadius: { xs: '20px', md: '22px' },
                    overflow: 'hidden',
                    minHeight: { xs: 300, sm: 320, md: 360 },
                    height: '100%',
                    cursor: 'pointer',
                    border: proj.dark
                      ? '1px solid rgba(255,255,255,0.08)'
                      : '1.5px solid #e8ecf2',
                    boxShadow: proj.dark
                      ? `0 4px 6px rgba(0,0,0,0.04), 0 12px 28px rgba(0,0,0,0.12), 0 -1px 0 rgba(255,255,255,0.05) inset`
                      : `0 4px 6px rgba(0,0,0,0.02), 0 12px 28px rgba(0,0,0,0.06), 0 -1px 0 rgba(255,255,255,0.9) inset`,
                    animation: `fadeUpCard 0.7s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.1}s both`,
                    '&:hover': {
                      boxShadow: proj.dark
                        ? `0 8px 16px rgba(0,0,0,0.08), 0 28px 56px rgba(0,0,0,0.22), 0 0 0 1px ${proj.accentColor}40`
                        : `0 8px 16px rgba(0,0,0,0.04), 0 28px 56px rgba(0,0,0,0.1), 0 0 0 1.5px ${proj.accentColor}30`,
                    },
                  }}
                >
                  {/* Background image */}
                  <Box
                    className="proj-img"
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `url(${proj.bgImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />

                  {/* Overlay */}
                  <Box
                    className="proj-overlay"
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: proj.overlay,
                      zIndex: 1,
                    }}
                  />

                  {/* Shine */}
                  <Box className="proj-shine" />

                  {/* Hover glow */}
                  <Box
                    className="proj-card-glow"
                    sx={{
                      position: 'absolute',
                      bottom: '-20%',
                      left: '10%',
                      right: '10%',
                      height: '50%',
                      borderRadius: '50%',
                      background: `radial-gradient(ellipse, ${proj.accentColor}12, transparent 70%)`,
                      filter: 'blur(25px)',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                      pointerEvents: 'none',
                      zIndex: 2,
                    }}
                  />

                  {/* Project number watermark */}
                  <Typography
                    className="proj-number"
                    sx={{
                      position: 'absolute',
                      top: { xs: 14, md: 18 },
                      right: { xs: 16, md: 20 },
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 800,
                      fontSize: { xs: '2.8rem', md: '3.4rem' },
                      color: proj.dark
                        ? 'rgba(255,255,255,0.06)'
                        : 'rgba(0,0,0,0.04)',
                      lineHeight: 1,
                      zIndex: 2,
                      pointerEvents: 'none',
                      letterSpacing: '-0.04em',
                    }}
                  >
                    0{i + 1}
                  </Typography>

                  {/* Content */}
                  <Box
                    sx={{
                      position: 'relative',
                      zIndex: 3,
                      p: { xs: 2.5, sm: 2.8, md: 3, lg: 3.2 },
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minHeight: { xs: 300, sm: 320, md: 360 },
                    }}
                  >
                    {/* Top */}
                    <Box>
                      {/* Industry tag */}
                      <Box
                        className="proj-industry-tag"
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.6,
                          px: 1.4,
                          py: 0.45,
                          borderRadius: '999px',
                          background: proj.tagColor,
                          mb: 2,
                          border: `1px solid ${proj.accentColor}20`,
                          backdropFilter: 'blur(6px)',
                        }}
                      >
                        <Box
                          sx={{
                            width: 5,
                            height: 5,
                            borderRadius: '50%',
                            background: proj.dark
                              ? proj.tagText
                              : proj.accentColor,
                            boxShadow: `0 0 6px ${proj.accentColor}60`,
                          }}
                        />
                        <Typography
                          sx={{
                            fontFamily: "'Sora', sans-serif",
                            color: proj.tagText,
                            fontWeight: 600,
                            fontSize: { xs: '0.64rem', md: '0.68rem' },
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                          }}
                        >
                          {proj.industry}
                        </Typography>
                      </Box>

                      {/* Title */}
                      <Typography
                        className="proj-title"
                        sx={{
                          fontFamily: "'Sora', sans-serif",
                          color: proj.dark ? '#fff' : '#0a1628',
                          fontWeight: 800,
                          fontSize: {
                            xs: '1.1rem',
                            sm: '1.15rem',
                            md: '1.22rem',
                            lg: '1.28rem',
                          },
                          lineHeight: 1.25,
                          letterSpacing: '-0.02em',
                          mb: 1.2,
                        }}
                      >
                        {proj.title}
                        <br />
                        {proj.titleLine2}
                      </Typography>

                      {/* Description */}
                      <Typography
                        sx={{
                          fontFamily: "'DM Sans', sans-serif",
                          color: proj.dark
                            ? 'rgba(255,255,255,0.55)'
                            : 'rgba(15,23,42,0.55)',
                          fontSize: { xs: '0.82rem', md: '0.84rem' },
                          lineHeight: 1.65,
                          fontWeight: 400,
                          maxWidth: '95%',
                        }}
                      >
                        {proj.description}
                      </Typography>
                    </Box>

                    {/* Bottom CTA */}
                    <Box
                      className="proj-cta"
                      sx={{
                        opacity: { xs: 0.85, md: 0 },
                        transform: {
                          xs: 'translateY(0px)',
                          md: 'translateY(8px)',
                        },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mt: 2.5,
                      }}
                    >
                      <Button
                        variant="contained"
                        size="small"
                        endIcon={
                          <OpenInNew
                            sx={{ fontSize: '0.82rem !important' }}
                          />
                        }
                        sx={{
                          fontFamily: "'Sora', sans-serif",
                          background: proj.accentColor,
                          color: '#fff',
                          textTransform: 'none',
                          fontWeight: 600,
                          fontSize: { xs: '0.76rem', md: '0.78rem' },
                          letterSpacing: '0.03em',
                          px: { xs: 1.8, md: 2 },
                          py: { xs: 0.7, md: 0.8 },
                          borderRadius: '10px',
                          boxShadow: `0 4px 16px ${proj.accentColor}40`,
                          transition:
                            'box-shadow 0.3s ease, transform 0.3s ease',
                          '&:hover': {
                            background: proj.accentColor,
                            boxShadow: `0 8px 24px ${proj.accentColor}55`,
                            transform: 'translateY(-1px)',
                          },
                        }}
                      >
                        Case Study
                      </Button>

                      {/* Arrow circle */}
                      <Box
                        className="proj-arrow-link"
                        sx={{
                          width: { xs: 34, md: 38 },
                          height: { xs: 34, md: 38 },
                          borderRadius: '50%',
                          border: proj.dark
                            ? '1.5px solid rgba(255,255,255,0.18)'
                            : `1.5px solid ${proj.accentColor}28`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          opacity: { xs: 0.7, md: 0 },
                          color: proj.dark ? '#fff' : proj.accentColor,
                          background: proj.dark
                            ? 'rgba(255,255,255,0.04)'
                            : `${proj.accentColor}06`,
                          '&:hover': {
                            background: proj.dark
                              ? 'rgba(255,255,255,0.1)'
                              : `${proj.accentColor}12`,
                          },
                        }}
                      >
                        <ArrowForward
                          sx={{
                            fontSize: { xs: '0.88rem', md: '0.95rem' },
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>

                  {/* Bottom accent line */}
                  <Box
                    className="proj-accent-line"
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      zIndex: 4,
                      background: `linear-gradient(90deg, ${proj.accentColor}, ${proj.accentColor}50, transparent)`,
                    }}
                  />
                </Box>
              </Link>
            ))}
          </Box>

          {/* ── Mobile bottom CTA ── */}
          {isMobile && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 4,
                animation: 'fadeUpWork 0.7s cubic-bezier(0.16,1,0.3,1) 0.6s both',
              }}
            >
              <Link href="/portfolio" style={{ textDecoration: 'none' }}>
                <Button
                  variant="outlined"
                  endIcon={<ArrowForward sx={{ fontSize: '0.9rem !important' }} />}
                  sx={{
                    fontFamily: "'Sora', sans-serif",
                    color: '#3b82f6',
                    borderColor: 'rgba(59,130,246,0.25)',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '0.84rem',
                    letterSpacing: '0.03em',
                    px: 3,
                    py: 1.1,
                    borderRadius: '12px',
                    background: 'rgba(59,130,246,0.04)',
                    transition: 'all 0.3s ease',
                    '&:active': {
                      transform: 'scale(0.97)',
                      background: 'rgba(59,130,246,0.08)',
                    },
                  }}
                >
                  View All Projects
                </Button>
              </Link>
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
};

export default OurWork;