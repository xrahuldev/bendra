'use client';

import React from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  GroupOutlined,
  VerifiedOutlined,
  AccessTimeOutlined,
  StarOutlineOutlined,
  NorthEast,
} from '@mui/icons-material';
import Link from 'next/link';

/* ─── Styles ──────────────────────────────────────────────── */
const AboutStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=Outfit:wght@300;400;500;600&display=swap');

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(22px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @keyframes shimmer {
      0%   { transform: translateX(-120%) skewX(-18deg); }
      100% { transform: translateX(340%)  skewX(-18deg); }
    }

    @keyframes glowPulse {
      0%, 100% { opacity: .45; transform: scale(1); }
      50%       { opacity: .8;  transform: scale(1.06); }
    }

    @keyframes dotDrift {
      0%, 100% { transform: translateY(0); opacity: .18; }
      50%       { transform: translateY(-7px); opacity: .32; }
    }

    @keyframes chipIn {
      from { opacity: 0; transform: translateY(10px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .ab-left  { animation: fadeUp .75s cubic-bezier(.16,1,.3,1) .06s both; }
    .ab-right { animation: fadeUp .75s cubic-bezier(.16,1,.3,1) .16s both; }
    .ab-chip  { animation: chipIn .55s cubic-bezier(.16,1,.3,1) both; }

    .ab-glow  { animation: glowPulse 5s ease-in-out infinite; }
    .ab-dots  { animation: dotDrift 7s ease-in-out infinite; }

    /* ── Stat card ── */
    .sc2 {
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
    .sc2::after {
      content: '';
      position: absolute;
      top: 0; left: 0;
      width: 36%; height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,.14), transparent);
      transform: translateX(-120%) skewX(-18deg);
      pointer-events: none;
      z-index: 9;
    }

    .sc2-bar   { transition: height .28s ease; }
    .sc2-icon  { transition: transform .32s cubic-bezier(.34,1.4,.64,1), box-shadow .32s ease; }
    .sc2-num   { transition: color .25s ease, transform .25s ease; }
    .sc2-arrow { transition: opacity .25s ease, gap .28s ease, transform .25s ease; }
    .sc2-glow  { transition: opacity .35s ease; }

    @media (hover: hover) {
      .sc2:hover {
        transform: translateY(-7px) scale(1.015);
        border-color: var(--sc2-border) !important;
        box-shadow: 0 18px 40px var(--sc2-shadow) !important;
      }
      .sc2:hover::after { animation: shimmer .65s ease-out forwards; }
      .sc2:hover .sc2-bar   { height: 4px !important; }
      .sc2:hover .sc2-icon  { transform: scale(1.1) rotate(-5deg); box-shadow: 0 10px 26px var(--sc2-shadow) !important; }
      .sc2:hover .sc2-num   { transform: scale(1.06); }
      .sc2:hover .sc2-arrow { opacity: 1 !important; gap: 10px !important; }
      .sc2:hover .sc2-glow  { opacity: 1; }
    }

    @media (hover: none) { .sc2:active { transform: scale(.97); } }

    /* ── About-us CTA button ── */
    .ab-btn {
      transition: transform .28s cubic-bezier(.34,1.4,.64,1),
                  background .25s ease,
                  box-shadow .25s ease !important;
      -webkit-tap-highlight-color: transparent;
    }
    .ab-btn:hover {
      transform: translateY(-2px) !important;
      background: rgba(14,90,240,.1) !important;
      box-shadow: 0 8px 24px rgba(14,90,240,.15) !important;
    }
    .ab-btn:hover .ab-btn-arrow { transform: translateX(3px) translateY(-3px); }
    .ab-btn-arrow { transition: transform .28s cubic-bezier(.34,1.4,.64,1); }

    @media (prefers-reduced-motion: reduce) {
      .ab-left,.ab-right,.ab-chip,.sc2,.sc2-icon,.sc2-bar,
      .sc2-num,.sc2-arrow,.sc2-glow,.ab-btn,.ab-glow,.ab-dots {
        animation: none !important; transition: none !important;
      }
    }
  `}</style>
);

/* ─── Stats ─────────────────────────────────────────────── */
const stats = [
  {
    icon: <GroupOutlined />,
    num: '120+', title: 'Happy Clients',
    desc: 'Businesses worldwide trust our solutions.',
    accent: '#0e5af0', border: 'rgba(14,90,240,.22)',
    shadow: 'rgba(14,90,240,.13)',
    iconBg: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
    iconColor: '#0e5af0',
    bar: 'linear-gradient(90deg, #0e5af0, #60a5fa)',
  },
  {
    icon: <VerifiedOutlined />,
    num: '250+', title: 'Projects Delivered',
    desc: 'Successful delivery across multiple industries.',
    accent: '#0d9488', border: 'rgba(13,148,136,.22)',
    shadow: 'rgba(13,148,136,.13)',
    iconBg: 'linear-gradient(135deg, #ccfbf1, #99f6e4)',
    iconColor: '#0d9488',
    bar: 'linear-gradient(90deg, #0d9488, #5eead4)',
  },
  {
    icon: <AccessTimeOutlined />,
    num: '8+', title: 'Years Experience',
    desc: 'Consistent technology execution with impact.',
    accent: '#7c3aed', border: 'rgba(124,58,237,.22)',
    shadow: 'rgba(124,58,237,.13)',
    iconBg: 'linear-gradient(135deg, #ede9fe, #ddd6fe)',
    iconColor: '#7c3aed',
    bar: 'linear-gradient(90deg, #7c3aed, #c4b5fd)',
  },
  {
    icon: <StarOutlineOutlined />,
    num: '98%', title: 'Client Satisfaction',
    desc: 'A strong reputation built on trust and results.',
    accent: '#d97706', border: 'rgba(217,119,6,.22)',
    shadow: 'rgba(217,119,6,.13)',
    iconBg: 'linear-gradient(135deg, #fef3c7, #fde68a)',
    iconColor: '#d97706',
    bar: 'linear-gradient(90deg, #d97706, #fde68a)',
  },
];

const chips = ['Scalable systems', 'Business-first approach', 'Long-term support'];

/* ─── Component ─────────────────────────────────────────── */
const About: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmall  = useMediaQuery('(max-width:360px)');

  return (
    <>
      <AboutStyles />

      <Box sx={{
        position: 'relative',
        py: { xs: 7, md: 10 },
        background: 'linear-gradient(170deg, #f0f5ff 0%, #f6f9ff 35%, #ffffff 100%)',
        overflow: 'hidden',
        borderTop: '1px solid rgba(14,31,64,.06)',
        borderBottom: '1px solid rgba(14,31,64,.06)',
      }}>

        {/* Dot grid */}
        <Box sx={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
          backgroundImage: 'radial-gradient(circle, rgba(14,31,64,.042) 1px, transparent 1px)',
          backgroundSize: '34px 34px',
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 50%, black 20%, transparent 100%)',
        }}/>

        {/* Blobs */}
        <Box className="ab-glow" sx={{
          position: 'absolute', top: '-8%', left: '-5%',
          width: 380, height: 380, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,90,240,.08), transparent 68%)',
          filter: 'blur(55px)', pointerEvents: 'none', zIndex: 0,
        }}/>
        <Box className="ab-glow" sx={{
          position: 'absolute', bottom: '-6%', right: '-5%',
          width: 320, height: 320, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,161,224,.07), transparent 68%)',
          filter: 'blur(50px)', pointerEvents: 'none', zIndex: 0,
          animationDelay: '1.6s',
        }}/>

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2, px: { xs: 2, sm: 3, md: 5 } }}>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 3, md: 3.5, lg: 4 },
            alignItems: 'stretch',
          }}>

            {/* ── LEFT: Brand panel ───────────────────── */}
            <Box className="ab-left" sx={{
              position: 'relative',
              borderRadius: { xs: '22px', md: '26px' },
              overflow: 'hidden',
              background: 'linear-gradient(145deg, #060f25 0%, #0b1a3e 55%, #081530 100%)',
              p: { xs: 3, sm: 4, md: 4.5, lg: 5 },
              minHeight: { xs: 360, md: 'auto' },
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
              border: '1px solid rgba(255,255,255,.06)',
              boxShadow: '0 24px 60px rgba(6,15,37,.2)',
              textAlign: { xs: 'center', md: 'left' },
            }}>

              {/* Animated dot overlay */}
              <Box className="ab-dots" sx={{
                position: 'absolute', top: 0, right: 0,
                width: '65%', height: '100%', zIndex: 1,
                backgroundImage: 'radial-gradient(circle, rgba(99,179,237,.55) 1px, transparent 1px)',
                backgroundSize: '16px 16px',
                maskImage: 'radial-gradient(ellipse at right center, black 15%, transparent 65%)',
                WebkitMaskImage: 'radial-gradient(ellipse at right center, black 15%, transparent 65%)',
                opacity: .18,
              }}/>

              {/* Gradient glow spheres */}
              <Box sx={{
                position: 'absolute', bottom: '-18%', right: '-8%',
                width: 320, height: 320, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(14,90,240,.22), transparent 68%)',
                filter: 'blur(45px)', zIndex: 1, pointerEvents: 'none',
              }}/>
              <Box sx={{
                position: 'absolute', top: '-12%', left: '-6%',
                width: 260, height: 260, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0,161,224,.12), transparent 68%)',
                filter: 'blur(40px)', zIndex: 1, pointerEvents: 'none',
              }}/>

              {/* Overlay to darken edges */}
              <Box sx={{
                position: 'absolute', inset: 0, zIndex: 1,
                background: 'linear-gradient(120deg, rgba(6,15,37,.92) 0%, rgba(6,15,37,.78) 55%, rgba(6,15,37,.6) 100%)',
              }}/>

              {/* Content */}
              <Box sx={{ position: 'relative', zIndex: 2 }}>

                {/* Pill */}
                <Box sx={{
                  display: 'inline-flex', alignItems: 'center', gap: 1,
                  mb: { xs: 2.5, md: 3 }, px: 1.8, py: .7,
                  borderRadius: '999px',
                  border: '1px solid rgba(99,179,237,.22)',
                  background: 'rgba(14,90,240,.1)',
                  backdropFilter: 'blur(8px)',
                }}>
                  <Box sx={{
                    width: 7, height: 7, borderRadius: '50%',
                    background: '#63b3ed',
                    boxShadow: '0 0 10px rgba(99,179,237,.9)',
                  }}/>
                  <Typography sx={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 700, fontSize: '.7rem',
                    color: '#90cdf4',
                    textTransform: 'uppercase', letterSpacing: '.15em',
                  }}>
                    About Bendra
                  </Typography>
                </Box>

                {/* Heading */}
                <Typography component="h2" sx={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 800,
                  fontSize: {
                    xs: isSmall ? '1.55rem' : '1.75rem',
                    sm: '2rem', md: '2.1rem', lg: '2.5rem',
                  },
                  lineHeight: 1.13, letterSpacing: '-.032em',
                  color: '#fff', mb: 2,
                }}>
                  Your growth is
                  <br />our mission
                  <Box component="span" sx={{
                    background: 'linear-gradient(90deg, #0e5af0, #63b3ed)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  }}>.</Box>
                </Typography>

                {/* Divider */}
                <Box sx={{
                  width: 48, height: 2, borderRadius: 99,
                  background: 'linear-gradient(90deg, #0e5af0, #90cdf4)',
                  mb: 2.4, mx: { xs: 'auto', md: 0 },
                }}/>

                {/* Body */}
                <Typography sx={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 400,
                  fontSize: { xs: '.88rem', sm: '.92rem', md: '.96rem' },
                  color: 'rgba(255,255,255,.65)', lineHeight: 1.82,
                  mb: 3, maxWidth: 520, mx: { xs: 'auto', md: 0 },
                }}>
                  Bendra is a team of passionate technologists, problem solvers,
                  and business thinkers. We partner with organisations of all sizes
                  to build digital systems that create value, drive efficiency, and
                  accelerate sustainable growth.
                </Typography>

                {/* Chips */}
                <Box sx={{
                  display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3.5,
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}>
                  {chips.map((c, i) => (
                    <Box key={c} className="ab-chip" sx={{
                      animationDelay: `${.28 + i * .08}s`,
                      px: 1.5, py: .7, borderRadius: '999px',
                      background: 'rgba(255,255,255,.06)',
                      border: '1px solid rgba(255,255,255,.1)',
                      backdropFilter: 'blur(8px)',
                    }}>
                      <Typography sx={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 500, fontSize: '.78rem',
                        color: 'rgba(255,255,255,.78)', lineHeight: 1,
                      }}>{c}</Typography>
                    </Box>
                  ))}
                </Box>

                {/* CTA */}
                <Link href="/about" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="outlined"
                    fullWidth={isMobile}
                    endIcon={<NorthEast className="ab-btn-arrow" sx={{ fontSize: '1rem !important' }} />}
                    className="ab-btn"
                    sx={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontWeight: 700, fontSize: { xs: '.84rem', md: '.88rem' },
                      color: '#fff',
                      borderColor: 'rgba(255,255,255,.22)',
                      textTransform: 'none',
                      letterSpacing: '.02em',
                      px: { xs: 2.8, md: 3.2 }, py: { xs: 1.15, md: 1.2 },
                      borderRadius: '12px',
                      backdropFilter: 'blur(8px)',
                      background: 'rgba(14,90,240,.08)',
                      maxWidth: { xs: '100%', sm: 'fit-content' },
                    }}
                  >
                    Learn More About Us
                  </Button>
                </Link>
              </Box>
            </Box>

            {/* ── RIGHT: Stats ────────────────────────── */}
            <Box className="ab-right" sx={{
              background: 'rgba(255,255,255,.85)',
              backdropFilter: 'blur(12px)',
              borderRadius: { xs: '22px', md: '26px' },
              p: { xs: 2.5, sm: 3, md: 3.5, lg: 4 },
              border: '1.5px solid rgba(14,31,64,.08)',
              boxShadow: '0 8px 32px rgba(14,31,64,.06)',
              display: 'flex', flexDirection: 'column',
              position: 'relative', overflow: 'hidden',
            }}>

              {/* Faint dot texture */}
              <Box sx={{
                position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
                backgroundImage: 'radial-gradient(circle, rgba(14,31,64,.035) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}/>

              {/* Right header */}
              <Box sx={{ position: 'relative', zIndex: 1, mb: { xs: 2.5, md: 3 }, textAlign: { xs: 'center', md: 'left' } }}>
                <Typography sx={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 800,
                  fontSize: { xs: '1.2rem', sm: '1.35rem', md: '1.5rem', lg: '1.65rem' },
                  letterSpacing: '-.022em', color: '#0b1836', mb: 1,
                }}>
                  Trusted outcomes.{' '}
                  <Box component="span" sx={{
                    background: 'linear-gradient(90deg, #0e5af0, #00a1e0)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  }}>
                    Measurable impact.
                  </Box>
                </Typography>
                <Typography sx={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 400, fontSize: { xs: '.86rem', md: '.94rem' },
                  color: 'rgba(11,24,54,.52)', lineHeight: 1.78,
                  maxWidth: 520, mx: { xs: 'auto', md: 0 },
                }}>
                  Long-term relationships, quality delivery, and practical solutions
                  that help businesses move faster with confidence.
                </Typography>
              </Box>

              {/* Stat cards grid */}
              <Box sx={{
                position: 'relative', zIndex: 1,
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: { xs: 1.8, sm: 2 },
                flex: 1,
              }}>
                {stats.map((s, i) => (
                  <Box key={i} className="sc2" sx={{
                    '--sc2-border': s.border,
                    '--sc2-shadow': s.shadow,
                    p: { xs: 2.2, md: 2.6 },
                    display: 'flex', flexDirection: 'column',
                    animation: `fadeUp .65s cubic-bezier(.16,1,.3,1) ${.2 + i * .07}s both`,
                  }}>

                    {/* Top accent bar */}
                    <Box className="sc2-bar" sx={{
                      position: 'absolute', top: 0, left: 0, right: 0,
                      height: '3px', background: s.bar,
                      borderRadius: '20px 20px 0 0', zIndex: 2,
                    }}/>

                    {/* Hover glow */}
                    <Box className="sc2-glow" sx={{
                      position: 'absolute', top: '-20%',
                      left: '15%', right: '15%', height: '50%',
                      borderRadius: '50%',
                      background: `radial-gradient(ellipse, ${s.accent}0b, transparent 70%)`,
                      filter: 'blur(24px)', opacity: 0,
                      pointerEvents: 'none', zIndex: 0,
                    }}/>

                    {/* Icon */}
                    <Box className="sc2-icon" sx={{
                      width: { xs: 46, md: 50 }, height: { xs: 46, md: 50 },
                      borderRadius: '13px', background: s.iconBg,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      mb: 1.8, mt: .6,
                      boxShadow: `0 5px 16px ${s.shadow}`,
                      position: 'relative', zIndex: 1,
                      '& .MuiSvgIcon-root': { fontSize: { xs: 21, md: 23 }, color: s.iconColor },
                    }}>
                      {s.icon}
                    </Box>

                    {/* Number */}
                    <Typography className="sc2-num" sx={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontWeight: 800,
                      fontSize: { xs: '1.75rem', md: '2rem' },
                      lineHeight: 1, letterSpacing: '-.03em',
                      color: s.accent, mb: .6,
                      position: 'relative', zIndex: 1,
                    }}>
                      {s.num}
                    </Typography>

                    {/* Title */}
                    <Typography sx={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontWeight: 700, fontSize: { xs: '.92rem', md: '.98rem' },
                      letterSpacing: '-.012em', color: '#0b1836', mb: .7,
                      position: 'relative', zIndex: 1,
                    }}>
                      {s.title}
                    </Typography>

                    {/* Desc */}
                    <Typography sx={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 400, fontSize: { xs: '.8rem', md: '.84rem' },
                      color: 'rgba(11,24,54,.48)', lineHeight: 1.65,
                      flex: 1, position: 'relative', zIndex: 1,
                    }}>
                      {s.desc}
                    </Typography>

                    {/* Arrow */}
                    <Box className="sc2-arrow" sx={{
                      display: 'flex', alignItems: 'center',
                      gap: '5px', mt: 1.8, opacity: .3,
                      color: s.accent, position: 'relative', zIndex: 1,
                    }}>
                      <Typography sx={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 600, fontSize: '.78rem',
                        letterSpacing: '.03em', color: 'inherit',
                      }}>
                        Trusted metric
                      </Typography>
                      <NorthEast sx={{ fontSize: 13, color: 'inherit' }} />
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>

          </Box>
        </Container>
      </Box>
    </>
  );
};

export default About;