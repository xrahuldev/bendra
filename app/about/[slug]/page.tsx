'use client';

import React from 'react';
import { useParams, useRouter, notFound } from 'next/navigation';
import {
  Box,
  Button,
  Container,
  Typography,
  Chip,
  IconButton,
} from '@mui/material';
import {
  ArrowBack,
  ArrowForward,
  Star,
  CheckCircle,
  AccessTime,
  Build,
  Lightbulb,
  WorkspacePremium,
  Brush,
  Handshake,
  EmojiObjects,
  Assignment,
  RocketLaunch,
  FreeBreakfast,
  VerifiedUser,
  LocalShipping,
  Code,
  Campaign,
  PhoneIphone,
  Search,
  TrendingUp,
  FormatQuote,
} from '@mui/icons-material';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  getItemBySlug,
  getRelatedItems,
  KeyValue,
  TimelineStep,
  Testimonial,
  Service,
} from '@/lib/aboutData';

// Icon mapper
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
    Code: <Code sx={{ fontSize: size }} />,
    Campaign: <Campaign sx={{ fontSize: size }} />,
    PhoneIphone: <PhoneIphone sx={{ fontSize: size }} />,
    Search: <Search sx={{ fontSize: size }} />,
  };
  return icons[iconName] || <Lightbulb sx={{ fontSize: size }} />;
};

// ===== VALUE DETAIL COMPONENT =====
function ValueDetail({ data }: { data: KeyValue }) {
  return (
    <>
      {/* Hero */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '300px', md: '450px' },
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${data.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(5,13,26,0.3) 0%, rgba(5,13,26,0.95) 100%)',
          }}
        />
        <Container
          maxWidth="xl"
          sx={{
            px: { xs: 3, md: 6 },
            position: 'relative',
            height: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            pb: 5,
          }}
        >
          <Box>
            <Chip
              label="Core Value"
              sx={{
                backgroundColor: `${data.color}20`,
                color: data.color,
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                mb: 2,
                border: `1px solid ${data.color}40`,
              }}
            />
            <Typography
              variant="h1"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                color: '#fff',
                fontWeight: 800,
                fontSize: { xs: '2.2rem', md: '3.5rem' },
                lineHeight: 1.2,
              }}
            >
              {data.title}
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Content */}
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 }, py: { xs: 5, md: 8 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' },
            gap: 6,
          }}
        >
          {/* Main Content */}
          <Box>
            {/* Icon Header */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                mb: 4,
              }}
            >
              <Box
                sx={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '18px',
                  background: data.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  boxShadow: `0 8px 25px ${data.color}40`,
                }}
              >
                {getIcon(data.icon, 36)}
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: data.color,
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                  }}
                >
                  Our Value
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '1.8rem',
                  }}
                >
                  {data.title}
                </Typography>
              </Box>
            </Box>

            {/* Full Description */}
            {data.fullDescription.split('\n\n').map((paragraph, i) => (
              <Typography
                key={i}
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: 'rgba(255,255,255,0.75)',
                  fontSize: '1rem',
                  lineHeight: 1.9,
                  mb: 3,
                }}
              >
                {paragraph}
              </Typography>
            ))}

            {/* Key Details */}
            <Box
              sx={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                p: 4,
                mt: 4,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '1.3rem',
                  mb: 3,
                }}
              >
                What This Means For You
              </Typography>
              {data.details.map((detail, i) => (
                <Box
                  key={i}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1.5,
                    mb: 2,
                  }}
                >
                  <CheckCircle
                    sx={{
                      color: data.color,
                      fontSize: 22,
                      mt: 0.3,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                    }}
                  >
                    {detail}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Sidebar - Benefits */}
          <Box>
            <Box
              sx={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                p: 4,
                position: 'sticky',
                top: '100px',
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  mb: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <TrendingUp sx={{ color: data.color }} />
                Benefits
              </Typography>
              {data.benefits.map((benefit, i) => (
                <Box
                  key={i}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    mb: 2,
                    p: 1.5,
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: `${data.color}30`,
                      backgroundColor: `${data.color}08`,
                    },
                  }}
                >
                  <Star
                    sx={{
                      color: '#f59e0b',
                      fontSize: 18,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: '0.88rem',
                    }}
                  >
                    {benefit}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

// ===== TIMELINE DETAIL COMPONENT =====
function TimelineDetail({ data }: { data: TimelineStep }) {
  return (
    <>
      {/* Hero */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '300px', md: '450px' },
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${data.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(5,13,26,0.3) 0%, rgba(5,13,26,0.95) 100%)',
          }}
        />
        <Container
          maxWidth="xl"
          sx={{
            px: { xs: 3, md: 6 },
            position: 'relative',
            height: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            pb: 5,
          }}
        >
          <Box>
            <Box sx={{ display: 'flex', gap: 1.5, mb: 2 }}>
              <Chip
                label={`Step ${String(data.id).padStart(2, '0')}`}
                sx={{
                  backgroundColor: `${data.color}20`,
                  color: data.color,
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  border: `1px solid ${data.color}40`,
                }}
              />
              <Chip
                icon={<AccessTime sx={{ color: `${data.color} !important` }} />}
                label={data.duration}
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: '#fff',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                  border: '1px solid rgba(255,255,255,0.15)',
                }}
              />
            </Box>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                color: '#fff',
                fontWeight: 800,
                fontSize: { xs: '2.2rem', md: '3.5rem' },
                lineHeight: 1.2,
              }}
            >
              {data.title}
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Content */}
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 }, py: { xs: 5, md: 8 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' },
            gap: 6,
          }}
        >
          {/* Main Content */}
          <Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                mb: 4,
              }}
            >
              <Box
                sx={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '16px',
                  backgroundColor: `${data.color}15`,
                  border: `1px solid ${data.color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: data.color,
                }}
              >
                {getIcon(data.icon, 30)}
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: data.color,
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                  }}
                >
                  Process Step {data.id}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '1.6rem',
                  }}
                >
                  {data.title}
                </Typography>
              </Box>
            </Box>

            {data.fullDescription.split('\n\n').map((paragraph, i) => (
              <Typography
                key={i}
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: 'rgba(255,255,255,0.75)',
                  fontSize: '1rem',
                  lineHeight: 1.9,
                  mb: 3,
                }}
              >
                {paragraph}
              </Typography>
            ))}

            {/* Key Points */}
            <Box
              sx={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                p: 4,
                mt: 4,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '1.3rem',
                  mb: 3,
                }}
              >
                Key Activities
              </Typography>
              {data.keyPoints.map((point, i) => (
                <Box
                  key={i}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1.5,
                    mb: 2,
                  }}
                >
                  <CheckCircle
                    sx={{
                      color: data.color,
                      fontSize: 22,
                      mt: 0.3,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                    }}
                  >
                    {point}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Sidebar - Tools */}
          <Box>
            <Box
              sx={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                p: 4,
                position: 'sticky',
                top: '100px',
              }}
            >
              {/* Duration */}
              <Box
                sx={{
                  textAlign: 'center',
                  mb: 4,
                  p: 3,
                  borderRadius: '14px',
                  backgroundColor: `${data.color}10`,
                  border: `1px solid ${data.color}30`,
                }}
              >
                <AccessTime sx={{ color: data.color, fontSize: 32, mb: 1 }} />
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '1.3rem',
                  }}
                >
                  {data.duration}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '0.8rem',
                  }}
                >
                  Estimated Duration
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  mb: 2.5,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Build sx={{ color: data.color }} />
                Tools We Use
              </Typography>
              {data.tools.map((tool, i) => (
                <Box
                  key={i}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    mb: 1.5,
                    p: 1.5,
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: `${data.color}30`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: data.color,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: '0.88rem',
                    }}
                  >
                    {tool}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

// ===== TESTIMONIAL DETAIL COMPONENT =====
function TestimonialDetail({ data }: { data: Testimonial }) {
  return (
    <>
      {/* Hero */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '300px', md: '450px' },
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${data.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(5,13,26,0.4) 0%, rgba(5,13,26,0.95) 100%)',
          }}
        />
        <Container
          maxWidth="xl"
          sx={{
            px: { xs: 3, md: 6 },
            position: 'relative',
            height: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            pb: 5,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Box
              component="img"
              src={data.avatar}
              alt={data.name}
              sx={{
                width: { xs: '70px', md: '90px' },
                height: { xs: '70px', md: '90px' },
                borderRadius: '50%',
                objectFit: 'cover',
                border: '4px solid rgba(59,130,246,0.4)',
              }}
            />
            <Box>
              <Chip
                label={data.projectType}
                sx={{
                  backgroundColor: 'rgba(59,130,246,0.2)',
                  color: '#60a5fa',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  mb: 1,
                  border: '1px solid rgba(59,130,246,0.4)',
                }}
              />
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: { xs: '1.8rem', md: '2.8rem' },
                  lineHeight: 1.2,
                }}
              >
                {data.name}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '1rem',
                  mt: 0.5,
                }}
              >
                {data.role}, {data.company}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Content */}
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 }, py: { xs: 5, md: 8 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' },
            gap: 6,
          }}
        >
          {/* Main Content */}
          <Box>
            {/* Rating */}
            <Box sx={{ display: 'flex', gap: 0.5, mb: 4 }}>
              {Array.from({ length: data.rating }).map((_, i) => (
                <Star key={i} sx={{ color: '#f59e0b', fontSize: 28 }} />
              ))}
            </Box>

            {/* Quote */}
            <Box sx={{ position: 'relative', mb: 4 }}>
              <FormatQuote
                sx={{
                  fontSize: 60,
                  color: 'rgba(59,130,246,0.2)',
                  position: 'absolute',
                  top: -15,
                  left: -10,
                  transform: 'rotate(180deg)',
                }}
              />
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  lineHeight: 1.8,
                  fontStyle: 'italic',
                  pl: 5,
                  borderLeft: '3px solid #3b82f6',
                }}
              >
                &ldquo;{data.shortText}&rdquo;
              </Typography>
            </Box>

            {/* Full Story */}
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                color: '#fff',
                fontWeight: 700,
                fontSize: '1.5rem',
                mb: 3,
              }}
            >
              Full Story
            </Typography>

            {data.fullText.split('\n\n').map((paragraph, i) => (
              <Typography
                key={i}
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: 'rgba(255,255,255,0.75)',
                  fontSize: '1rem',
                  lineHeight: 1.9,
                  mb: 3,
                }}
              >
                {paragraph}
              </Typography>
            ))}
          </Box>

          {/* Sidebar - Results */}
          <Box>
            <Box
              sx={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                p: 4,
                position: 'sticky',
                top: '100px',
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  mb: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <TrendingUp sx={{ color: '#10b981' }} />
                Project Results
              </Typography>
              {data.results.map((result, i) => (
                <Box
                  key={i}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1.5,
                    mb: 2,
                    p: 1.5,
                    borderRadius: '10px',
                    backgroundColor: 'rgba(16,185,129,0.05)',
                    border: '1px solid rgba(16,185,129,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'rgba(16,185,129,0.3)',
                      backgroundColor: 'rgba(16,185,129,0.08)',
                    },
                  }}
                >
                  <CheckCircle
                    sx={{
                      color: '#10b981',
                      fontSize: 20,
                      mt: 0.2,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: 'rgba(255,255,255,0.75)',
                      fontSize: '0.88rem',
                      lineHeight: 1.5,
                    }}
                  >
                    {result}
                  </Typography>
                </Box>
              ))}

              {/* Project Type */}
              <Box
                sx={{
                  mt: 3,
                  pt: 3,
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    mb: 1,
                  }}
                >
                  Project Type
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                  }}
                >
                  {data.projectType}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

// ===== SERVICE DETAIL COMPONENT =====
function ServiceDetail({ data }: { data: Service }) {
  return (
    <>
      {/* Hero */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '300px', md: '450px' },
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${data.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(5,13,26,0.3) 0%, rgba(5,13,26,0.95) 100%)',
          }}
        />
        <Container
          maxWidth="xl"
          sx={{
            px: { xs: 3, md: 6 },
            position: 'relative',
            height: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            pb: 5,
          }}
        >
          <Box>
            <Box sx={{ display: 'flex', gap: 1.5, mb: 2 }}>
              <Chip
                label="Service"
                sx={{
                  backgroundColor: `${data.color}20`,
                  color: data.color,
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  border: `1px solid ${data.color}40`,
                }}
              />
              <Chip
                label={data.pricing}
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: '#fff',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  border: '1px solid rgba(255,255,255,0.15)',
                }}
              />
            </Box>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                color: '#fff',
                fontWeight: 800,
                fontSize: { xs: '2.2rem', md: '3.5rem' },
                lineHeight: 1.2,
              }}
            >
              {data.title}
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Content */}
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 }, py: { xs: 5, md: 8 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' },
            gap: 6,
          }}
        >
          {/* Main Content */}
          <Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                mb: 4,
              }}
            >
              <Box
                sx={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '18px',
                  background: data.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  boxShadow: `0 8px 25px ${data.color}40`,
                }}
              >
                {getIcon(data.icon, 36)}
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: data.color,
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                  }}
                >
                  Service Details
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '1.8rem',
                  }}
                >
                  {data.title}
                </Typography>
              </Box>
            </Box>

            {data.fullDescription.split('\n\n').map((paragraph, i) => (
              <Typography
                key={i}
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: 'rgba(255,255,255,0.75)',
                  fontSize: '1rem',
                  lineHeight: 1.9,
                  mb: 3,
                }}
              >
                {paragraph}
              </Typography>
            ))}

            {/* Features */}
            <Box
              sx={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                p: 4,
                mt: 4,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '1.3rem',
                  mb: 3,
                }}
              >
                Features Included
              </Typography>
              {data.features.map((feature, i) => (
                <Box
                  key={i}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1.5,
                    mb: 2,
                  }}
                >
                  <CheckCircle
                    sx={{
                      color: data.color,
                      fontSize: 22,
                      mt: 0.3,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                    }}
                  >
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Sidebar */}
          <Box>
            <Box
              sx={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                p: 4,
                position: 'sticky',
                top: '100px',
              }}
            >
              {/* Pricing Card */}
              <Box
                sx={{
                  textAlign: 'center',
                  mb: 4,
                  p: 3,
                  borderRadius: '14px',
                  background: data.gradient,
                  boxShadow: `0 8px 25px ${data.color}40`,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '0.85rem',
                    mb: 0.5,
                  }}
                >
                  Pricing
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: '#fff',
                    fontWeight: 800,
                    fontSize: '1.5rem',
                  }}
                >
                  {data.pricing}
                </Typography>
              </Box>

              {/* Technologies */}
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  mb: 2.5,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Build sx={{ color: data.color }} />
                Technologies
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1,
                  mb: 4,
                }}
              >
                {data.technologies.map((tech, i) => (
                  <Chip
                    key={i}
                    label={tech}
                    sx={{
                      backgroundColor: `${data.color}12`,
                      color: 'rgba(255,255,255,0.8)',
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 500,
                      fontSize: '0.8rem',
                      border: `1px solid ${data.color}25`,
                    }}
                  />
                ))}
              </Box>

              {/* CTA */}
              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                fullWidth
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  background: data.gradient,
                  color: '#fff',
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '1rem',
                  py: 1.5,
                  borderRadius: '12px',
                  boxShadow: `0 4px 20px ${data.color}40`,
                  '&:hover': {
                    boxShadow: `0 6px 30px ${data.color}60`,
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Get a Quote
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

// ===== MAIN SLUG PAGE =====
export default function AboutSlugPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const item = getItemBySlug(slug);

  if (!item) {
    return (
      <>
        <Navbar />
        <Box
          sx={{
            backgroundColor: '#050d1a',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              color: '#fff',
              fontWeight: 700,
              fontSize: '2.5rem',
            }}
          >
            404
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              color: 'rgba(255,255,255,0.6)',
              fontSize: '1.1rem',
            }}
          >
            Page not found
          </Typography>
          <Link href="/about" style={{ textDecoration: 'none' }}>
            <Button
              startIcon={<ArrowBack />}
              sx={{
                fontFamily: "'Poppins', sans-serif",
                color: '#3b82f6',
                textTransform: 'none',
                fontWeight: 600,
                border: '1px solid rgba(59,130,246,0.4)',
                borderRadius: '10px',
                px: 3,
                py: 1,
                '&:hover': {
                  backgroundColor: 'rgba(59,130,246,0.1)',
                },
              }}
            >
              Back to About
            </Button>
          </Link>
        </Box>
        <Footer />
      </>
    );
  }

  const relatedItems = getRelatedItems(slug, 3);

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
            top: '10%',
            left: '-10%',
            width: '500px',
            height: '500px',
            background:
              'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '20%',
            right: '-10%',
            width: '450px',
            height: '450px',
            background:
              'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />

        {/* Back Button */}
        <Box
          sx={{
            position: 'fixed',
            top: { xs: 75, md: 85 },
            left: { xs: 15, md: 30 },
            zIndex: 100,
          }}
        >
          <Link href="/about" style={{ textDecoration: 'none' }}>
            <Button
              startIcon={<ArrowBack />}
              sx={{
                fontFamily: "'Poppins', sans-serif",
                color: '#fff',
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '0.85rem',
                borderRadius: '12px',
                backgroundColor: 'rgba(5,13,26,0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.15)',
                px: 2.5,
                py: 0.8,
                '&:hover': {
                  backgroundColor: 'rgba(59,130,246,0.2)',
                  borderColor: 'rgba(59,130,246,0.4)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Back
            </Button>
          </Link>
        </Box>

        {/* Content based on type */}
        <Box sx={{ pt: { xs: 10, md: 12 } }}>
          {item.type === 'value' && <ValueDetail data={item.data as KeyValue} />}
          {item.type === 'timeline' && (
            <TimelineDetail data={item.data as TimelineStep} />
          )}
          {item.type === 'testimonial' && (
            <TestimonialDetail data={item.data as Testimonial} />
          )}
          {item.type === 'service' && (
            <ServiceDetail data={item.data as Service} />
          )}
        </Box>

        {/* ===== RELATED ITEMS ===== */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            py: { xs: 6, md: 10 },
          }}
        >
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                color: '#3b82f6',
                fontWeight: 600,
                fontSize: '0.85rem',
                letterSpacing: 2,
                mb: 1.5,
                textTransform: 'uppercase',
                textAlign: 'center',
              }}
            >
              Explore More
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                color: '#fff',
                fontWeight: 700,
                fontSize: { xs: '1.5rem', md: '2rem' },
                textAlign: 'center',
                mb: 5,
              }}
            >
              Related Articles
            </Typography>

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
              {relatedItems.map((related, i) => (
                <Link
                  key={i}
                  href={`/about/${related.slug}`}
                  style={{ textDecoration: 'none' }}
                >
                  <Box
                    sx={{
                      background:
                        'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      transition: 'all 0.4s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        borderColor: `${related.color}40`,
                        boxShadow: `0 20px 50px rgba(0,0,0,0.3)`,
                        '& .related-img': {
                          transform: 'scale(1.05)',
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        height: '180px',
                        overflow: 'hidden',
                        position: 'relative',
                      }}
                    >
                      <Box
                        className="related-img"
                        sx={{
                          width: '100%',
                          height: '100%',
                          backgroundImage: `url(${related.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          transition: 'transform 0.4s ease',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          background:
                            'linear-gradient(180deg, transparent 50%, rgba(5,13,26,0.6) 100%)',
                        }}
                      />
                      <Chip
                        label={related.type}
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: 12,
                          left: 12,
                          backgroundColor: `${related.color}25`,
                          color: related.color,
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 600,
                          fontSize: '0.7rem',
                          border: `1px solid ${related.color}40`,
                        }}
                      />
                    </Box>

                    <Box sx={{ p: 3 }}>
                      <Typography
                        sx={{
                          fontFamily: "'Poppins', sans-serif",
                          color: '#fff',
                          fontWeight: 700,
                          fontSize: '1.1rem',
                          mb: 1,
                        }}
                      >
                        {related.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "'Poppins', sans-serif",
                          color: 'rgba(255,255,255,0.6)',
                          fontSize: '0.85rem',
                          lineHeight: 1.6,
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          mb: 2,
                        }}
                      >
                        {related.description}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "'Poppins', sans-serif",
                          color: related.color,
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5,
                        }}
                      >
                        Read More <ArrowForward sx={{ fontSize: 16 }} />
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              ))}
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
                Interested in Working With Us?
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
                Let&apos;s discuss how we can help you achieve your
                digital goals.
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
                  Get Started
                </Button>
                <Link
                  href="/about"
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    variant="outlined"
                    startIcon={<ArrowBack />}
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
                    Back to About
                  </Button>
                </Link>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>

      <Footer />
    </>
  );
}