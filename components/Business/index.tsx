'use client';

import React from 'react';
import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import {
  Inventory2Outlined,
  CodeOutlined,
  HubOutlined,
  CloudOutlined,
  PhoneIphoneOutlined,
  ArrowForward,
} from '@mui/icons-material';
import Link from 'next/link';

const BusinessStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

    @keyframes fadeUpCard {
      from { opacity: 0; transform: translateY(32px) rotateX(8deg); }
      to   { opacity: 1; transform: translateY(0) rotateX(0deg); }
    }

    @keyframes fadeUpText {
      from { opacity: 0; transform: translateY(14px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @keyframes floatCard {
      0%, 100% { transform: translateY(0px); }
      50%      { transform: translateY(-6px); }
    }

    @keyframes iconPulse {
      0%, 100% { box-shadow: var(--icon-glow); }
      50%      { box-shadow: var(--icon-glow-strong); }
    }

    @keyframes shineSlide {
      0%   { transform: translateX(-100%) skewX(-15deg); }
      100% { transform: translateX(250%) skewX(-15deg); }
    }

    @keyframes barGrow {
      from { width: 0%; }
      to   { width: 100%; }
    }

    @keyframes numCount {
      from { opacity: 0; transform: translateY(8px) scale(0.9); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }

    .biz-tag   { animation: fadeUpText 0.7s cubic-bezier(0.16,1,0.3,1) 0.05s both; }
    .biz-title { animation: fadeUpText 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s both; }
    .biz-desc  { animation: fadeUpText 0.8s cubic-bezier(0.16,1,0.3,1) 0.25s both; }

    .svc-card {
      -webkit-tap-highlight-color: transparent;
      perspective: 1000px;
      transform-style: preserve-3d;
      transition:
        transform 0.45s cubic-bezier(0.34,1.56,0.64,1),
        box-shadow 0.4s ease,
        border-color 0.35s ease !important;
    }

    .svc-card-inner {
      position: relative;
      height: 100%;
      transform-style: preserve-3d;
    }

    .svc-icon-box {
      transition:
        transform 0.4s cubic-bezier(0.34,1.56,0.64,1),
        box-shadow 0.4s ease;
    }

    .svc-top-bar {
      transition: height 0.35s ease, box-shadow 0.35s ease !important;
    }

    .svc-num {
      animation: numCount 0.5s cubic-bezier(0.16,1,0.3,1) both;
      transition: color 0.3s ease, transform 0.3s ease !important;
    }

    .svc-title {
      transition: color 0.3s ease !important;
    }

    .svc-arrow {
      transition:
        transform 0.3s cubic-bezier(0.34,1.56,0.64,1),
        opacity 0.3s ease,
        gap 0.3s ease !important;
    }

    .svc-shine {
      position: absolute;
      top: 0;
      left: 0;
      width: 40%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255,255,255,0.08),
        transparent
      );
      transform: translateX(-100%) skewX(-15deg);
      pointer-events: none;
      z-index: 10;
    }

    /* ── Hover effects (desktop only) ── */
    @media (hover: hover) {
      .svc-card:hover {
        transform: translateY(-12px) rotateX(2deg) rotateY(-1deg) scale(1.02) !important;
      }

      .svc-card:hover .svc-icon-box {
        transform: scale(1.12) rotate(-6deg);
        box-shadow: var(--icon-glow-strong);
      }

      .svc-card:hover .svc-top-bar {
        height: 5px !important;
        box-shadow: var(--bar-glow);
      }

      .svc-card:hover .svc-num {
        color: var(--card-accent) !important;
        transform: scale(1.1);
      }

      .svc-card:hover .svc-title {
        color: var(--card-accent) !important;
      }

      .svc-card:hover .svc-arrow {
        opacity: 1 !important;
        gap: 10px !important;
        transform: translateX(4px);
      }

      .svc-card:hover .svc-shine {
        animation: shineSlide 0.7s ease-out forwards;
      }

      .svc-card:hover .svc-card-bg-glow {
        opacity: 1;
      }

      .svc-card:hover .svc-bottom-glow {
        opacity: 1;
      }
    }

    /* ── Mobile touch ── */
    @media (hover: none) {
      .svc-card:active {
        transform: scale(0.97) !important;
        box-shadow: 0 4px 16px rgba(0,0,0,0.08) !important;
      }

      .svc-card:active .svc-icon-box {
        transform: scale(1.05) rotate(-3deg);
      }

      .svc-card:active .svc-arrow {
        opacity: 1 !important;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .biz-tag, .biz-title, .biz-desc,
      .svc-card, .svc-icon-box, .svc-arrow,
      .svc-top-bar, .svc-num, .svc-title,
      .svc-shine {
        animation: none !important;
        transition: none !important;
      }
    }
  `}</style>
);

const services = [
  {
    icon: <Inventory2Outlined />,
    iconBg: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    topBar: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
    accent: '#3b82f6',
    shadow: 'rgba(59,130,246,0.18)',
    shadowStrong: 'rgba(59,130,246,0.35)',
    num: '01',
    title: 'CRM Development',
    desc: 'Zoho, Salesforce, and custom CRM solutions to streamline your business processes and customer relationships.',
    href: '/expertise/website-development',
  },
  {
    icon: <CodeOutlined />,
    iconBg: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    topBar: 'linear-gradient(90deg, #10b981, #34d399)',
    accent: '#10b981',
    shadow: 'rgba(16,185,129,0.18)',
    shadowStrong: 'rgba(16,185,129,0.35)',
    num: '02',
    title: 'Web Development',
    desc: 'Modern, responsive, high-performance websites built for growth and exceptional user experience.',
    href: '/expertise/website-development',
  },
  {
    icon: <HubOutlined />,
    iconBg: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)',
    topBar: 'linear-gradient(90deg, #a855f7, #c084fc)',
    accent: '#a855f7',
    shadow: 'rgba(168,85,247,0.18)',
    shadowStrong: 'rgba(168,85,247,0.35)',
    num: '03',
    title: 'Business Automation',
    desc: 'Automate workflows and processes to save time, reduce costs, and improve operational efficiency.',
    href: '/expertise/seo',
  },
  {
    icon: <CloudOutlined />,
    iconBg: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    topBar: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
    accent: '#f59e0b',
    shadow: 'rgba(245,158,11,0.18)',
    shadowStrong: 'rgba(245,158,11,0.35)',
    num: '04',
    title: 'SaaS Solutions',
    desc: 'Scalable SaaS applications designed to solve real business problems and drive measurable impact.',
    href: '/expertise/ui-ux-design',
  },
  {
    icon: <PhoneIphoneOutlined />,
    iconBg: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
    topBar: 'linear-gradient(90deg, #06b6d4, #22d3ee)',
    accent: '#06b6d4',
    shadow: 'rgba(6,182,212,0.18)',
    shadowStrong: 'rgba(6,182,212,0.35)',
    num: '05',
    title: 'Mobile Development',
    desc: 'Custom mobile apps for iOS and Android that engage users and convert them into loyal customers.',
    href: '/expertise/ui-ux-design',
  },
];

const Business: React.FC = () => {
  const isSmall = useMediaQuery('(max-width:380px)');

  return (
    <>
      <BusinessStyles />

      <Box
        sx={{
          background: '#fff',
          py: { xs: 6, sm: 8, md: 10, lg: 12 },
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
              'radial-gradient(rgba(59,130,246,0.04) 1.2px, transparent 1.2px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Blobs */}
        <Box
          sx={{
            position: 'absolute',
            top: '-10%',
            right: '-8%',
            width: { xs: '50%', md: '35%' },
            height: '50%',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '-8%',
            left: '-6%',
            width: { xs: '45%', md: '30%' },
            height: '40%',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(168,85,247,0.04) 0%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }}
        />

        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 1,
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          {/* ── Header ── */}
          <Box
            sx={{
              textAlign: 'center',
              mb: { xs: 5, sm: 6, md: 7 },
              maxWidth: 680,
              mx: 'auto',
            }}
          >
            <Box
              className="biz-tag"
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
                  fontSize: '0.68rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                }}
              >
                What We Do
              </Typography>
            </Box>

            <Typography
              className="biz-title"
              component="h2"
              sx={{
                fontFamily: "'Sora', sans-serif",
                color: '#0f172a',
                fontWeight: 800,
                fontSize: {
                  xs: isSmall ? '1.45rem' : '1.6rem',
                  sm: '2rem',
                  md: '2.4rem',
                  lg: '2.7rem',
                },
                lineHeight: 1.18,
                letterSpacing: '-0.025em',
                mb: 1.5,
              }}
            >
              Solutions that empower{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(90deg, #3b82f6, #6366f1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                your business
              </Box>
            </Typography>

            <Typography
              className="biz-desc"
              sx={{
                fontFamily: "'DM Sans', sans-serif",
                color: '#64748b',
                fontSize: { xs: '0.88rem', md: '0.98rem' },
                lineHeight: 1.75,
                maxWidth: 520,
                mx: 'auto',
              }}
            >
              From CRM development to custom web solutions, we build systems
              that are efficient, scalable, and tailored to your goals.
            </Typography>
          </Box>

          {/* ── Cards ── */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
              gap: { xs: 2.5, sm: 3, md: 3.5 },
            }}
          >
            {services.map((svc, i) => (
              <Link
                key={svc.num}
                href={svc.href}
                style={{
                  textDecoration: 'none',
                  display: 'block',
                  perspective: '1200px',
                }}
              >
                <Box
                  className="svc-card"
                  sx={{
                    '--card-accent': svc.accent,
                    '--icon-glow': `0 6px 18px ${svc.shadow}`,
                    '--icon-glow-strong': `0 10px 28px ${svc.shadowStrong}`,
                    '--bar-glow': `0 2px 16px ${svc.shadowStrong}`,
                    background: '#ffffff',
                    borderRadius: { xs: '20px', md: '22px' },
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '1.5px solid #e8ecf2',
                    boxShadow: `
                      0 4px 6px rgba(0,0,0,0.02),
                      0 12px 28px rgba(0,0,0,0.06),
                      0 -1px 0 rgba(255,255,255,0.9) inset
                    `,
                    animation: `fadeUpCard 0.7s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.09}s both`,
                    '&:hover': {
                      borderColor: `${svc.accent}30`,
                      boxShadow: `
                        0 8px 16px rgba(0,0,0,0.03),
                        0 24px 48px ${svc.shadow},
                        0 0 0 1px ${svc.accent}15,
                        0 -1px 0 rgba(255,255,255,0.9) inset
                      `,
                    },
                  }}
                >
                  <Box
                    className="svc-card-inner"
                    sx={{
                      p: { xs: 2.5, sm: 2.8, md: 3, lg: 3.2 },
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                    }}
                  >
                    {/* Shine overlay */}
                    <Box className="svc-shine" />

                    {/* Background glow on hover */}
                    <Box
                      className="svc-card-bg-glow"
                      sx={{
                        position: 'absolute',
                        top: '-30%',
                        left: '20%',
                        right: '20%',
                        height: '60%',
                        borderRadius: '50%',
                        background: `radial-gradient(ellipse, ${svc.accent}08, transparent 70%)`,
                        filter: 'blur(30px)',
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                        pointerEvents: 'none',
                        zIndex: 0,
                      }}
                    />

                    {/* Bottom edge glow */}
                    <Box
                      className="svc-bottom-glow"
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: '10%',
                        right: '10%',
                        height: '1px',
                        background: `linear-gradient(90deg, transparent, ${svc.accent}30, transparent)`,
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                        pointerEvents: 'none',
                        zIndex: 10,
                      }}
                    />

                    {/* Top bar */}
                    <Box
                      className="svc-top-bar"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: svc.topBar,
                        borderRadius: '22px 22px 0 0',
                        zIndex: 2,
                      }}
                    />

                    {/* Row: num + icon */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        mb: 2.5,
                        mt: 0.5,
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      <Typography
                        className="svc-num"
                        sx={{
                          fontFamily: "'Sora', sans-serif",
                          color: '#c8cfd9',
                          fontWeight: 800,
                          fontSize: { xs: '0.72rem', md: '0.76rem' },
                          letterSpacing: '0.12em',
                          pt: 0.5,
                          animationDelay: `${0.3 + i * 0.09}s`,
                        }}
                      >
                        {svc.num}
                      </Typography>

                      <Box
                        className="svc-icon-box"
                        sx={{
                          width: { xs: 48, md: 52 },
                          height: { xs: 48, md: 52 },
                          borderRadius: '14px',
                          background: svc.iconBg,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: `0 6px 18px ${svc.shadow}`,
                          '& .MuiSvgIcon-root': {
                            fontSize: { xs: 22, md: 24 },
                            color: '#fff',
                          },
                        }}
                      >
                        {svc.icon}
                      </Box>
                    </Box>

                    {/* Title */}
                    <Typography
                      className="svc-title"
                      sx={{
                        fontFamily: "'Sora', sans-serif",
                        color: '#0f172a',
                        fontWeight: 700,
                        fontSize: { xs: '1rem', md: '1.06rem' },
                        lineHeight: 1.3,
                        letterSpacing: '-0.01em',
                        mb: 1,
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      {svc.title}
                    </Typography>

                    {/* Desc */}
                    <Typography
                      sx={{
                        fontFamily: "'DM Sans', sans-serif",
                        color: '#64748b',
                        fontSize: { xs: '0.85rem', md: '0.88rem' },
                        lineHeight: 1.72,
                        flex: 1,
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      {svc.desc}
                    </Typography>

                    {/* Arrow link */}
                    <Box
                      className="svc-arrow"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        mt: 2.5,
                        opacity: 0.38,
                        color: svc.accent,
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Sora', sans-serif",
                          fontWeight: 600,
                          fontSize: '0.8rem',
                          letterSpacing: '0.03em',
                          color: 'inherit',
                        }}
                      >
                        Explore
                      </Typography>
                      <ArrowForward sx={{ fontSize: 15, color: 'inherit' }} />
                    </Box>
                  </Box>
                </Box>
              </Link>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Business;