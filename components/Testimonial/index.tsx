'use client';

import React, { useState, useCallback, useEffect, memo } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { PlayArrow, Close, NorthEast } from '@mui/icons-material';

/* ─── Styles ───────────────────────── */
const CSS = `
  @keyframes testimonialFadeUp {
    from {
      opacity: 0;
      transform: translateY(24px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes modalIn {
    from {
      opacity: 0;
      transform: scale(0.96) translateY(10px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  @keyframes overlayIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .t-fade {
    animation: testimonialFadeUp 0.72s cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .t-card {
    outline: none;
  }

  .t-card:focus-visible {
    box-shadow:
      0 0 0 3px rgba(59,130,246,0.18),
      0 10px 30px rgba(15,23,42,0.08);
  }

  .t-overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background: rgba(2, 6, 23, 0.82);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    animation: overlayIn .22s ease both;
  }

  .t-modal {
    position: relative;
    width: 100%;
    max-width: 980px;
    animation: modalIn .28s cubic-bezier(.16,1,.3,1) both;
  }

  .t-close {
    position: absolute;
    top: -46px;
    right: 0;
    width: 38px;
    height: 38px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #fff;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.16);
    transition: background .2s ease, transform .2s ease;
  }

  .t-close:hover {
    background: rgba(255,255,255,0.14);
    transform: scale(1.04);
  }

  @media (max-width: 600px) {
    .t-close {
      top: -42px;
      width: 36px;
      height: 36px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .t-fade,
    .t-overlay,
    .t-modal,
    .t-close {
      animation: none !important;
      transition: none !important;
    }
  }
`;

const Styles = memo(function Styles() {
  return <style>{CSS}</style>;
});

/* ─── Video Data ───────────────────── */
const VIDEOS = [
  { title: 'Exizenly', id: 'CT44n3yViU4' },
  { title: 'Consult Clarity', id: 'dajmw3URnOo' },
  { title: 'Influens — Dr. Robert Hernandez', id: 'PPpH8ilfcqg' },
  { title: 'The Purposeco', id: 'OYoy3GdcPjw' },
  { title: 'Solomon Matzner', id: 'AoXdzFDINTw' },
  { title: 'The Future Is Hybrid — Kenneth Hellem', id: 'b_bNEsa2XIM' },
  { title: 'Procurement Software', id: 'Ux36g-MWrt4' },
  { title: 'MoiLeon', id: 'tuMyDhW2gb4' },
  { title: 'Love In COVID Time', id: 'sy6JBe0wVW0' },
  { title: 'Leadership Expose', id: 'rcmmPll1ntU' },
] as const;

type Video = (typeof VIDEOS)[number];

const ACCENTS = ['#2563eb', '#0ea5e9', '#7c3aed', '#0f766e', '#d97706', '#e11d48'];

/* ─── Video Card ───────────────────── */
interface CardProps {
  video: Video;
  index: number;
  onOpen: (v: Video) => void;
}

const VideoCard = memo(function VideoCard({ video, index, onOpen }: CardProps) {
  const accent = ACCENTS[index % ACCENTS.length];

  const handleClick = useCallback(() => onOpen(video), [onOpen, video]);

  const handleKey = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onOpen(video);
      }
    },
    [onOpen, video]
  );

  return (
    <Box
      className="t-card t-fade"
      role="button"
      tabIndex={0}
      aria-label={`Play ${video.title}`}
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
        animationDelay: `${index * 0.055}s`,
        cursor: 'pointer',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: `linear-gradient(90deg, ${accent}, ${alpha(accent, 0.45)})`,
          zIndex: 2,
        },
        '&:hover': {
          transform: 'translateY(-8px)',
          borderColor: alpha(accent, 0.18),
          boxShadow: `0 20px 42px ${alpha(accent, 0.12)}`,
        },
        '&:hover .t-thumb-img': {
          transform: 'scale(1.045)',
        },
        '&:hover .t-card-title': {
          color: accent,
        },
        '&:hover .t-card-play': {
          transform: 'scale(1.06)',
        },
      }}
      onClick={handleClick}
      onKeyDown={handleKey}
    >
      <Box
        sx={{
          position: 'relative',
          aspectRatio: '16/9',
          overflow: 'hidden',
          background: '#0f172a',
        }}
      >
        <Box
          component="img"
          className="t-thumb-img"
          src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
          alt={video.title}
          loading="lazy"
          decoding="async"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform .36s ease',
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(15,23,42,0.08) 0%, rgba(15,23,42,0.56) 100%)',
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            top: 12,
            left: 12,
            display: 'inline-flex',
            alignItems: 'center',
            px: 1.1,
            py: 0.48,
            borderRadius: '999px',
            background: 'rgba(255,255,255,0.12)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.14)',
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '0.68rem',
              fontWeight: 600,
              color: '#fff',
              letterSpacing: '0.04em',
            }}
          >
            Video Testimonial
          </Typography>
        </Box>

        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            className="t-card-play"
            sx={{
              width: { xs: 56, md: 62 },
              height: { xs: 56, md: 62 },
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: `linear-gradient(135deg, ${accent} 0%, ${alpha(accent, 0.84)} 100%)`,
              border: '2px solid rgba(255,255,255,0.92)',
              boxShadow: `0 18px 36px ${alpha(accent, 0.34)}`,
              transition: 'transform .24s ease',
            }}
          >
            <PlayArrow
              sx={{
                color: '#fff',
                fontSize: { xs: 28, md: 32 },
                ml: '2px',
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            position: 'absolute',
            right: 12,
            bottom: 12,
            px: 1.05,
            py: 0.46,
            borderRadius: '10px',
            background: 'rgba(15,23,42,0.66)',
            border: '1px solid rgba(255,255,255,0.12)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '0.72rem',
              fontWeight: 600,
              color: '#fff',
            }}
          >
            Watch Story
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          p: { xs: 2.15, md: 2.4 },
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        <Typography
          className="t-card-title"
          sx={{
            fontFamily: '"Inter", sans-serif',
            fontWeight: 700,
            fontSize: { xs: '0.98rem', md: '1.04rem' },
            color: '#0f172a',
            lineHeight: 1.32,
            letterSpacing: '-0.02em',
            mb: 0.9,
            transition: 'color .24s ease',
          }}
        >
          {video.title}
        </Typography>

        <Typography
          sx={{
            fontFamily: '"Inter", sans-serif',
            fontSize: '0.88rem',
            lineHeight: 1.7,
            color: '#64748b',
            flex: 1,
          }}
        >
          Watch how this project was delivered and how the client experienced the outcome.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: 2,
            pt: 1.6,
            borderTop: `1px solid ${alpha('#0f172a', 0.06)}`,
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '0.82rem',
              fontWeight: 600,
              color: 'rgba(15,23,42,0.58)',
            }}
          >
            Watch testimonial
          </Typography>

          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: accent,
            }}
          >
            <NorthEast sx={{ fontSize: 18 }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
});

/* ─── Modal ────────────────────────── */
interface ModalProps {
  video: Video | null;
  onClose: () => void;
}

const VideoModal = memo(function VideoModal({ video, onClose }: ModalProps) {
  useEffect(() => {
    if (!video) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [video, onClose]);

  useEffect(() => {
    if (video) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [video]);

  if (!video) return null;

  return (
    <Box className="t-overlay" onClick={onClose}>
      <Box className="t-modal" onClick={(e) => e.stopPropagation()}>
        <Box
          className="t-close"
          role="button"
          aria-label="Close video"
          tabIndex={0}
          onClick={onClose}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') onClose();
          }}
        >
          <Close sx={{ fontSize: 18 }} />
        </Box>

        <Box
          sx={{
            borderRadius: { xs: '18px', md: '22px' },
            overflow: 'hidden',
            background: '#060b16',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 30px 80px rgba(0,0,0,0.4)',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16/9',
              background: '#000',
            }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block',
              }}
            />
          </Box>

          <Box
            sx={{
              px: { xs: 2, md: 2.5 },
              py: { xs: 1.8, md: 2.1 },
              background: 'linear-gradient(180deg, #0b1220 0%, #060b16 100%)',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              textAlign: 'center',
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Inter", sans-serif',
                fontWeight: 700,
                fontSize: { xs: '0.98rem', md: '1.04rem' },
                color: '#fff',
                mb: 0.35,
              }}
            >
              {video.title}
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '0.84rem',
                color: 'rgba(255,255,255,0.62)',
              }}
            >
              Client video testimonial
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
});

/* ─── Main Component ───────────────── */
const Testimonials: React.FC = () => {
  const [active, setActive] = useState<Video | null>(null);

  const openVideo = useCallback((v: Video) => setActive(v), []);
  const closeVideo = useCallback(() => setActive(null), []);

  return (
    <>
      <Styles />

      <Box
        component="section"
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
            background:
              'radial-gradient(ellipse at top, rgba(59,130,246,0.07), transparent 62%)',
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
              className="t-fade"
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
                Client Stories
              </Typography>
            </Box>

            <Typography
              className="t-fade"
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
                animationDelay: '0.08s',
              }}
            >
              What clients say
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
                about our work
              </Box>
            </Typography>

            <Typography
              className="t-fade"
              sx={{
                fontFamily: '"Inter", sans-serif',
                color: '#64748b',
                maxWidth: 620,
                mx: 'auto',
                fontSize: { xs: '0.98rem', md: '1.05rem' },
                lineHeight: 1.8,
                animationDelay: '0.16s',
              }}
            >
              Real stories from client partnerships across digital platforms,
              marketing systems, and business-focused web experiences.
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
              },
              gap: { xs: 2, md: 2.5, lg: 3 },
            }}
          >
            {VIDEOS.map((v, i) => (
              <VideoCard key={v.id} video={v} index={i} onOpen={openVideo} />
            ))}
          </Box>
        </Container>
      </Box>

      <VideoModal video={active} onClose={closeVideo} />
    </>
  );
};

export default Testimonials;