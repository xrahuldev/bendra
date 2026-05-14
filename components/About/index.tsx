'use client';

import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import {
  GroupOutlined,
  VerifiedOutlined,
  AccessTimeOutlined,
  StarOutlineOutlined,
  ArrowForward,
} from '@mui/icons-material';

const AboutStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

    @keyframes fadeUpAbout {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes countUp {
      from { opacity: 0; transform: translateY(10px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes dotDrift {
      0%,100% { transform: translateY(0px);   opacity: 0.25; }
      50%      { transform: translateY(-8px);  opacity: 0.4;  }
    }
    @keyframes glowPulse {
      0%,100% { opacity: 0.15; }
      50%      { opacity: 0.28; }
    }

    .about-left  { animation: fadeUpAbout 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s both; }
    .about-right { animation: fadeUpAbout 0.8s cubic-bezier(0.16,1,0.3,1) 0.22s both; }

    .stat-item {
      animation: countUp 0.7s cubic-bezier(0.16,1,0.3,1) both;
      transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1) !important;
    }
    .stat-item:hover { transform: translateY(-4px) !important; }
    .stat-item:hover .stat-icon-wrap {
      transform: scale(1.1) rotate(-5deg);
    }

    .stat-icon-wrap {
      transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
    }

    .about-btn {
      transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1) !important;
    }
    .about-btn:hover {
      transform: translateY(-2px) !important;
      border-color: rgba(255,255,255,0.7) !important;
      background: rgba(255,255,255,0.08) !important;
    }
    .about-btn:hover .btn-arrow {
      transform: translateX(4px);
    }
    .btn-arrow {
      transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
    }

    .dot-map { animation: dotDrift 6s ease-in-out infinite; }
    .glow-orb { animation: glowPulse 4s ease-in-out infinite; }
  `}</style>
);

const stats = [
  {
    icon: <GroupOutlined sx={{ fontSize: 26, color: '#3b82f6' }} />,
    iconBg: '#dbeafe',
    accentColor: '#3b82f6',
    number: '120+',
    title: 'Happy Clients',
    description: 'Businesses around the world trust our solutions',
  },
  {
    icon: <VerifiedOutlined sx={{ fontSize: 26, color: '#10b981' }} />,
    iconBg: '#d1fae5',
    accentColor: '#10b981',
    number: '250+',
    title: 'Projects Delivered',
    description: 'Successful projects across multiple industries',
  },
  {
    icon: <AccessTimeOutlined sx={{ fontSize: 26, color: '#a855f7' }} />,
    iconBg: '#f3e8ff',
    accentColor: '#a855f7',
    number: '8+',
    title: 'Years Experience',
    description: 'Delivering digital solutions that drive real results',
  },
  {
    icon: <StarOutlineOutlined sx={{ fontSize: 26, color: '#f59e0b' }} />,
    iconBg: '#fef3c7',
    accentColor: '#f59e0b',
    number: '98%',
    title: 'Client Satisfaction',
    description: "We're proud of the trust our clients place in us",
  },
];

const About: React.FC = () => {
  return (
    <>
      <AboutStyles />

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

        {/* Ambient blobs */}
        <Box sx={{
          position: 'absolute', top: '-10%', left: '-6%',
          width: '40%', height: '60%', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
        }} />
        <Box sx={{
          position: 'absolute', bottom: '-5%', right: '-4%',
          width: '32%', height: '45%', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
        }} />

        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 }, position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 3, md: 3.5 },
              alignItems: 'stretch',
            }}
          >

            {/* ── LEFT — Dark Hero Card ── */}
            <Box
              className="about-left"
              sx={{
                flex: { xs: '1 1 100%', md: '1 1 44%' },
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                background: 'linear-gradient(145deg, #0a1628 0%, #0d1f42 60%, #0a1835 100%)',
                p: { xs: 4, md: 5, lg: 6 },
                minHeight: { xs: '400px', md: '440px' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                border: '1px solid rgba(255,255,255,0.06)',
                boxShadow: '0 24px 60px rgba(10,22,40,0.18)',
              }}
            >
              {/* Background image layer */}
              <Box sx={{
                position: 'absolute', inset: 0, zIndex: 0,
                backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.08,
              }} />

              {/* Gradient overlay */}
              <Box sx={{
                position: 'absolute', inset: 0, zIndex: 1,
                background: 'linear-gradient(120deg, rgba(10,22,40,0.97) 0%, rgba(10,22,40,0.88) 55%, rgba(10,22,40,0.7) 100%)',
              }} />

              {/* Dot map decoration */}
              <Box
                className="dot-map"
                sx={{
                  position: 'absolute', top: 0, right: 0,
                  width: '55%', height: '100%', zIndex: 1,
                  backgroundImage: 'radial-gradient(circle, rgba(99,179,237,0.5) 1px, transparent 1px)',
                  backgroundSize: '14px 14px',
                  maskImage: 'radial-gradient(ellipse at right center, black 20%, transparent 68%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at right center, black 20%, transparent 68%)',
                  opacity: 0.3,
                }}
              />

              {/* Blue glow orb */}
              <Box
                className="glow-orb"
                sx={{
                  position: 'absolute', bottom: '-20%', right: '-10%',
                  width: '55%', height: '70%', borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)',
                  filter: 'blur(40px)', zIndex: 1,
                }}
              />

              {/* Content */}
              <Box sx={{ position: 'relative', zIndex: 2 }}>

                {/* Pill tag */}
                <Box sx={{
                  display: 'inline-flex', alignItems: 'center', gap: 1,
                  mb: 3, px: 2, py: 0.65, borderRadius: '999px',
                  border: '1px solid rgba(99,179,237,0.25)',
                  background: 'rgba(59,130,246,0.08)',
                }}>
                  <Box sx={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: '#63b3ed',
                    boxShadow: '0 0 8px rgba(99,179,237,0.8)',
                  }} />
                  <Typography sx={{
                    fontFamily: "'Sora', sans-serif",
                    color: '#90cdf4', fontWeight: 600,
                    fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                  }}>
                    About Bendra
                  </Typography>
                </Box>

                {/* Heading */}
                <Typography
                  component="h2"
                  sx={{
                    fontFamily: "'Sora', sans-serif",
                    color: '#fff', fontWeight: 800,
                    fontSize: { xs: '1.8rem', sm: '2rem', md: '2.2rem', lg: '2.6rem' },
                    lineHeight: 1.15, letterSpacing: '-0.025em', mb: 2.5,
                  }}
                >
                  Your growth is
                  <br />
                  our mission
                  <Box component="span" sx={{ color: '#63b3ed' }}>.</Box>
                </Typography>

                {/* Divider */}
                <Box sx={{
                  width: 40, height: 2, borderRadius: 99,
                  background: 'linear-gradient(90deg, #3b82f6, #90cdf4)',
                  mb: 2.5,
                }} />

                {/* Description */}
                <Typography sx={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: { xs: '0.9rem', md: '0.95rem' },
                  lineHeight: 1.8, fontWeight: 400, mb: 4,
                }}>
                  Bendra is a team of passionate technologists, problem solvers,
                  and business thinkers. We partner with organizations of all sizes
                  to build digital systems that create value, drive efficiency, and
                  accelerate growth.
                </Typography>

                {/* CTA */}
                <Button
                  variant="outlined"
                  endIcon={<ArrowForward className="btn-arrow" sx={{ fontSize: '1rem !important' }} />}
                  className="about-btn"
                  sx={{
                    fontFamily: "'Sora', sans-serif",
                    color: '#fff',
                    borderColor: 'rgba(255,255,255,0.22)',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    letterSpacing: '0.03em',
                    px: 3, py: 1.2,
                    borderRadius: '10px',
                    backdropFilter: 'blur(8px)',
                    background: 'rgba(255,255,255,0.03)',
                  }}
                >
                  Learn More About Us
                </Button>
              </Box>
            </Box>

            {/* ── RIGHT — Stats Grid ── */}
            <Box
              className="about-right"
              sx={{
                flex: { xs: '1 1 100%', md: '1 1 56%' },
                background: '#fff',
                borderRadius: '24px',
                p: { xs: 3, md: 4, lg: 5 },
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: 0,
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                border: '1.5px solid #f1f5f9',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Subtle inner dot texture */}
              <Box sx={{
                position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
                backgroundImage: 'radial-gradient(rgba(59,130,246,0.04) 1.5px, transparent 1.5px)',
                backgroundSize: '24px 24px',
              }} />

              {stats.map((stat, i) => {
                const isRight  = i % 2 === 1;
                const isBottom = i >= 2;
                return (
                  <Box
                    key={i}
                    className="stat-item"
                    sx={{
                      p: { xs: 2.5, md: 3.5 },
                      position: 'relative', zIndex: 1,
                      borderRight:  !isRight  ? '1px solid #f1f5f9' : 'none',
                      borderBottom: !isBottom ? '1px solid #f1f5f9' : 'none',
                      animationDelay: `${0.2 + i * 0.1}s`,
                      cursor: 'default',
                    }}
                  >
                    {/* Accent bar top */}
                    <Box sx={{
                      position: 'absolute', top: 0, left: { xs: 2.5, md: 3.5 }, width: 32, height: 2,
                      borderRadius: 99,
                      background: `linear-gradient(90deg, ${stat.accentColor}, transparent)`,
                      opacity: 0.6,
                    }} />

                    {/* Icon */}
                    <Box
                      className="stat-icon-wrap"
                      sx={{
                        width: 50, height: 50, borderRadius: '14px',
                        backgroundColor: stat.iconBg,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        mb: 2, mt: 1,
                        boxShadow: `0 4px 14px ${stat.accentColor}20`,
                      }}
                    >
                      {stat.icon}
                    </Box>

                    {/* Number */}
                    <Typography sx={{
                      fontFamily: "'Sora', sans-serif",
                      color: stat.accentColor, fontWeight: 800,
                      fontSize: { xs: '2rem', md: '2.3rem' },
                      lineHeight: 1, mb: 0.6,
                      letterSpacing: '-0.03em',
                    }}>
                      {stat.number}
                    </Typography>

                    {/* Title */}
                    <Typography sx={{
                      fontFamily: "'Sora', sans-serif",
                      color: '#0a1628', fontWeight: 700,
                      fontSize: { xs: '0.95rem', md: '1rem' },
                      letterSpacing: '-0.01em', mb: 0.8,
                    }}>
                      {stat.title}
                    </Typography>

                    {/* Description */}
                    <Typography sx={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: '#94a3b8',
                      fontSize: { xs: '0.8rem', md: '0.84rem' },
                      lineHeight: 1.55, fontWeight: 400,
                    }}>
                      {stat.description}
                    </Typography>
                  </Box>
                );
              })}
            </Box>

          </Box>
        </Container>
      </Box>
    </>
  );
};

export default About;