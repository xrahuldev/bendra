'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  ArrowForwardRounded,
  NorthEast,
} from '@mui/icons-material';
import Link from 'next/link';

/* ─── Styles ──────────────────────────────────────────────── */
const OurWorkStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=Outfit:wght@300;400;500;600&display=swap');

    @keyframes cardIn {
      from { opacity: 0; transform: translateY(28px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @keyframes textIn {
      from { opacity: 0; transform: translateY(14px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @keyframes shimmer {
      0%   { transform: translateX(-120%) skewX(-18deg); }
      100% { transform: translateX(340%)  skewX(-18deg); }
    }

    @keyframes glowPulse {
      0%, 100% { opacity: .45; transform: scale(1); }
      50%       { opacity: .8;  transform: scale(1.05); }
    }

    .ow-pill { animation: textIn .55s cubic-bezier(.16,1,.3,1) both; }
    .ow-h2   { animation: textIn .7s  cubic-bezier(.16,1,.3,1) .08s both; }
    .ow-sub  { animation: textIn .7s  cubic-bezier(.16,1,.3,1) .16s both; }
    .ow-glow { animation: glowPulse 5s ease-in-out infinite; }

    /* ── Card ── */
    .owc {
      position: relative;
      overflow: hidden;
      border-radius: 22px;
      background: #ffffff;
      border: 1.5px solid rgba(14,31,64,.08);
      box-shadow: 0 2px 14px rgba(14,31,64,.055);
      transition: transform .32s cubic-bezier(.34,1.4,.64,1),
                  box-shadow .32s ease,
                  border-color .28s ease;
      -webkit-tap-highlight-color: transparent;
      cursor: pointer;
      display: block;
      text-decoration: none;
      color: inherit;
    }

    .owc::after {
      content: '';
      position: absolute;
      top: 0; left: 0;
      width: 38%; height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,.12), transparent);
      transform: translateX(-120%) skewX(-18deg);
      pointer-events: none;
      z-index: 9;
    }

    .owc-img {
      transition: transform .55s ease, filter .4s ease;
    }

    .owc-bar { transition: height .28s ease; }
    .owc-num { transition: color .25s ease, transform .25s ease; }
    .owc-title { transition: color .25s ease; }
    .owc-tag {
      transition: background .28s ease, transform .28s ease;
    }
    .owc-arrow {
      transition: opacity .25s ease, gap .25s ease, transform .25s ease;
    }

    @media (hover: hover) {
      .owc:hover {
        transform: translateY(-8px) scale(1.015);
        border-color: var(--ow-accent-border) !important;
        box-shadow: 0 20px 44px var(--ow-shadow-strong) !important;
      }
      .owc:hover::after { animation: shimmer .65s ease-out forwards; }
      .owc:hover .owc-img { transform: scale(1.06); filter: brightness(.92); }
      .owc:hover .owc-bar { height: 4px !important; }
      .owc:hover .owc-num { color: var(--ow-accent) !important; transform: scale(1.08); }
      .owc:hover .owc-title { color: var(--ow-accent) !important; }
      .owc:hover .owc-tag { background: var(--ow-accent-soft) !important; transform: translateY(-1px); }
      .owc:hover .owc-arrow { opacity: 1 !important; gap: 10px !important; }
      .owc:hover .owc-glow { opacity: 1; }
      .owc:hover .owc-overlay { opacity: .35; }
    }

    @media (hover: none) {
      .owc:active { transform: scale(.97); }
    }

    @media (prefers-reduced-motion: reduce) {
      .ow-pill,.ow-h2,.ow-sub,.ow-glow,
      .owc,.owc-img,.owc-bar,.owc-num,.owc-title,
      .owc-tag,.owc-arrow,.owc-overlay {
        animation: none !important; transition: none !important;
      }
    }
  `}</style>
);

/* ─── Projects data ─────────────────────────────────────── */
const projects = [
  {
    num: '01',
    title: 'CRM Solution for Real Estate',
    industry: 'Real Estate',
    description:
      'Custom Zoho CRM implementation with automated lead tracking and property management.',
    bgImage:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    href: '/portfolio',
    accent: '#7c3aed',
    accentBorder: 'rgba(124,58,237,.2)',
    accentSoft: 'rgba(124,58,237,.08)',
    shadowStrong: 'rgba(124,58,237,.14)',
    bar: 'linear-gradient(90deg, #7c3aed, #c4b5fd)',
  },
  {
    num: '02',
    title: 'Learning Management System',
    industry: 'EdTech',
    description:
      'Full-stack LMS with real-time analytics, course builder and student engagement tools.',
    bgImage:
      'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    href: '/portfolio',
    accent: '#3b82f6',
    accentBorder: 'rgba(59,130,246,.2)',
    accentSoft: 'rgba(59,130,246,.08)',
    shadowStrong: 'rgba(59,130,246,.14)',
    bar: 'linear-gradient(90deg, #3b82f6, #93c5fd)',
  },
  {
    num: '03',
    title: 'Sales Automation for Retail',
    industry: 'Retail',
    description:
      'End-to-end sales pipeline automation with inventory sync and POS integration.',
    bgImage:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    href: '/portfolio',
    accent: '#06b6d4',
    accentBorder: 'rgba(6,182,212,.2)',
    accentSoft: 'rgba(6,182,212,.08)',
    shadowStrong: 'rgba(6,182,212,.14)',
    bar: 'linear-gradient(90deg, #06b6d4, #67e8f9)',
  },
  {
    num: '04',
    title: 'Healthcare CRM Platform',
    industry: 'Healthcare',
    description:
      'HIPAA-compliant CRM with patient management, scheduling and automated follow-ups.',
    bgImage:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    href: '/portfolio',
    accent: '#10b981',
    accentBorder: 'rgba(16,185,129,.2)',
    accentSoft: 'rgba(16,185,129,.08)',
    shadowStrong: 'rgba(16,185,129,.14)',
    bar: 'linear-gradient(90deg, #10b981, #6ee7b7)',
  },
];

/* ─── Component ─────────────────────────────────────────── */
const OurWork: React.FC = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery('(max-width:380px)');

  return (
    <>
      <OurWorkStyles />

      <Box
        sx={{
          position: 'relative',
          py: { xs: 7, md: 10 },
          background: '#ffffff',
          overflow: 'hidden',
        }}
      >
        {/* Subtle dot grid */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 0,
            backgroundImage:
              'radial-gradient(circle, rgba(14,31,64,.045) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            maskImage:
              'radial-gradient(ellipse 85% 70% at 50% 50%, black 20%, transparent 100%)',
          }}
        />

        {/* Top-right blob */}
        <Box
          className="ow-glow"
          sx={{
            position: 'absolute',
            top: '-8%',
            right: '-6%',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(124,58,237,.06), transparent 68%)',
            filter: 'blur(55px)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Bottom-left blob */}
        <Box
          className="ow-glow"
          sx={{
            position: 'absolute',
            bottom: '-8%',
            left: '-6%',
            width: 340,
            height: 340,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(59,130,246,.06), transparent 68%)',
            filter: 'blur(50px)',
            pointerEvents: 'none',
            zIndex: 0,
            animationDelay: '1.8s',
          }}
        />

        <Container
          maxWidth="xl"
          sx={{
            position: 'relative',
            zIndex: 2,
            px: { xs: 2, sm: 3, md: 5 },
          }}
        >
          {/* ── Header ── */}
          <Box
            sx={{
              textAlign: 'center',
              mb: { xs: 5, md: 7 },
              maxWidth: 700,
              mx: 'auto',
            }}
          >
            {/* Pill */}
            <Box
              className="ow-pill"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 1.8,
                py: 0.75,
                mb: 2.5,
                borderRadius: '999px',
                border: '1.5px solid rgba(59,130,246,.18)',
                background: 'rgba(59,130,246,.05)',
              }}
            >
              <Box
                sx={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: '#3b82f6',
                  boxShadow: '0 0 0 3px rgba(59,130,246,.18)',
                }}
              />
              <Typography
                sx={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  fontSize: '.7rem',
                  color: '#3b82f6',
                  textTransform: 'uppercase',
                  letterSpacing: '.15em',
                }}
              >
                Our Work
              </Typography>
            </Box>

            {/* Heading */}
            <Typography
              className="ow-h2"
              component="h2"
              sx={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 800,
                fontSize: {
                  xs: isSmall ? '1.5rem' : '1.7rem',
                  sm: '2.1rem',
                  md: '2.6rem',
                  lg: '2.9rem',
                },
                lineHeight: 1.15,
                letterSpacing: '-.032em',
                color: '#0b1836',
                mb: 1.8,
              }}
            >
              Solutions we&apos;re{' '}
              <Box
                component="span"
                sx={{
                  background:
                    'linear-gradient(90deg, #3b82f6, #6366f1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                proud of
              </Box>
            </Typography>

            {/* Subtitle */}
            <Typography
              className="ow-sub"
              sx={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 400,
                fontSize: { xs: '.9rem', md: '1rem' },
                color: 'rgba(11,24,54,.55)',
                lineHeight: 1.8,
                maxWidth: 560,
                mx: 'auto',
              }}
            >
              Real projects, real results — explore how we&apos;ve helped
              businesses build powerful digital solutions that drive growth.
            </Typography>
          </Box>

          {/* ── Cards Grid ── */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                xl: 'repeat(4, 1fr)',
              },
              gap: { xs: 2.2, sm: 2.6, md: 2.8 },
            }}
          >
            {projects.map((proj, i) => (
              <Link
                key={proj.num}
                href={proj.href}
                className="owc"
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <Box
                  className="owc"
                  component="div"
                  sx={{
                    '--ow-accent': proj.accent,
                    '--ow-accent-border': proj.accentBorder,
                    '--ow-accent-soft': proj.accentSoft,
                    '--ow-shadow-strong': proj.shadowStrong,
                    height: '100%',
                    animation: `cardIn .65s cubic-bezier(.16,1,.3,1) ${.08 + i * .06}s both`,
                  }}
                >
                  {/* Top colour bar */}
                  <Box
                    className="owc-bar"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: proj.bar,
                      borderRadius: '22px 22px 0 0',
                      zIndex: 3,
                    }}
                  />

                  {/* Image area */}
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '16/10',
                      overflow: 'hidden',
                      background: '#060f25',
                    }}
                  >
                    <Box
                      className="owc-img"
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `url(${proj.bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />

                    {/* Overlay on hover */}
                    <Box
                      className="owc-overlay"
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background: `linear-gradient(180deg, transparent 40%, ${proj.accent}22 100%)`,
                        opacity: 0,
                        transition: 'opacity .35s ease',
                        zIndex: 1,
                        pointerEvents: 'none',
                      }}
                    />

                    {/* Project number */}
                    <Typography
                      className="owc-num"
                      sx={{
                        position: 'absolute',
                        top: 12,
                        right: 14,
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontWeight: 800,
                        fontSize: '1.6rem',
                        color: 'rgba(255,255,255,.12)',
                        lineHeight: 1,
                        zIndex: 2,
                        pointerEvents: 'none',
                        letterSpacing: '-.04em',
                      }}
                    >
                      {proj.num}
                    </Typography>
                  </Box>

                  {/* Hover radial glow */}
                  <Box
                    className="owc-glow"
                    sx={{
                      position: 'absolute',
                      top: '-25%',
                      left: '15%',
                      right: '15%',
                      height: '55%',
                      borderRadius: '50%',
                      background: `radial-gradient(ellipse, ${proj.accent}0a, transparent 70%)`,
                      filter: 'blur(28px)',
                      opacity: 0,
                      transition: 'opacity .35s ease',
                      pointerEvents: 'none',
                      zIndex: 0,
                    }}
                  />

                  {/* Content */}
                  <Box
                    sx={{
                      p: { xs: 2.6, md: 3 },
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {/* Industry tag */}
                    <Box
                      className="owc-tag"
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        alignSelf: 'flex-start',
                        gap: 0.7,
                        px: 1.3,
                        py: 0.45,
                        mb: 1.8,
                        borderRadius: '999px',
                        background: proj.accentSoft,
                        border: `1.5px solid ${proj.accentBorder}`,
                      }}
                    >
                      <Box
                        sx={{
                          width: 5,
                          height: 5,
                          borderRadius: '50%',
                          background: proj.accent,
                          boxShadow: `0 0 0 2.5px ${proj.accentSoft}`,
                        }}
                      />
                      <Typography
                        sx={{
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontWeight: 700,
                          fontSize: '.62rem',
                          color: proj.accent,
                          textTransform: 'uppercase',
                          letterSpacing: '.12em',
                        }}
                      >
                        {proj.industry}
                      </Typography>
                    </Box>

                    {/* Title */}
                    <Typography
                      className="owc-title"
                      sx={{
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontWeight: 700,
                        fontSize: { xs: '1rem', md: '1.07rem' },
                        color: '#0b1836',
                        lineHeight: 1.28,
                        letterSpacing: '-.015em',
                        mb: 1,
                      }}
                    >
                      {proj.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      sx={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 400,
                        fontSize: { xs: '.84rem', md: '.88rem' },
                        color: 'rgba(11,24,54,.54)',
                        lineHeight: 1.75,
                        flex: 1,
                      }}
                    >
                      {proj.description}
                    </Typography>

                    {/* CTA */}
                    <Box
                      className="owc-arrow"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        mt: 2.4,
                        opacity: 0.3,
                        color: proj.accent,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: 600,
                          fontSize: '.8rem',
                          letterSpacing: '.03em',
                          color: 'inherit',
                        }}
                      >
                        View Project
                      </Typography>
                      <NorthEast sx={{ fontSize: 14, color: 'inherit' }} />
                    </Box>
                  </Box>
                </Box>
              </Link>
            ))}
          </Box>

          {/* ── View All ── */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: { xs: 5, md: 6 },
              animation:
                'textIn .7s cubic-bezier(.16,1,.3,1) .5s both',
            }}
          >
            <Link
              href="/portfolio"
              style={{ textDecoration: 'none' }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.2,
                  px: { xs: 2.8, md: 3.2 },
                  py: { xs: 1.2, md: 1.4 },
                  borderRadius: '14px',
                  border: '1.5px solid rgba(59,130,246,.2)',
                  background: 'rgba(59,130,246,.04)',
                  color: '#3b82f6',
                  cursor: 'pointer',
                  transition:
                    'all .3s cubic-bezier(.34,1.4,.64,1)',
                  '&:hover': {
                    background: 'rgba(59,130,246,.08)',
                    borderColor: 'rgba(59,130,246,.35)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 24px rgba(59,130,246,.12)',
                  },
                  '&:active': {
                    transform: 'scale(.97)',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 700,
                    fontSize: { xs: '.84rem', md: '.9rem' },
                    color: 'inherit',
                    letterSpacing: '.01em',
                  }}
                >
                  View All Projects
                </Typography>
                <ArrowForwardRounded
                  sx={{ fontSize: { xs: 18, md: 20 }, color: 'inherit' }}
                />
              </Box>
            </Link>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default OurWork;