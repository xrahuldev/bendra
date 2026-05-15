'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import {
  Inventory2Outlined,
  CodeOutlined,
  HubOutlined,
  CloudOutlined,
  PhoneIphoneOutlined,
  IntegrationInstructionsOutlined,
  StorageOutlined,
  NorthEast,
} from '@mui/icons-material';
import Link from 'next/link';

/* ────────────────────────────────────────────────────────── */
/* Styles */
/* ────────────────────────────────────────────────────────── */
const BusinessStyles = React.memo(() => (
  <style>{`
    @keyframes businessFadeUp {
      from {
        opacity: 0;
        transform: translateY(26px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .business-fade {
      animation: businessFadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) both;
    }

    @media (prefers-reduced-motion: reduce) {
      .business-fade {
        animation: none !important;
      }
    }
  `}</style>
));
BusinessStyles.displayName = 'BusinessStyles';

/* ────────────────────────────────────────────────────────── */
/* Data */
/* ────────────────────────────────────────────────────────── */
type ServiceItem = {
  num: string;
  title: string;
  desc: string;
  href: string;
  icon: React.ReactNode;
  accent: string;
  category: string;
  featured?: boolean;
};

const services: ServiceItem[] = [
  {
    num: '01',
    title: 'Zoho Development',
    desc: 'Implementation, customization, and integrations across Zoho CRM, Zoho One, Creator, Books, and business apps tailored to your workflow.',
    href: '/expertise/zoho-development',
    icon: <Inventory2Outlined />,
    accent: '#2563eb',
    category: 'CRM & Automation',
    featured: true,
  },
  {
    num: '02',
    title: 'Salesforce Development',
    desc: 'Enterprise CRM implementation, Apex development, Lightning components, workflow automation, and secure third-party integrations.',
    href: '/expertise/salesforce-development',
    icon: <IntegrationInstructionsOutlined />,
    accent: '#0ea5e9',
    category: 'Enterprise CRM',
    featured: true,
  },
  {
    num: '03',
    title: 'Web Development',
    desc: 'Modern websites and web applications built with performant frontend architecture and scalable backend systems.',
    href: '/expertise/web-development',
    icon: <CodeOutlined />,
    accent: '#0f766e',
    category: 'Web Engineering',
  },
  {
    num: '04',
    title: 'Business Automation',
    desc: 'We streamline operations, lead flow, approvals, invoicing, and repetitive tasks with connected automation systems.',
    href: '/expertise/automation',
    icon: <HubOutlined />,
    accent: '#7c3aed',
    category: 'Workflow Systems',
  },
  {
    num: '05',
    title: 'SaaS Solutions',
    desc: 'Cloud-first SaaS platforms designed for scale, subscription models, customer onboarding, and product growth.',
    href: '/expertise/saas',
    icon: <CloudOutlined />,
    accent: '#d97706',
    category: 'Cloud Products',
  },
  {
    num: '06',
    title: 'Mobile Development',
    desc: 'High-quality iOS and Android apps with fast, reliable experiences for customers, teams, and digital products.',
    href: '/expertise/mobile',
    icon: <PhoneIphoneOutlined />,
    accent: '#0891b2',
    category: 'Mobile Apps',
  },
  {
    num: '07',
    title: 'Custom CRM Development',
    desc: 'Purpose-built CRM systems aligned to your sales process, service operations, customer lifecycle, and reporting needs.',
    href: '/expertise/crm',
    icon: <StorageOutlined />,
    accent: '#e11d48',
    category: 'Custom Systems',
  },
];

const summary = [
  { value: '7+', label: 'Core Service Areas' },
  { value: 'CRM → Cloud', label: 'Integrated Delivery' },
  { value: 'End-to-End', label: 'Strategy, Build & Scale' },
];

/* ────────────────────────────────────────────────────────── */
/* Card */
/* ────────────────────────────────────────────────────────── */
const ServiceCard = React.memo(
  ({ service, index }: { service: ServiceItem; index: number }) => {
    const accentSoft = alpha(service.accent, 0.08);
    const accentBorder = alpha(service.accent, 0.16);
    const accentShadow = alpha(service.accent, 0.16);
    const accentStrongShadow = alpha(service.accent, 0.22);

    return (
      <Link
        href={service.href}
        aria-label={`Learn more about ${service.title}`}
        style={{ textDecoration: 'none', display: 'block', height: '100%' }}
      >
        <Box
          className="business-fade"
          sx={{
            position: 'relative',
            height: '100%',
            minHeight: { xs: 250, md: service.featured ? 280 : 265 },
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '22px',
            background: '#fff',
            border: `1px solid ${alpha('#0f172a', 0.08)}`,
            boxShadow: '0 8px 24px rgba(15,23,42,0.04)',
            overflow: 'hidden',
            transition:
              'transform .28s ease, box-shadow .28s ease, border-color .28s ease, background .28s ease',
            animationDelay: `${0.08 + index * 0.06}s`,
            willChange: 'transform',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: `linear-gradient(90deg, ${service.accent}, ${alpha(service.accent, 0.45)})`,
            },
            '&:hover': {
              transform: 'translateY(-8px)',
              borderColor: accentBorder,
              boxShadow: `0 20px 42px ${accentShadow}`,
            },
            '&:hover .svc-icon-box': {
              transform: 'translateY(-2px) scale(1.04)',
              boxShadow: `0 14px 28px ${accentStrongShadow}`,
            },
            '&:hover .svc-title': {
              color: service.accent,
            },
            '&:hover .svc-arrow': {
              opacity: 1,
              transform: 'translateX(4px)',
            },
            '&:hover .svc-glow': {
              opacity: 1,
            },
          }}
        >
          <Box
            className="svc-glow"
            sx={{
              position: 'absolute',
              top: -60,
              right: -20,
              width: 180,
              height: 180,
              borderRadius: '50%',
              background: `radial-gradient(circle, ${alpha(service.accent, 0.14)} 0%, transparent 70%)`,
              opacity: 0,
              transition: 'opacity .28s ease',
              pointerEvents: 'none',
            }}
          />

          <Box
            sx={{
              p: { xs: 2.6, md: service.featured ? 3.2 : 2.8 },
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {/* Top row */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: 2,
                mb: 2.3,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: 'rgba(15,23,42,0.28)',
                    mb: 1.1,
                  }}
                >
                  {service.num}
                </Typography>

                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    px: 1.15,
                    py: 0.45,
                    borderRadius: '999px',
                    background: accentSoft,
                    border: `1px solid ${accentBorder}`,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      color: service.accent,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {service.category}
                  </Typography>
                </Box>
              </Box>

              <Box
                className="svc-icon-box"
                sx={{
                  width: { xs: 50, md: service.featured ? 56 : 52 },
                  height: { xs: 50, md: service.featured ? 56 : 52 },
                  flexShrink: 0,
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  background: `linear-gradient(135deg, ${service.accent} 0%, ${alpha(service.accent, 0.72)} 100%)`,
                  boxShadow: `0 10px 20px ${accentShadow}`,
                  transition: 'transform .28s ease, box-shadow .28s ease',
                  '& .MuiSvgIcon-root': {
                    fontSize: { xs: 22, md: 24 },
                  },
                }}
              >
                {service.icon}
              </Box>
            </Box>

            {/* Title */}
            <Typography
              className="svc-title"
              sx={{
                fontFamily: '"Inter", sans-serif',
                fontSize: {
                  xs: '1.02rem',
                  md: service.featured ? '1.18rem' : '1.08rem',
                },
                fontWeight: 700,
                color: '#0f172a',
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
                mb: 1.1,
                transition: 'color .25s ease',
              }}
            >
              {service.title}
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                fontFamily: '"Inter", sans-serif',
                fontSize: { xs: '0.88rem', md: '0.92rem' },
                fontWeight: 400,
                color: '#64748b',
                lineHeight: 1.75,
                flex: 1,
                maxWidth: service.featured ? '95%' : '100%',
              }}
            >
              {service.desc}
            </Typography>

            {/* Footer CTA */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mt: 2.3,
                pt: 2,
                borderTop: `1px solid ${alpha('#0f172a', 0.06)}`,
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: 'rgba(15,23,42,0.55)',
                }}
              >
                Learn more
              </Typography>

              <Box
                className="svc-arrow"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: service.accent,
                  opacity: 0.65,
                  transform: 'translateX(0)',
                  transition: 'opacity .25s ease, transform .25s ease',
                }}
              >
                <NorthEast sx={{ fontSize: 18 }} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Link>
    );
  }
);
ServiceCard.displayName = 'ServiceCard';

/* ────────────────────────────────────────────────────────── */
/* Component */
/* ────────────────────────────────────────────────────────── */
const Business: React.FC = () => {
  return (
    <>
      <BusinessStyles />

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
              linear-gradient(rgba(59,130,246,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.035) 1px, transparent 1px)
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
            background: 'radial-gradient(ellipse at top, rgba(59,130,246,0.08), transparent 62%)',
            pointerEvents: 'none',
          }}
        />

        {/* Corner blobs */}
        <Box
          sx={{
            position: 'absolute',
            top: '-8%',
            right: '-8%',
            width: 340,
            height: 340,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(37,99,235,0.07), transparent 70%)',
            filter: 'blur(46px)',
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '-10%',
            left: '-8%',
            width: 320,
            height: 320,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(14,165,233,0.06), transparent 70%)',
            filter: 'blur(42px)',
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
              className="business-fade"
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
                Core Services
              </Typography>
            </Box>

            <Typography
              className="business-fade"
              component="h2"
              sx={{
                fontFamily: '"Inter", sans-serif',
                fontWeight: 800,
                fontSize: {
                  xs: '2rem',
                  sm: '2.45rem',
                  md: '3rem',
                  lg: '3.35rem',
                },
                color: '#0f172a',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                mb: 2,
                animationDelay: '.08s',
              }}
            >
              Solutions engineered to
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
                scale with your business
              </Box>
            </Typography>

            <Typography
              className="business-fade"
              sx={{
                fontFamily: '"Inter", sans-serif',
                fontWeight: 400,
                fontSize: { xs: '0.98rem', md: '1.08rem' },
                color: '#64748b',
                lineHeight: 1.8,
                maxWidth: 640,
                mx: 'auto',
                animationDelay: '.16s',
              }}
            >
              From CRM ecosystems and custom development to automation, SaaS,
              mobile, and cloud-driven delivery — we build systems that improve
              efficiency, visibility, and growth.
            </Typography>
          </Box>

          {/* Services Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, minmax(0, 1fr))',
                lg: 'repeat(12, minmax(0, 1fr))',
              },
              gap: { xs: 2, sm: 2.5, md: 3 },
            }}
          >
            {services.map((service, index) => (
              <Box
                key={service.num}
                sx={{
                  gridColumn: {
                    xs: 'auto',
                    sm: 'auto',
                    lg: service.featured ? 'span 6' : 'span 4',
                  },
                }}
              >
                <ServiceCard service={service} index={index} />
              </Box>
            ))}
          </Box>

          {/* Bottom summary */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
              gap: 2.2,
              mt: { xs: 5, md: 7 },
            }}
          >
            {summary.map((item, index) => (
              <Box
                key={item.label}
                className="business-fade"
                sx={{
                  animationDelay: `${0.18 + index * 0.07}s`,
                  borderRadius: '18px',
                  border: '1px solid rgba(15,23,42,0.07)',
                  background: 'linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)',
                  boxShadow: '0 8px 24px rgba(15,23,42,0.04)',
                  px: { xs: 2.4, md: 3 },
                  py: { xs: 2.2, md: 2.5 },
                  textAlign: 'center',
                  transition: 'transform .25s ease, box-shadow .25s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 14px 30px rgba(15,23,42,0.08)',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 800,
                    fontSize: { xs: '1.3rem', md: '1.6rem' },
                    color: '#2563eb',
                    lineHeight: 1,
                    mb: 0.6,
                  }}
                >
                  {item.value}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 500,
                    fontSize: '0.88rem',
                    color: '#64748b',
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Business;