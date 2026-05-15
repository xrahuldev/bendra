'use client';

import React, { memo } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { ArrowForwardRounded, NorthEast } from '@mui/icons-material';
import Link from 'next/link';

/* ────────────────────────────────────────────────────────── */
/* Styles */
/* ────────────────────────────────────────────────────────── */
const OurWorkStyles = memo(function OurWorkStyles() {
  return (
    <style>{`
      @keyframes ourWorkFadeUp {
        from {
          opacity: 0;
          transform: translateY(24px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .ow-fade {
        animation: ourWorkFadeUp 0.72s cubic-bezier(0.16, 1, 0.3, 1) both;
      }

      @media (prefers-reduced-motion: reduce) {
        .ow-fade {
          animation: none !important;
        }
      }
    `}</style>
  );
});

/* ────────────────────────────────────────────────────────── */
/* Data */
/* ────────────────────────────────────────────────────────── */
type ProjectItem = {
  num: string;
  title: string;
  industry: string;
  description: string;
  image: string;
  href: string;
  accent: string;
};

const projects: ProjectItem[] = [
  {
    num: '01',
    title: 'CRM Solution for Real Estate',
    industry: 'Real Estate',
    description:
      'Custom Zoho CRM implementation with automated lead tracking and property management.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    href: '/portfolio',
    accent: '#7c3aed',
  },
  {
    num: '02',
    title: 'Learning Management System',
    industry: 'EdTech',
    description:
      'Full-stack LMS with real-time analytics, course builder, and student engagement tools.',
    image:
      'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    href: '/portfolio',
    accent: '#3b82f6',
  },
  {
    num: '03',
    title: 'Sales Automation for Retail',
    industry: 'Retail',
    description:
      'End-to-end sales pipeline automation with inventory sync and POS integration.',
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    href: '/portfolio',
    accent: '#06b6d4',
  },
  {
    num: '04',
    title: 'Healthcare CRM Platform',
    industry: 'Healthcare',
    description:
      'HIPAA-compliant CRM with patient management, scheduling, and automated follow-ups.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    href: '/portfolio',
    accent: '#10b981',
  },
];

/* ────────────────────────────────────────────────────────── */
/* Card */
/* ────────────────────────────────────────────────────────── */
const ProjectCard = memo(function ProjectCard({
  project,
  index,
}: {
  project: ProjectItem;
  index: number;
}) {
  const accentSoft = alpha(project.accent, 0.08);
  const accentBorder = alpha(project.accent, 0.16);
  const accentShadow = alpha(project.accent, 0.14);

  return (
    <Link
      href={project.href}
      aria-label={`View project: ${project.title}`}
      style={{
        textDecoration: 'none',
        display: 'block',
        height: '100%',
      }}
    >
      <Box
        className="ow-fade"
        sx={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '22px',
          overflow: 'hidden',
          background: '#fff',
          border: `1px solid ${alpha('#0f172a', 0.08)}`,
          boxShadow: '0 8px 24px rgba(15,23,42,0.04)',
          transition: 'transform .28s ease, box-shadow .28s ease, border-color .28s ease',
          animationDelay: `${0.08 + index * 0.06}s`,
          contentVisibility: 'auto',
          containIntrinsicSize: '380px',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: `radial-gradient(circle at top right, ${alpha(project.accent, 0.08)}, transparent 35%)`,
            opacity: 0,
            transition: 'opacity .28s ease',
            zIndex: 1,
          },
          '&:hover': {
            transform: 'translateY(-8px)',
            borderColor: accentBorder,
            boxShadow: `0 20px 42px ${accentShadow}`,
          },
          '&:hover::before': {
            opacity: 1,
          },
          '&:hover .ow-card-image': {
            transform: 'scale(1.045)',
          },
          '&:hover .ow-card-title': {
            color: project.accent,
          },
          '&:hover .ow-card-arrow': {
            transform: 'translateX(4px)',
            opacity: 1,
          },
          '&:hover .ow-card-tag': {
            background: alpha(project.accent, 0.12),
          },
        }}
      >
        {/* Top Accent Bar */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: `linear-gradient(90deg, ${project.accent}, ${alpha(project.accent, 0.4)})`,
            zIndex: 3,
          }}
        />

        {/* Image */}
        <Box
          sx={{
            position: 'relative',
            aspectRatio: '16/10',
            overflow: 'hidden',
            background: '#0f172a',
          }}
        >
          <Box
            component="img"
            className="ow-card-image"
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform .38s ease',
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(180deg, rgba(15,23,42,0.08) 0%, rgba(15,23,42,0.28) 100%)',
            }}
          />

          <Typography
            sx={{
              position: 'absolute',
              top: 12,
              right: 14,
              fontFamily: '"Inter", sans-serif',
              fontWeight: 800,
              fontSize: '1.55rem',
              lineHeight: 1,
              color: 'rgba(255,255,255,0.16)',
              letterSpacing: '-0.04em',
            }}
          >
            {project.num}
          </Typography>
        </Box>

        {/* Content */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            p: { xs: 2.4, md: 2.7 },
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
          }}
        >
          <Box
            className="ow-card-tag"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              alignSelf: 'flex-start',
              gap: 0.7,
              px: 1.2,
              py: 0.42,
              mb: 1.7,
              borderRadius: '999px',
              background: accentSoft,
              border: `1px solid ${accentBorder}`,
              transition: 'background .25s ease',
            }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: project.accent,
                boxShadow: `0 0 0 3px ${accentSoft}`,
              }}
            />
            <Typography
              sx={{
                fontFamily: '"Inter", sans-serif',
                fontWeight: 600,
                fontSize: '0.68rem',
                color: project.accent,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              {project.industry}
            </Typography>
          </Box>

          <Typography
            className="ow-card-title"
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 700,
              fontSize: { xs: '1rem', md: '1.08rem' },
              color: '#0f172a',
              lineHeight: 1.3,
              letterSpacing: '-0.02em',
              mb: 1,
              transition: 'color .24s ease',
            }}
          >
            {project.title}
          </Typography>

          <Typography
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 400,
              fontSize: '0.9rem',
              color: '#64748b',
              lineHeight: 1.75,
              flex: 1,
            }}
          >
            {project.description}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: 2.2,
              pt: 1.8,
              borderTop: `1px solid ${alpha('#0f172a', 0.06)}`,
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Inter", sans-serif',
                fontWeight: 600,
                fontSize: '0.82rem',
                color: 'rgba(15,23,42,0.58)',
              }}
            >
              View Project
            </Typography>

            <Box
              className="ow-card-arrow"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                color: project.accent,
                opacity: 0.72,
                transform: 'translateX(0)',
                transition: 'transform .24s ease, opacity .24s ease',
              }}
            >
              <NorthEast sx={{ fontSize: 18 }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Link>
  );
});

/* ────────────────────────────────────────────────────────── */
/* Main Component */
/* ────────────────────────────────────────────────────────── */
const OurWork: React.FC = () => {
  return (
    <>
      <OurWorkStyles />

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
            background:
              'radial-gradient(ellipse at top, rgba(59,130,246,0.07), transparent 62%)',
            pointerEvents: 'none',
          }}
        />

        {/* Accent blobs */}
        <Box
          sx={{
            position: 'absolute',
            top: '-8%',
            right: '-8%',
            width: 320,
            height: 320,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,58,237,0.06), transparent 72%)',
            filter: 'blur(42px)',
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '-8%',
            left: '-8%',
            width: 280,
            height: 280,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.06), transparent 72%)',
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
          {/* Header */}
          <Box
            sx={{
              textAlign: 'center',
              maxWidth: 760,
              mx: 'auto',
              mb: { xs: 6, md: 8 },
            }}
          >
            <Box
              className="ow-fade"
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
                Our Work
              </Typography>
            </Box>

            <Typography
              className="ow-fade"
              component="h2"
              sx={{
                fontFamily: '"Inter", sans-serif',
                fontWeight: 800,
                fontSize: {
                  xs: '2rem',
                  sm: '2.45rem',
                  md: '3rem',
                  lg: '3.3rem',
                },
                color: '#0f172a',
                lineHeight: 1.14,
                letterSpacing: '-0.03em',
                mb: 2,
                animationDelay: '.08s',
              }}
            >
              Solutions we’re
              <Box
                component="span"
                sx={{
                  display: 'block',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                proud to deliver
              </Box>
            </Typography>

            <Typography
              className="ow-fade"
              sx={{
                fontFamily: '"Inter", sans-serif',
                fontWeight: 400,
                fontSize: { xs: '0.98rem', md: '1.05rem' },
                color: '#64748b',
                lineHeight: 1.8,
                maxWidth: 620,
                mx: 'auto',
                animationDelay: '.16s',
              }}
            >
              Explore selected projects across CRM, automation, education,
              healthcare, and digital product delivery — built for real business outcomes.
            </Typography>
          </Box>

          {/* Cards */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, minmax(0, 1fr))',
                xl: 'repeat(4, minmax(0, 1fr))',
              },
              gap: { xs: 2, md: 2.5, lg: 3 },
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.num} project={project} index={index} />
            ))}
          </Box>

          {/* View all */}
          <Box
            className="ow-fade"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: { xs: 5, md: 6 },
              animationDelay: '.34s',
            }}
          >
            <Link href="/portfolio" style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.1,
                  px: { xs: 2.6, md: 3 },
                  py: { xs: 1.15, md: 1.25 },
                  borderRadius: '14px',
                  border: '1px solid rgba(59,130,246,0.18)',
                  background: 'rgba(59,130,246,0.05)',
                  color: '#2563eb',
                  transition: 'all .26s ease',
                  '&:hover': {
                    background: 'rgba(59,130,246,0.08)',
                    borderColor: 'rgba(59,130,246,0.28)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 24px rgba(59,130,246,0.12)',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 700,
                    fontSize: { xs: '0.86rem', md: '0.9rem' },
                    color: 'inherit',
                  }}
                >
                  View All Projects
                </Typography>
                <ArrowForwardRounded sx={{ fontSize: 19, color: 'inherit' }} />
              </Box>
            </Link>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default OurWork;