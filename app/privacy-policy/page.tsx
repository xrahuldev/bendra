'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import {
  PolicyRounded,
  ShieldRounded,
  PersonOutlineRounded,
  DataUsageRounded,
  SecurityRounded,
  HttpsRounded,
  CookieRounded,
  LinkRounded,
  ArrowBackRounded,
} from '@mui/icons-material';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── Styles ──────────────────────────────────────────────── */
const PrivacyStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=Outfit:wght@300;400;500;600&display=swap');

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @keyframes glowPulse {
      0%, 100% { opacity: .45; transform: scale(1); }
      50%       { opacity: .8;  transform: scale(1.05); }
    }

    @keyframes shimmer {
      0%   { transform: translateX(-120%) skewX(-18deg); }
      100% { transform: translateX(340%)  skewX(-18deg); }
    }

    @keyframes floatIcon {
      0%, 100% { transform: translateY(0); }
      50%       { transform: translateY(-4px); }
    }

    .pv-hero    { animation: fadeUp .75s cubic-bezier(.16,1,.3,1) .05s both; }
    .pv-content { animation: fadeUp .75s cubic-bezier(.16,1,.3,1) .15s both; }
    .pv-glow    { animation: glowPulse 5s ease-in-out infinite; }
    .pv-float   { animation: floatIcon 4s ease-in-out infinite; }

    /* ── Section Card ── */
    .pv-card {
      position: relative;
      overflow: hidden;
      border-radius: 20px;
      background: #ffffff;
      border: 1.5px solid rgba(14,31,64,.08);
      box-shadow: 0 2px 14px rgba(14,31,64,.05);
      transition: transform .32s cubic-bezier(.34,1.4,.64,1),
                  box-shadow .32s ease,
                  border-color .28s ease;
      -webkit-tap-highlight-color: transparent;
    }
    .pv-card::after {
      content: '';
      position: absolute;
      top: 0; left: 0;
      width: 36%; height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,.14), transparent);
      transform: translateX(-120%) skewX(-18deg);
      pointer-events: none;
      z-index: 9;
    }
    .pv-card-bar  { transition: height .28s ease; }
    .pv-card-icon { transition: transform .32s cubic-bezier(.34,1.4,.64,1), box-shadow .32s ease; }
    .pv-card-glow { transition: opacity .35s ease; }

    @media (hover: hover) {
      .pv-card:hover {
        transform: translateY(-6px) scale(1.01);
        border-color: rgba(14,90,240,.2) !important;
        box-shadow: 0 18px 40px rgba(14,90,240,.1) !important;
      }
      .pv-card:hover::after       { animation: shimmer .65s ease-out forwards; }
      .pv-card:hover .pv-card-bar  { height: 4px !important; }
      .pv-card:hover .pv-card-icon { transform: scale(1.08) rotate(-4deg); }
      .pv-card:hover .pv-card-glow { opacity: 1; }
    }
    @media (hover: none) { .pv-card:active { transform: scale(.97); } }

    /* ── Back link ── */
    .pv-back {
      transition: all .25s cubic-bezier(.34,1.4,.64,1) !important;
      -webkit-tap-highlight-color: transparent;
    }
    .pv-back:hover { color: #0e5af0 !important; transform: translateX(-3px); }
    .pv-back:hover .pv-back-arrow { transform: translateX(-3px); }
    .pv-back-arrow { transition: transform .25s ease; }

    /* ── TOC link ── */
    .pv-toc-link {
      transition: color .2s ease, transform .25s ease !important;
      -webkit-tap-highlight-color: transparent;
    }
    .pv-toc-link:hover { color: #0e5af0 !important; transform: translateX(4px); }

    @media (prefers-reduced-motion: reduce) {
      .pv-hero,.pv-content,.pv-glow,.pv-float,
      .pv-card,.pv-card-bar,.pv-card-icon,.pv-card-glow,
      .pv-back,.pv-back-arrow,.pv-toc-link {
        animation: none !important; transition: none !important;
      }
    }
  `}</style>
);

/* ─── Sections ───────────────────────────────────────────── */
const sections = [
  {
    icon: <PolicyRounded />,
    title: 'Introduction & Policy Updates',
    accent: '#0e5af0',
    iconBg: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
    iconColor: '#0e5af0',
    bar: 'linear-gradient(90deg, #0e5af0, #60a5fa)',
    shadow: 'rgba(14,90,240,.13)',
    content: [
      'This privacy statement explains how Bendra utilises and safeguards any information you provide when using this website. Your privacy is something we are deeply dedicated to protecting.',
      'When using this website, if we ask you to supply any information by which you can be identified, you can be confident that it will only be used in ways described in this privacy policy.',
      'By periodically updating this website, we may change this policy from time to time. You should review this page periodically to ensure you are aware of any updates. These updates are routine; keeping an eye on them ensures you have a complete understanding of how your data is handled.',
    ],
  },
  {
    icon: <PersonOutlineRounded />,
    title: 'Information We Collect',
    accent: '#0d9488',
    iconBg: 'linear-gradient(135deg, #ccfbf1, #99f6e4)',
    iconColor: '#0d9488',
    bar: 'linear-gradient(90deg, #0d9488, #5eead4)',
    shadow: 'rgba(13,148,136,.13)',
    content: [
      'Once you visit our website, we may collect certain information including:',
    ],
    bullets: [
      'Name and Job Designation',
      'Immediate Contact Information along with Email Address',
      'Address-Based Information such as Pin Code and Areas of Interest',
      'Details provided through online forms — including registration, content posting, service requests, or enrolment in any service we offer',
      'Communication records if you get in touch with us',
      'Information about your visits to our website and the materials you access',
      'Details regarding any transactions you make and how your orders are fulfilled',
    ],
  },
  {
    icon: <DataUsageRounded />,
    title: 'How We Use Collected Data',
    accent: '#7c3aed',
    iconBg: 'linear-gradient(135deg, #ede9fe, #ddd6fe)',
    iconColor: '#7c3aed',
    bar: 'linear-gradient(90deg, #7c3aed, #c4b5fd)',
    shadow: 'rgba(124,58,237,.13)',
    content: [
      'One of the major reasons we collect data is to better understand your needs as a user. Based on this, we curate services per your needs and preferences for a customised experience.',
    ],
    bullets: [
      'Internal record keeping — maintaining accessible data for operational needs and continuous improvement of our business quality',
      'Sending promotional emails about new products, special deals, and other relevant information using the email address you have provided',
      'Conducting market research — we may contact you via phone, fax, email, or mail, and adjust features to improve your website experience',
    ],
  },
  {
    icon: <ShieldRounded />,
    title: 'How We Protect Your Data',
    accent: '#d97706',
    iconBg: 'linear-gradient(135deg, #fef3c7, #fde68a)',
    iconColor: '#d97706',
    bar: 'linear-gradient(90deg, #d97706, #fde68a)',
    shadow: 'rgba(217,119,6,.13)',
    content: [
      'We take several precautionary measures to keep your data completely safe from any possible fraudulent activities. Our security measures include password-protected directories and databases, along with access to a secure server.',
      'Secure Socket Layer (SSL) technology encrypts and transports all sensitive and credit information to our payment gateway provider\'s database. This database is only accessible to authorised personnel with necessary access credentials and a duty of confidentiality.',
      'For sensitive information such as credit card numbers, social security numbers, and financial details, we ensure that all data is completely deleted from the system once the relevant transaction has been completed successfully.',
    ],
  },
  {
    icon: <SecurityRounded />,
    title: 'Security Measures',
    accent: '#ec4899',
    iconBg: 'linear-gradient(135deg, #fce7f3, #fbcfe8)',
    iconColor: '#ec4899',
    bar: 'linear-gradient(90deg, #ec4899, #f472b6)',
    shadow: 'rgba(236,72,153,.13)',
    content: [
      'Protecting client data is of paramount importance to us under every circumstance. We have put in place the necessary physical, technical, and administrative security measures to prevent unauthorised access to or disclosure of the online data we collect.',
      'Our approach has always been to deploy the right measures in the correct places — ensuring a robust, multi-layered security framework for your information.',
    ],
  },
  {
    icon: <HttpsRounded />,
    title: 'IP Address & Cookies',
    accent: '#0ea5e9',
    iconBg: 'linear-gradient(135deg, #e0f2fe, #bae6fd)',
    iconColor: '#0ea5e9',
    bar: 'linear-gradient(90deg, #0ea5e9, #38bdf8)',
    shadow: 'rgba(14,165,233,.13)',
    content: [
      'We may gather statistical information about your computer, including your IP address, operating system, and browser type. This data is used to administer the website and provide aggregate data to our advertisers. It does not specifically identify you.',
    ],
    subSections: [
      {
        sub: 'What Are Cookies?',
        text: 'A cookie is a small file that seeks permission to be saved on your computer\'s hard drive. Once granted, the cookie helps notify you when you visit a particular website or assists with traffic analysis. Cookies allow web applications to respond to you individually by modifying operations to suit your needs, likes, and preferences.',
      },
      {
        sub: 'How We Use Cookies',
        text: 'We use traffic log cookies to identify which pages are being used. This helps us assess web page traffic and improve our website to better meet user requests. We utilise this data purely for statistical analysis and then remove it from the system. Cookies let us learn which pages are beneficial to you, enabling us to deliver a better website experience. A cookie never gives us access to your computer or any personally identifiable information beyond what you choose to share.',
      },
      {
        sub: 'Managing Cookies',
        text: 'You can choose to accept or reject cookies. Most web browsers accept cookies by default, but you can modify your browser settings to decline them. This may, however, impact the website\'s usability and reduce the quality of your experience.',
      },
    ],
  },
  {
    icon: <LinkRounded />,
    title: 'Third-Party Website Links',
    accent: '#ef4444',
    iconBg: 'linear-gradient(135deg, #fee2e2, #fecaca)',
    iconColor: '#ef4444',
    bar: 'linear-gradient(90deg, #ef4444, #f87171)',
    shadow: 'rgba(239,68,68,.13)',
    content: [
      'While administering our website, you may encounter links to partner networks, affiliates, and advertisers. It is important to understand that once you click on such a link and visit an external website, we can no longer guarantee the security of that website.',
      'Visiting a third-party link means you have left our website, and we cannot be held liable for the privacy practices or content of those external sites. Always verify the legitimacy of any third-party link before clicking, and ensure you have a clear understanding of their terms and privacy policies.',
    ],
  },
];

const tocItems = sections.map((s) => s.title);

/* ─── Component ──────────────────────────────────────────── */
const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <PrivacyStyles />
      
      {/* Navbar */}
      <Navbar />

      {/* ── Hero ── */}
      <Box
        sx={{
          position: 'relative',
          pt: { xs: 10, sm: 12, md: 14 },
          pb: { xs: 5, sm: 6, md: 7 },
          background:
            'linear-gradient(170deg, #060f25 0%, #0b1a3e 55%, #081530 100%)',
          overflow: 'hidden',
          mt: { xs: '64px', sm: '72px', md: '80px' }, // Offset for fixed navbar
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
              'radial-gradient(circle, rgba(99,179,237,.08) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            maskImage:
              'radial-gradient(ellipse 90% 80% at 50% 50%, black 20%, transparent 100%)',
          }}
        />

        {/* Blobs */}
        <Box
          className="pv-glow"
          sx={{
            position: 'absolute',
            top: '-12%',
            right: '-8%',
            width: { xs: 220, sm: 300, md: 400 },
            height: { xs: 220, sm: 300, md: 400 },
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(14,90,240,.2), transparent 68%)',
            filter: 'blur(55px)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
        <Box
          className="pv-glow"
          sx={{
            position: 'absolute',
            bottom: '-15%',
            left: '-8%',
            width: { xs: 180, sm: 260, md: 340 },
            height: { xs: 180, sm: 260, md: 340 },
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(0,161,224,.15), transparent 68%)',
            filter: 'blur(50px)',
            pointerEvents: 'none',
            zIndex: 0,
            animationDelay: '1.6s',
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
          {/* Back */}
          <Box className="pv-hero" sx={{ mb: { xs: 3, md: 4 } }}>
            <Link
              href="/"
              className="pv-back"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                textDecoration: 'none',
                color: 'rgba(255,255,255,.5)',
                fontFamily: "'Outfit', sans-serif",
                fontSize: '.88rem',
                fontWeight: 500,
              }}
            >
              <ArrowBackRounded
                className="pv-back-arrow"
                sx={{ fontSize: 18 }}
              />
              Back to Home
            </Link>
          </Box>

          {/* Hero content */}
          <Box
            className="pv-hero"
            sx={{
              textAlign: { xs: 'center', md: 'left' },
              maxWidth: 720,
              mx: { xs: 'auto', md: 0 },
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
                mb: { xs: 2.5, md: 3 },
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
                Legal
              </Typography>
            </Box>

            <Typography
              component="h1"
              sx={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 800,
                fontSize: {
                  xs: '1.8rem',
                  sm: '2.2rem',
                  md: '2.8rem',
                  lg: '3.2rem',
                },
                lineHeight: 1.12,
                letterSpacing: '-.032em',
                color: '#fff',
                mb: 2,
              }}
            >
              Privacy{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(90deg, #0e5af0, #63b3ed)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Policy
              </Box>
            </Typography>

            <Typography
              sx={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 400,
                fontSize: { xs: '.9rem', sm: '.96rem', md: '1.02rem' },
                color: 'rgba(255,255,255,.55)',
                lineHeight: 1.8,
                maxWidth: 560,
                mx: { xs: 'auto', md: 0 },
              }}
            >
              Learn how Bendra collects, uses, and protects your personal
              information when you interact with our website and services.
            </Typography>

            {/* Last updated */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.8,
                mt: 3,
                px: 1.5,
                py: 0.6,
                borderRadius: '8px',
                background: 'rgba(255,255,255,.04)',
                border: '1px solid rgba(255,255,255,.08)',
              }}
            >
              <ShieldRounded
                sx={{ fontSize: 15, color: 'rgba(255,255,255,.35)' }}
              />
              <Typography
                sx={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '.74rem',
                  color: 'rgba(255,255,255,.35)',
                  fontWeight: 400,
                }}
              >
                Last updated: May 2025
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Content ── */}
      <Box
        sx={{
          position: 'relative',
          py: { xs: 6, sm: 7, md: 8 },
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
              'radial-gradient(circle, rgba(14,31,64,.042) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            maskImage:
              'radial-gradient(ellipse 85% 70% at 50% 50%, black 20%, transparent 100%)',
          }}
        />

        {/* Blobs */}
        <Box
          className="pv-glow"
          sx={{
            position: 'absolute',
            top: '-6%',
            left: '-5%',
            width: { xs: 200, sm: 280, md: 340 },
            height: { xs: 200, sm: 280, md: 340 },
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(14,90,240,.06), transparent 68%)',
            filter: 'blur(55px)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
        <Box
          className="pv-glow"
          sx={{
            position: 'absolute',
            bottom: '-6%',
            right: '-5%',
            width: { xs: 180, sm: 240, md: 300 },
            height: { xs: 180, sm: 240, md: 300 },
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(0,161,224,.06), transparent 68%)',
            filter: 'blur(50px)',
            pointerEvents: 'none',
            zIndex: 0,
            animationDelay: '1.8s',
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
          <Box
            className="pv-content"
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', lg: '280px 1fr' },
              gap: { xs: 4, lg: 5 },
              alignItems: 'start',
            }}
          >
            {/* ── TOC Sidebar ── */}
            <Box
              sx={{
                position: { lg: 'sticky' },
                top: { lg: 100 },
                display: { xs: 'none', lg: 'block' },
              }}
            >
              <Box
                sx={{
                  borderRadius: '18px',
                  background: 'rgba(248,250,252,.95)',
                  border: '1.5px solid rgba(14,31,64,.06)',
                  p: 2.5,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 700,
                    fontSize: '.74rem',
                    color: 'rgba(14,31,64,.3)',
                    letterSpacing: '.14em',
                    textTransform: 'uppercase',
                    mb: 2,
                  }}
                >
                  On this page
                </Typography>

                <Box
                  component="ul"
                  sx={{
                    listStyle: 'none',
                    p: 0,
                    m: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0.8,
                  }}
                >
                  {tocItems.map((item, i) => (
                    <Box component="li" key={item}>
                      <Box
                        className="pv-toc-link"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          cursor: 'pointer',
                          textDecoration: 'none',
                          color: 'rgba(11,24,54,.5)',
                        }}
                        onClick={() => {
                          document
                            .getElementById(`pv-section-${i}`)
                            ?.scrollIntoView({
                              behavior: 'smooth',
                              block: 'start',
                            });
                        }}
                      >
                        <Box
                          sx={{
                            width: 5,
                            height: 5,
                            borderRadius: '50%',
                            background: sections[i].accent,
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          sx={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: '.82rem',
                            fontWeight: 500,
                            color: 'inherit',
                            lineHeight: 1.3,
                          }}
                        >
                          {item}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>

            {/* ── Policy Cards ── */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: 2.5, md: 3 },
              }}
            >
              {sections.map((sec, i) => (
                <Box
                  key={i}
                  id={`pv-section-${i}`}
                  className="pv-card"
                  sx={{
                    animation: `fadeUp .65s cubic-bezier(.16,1,.3,1) ${0.1 + i * 0.06}s both`,
                    scrollMarginTop: { xs: 80, md: 100 },
                  }}
                >
                  {/* Top accent bar */}
                  <Box
                    className="pv-card-bar"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: sec.bar,
                      borderRadius: '20px 20px 0 0',
                      zIndex: 2,
                    }}
                  />

                  {/* Hover glow */}
                  <Box
                    className="pv-card-glow"
                    sx={{
                      position: 'absolute',
                      top: '-20%',
                      left: '15%',
                      right: '15%',
                      height: '50%',
                      borderRadius: '50%',
                      background: `radial-gradient(ellipse, ${sec.accent}0b, transparent 70%)`,
                      filter: 'blur(24px)',
                      opacity: 0,
                      pointerEvents: 'none',
                      zIndex: 0,
                    }}
                  />

                  {/* Content */}
                  <Box
                    sx={{
                      p: { xs: 2.5, sm: 3, md: 3.5 },
                      display: 'flex',
                      gap: { xs: 2, md: 2.5 },
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {/* Icon */}
                    <Box
                      className="pv-card-icon"
                      sx={{
                        width: { xs: 48, md: 54 },
                        height: { xs: 48, md: 54 },
                        borderRadius: '14px',
                        background: sec.iconBg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 5px 16px ${sec.shadow}`,
                        flexShrink: 0,
                        mt: 0.3,
                        '& .MuiSvgIcon-root': {
                          fontSize: { xs: 22, md: 25 },
                          color: sec.iconColor,
                        },
                      }}
                    >
                      {sec.icon}
                    </Box>

                    {/* Text */}
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography
                        sx={{
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontWeight: 700,
                          fontSize: { xs: '1.05rem', md: '1.15rem' },
                          color: '#0b1836',
                          lineHeight: 1.28,
                          letterSpacing: '-.015em',
                          mb: { xs: 1.5, md: 2 },
                        }}
                      >
                        {sec.title}
                      </Typography>

                      {/* Paragraphs */}
                      {sec.content.map((para, pi) => (
                        <Typography
                          key={pi}
                          sx={{
                            fontFamily: "'Outfit', sans-serif",
                            fontWeight: 400,
                            fontSize: { xs: '.86rem', md: '.92rem' },
                            color: 'rgba(11,24,54,.6)',
                            lineHeight: 1.8,
                            mb: pi < sec.content.length - 1 ? 1.8 : (sec.bullets || sec.subSections) ? 1.8 : 0,
                          }}
                        >
                          {para}
                        </Typography>
                      ))}

                      {/* Bullet list */}
                      {sec.bullets && (
                        <Box
                          component="ul"
                          sx={{
                            listStyle: 'none',
                            p: 0,
                            m: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: { xs: 1, md: 1.2 },
                            mb: 0,
                          }}
                        >
                          {sec.bullets.map((b, bi) => (
                            <Box
                              component="li"
                              key={bi}
                              sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: 1,
                              }}
                            >
                              <Box
                                sx={{
                                  width: 6,
                                  height: 6,
                                  borderRadius: '50%',
                                  background: sec.accent,
                                  flexShrink: 0,
                                  mt: { xs: '7px', md: '8px' },
                                }}
                              />
                              <Typography
                                sx={{
                                  fontFamily: "'Outfit', sans-serif",
                                  fontWeight: 400,
                                  fontSize: { xs: '.86rem', md: '.92rem' },
                                  color: 'rgba(11,24,54,.6)',
                                  lineHeight: 1.8,
                                }}
                              >
                                {b}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      )}

                      {/* Sub-sections (Cookies) */}
                      {sec.subSections && (
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: { xs: 2, md: 2.5 },
                          }}
                        >
                          {sec.subSections.map((ss, si) => (
                            <Box key={si}>
                              <Typography
                                sx={{
                                  fontFamily: "'Bricolage Grotesque', sans-serif",
                                  fontWeight: 700,
                                  fontSize: { xs: '.92rem', md: '.98rem' },
                                  color: '#0b1836',
                                  lineHeight: 1.3,
                                  mb: 0.8,
                                }}
                              >
                                {ss.sub}
                              </Typography>
                              <Typography
                                sx={{
                                  fontFamily: "'Outfit', sans-serif",
                                  fontWeight: 400,
                                  fontSize: { xs: '.86rem', md: '.92rem' },
                                  color: 'rgba(11,24,54,.6)',
                                  lineHeight: 1.8,
                                }}
                              >
                                {ss.text}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      )}
                    </Box>
                  </Box>
                </Box>
              ))}

              {/* ── Bottom disclaimer ── */}
              <Box
                sx={{
                  mt: { xs: 1, md: 2 },
                  p: { xs: 2.5, sm: 3 },
                  borderRadius: '16px',
                  background: 'rgba(248,250,252,.9)',
                  border: '1px solid rgba(14,31,64,.06)',
                  animation: 'fadeUp .65s cubic-bezier(.16,1,.3,1) .6s both',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1.5,
                  }}
                >
                  <PolicyRounded
                    className="pv-float"
                    sx={{
                      fontSize: 20,
                      color: 'rgba(14,90,240,.5)',
                      mt: 0.2,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 400,
                      fontSize: { xs: '.82rem', md: '.86rem' },
                      color: 'rgba(11,24,54,.48)',
                      lineHeight: 1.75,
                    }}
                  >
                    This privacy policy is effective from the date of your
                    use of this website. By accessing and using our website,
                    you acknowledge that you have read, understood, and
                    agree to the practices described herein. For any
                    questions or concerns, contact us at{' '}
                    <Box
                      component="a"
                      href="mailto:marketing@acasa.ae"
                      sx={{
                        color: '#0e5af0',
                        textDecoration: 'none',
                        fontWeight: 500,
                        borderBottom: '1px solid rgba(14,90,240,.3)',
                        transition: 'border-color .2s ease',
                        '&:hover': { borderColor: '#0e5af0' },
                      }}
                    >
                      marketing@acasa.ae
                    </Box>
                    .
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default PrivacyPolicy;