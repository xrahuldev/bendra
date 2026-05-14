'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Dialog,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  PlayArrowRounded,
  CloseRounded,
  FormatQuoteRounded,
  VolumeUpRounded,
  VolumeOffRounded,
  PauseRounded,
  ArrowBackRounded,
  ArrowForwardRounded,
} from '@mui/icons-material';

/* ─── Styles ──────────────────────────────────────────────── */
const TestimonialStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=Outfit:wght@300;400;500;600&display=swap');

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(22px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @keyframes cardIn {
      from { opacity: 0; transform: translateY(28px) scale(.97); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }

    @keyframes playPulse {
      0%, 100% { box-shadow: 0 4px 16px rgba(14,90,240,.45), 0 0 0 0 rgba(14,90,240,.4); }
      50%       { box-shadow: 0 6px 22px rgba(14,90,240,.6),  0 0 0 9px rgba(14,90,240,0); }
    }

    @keyframes playPulse2 {
      0%, 100% { box-shadow: 0 4px 16px rgba(124,58,237,.45), 0 0 0 0 rgba(124,58,237,.4); }
      50%       { box-shadow: 0 6px 22px rgba(124,58,237,.6),  0 0 0 9px rgba(124,58,237,0); }
    }

    @keyframes playPulse3 {
      0%, 100% { box-shadow: 0 4px 16px rgba(16,185,129,.45), 0 0 0 0 rgba(16,185,129,.4); }
      50%       { box-shadow: 0 6px 22px rgba(16,185,129,.6),  0 0 0 9px rgba(16,185,129,0); }
    }

    @keyframes dotBlink {
      0%, 100% { opacity: 1; }
      50%       { opacity: .4; }
    }

    @keyframes floatQ {
      0%, 100% { transform: translateY(0) rotate(-8deg); }
      50%       { transform: translateY(-6px) rotate(-8deg); }
    }

    @keyframes glowPulse {
      0%, 100% { opacity: .45; transform: scale(1); }
      50%       { opacity: .8;  transform: scale(1.05); }
    }

    .ts-header { animation: fadeUp .7s cubic-bezier(.16,1,.3,1) .05s both; }
    .ts-glow   { animation: glowPulse 5s ease-in-out infinite; }

    /* ── Card ── */
    .tc {
      -webkit-tap-highlight-color: transparent;
      transition: transform .38s cubic-bezier(.34,1.4,.64,1),
                  box-shadow .35s ease,
                  border-color .3s ease;
    }
    .tc video { transition: transform .55s ease, filter .4s ease; }
    .tc-play  { transition: transform .3s cubic-bezier(.34,1.4,.64,1) !important; }
    .tc-quote { animation: floatQ 4s ease-in-out infinite; }
    .tc-watch { transition: opacity .3s ease, transform .3s ease; }

    @media (hover: hover) {
      .tc:hover { transform: translateY(-8px) scale(1.012) !important; }
      .tc:hover video { transform: scale(1.055); filter: brightness(.93); }
      .tc:hover .tc-play { transform: scale(1.1); }
      .tc:hover .tc-watch { opacity: 1 !important; transform: translateY(0) !important; }
    }
    @media (hover: none) { .tc:active { transform: scale(.97) !important; } }

    /* scroll track */
    .sc-track { scrollbar-width: none; -ms-overflow-style: none; }
    .sc-track::-webkit-scrollbar { display: none; }

    /* scroll arrows */
    .ts-arrow {
      transition: background .25s ease, border-color .25s ease, color .25s ease, transform .25s ease;
    }
    .ts-arrow:hover { transform: scale(1.08); }

    @media (prefers-reduced-motion: reduce) {
      .ts-header,.tc,.tc-play,.tc-quote,.ts-glow,
      .tc video,.tc-watch,.ts-arrow {
        animation: none !important; transition: none !important;
      }
    }
  `}</style>
);

/* ─── Types & Data ───────────────────────────────────────── */
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  videoSrc: string;
  accent: string;
  bar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Doolittle Team',
    role: 'Founder',
    company: 'Doolittle',
    quote:
      'Bendra transformed our digital presence completely. Their CRM integration saved us 20+ hours every week.',
    videoSrc: '/testimonial/Digital Emantra Testimonial Doolittle.mov',
    accent: '#0e5af0',
    bar: 'linear-gradient(90deg, #0e5af0, #60a5fa)',
  },
  {
    id: 2,
    name: 'Growth Partners',
    role: 'Marketing Director',
    company: 'GrowthScale',
    quote:
      'The team at Bendra understood our vision from day one. Our lead generation increased by 3x within the first quarter.',
    videoSrc: '/testimonial/testimonials-12.mp4',
    accent: '#7c3aed',
    bar: 'linear-gradient(90deg, #7c3aed, #c4b5fd)',
  },
  {
    id: 3,
    name: 'Tech Ventures',
    role: 'CEO',
    company: 'TechVentures',
    quote:
      'Working with Bendra was a game-changer. Their automation solutions streamlined our entire sales pipeline seamlessly.',
    videoSrc: '/testimonial/testimonials-13.mp4',
    accent: '#10b981',
    bar: 'linear-gradient(90deg, #10b981, #6ee7b7)',
  },
];

const PREVIEW_DUR = 5;

/* pulse animation per card index */
const PULSE = ['playPulse', 'playPulse2', 'playPulse3'];

/* ─── Card ───────────────────────────────────────────────── */
const TCard: React.FC<{
  t: Testimonial;
  index: number;
  onPlay: (t: Testimonial) => void;
}> = ({ t, index, onPlay }) => {
  const vRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = vRef.current;
    if (!v) return;
    const onLoad = () => {
      v.currentTime = 0;
      v.play().catch(() => {});
    };
    const onTime = () => {
      if (v.currentTime >= PREVIEW_DUR) {
        v.currentTime = 0;
        v.play().catch(() => {});
      }
    };
    v.addEventListener('loadeddata', onLoad);
    v.addEventListener('timeupdate', onTime);
    return () => {
      v.removeEventListener('loadeddata', onLoad);
      v.removeEventListener('timeupdate', onTime);
    };
  }, []);

  return (
    <Box
      className="tc"
      onClick={() => onPlay(t)}
      sx={{
        borderRadius: { xs: '20px', md: '24px' },
        overflow: 'hidden',
        background: '#fff',
        border: '1.5px solid rgba(14,31,64,.09)',
        boxShadow:
          '0 4px 6px rgba(14,31,64,.02), 0 12px 28px rgba(14,31,64,.07)',
        animation: `cardIn .7s cubic-bezier(.16,1,.3,1) ${0.1 + index * 0.12}s both`,
        cursor: 'pointer',
        width: { xs: 280, sm: 310, md: 320, lg: 340, xl: 380 },
        minWidth: { xs: 280, sm: 310, md: 320, lg: 340, xl: 380 },
        flexShrink: 0,
        scrollSnapAlign: 'start',
        '&:hover': {
          borderColor: `${t.accent}30`,
          boxShadow: `0 8px 16px rgba(14,31,64,.03), 0 24px 48px rgba(14,31,64,.10), 0 0 0 1px ${t.accent}18`,
        },
      }}
    >
      {/* Video area */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16/9',
          background: '#060f25',
          overflow: 'hidden',
        }}
      >
        <video
          ref={vRef}
          src={t.videoSrc}
          muted
          playsInline
          preload="metadata"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />

        {/* Bottom gradient */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '42%',
            background:
              'linear-gradient(180deg, transparent, rgba(0,0,0,.6))',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />

        {/* Top bar */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: t.bar,
            zIndex: 2,
          }}
        />

        {/* Preview badge */}
        <Box
          sx={{
            position: 'absolute',
            top: 10,
            left: 10,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.7,
            px: 1.1,
            py: 0.4,
            borderRadius: '8px',
            background: 'rgba(0,0,0,.55)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,.12)',
            zIndex: 3,
          }}
        >
          <Box
            sx={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#ef4444',
              boxShadow: '0 0 8px rgba(239,68,68,.7)',
              animation: 'dotBlink 1.8s ease-in-out infinite',
            }}
          />
          <Typography
            sx={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: '.58rem',
              color: '#fff',
              fontWeight: 700,
              letterSpacing: '.1em',
              textTransform: 'uppercase',
            }}
          >
            Preview
          </Typography>
        </Box>

        {/* Play + label */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 10,
            right: 10,
            display: 'flex',
            alignItems: 'center',
            gap: 0.8,
            zIndex: 3,
          }}
        >
          <Box
            className="tc-watch"
            sx={{
              px: 1.2,
              py: 0.5,
              borderRadius: '8px',
              background: 'rgba(0,0,0,.65)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,.12)',
              opacity: { xs: 1, lg: 0.85 },
              transform: { xs: 'translateY(0)', lg: 'translateY(4px)' },
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '.65rem',
                color: '#fff',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                letterSpacing: '.02em',
              }}
            >
              Watch Full Video
            </Typography>
          </Box>

          <Box
            className="tc-play"
            sx={{
              width: { xs: 38, lg: 42 },
              height: { xs: 38, lg: 42 },
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${t.accent}, ${t.accent}dd)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid rgba(255,255,255,.95)',
              flexShrink: 0,
              animation: `${PULSE[index % 3]} 2.2s ease-in-out infinite`,
            }}
          >
            <PlayArrowRounded
              sx={{ fontSize: { xs: 18, lg: 22 }, color: '#fff', ml: 0.2 }}
            />
          </Box>
        </Box>
      </Box>

      {/* Info */}
      <Box sx={{ p: { xs: 2, sm: 2.5, md: 3 }, position: 'relative' }}>
        <FormatQuoteRounded
          className="tc-quote"
          sx={{
            position: 'absolute',
            top: -14,
            right: 14,
            fontSize: 36,
            color: `${t.accent}14`,
            transform: 'rotate(-8deg)',
          }}
        />

        <Typography
          sx={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 400,
            fontSize: { xs: '.82rem', md: '.88rem' },
            color: 'rgba(11,24,54,.55)',
            lineHeight: 1.68,
            mb: 2.2,
            fontStyle: 'italic',
            position: 'relative',
            zIndex: 1,
          }}
        >
          &ldquo;{t.quote}&rdquo;
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            sx={{
              width: 38,
              height: 38,
              borderRadius: '12px',
              background: `linear-gradient(135deg, ${t.accent}18, ${t.accent}08)`,
              border: `1.5px solid ${t.accent}22`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 800,
                fontSize: '.84rem',
                color: t.accent,
              }}
            >
              {t.name.charAt(0)}
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
                fontSize: { xs: '.84rem', md: '.9rem' },
                color: '#0b1836',
                lineHeight: 1.2,
              }}
            >
              {t.name}
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 400,
                fontSize: { xs: '.72rem', md: '.76rem' },
                color: 'rgba(11,24,54,.42)',
              }}
            >
              {t.role}, {t.company}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

/* ─── Video Dialog ───────────────────────────────────────── */
const VideoDialog: React.FC<{
  open: boolean;
  t: Testimonial | null;
  onClose: () => void;
}> = ({ open, t, onClose }) => {
  const vRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [curTime, setCurTime] = useState('0:00');
  const [dur, setDur] = useState('0:00');

  useEffect(() => {
    if (open && vRef.current) {
      vRef.current.currentTime = 0;
      vRef.current.muted = false;
      setMuted(false);
      setPlaying(true);
      vRef.current.play().catch(() => {});
    }
  }, [open]);

  const fmt = (s: number) =>
    isFinite(s)
      ? `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`
      : '0:00';

  const onTime = () => {
    const v = vRef.current;
    if (!v?.duration) return;
    setProgress((v.currentTime / v.duration) * 100);
    setCurTime(fmt(v.currentTime));
  };

  const onMeta = () => {
    if (vRef.current) setDur(fmt(vRef.current.duration));
  };

  const togglePlay = () => {
    const v = vRef.current;
    if (!v) return;
    v.paused ? (v.play(), setPlaying(true)) : (v.pause(), setPlaying(false));
  };

  const toggleMute = () => {
    const v = vRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const v = vRef.current;
    if (!v) return;
    const r = e.currentTarget.getBoundingClientRect();
    v.currentTime = ((e.clientX - r.left) / r.width) * v.duration;
  };

  if (!t) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      fullWidth
      slotProps={{
        paper: {
          sx: {
            background: '#000',
            borderRadius: { xs: 0, sm: '22px' },
            maxWidth: { xs: '100vw', sm: '90vw', md: '80vw', lg: '900px' },
            maxHeight: { xs: '100vh', sm: '90vh' },
            m: { xs: 0, sm: 2 },
            overflow: 'hidden',
            boxShadow: '0 32px 80px rgba(0,0,0,.65)',
          },
        },
        backdrop: {
          sx: {
            background: 'rgba(0,0,0,.88)',
            backdropFilter: 'blur(14px)',
          },
        },
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: { xs: 8, sm: 12 },
          right: { xs: 8, sm: 12 },
          zIndex: 10,
          color: '#fff',
          background: 'rgba(0,0,0,.55)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,.12)',
          '&:hover': { background: 'rgba(255,255,255,.14)' },
        }}
      >
        <CloseRounded sx={{ fontSize: 22 }} />
      </IconButton>

      <Box
        sx={{
          position: 'relative',
          width: '100%',
          aspectRatio: { xs: '9/16', sm: '16/9' },
          maxHeight: { xs: 'calc(100vh - 140px)', sm: 'auto' },
          background: '#000',
          cursor: 'pointer',
        }}
        onClick={togglePlay}
      >
        <video
          ref={vRef}
          src={t.videoSrc}
          playsInline
          onTimeUpdate={onTime}
          onLoadedMetadata={onMeta}
          onEnded={() => setPlaying(false)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            display: 'block',
          }}
        />
        {!playing && (
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0,0,0,.3)',
              zIndex: 3,
            }}
          >
            <Box
              sx={{
                width: 72,
                height: 72,
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${t.accent}, ${t.accent}cc)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 8px 32px ${t.accent}55`,
              }}
            >
              <PlayArrowRounded sx={{ fontSize: 36, color: '#fff', ml: 0.3 }} />
            </Box>
          </Box>
        )}
      </Box>

      <Box
        sx={{
          px: { xs: 1.5, sm: 2 },
          py: { xs: 1.2, sm: 1.5 },
          background: 'linear-gradient(180deg, rgba(0,0,0,.9), #000)',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <Box
          onClick={seek}
          sx={{
            width: '100%',
            height: 5,
            borderRadius: 99,
            background: 'rgba(255,255,255,.12)',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
            '&:hover': { height: 7 },
            transition: 'height .2s ease',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: `${progress}%`,
              borderRadius: 99,
              background: `linear-gradient(90deg, ${t.accent}, ${t.accent}bb)`,
              transition: 'width .1s linear',
            }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton
              onClick={(e) => { e.stopPropagation(); togglePlay(); }}
              sx={{ color: '#fff', p: 0.8 }}
            >
              {playing
                ? <PauseRounded sx={{ fontSize: 22 }} />
                : <PlayArrowRounded sx={{ fontSize: 22 }} />}
            </IconButton>
            <IconButton
              onClick={(e) => { e.stopPropagation(); toggleMute(); }}
              sx={{ color: '#fff', p: 0.8 }}
            >
              {muted
                ? <VolumeOffRounded sx={{ fontSize: 20 }} />
                : <VolumeUpRounded sx={{ fontSize: 20 }} />}
            </IconButton>
            <Typography
              sx={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '.74rem',
                color: 'rgba(255,255,255,.48)',
                ml: 0.5,
              }}
            >
              {curTime} / {dur}
            </Typography>
          </Box>

          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: '.78rem',
                fontWeight: 700,
                color: 'rgba(255,255,255,.75)',
              }}
            >
              {t.name}
            </Typography>
            <Box
              sx={{
                width: 4,
                height: 4,
                borderRadius: '50%',
                background: 'rgba(255,255,255,.28)',
              }}
            />
            <Typography
              sx={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '.74rem',
                color: 'rgba(255,255,255,.4)',
              }}
            >
              {t.company}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

/* ─── Main Section ───────────────────────────────────────── */
const Testimonials: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<Testimonial | null>(null);
  const [mounted, setMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  /* lg+ = all 3 cards visible & centered; below = horizontal scroll */
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  useEffect(() => { setMounted(true); }, []);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -380 : 380, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    if (max > 0) setScrollProgress(el.scrollLeft / max);
  };

  const single = testimonials.length === 1;
  const multi = testimonials.length > 1;
  const center = single || isDesktop;

  /* active dot */
  const activeDot = multi
    ? Math.round(scrollProgress * (testimonials.length - 1))
    : 0;

  return (
    <>
      <TestimonialStyles />

      <Box
        sx={{
          position: 'relative',
          py: { xs: 7, sm: 8, md: 10 },
          background: '#ffffff',
          overflow: 'hidden',
          borderTop: '1px solid rgba(14,31,64,.06)',
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
              'radial-gradient(ellipse 90% 70% at 50% 50%, black 20%, transparent 100%)',
          }}
        />

        {/* Blob 1 */}
        <Box
          className="ts-glow"
          sx={{
            position: 'absolute',
            top: '-8%',
            left: '-5%',
            width: { xs: 200, sm: 280, md: 360 },
            height: { xs: 200, sm: 280, md: 360 },
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(14,90,240,.07), transparent 68%)',
            filter: 'blur(55px)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Blob 2 */}
        <Box
          className="ts-glow"
          sx={{
            position: 'absolute',
            bottom: '-6%',
            right: '-5%',
            width: { xs: 170, sm: 230, md: 300 },
            height: { xs: 170, sm: 230, md: 300 },
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,161,224,.06), transparent 68%)',
            filter: 'blur(48px)',
            pointerEvents: 'none',
            zIndex: 0,
            animationDelay: '1.8s',
          }}
        />

        {/* Blob 3 */}
        <Box
          className="ts-glow"
          sx={{
            position: 'absolute',
            top: '40%',
            left: '30%',
            width: { xs: 140, sm: 200, md: 260 },
            height: { xs: 140, sm: 200, md: 260 },
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,58,237,.04), transparent 68%)',
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
            className="ts-header"
            sx={{
              textAlign: 'center',
              mb: { xs: 5, sm: 5.5, md: 7 },
              maxWidth: 700,
              mx: 'auto',
            }}
          >
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
                Testimonials
              </Typography>
            </Box>

            <Typography
              component="h2"
              sx={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 800,
                fontSize: {
                  xs: '1.7rem',
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
              What clients say{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(90deg, #0e5af0, #00a1e0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                about Bendra
              </Box>
            </Typography>

            <Typography
              sx={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 400,
                fontSize: { xs: '.88rem', sm: '.92rem', md: '1rem' },
                color: 'rgba(11,24,54,.52)',
                lineHeight: 1.8,
                maxWidth: 520,
                mx: 'auto',
                px: { xs: 1, sm: 0 },
              }}
            >
              Real stories from real clients — watch how Bendra helped
              businesses transform their operations and achieve measurable
              growth.
            </Typography>
          </Box>

          {/* ── Cards ── */}
          <Box sx={{ position: 'relative' }}>
            {/* Nav arrows — only when scrolling (not desktop, multi) */}
            {mounted && multi && !center && (
              <>
                {(['left', 'right'] as const).map((dir) => (
                  <IconButton
                    key={dir}
                    className="ts-arrow"
                    onClick={() => scroll(dir)}
                    sx={{
                      position: 'absolute',
                      [dir]: { xs: -8, sm: -16, md: -20 },
                      top: '36%',
                      zIndex: 3,
                      width: { xs: 36, sm: 40, md: 44 },
                      height: { xs: 36, sm: 40, md: 44 },
                      background: '#fff',
                      border: '1.5px solid rgba(14,31,64,.1)',
                      boxShadow: '0 4px 16px rgba(14,31,64,.08)',
                      color: '#0b1836',
                      '&:hover': {
                        background: '#f0f5ff',
                        borderColor: '#0e5af0',
                        color: '#0e5af0',
                      },
                    }}
                  >
                    {dir === 'left'
                      ? <ArrowBackRounded sx={{ fontSize: { xs: 18, md: 20 } }} />
                      : <ArrowForwardRounded sx={{ fontSize: { xs: 18, md: 20 } }} />}
                  </IconButton>
                ))}
              </>
            )}

            {/* Scroll track */}
            <Box
              ref={scrollRef}
              className="sc-track"
              onScroll={handleScroll}
              sx={{
                display: 'flex',
                gap: { xs: 2, sm: 2.5, md: 3 },
                overflowX: center ? 'visible' : 'auto',
                overflowY: 'hidden',
                scrollSnapType: center ? 'none' : 'x mandatory',
                WebkitOverflowScrolling: 'touch',
                pb: 2,
                justifyContent: center ? 'center' : 'flex-start',
                px: center ? 0 : { xs: 1, sm: 2, md: 3 },
              }}
            >
              {testimonials.map((t, i) => (
                <TCard key={t.id} t={t} index={i} onPlay={setActiveVideo} />
              ))}
            </Box>

            {/* Dot indicators — only when scrolling */}
            {mounted && multi && !center && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 0.8,
                  mt: 2,
                }}
              >
                {testimonials.map((t, i) => (
                  <Box
                    key={t.id}
                    sx={{
                      width: i === activeDot ? 20 : 6,
                      height: 6,
                      borderRadius: 99,
                      background:
                        i === activeDot ? t.accent : 'rgba(14,31,64,.15)',
                      transition: 'all .3s ease',
                    }}
                  />
                ))}
              </Box>
            )}
          </Box>
        </Container>
      </Box>

      <VideoDialog
        open={!!activeVideo}
        t={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </>
  );
};

export default Testimonials;