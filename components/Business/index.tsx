'use client';

import React from 'react';
import { Box, Container, Typography, useMediaQuery } from '@mui/material';
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

/* ─── Styles ──────────────────────────────────────────────── */
const BusinessStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=Outfit:wght@300;400;500&display=swap');

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

    .bz-pill  { animation: textIn .55s cubic-bezier(.16,1,.3,1) both; }
    .bz-h2    { animation: textIn .7s  cubic-bezier(.16,1,.3,1) .08s both; }
    .bz-sub   { animation: textIn .7s  cubic-bezier(.16,1,.3,1) .16s both; }

    /* ── Card ── */
    .sc {
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
    }

    .sc::after {
      content: '';
      position: absolute;
      top: 0; left: 0;
      width: 38%; height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,.12), transparent);
      transform: translateX(-120%) skewX(-18deg);
      pointer-events: none;
      z-index: 9;
    }

    .sc-bar { transition: height .28s ease; }
    .sc-icon { transition: transform .32s cubic-bezier(.34,1.4,.64,1), box-shadow .32s ease; }
    .sc-num  { transition: color .25s ease, transform .25s ease; }
    .sc-title{ transition: color .25s ease; }
    .sc-arrow{
      transition: opacity .25s ease, gap .25s ease, transform .25s ease;
    }

    @media (hover: hover) {
      .sc:hover {
        transform: translateY(-8px) scale(1.015);
        border-color: var(--sc-accent-border) !important;
        box-shadow: 0 20px 44px var(--sc-shadow-strong) !important;
      }
      .sc:hover::after { animation: shimmer .65s ease-out forwards; }
      .sc:hover .sc-bar { height: 4px !important; }
      .sc:hover .sc-icon {
        transform: scale(1.1) rotate(-5deg);
        box-shadow: 0 10px 28px var(--sc-shadow-strong) !important;
      }
      .sc:hover .sc-num   { color: var(--sc-accent) !important; transform: scale(1.08); }
      .sc:hover .sc-title { color: var(--sc-accent) !important; }
      .sc:hover .sc-arrow { opacity: 1 !important; gap: 10px !important; }
      .sc:hover .sc-glow  { opacity: 1; }
    }

    @media (hover: none) {
      .sc:active { transform: scale(.97); }
    }

    @media (prefers-reduced-motion: reduce) {
      .bz-pill,.bz-h2,.bz-sub,.sc,.sc-icon,.sc-bar,.sc-num,.sc-title,.sc-arrow {
        animation: none !important; transition: none !important;
      }
    }
  `}</style>
);

/* ─── Services data ─────────────────────────────────────── */
const services = [
  {
    icon: <Inventory2Outlined />,
    num: '01',
    title: 'Zoho Development',
    desc: 'Zoho CRM, Zoho One, Creator & Books — implementation, customization, and deep integrations tailored to your workflows.',
    href: '/expertise/zoho-development',
    accent: '#0e5af0',
    accentBorder: 'rgba(14,90,240,.2)',
    shadowStrong: 'rgba(14,90,240,.14)',
    iconBg: 'linear-gradient(135deg, #0e5af0, #2d7cf6)',
    bar: 'linear-gradient(90deg, #0e5af0, #60a5fa)',
  },
  {
    icon: <IntegrationInstructionsOutlined />,
    num: '02',
    title: 'Salesforce Development',
    desc: 'CRM setup, Apex development, Lightning components, and third-party integrations for enterprise-grade pipelines.',
    href: '/expertise/salesforce-development',
    accent: '#00a1e0',
    accentBorder: 'rgba(0,161,224,.2)',
    shadowStrong: 'rgba(0,161,224,.14)',
    iconBg: 'linear-gradient(135deg, #00a1e0, #33b9e8)',
    bar: 'linear-gradient(90deg, #00a1e0, #67d2f2)',
  },
  {
    icon: <CodeOutlined />,
    num: '03',
    title: 'Web Development',
    desc: 'Responsive, high-performance websites and web apps built with Next.js, React, and scalable backend systems.',
    href: '/expertise/web-development',
    accent: '#0d9488',
    accentBorder: 'rgba(13,148,136,.2)',
    shadowStrong: 'rgba(13,148,136,.14)',
    iconBg: 'linear-gradient(135deg, #0d9488, #14b8a6)',
    bar: 'linear-gradient(90deg, #0d9488, #5eead4)',
  },
  {
    icon: <HubOutlined />,
    num: '04',
    title: 'Business Automation',
    desc: 'Automate workflows, lead management, invoicing, and operations using Zoho, Salesforce, and custom tools.',
    href: '/expertise/automation',
    accent: '#7c3aed',
    accentBorder: 'rgba(124,58,237,.2)',
    shadowStrong: 'rgba(124,58,237,.14)',
    iconBg: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
    bar: 'linear-gradient(90deg, #7c3aed, #c4b5fd)',
  },
  {
    icon: <CloudOutlined />,
    num: '05',
    title: 'SaaS Solutions',
    desc: 'Scalable SaaS products built with subscription models and cloud-first architecture for real business problems.',
    href: '/expertise/saas',
    accent: '#d97706',
    accentBorder: 'rgba(217,119,6,.2)',
    shadowStrong: 'rgba(217,119,6,.14)',
    iconBg: 'linear-gradient(135deg, #d97706, #fbbf24)',
    bar: 'linear-gradient(90deg, #d97706, #fde68a)',
  },
  {
    icon: <PhoneIphoneOutlined />,
    num: '06',
    title: 'Mobile Development',
    desc: 'Native-feel iOS and Android apps with React Native and Flutter that engage users and drive conversions.',
    href: '/expertise/mobile',
    accent: '#0891b2',
    accentBorder: 'rgba(8,145,178,.2)',
    shadowStrong: 'rgba(8,145,178,.14)',
    iconBg: 'linear-gradient(135deg, #0891b2, #22d3ee)',
    bar: 'linear-gradient(90deg, #0891b2, #a5f3fc)',
  },
  {
    icon: <StorageOutlined />,
    num: '07',
    title: 'CRM Development',
    desc: 'Fully custom CRM solutions tailored to your sales process, customer journey, and growth objectives.',
    href: '/expertise/crm',
    accent: '#e11d48',
    accentBorder: 'rgba(225,29,72,.2)',
    shadowStrong: 'rgba(225,29,72,.14)',
    iconBg: 'linear-gradient(135deg, #e11d48, #fb7185)',
    bar: 'linear-gradient(90deg, #e11d48, #fda4af)',
  },
];

/* ─── Component ─────────────────────────────────────────── */
const Business: React.FC = () => {
  const isSmall = useMediaQuery('(max-width:380px)');

  return (
    <>
      <BusinessStyles />

      <Box
        sx={{
          position: 'relative',
          py: { xs: 7, md: 10 },
          background: '#ffffff',
          overflow: 'hidden',
        }}
      >
        {/* Subtle dot grid */}
        <Box sx={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
          backgroundImage: 'radial-gradient(circle, rgba(14,31,64,.045) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 85% 70% at 50% 50%, black 20%, transparent 100%)',
        }}/>

        {/* Top-right blob */}
        <Box sx={{
          position: 'absolute', top: '-8%', right: '-6%',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,90,240,.06), transparent 68%)',
          filter: 'blur(55px)', pointerEvents: 'none', zIndex: 0,
        }}/>

        {/* Bottom-left blob */}
        <Box sx={{
          position: 'absolute', bottom: '-8%', left: '-6%',
          width: 340, height: 340, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,161,224,.06), transparent 68%)',
          filter: 'blur(50px)', pointerEvents: 'none', zIndex: 0,
        }}/>

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2, px: { xs: 2, sm: 3, md: 5 } }}>

          {/* ── Header ─────────────────────────────────── */}
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 }, maxWidth: 700, mx: 'auto' }}>

            {/* Pill */}
            <Box className="bz-pill" sx={{
              display: 'inline-flex', alignItems: 'center', gap: 1,
              px: 1.8, py: 0.75, mb: 2.5,
              borderRadius: '999px',
              border: '1.5px solid rgba(14,90,240,.18)',
              background: 'rgba(14,90,240,.05)',
            }}>
              <Box sx={{
                width: 7, height: 7, borderRadius: '50%',
                background: '#0e5af0',
                boxShadow: '0 0 0 3px rgba(14,90,240,.18)',
              }}/>
              <Typography sx={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700, fontSize: '.7rem',
                color: '#0e5af0',
                textTransform: 'uppercase', letterSpacing: '.15em',
              }}>
                What We Do
              </Typography>
            </Box>

            {/* Heading */}
            <Typography className="bz-h2" component="h2" sx={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: {
                xs: isSmall ? '1.5rem' : '1.7rem',
                sm: '2.1rem', md: '2.6rem', lg: '2.9rem',
              },
              lineHeight: 1.15, letterSpacing: '-.032em',
              color: '#0b1836', mb: 1.8,
            }}>
              Solutions that{' '}
              <Box component="span" sx={{
                background: 'linear-gradient(90deg, #0e5af0, #00a1e0)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                empower your business
              </Box>
            </Typography>

            {/* Sub */}
            <Typography className="bz-sub" sx={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 400, fontSize: { xs: '.9rem', md: '1rem' },
              color: 'rgba(11,24,54,.55)', lineHeight: 1.8,
              maxWidth: 560, mx: 'auto',
            }}>
              From Zoho &amp; Salesforce development to custom CRM, web apps, and
              automation — we build systems that grow with your goals.
            </Typography>
          </Box>

          {/* ── Cards Grid ─────────────────────────────── */}
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              xl: 'repeat(4, 1fr)',
            },
            gap: { xs: 2.2, sm: 2.6, md: 2.8 },
          }}>
            {services.map((svc, i) => (
              <Link
                key={svc.num}
                href={svc.href}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <Box
                  className="sc"
                  sx={{
                    '--sc-accent': svc.accent,
                    '--sc-accent-border': svc.accentBorder,
                    '--sc-shadow-strong': svc.shadowStrong,
                    height: '100%',
                    animation: `cardIn .65s cubic-bezier(.16,1,.3,1) ${.08 + i * .06}s both`,
                  }}
                >
                  {/* Top colour bar */}
                  <Box className="sc-bar" sx={{
                    position: 'absolute', top: 0, left: 0, right: 0,
                    height: '3px',
                    background: svc.bar,
                    borderRadius: '22px 22px 0 0',
                    zIndex: 2,
                  }}/>

                  {/* Hover radial glow */}
                  <Box className="sc-glow" sx={{
                    position: 'absolute', top: '-25%',
                    left: '15%', right: '15%', height: '55%',
                    borderRadius: '50%',
                    background: `radial-gradient(ellipse, ${svc.accent}0a, transparent 70%)`,
                    filter: 'blur(28px)',
                    opacity: 0,
                    transition: 'opacity .35s ease',
                    pointerEvents: 'none', zIndex: 0,
                  }}/>

                  {/* Content */}
                  <Box sx={{
                    p: { xs: 2.6, md: 3 },
                    display: 'flex', flexDirection: 'column', height: '100%',
                    position: 'relative', zIndex: 1,
                  }}>
                    {/* Number + Icon row */}
                    <Box sx={{
                      display: 'flex', alignItems: 'flex-start',
                      justifyContent: 'space-between', mb: 2.4, mt: .4,
                    }}>
                      <Typography className="sc-num" sx={{
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontWeight: 800, fontSize: '.72rem',
                        color: 'rgba(14,31,64,.22)',
                        letterSpacing: '.12em', pt: .4,
                      }}>
                        {svc.num}
                      </Typography>

                      <Box className="sc-icon" sx={{
                        width: { xs: 48, md: 52 }, height: { xs: 48, md: 52 },
                        borderRadius: '14px',
                        background: svc.iconBg,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: `0 6px 18px ${svc.shadowStrong}`,
                        '& .MuiSvgIcon-root': { fontSize: { xs: 22, md: 24 }, color: '#fff' },
                      }}>
                        {svc.icon}
                      </Box>
                    </Box>

                    {/* Title */}
                    <Typography className="sc-title" sx={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontWeight: 700,
                      fontSize: { xs: '1rem', md: '1.07rem' },
                      color: '#0b1836', lineHeight: 1.28,
                      letterSpacing: '-.015em', mb: 1,
                    }}>
                      {svc.title}
                    </Typography>

                    {/* Desc */}
                    <Typography sx={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 400,
                      fontSize: { xs: '.84rem', md: '.88rem' },
                      color: 'rgba(11,24,54,.54)', lineHeight: 1.75,
                      flex: 1,
                    }}>
                      {svc.desc}
                    </Typography>

                    {/* CTA arrow */}
                    <Box className="sc-arrow" sx={{
                      display: 'flex', alignItems: 'center',
                      gap: '5px', mt: 2.4,
                      opacity: .3, color: svc.accent,
                    }}>
                      <Typography sx={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 600, fontSize: '.8rem',
                        letterSpacing: '.03em', color: 'inherit',
                      }}>
                        Explore
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
    </>
  );
};

export default Business;