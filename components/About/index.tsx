'use client';

import React from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  GroupOutlined,
  VerifiedOutlined,
  AccessTimeOutlined,
  StarOutlineOutlined,
  ArrowForward,
} from '@mui/icons-material';
import Link from 'next/link';

const AboutStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

    @keyframes fadeUpAbout {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeUpSoft {
      from { opacity: 0; transform: translateY(14px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @keyframes networkPulse {
      0%,100% { opacity: 0.06; transform: scale(1) rotate(0deg); }
      50%     { opacity: 0.12; transform: scale(1.02) rotate(0.5deg); }
    }

    @keyframes nodeGlow {
      0%,100% { opacity: 0.3; r: 2; }
      50%     { opacity: 0.7; r: 3; }
    }

    @keyframes lineDraw {
      from { stroke-dashoffset: 200; }
      to   { stroke-dashoffset: 0; }
    }

    @keyframes floatNode {
      0%,100% { transform: translateY(0px); }
      50%     { transform: translateY(-6px); }
    }

    @keyframes dotDrift {
      0%,100% { transform: translateY(0px); opacity: 0.22; }
      50%     { transform: translateY(-8px); opacity: 0.38; }
    }

    @keyframes glowPulse {
      0%,100% { opacity: 0.14; transform: scale(1); }
      50%     { opacity: 0.28; transform: scale(1.06); }
    }

    @keyframes statCardUp {
      from { opacity: 0; transform: translateY(20px) scale(0.97); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }

    @keyframes countReveal {
      from { opacity: 0; transform: translateY(10px) scale(0.9); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }

    @keyframes shineSlide {
      0%   { transform: translateX(-100%) skewX(-15deg); }
      100% { transform: translateX(350%) skewX(-15deg); }
    }

    .about-left  { animation: fadeUpAbout 0.8s cubic-bezier(0.16,1,0.3,1) 0.08s both; }
    .about-right { animation: fadeUpAbout 0.8s cubic-bezier(0.16,1,0.3,1) 0.18s both; }

    .about-mini-chip {
      animation: fadeUpSoft 0.6s cubic-bezier(0.16,1,0.3,1) both;
    }

    .network-bg {
      animation: networkPulse 8s ease-in-out infinite;
    }

    .network-node {
      animation: nodeGlow 3s ease-in-out infinite;
    }

    .network-line {
      stroke-dasharray: 200;
      animation: lineDraw 2s ease-out both;
    }

    .float-node {
      animation: floatNode 4s ease-in-out infinite;
    }

    .stat-card {
      animation: statCardUp 0.65s cubic-bezier(0.16,1,0.3,1) both;
      transition:
        transform 0.4s cubic-bezier(0.34,1.56,0.64,1),
        box-shadow 0.35s ease,
        border-color 0.35s ease !important;
      -webkit-tap-highlight-color: transparent;
      position: relative;
      overflow: hidden;
    }

    .stat-card .stat-shine {
      position: absolute;
      top: 0; left: 0;
      width: 40%; height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
      transform: translateX(-100%) skewX(-15deg);
      pointer-events: none;
      z-index: 5;
    }

    .stat-icon-wrap {
      transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease;
    }

    .stat-number {
      animation: countReveal 0.6s cubic-bezier(0.16,1,0.3,1) both;
      transition: transform 0.3s ease !important;
    }

    .stat-arrow {
      transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease, gap 0.3s ease !important;
    }

    .stat-accent-bar {
      transition: width 0.4s ease, opacity 0.35s ease !important;
    }

    .about-btn {
      transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1) !important;
      -webkit-tap-highlight-color: transparent;
    }

    .about-btn:hover {
      transform: translateY(-2px) !important;
      border-color: rgba(255,255,255,0.7) !important;
      background: rgba(255,255,255,0.08) !important;
      box-shadow: 0 8px 24px rgba(59,130,246,0.15) !important;
    }

    .about-btn:hover .btn-arrow {
      transform: translateX(4px);
    }

    .btn-arrow {
      transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
    }

    .dot-map { animation: dotDrift 6s ease-in-out infinite; }
    .glow-orb { animation: glowPulse 4.5s ease-in-out infinite; }

    @media (hover: hover) {
      .stat-card:hover {
        transform: translateY(-8px) scale(1.02) !important;
        box-shadow:
          0 20px 40px var(--stat-shadow-color),
          0 0 0 1px var(--stat-border-hover),
          0 -1px 0 rgba(255,255,255,0.8) inset !important;
        border-color: var(--stat-border-hover) !important;
      }

      .stat-card:hover .stat-icon-wrap {
        transform: scale(1.1) rotate(-5deg);
        box-shadow: 0 8px 22px var(--stat-shadow-color);
      }

      .stat-card:hover .stat-number {
        transform: scale(1.05);
      }

      .stat-card:hover .stat-arrow {
        transform: translateX(4px);
        opacity: 1 !important;
        gap: 8px !important;
      }

      .stat-card:hover .stat-accent-bar {
        width: 52px !important;
        opacity: 1 !important;
      }

      .stat-card:hover .stat-shine {
        animation: shineSlide 0.65s ease-out forwards;
      }

      .stat-card:hover .stat-bg-glow {
        opacity: 1;
      }
    }

    @media (hover: none) {
      .stat-card:active {
        transform: scale(0.97) !important;
      }

      .about-btn:active {
        transform: scale(0.97) !important;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .about-left, .about-right, .about-mini-chip,
      .stat-card, .stat-icon-wrap, .stat-arrow,
      .stat-accent-bar, .stat-number, .stat-shine,
      .dot-map, .glow-orb, .about-btn, .btn-arrow,
      .network-bg, .network-node, .network-line, .float-node {
        animation: none !important;
        transition: none !important;
      }
    }
  `}</style>
);

/* ── Network SVG Background ── */
const NetworkBackground = () => (
  <svg
    className="network-bg"
    viewBox="0 0 800 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      opacity: 0.09,
      pointerEvents: 'none',
    }}
    preserveAspectRatio="xMidYMid slice"
  >
    {/* Connection lines */}
    {[
      'M120,80 L300,180', 'M300,180 L500,120', 'M500,120 L680,200',
      'M680,200 L600,380', 'M600,380 L400,340', 'M400,340 L300,180',
      'M300,180 L200,350', 'M200,350 L400,340', 'M120,80 L80,280',
      'M80,280 L200,350', 'M500,120 L550,300', 'M550,300 L600,380',
      'M400,340 L380,500', 'M200,350 L250,520', 'M250,520 L380,500',
      'M680,200 L750,100', 'M600,380 L720,450', 'M380,500 L550,480',
      'M550,480 L720,450', 'M80,280 L60,450', 'M60,450 L250,520',
      'M550,300 L400,340', 'M120,80 L200,30', 'M500,120 L480,30',
    ].map((d, i) => (
      <path
        key={`line-${i}`}
        d={d}
        className="network-line"
        stroke="rgba(99,179,237,0.5)"
        strokeWidth="1"
        fill="none"
        style={{ animationDelay: `${i * 0.08}s` }}
      />
    ))}

    {/* Main nodes */}
    {[
      { cx: 120, cy: 80, r: 5 }, { cx: 300, cy: 180, r: 7 },
      { cx: 500, cy: 120, r: 6 }, { cx: 680, cy: 200, r: 5 },
      { cx: 600, cy: 380, r: 6 }, { cx: 400, cy: 340, r: 7 },
      { cx: 200, cy: 350, r: 5 }, { cx: 80, cy: 280, r: 4 },
      { cx: 550, cy: 300, r: 5 }, { cx: 380, cy: 500, r: 5 },
      { cx: 250, cy: 520, r: 4 }, { cx: 720, cy: 450, r: 4 },
      { cx: 550, cy: 480, r: 4 }, { cx: 750, cy: 100, r: 3 },
      { cx: 60, cy: 450, r: 3 }, { cx: 200, cy: 30, r: 3 },
      { cx: 480, cy: 30, r: 3 },
    ].map((node, i) => (
      <g key={`node-${i}`}>
        {/* Outer glow */}
        <circle
          cx={node.cx}
          cy={node.cy}
          r={node.r * 3}
          fill={`rgba(99,179,237,${0.05 + (i % 3) * 0.02})`}
          className="network-node"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
        {/* Core */}
        <circle
          cx={node.cx}
          cy={node.cy}
          r={node.r}
          fill="rgba(99,179,237,0.65)"
          className="network-node"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
        {/* Center bright dot */}
        <circle
          cx={node.cx}
          cy={node.cy}
          r={node.r * 0.4}
          fill="rgba(200,230,255,0.9)"
        />
      </g>
    ))}

    {/* Small scattered dots */}
    {[
      { cx: 160, cy: 140 }, { cx: 420, cy: 80 }, { cx: 640, cy: 300 },
      { cx: 350, cy: 440 }, { cx: 150, cy: 460 }, { cx: 700, cy: 350 },
      { cx: 450, cy: 220 }, { cx: 280, cy: 290 }, { cx: 530, cy: 420 },
      { cx: 100, cy: 370 }, { cx: 620, cy: 140 }, { cx: 340, cy: 50 },
    ].map((dot, i) => (
      <circle
        key={`dot-${i}`}
        cx={dot.cx}
        cy={dot.cy}
        r="1.5"
        fill="rgba(99,179,237,0.35)"
        className="network-node"
        style={{ animationDelay: `${i * 0.25}s` }}
      />
    ))}
  </svg>
);

const stats = [
  {
    icon: <GroupOutlined />,
    iconBg: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
    iconColor: '#3b82f6',
    accentColor: '#3b82f6',
    shadowColor: 'rgba(59,130,246,0.12)',
    borderHover: 'rgba(59,130,246,0.25)',
    number: '120+',
    title: 'Happy Clients',
    description: 'Businesses around the world trust our solutions.',
  },
  {
    icon: <VerifiedOutlined />,
    iconBg: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
    iconColor: '#10b981',
    accentColor: '#10b981',
    shadowColor: 'rgba(16,185,129,0.12)',
    borderHover: 'rgba(16,185,129,0.25)',
    number: '250+',
    title: 'Projects Delivered',
    description: 'Successful project delivery across multiple industries.',
  },
  {
    icon: <AccessTimeOutlined />,
    iconBg: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)',
    iconColor: '#a855f7',
    accentColor: '#a855f7',
    shadowColor: 'rgba(168,85,247,0.12)',
    borderHover: 'rgba(168,85,247,0.25)',
    number: '8+',
    title: 'Years Experience',
    description: 'Consistent technology execution with long-term impact.',
  },
  {
    icon: <StarOutlineOutlined />,
    iconBg: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
    iconColor: '#f59e0b',
    accentColor: '#f59e0b',
    shadowColor: 'rgba(245,158,11,0.12)',
    borderHover: 'rgba(245,158,11,0.25)',
    number: '98%',
    title: 'Client Satisfaction',
    description: 'A strong reputation built on trust and results.',
  },
];

const highlights = [
  'Scalable systems',
  'Business-first approach',
  'Long-term support',
];

const About: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmallMobile = useMediaQuery('(max-width:360px)');

  return (
    <>
      <AboutStyles />

      <Box
        sx={{
          background: '#ffffff',
          py: { xs: 7, sm: 8, md: 10, lg: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background texture */}
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
            top: '-10%',
            left: '-6%',
            width: { xs: '55%', md: '40%' },
            height: { xs: '34%', md: '60%' },
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '-5%',
            right: '-4%',
            width: { xs: '46%', md: '32%' },
            height: { xs: '26%', md: '45%' },
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%)',
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
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1.02fr 1fr' },
              gap: { xs: 2.5, sm: 3, md: 3.5, lg: 4 },
              alignItems: 'stretch',
            }}
          >
            {/* ── LEFT PANEL ── */}
            <Box
              className="about-left"
              sx={{
                position: 'relative',
                borderRadius: { xs: '22px', md: '24px', lg: '28px' },
                overflow: 'hidden',
                background:
                  'linear-gradient(145deg, #0a1628 0%, #0d1f42 60%, #0a1835 100%)',
                p: { xs: 3, sm: 4, md: 4.5, lg: 5.5 },
                minHeight: { xs: 380, sm: 440, md: 100 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                border: '1px solid rgba(255,255,255,0.06)',
                boxShadow:
                  '0 24px 60px rgba(10,22,40,0.22), 0 -1px 0 rgba(99,179,237,0.08) inset',
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              {/* ── NETWORK BACKGROUND ── */}
              <NetworkBackground />

              {/* overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 1,
                  background:
                    'linear-gradient(120deg, rgba(10,22,40,0.94) 0%, rgba(10,22,40,0.82) 50%, rgba(10,22,40,0.68) 100%)',
                }}
              />

              {/* dot map */}
              <Box
                className="dot-map"
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: { xs: '70%', md: '55%' },
                  height: '100%',
                  zIndex: 1,
                  backgroundImage:
                    'radial-gradient(circle, rgba(99,179,237,0.55) 1px, transparent 1px)',
                  backgroundSize: '14px 14px',
                  maskImage:
                    'radial-gradient(ellipse at right center, black 20%, transparent 68%)',
                  WebkitMaskImage:
                    'radial-gradient(ellipse at right center, black 20%, transparent 68%)',
                  opacity: 0.2,
                }}
              />

              {/* glow */}
              <Box
                className="glow-orb"
                sx={{
                  position: 'absolute',
                  bottom: '-20%',
                  right: '-10%',
                  width: { xs: '70%', md: '55%' },
                  height: { xs: '55%', md: '70%' },
                  borderRadius: '50%',
                  background:
                    'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)',
                  filter: 'blur(40px)',
                  zIndex: 1,
                }}
              />

              {/* second glow top-left */}
              <Box
                className="glow-orb"
                sx={{
                  position: 'absolute',
                  top: '-15%',
                  left: '-8%',
                  width: { xs: '50%', md: '40%' },
                  height: '45%',
                  borderRadius: '50%',
                  background:
                    'radial-gradient(circle, rgba(99,179,237,0.1) 0%, transparent 70%)',
                  filter: 'blur(35px)',
                  zIndex: 1,
                  animationDelay: '2s',
                }}
              />

              {/* Content */}
              <Box sx={{ position: 'relative', zIndex: 2 }}>
                {/* pill */}
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    mb: { xs: 2.2, md: 3 },
                    px: 2,
                    py: 0.65,
                    borderRadius: '999px',
                    border: '1px solid rgba(99,179,237,0.25)',
                    background: 'rgba(59,130,246,0.08)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: '#63b3ed',
                      boxShadow: '0 0 10px rgba(99,179,237,0.9)',
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "'Sora', sans-serif",
                      color: '#90cdf4',
                      fontWeight: 600,
                      fontSize: { xs: '0.68rem', md: '0.72rem' },
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                    }}
                  >
                    About Bendra
                  </Typography>
                </Box>

                {/* heading */}
                <Typography
                  component="h2"
                  sx={{
                    fontFamily: "'Sora', sans-serif",
                    color: '#fff',
                    fontWeight: 800,
                    fontSize: {
                      xs: isSmallMobile ? '1.5rem' : '1.7rem',
                      sm: '1.95rem',
                      md: '2.1rem',
                      lg: '2.45rem',
                    },
                    lineHeight: 1.14,
                    letterSpacing: '-0.025em',
                    mb: 2.2,
                  }}
                >
                  Your growth is
                  <br />
                  our mission
                  <Box component="span" sx={{ color: '#63b3ed' }}>
                    .
                  </Box>
                </Typography>

                {/* divider */}
                <Box
                  sx={{
                    width: 48,
                    height: 2,
                    borderRadius: 99,
                    background: 'linear-gradient(90deg, #3b82f6, #90cdf4)',
                    mb: 2.4,
                    mx: { xs: 'auto', md: 0 },
                  }}
                />

                {/* description */}
                <Typography
                  sx={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: 'rgba(255,255,255,0.68)',
                    fontSize: {
                      xs: '0.88rem',
                      sm: '0.92rem',
                      md: '0.96rem',
                    },
                    lineHeight: 1.8,
                    fontWeight: 400,
                    mb: 3,
                    maxWidth: { xs: '100%', md: 560 },
                    mx: { xs: 'auto', md: 0 },
                  }}
                >
                  Bendra is a team of passionate technologists, problem solvers,
                  and business thinkers. We partner with organizations of all
                  sizes to build digital systems that create value, drive
                  efficiency, and accelerate sustainable growth.
                </Typography>

                {/* highlight chips */}
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1,
                    mb: 3.2,
                    justifyContent: { xs: 'center', md: 'flex-start' },
                  }}
                >
                  {highlights.map((item, i) => (
                    <Box
                      key={item}
                      className="about-mini-chip"
                      sx={{
                        animationDelay: `${0.28 + i * 0.08}s`,
                        px: 1.4,
                        py: 0.7,
                        borderRadius: '999px',
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'DM Sans', sans-serif",
                          color: 'rgba(255,255,255,0.8)',
                          fontSize: '0.78rem',
                          lineHeight: 1,
                          fontWeight: 500,
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* CTA */}
                <Link href="/about" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="outlined"
                    fullWidth={isMobile}
                    endIcon={
                      <ArrowForward
                        className="btn-arrow"
                        sx={{ fontSize: '1rem !important' }}
                      />
                    }
                    className="about-btn"
                    sx={{
                      fontFamily: "'Sora', sans-serif",
                      color: '#fff',
                      borderColor: 'rgba(255,255,255,0.22)',
                      textTransform: 'none',
                      fontWeight: 600,
                      fontSize: { xs: '0.84rem', md: '0.875rem' },
                      letterSpacing: '0.03em',
                      px: { xs: 2.6, md: 3 },
                      py: { xs: 1.15, md: 1.2 },
                      borderRadius: '12px',
                      backdropFilter: 'blur(8px)',
                      background: 'rgba(255,255,255,0.03)',
                      maxWidth: { xs: '100%', sm: 'fit-content' },
                    }}
                  >
                    Learn More About Us
                  </Button>
                </Link>
              </Box>
            </Box>

            {/* ── RIGHT PANEL ── */}
            <Box
              className="about-right"
              sx={{
                background:
                  'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(248,250,252,0.96) 100%)',
                borderRadius: { xs: '22px', md: '24px', lg: '28px' },
                p: { xs: 2.5, sm: 3, md: 3.5, lg: 4.5 },
                boxShadow:
                  '0 8px 30px rgba(15,23,42,0.05), 0 -1px 0 rgba(255,255,255,0.9) inset',
                border: '1.5px solid #eef2f7',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* subtle texture */}
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

              {/* right heading */}
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  mb: { xs: 2.5, md: 3.5 },
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Sora', sans-serif",
                    color: '#0f172a',
                    fontWeight: 800,
                    fontSize: {
                      xs: '1.2rem',
                      sm: '1.35rem',
                      md: '1.5rem',
                      lg: '1.65rem',
                    },
                    letterSpacing: '-0.02em',
                    mb: 1,
                  }}
                >
                  Trusted outcomes. Measurable impact.
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: '#64748b',
                    fontSize: { xs: '0.86rem', md: '0.95rem' },
                    lineHeight: 1.75,
                    maxWidth: 560,
                    mx: { xs: 'auto', md: 0 },
                  }}
                >
                  We focus on long-term relationships, quality delivery and
                  practical solutions that help businesses move faster with
                  confidence.
                </Typography>
              </Box>

              {/* stat cards */}
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                  gap: { xs: 1.5, sm: 1.8, md: 2.2 },
                }}
              >
                {stats.map((stat, i) => (
                  <Box
                    key={i}
                    className="stat-card"
                    sx={{
                      '--stat-shadow-color': stat.shadowColor,
                      '--stat-border-hover': stat.borderHover,
                      p: { xs: 2.2, sm: 2.3, md: 2.6, lg: 2.8 },
                      borderRadius: '20px',
                      background: '#ffffff',
                      border: '1px solid #edf2f7',
                      boxShadow:
                        '0 4px 18px rgba(15,23,42,0.04), 0 -1px 0 rgba(255,255,255,0.9) inset',
                      minHeight: { xs: 'auto', sm: 215, md: 225 },
                      display: 'flex',
                      flexDirection: 'column',
                      animationDelay: `${0.22 + i * 0.08}s`,
                    }}
                  >
                    {/* Shine effect */}
                    <Box className="stat-shine" />

                    {/* Hover background glow */}
                    <Box
                      className="stat-bg-glow"
                      sx={{
                        position: 'absolute',
                        top: '-20%',
                        left: '15%',
                        right: '15%',
                        height: '50%',
                        borderRadius: '50%',
                        background: `radial-gradient(ellipse, ${stat.accentColor}08, transparent 70%)`,
                        filter: 'blur(20px)',
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                        pointerEvents: 'none',
                        zIndex: 0,
                      }}
                    />

                    {/* accent line */}
                    <Box
                      className="stat-accent-bar"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 18,
                        width: 36,
                        height: 3,
                        borderRadius: 99,
                        background: `linear-gradient(90deg, ${stat.accentColor}, ${stat.accentColor}40)`,
                        opacity: 0.7,
                        zIndex: 2,
                      }}
                    />

                    {/* icon */}
                    <Box
                      className="stat-icon-wrap"
                      sx={{
                        width: { xs: 48, md: 52 },
                        height: { xs: 48, md: 52 },
                        borderRadius: '14px',
                        background: stat.iconBg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        mt: 0.8,
                        boxShadow: `0 4px 14px ${stat.shadowColor}`,
                        position: 'relative',
                        zIndex: 1,
                        '& .MuiSvgIcon-root': {
                          fontSize: { xs: 22, md: 24 },
                          color: stat.iconColor,
                        },
                      }}
                    >
                      {stat.icon}
                    </Box>

                    {/* number */}
                    <Typography
                      className="stat-number"
                      sx={{
                        fontFamily: "'Sora', sans-serif",
                        color: stat.accentColor,
                        fontWeight: 800,
                        fontSize: {
                          xs: '1.7rem',
                          sm: '1.85rem',
                          md: '2rem',
                          lg: '2.15rem',
                        },
                        lineHeight: 1,
                        mb: 0.7,
                        letterSpacing: '-0.03em',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      {stat.number}
                    </Typography>

                    {/* title */}
                    <Typography
                      sx={{
                        fontFamily: "'Sora', sans-serif",
                        color: '#0f172a',
                        fontWeight: 700,
                        fontSize: { xs: '0.92rem', md: '0.98rem' },
                        letterSpacing: '-0.01em',
                        mb: 0.8,
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      {stat.title}
                    </Typography>

                    {/* description */}
                    <Typography
                      sx={{
                        fontFamily: "'DM Sans', sans-serif",
                        color: '#94a3b8',
                        fontSize: { xs: '0.8rem', md: '0.84rem' },
                        lineHeight: 1.6,
                        fontWeight: 400,
                        flex: 1,
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      {stat.description}
                    </Typography>

                    {/* arrow */}
                    <Box
                      className="stat-arrow"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        mt: 1.8,
                        color: stat.accentColor,
                        opacity: 0.4,
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Sora', sans-serif",
                          fontWeight: 600,
                          fontSize: '0.78rem',
                          color: 'inherit',
                          letterSpacing: '0.02em',
                        }}
                      >
                        Trusted metric
                      </Typography>
                      <ArrowForward sx={{ fontSize: 14 }} />
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default About;