'use client';

import React from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import {
  GroupOutlined,
  VerifiedOutlined,
  AccessTimeOutlined,
  StarOutlineOutlined,
  NorthEast,
} from '@mui/icons-material';
import Link from 'next/link';

/* ────────────────────────────────────────────────────────── */
/* Styles */
/* ────────────────────────────────────────────────────────── */
const AboutStyles = React.memo(() => (
  <style>{`
    @keyframes aboutFadeUp {
      from {
        opacity: 0;
        transform: translateY(26px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .about-fade {
      animation: aboutFadeUp 0.72s cubic-bezier(0.16, 1, 0.3, 1) both;
    }

    @media (prefers-reduced-motion: reduce) {
      .about-fade {
        animation: none !important;
      }
    }
  `}</style>
));
AboutStyles.displayName = 'AboutStyles';

/* ────────────────────────────────────────────────────────── */
/* Data */
/* ────────────────────────────────────────────────────────── */
type StatItem = {
  value: string;
  title: string;
  desc: string;
  accent: string;
  icon: React.ElementType;
};

const stats: StatItem[] = [
  {
    icon: GroupOutlined,
    value: '120+',
    title: 'Happy Clients',
    desc: 'Trusted by growing businesses across industries.',
    accent: '#2563eb',
  },
  {
    icon: VerifiedOutlined,
    value: '250+',
    title: 'Projects Delivered',
    desc: 'Execution across CRM, web, automation, and SaaS.',
    accent: '#0f766e',
  },
  {
    icon: AccessTimeOutlined,
    value: '8+',
    title: 'Years of Experience',
    desc: 'Consistent delivery with practical business insight.',
    accent: '#7c3aed',
  },
  {
    icon: StarOutlineOutlined,
    value: '98%',
    title: 'Client Satisfaction',
    desc: 'Relationships built on clarity, reliability, and outcomes.',
    accent: '#d97706',
  },
];

const chips = [
  'Scalable systems',
  'Business-first delivery',
  'Long-term support',
];

const principles = [
  {
    label: 'Strategy-led',
    text: 'We align technology decisions with business outcomes.',
  },
  {
    label: 'Execution-focused',
    text: 'Fast, reliable implementation without unnecessary complexity.',
  },
  {
    label: 'Built to scale',
    text: 'Systems designed for growth, visibility, and control.',
  },
];

/* ────────────────────────────────────────────────────────── */
/* Stat Card */
/* ────────────────────────────────────────────────────────── */
const StatCard = React.memo(
  ({ item, index }: { item: StatItem; index: number }) => {
    const Icon = item.icon;
    const accentSoft = alpha(item.accent, 0.08);
    const accentBorder = alpha(item.accent, 0.16);
    const accentShadow = alpha(item.accent, 0.16);

    return (
      <Box
        className="about-fade"
        sx={{
          position: 'relative',
          borderRadius: '20px',
          border: `1px solid ${alpha('#0f172a', 0.08)}`,
          background: 'linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)',
          boxShadow: '0 8px 24px rgba(15,23,42,0.04)',
          p: { xs: 2.3, md: 2.6 },
          overflow: 'hidden',
          transition: 'transform .25s ease, box-shadow .25s ease, border-color .25s ease',
          animationDelay: `${0.18 + index * 0.07}s`,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: `linear-gradient(90deg, ${item.accent}, ${alpha(item.accent, 0.45)})`,
          },
          '&:hover': {
            transform: 'translateY(-5px)',
            borderColor: accentBorder,
            boxShadow: `0 16px 32px ${accentShadow}`,
          },
          '&:hover .about-stat-icon': {
            transform: 'translateY(-2px) scale(1.04)',
          },
        }}
      >
        <Box
          className="about-stat-icon"
          sx={{
            width: 48,
            height: 48,
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: accentSoft,
            border: `1px solid ${accentBorder}`,
            color: item.accent,
            mb: 1.7,
            transition: 'transform .25s ease',
            '& .MuiSvgIcon-root': {
              fontSize: 22,
            },
          }}
        >
          <Icon />
        </Box>

        <Typography
          sx={{
            fontFamily: '"Inter", sans-serif',
            fontWeight: 800,
            fontSize: { xs: '1.8rem', md: '2rem' },
            lineHeight: 1,
            letterSpacing: '-0.03em',
            color: item.accent,
            mb: 0.7,
          }}
        >
          {item.value}
        </Typography>

        <Typography
          sx={{
            fontFamily: '"Inter", sans-serif',
            fontWeight: 700,
            fontSize: { xs: '0.96rem', md: '1rem' },
            color: '#0f172a',
            letterSpacing: '-0.015em',
            mb: 0.75,
          }}
        >
          {item.title}
        </Typography>

        <Typography
          sx={{
            fontFamily: '"Inter", sans-serif',
            fontWeight: 400,
            fontSize: '0.88rem',
            lineHeight: 1.7,
            color: '#64748b',
          }}
        >
          {item.desc}
        </Typography>
      </Box>
    );
  }
);
StatCard.displayName = 'StatCard';

/* ────────────────────────────────────────────────────────── */
/* Component */
/* ────────────────────────────────────────────────────────── */
const About: React.FC = () => {
  return (
    <>
      <AboutStyles />

      <Box
        component="section"
        sx={{
          position: 'relative',
          py: { xs: 8, md: 12, lg: 13 },
          background: '#ffffff',
          overflow: 'hidden',
        }}
      >
        {/* Background grid */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            opacity: 0.42,
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '46px 46px',
            pointerEvents: 'none',
          }}
        />

        {/* Top glow */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 380,
            background: 'radial-gradient(ellipse at top, rgba(59,130,246,0.07), transparent 62%)',
            pointerEvents: 'none',
          }}
        />

        {/* Accent blobs */}
        <Box
          sx={{
            position: 'absolute',
            top: '-8%',
            left: '-8%',
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(37,99,235,0.06), transparent 72%)',
            filter: 'blur(42px)',
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '-8%',
            right: '-8%',
            width: 280,
            height: 280,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(14,165,233,0.06), transparent 72%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }}
        />

        <Container
          maxWidth="xl"
          sx={{
            position: 'relative',
            zIndex: 2,
            px: { xs: 2, sm: 3, md: 4, lg: 5 },
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                lg: 'minmax(0, 5fr) minmax(0, 7fr)',
              },
              gap: { xs: 4, md: 4.5, lg: 5 },
              alignItems: 'start',
            }}
          >
            {/* Left content */}
            <Box
              sx={{
                maxWidth: { xs: '100%', lg: 540 },
              }}
            >
              <Box
                className="about-fade"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 0.75,
                  mb: 2.4,
                  borderRadius: '999px',
                  border: '1px solid rgba(59,130,246,0.18)',
                  background: 'rgba(59,130,246,0.05)',
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#3b82f6',
                    boxShadow: '0 0 0 4px rgba(59,130,246,0.14)',
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 600,
                    fontSize: '0.74rem',
                    color: '#2563eb',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                  }}
                >
                  About Bendra
                </Typography>
              </Box>

              <Typography
                className="about-fade"
                component="h2"
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 800,
                  fontSize: {
                    xs: '2rem',
                    sm: '2.45rem',
                    md: '2.85rem',
                    lg: '3.15rem',
                  },
                  color: '#0f172a',
                  lineHeight: 1.14,
                  letterSpacing: '-0.03em',
                  mb: 2,
                  animationDelay: '.08s',
                }}
              >
                We build digital systems
                <Box
                  component="span"
                  sx={{
                    display: 'block',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #0ea5e9 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  around business clarity
                </Box>
              </Typography>

              <Typography
                className="about-fade"
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 400,
                  fontSize: { xs: '0.98rem', md: '1.05rem' },
                  lineHeight: 1.85,
                  color: '#64748b',
                  mb: 2.6,
                  maxWidth: 520,
                  animationDelay: '.16s',
                }}
              >
                Bendra is a technology partner focused on practical execution.
                We help organisations simplify operations, improve visibility,
                and scale confidently through CRM, custom software, automation,
                and connected digital systems.
              </Typography>

              {/* Chips */}
              <Box
                className="about-fade"
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1,
                  mb: 3,
                  animationDelay: '.22s',
                }}
              >
                {chips.map((chip) => (
                  <Box
                    key={chip}
                    sx={{
                      px: 1.35,
                      py: 0.7,
                      borderRadius: '999px',
                      background: '#f8fbff',
                      border: '1px solid rgba(15,23,42,0.08)',
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Inter", sans-serif',
                        fontWeight: 500,
                        fontSize: '0.8rem',
                        color: '#475569',
                        lineHeight: 1,
                      }}
                    >
                      {chip}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Principles */}
              <Box
                sx={{
                  display: 'grid',
                  gap: 1.3,
                  mb: 3.2,
                }}
              >
                {principles.map((item, index) => (
                  <Box
                    key={item.label}
                    className="about-fade"
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1.2,
                      borderRadius: '16px',
                      border: '1px solid rgba(15,23,42,0.07)',
                      background: 'linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)',
                      px: 1.4,
                      py: 1.3,
                      animationDelay: `${0.22 + index * 0.07}s`,
                    }}
                  >
                    <Box
                      sx={{
                        width: 9,
                        height: 9,
                        mt: '7px',
                        borderRadius: '50%',
                        flexShrink: 0,
                        background: '#3b82f6',
                        boxShadow: '0 0 0 4px rgba(59,130,246,0.1)',
                      }}
                    />
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: '"Inter", sans-serif',
                          fontWeight: 700,
                          fontSize: '0.92rem',
                          color: '#0f172a',
                          mb: 0.35,
                        }}
                      >
                        {item.label}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: '"Inter", sans-serif',
                          fontSize: '0.88rem',
                          lineHeight: 1.65,
                          color: '#64748b',
                        }}
                      >
                        {item.text}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

              {/* CTA */}
              <Box
                className="about-fade"
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: 1.25,
                  animationDelay: '.34s',
                }}
              >
                <Link href="/about" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="contained"
                    endIcon={<NorthEast sx={{ fontSize: '1rem !important' }} />}
                    sx={{
                      fontFamily: '"Inter", sans-serif',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      textTransform: 'none',
                      px: 2.6,
                      py: 1.2,
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                      boxShadow: '0 10px 24px rgba(37,99,235,0.24)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                        boxShadow: '0 14px 28px rgba(37,99,235,0.3)',
                      },
                    }}
                  >
                    Learn More About Us
                  </Button>
                </Link>

                <Typography
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.86rem',
                    color: '#64748b',
                  }}
                >
                  Long-term thinking. Real execution. Measurable value.
                </Typography>
              </Box>
            </Box>

            {/* Right content */}
            <Box
              sx={{
                display: 'grid',
                gap: 2.3,
              }}
            >
              {/* Feature panel */}
              <Box
                className="about-fade"
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '24px',
                  background:
                    'linear-gradient(135deg, #0f172a 0%, #111827 58%, #1d4ed8 140%)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  boxShadow: '0 18px 40px rgba(15,23,42,0.14)',
                  p: { xs: 2.6, md: 3.2 },
                  animationDelay: '.12s',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: -50,
                    right: -30,
                    width: 220,
                    height: 220,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(96,165,250,0.28), transparent 70%)',
                    filter: 'blur(20px)',
                    pointerEvents: 'none',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: -40,
                    left: -20,
                    width: 180,
                    height: 180,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(14,165,233,0.18), transparent 70%)',
                    filter: 'blur(18px)',
                    pointerEvents: 'none',
                  }}
                />

                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      px: 1.2,
                      py: 0.5,
                      borderRadius: '999px',
                      mb: 2,
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Inter", sans-serif',
                        fontWeight: 600,
                        fontSize: '0.72rem',
                        color: 'rgba(255,255,255,0.84)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                      }}
                    >
                      Business-first technology partner
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontFamily: '"Inter", sans-serif',
                      fontWeight: 800,
                      fontSize: { xs: '1.35rem', md: '1.7rem' },
                      lineHeight: 1.25,
                      letterSpacing: '-0.025em',
                      color: '#ffffff',
                      mb: 1.2,
                      maxWidth: 580,
                    }}
                  >
                    We combine strategy, systems, and execution into one delivery model.
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: { xs: '0.92rem', md: '0.96rem' },
                      lineHeight: 1.75,
                      color: 'rgba(255,255,255,0.72)',
                      maxWidth: 620,
                      mb: 2.4,
                    }}
                  >
                    Instead of disconnected tools and fragmented workflows, we help
                    businesses build unified digital operations that improve speed,
                    visibility, and decision-making.
                  </Typography>

                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
                      gap: 1.4,
                    }}
                  >
                    {[
                      'CRM & Process Design',
                      'Automation & Integration',
                      'Long-term Support',
                    ].map((item) => (
                      <Box
                        key={item}
                        sx={{
                          borderRadius: '16px',
                          px: 1.4,
                          py: 1.2,
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          backdropFilter: 'blur(8px)',
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: '"Inter", sans-serif',
                            fontWeight: 600,
                            fontSize: '0.84rem',
                            color: 'rgba(255,255,255,0.88)',
                            lineHeight: 1.4,
                          }}
                        >
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>

              {/* Stats grid */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                  gap: 2,
                }}
              >
                {stats.map((item, index) => (
                  <StatCard key={item.title} item={item} index={index} />
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