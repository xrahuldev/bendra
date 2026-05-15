'use client';

import React, { memo } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import {
  TrendingUpRounded,
  CampaignRounded,
  CodeRounded,
  GroupAddRounded,
  FilterAltRounded,
  StorageRounded,
  PhoneIphoneRounded,
  AppShortcutRounded,
  CloudOutlined,
  IntegrationInstructionsOutlined,
  Inventory2Outlined,
  NorthEast,
  CheckCircleRounded,
  ArrowForwardRounded,
} from '@mui/icons-material';
import Link from 'next/link';

/* ────────────────────────────────────────────────────────── */
/* Styles */
/* ────────────────────────────────────────────────────────── */
const ExpertiseStyles = memo(function ExpertiseStyles() {
  return (
    <style>{`
      @keyframes expertiseFadeUp {
        from {
          opacity: 0;
          transform: translateY(24px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .expertise-fade {
        animation: expertiseFadeUp 0.72s cubic-bezier(0.16, 1, 0.3, 1) both;
      }

      @media (prefers-reduced-motion: reduce) {
        .expertise-fade {
          animation: none !important;
        }
      }
    `}</style>
  );
});

/* ────────────────────────────────────────────────────────── */
/* Types */
/* ────────────────────────────────────────────────────────── */
type ServiceItem = {
  num: string;
  title: string;
  short: string;
  desc: string;
  href: string;
  features: string[];
  accent: string;
  iconBg: string;
  icon: React.ElementType;
};

/* ────────────────────────────────────────────────────────── */
/* Data */
/* ────────────────────────────────────────────────────────── */
const services: ServiceItem[] = [
  {
    icon: TrendingUpRounded,
    num: '01',
    title: 'SEO',
    short: 'Search Engine Optimization',
    desc: "Improve your website's online visibility and attract more organic traffic with expert keyword research, on-page optimization, and link building.",
    href: '/expertise/seo',
    features: ['Keyword Research', 'On-page SEO', 'Link Building'],
    accent: '#10b981',
    iconBg: 'linear-gradient(135deg, #10b981, #059669)',
  },
  {
    icon: CampaignRounded,
    num: '02',
    title: 'Social Media Marketing',
    short: 'Engage. Grow. Convert.',
    desc: "Expand your brand's reach and engage with your target audience through expert strategy, compelling content, and data-driven results.",
    href: '/expertise/social-media-marketing',
    features: ['Content Strategy', 'Paid Campaigns', 'Analytics'],
    accent: '#ec4899',
    iconBg: 'linear-gradient(135deg, #ec4899, #db2777)',
  },
  {
    icon: CodeRounded,
    num: '03',
    title: 'Website Development',
    short: 'Modern. Fast. Scalable.',
    desc: 'Create a professional website with responsive design, fast performance, easy navigation, and user-friendly features tailored to your needs.',
    href: '/expertise/website-development',
    features: ['Responsive Design', 'Fast Performance', 'SEO-Ready'],
    accent: '#3b82f6',
    iconBg: 'linear-gradient(135deg, #3b82f6, #2563eb)',
  },
  {
    icon: GroupAddRounded,
    num: '04',
    title: 'LinkedIn Lead Generation',
    short: 'B2B Growth Engine',
    desc: 'Generate high-quality leads and grow your business network with targeted outreach, customized messaging, and data-driven results.',
    href: '/expertise/linkedin-lead-generation',
    features: ['Targeted Outreach', 'Custom Messaging', 'CRM Sync'],
    accent: '#0ea5e9',
    iconBg: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
  },
  {
    icon: FilterAltRounded,
    num: '05',
    title: 'Sales Funnel',
    short: 'Optimize. Convert. Scale.',
    desc: 'Optimize your sales process and improve conversions with expertly designed funnel strategies, lead capture forms, and automated follow-up.',
    href: '/expertise/sales-funnel',
    features: ['Lead Capture', 'Automation', 'Conversion Opt.'],
    accent: '#f59e0b',
    iconBg: 'linear-gradient(135deg, #f59e0b, #d97706)',
  },
  {
    icon: StorageRounded,
    num: '06',
    title: 'CRM Development',
    short: 'Smart Customer Management',
    desc: 'Streamline customer management with customized CRM solutions, automated workflows, and enhanced customer relationships.',
    href: '/expertise/crm-development',
    features: ['Custom Workflows', 'Integrations', 'Reporting'],
    accent: '#ef4444',
    iconBg: 'linear-gradient(135deg, #ef4444, #dc2626)',
  },
  {
    icon: PhoneIphoneRounded,
    num: '07',
    title: 'Mobile UI/UX Design',
    short: 'Beautiful. Intuitive. Fast.',
    desc: 'Improve user experience and engagement on mobile devices with expert design, efficient code, and intuitive features.',
    href: '/expertise/ui-ux-design',
    features: ['Wireframes', 'Prototyping', 'User Testing'],
    accent: '#a855f7',
    iconBg: 'linear-gradient(135deg, #a855f7, #9333ea)',
  },
  {
    icon: AppShortcutRounded,
    num: '08',
    title: 'Flutter App Development',
    short: 'Cross-Platform Excellence',
    desc: 'Build high-performance, cross-platform mobile apps with expert design, efficient code, and reliable native performance.',
    href: '/expertise/flutter-app-development',
    features: ['iOS + Android', 'Native Feel', 'Single Codebase'],
    accent: '#06b6d4',
    iconBg: 'linear-gradient(135deg, #06b6d4, #0891b2)',
  },
  {
    icon: Inventory2Outlined,
    num: '09',
    title: 'Zoho Development',
    short: 'Zoho One. Customized.',
    desc: 'Expert Zoho CRM, Creator & Books implementation, customization, and integration tailored to your business workflows.',
    href: '/expertise/zoho-development',
    features: ['Zoho CRM', 'Zoho Creator', 'Custom Apps'],
    accent: '#2563eb',
    iconBg: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
  },
  {
    icon: IntegrationInstructionsOutlined,
    num: '10',
    title: 'Salesforce Development',
    short: 'Enterprise-Grade Solutions',
    desc: 'Salesforce CRM setup, Apex development, Lightning components, and third-party integrations for enterprise solutions.',
    href: '/expertise/salesforce-development',
    features: ['Apex & Lightning', 'Integrations', 'Custom Objects'],
    accent: '#7c3aed',
    iconBg: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
  },
  {
    icon: CloudOutlined,
    num: '11',
    title: 'SaaS Solutions',
    short: 'Cloud-First. Subscription-Ready.',
    desc: 'Scalable SaaS applications with subscription models, multi-tenancy, and cloud-first architecture for real business problems.',
    href: '/expertise/saas-solutions',
    features: ['Multi-Tenant', 'Subscription', 'Cloud Native'],
    accent: '#14b8a6',
    iconBg: 'linear-gradient(135deg, #14b8a6, #0d9488)',
  },
];

const trustItems = ['120+ Clients', '250+ Projects', '8+ Years'];

/* ────────────────────────────────────────────────────────── */
/* Card */
/* ────────────────────────────────────────────────────────── */
const ExpertiseCard = memo(function ExpertiseCard({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) {
  const Icon = service.icon;
  const accentSoft = alpha(service.accent, 0.08);
  const accentBorder = alpha(service.accent, 0.16);
  const accentShadow = alpha(service.accent, 0.14);

  return (
    <Link
      href={service.href}
      aria-label={`Know more about ${service.title}`}
      style={{
        textDecoration: 'none',
        display: 'block',
        height: '100%',
      }}
    >
      <Box
        className="expertise-fade"
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          borderRadius: '22px',
          overflow: 'hidden',
          background: '#fff',
          border: `1px solid ${alpha('#0f172a', 0.08)}`,
          boxShadow: '0 8px 24px rgba(15,23,42,0.04)',
          transition: 'transform .28s ease, box-shadow .28s ease, border-color .28s ease',
          animationDelay: `${0.08 + index * 0.05}s`,
          contentVisibility: 'auto',
          containIntrinsicSize: '380px',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: `linear-gradient(90deg, ${service.accent}, ${alpha(service.accent, 0.42)})`,
            zIndex: 2,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: -50,
            right: -40,
            width: 180,
            height: 180,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${alpha(service.accent, 0.08)} 0%, transparent 70%)`,
            opacity: 0,
            transition: 'opacity .28s ease',
            pointerEvents: 'none',
          },
          '&:hover': {
            transform: 'translateY(-8px)',
            borderColor: accentBorder,
            boxShadow: `0 20px 42px ${accentShadow}`,
          },
          '&:hover::after': {
            opacity: 1,
          },
          '&:hover .expertise-icon': {
            transform: 'translateY(-2px) scale(1.05)',
            boxShadow: `0 14px 28px ${alpha(service.accent, 0.18)}`,
          },
          '&:hover .expertise-title': {
            color: service.accent,
          },
          '&:hover .expertise-arrow': {
            transform: 'translateX(4px)',
            opacity: 1,
          },
          '&:hover .expertise-chip': {
            background: alpha(service.accent, 0.12),
          },
        }}
      >
        <Box
          sx={{
            p: { xs: 2.2, sm: 2.5, md: 2.8 },
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
              mb: 2.1,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 700,
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  color: 'rgba(15,23,42,0.26)',
                  mb: 1.1,
                }}
              >
                {service.num}
              </Typography>

              <Typography
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 600,
                  fontSize: '0.72rem',
                  color: service.accent,
                  letterSpacing: '0.03em',
                }}
              >
                {service.short}
              </Typography>
            </Box>

            <Box
              className="expertise-icon"
              sx={{
                width: { xs: 46, md: 52 },
                height: { xs: 46, md: 52 },
                flexShrink: 0,
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: service.iconBg,
                color: '#fff',
                boxShadow: `0 10px 20px ${alpha(service.accent, 0.14)}`,
                transition: 'transform .26s ease, box-shadow .26s ease',
                '& .MuiSvgIcon-root': {
                  fontSize: { xs: 22, md: 24 },
                },
              }}
            >
              <Icon />
            </Box>
          </Box>

          {/* Title */}
          <Typography
            className="expertise-title"
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
            {service.title}
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 400,
              fontSize: '0.89rem',
              color: '#64748b',
              lineHeight: 1.72,
              mb: 1.8,
              flex: 1,
              display: '-webkit-box',
              WebkitLineClamp: 4,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {service.desc}
          </Typography>

          {/* Feature chips */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 0.55,
              mb: 2.1,
            }}
          >
            {service.features.map((feature) => (
              <Box
                key={feature}
                className="expertise-chip"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.4,
                  px: 0.85,
                  py: 0.28,
                  borderRadius: '7px',
                  background: accentSoft,
                  border: `1px solid ${accentBorder}`,
                  transition: 'background .24s ease',
                }}
              >
                <CheckCircleRounded
                  sx={{
                    fontSize: 11,
                    color: service.accent,
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.68rem',
                    fontWeight: 500,
                    color: '#475569',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {feature}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Footer CTA */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              pt: 1.7,
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
              Know More
            </Typography>

            <Box
              className="expertise-arrow"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: service.accent,
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
const HomeExpertiseSection: React.FC = () => {
  return (
    <>
      <ExpertiseStyles />

      <Box
        component="section"
        id="expertise"
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
            right: '-8%',
            width: 320,
            height: 320,
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
            left: '-8%',
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
              className="expertise-fade"
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
                Our Expertise
              </Typography>
            </Box>

            <Typography
              className="expertise-fade"
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
              What we
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
                specialize in
              </Box>
            </Typography>

            <Typography
              className="expertise-fade"
              sx={{
                fontFamily: '"Inter", sans-serif',
                fontWeight: 400,
                fontSize: { xs: '0.98rem', md: '1.05rem' },
                color: '#64748b',
                lineHeight: 1.8,
                maxWidth: 640,
                mx: 'auto',
                animationDelay: '.16s',
              }}
            >
              From growth marketing and lead generation to CRM, SaaS, web, and
              app development — we deliver services designed for measurable business impact.
            </Typography>
          </Box>

          {/* Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, minmax(0, 1fr))',
                lg: 'repeat(3, minmax(0, 1fr))',
                xl: 'repeat(4, minmax(0, 1fr))',
              },
              gap: { xs: 2, md: 2.5, lg: 3 },
            }}
          >
            {services.map((service, index) => (
              <ExpertiseCard
                key={service.num}
                service={service}
                index={index}
              />
            ))}
          </Box>

          {/* CTA */}
          <Box
            className="expertise-fade"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: { xs: 6, md: 7 },
              animationDelay: '.28s',
            }}
          >
            <Link href="/expertise" style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.1,
                  px: { xs: 2.7, md: 3.1 },
                  py: { xs: 1.15, md: 1.25 },
                  borderRadius: '14px',
                  color: '#fff',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                  boxShadow: '0 10px 24px rgba(37,99,235,0.22)',
                  transition: 'transform .26s ease, box-shadow .26s ease, background .26s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 14px 28px rgba(37,99,235,0.28)',
                    background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 700,
                    fontSize: { xs: '0.88rem', md: '0.92rem' },
                    color: 'inherit',
                  }}
                >
                  Explore All Services
                </Typography>

                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: '9px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255,255,255,0.16)',
                  }}
                >
                  <ArrowForwardRounded sx={{ fontSize: 18, color: '#fff' }} />
                </Box>
              </Box>
            </Link>
          </Box>

          {/* Trust line */}
          <Box
            className="expertise-fade"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: { xs: 1.4, sm: 2 },
              mt: { xs: 3.5, md: 4 },
              flexWrap: 'wrap',
              animationDelay: '.34s',
            }}
          >
            {trustItems.map((item, index) => (
              <Box
                key={item}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.6,
                }}
              >
                <Box
                  sx={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    background:
                      index === 0 ? '#2563eb' : index === 1 ? '#0f766e' : '#7c3aed',
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 500,
                    fontSize: { xs: '0.74rem', md: '0.8rem' },
                    color: 'rgba(15,23,42,0.46)',
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HomeExpertiseSection;