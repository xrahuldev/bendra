'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material';
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
  AutoAwesomeRounded,
  RocketLaunchRounded,
  SupportAgentRounded,
  SpeedRounded,
} from '@mui/icons-material';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/* ─── Styles ──────────────────────────────────────────────── */
const ExpertisePageStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=Outfit:wght@300;400;500;600&display=swap');

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(22px); }
      to   { opacity: 1; transform: translateY(0); }
    }

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

    @keyframes floatBadge {
      0%, 100% { transform: translateY(0); }
      50%       { transform: translateY(-6px); }
    }

    @keyframes dotDrift {
      0%, 100% { transform: translateY(0); opacity: .18; }
      50%       { transform: translateY(-7px); opacity: .32; }
    }

    .ep-header   { animation: fadeUp .7s cubic-bezier(.16,1,.3,1) .05s both; }
    .ep-sub      { animation: textIn .7s cubic-bezier(.16,1,.3,1) .15s both; }
    .ep-glow     { animation: glowPulse 5s ease-in-out infinite; }
    .ep-dots     { animation: dotDrift 7s ease-in-out infinite; }

    /* ── Service Card ── */
    .ep-card {
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
    }

    .ep-card::after {
      content: '';
      position: absolute;
      top: 0; left: 0;
      width: 38%; height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,.12), transparent);
      transform: translateX(-120%) skewX(-18deg);
      pointer-events: none;
      z-index: 9;
    }

    .ep-card-bar   { transition: height .28s ease; }
    .ep-card-icon  { transition: transform .32s cubic-bezier(.34,1.4,.64,1), box-shadow .32s ease; }
    .ep-card-num   { transition: color .25s ease, transform .25s ease; }
    .ep-card-title { transition: color .25s ease; }
    .ep-card-arrow { transition: opacity .25s ease, gap .25s ease, transform .25s ease; }
    .ep-card-chip  { transition: background .25s ease, transform .25s ease; }

    @media (hover: hover) {
      .ep-card:hover {
        transform: translateY(-8px) scale(1.015);
        border-color: var(--ep-accent-border) !important;
        box-shadow: 0 20px 44px var(--ep-shadow-strong) !important;
      }
      .ep-card:hover::after     { animation: shimmer .65s ease-out forwards; }
      .ep-card:hover .ep-card-bar   { height: 4px !important; }
      .ep-card:hover .ep-card-icon  {
        transform: scale(1.1) rotate(-5deg);
        box-shadow: 0 10px 28px var(--ep-shadow-strong) !important;
      }
      .ep-card:hover .ep-card-num   { color: var(--ep-accent) !important; transform: scale(1.08); }
      .ep-card:hover .ep-card-title { color: var(--ep-accent) !important; }
      .ep-card:hover .ep-card-arrow { opacity: 1 !important; gap: 10px !important; }
      .ep-card:hover .ep-card-glow  { opacity: 1; }
      .ep-card:hover .ep-card-chip  { background: var(--ep-accent-soft) !important; transform: translateY(-1px); }
    }

    @media (hover: none) {
      .ep-card:active { transform: scale(.97); }
    }

    /* ── Why Us Card ── */
    .ep-why-card {
      transition: transform .32s cubic-bezier(.34,1.4,.64,1),
                  box-shadow .32s ease,
                  border-color .28s ease;
      -webkit-tap-highlight-color: transparent;
    }

    @media (hover: hover) {
      .ep-why-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 16px 36px rgba(14,31,64,.08) !important;
        border-color: rgba(14,90,240,.15) !important;
      }
      .ep-why-card:hover .ep-why-icon {
        transform: scale(1.1) rotate(-5deg);
      }
    }

    .ep-why-icon {
      transition: transform .32s cubic-bezier(.34,1.4,.64,1);
    }

    /* ── CTA Section ── */
    .ep-cta-btn {
      transition: transform .28s cubic-bezier(.34,1.4,.64,1),
                  box-shadow .28s ease !important;
      -webkit-tap-highlight-color: transparent;
    }
    @media (hover: hover) {
      .ep-cta-btn:hover {
        transform: translateY(-3px) scale(1.02) !important;
        box-shadow: 0 12px 32px rgba(14,90,240,.4) !important;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .ep-header,.ep-sub,.ep-glow,.ep-dots,
      .ep-card,.ep-card-bar,.ep-card-icon,.ep-card-num,
      .ep-card-title,.ep-card-arrow,.ep-card-chip,
      .ep-why-card,.ep-why-icon,.ep-cta-btn {
        animation: none !important;
        transition: none !important;
      }
    }
  `}</style>
);

/* ─── Services Data ──────────────────────────────────────── */
const services = [
  {
    icon: <TrendingUpRounded />,
    num: '01',
    title: 'SEO',
    short: 'Search Engine Optimization',
    desc: "Improve your website's online visibility and attract more organic traffic with expert keyword research, on-page optimization, and link building.",
    href: '/expertise/seo',
    features: ['Keyword Research', 'On-page SEO', 'Link Building', 'Technical Audit'],
    accent: '#10b981',
    accentBorder: 'rgba(16,185,129,.2)',
    accentSoft: 'rgba(16,185,129,.08)',
    shadowStrong: 'rgba(16,185,129,.14)',
    iconBg: 'linear-gradient(135deg, #10b981, #059669)',
    bar: 'linear-gradient(90deg, #10b981, #34d399)',
  },
  {
    icon: <CampaignRounded />,
    num: '02',
    title: 'Social Media Marketing',
    short: 'Engage. Grow. Convert.',
    desc: "Expand your brand's reach and engage with your target audience through expert strategy, compelling content, and data-driven results.",
    href: '/expertise/social-media-marketing',
    features: ['Content Strategy', 'Paid Campaigns', 'Analytics', 'Brand Growth'],
    accent: '#ec4899',
    accentBorder: 'rgba(236,72,153,.2)',
    accentSoft: 'rgba(236,72,153,.08)',
    shadowStrong: 'rgba(236,72,153,.14)',
    iconBg: 'linear-gradient(135deg, #ec4899, #db2777)',
    bar: 'linear-gradient(90deg, #ec4899, #f472b6)',
  },
  {
    icon: <CodeRounded />,
    num: '03',
    title: 'Website Development',
    short: 'Modern. Fast. Scalable.',
    desc: 'Create a professional website with responsive design, fast performance, easy navigation, and user-friendly features tailored to your needs.',
    href: '/expertise/website-development',
    features: ['Responsive Design', 'Fast Performance', 'SEO-Ready', 'CMS Integration'],
    accent: '#3b82f6',
    accentBorder: 'rgba(59,130,246,.2)',
    accentSoft: 'rgba(59,130,246,.08)',
    shadowStrong: 'rgba(59,130,246,.14)',
    iconBg: 'linear-gradient(135deg, #3b82f6, #2563eb)',
    bar: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
  },
  {
    icon: <GroupAddRounded />,
    num: '04',
    title: 'LinkedIn Lead Generation',
    short: 'B2B Growth Engine',
    desc: 'Generate high-quality leads and grow your business network with targeted outreach, customized messaging, and data-driven results.',
    href: '/expertise/linkedin-lead-generation',
    features: ['Targeted Outreach', 'Custom Messaging', 'CRM Sync', 'Analytics'],
    accent: '#0ea5e9',
    accentBorder: 'rgba(14,165,233,.2)',
    accentSoft: 'rgba(14,165,233,.08)',
    shadowStrong: 'rgba(14,165,233,.14)',
    iconBg: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
    bar: 'linear-gradient(90deg, #0ea5e9, #38bdf8)',
  },
  {
    icon: <FilterAltRounded />,
    num: '05',
    title: 'Sales Funnel',
    short: 'Optimize. Convert. Scale.',
    desc: 'Optimize your sales process and improve conversions with expertly designed funnel strategies, lead capture forms, and automated follow-up.',
    href: '/expertise/sales-funnel',
    features: ['Lead Capture', 'Automation', 'Conversion Opt.', 'A/B Testing'],
    accent: '#f59e0b',
    accentBorder: 'rgba(245,158,11,.2)',
    accentSoft: 'rgba(245,158,11,.08)',
    shadowStrong: 'rgba(245,158,11,.14)',
    iconBg: 'linear-gradient(135deg, #f59e0b, #d97706)',
    bar: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
  },
  {
    icon: <StorageRounded />,
    num: '06',
    title: 'CRM Development',
    short: 'Smart Customer Management',
    desc: 'Streamline customer management with customized CRM solutions, automated workflows, and enhanced customer relationships.',
    href: '/expertise/crm-development',
    features: ['Custom Workflows', 'Integrations', 'Reporting', 'Automation'],
    accent: '#ef4444',
    accentBorder: 'rgba(239,68,68,.2)',
    accentSoft: 'rgba(239,68,68,.08)',
    shadowStrong: 'rgba(239,68,68,.14)',
    iconBg: 'linear-gradient(135deg, #ef4444, #dc2626)',
    bar: 'linear-gradient(90deg, #ef4444, #f87171)',
  },
  {
    icon: <PhoneIphoneRounded />,
    num: '07',
    title: 'Mobile UI/UX Design',
    short: 'Beautiful. Intuitive. Fast.',
    desc: 'Improve user experience and engagement on mobile devices with expert design, efficient code, and intuitive features.',
    href: '/expertise/ui-ux-design',
    features: ['Wireframes', 'Prototyping', 'User Testing', 'Design Systems'],
    accent: '#a855f7',
    accentBorder: 'rgba(168,85,247,.2)',
    accentSoft: 'rgba(168,85,247,.08)',
    shadowStrong: 'rgba(168,85,247,.14)',
    iconBg: 'linear-gradient(135deg, #a855f7, #9333ea)',
    bar: 'linear-gradient(90deg, #a855f7, #c084fc)',
  },
  {
    icon: <AppShortcutRounded />,
    num: '08',
    title: 'Flutter App Development',
    short: 'Cross-Platform Excellence',
    desc: 'Build high-performance, cross-platform mobile apps with expert design, efficient code, and reliable native performance.',
    href: '/expertise/flutter-app-development',
    features: ['iOS + Android', 'Native Feel', 'Single Codebase', 'Fast Delivery'],
    accent: '#06b6d4',
    accentBorder: 'rgba(6,182,212,.2)',
    accentSoft: 'rgba(6,182,212,.08)',
    shadowStrong: 'rgba(6,182,212,.14)',
    iconBg: 'linear-gradient(135deg, #06b6d4, #0891b2)',
    bar: 'linear-gradient(90deg, #06b6d4, #22d3ee)',
  },
  {
    icon: <Inventory2Outlined />,
    num: '09',
    title: 'Zoho Development',
    short: 'Zoho One. Customized.',
    desc: 'Expert Zoho CRM, Creator & Books implementation, customization, and integration tailored to your business workflows.',
    href: '/expertise/zoho-development',
    features: ['Zoho CRM', 'Zoho Creator', 'Custom Apps', 'Integrations'],
    accent: '#2563eb',
    accentBorder: 'rgba(37,99,235,.2)',
    accentSoft: 'rgba(37,99,235,.08)',
    shadowStrong: 'rgba(37,99,235,.14)',
    iconBg: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
    bar: 'linear-gradient(90deg, #2563eb, #60a5fa)',
  },
  {
    icon: <IntegrationInstructionsOutlined />,
    num: '10',
    title: 'Salesforce Development',
    short: 'Enterprise-Grade Solutions',
    desc: 'Salesforce CRM setup, Apex development, Lightning components, and third-party integrations for enterprise solutions.',
    href: '/expertise/salesforce-development',
    features: ['Apex & Lightning', 'Integrations', 'Custom Objects', 'Reporting'],
    accent: '#7c3aed',
    accentBorder: 'rgba(124,58,237,.2)',
    accentSoft: 'rgba(124,58,237,.08)',
    shadowStrong: 'rgba(124,58,237,.14)',
    iconBg: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
    bar: 'linear-gradient(90deg, #7c3aed, #a78bfa)',
  },
  {
    icon: <CloudOutlined />,
    num: '11',
    title: 'SaaS Solutions',
    short: 'Cloud-First. Subscription-Ready.',
    desc: 'Scalable SaaS applications with subscription models, multi-tenancy, and cloud-first architecture for real business problems.',
    href: '/expertise/saas-solutions',
    features: ['Multi-Tenant', 'Subscription', 'Cloud Native', 'Scalable'],
    accent: '#14b8a6',
    accentBorder: 'rgba(20,184,166,.2)',
    accentSoft: 'rgba(20,184,166,.08)',
    shadowStrong: 'rgba(20,184,166,.14)',
    iconBg: 'linear-gradient(135deg, #14b8a6, #0d9488)',
    bar: 'linear-gradient(90deg, #14b8a6, #2dd4bf)',
  },
];

/* ─── Why Choose Us Data ─────────────────────────────────── */
const whyUs = [
  {
    icon: <AutoAwesomeRounded />,
    title: 'Tailored Solutions',
    desc: 'Every project is custom-built to match your unique business needs and objectives.',
    accent: '#0e5af0',
    iconBg: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
  },
  {
    icon: <RocketLaunchRounded />,
    title: 'Fast Delivery',
    desc: 'Agile development processes ensure your projects are delivered on time, every time.',
    accent: '#7c3aed',
    iconBg: 'linear-gradient(135deg, #ede9fe, #ddd6fe)',
  },
  {
    icon: <SupportAgentRounded />,
    title: 'Dedicated Support',
    desc: 'Our team provides ongoing support and maintenance to keep your systems running smoothly.',
    accent: '#10b981',
    iconBg: 'linear-gradient(135deg, #d1fae5, #a7f3d0)',
  },
  {
    icon: <SpeedRounded />,
    title: 'Proven Results',
    desc: '250+ successful projects delivered with 98% client satisfaction across multiple industries.',
    accent: '#f59e0b',
    iconBg: 'linear-gradient(135deg, #fef3c7, #fde68a)',
  },
];

/* ─── Component ──────────────────────────────────────────── */
const ExpertisePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmall = useMediaQuery('(max-width:360px)');

  return (
    <>
      <ExpertisePageStyles />
      <Navbar />

      {/* ═══════════════════════════════════════════════════
          SECTION 1 — Hero
      ═══════════════════════════════════════════════════ */}
      <Box
        sx={{
          position: 'relative',
          pt: { xs: 14, sm: 15, md: 17 },
          pb: { xs: 7, sm: 8, md: 10 },
          background: 'linear-gradient(170deg, #060f25 0%, #0b1a3e 55%, #081530 100%)',
          overflow: 'hidden',
        }}
      >
        {/* Animated dots */}
        <Box
          className="ep-dots"
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            backgroundImage:
              'radial-gradient(circle, rgba(99,179,237,.45) 1px, transparent 1px)',
            backgroundSize: '18px 18px',
            maskImage:
              'radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 100%)',
            opacity: 0.18,
            pointerEvents: 'none',
          }}
        />

        {/* Glow spheres */}
        <Box
          sx={{
            position: 'absolute',
            top: '-15%',
            right: '-8%',
            width: { xs: 300, md: 450 },
            height: { xs: 300, md: 450 },
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(14,90,240,.25), transparent 68%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '-10%',
            left: '-5%',
            width: { xs: 250, md: 380 },
            height: { xs: 250, md: 380 },
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,58,237,.15), transparent 68%)',
            filter: 'blur(55px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Dark overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            background: 'linear-gradient(180deg, rgba(6,15,37,.6) 0%, rgba(6,15,37,.85) 100%)',
          }}
        />

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2, px: { xs: 2, sm: 3, md: 5 } }}>
          <Box
            className="ep-header"
            sx={{
              textAlign: 'center',
              maxWidth: 800,
              mx: 'auto',
            }}
          >
            {/* Pill */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 1.8,
                py: 0.7,
                mb: 3,
                borderRadius: '999px',
                border: '1px solid rgba(99,179,237,.22)',
                background: 'rgba(14,90,240,.1)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <Box
                sx={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: '#63b3ed',
                  boxShadow: '0 0 10px rgba(99,179,237,.9)',
                }}
              />
              <Typography
                sx={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  fontSize: '.7rem',
                  color: '#90cdf4',
                  textTransform: 'uppercase',
                  letterSpacing: '.15em',
                }}
              >
                Our Expertise
              </Typography>
            </Box>

            {/* Heading */}
            <Typography
              component="h1"
              sx={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 800,
                fontSize: {
                  xs: isSmall ? '1.6rem' : '1.85rem',
                  sm: '2.3rem',
                  md: '2.9rem',
                  lg: '3.4rem',
                },
                lineHeight: 1.1,
                letterSpacing: '-.035em',
                color: '#fff',
                mb: 2,
              }}
            >
              Full-spectrum digital{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(90deg, #60a5fa, #a78bfa, #60a5fa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                expertise
              </Box>
            </Typography>

            {/* Sub */}
            <Typography
              className="ep-sub"
              sx={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 400,
                fontSize: { xs: '.88rem', sm: '.94rem', md: '1.05rem' },
                color: 'rgba(255,255,255,.6)',
                lineHeight: 1.8,
                maxWidth: 600,
                mx: 'auto',
                px: { xs: 1, sm: 0 },
              }}
            >
              From SEO and social media marketing to enterprise CRM development
              and SaaS solutions — we deliver end-to-end digital services that
              drive real business results.
            </Typography>

            {/* Stats row */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: { xs: 3, sm: 5, md: 7 },
                mt: { xs: 4, md: 5 },
                flexWrap: 'wrap',
              }}
            >
              {[
                { num: '11+', label: 'Services' },
                { num: '250+', label: 'Projects' },
                { num: '98%', label: 'Satisfaction' },
              ].map((stat) => (
                <Box key={stat.label} sx={{ textAlign: 'center' }}>
                  <Typography
                    sx={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontWeight: 800,
                      fontSize: { xs: '1.6rem', md: '2rem' },
                      color: '#fff',
                      lineHeight: 1,
                      mb: 0.3,
                    }}
                  >
                    {stat.num}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 400,
                      fontSize: { xs: '.72rem', md: '.78rem' },
                      color: 'rgba(255,255,255,.4)',
                      letterSpacing: '.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ═══════════════════════════════════════════════════
          SECTION 2 — All Services
      ═══════════════════════════════════════════════════ */}
      <Box
        sx={{
          position: 'relative',
          py: { xs: 7, sm: 8, md: 10 },
          background: '#ffffff',
          overflow: 'hidden',
        }}
      >
        {/* Dot grid */}
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

        {/* Blobs */}
        <Box
          className="ep-glow"
          sx={{
            position: 'absolute',
            top: '-8%',
            right: '-6%',
            width: { xs: 260, sm: 340, md: 400 },
            height: { xs: 260, sm: 340, md: 400 },
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(14,90,240,.06), transparent 68%)',
            filter: 'blur(55px)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
        <Box
          className="ep-glow"
          sx={{
            position: 'absolute',
            bottom: '-8%',
            left: '-6%',
            width: { xs: 220, sm: 280, md: 340 },
            height: { xs: 220, sm: 280, md: 340 },
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,58,237,.05), transparent 68%)',
            filter: 'blur(50px)',
            pointerEvents: 'none',
            zIndex: 0,
            animationDelay: '1.8s',
          }}
        />

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2, px: { xs: 2, sm: 3, md: 5 } }}>
          {/* Section header */}
          <Box sx={{ textAlign: 'center', mb: { xs: 5, sm: 5.5, md: 7 }, maxWidth: 700, mx: 'auto' }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 1.8,
                py: 0.75,
                mb: 2.5,
                borderRadius: '999px',
                border: '1.5px solid rgba(14,90,240,.18)',
                background: 'rgba(14,90,240,.05)',
              }}
            >
              <Box
                sx={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: '#0e5af0',
                  boxShadow: '0 0 0 3px rgba(14,90,240,.18)',
                }}
              />
              <Typography
                sx={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  fontSize: '.7rem',
                  color: '#0e5af0',
                  textTransform: 'uppercase',
                  letterSpacing: '.15em',
                }}
              >
                All Services
              </Typography>
            </Box>

            <Typography
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
              Everything you need to{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(90deg, #0e5af0, #00a1e0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                grow digitally
              </Box>
            </Typography>

            <Typography
              sx={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 400,
                fontSize: { xs: '.88rem', sm: '.92rem', md: '1rem' },
                color: 'rgba(11,24,54,.55)',
                lineHeight: 1.8,
                maxWidth: 560,
                mx: 'auto',
                px: { xs: 1, sm: 0 },
              }}
            >
              Explore our comprehensive range of digital services designed
              to help businesses of all sizes achieve measurable results.
            </Typography>
          </Box>

          {/* Cards Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                xl: 'repeat(4, 1fr)',
              },
              gap: { xs: 2, sm: 2.4, md: 2.8 },
            }}
          >
            {services.map((svc, i) => (
              <Link key={svc.num} href={svc.href} style={{ textDecoration: 'none', display: 'block' }}>
                <Box
                  className="ep-card"
                  sx={{
                    '--ep-accent': svc.accent,
                    '--ep-accent-border': svc.accentBorder,
                    '--ep-accent-soft': svc.accentSoft,
                    '--ep-shadow-strong': svc.shadowStrong,
                    height: '100%',
                    animation: `cardIn .65s cubic-bezier(.16,1,.3,1) ${.08 + i * .05}s both`,
                  }}
                >
                  {/* Top bar */}
                  <Box
                    className="ep-card-bar"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: svc.bar,
                      borderRadius: '22px 22px 0 0',
                      zIndex: 2,
                    }}
                  />

                  {/* Hover glow */}
                  <Box
                    className="ep-card-glow"
                    sx={{
                      position: 'absolute',
                      top: '-25%',
                      left: '15%',
                      right: '15%',
                      height: '55%',
                      borderRadius: '50%',
                      background: `radial-gradient(ellipse, ${svc.accent}0a, transparent 70%)`,
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
                      p: { xs: 2.2, sm: 2.5, md: 3 },
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {/* Num + Icon */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        mb: { xs: 2, md: 2.4 },
                        mt: 0.4,
                      }}
                    >
                      <Typography
                        className="ep-card-num"
                        sx={{
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontWeight: 800,
                          fontSize: '.72rem',
                          color: 'rgba(14,31,64,.22)',
                          letterSpacing: '.12em',
                          pt: 0.4,
                        }}
                      >
                        {svc.num}
                      </Typography>

                      <Box
                        className="ep-card-icon"
                        sx={{
                          width: { xs: 44, sm: 48, md: 52 },
                          height: { xs: 44, sm: 48, md: 52 },
                          borderRadius: '14px',
                          background: svc.iconBg,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: `0 6px 18px ${svc.shadowStrong}`,
                          flexShrink: 0,
                          '& .MuiSvgIcon-root': {
                            fontSize: { xs: 20, sm: 22, md: 24 },
                            color: '#fff',
                          },
                        }}
                      >
                        {svc.icon}
                      </Box>
                    </Box>

                    {/* Title */}
                    <Typography
                      className="ep-card-title"
                      sx={{
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontWeight: 700,
                        fontSize: { xs: '.95rem', sm: '1rem', md: '1.07rem' },
                        color: '#0b1836',
                        lineHeight: 1.28,
                        letterSpacing: '-.015em',
                        mb: 0.35,
                      }}
                    >
                      {svc.title}
                    </Typography>

                    {/* Short */}
                    <Typography
                      sx={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 500,
                        fontSize: { xs: '.68rem', md: '.72rem' },
                        color: svc.accent,
                        letterSpacing: '.02em',
                        mb: { xs: 1.2, md: 1.5 },
                      }}
                    >
                      {svc.short}
                    </Typography>

                    {/* Desc */}
                    <Typography
                      sx={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 400,
                        fontSize: { xs: '.82rem', sm: '.84rem', md: '.88rem' },
                        color: 'rgba(11,24,54,.54)',
                        lineHeight: 1.72,
                        mb: { xs: 1.5, md: 1.8 },
                        flex: 1,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {svc.desc}
                    </Typography>

                    {/* Chips */}
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: { xs: 0.4, md: 0.5 },
                        mb: { xs: 1.8, md: 2.4 },
                      }}
                    >
                      {svc.features.map((f) => (
                        <Box
                          key={f}
                          className="ep-card-chip"
                          sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 0.35,
                            px: { xs: 0.75, md: 0.9 },
                            py: { xs: 0.2, md: 0.25 },
                            borderRadius: '6px',
                            background: svc.accentSoft,
                            border: `1px solid ${svc.accentBorder}`,
                          }}
                        >
                          <CheckCircleRounded
                            sx={{
                              fontSize: { xs: 9, md: 10 },
                              color: svc.accent,
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            sx={{
                              fontFamily: "'Outfit', sans-serif",
                              fontSize: { xs: '.62rem', md: '.67rem' },
                              fontWeight: 500,
                              color: '#475569',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {f}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    {/* Arrow */}
                    <Box
                      className="ep-card-arrow"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        opacity: 0.3,
                        color: svc.accent,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: 600,
                          fontSize: { xs: '.76rem', md: '.8rem' },
                          letterSpacing: '.03em',
                          color: 'inherit',
                        }}
                      >
                        Learn More
                      </Typography>
                      <NorthEast sx={{ fontSize: 14, color: 'inherit' }} />
                    </Box>
                  </Box>
                </Box>
              </Link>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ═══════════════════════════════════════════════════
          SECTION 3 — Why Choose Us
      ═══════════════════════════════════════════════════ */}
      <Box
        sx={{
          position: 'relative',
          py: { xs: 7, sm: 8, md: 10 },
          background: 'linear-gradient(170deg, #f0f5ff 0%, #f6f9ff 35%, #ffffff 100%)',
          overflow: 'hidden',
          borderTop: '1px solid rgba(14,31,64,.06)',
          borderBottom: '1px solid rgba(14,31,64,.06)',
        }}
      >
        {/* Dot grid */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 0,
            backgroundImage:
              'radial-gradient(circle, rgba(14,31,64,.04) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            maskImage:
              'radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)',
          }}
        />

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2, px: { xs: 2, sm: 3, md: 5 } }}>
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 6 }, maxWidth: 600, mx: 'auto' }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 1.8,
                py: 0.75,
                mb: 2.5,
                borderRadius: '999px',
                border: '1.5px solid rgba(14,90,240,.18)',
                background: 'rgba(14,90,240,.05)',
              }}
            >
              <Box
                sx={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: '#0e5af0',
                  boxShadow: '0 0 0 3px rgba(14,90,240,.18)',
                }}
              />
              <Typography
                sx={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  fontSize: '.7rem',
                  color: '#0e5af0',
                  textTransform: 'uppercase',
                  letterSpacing: '.15em',
                }}
              >
                Why Choose Us
              </Typography>
            </Box>

            <Typography
              component="h2"
              sx={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 800,
                fontSize: {
                  xs: isSmall ? '1.5rem' : '1.7rem',
                  sm: '2rem',
                  md: '2.4rem',
                },
                lineHeight: 1.15,
                letterSpacing: '-.028em',
                color: '#0b1836',
                mb: 1.5,
              }}
            >
              Built for{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(90deg, #0e5af0, #00a1e0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                your success
              </Box>
            </Typography>

            <Typography
              sx={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 400,
                fontSize: { xs: '.88rem', md: '.96rem' },
                color: 'rgba(11,24,54,.52)',
                lineHeight: 1.78,
                maxWidth: 500,
                mx: 'auto',
              }}
            >
              We combine technical expertise with business understanding
              to deliver solutions that actually work.
            </Typography>
          </Box>

          {/* Cards */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)',
              },
              gap: { xs: 2, sm: 2.4, md: 2.8 },
            }}
          >
            {whyUs.map((item, i) => (
              <Box
                key={item.title}
                className="ep-why-card"
                sx={{
                  borderRadius: { xs: '18px', md: '22px' },
                  border: '1.5px solid rgba(14,31,64,.08)',
                  background: '#fff',
                  boxShadow: '0 2px 14px rgba(14,31,64,.04)',
                  p: { xs: 2.5, sm: 2.8, md: 3 },
                  textAlign: 'center',
                  animation: `cardIn .65s cubic-bezier(.16,1,.3,1) ${.1 + i * .08}s both`,
                }}
              >
                {/* Icon */}
                <Box
                  className="ep-why-icon"
                  sx={{
                    width: { xs: 52, md: 58 },
                    height: { xs: 52, md: 58 },
                    borderRadius: '16px',
                    background: item.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                    '& .MuiSvgIcon-root': {
                      fontSize: { xs: 24, md: 26 },
                      color: item.accent,
                    },
                  }}
                >
                  {item.icon}
                </Box>

                <Typography
                  sx={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 700,
                    fontSize: { xs: '1rem', md: '1.08rem' },
                    color: '#0b1836',
                    mb: 1,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 400,
                    fontSize: { xs: '.84rem', md: '.88rem' },
                    color: 'rgba(11,24,54,.5)',
                    lineHeight: 1.7,
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ═══════════════════════════════════════════════════
          SECTION 4 — CTA
      ═══════════════════════════════════════════════════ */}
      <Box
        sx={{
          position: 'relative',
          py: { xs: 7, sm: 8, md: 10 },
          background: 'linear-gradient(145deg, #060f25 0%, #0b1a3e 55%, #081530 100%)',
          overflow: 'hidden',
        }}
      >
        {/* Dots */}
        <Box
          className="ep-dots"
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            backgroundImage:
              'radial-gradient(circle, rgba(99,179,237,.4) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            maskImage:
              'radial-gradient(ellipse 60% 50% at 50% 50%, black 20%, transparent 100%)',
            opacity: 0.15,
            pointerEvents: 'none',
          }}
        />

        {/* Glow */}
        <Box
          sx={{
            position: 'absolute',
            top: '-20%',
            left: '30%',
            width: { xs: 300, md: 450 },
            height: { xs: 300, md: 450 },
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(14,90,240,.2), transparent 68%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2, px: { xs: 2, sm: 3, md: 5 } }}>
          <Box
            sx={{
              textAlign: 'center',
              maxWidth: 650,
              mx: 'auto',
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 800,
                fontSize: {
                  xs: isSmall ? '1.5rem' : '1.7rem',
                  sm: '2.1rem',
                  md: '2.5rem',
                },
                lineHeight: 1.15,
                letterSpacing: '-.03em',
                color: '#fff',
                mb: 2,
              }}
            >
              Ready to start your{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(90deg, #60a5fa, #a78bfa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                next project?
              </Box>
            </Typography>

            <Typography
              sx={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 400,
                fontSize: { xs: '.88rem', md: '.98rem' },
                color: 'rgba(255,255,255,.55)',
                lineHeight: 1.78,
                mb: { xs: 3.5, md: 4 },
                maxWidth: 500,
                mx: 'auto',
              }}
            >
              Let&apos;s discuss how our expertise can help you achieve
              your business goals. Get in touch today.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'center',
                gap: { xs: 1.5, sm: 2 },
              }}
            >
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  fullWidth={isMobile}
                  endIcon={
                    <ArrowForwardRounded sx={{ fontSize: '1rem !important' }} />
                  }
                  className="ep-cta-btn"
                  sx={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    background: 'linear-gradient(90deg, #0e5af0, #2563eb)',
                    color: '#fff',
                    textTransform: 'none',
                    fontWeight: 700,
                    fontSize: { xs: '.88rem', md: '.94rem' },
                    letterSpacing: '.02em',
                    px: { xs: 3, md: 3.5 },
                    py: { xs: 1.3, md: 1.4 },
                    borderRadius: '14px',
                    boxShadow: '0 6px 24px rgba(14,90,240,.35)',
                    minWidth: { xs: '100%', sm: 'auto' },
                  }}
                >
                  Get a Free Quote
                </Button>
              </Link>

              <Link href="/portfolio" style={{ textDecoration: 'none' }}>
                <Button
                  variant="outlined"
                  fullWidth={isMobile}
                  endIcon={
                    <NorthEast sx={{ fontSize: '.9rem !important' }} />
                  }
                  sx={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    color: '#fff',
                    borderColor: 'rgba(255,255,255,.22)',
                    textTransform: 'none',
                    fontWeight: 700,
                    fontSize: { xs: '.88rem', md: '.94rem' },
                    letterSpacing: '.02em',
                    px: { xs: 3, md: 3.5 },
                    py: { xs: 1.3, md: 1.4 },
                    borderRadius: '14px',
                    backdropFilter: 'blur(8px)',
                    background: 'rgba(255,255,255,.04)',
                    minWidth: { xs: '100%', sm: 'auto' },
                    transition: 'all .3s ease',
                    '&:hover': {
                      borderColor: 'rgba(255,255,255,.4)',
                      background: 'rgba(255,255,255,.08)',
                    },
                  }}
                >
                  View Our Work
                </Button>
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default ExpertisePage;