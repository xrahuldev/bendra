'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import {
  AccountBalanceRounded,
  PolicyRounded,
  GavelRounded,
  AutorenewRounded,
  WarningAmberRounded,
  HandshakeRounded,
  ArrowBackRounded,
} from '@mui/icons-material';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── Styles ──────────────────────────────────────────────── */
const RefundStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=Outfit:wght@300;400;500;600&display=swap');

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(24px); }
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

    @keyframes floatIcon {
      0%, 100% { transform: translateY(0); }
      50%       { transform: translateY(-4px); }
    }

    @keyframes accentSlide {
      from { width: 0; }
      to   { width: 100%; }
    }

    .rf-hero    { animation: fadeUp .75s cubic-bezier(.16,1,.3,1) .05s both; }
    .rf-content { animation: fadeUp .75s cubic-bezier(.16,1,.3,1) .15s both; }
    .rf-glow    { animation: glowPulse 5s ease-in-out infinite; }
    .rf-float   { animation: floatIcon 4s ease-in-out infinite; }

    /* ── Section Card ── */
    .rf-card {
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
    .rf-card::after {
      content: '';
      position: absolute;
      top: 0; left: 0;
      width: 36%; height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,.14), transparent);
      transform: translateX(-120%) skewX(-18deg);
      pointer-events: none;
      z-index: 9;
    }
    .rf-card-bar  { transition: height .28s ease; }
    .rf-card-icon { transition: transform .32s cubic-bezier(.34,1.4,.64,1), box-shadow .32s ease; }
    .rf-card-glow { transition: opacity .35s ease; }

    @media (hover: hover) {
      .rf-card:hover {
        transform: translateY(-6px) scale(1.01);
        border-color: rgba(14,90,240,.2) !important;
        box-shadow: 0 18px 40px rgba(14,90,240,.1) !important;
      }
      .rf-card:hover::after    { animation: shimmer .65s ease-out forwards; }
      .rf-card:hover .rf-card-bar  { height: 4px !important; }
      .rf-card:hover .rf-card-icon { transform: scale(1.08) rotate(-4deg); }
      .rf-card:hover .rf-card-glow { opacity: 1; }
    }

    @media (hover: none) { .rf-card:active { transform: scale(.97); } }

    /* ── Back link ── */
    .rf-back {
      transition: all .25s cubic-bezier(.34,1.4,.64,1) !important;
      -webkit-tap-highlight-color: transparent;
    }
    .rf-back:hover {
      color: #0e5af0 !important;
      transform: translateX(-3px);
    }
    .rf-back:hover .rf-back-arrow {
      transform: translateX(-3px);
    }
    .rf-back-arrow { transition: transform .25s ease; }

    /* ── TOC link ── */
    .rf-toc-link {
      transition: color .2s ease, transform .25s ease !important;
      -webkit-tap-highlight-color: transparent;
    }
    .rf-toc-link:hover {
      color: #0e5af0 !important;
      transform: translateX(4px);
    }

    @media (prefers-reduced-motion: reduce) {
      .rf-hero,.rf-content,.rf-glow,.rf-float,
      .rf-card,.rf-card-bar,.rf-card-icon,.rf-card-glow,
      .rf-back,.rf-back-arrow,.rf-toc-link {
        animation: none !important; transition: none !important;
      }
    }
  `}</style>
);

/* ─── Policy sections ────────────────────────────────────── */
const sections = [
  {
    icon: <AccountBalanceRounded />,
    title: 'No Cash Refund Policy',
    accent: '#0e5af0',
    iconBg: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
    iconColor: '#0e5af0',
    bar: 'linear-gradient(90deg, #0e5af0, #60a5fa)',
    shadow: 'rgba(14,90,240,.13)',
    content: [
      'At Bendra, we maintain a unique and transparent refund policy to ensure clarity for all our clients.',
      'We do not provide cash-based refunds in case you decide to cancel any project. If you have made a payment towards a project and the full project value has not been utilised, the remaining amount will be adjusted against the billing value of another project or service you choose to take from us.',
    ],
  },
  {
    icon: <AutorenewRounded />,
    title: 'Amount Adjustment',
    accent: '#0d9488',
    iconBg: 'linear-gradient(135deg, #ccfbf1, #99f6e4)',
    iconColor: '#0d9488',
    bar: 'linear-gradient(90deg, #0d9488, #5eead4)',
    shadow: 'rgba(13,148,136,.13)',
    content: [
      'The amount will not be handed over in cash or reimbursed under any circumstances. Instead, it will be credited and adjusted against the bill value of another project or service availed from us.',
      'This adjustment mechanism ensures that your investment remains protected and can be utilised for future services with Bendra.',
    ],
  },
  {
    icon: <GavelRounded />,
    title: 'Non-Subject to Change',
    accent: '#7c3aed',
    iconBg: 'linear-gradient(135deg, #ede9fe, #ddd6fe)',
    iconColor: '#7c3aed',
    bar: 'linear-gradient(90deg, #7c3aed, #c4b5fd)',
    shadow: 'rgba(124,58,237,.13)',
    content: [
      'This refund policy is firm and is not subject to change under any circumstances. It is a binding part of our engagement terms.',
      'The compensation we can offer is to work with you on any upcoming projects and settle the originally decided amount accordingly.',
    ],
  },
  {
    icon: <WarningAmberRounded />,
    title: 'Forfeiture Clause',
    accent: '#d97706',
    iconBg: 'linear-gradient(135deg, #fef3c7, #fde68a)',
    iconColor: '#d97706',
    bar: 'linear-gradient(90deg, #d97706, #fde68a)',
    shadow: 'rgba(217,119,6,.13)',
    content: [
      'If Bendra\'s team does not receive the required input, feedback, or response from the client for a continuous period of 20 days after the project has commenced, the amount paid will be forfeited.',
      'In such cases, the forfeited amount cannot be adjusted, compensated, or carried forward to any other project or request.',
    ],
  },
  {
    icon: <HandshakeRounded />,
    title: 'Our Commitment to Transparency',
    accent: '#ec4899',
    iconBg: 'linear-gradient(135deg, #fce7f3, #fbcfe8)',
    iconColor: '#ec4899',
    bar: 'linear-gradient(90deg, #ec4899, #f472b6)',
    shadow: 'rgba(236,72,153,.13)',
    content: [
      'Bendra is committed to maintaining complete transparency in all our terms and conditions. We believe in keeping our clients fully informed so that every engagement is smooth and trust-driven.',
      'If you have any questions regarding this policy, please reach out to us before project commencement.',
    ],
  },
];

const tocItems = sections.map((s) => s.title);

/* ─── Component ──────────────────────────────────────────── */
const RefundPolicy: React.FC = () => {
  return (
    <>
      <RefundStyles />
      
      {/* Navbar */}
      <Navbar />

      {/* ── Hero ── */}
      <Box
        sx={{
          position: 'relative',
          pt: { xs: 10, sm: 12, md: 14 },
          pb: { xs: 5, sm: 6, md: 7 },
          background: 'linear-gradient(170deg, #060f25 0%, #0b1a3e 55%, #081530 100%)',
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
          className="rf-glow"
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
          className="rf-glow"
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
          <Box className="rf-hero" sx={{ mb: { xs: 3, md: 4 } }}>
            <Link
              href="/"
              className="rf-back"
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
                className="rf-back-arrow"
                sx={{ fontSize: 18 }}
              />
              Back to Home
            </Link>
          </Box>

          {/* Hero content */}
          <Box
            className="rf-hero"
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
              Refund{' '}
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
              Understanding our refund and adjustment terms ensures a
              transparent and trust-driven engagement with Bendra.
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
              <PolicyRounded
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
          className="rf-glow"
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
          className="rf-glow"
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
            className="rf-content"
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', lg: '280px 1fr' },
              gap: { xs: 4, lg: 5 },
              alignItems: 'start',
            }}
          >
            {/* ── Table of Contents (sticky sidebar) ── */}
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
                        className="rf-toc-link"
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
                            .getElementById(`rf-section-${i}`)
                            ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
                  id={`rf-section-${i}`}
                  className="rf-card"
                  sx={{
                    animation: `fadeUp .65s cubic-bezier(.16,1,.3,1) ${0.1 + i * 0.06}s both`,
                    scrollMarginTop: { xs: 80, md: 100 },
                  }}
                >
                  {/* Top accent bar */}
                  <Box
                    className="rf-card-bar"
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
                    className="rf-card-glow"
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
                      className="rf-card-icon"
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

                      {sec.content.map((para, pi) => (
                        <Typography
                          key={pi}
                          sx={{
                            fontFamily: "'Outfit', sans-serif",
                            fontWeight: 400,
                            fontSize: { xs: '.86rem', md: '.92rem' },
                            color: 'rgba(11,24,54,.6)',
                            lineHeight: 1.8,
                            mb: pi < sec.content.length - 1 ? 1.8 : 0,
                          }}
                        >
                          {para}
                        </Typography>
                      ))}
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
                  animation: 'fadeUp .65s cubic-bezier(.16,1,.3,1) .5s both',
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
                    className="rf-float"
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
                    This policy is effective from the date of project
                    commencement and applies to all engagements with
                    Bendra. By engaging our services, you acknowledge that
                    you have read, understood, and agree to this refund
                    policy. For any queries, contact us at{' '}
                    <Box
                      component="a"
                      href="mailto:marketing@acasa.ae"
                      sx={{
                        color: '#0e5af0',
                        textDecoration: 'none',
                        fontWeight: 500,
                        borderBottom: '1px solid rgba(14,90,240,.3)',
                        transition: 'border-color .2s ease',
                        '&:hover': {
                          borderColor: '#0e5af0',
                        },
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

export default RefundPolicy;