'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
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
} from '@mui/icons-material';
import Link from 'next/link';

/* ─── Styles ──────────────────────────────────────────────── */
const ExpertiseSectionStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=Outfit:wght@300;400;500;600&display=swap');

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

    @keyframes btnShimmer {
      0%   { transform: translateX(-100%) skewX(-20deg); }
      100% { transform: translateX(300%) skewX(-20deg); }
    }

    @keyframes btnGlow {
      0%, 100% { box-shadow: 0 4px 20px rgba(14,90,240,.3), 0 0 0 0 rgba(14,90,240,.2); }
      50%       { box-shadow: 0 6px 28px rgba(14,90,240,.45), 0 0 0 8px rgba(14,90,240,0); }
    }

    @keyframes borderFlow {
      0%   { background-position: 0% 50%; }
      50%  { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .exp-pill  { animation: textIn .55s cubic-bezier(.16,1,.3,1) both; }
    .exp-h2    { animation: textIn .7s  cubic-bezier(.16,1,.3,1) .08s both; }
    .exp-sub   { animation: textIn .7s  cubic-bezier(.16,1,.3,1) .16s both; }
    .exp-glow  { animation: glowPulse 5s ease-in-out infinite; }

    /* ── Card ── */
    .esc {
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
      display: block;
      text-decoration: none;
      color: inherit;
    }

    .esc::after {
      content: '';
      position: absolute;
      top: 0; left: 0;
      width: 38%; height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,.12), transparent);
      transform: translateX(-120%) skewX(-18deg);
      pointer-events: none;
      z-index: 9;
    }

    .esc-bar     { transition: height .28s ease; }
    .esc-icon    { transition: transform .32s cubic-bezier(.34,1.4,.64,1), box-shadow .32s ease; }
    .esc-num     { transition: color .25s ease, transform .25s ease; }
    .esc-title   { transition: color .25s ease; }
    .esc-arrow   { transition: opacity .25s ease, gap .25s ease, transform .25s ease; }
    .esc-chip    { transition: background .25s ease, transform .25s ease; }
    .esc-img     { transition: opacity .4s ease, transform .6s ease; }

    @media (hover: hover) {
      .esc:hover {
        transform: translateY(-8px) scale(1.015);
        border-color: var(--esc-accent-border) !important;
        box-shadow: 0 20px 44px var(--esc-shadow-strong) !important;
      }
      .esc:hover::after     { animation: shimmer .65s ease-out forwards; }
      .esc:hover .esc-bar   { height: 4px !important; }
      .esc:hover .esc-icon  {
        transform: scale(1.1) rotate(-5deg);
        box-shadow: 0 10px 28px var(--esc-shadow-strong) !important;
      }
      .esc:hover .esc-num   { color: var(--esc-accent) !important; transform: scale(1.08); }
      .esc:hover .esc-title { color: var(--esc-accent) !important; }
      .esc:hover .esc-arrow { opacity: 1 !important; gap: 10px !important; }
      .esc:hover .esc-glow  { opacity: 1; }
      .esc:hover .esc-chip  { background: var(--esc-accent-soft) !important; transform: translateY(-1px); }
      .esc:hover .esc-img   { opacity: .12 !important; transform: scale(1.08) !important; }
    }

    @media (hover: none) {
      .esc:active { transform: scale(.97); }
    }

    /* ── CTA Button ── */
    .exp-cta {
      position: relative;
      overflow: hidden;
      border-radius: 16px;
      display: inline-flex;
      align-items: center;
      gap: 12px;
      padding: 16px 36px;
      background: linear-gradient(135deg, #0e5af0, #0a4ad4);
      color: #fff;
      cursor: pointer;
      text-decoration: none;
      box-shadow: 0 4px 20px rgba(14,90,240,.3);
      transition: all .35s cubic-bezier(.34,1.4,.64,1);
      -webkit-tap-highlight-color: transparent;
    }

    .exp-cta::before {
      content: '';
      position: absolute;
      top: 0; left: 0;
      width: 55%; height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,.18), transparent);
      transform: translateX(-100%) skewX(-20deg);
      pointer-events: none;
    }

    .exp-cta::after {
      content: '';
      position: absolute;
      inset: -2px;
      border-radius: 18px;
      background: linear-gradient(90deg, #0e5af0, #60a5fa, #00a1e0, #0e5af0);
      background-size: 300% 100%;
      animation: borderFlow 4s linear infinite;
      z-index: -1;
      opacity: 0;
      transition: opacity .3s ease;
    }

    .exp-cta-arrow {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px; height: 28px;
      border-radius: 8px;
      background: rgba(255,255,255,.18);
      transition: all .3s cubic-bezier(.34,1.4,.64,1);
    }

    @media (hover: hover) {
      .exp-cta:hover {
        transform: translateY(-3px) scale(1.03);
        box-shadow: 0 10px 32px rgba(14,90,240,.5);
      }
      .exp-cta:hover::before {
        animation: btnShimmer .7s ease-out forwards;
      }
      .exp-cta:hover::after {
        opacity: 1;
      }
      .exp-cta:hover .exp-cta-arrow {
        background: rgba(255,255,255,.3);
        transform: translateX(3px);
      }
    }

    @media (hover: none) {
      .exp-cta:active {
        transform: scale(.97) !important;
        box-shadow: 0 4px 16px rgba(14,90,240,.35) !important;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .exp-pill,.exp-h2,.exp-sub,.exp-glow,
      .esc,.esc-bar,.esc-icon,.esc-num,.esc-title,
      .esc-arrow,.esc-chip,.esc-img,.exp-cta,.exp-cta-arrow {
        animation: none !important; transition: none !important;
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
    desc: 'Improve your website\'s online visibility and attract more organic traffic with expert keyword research, on-page optimization, and link building.',
    href: '/expertise/seo',
    features: ['Keyword Research', 'On-page SEO', 'Link Building'],
    accent: '#10b981',
    accentBorder: 'rgba(16,185,129,.2)',
    accentSoft: 'rgba(16,185,129,.08)',
    shadowStrong: 'rgba(16,185,129,.14)',
    iconBg: 'linear-gradient(135deg, #10b981, #059669)',
    bar: 'linear-gradient(90deg, #10b981, #34d399)',
    bg: 'radial-gradient(circle at 80% 20%, rgba(16,185,129,.06), transparent 50%)',
  },
  {
    icon: <CampaignRounded />,
    num: '02',
    title: 'Social Media Marketing',
    short: 'Engage. Grow. Convert.',
    desc: 'Expand your brand\'s reach and engage with your target audience through expert strategy, compelling content, and data-driven results.',
    href: '/expertise/social-media-marketing',
    features: ['Content Strategy', 'Paid Campaigns', 'Analytics'],
    accent: '#ec4899',
    accentBorder: 'rgba(236,72,153,.2)',
    accentSoft: 'rgba(236,72,153,.08)',
    shadowStrong: 'rgba(236,72,153,.14)',
    iconBg: 'linear-gradient(135deg, #ec4899, #db2777)',
    bar: 'linear-gradient(90deg, #ec4899, #f472b6)',
    bg: 'radial-gradient(circle at 80% 20%, rgba(236,72,153,.05), transparent 50%)',
  },
  {
    icon: <CodeRounded />,
    num: '03',
    title: 'Website Development',
    short: 'Modern. Fast. Scalable.',
    desc: 'Create a professional website with responsive design, fast performance, easy navigation, and user-friendly features tailored to your needs.',
    href: '/expertise/website-development',
    features: ['Responsive Design', 'Fast Performance', 'SEO-Ready'],
    accent: '#3b82f6',
    accentBorder: 'rgba(59,130,246,.2)',
    accentSoft: 'rgba(59,130,246,.08)',
    shadowStrong: 'rgba(59,130,246,.14)',
    iconBg: 'linear-gradient(135deg, #3b82f6, #2563eb)',
    bar: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
    bg: 'radial-gradient(circle at 80% 20%, rgba(59,130,246,.05), transparent 50%)',
  },
  {
    icon: <GroupAddRounded />,
    num: '04',
    title: 'LinkedIn Lead Generation',
    short: 'B2B Growth Engine',
    desc: 'Generate high-quality leads and grow your business network with targeted outreach, customized messaging, and data-driven results.',
    href: '/expertise/linkedin-lead-generation',
    features: ['Targeted Outreach', 'Custom Messaging', 'CRM Sync'],
    accent: '#0ea5e9',
    accentBorder: 'rgba(14,165,233,.2)',
    accentSoft: 'rgba(14,165,233,.08)',
    shadowStrong: 'rgba(14,165,233,.14)',
    iconBg: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
    bar: 'linear-gradient(90deg, #0ea5e9, #38bdf8)',
    bg: 'radial-gradient(circle at 80% 20%, rgba(14,165,233,.05), transparent 50%)',
  },
  {
    icon: <FilterAltRounded />,
    num: '05',
    title: 'Sales Funnel',
    short: 'Optimize. Convert. Scale.',
    desc: 'Optimize your sales process and improve conversions with expertly designed funnel strategies, lead capture forms, and automated follow-up.',
    href: '/expertise/sales-funnel',
    features: ['Lead Capture', 'Automation', 'Conversion Opt.'],
    accent: '#f59e0b',
    accentBorder: 'rgba(245,158,11,.2)',
    accentSoft: 'rgba(245,158,11,.08)',
    shadowStrong: 'rgba(245,158,11,.14)',
    iconBg: 'linear-gradient(135deg, #f59e0b, #d97706)',
    bar: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
    bg: 'radial-gradient(circle at 80% 20%, rgba(245,158,11,.05), transparent 50%)',
  },
  {
    icon: <StorageRounded />,
    num: '06',
    title: 'CRM Development',
    short: 'Smart Customer Management',
    desc: 'Streamline customer management with customized CRM solutions, automated workflows, and enhanced customer relationships.',
    href: '/expertise/crm-development',
    features: ['Custom Workflows', 'Integrations', 'Reporting'],
    accent: '#ef4444',
    accentBorder: 'rgba(239,68,68,.2)',
    accentSoft: 'rgba(239,68,68,.08)',
    shadowStrong: 'rgba(239,68,68,.14)',
    iconBg: 'linear-gradient(135deg, #ef4444, #dc2626)',
    bar: 'linear-gradient(90deg, #ef4444, #f87171)',
    bg: 'radial-gradient(circle at 80% 20%, rgba(239,68,68,.05), transparent 50%)',
  },
  {
    icon: <PhoneIphoneRounded />,
    num: '07',
    title: 'Mobile UI/UX Design',
    short: 'Beautiful. Intuitive. Fast.',
    desc: 'Improve user experience and engagement on mobile devices with expert design, efficient code, and intuitive features.',
    href: '/expertise/ui-ux-design',
    features: ['Wireframes', 'Prototyping', 'User Testing'],
    accent: '#a855f7',
    accentBorder: 'rgba(168,85,247,.2)',
    accentSoft: 'rgba(168,85,247,.08)',
    shadowStrong: 'rgba(168,85,247,.14)',
    iconBg: 'linear-gradient(135deg, #a855f7, #9333ea)',
    bar: 'linear-gradient(90deg, #a855f7, #c084fc)',
    bg: 'radial-gradient(circle at 80% 20%, rgba(168,85,247,.05), transparent 50%)',
  },
  {
    icon: <AppShortcutRounded />,
    num: '08',
    title: 'Flutter App Development',
    short: 'Cross-Platform Excellence',
    desc: 'Build high-performance, cross-platform mobile apps with expert design, efficient code, and reliable native performance.',
    href: '/expertise/flutter-app-development',
    features: ['iOS + Android', 'Native Feel', 'Single Codebase'],
    accent: '#06b6d4',
    accentBorder: 'rgba(6,182,212,.2)',
    accentSoft: 'rgba(6,182,212,.08)',
    shadowStrong: 'rgba(6,182,212,.14)',
    iconBg: 'linear-gradient(135deg, #06b6d4, #0891b2)',
    bar: 'linear-gradient(90deg, #06b6d4, #22d3ee)',
    bg: 'radial-gradient(circle at 80% 20%, rgba(6,182,212,.05), transparent 50%)',
  },
  {
    icon: <Inventory2Outlined />,
    num: '09',
    title: 'Zoho Development',
    short: 'Zoho One. Customized.',
    desc: 'Expert Zoho CRM, Creator & Books implementation, customization, and integration tailored to your business workflows.',
    href: '/expertise/zoho-development',
    features: ['Zoho CRM', 'Zoho Creator', 'Custom Apps'],
    accent: '#2563eb',
    accentBorder: 'rgba(37,99,235,.2)',
    accentSoft: 'rgba(37,99,235,.08)',
    shadowStrong: 'rgba(37,99,235,.14)',
    iconBg: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
    bar: 'linear-gradient(90deg, #2563eb, #60a5fa)',
    bg: 'radial-gradient(circle at 80% 20%, rgba(37,99,235,.05), transparent 50%)',
  },
  {
    icon: <IntegrationInstructionsOutlined />,
    num: '10',
    title: 'Salesforce Development',
    short: 'Enterprise-Grade Solutions',
    desc: 'Salesforce CRM setup, Apex development, Lightning components, and third-party integrations for enterprise solutions.',
    href: '/expertise/salesforce-development',
    features: ['Apex & Lightning', 'Integrations', 'Custom Objects'],
    accent: '#7c3aed',
    accentBorder: 'rgba(124,58,237,.2)',
    accentSoft: 'rgba(124,58,237,.08)',
    shadowStrong: 'rgba(124,58,237,.14)',
    iconBg: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
    bar: 'linear-gradient(90deg, #7c3aed, #a78bfa)',
    bg: 'radial-gradient(circle at 80% 20%, rgba(124,58,237,.05), transparent 50%)',
  },
  {
    icon: <CloudOutlined />,
    num: '11',
    title: 'SaaS Solutions',
    short: 'Cloud-First. Subscription-Ready.',
    desc: 'Scalable SaaS applications with subscription models, multi-tenancy, and cloud-first architecture for real business problems.',
    href: '/expertise/saas-solutions',
    features: ['Multi-Tenant', 'Subscription', 'Cloud Native'],
    accent: '#14b8a6',
    accentBorder: 'rgba(20,184,166,.2)',
    accentSoft: 'rgba(20,184,166,.08)',
    shadowStrong: 'rgba(20,184,166,.14)',
    iconBg: 'linear-gradient(135deg, #14b8a6, #0d9488)',
    bar: 'linear-gradient(90deg, #14b8a6, #2dd4bf)',
    bg: 'radial-gradient(circle at 80% 20%, rgba(20,184,166,.05), transparent 50%)',
  },
];

/* ─── Component ──────────────────────────────────────────── */
const HomeExpertiseSection: React.FC = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery('(max-width:380px)');

  return (
    <>
      <ExpertiseSectionStyles />

      <Box
        component="section"
        id="expertise"
        sx={{
          position: 'relative',
          py: { xs: 7, sm: 8, md: 10 },
          background: '#ffffff',
          overflow: 'hidden',
        }}
      >
        {/* Subtle dot grid */}
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

        {/* Top-right blob */}
        <Box
          className="exp-glow"
          sx={{
            position: 'absolute',
            top: '-8%',
            right: '-6%',
            width: { xs: 260, sm: 340, md: 400 },
            height: { xs: 260, sm: 340, md: 400 },
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(14,90,240,.06), transparent 68%)',
            filter: 'blur(55px)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Bottom-left blob */}
        <Box
          className="exp-glow"
          sx={{
            position: 'absolute',
            bottom: '-8%',
            left: '-6%',
            width: { xs: 220, sm: 280, md: 340 },
            height: { xs: 220, sm: 280, md: 340 },
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(0,161,224,.06), transparent 68%)',
            filter: 'blur(50px)',
            pointerEvents: 'none',
            zIndex: 0,
            animationDelay: '1.8s',
          }}
        />

        {/* Mid-left blob */}
        <Box
          className="exp-glow"
          sx={{
            position: 'absolute',
            top: '45%',
            left: '-4%',
            width: { xs: 180, sm: 240, md: 280 },
            height: { xs: 180, sm: 240, md: 280 },
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(124,58,237,.04), transparent 68%)',
            filter: 'blur(50px)',
            pointerEvents: 'none',
            zIndex: 0,
            animationDelay: '3s',
          }}
        />

        <Container
          maxWidth="xl"
          sx={{
            position: 'relative',
            zIndex: 2,
            px: { xs: 2, sm: 3, md: 5 },
          }}
        >
          {/* ── Header ── */}
          <Box
            sx={{
              textAlign: 'center',
              mb: { xs: 5, sm: 5.5, md: 7 },
              maxWidth: 700,
              mx: 'auto',
            }}
          >
            {/* Pill */}
            <Box
              className="exp-pill"
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
                Our Expertise
              </Typography>
            </Box>

            {/* Heading */}
            <Typography
              className="exp-h2"
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
              What we{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(90deg, #0e5af0, #00a1e0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                specialize in
              </Box>
            </Typography>

            {/* Subtitle */}
            <Typography
              className="exp-sub"
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
              From digital marketing to enterprise software — explore the
              full range of services we deliver with precision and passion.
            </Typography>
          </Box>

          {/* ── Cards Grid ── */}
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
              <Link
                key={svc.num}
                href={svc.href}
                className="esc"
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <Box
                  className="esc"
                  component="div"
                  sx={{
                    '--esc-accent': svc.accent,
                    '--esc-accent-border': svc.accentBorder,
                    '--esc-accent-soft': svc.accentSoft,
                    '--esc-shadow-strong': svc.shadowStrong,
                    height: '100%',
                    animation: `cardIn .65s cubic-bezier(.16,1,.3,1) ${0.08 + i * 0.06}s both`,
                  }}
                >
                  {/* Top colour bar */}
                  <Box
                    className="esc-bar"
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

                  {/* Corner accent image overlay */}
                  <Box
                    className="esc-img"
                    sx={{
                      position: 'absolute',
                      bottom: '-10%',
                      right: '-10%',
                      width: '55%',
                      height: '55%',
                      borderRadius: '50%',
                      background: svc.bg,
                      opacity: 0.08,
                      pointerEvents: 'none',
                      zIndex: 0,
                    }}
                  />

                  {/* Hover radial glow */}
                  <Box
                    className="esc-glow"
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
                    {/* Number + Icon row */}
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
                        className="esc-num"
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
                        className="esc-icon"
                        sx={{
                          width: { xs: 44, sm: 48, md: 52 },
                          height: { xs: 44, sm: 48, md: 52 },
                          borderRadius: '14px',
                          background: svc.iconBg,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: `0 6px 18px ${svc.shadowStrong}`,
                          '& .MuiSvgIcon-root': {
                            fontSize: { xs: 20, sm: 22, md: 24 },
                            color: '#fff',
                          },
                          flexShrink: 0,
                        }}
                      >
                        {svc.icon}
                      </Box>
                    </Box>

                    {/* Title */}
                    <Typography
                      className="esc-title"
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

                    {/* Short tagline */}
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

                    {/* Description */}
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

                    {/* Feature chips */}
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
                          className="esc-chip"
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

                    {/* CTA arrow */}
                    <Box
                      className="esc-arrow"
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
                        Know More
                      </Typography>
                      <NorthEast sx={{ fontSize: 14, color: 'inherit' }} />
                    </Box>
                  </Box>
                </Box>
              </Link>
            ))}
          </Box>

          {/* ── View All CTA ── */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: { xs: 6, sm: 6.5, md: 7 },
              animation: 'textIn .7s cubic-bezier(.16,1,.3,1) .5s both',
            }}
          >
            <Link
              href="/expertise"
              className="exp-cta"
              style={{ textDecoration: 'none' }}
            >
              <Typography
                sx={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: '.9rem', md: '.96rem' },
                  color: '#fff',
                  letterSpacing: '.01em',
                  lineHeight: 1,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                Explore All Services
              </Typography>

              <Box className="exp-cta-arrow">
                <ArrowForwardRounded
                  sx={{
                    fontSize: { xs: 16, md: 18 },
                    color: '#fff',
                  }}
                />
              </Box>
            </Link>
          </Box>

          {/* Trust line */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: { xs: 1.5, sm: 2 },
              mt: { xs: 3.5, md: 4 },
              flexWrap: 'wrap',
              animation: 'textIn .7s cubic-bezier(.16,1,.3,1) .6s both',
            }}
          >
            {['120+ Clients', '250+ Projects', '8+ Years'].map((item, i) => (
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
                    background: i === 0
                      ? '#0e5af0'
                      : i === 1
                      ? '#0d9488'
                      : '#7c3aed',
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 500,
                    fontSize: { xs: '.72rem', md: '.78rem' },
                    color: 'rgba(11,24,54,.42)',
                    letterSpacing: '.01em',
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