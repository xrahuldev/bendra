'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  IconButton,
} from '@mui/material';
import {
  ArrowForward,
  Star,
  CheckCircle,
  Lightbulb,
  Brush,
  Handshake,
  EmojiObjects,
  Assignment,
  RocketLaunch,
  FreeBreakfast,
  VerifiedUser,
  LocalShipping,
  ChevronLeft,
  ChevronRight,
  FormatQuote,
  Groups,
  TrendingUp,
  Public,
  WorkspacePremium,
} from '@mui/icons-material';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  keyValues,
  timelineSteps,
  testimonials,
  stats,
  services,
} from '@/lib/aboutData';

// Icon mapper function
const getIcon = (iconName: string, size: number = 28) => {
  const icons: Record<string, React.ReactNode> = {
    WorkspacePremium: <WorkspacePremium sx={{ fontSize: size }} />,
    Brush: <Brush sx={{ fontSize: size }} />,
    Handshake: <Handshake sx={{ fontSize: size }} />,
    EmojiObjects: <EmojiObjects sx={{ fontSize: size }} />,
    Assignment: <Assignment sx={{ fontSize: size }} />,
    RocketLaunch: <RocketLaunch sx={{ fontSize: size }} />,
    FreeBreakfast: <FreeBreakfast sx={{ fontSize: size }} />,
    VerifiedUser: <VerifiedUser sx={{ fontSize: size }} />,
    LocalShipping: <LocalShipping sx={{ fontSize: size }} />,
    Groups: <Groups sx={{ fontSize: size }} />,
    TrendingUp: <TrendingUp sx={{ fontSize: size }} />,
    Public: <Public sx={{ fontSize: size }} />,
  };
  return icons[iconName] || <Lightbulb sx={{ fontSize: size }} />;
};

export default function AboutPage() {
  const [testimonialIndex, setTestimonialIndex] = useState<number>(0);

  const nextTestimonial = () => {
    setTestimonialIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <>
      <Navbar />

      <Box
        sx={{
          backgroundColor: '#050d1a',
          fontFamily: "'Poppins', sans-serif",
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
        }}
      >
        {/* Background Glows */}
        <Box
          sx={{
            position: 'absolute',
            top: '3%',
            left: '-10%',
            width: '550px',
            height: '550px',
            background:
              'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '35%',
            right: '-10%',
            width: '500px',
            height: '500px',
            background:
              'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '20%',
            left: '15%',
            width: '450px',
            height: '450px',
            background:
              'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />

        {/* ===== HERO SECTION ===== */}
        <Box
          sx={{
            pt: { xs: 14, md: 18 },
            pb: { xs: 8, md: 12 },
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', lg: '1.1fr 1fr' },
                gap: { xs: 5, lg: 8 },
                alignItems: 'center',
              }}
            >
              {/* Left Content */}
              <Box>
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: '#3b82f6',
                    fontWeight: 600,
                    fontSize: { xs: '0.8rem', md: '0.9rem' },
                    letterSpacing: 2,
                    mb: 2,
                    textTransform: 'uppercase',
                  }}
                >
                  Our Story
                </Typography>

                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: {
                      xs: '2rem',
                      sm: '2.5rem',
                      md: '3rem',
                      lg: '3.2rem',
                    },
                    lineHeight: 1.2,
                    mb: 3,
                  }}
                >
                  Interesting Story Behind{' '}
                  <Box
                    component="span"
                    sx={{
                      background:
                        'linear-gradient(90deg, #3b82f6, #60a5fa)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Bendra
                  </Box>
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: { xs: '0.95rem', md: '1.05rem' },
                    lineHeight: 1.8,
                    mb: 2,
                  }}
                >
                  Welcome to Bendra. Our goal is to help businesses stay
                  ahead of the curve and succeed in the digital age by
                  leveraging the power of technology.
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: { xs: '0.9rem', md: '0.95rem' },
                    lineHeight: 1.8,
                    mb: 4,
                  }}
                >
                  We specialize in website development, app development,
                  digital marketing, and SEO services to help businesses
                  establish a strong online presence.
                </Typography>

                {/* Quick Highlights */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.5,
                    mb: 4,
                  }}
                >
                  {[
                    'Exceptional digital solutions for businesses',
                    'Website, app development & digital marketing',
                    'SEO services for strong online presence',
                    'Committed to client success & growth',
                  ].map((item, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.2,
                      }}
                    >
                      <CheckCircle
                        sx={{ color: '#10b981', fontSize: 20 }}
                      />
                      <Typography
                        sx={{
                          fontFamily: "'Poppins', sans-serif",
                          color: 'rgba(255,255,255,0.75)',
                          fontSize: '0.9rem',
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Button
                  variant="contained"
                  endIcon={<ArrowForward />}
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    background:
                      'linear-gradient(90deg, #3b82f6, #2563eb)',
                    color: '#fff',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '1rem',
                    px: 4,
                    py: 1.5,
                    borderRadius: '10px',
                    boxShadow: '0 4px 20px rgba(59,130,246,0.4)',
                    '&:hover': {
                      background:
                        'linear-gradient(90deg, #2563eb, #1d4ed8)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Get a Quote
                </Button>
              </Box>

              {/* Right - Visual Element */}
              <Box
                sx={{
                  position: 'relative',
                  display: { xs: 'none', lg: 'block' },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: '450px',
                      backgroundImage:
                        'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(180deg, transparent 30%, rgba(5,13,26,0.8) 100%)',
                    }}
                  />

                  {/* Floating Stats Card */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 24,
                      left: 24,
                      right: 24,
                      background: 'rgba(255,255,255,0.08)',
                      backdropFilter: 'blur(20px)',
                      borderRadius: '16px',
                      p: 3,
                      border: '1px solid rgba(255,255,255,0.12)',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: 2,
                      }}
                    >
                      {stats.map((stat, i) => (
                        <Box key={i} sx={{ textAlign: 'center' }}>
                          <Typography
                            sx={{
                              fontFamily: "'Poppins', sans-serif",
                              background:
                                'linear-gradient(90deg, #3b82f6, #60a5fa)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text',
                              fontWeight: 800,
                              fontSize: '1.6rem',
                            }}
                          >
                            {stat.number}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "'Poppins', sans-serif",
                              color: 'rgba(255,255,255,0.6)',
                              fontSize: '0.75rem',
                              fontWeight: 500,
                            }}
                          >
                            {stat.label}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>

                {/* Floating Decoration */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -20,
                    right: -20,
                    width: '100px',
                    height: '100px',
                    borderRadius: '20px',
                    background:
                      'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(59,130,246,0.05))',
                    border: '1px solid rgba(59,130,246,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Lightbulb sx={{ color: '#3b82f6', fontSize: 40 }} />
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* ===== STATS SECTION (Mobile) ===== */}
        <Box
          sx={{
            display: { xs: 'block', lg: 'none' },
            position: 'relative',
            zIndex: 1,
            pb: 6,
          }}
        >
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 2,
              }}
            >
              {stats.map((stat, i) => (
                <Box
                  key={i}
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    borderRadius: '16px',
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                    border: '1px solid rgba(255,255,255,0.08)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'rgba(59,130,246,0.3)',
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Box sx={{ color: '#3b82f6', mb: 1 }}>
                    {getIcon(stat.icon)}
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      background:
                        'linear-gradient(90deg, #3b82f6, #60a5fa)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontWeight: 800,
                      fontSize: '2rem',
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* ===== KEY VALUES SECTION ===== */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            py: { xs: 8, md: 12 },
          }}
        >
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#3b82f6',
                  fontWeight: 600,
                  fontSize: { xs: '0.8rem', md: '0.9rem' },
                  letterSpacing: 2,
                  mb: 2,
                  textTransform: 'uppercase',
                }}
              >
                Key Values
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: {
                    xs: '1.8rem',
                    sm: '2.2rem',
                    md: '2.5rem',
                  },
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                Our Key Values Push Us For{' '}
                <Box
                  component="span"
                  sx={{
                    background:
                      'linear-gradient(90deg, #3b82f6, #60a5fa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Excellent Work
                </Box>
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  md: 'repeat(3, 1fr)',
                },
                gap: 3,
              }}
            >
              {keyValues.map((value, index) => (
                <Box
                  key={index}
                  sx={{
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '24px',
                    p: { xs: 3.5, md: 4.5 },
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.4s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      borderColor: `${value.color}40`,
                      boxShadow: `0 20px 50px rgba(0,0,0,0.3)`,
                      '& .value-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                      },
                      '& .value-glow': {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  {/* Hover glow */}
                  <Box
                    className="value-glow"
                    sx={{
                      position: 'absolute',
                      top: '-30%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '200px',
                      height: '200px',
                      background: `radial-gradient(circle, ${value.color}20, transparent 70%)`,
                      filter: 'blur(40px)',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Icon */}
                  <Box
                    className="value-icon"
                    sx={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '20px',
                      background: value.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                      color: '#fff',
                      boxShadow: `0 8px 25px ${value.color}40`,
                      transition: 'all 0.4s ease',
                      position: 'relative',
                    }}
                  >
                    {getIcon(value.icon, 40)}
                  </Box>

                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '1.3rem',
                      mb: 2,
                      position: 'relative',
                    }}
                  >
                    {value.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: '0.9rem',
                      lineHeight: 1.7,
                      position: 'relative',
                      mb: 3,
                    }}
                  >
                    {value.shortDescription}
                  </Typography>

                  {/* READ MORE BUTTON */}
                  <Link
                    href={`/about/${value.slug}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <Button
                      endIcon={<ArrowForward />}
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        color: value.color,
                        textTransform: 'none',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        borderRadius: '10px',
                        border: `1px solid ${value.color}40`,
                        px: 3,
                        py: 0.8,
                        position: 'relative',
                        '&:hover': {
                          backgroundColor: `${value.color}15`,
                          borderColor: value.color,
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Read More
                    </Button>
                  </Link>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* ===== PROJECT LIFE CYCLE ===== */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            py: { xs: 8, md: 12 },
          }}
        >
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#3b82f6',
                  fontWeight: 600,
                  fontSize: { xs: '0.8rem', md: '0.9rem' },
                  letterSpacing: 2,
                  mb: 2,
                  textTransform: 'uppercase',
                }}
              >
                Project Life Cycle
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: {
                    xs: '1.8rem',
                    sm: '2.2rem',
                    md: '2.5rem',
                  },
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                Wanna See,{' '}
                <Box
                  component="span"
                  sx={{
                    background:
                      'linear-gradient(90deg, #3b82f6, #60a5fa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  How We Work?
                </Box>
              </Typography>
            </Box>

            {/* Timeline */}
            <Box
              sx={{
                position: 'relative',
                maxWidth: '900px',
                mx: 'auto',
              }}
            >
              {/* Vertical Line */}
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: '24px', md: '50%' },
                  transform: { md: 'translateX(-50%)' },
                  top: 0,
                  bottom: 0,
                  width: '2px',
                  background:
                    'linear-gradient(180deg, rgba(59,130,246,0.5) 0%, rgba(168,85,247,0.5) 50%, rgba(16,185,129,0.5) 100%)',
                }}
              />

              {timelineSteps.map((step, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <Box
                    key={step.id}
                    sx={{
                      display: 'flex',
                      flexDirection: {
                        xs: 'row',
                        md: isLeft ? 'row' : 'row-reverse',
                      },
                      alignItems: 'flex-start',
                      mb: 5,
                      position: 'relative',
                      pl: { xs: '60px', md: 0 },
                    }}
                  >
                    {/* Dot on timeline */}
                    <Box
                      sx={{
                        position: 'absolute',
                        left: { xs: '14px', md: '50%' },
                        transform: { md: 'translateX(-50%)' },
                        width: '22px',
                        height: '22px',
                        borderRadius: '50%',
                        backgroundColor: step.color,
                        border: '4px solid #050d1a',
                        boxShadow: `0 0 15px ${step.color}60`,
                        zIndex: 2,
                      }}
                    />

                    {/* Content Card */}
                    <Box
                      sx={{
                        width: { xs: '100%', md: 'calc(50% - 40px)' },
                        ml: { md: isLeft ? 0 : 'auto' },
                        mr: { md: isLeft ? 'auto' : 0 },
                      }}
                    >
                      <Box
                        sx={{
                          background:
                            'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                          border: '1px solid rgba(255,255,255,0.08)',
                          borderRadius: '20px',
                          p: { xs: 3, md: 4 },
                          transition: 'all 0.4s ease',
                          cursor: 'pointer',
                          '&:hover': {
                            transform: 'translateY(-6px)',
                            borderColor: `${step.color}40`,
                            boxShadow: `0 15px 40px rgba(0,0,0,0.25)`,
                            '& .step-icon': {
                              transform: 'scale(1.1)',
                            },
                          },
                        }}
                      >
                        {/* Step Number + Icon */}
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            mb: 2,
                          }}
                        >
                          <Box
                            className="step-icon"
                            sx={{
                              width: '50px',
                              height: '50px',
                              borderRadius: '14px',
                              backgroundColor: `${step.color}15`,
                              border: `1px solid ${step.color}30`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: step.color,
                              flexShrink: 0,
                              transition: 'all 0.3s ease',
                            }}
                          >
                            {getIcon(step.icon)}
                          </Box>
                          <Box>
                            <Typography
                              sx={{
                                fontFamily: "'Poppins', sans-serif",
                                color: step.color,
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                letterSpacing: 1,
                                textTransform: 'uppercase',
                              }}
                            >
                              Step {String(step.id).padStart(2, '0')}
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "'Poppins', sans-serif",
                                color: '#fff',
                                fontWeight: 700,
                                fontSize: '1.15rem',
                              }}
                            >
                              {step.title}
                            </Typography>
                          </Box>
                        </Box>

                        <Typography
                          sx={{
                            fontFamily: "'Poppins', sans-serif",
                            color: 'rgba(255,255,255,0.6)',
                            fontSize: '0.88rem',
                            lineHeight: 1.7,
                            mb: 2,
                          }}
                        >
                          {step.shortDescription}
                        </Typography>

                        {/* READ MORE BUTTON */}
                        <Link
                          href={`/about/${step.slug}`}
                          style={{ textDecoration: 'none' }}
                        >
                          <Button
                            endIcon={<ArrowForward />}
                            sx={{
                              fontFamily: "'Poppins', sans-serif",
                              color: step.color,
                              textTransform: 'none',
                              fontWeight: 600,
                              fontSize: '0.8rem',
                              borderRadius: '8px',
                              border: `1px solid ${step.color}40`,
                              px: 2.5,
                              py: 0.6,
                              '&:hover': {
                                backgroundColor: `${step.color}15`,
                                borderColor: step.color,
                              },
                              transition: 'all 0.3s ease',
                            }}
                          >
                            Read More
                          </Button>
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Container>
        </Box>

        {/* ===== SERVICES OVERVIEW ===== */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            py: { xs: 8, md: 12 },
          }}
        >
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#3b82f6',
                  fontWeight: 600,
                  fontSize: { xs: '0.8rem', md: '0.9rem' },
                  letterSpacing: 2,
                  mb: 2,
                  textTransform: 'uppercase',
                }}
              >
                Our Services
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: {
                    xs: '1.8rem',
                    sm: '2.2rem',
                    md: '2.5rem',
                  },
                  lineHeight: 1.2,
                }}
              >
                What We{' '}
                <Box
                  component="span"
                  sx={{
                    background:
                      'linear-gradient(90deg, #3b82f6, #60a5fa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Offer
                </Box>
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  lg: 'repeat(4, 1fr)',
                },
                gap: 3,
              }}
            >
              {services.map((service, index) => (
                <Box
                  key={index}
                  sx={{
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '20px',
                    p: 3.5,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.4s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      borderColor: `${service.color}40`,
                      boxShadow: `0 20px 50px rgba(0,0,0,0.3)`,
                    },
                  }}
                >
                  {/* Service Image */}
                  <Box
                    sx={{
                      width: '100%',
                      height: '140px',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      mb: 2.5,
                    }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transition: 'transform 0.4s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                  </Box>

                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      mb: 1.5,
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: '0.85rem',
                      lineHeight: 1.7,
                      mb: 2.5,
                    }}
                  >
                    {service.shortDescription}
                  </Typography>

                  {/* Pricing */}
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: service.color,
                      fontWeight: 600,
                      fontSize: '0.8rem',
                      mb: 2,
                    }}
                  >
                    {service.pricing}
                  </Typography>

                  {/* READ MORE BUTTON */}
                  <Link
                    href={`/about/${service.slug}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <Button
                      endIcon={<ArrowForward />}
                      fullWidth
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        color: '#fff',
                        textTransform: 'none',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        borderRadius: '10px',
                        background: service.gradient,
                        px: 3,
                        py: 1,
                        boxShadow: `0 4px 15px ${service.color}30`,
                        '&:hover': {
                          boxShadow: `0 6px 25px ${service.color}50`,
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Learn More
                    </Button>
                  </Link>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* ===== TESTIMONIALS ===== */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            py: { xs: 8, md: 10 },
          }}
        >
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box sx={{ textAlign: 'center', mb: 5 }}>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#3b82f6',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  letterSpacing: 2,
                  mb: 1.5,
                  textTransform: 'uppercase',
                }}
              >
                Testimonials
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: { xs: '1.6rem', md: '2rem' },
                }}
              >
                What Our Clients Say
              </Typography>
            </Box>

            <Box
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '24px',
                  p: { xs: 3, md: 5 },
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: '-50%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '300px',
                    height: '300px',
                    background:
                      'radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)',
                    filter: 'blur(40px)',
                    pointerEvents: 'none',
                  }}
                />

                <FormatQuote
                  sx={{
                    fontSize: 50,
                    color: 'rgba(59,130,246,0.3)',
                    mb: 2,
                    transform: 'rotate(180deg)',
                    position: 'relative',
                  }}
                />

                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: 'rgba(255,255,255,0.85)',
                    fontSize: { xs: '1rem', md: '1.15rem' },
                    lineHeight: 1.8,
                    mb: 3,
                    fontStyle: 'italic',
                    position: 'relative',
                    maxWidth: '600px',
                    mx: 'auto',
                  }}
                >
                  &ldquo;{testimonials[testimonialIndex].shortText}&rdquo;
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 0.5,
                    mb: 2.5,
                  }}
                >
                  {Array.from({
                    length: testimonials[testimonialIndex].rating,
                  }).map((_, i) => (
                    <Star
                      key={i}
                      sx={{ color: '#f59e0b', fontSize: 22 }}
                    />
                  ))}
                </Box>

                <Box
                  component="img"
                  src={testimonials[testimonialIndex].avatar}
                  alt={testimonials[testimonialIndex].name}
                  sx={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    mb: 1.5,
                    border: '3px solid rgba(59,130,246,0.3)',
                    mx: 'auto',
                    display: 'block',
                    position: 'relative',
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '1rem',
                    position: 'relative',
                  }}
                >
                  {testimonials[testimonialIndex].name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '0.85rem',
                    position: 'relative',
                    mb: 2.5,
                  }}
                >
                  {testimonials[testimonialIndex].role},{' '}
                  {testimonials[testimonialIndex].company}
                </Typography>

                {/* READ FULL STORY BUTTON */}
                <Link
                  href={`/about/${testimonials[testimonialIndex].slug}`}
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    endIcon={<ArrowForward />}
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: '#3b82f6',
                      textTransform: 'none',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(59,130,246,0.4)',
                      px: 3,
                      py: 0.8,
                      position: 'relative',
                      '&:hover': {
                        backgroundColor: 'rgba(59,130,246,0.15)',
                        borderColor: '#3b82f6',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Read Full Story
                  </Button>
                </Link>
              </Box>

              {/* Nav Arrows */}
              <IconButton
                onClick={prevTestimonial}
                sx={{
                  position: 'absolute',
                  left: { xs: -5, md: -25 },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: '#3b82f6',
                    borderColor: '#3b82f6',
                  },
                }}
              >
                <ChevronLeft />
              </IconButton>
              <IconButton
                onClick={nextTestimonial}
                sx={{
                  position: 'absolute',
                  right: { xs: -5, md: -25 },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: '#3b82f6',
                    borderColor: '#3b82f6',
                  },
                }}
              >
                <ChevronRight />
              </IconButton>

              {/* Dots */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 1,
                  mt: 3,
                }}
              >
                {testimonials.map((_, i) => (
                  <Box
                    key={i}
                    onClick={() => setTestimonialIndex(i)}
                    sx={{
                      width: testimonialIndex === i ? '28px' : '10px',
                      height: '10px',
                      borderRadius: '10px',
                      backgroundColor:
                        testimonialIndex === i
                          ? '#3b82f6'
                          : 'rgba(255,255,255,0.2)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Container>
        </Box>

        {/* ===== CTA SECTION ===== */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            py: { xs: 6, md: 8 },
          }}
        >
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box
              sx={{
                background:
                  'linear-gradient(135deg, #1a2f5c, #0f1f3d)',
                borderRadius: '24px',
                p: { xs: 4, md: 6 },
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(59,130,246,0.2)',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: '-30%',
                  right: '-10%',
                  width: '400px',
                  height: '400px',
                  background:
                    'radial-gradient(circle, rgba(59,130,246,0.25), transparent 70%)',
                  filter: 'blur(50px)',
                  pointerEvents: 'none',
                }}
              />

              <Typography
                variant="h3"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: { xs: '1.6rem', md: '2.2rem' },
                  mb: 2,
                  position: 'relative',
                }}
              >
                Ready to Start Your Project?
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '1rem',
                  maxWidth: '500px',
                  mx: 'auto',
                  mb: 4,
                  lineHeight: 1.7,
                  position: 'relative',
                }}
              >
                Let&apos;s discuss how we can bring your ideas to life
                and deliver results that matter.
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  position: 'relative',
                }}
              >
                <Button
                  variant="contained"
                  endIcon={<ArrowForward />}
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    background:
                      'linear-gradient(90deg, #3b82f6, #2563eb)',
                    color: '#fff',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '1rem',
                    px: 4,
                    py: 1.5,
                    borderRadius: '10px',
                    boxShadow: '0 4px 20px rgba(59,130,246,0.4)',
                    '&:hover': {
                      background:
                        'linear-gradient(90deg, #2563eb, #1d4ed8)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Get a Quote
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: '#fff',
                    borderColor: 'rgba(255,255,255,0.3)',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '1rem',
                    px: 4,
                    py: 1.5,
                    borderRadius: '10px',
                    '&:hover': {
                      borderColor: '#3b82f6',
                      backgroundColor: 'rgba(59,130,246,0.1)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  View Portfolio
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>

      <Footer />
    </>
  );
}