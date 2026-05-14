'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { NorthEast } from '@mui/icons-material';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/* ─── Styles ──────────────────────────────────────────────── */
const TermsStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=Outfit:wght@300;400;500;600&display=swap');

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(22px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @keyframes textIn {
      from { opacity: 0; transform: translateY(14px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @keyframes glowPulse {
      0%, 100% { opacity: .45; transform: scale(1); }
      50%       { opacity: .8;  transform: scale(1.05); }
    }

    .terms-header  { animation: fadeUp .7s cubic-bezier(.16,1,.3,1) .05s both; }
    .terms-content { animation: textIn .6s cubic-bezier(.16,1,.3,1) .1s both; }
    .terms-link    { animation: textIn .5s cubic-bezier(.16,1,.3,1) .15s both; }
    .terms-glow    { animation: glowPulse 5s ease-in-out infinite; }

    .terms-section-card {
      transition: transform .28s ease, box-shadow .28s ease, border-color .25s ease;
      -webkit-tap-highlight-color: transparent;
    }

    @media (hover: hover) {
      .terms-section-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 32px rgba(14,31,64,.08) !important;
        border-color: rgba(14,90,240,.15) !important;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .terms-header, .terms-content, .terms-link,
      .terms-glow, .terms-section-card {
        animation: none !important;
        transition: none !important;
      }
    }
  `}</style>
);

/* ─── Sections Data ─────────────────────────────────────── */
const termsSections = [
  {
    num: '01',
    title: 'User License',
    accent: '#0e5af0',
    bar: 'linear-gradient(90deg, #0e5af0, #60a5fa)',
    content: [
      'We authorize you to temporarily download a copy of the content or software found on the DigitaleMantra website. This is solely for temporary viewing for personal, non-commercial use.',
      'We give you the right to view; we don\'t give you the right to transfer the title. Additionally, you are prohibited from altering the materials on our website for any commercial reason or public exhibition according to this Agreement (commercial or non-commercial).',
      'Removing copyright or other proprietary notations from the materials, their transfer to another person, or their "mirroring" on another server would all be illegal under Indian law. This would also apply to any attempt to decompile or reverse engineer software found on DigitaleMantra\'s website.',
      'If you have any disagreements regarding the ones exhibited on the website, your license can be terminated by DigitaleMantra. If this license or your right to access these materials ends, you must delete any downloaded materials that you have obtained, whether in digital or printed form.',
    ],
  },
  {
    num: '02',
    title: 'Disclaimer',
    accent: '#7c3aed',
    bar: 'linear-gradient(90deg, #7c3aed, #c4b5fd)',
    content: [
      'The content portrayed by the DigitaleMantra website is on a completely "as-is" basis. No warranties, either portrayed or even implied, are made by DigitaleMantra.',
      'All other warranties, including any implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of any intellectual property rights or other rights, are now disclaimed and negated.',
      'Additionally, DigitaleMantra makes no guarantees or claims as to the accuracy, likely outcomes, or reliability of the use of the contents on this website or otherwise connected to such materials or other sites linked to this one.',
    ],
  },
  {
    num: '03',
    title: 'Accuracy of Content Materials',
    accent: '#0d9488',
    bar: 'linear-gradient(90deg, #0d9488, #5eead4)',
    content: [
      'Each of the materials shown on the official website of DigitaleMantra may have a possibility of different error genres like technical, typography, as well as photographic errors.',
      'At DigitaleMantra, we do not endorse that each of the content that has been posted is 100% accurate or not deviant from the base. We can also make tweaks anytime without any prior intimation; hence, the entire showcase is our brainchild.',
      'DigitaleMantra does not have any prior commitments when it comes to updating the material as per your needs.',
    ],
  },
  {
    num: '04',
    title: 'Links',
    accent: '#d97706',
    bar: 'linear-gradient(90deg, #d97706, #fde68a)',
    content: [
      'At DigitaleMantra, we do not hold accountability for any of the links provided because we have not checked the content nor the updates provided individually.',
      'Furthermore, any of the links we used at DigitaleMantra does not imply that it has been endorsed for the long term. Accessing links is the user\'s discretion and does not fall under our prerogatives.',
    ],
  },
  {
    num: '05',
    title: 'Governing Law',
    accent: '#e11d48',
    bar: 'linear-gradient(90deg, #e11d48, #fda4af)',
    content: [
      'These terms and conditions shall be governed by and construed following the laws of India.',
      'You expressly consent to the exclusive jurisdiction of the courts in that State or location.',
    ],
  },
];

/* ─── Component ─────────────────────────────────────────── */
const TermsAndConditions = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmall = useMediaQuery('(max-width:360px)');

  return (
    <>
      <TermsStyles />
      <Navbar />

      <Box
        sx={{
          position: 'relative',
          pt: { xs: 14, sm: 15, md: 16 },
          pb: { xs: 7, md: 10 },
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
              'radial-gradient(circle, rgba(14,31,64,.042) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            maskImage:
              'radial-gradient(ellipse 90% 70% at 50% 50%, black 20%, transparent 100%)',
          }}
        />

        {/* Blobs */}
        <Box
          className="terms-glow"
          sx={{
            position: 'absolute',
            top: '-8%',
            left: '-5%',
            width: { xs: 260, sm: 320, md: 380 },
            height: { xs: 260, sm: 320, md: 380 },
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(14,90,240,.07), transparent 68%)',
            filter: 'blur(55px)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
        <Box
          className="terms-glow"
          sx={{
            position: 'absolute',
            bottom: '-6%',
            right: '-5%',
            width: { xs: 220, sm: 260, md: 300 },
            height: { xs: 220, sm: 260, md: 300 },
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(124,58,237,.06), transparent 68%)',
            filter: 'blur(48px)',
            pointerEvents: 'none',
            zIndex: 0,
            animationDelay: '1.8s',
          }}
        />
        <Box
          className="terms-glow"
          sx={{
            position: 'absolute',
            top: '40%',
            right: '-3%',
            width: { xs: 180, sm: 220, md: 260 },
            height: { xs: 180, sm: 220, md: 260 },
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(0,161,224,.05), transparent 68%)',
            filter: 'blur(45px)',
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
          {/* ── Header ─────────────────────────────────── */}
          <Box
            className="terms-header"
            sx={{
              textAlign: 'center',
              mb: { xs: 5, md: 7 },
              maxWidth: 750,
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
                Legal
              </Typography>
            </Box>

            {/* Heading */}
            <Typography
              component="h1"
              sx={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 800,
                fontSize: {
                  xs: isSmall ? '1.5rem' : '1.7rem',
                  sm: '2.1rem',
                  md: '2.6rem',
                  lg: '2.9rem',
                },
                lineHeight: 1.14,
                letterSpacing: '-.032em',
                color: '#0b1836',
                mb: 1.8,
              }}
            >
              Terms &amp;{' '}
              <Box
                component="span"
                sx={{
                  background:
                    'linear-gradient(90deg, #0e5af0, #00a1e0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Conditions
              </Box>
            </Typography>

            {/* Subtitle */}
            <Typography
              sx={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 400,
                fontSize: { xs: '.88rem', sm: '.92rem', md: '1rem' },
                color: 'rgba(11,24,54,.52)',
                lineHeight: 1.8,
                maxWidth: 580,
                mx: 'auto',
                px: { xs: 1, sm: 0 },
              }}
            >
              Please read these terms carefully before using our website.
              By accessing DigitaleMantra, you agree to comply with all
              terms and conditions outlined below.
            </Typography>
          </Box>

          {/* ── Intro Block ────────────────────────────── */}
          <Box
            className="terms-content"
            sx={{
              maxWidth: 860,
              mx: 'auto',
              mb: { xs: 4, md: 5 },
            }}
          >
            <Box
              sx={{
                borderRadius: { xs: '18px', md: '22px' },
                border: '1.5px solid rgba(14,90,240,.12)',
                background:
                  'linear-gradient(145deg, rgba(14,90,240,.03) 0%, rgba(0,161,224,.02) 100%)',
                p: { xs: 2.5, sm: 3, md: 3.5 },
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Decorative bar */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background:
                    'linear-gradient(90deg, #0e5af0, #00a1e0, #0e5af0)',
                  borderRadius: '22px 22px 0 0',
                }}
              />

              <Typography
                sx={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 400,
                  fontSize: { xs: '.86rem', md: '.94rem' },
                  color: '#475569',
                  lineHeight: 1.85,
                }}
              >
                As you visit the official website of DigitaleMantra
                (https://www.digitalemantra.com/), you now abide by all the
                terms and conditions for the services. You also choose to stick
                to the complaint laws, which might be applicable along with the
                local laws governing company policy.
              </Typography>

              <Typography
                sx={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 400,
                  fontSize: { xs: '.86rem', md: '.94rem' },
                  color: '#475569',
                  lineHeight: 1.85,
                  mt: 2,
                }}
              >
                In case you do not wish to comply with any of the terms and
                conditions which we have set up, you can easily choose to opt
                out from using the official website of DigitaleMantra. Do
                remember that each of the contents that have been posted on
                the official website is protected by trademark law and is
                owned by us at DigitaleMantra as the sole copyright owner.
              </Typography>

              <Typography
                sx={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 400,
                  fontSize: { xs: '.86rem', md: '.94rem' },
                  color: '#475569',
                  lineHeight: 1.85,
                  mt: 2,
                }}
              >
                For the Agreement, the websites owned, operated, or hosted by
                the company or on its behalf are collectively referred to as
                the Company Websites. For clients to access Company Services or
                Websites, extra information or registration credentials may be
                needed. In addition, the Client must supply correct, up-to-date,
                and comprehensive information to use the Services or access the
                Company Websites.
              </Typography>
            </Box>
          </Box>

          {/* ── Section Cards ──────────────────────────── */}
          <Box
            sx={{
              maxWidth: 860,
              mx: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 2.5, md: 3 },
              mb: { xs: 5, md: 7 },
            }}
          >
            {termsSections.map((section, i) => (
              <Box
                key={section.num}
                className="terms-section-card"
                sx={{
                  borderRadius: { xs: '18px', md: '22px' },
                  border: '1.5px solid rgba(14,31,64,.08)',
                  background: '#fff',
                  boxShadow: '0 2px 14px rgba(14,31,64,.04)',
                  position: 'relative',
                  overflow: 'hidden',
                  animation: `textIn .6s cubic-bezier(.16,1,.3,1) ${0.15 + i * 0.06}s both`,
                }}
              >
                {/* Top accent bar */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: section.bar,
                    borderRadius: '22px 22px 0 0',
                    zIndex: 2,
                  }}
                />

                {/* Content */}
                <Box
                  sx={{
                    p: { xs: 2.5, sm: 3, md: 3.5 },
                  }}
                >
                  {/* Header row */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: { xs: 'flex-start', sm: 'center' },
                      gap: { xs: 1.5, sm: 2 },
                      mb: 2,
                      flexDirection: { xs: 'column', sm: 'row' },
                    }}
                  >
                    {/* Number badge */}
                    <Box
                      sx={{
                        width: { xs: 40, md: 46 },
                        height: { xs: 40, md: 46 },
                        borderRadius: '12px',
                        background: `linear-gradient(135deg, ${section.accent}15, ${section.accent}08)`,
                        border: `1.5px solid ${section.accent}22`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily:
                            "'Bricolage Grotesque', sans-serif",
                          fontWeight: 800,
                          fontSize: { xs: '.82rem', md: '.88rem' },
                          color: section.accent,
                          letterSpacing: '.05em',
                        }}
                      >
                        {section.num}
                      </Typography>
                    </Box>

                    {/* Title */}
                    <Typography
                      sx={{
                        fontFamily:
                          "'Bricolage Grotesque', sans-serif",
                        fontWeight: 700,
                        fontSize: {
                          xs: '1.05rem',
                          sm: '1.12rem',
                          md: '1.2rem',
                        },
                        color: '#0b1836',
                        lineHeight: 1.25,
                        letterSpacing: '-.015em',
                      }}
                    >
                      {section.title}
                    </Typography>
                  </Box>

                  {/* Paragraphs */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1.5,
                      pl: { xs: 0, sm: 7.5 },
                    }}
                  >
                    {section.content.map((para, pIdx) => (
                      <Typography
                        key={pIdx}
                        sx={{
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: 400,
                          fontSize: {
                            xs: '.84rem',
                            sm: '.88rem',
                            md: '.92rem',
                          },
                          color: 'rgba(11,24,54,.55)',
                          lineHeight: 1.78,
                        }}
                      >
                        {para}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          {/* ── Bottom Links ───────────────────────────── */}
          <Box
            className="terms-link"
            sx={{
              maxWidth: 860,
              mx: 'auto',
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              gap: { xs: 1.5, sm: 2 },
            }}
          >
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2.5,
                  py: 1.2,
                  borderRadius: '12px',
                  border: '1.5px solid rgba(14,90,240,.2)',
                  background: 'rgba(14,90,240,.04)',
                  color: '#0e5af0',
                  cursor: 'pointer',
                  transition: 'all .3s ease',
                  '&:hover': {
                    background: 'rgba(14,90,240,.08)',
                    borderColor: 'rgba(14,90,240,.35)',
                    transform: 'translateY(-2px)',
                    boxShadow:
                      '0 8px 24px rgba(14,90,240,.12)',
                  },
                  '&:active': { transform: 'scale(.97)' },
                }}
              >
                <Typography
                  sx={{
                    fontFamily:
                      "'Bricolage Grotesque', sans-serif",
                    fontWeight: 600,
                    fontSize: { xs: '.8rem', md: '.85rem' },
                    color: 'inherit',
                    letterSpacing: '.02em',
                  }}
                >
                  Back to Home
                </Typography>
                <NorthEast
                  sx={{
                    fontSize: { xs: 14, md: 16 },
                    color: 'inherit',
                  }}
                />
              </Box>
            </Link>

            <Link
              href="/privacy"
              style={{ textDecoration: 'none' }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2.5,
                  py: 1.2,
                  borderRadius: '12px',
                  border: '1.5px solid rgba(124,58,237,.2)',
                  background: 'rgba(124,58,237,.04)',
                  color: '#7c3aed',
                  cursor: 'pointer',
                  transition: 'all .3s ease',
                  '&:hover': {
                    background: 'rgba(124,58,237,.08)',
                    borderColor: 'rgba(124,58,237,.35)',
                    transform: 'translateY(-2px)',
                    boxShadow:
                      '0 8px 24px rgba(124,58,237,.12)',
                  },
                  '&:active': { transform: 'scale(.97)' },
                }}
              >
                <Typography
                  sx={{
                    fontFamily:
                      "'Bricolage Grotesque', sans-serif",
                    fontWeight: 600,
                    fontSize: { xs: '.8rem', md: '.85rem' },
                    color: 'inherit',
                    letterSpacing: '.02em',
                  }}
                >
                  Privacy Policy
                </Typography>
                <NorthEast
                  sx={{
                    fontSize: { xs: 14, md: 16 },
                    color: 'inherit',
                  }}
                />
              </Box>
            </Link>

            <Link
              href="/refund"
              style={{ textDecoration: 'none' }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2.5,
                  py: 1.2,
                  borderRadius: '12px',
                  border: '1.5px solid rgba(13,148,136,.2)',
                  background: 'rgba(13,148,136,.04)',
                  color: '#0d9488',
                  cursor: 'pointer',
                  transition: 'all .3s ease',
                  '&:hover': {
                    background: 'rgba(13,148,136,.08)',
                    borderColor: 'rgba(13,148,136,.35)',
                    transform: 'translateY(-2px)',
                    boxShadow:
                      '0 8px 24px rgba(13,148,136,.12)',
                  },
                  '&:active': { transform: 'scale(.97)' },
                }}
              >
                <Typography
                  sx={{
                    fontFamily:
                      "'Bricolage Grotesque', sans-serif",
                    fontWeight: 600,
                    fontSize: { xs: '.8rem', md: '.85rem' },
                    color: 'inherit',
                    letterSpacing: '.02em',
                  }}
                >
                  Refund Policy
                </Typography>
                <NorthEast
                  sx={{
                    fontSize: { xs: 14, md: 16 },
                    color: 'inherit',
                  }}
                />
              </Box>
            </Link>
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default TermsAndConditions;