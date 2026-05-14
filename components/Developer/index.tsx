'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';

/* ─── Fonts & Keyframes ─────────────────────────────────────── */
const Styles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=Outfit:wght@300;400;500&display=swap');

    @keyframes fadeSlideUp {
      from { opacity: 0; transform: translateY(22px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @keyframes pulseRing {
      0%, 100% { transform: scale(1);   opacity: .5; }
      50%       { transform: scale(1.2); opacity: 1;  }
    }

    @keyframes driftLeft  { from { transform: translateX(0); }    to { transform: translateX(-50%); } }
    @keyframes slideTrack { from { transform: translateX(var(--offset, 0px)); } to { transform: translateX(calc(var(--offset, 0px) - 50%)); } }

    .dev-pill    { animation: fadeSlideUp .5s cubic-bezier(.16,1,.3,1) both; }
    .dev-heading { animation: fadeSlideUp .65s cubic-bezier(.16,1,.3,1) .07s both; }
    .dev-copy    { animation: fadeSlideUp .65s cubic-bezier(.16,1,.3,1) .14s both; }
    .dev-strip   { animation: fadeSlideUp .7s  cubic-bezier(.16,1,.3,1) .22s both; }

    .dot-pulse { animation: pulseRing 2.4s ease-in-out infinite; }

    /* ── Carousel track ── */
    .track-wrap  { overflow: hidden; width: 100%; cursor: grab; user-select: none; }
    .track-wrap:active { cursor: grabbing; }
    .logo-track  {
      display: flex;
      align-items: center;
      width: max-content;
      will-change: transform;
      backface-visibility: hidden;
      animation: driftLeft 28s linear infinite;
    }
    .logo-track.paused { animation-play-state: paused; }

    /* ── Logo card ── */
    .lcard {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      border: 1.5px solid rgba(14,31,64,.09);
      border-radius: 20px;
      padding: 22px 36px;
      margin: 0 12px;
      min-width: 200px;
      height: 100px;
      box-shadow: 0 2px 14px rgba(14,31,64,.055);
      transition: transform .28s ease, box-shadow .28s ease, border-color .28s ease;
      position: relative;
      overflow: hidden;
    }
    .lcard::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 50% 0%, rgba(14,90,240,.07), transparent 65%);
      opacity: 0;
      transition: opacity .28s ease;
    }
    .lcard:hover {
      transform: translateY(-5px);
      box-shadow: 0 16px 36px rgba(14,31,64,.10);
      border-color: rgba(14,90,240,.2);
    }
    .lcard:hover::before { opacity: 1; }

    /* Focus / featured cards */
    .lcard.featured {
      border-color: rgba(14,90,240,.18);
      background: linear-gradient(160deg, #f7f9ff 0%, #fff 100%);
      box-shadow: 0 4px 22px rgba(14,90,240,.08);
    }

    /* Edge fades */
    .fade-l, .fade-r {
      position: absolute;
      top: 0; bottom: 0;
      width: 90px;
      z-index: 3;
      pointer-events: none;
    }
    .fade-l { left: 0;  background: linear-gradient(to right, rgba(246,249,255,1), rgba(246,249,255,0)); }
    .fade-r { right: 0; background: linear-gradient(to left,  rgba(246,249,255,1), rgba(246,249,255,0)); }

    /* Stat chips */
    .stat-chip {
      display: flex; flex-direction: column; align-items: center;
      padding: 14px 28px;
      background: #fff;
      border: 1.5px solid rgba(14,31,64,.08);
      border-radius: 16px;
      box-shadow: 0 2px 12px rgba(14,31,64,.05);
      transition: transform .22s ease;
    }
    .stat-chip:hover { transform: translateY(-3px); }

    @media (prefers-reduced-motion: reduce) {
      .logo-track { animation: none !important; }
      .lcard, .stat-chip { transition: none !important; }
    }

    @media (max-width: 600px) {
      .lcard { min-width: 160px; height: 82px; padding: 16px 24px; }
      .fade-l, .fade-r { width: 40px; }
    }
  `}</style>
);

/* ─── Logo data ──────────────────────────────────────────────── */
const logos = [
  {
    name: 'Zoho',
    featured: true,
    icon: (
      <svg viewBox="0 0 160 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="50" fontFamily="'Arial Black',sans-serif" fontWeight="900" fontSize="58" fill="#E42527">Z</text>
        <text x="44" y="50" fontFamily="'Arial Black',sans-serif" fontWeight="700" fontSize="44" fill="#1A1A1A">oho</text>
      </svg>
    ),
  },
  {
    name: 'Salesforce',
    featured: true,
    icon: (
      <svg viewBox="0 0 220 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="110" cy="52" rx="93" ry="20" fill="#00A1E0"/>
        <ellipse cx="70"  cy="44" rx="38"  ry="36" fill="#00A1E0"/>
        <ellipse cx="140" cy="35" rx="44"  ry="42" fill="#00A1E0"/>
        <ellipse cx="108" cy="27" rx="34"  ry="32" fill="#00A1E0"/>
        <text x="40" y="62" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="25" fill="#fff">salesforce</text>
      </svg>
    ),
  },
  {
    name: 'AWS',
    featured: false,
    icon: (
      <svg viewBox="0 0 130 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="40" fontFamily="'Arial Black',sans-serif" fontWeight="900" fontSize="44" fill="#232F3E">aws</text>
        <path d="M6 52 Q65 70 124 52" stroke="#FF9900" strokeWidth="5" fill="none" strokeLinecap="round"/>
        <polygon points="116,46 126,52 116,58" fill="#FF9900"/>
      </svg>
    ),
  },
  {
    name: 'Azure',
    featured: false,
    icon: (
      <svg viewBox="0 0 240 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,66 28,0 56,66" fill="#0078D4"/>
        <polygon points="28,0 72,66 44,66 56,33" fill="#50B0F0"/>
        <text x="66" y="52" fontFamily="'Segoe UI',Arial,sans-serif" fontWeight="600" fontSize="30" fill="#0078D4">Azure</text>
      </svg>
    ),
  },
  {
    name: 'Google Cloud',
    featured: false,
    icon: (
      <svg viewBox="0 0 310 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="33" r="26" fill="none" stroke="#ddd" strokeWidth="2"/>
        <path d="M32 9 A23 23 0 0 1 55 33 L32 33 Z" fill="#4285F4"/>
        <path d="M32 33 L55 33 A23 23 0 0 1 20 54 Z" fill="#34A853"/>
        <path d="M20 54 A23 23 0 0 1 9 13 Z" fill="#FBBC05"/>
        <path d="M9 13 A23 23 0 0 1 32 9 L20 54 Z" fill="#EA4335"/>
        <rect x="32" y="26" width="23" height="14" rx="2" fill="#fff"/>
        <text x="68" y="46" fontFamily="'Google Sans',Arial,sans-serif" fontWeight="400" fontSize="25" fill="#5F6368">Google Cloud</text>
      </svg>
    ),
  },
  {
    name: 'HubSpot',
    featured: false,
    icon: (
      <svg viewBox="0 0 240 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="33" cy="33" r="11"  fill="#FF7A59"/>
        <rect x="28" y="3"  width="10" height="13" rx="4" fill="#FF7A59"/>
        <rect x="28" y="50" width="10" height="13" rx="4" fill="#FF7A59"/>
        <rect x="3"  y="28" width="13" height="10" rx="4" fill="#FF7A59"/>
        <rect x="50" y="28" width="13" height="10" rx="4" fill="#FF7A59"/>
        <circle cx="33" cy="33" r="5.5" fill="#fff"/>
        <text x="74" y="46" fontFamily="'Lexend Deca',Arial,sans-serif" fontWeight="700" fontSize="27" fill="#1C1C1C">HubSpot</text>
      </svg>
    ),
  },
  {
    name: 'Microsoft',
    featured: false,
    icon: (
      <svg viewBox="0 0 260 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0"  y="2"  width="28" height="28" fill="#F25022"/>
        <rect x="30" y="2"  width="28" height="28" fill="#7FBA00"/>
        <rect x="0"  y="32" width="28" height="28" fill="#00A4EF"/>
        <rect x="30" y="32" width="28" height="28" fill="#FFB900"/>
        <text x="68" y="42" fontFamily="'Segoe UI',Arial,sans-serif" fontWeight="400" fontSize="25" fill="#1A1A1A">Microsoft</text>
      </svg>
    ),
  },
  {
    name: 'Docker',
    featured: false,
    icon: (
      <svg viewBox="0 0 220 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2"  y="20" width="15" height="15" rx="2" fill="#2496ED"/>
        <rect x="19" y="20" width="15" height="15" rx="2" fill="#2496ED"/>
        <rect x="36" y="20" width="15" height="15" rx="2" fill="#2496ED"/>
        <rect x="19" y="3"  width="15" height="15" rx="2" fill="#2496ED"/>
        <rect x="36" y="3"  width="15" height="15" rx="2" fill="#2496ED"/>
        <rect x="53" y="20" width="15" height="15" rx="2" fill="#2496ED"/>
        <path d="M2 44 Q35 58 66 44" stroke="#2496ED" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
        <circle cx="62" cy="28" r="5.5" fill="#2496ED"/>
        <text x="78" y="42" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="26" fill="#2496ED">Docker</text>
      </svg>
    ),
  },
];

/* Double for seamless loop */
const track = [...logos, ...logos];

/* ─── Stats ─────────────────────────────────────────────────── */
const stats = [
  { value: '8+', label: 'Platforms' },
  { value: '200+', label: 'Projects Delivered' },
  { value: '50+', label: 'Certified Experts' },
];

/* ─── Component ─────────────────────────────────────────────── */
const Developer: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  /* Pause on hover/touch */
  const pause = () => setPaused(true);
  const play  = () => setPaused(false);

  return (
    <>
      <Styles />

      <Box
        sx={{
          position: 'relative',
          py: { xs: 7, md: 10 },
          background: 'linear-gradient(170deg, #f0f5ff 0%, #f6f9ff 40%, #ffffff 100%)',
          borderTop: '1px solid rgba(14,31,64,.07)',
          borderBottom: '1px solid rgba(14,31,64,.07)',
          overflow: 'hidden',
        }}
      >
        {/* Background grid dots */}
        <Box sx={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
          backgroundImage: 'radial-gradient(circle, rgba(14,90,240,.07) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)',
        }}/>

        {/* Soft blobs */}
        <Box sx={{
          position: 'absolute', left: '-5%', top: '10%', width: 380, height: 380,
          borderRadius: '50%', pointerEvents: 'none', zIndex: 0,
          background: 'radial-gradient(circle, rgba(14,90,240,.09), transparent 68%)',
          filter: 'blur(50px)',
        }}/>
        <Box sx={{
          position: 'absolute', right: '-6%', bottom: '5%', width: 320, height: 320,
          borderRadius: '50%', pointerEvents: 'none', zIndex: 0,
          background: 'radial-gradient(circle, rgba(0,161,224,.08), transparent 68%)',
          filter: 'blur(44px)',
        }}/>

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2, px: { xs: 2, sm: 3, md: 5 } }}>

          {/* ── Header ───────────────────────────────────────── */}
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>

            {/* Pill */}
            <Box className="dev-pill" sx={{
              display: 'inline-flex', alignItems: 'center', gap: 1,
              px: 1.8, py: 0.75, mb: 2.5,
              borderRadius: '999px',
              border: '1.5px solid rgba(14,90,240,.18)',
              background: 'rgba(14,90,240,.06)',
              backdropFilter: 'blur(10px)',
            }}>
              <Box className="dot-pulse" sx={{
                width: 8, height: 8, borderRadius: '50%',
                background: '#0e5af0',
                boxShadow: '0 0 0 3px rgba(14,90,240,.2)',
              }}/>
              <Typography sx={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700, fontSize: '.7rem',
                color: '#0e5af0',
                textTransform: 'uppercase', letterSpacing: '.15em',
              }}>
                Our Ecosystem
              </Typography>
            </Box>

            {/* Heading */}
            <Typography className="dev-heading" component="h2" sx={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: { xs: '1.7rem', sm: '2.1rem', md: '2.7rem', lg: '3rem' },
              lineHeight: 1.15, letterSpacing: '-.035em',
              color: '#0b1836', mb: 1.8,
            }}>
              Platforms we build, connect{' '}
              <Box component="span" sx={{
                background: 'linear-gradient(90deg, #0e5af0, #00a1e0)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                &amp; scale with
              </Box>
            </Typography>

            {/* Copy */}
            <Typography className="dev-copy" sx={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 400, fontSize: { xs: '.92rem', md: '1.05rem' },
              color: 'rgba(11,24,54,.58)', lineHeight: 1.8,
              maxWidth: 580, mx: 'auto',
            }}>
              From CRM and cloud to automation and DevOps — we work across
              the world's most trusted platforms to ship fast, reliable, and
              scalable solutions.
            </Typography>
          </Box>

          {/* ── Featured duo (Zoho + Salesforce) ─────────────── */}
          <Box className="dev-strip" sx={{
            display: 'flex', gap: { xs: 2, md: 3 },
            justifyContent: 'center', mb: { xs: 4, md: 5 },
            flexWrap: 'wrap',
          }}>
            {logos.filter(l => l.featured).map(logo => (
              <Box key={logo.name} sx={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.4,
                background: '#fff',
                border: '2px solid rgba(14,90,240,.15)',
                borderRadius: '24px',
                px: { xs: 4, md: 6 }, py: { xs: 2.5, md: 3.2 },
                boxShadow: '0 6px 28px rgba(14,31,64,.09)',
                minWidth: { xs: 180, md: 240 },
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform .25s ease, box-shadow .25s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 18px 42px rgba(14,31,64,.13)',
                },
                '&::before': {
                  content: '""', position: 'absolute',
                  top: 0, left: '15%', right: '15%', height: '2px',
                  background: 'linear-gradient(90deg, transparent, rgba(14,90,240,.35), transparent)',
                },
              }}>
                <Box sx={{
                  '& svg': { display: 'block', height: { xs: 44, md: 54 }, width: 'auto', maxWidth: 220 },
                }}>
                  {logo.icon}
                </Box>
                <Box sx={{
                  display: 'inline-flex', alignItems: 'center', gap: .6,
                  px: 1.2, py: .35,
                  borderRadius: '999px',
                  background: 'rgba(14,90,240,.07)',
                  border: '1px solid rgba(14,90,240,.14)',
                }}>
                  <Box sx={{ width: 5, height: 5, borderRadius: '50%', background: '#0e5af0' }}/>
                  <Typography sx={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '.68rem', fontWeight: 600,
                    color: '#0e5af0', letterSpacing: '.06em',
                    textTransform: 'uppercase',
                  }}>
                    Primary Partner
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          {/* ── Marquee strip ────────────────────────────────── */}
          <Box className="dev-strip" sx={{
            position: 'relative',
            borderRadius: { xs: '20px', md: '26px' },
            border: '1.5px solid rgba(14,31,64,.08)',
            background: 'rgba(246,249,255,.92)',
            backdropFilter: 'blur(14px)',
            boxShadow: '0 8px 32px rgba(14,31,64,.06)',
            py: { xs: 2.5, md: 3 },
            overflow: 'hidden',
          }}>
            <div className="fade-l"/>
            <div className="fade-r"/>

            <div
              className="track-wrap"
              onMouseEnter={pause}
              onMouseLeave={play}
              onTouchStart={pause}
              onTouchEnd={play}
            >
              <div
                ref={trackRef}
                className={`logo-track${paused ? ' paused' : ''}`}
              >
                {track.map((logo, i) => (
                  <div
                    key={`${logo.name}-${i}`}
                    className={`lcard${logo.featured ? ' featured' : ''}`}
                  >
                    <Box sx={{
                      '& svg': {
                        display: 'block',
                        height: { xs: 34, sm: 40, md: 46 },
                        width: 'auto',
                        maxWidth: { xs: 130, md: 190 },
                      },
                    }}>
                      {logo.icon}
                    </Box>
                  </div>
                ))}
              </div>
            </div>

            <Typography sx={{
              fontFamily: "'Outfit', sans-serif",
              textAlign: 'center', mt: 1.8,
              fontSize: '.74rem', color: 'rgba(11,24,54,.4)',
              letterSpacing: '.05em',
            }}>
              Hover to pause · Trusted by businesses on leading platforms
            </Typography>
          </Box>

          {/* ── Stat chips ───────────────────────────────────── */}
          <Box sx={{
            display: 'flex', gap: { xs: 1.5, md: 2.5 },
            justifyContent: 'center', mt: { xs: 4, md: 5 },
            flexWrap: 'wrap',
          }}>
            {stats.map((s, i) => (
              <Box
                key={s.label}
                className="stat-chip"
                sx={{ animationDelay: `${.28 + i * .07}s` }}
              >
                <Typography sx={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 800, fontSize: { xs: '1.4rem', md: '1.75rem' },
                  color: '#0e5af0', lineHeight: 1,
                }}>
                  {s.value}
                </Typography>
                <Typography sx={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 400, fontSize: '.78rem',
                  color: 'rgba(11,24,54,.52)', mt: .5,
                  letterSpacing: '.03em',
                }}>
                  {s.label}
                </Typography>
              </Box>
            ))}
          </Box>

        </Container>
      </Box>
    </>
  );
};

export default Developer;