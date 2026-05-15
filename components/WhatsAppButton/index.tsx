'use client';

import React, { memo, useEffect, useState } from 'react';
import { Box, Fab, Typography, IconButton, Zoom } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { Close, ArrowForwardRounded } from '@mui/icons-material';

/* ────────────────────────────────────────────────────────── */
/* Icons */
/* ────────────────────────────────────────────────────────── */
const WaIcon: React.FC<{ size?: number; color?: string }> = memo(
  ({ size = 28, color = '#fff' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
        fill={color}
      />
      <path
        d="M12.004 2C6.477 2 2 6.477 2 12.004a9.979 9.979 0 001.372 5.09L2 22l5.043-1.347a9.974 9.974 0 004.96 1.314C17.524 21.967 22 17.49 22 11.963 22 6.436 17.531 2 12.004 2zm0 18.188a8.175 8.175 0 01-4.152-1.13l-.298-.178-3.09.826.832-3.046-.196-.313a8.19 8.19 0 01-1.263-4.347c0-4.528 3.685-8.213 8.167-8.213 4.483 0 8.168 3.685 8.168 8.213 0 4.527-3.685 8.188-8.168 8.188z"
        fill={color}
      />
    </svg>
  )
);
WaIcon.displayName = 'WaIcon';

const AgentAvatar = memo(function AgentAvatar() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="20" fill="url(#agentGrad)" />
      <circle cx="20" cy="15" r="5.7" fill="rgba(255,255,255,0.92)" />
      <path d="M8.5 33c0-6.2 5.1-11.2 11.5-11.2S31.5 26.8 31.5 33" fill="rgba(255,255,255,0.92)" />
      <defs>
        <linearGradient id="agentGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#25D366" />
          <stop offset="100%" stopColor="#128C7E" />
        </linearGradient>
      </defs>
    </svg>
  );
});

const TypingDots = memo(function TypingDots() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', py: '2px' }}>
      {[0, 1, 2].map((i) => (
        <Box
          key={i}
          sx={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.46)',
            animation: 'waTypingDot 1.4s ease-in-out infinite',
            animationDelay: `${i * 0.18}s`,
          }}
        />
      ))}
    </Box>
  );
});

/* ────────────────────────────────────────────────────────── */
/* Styles */
/* ────────────────────────────────────────────────────────── */
const WhatsAppStyles = memo(function WhatsAppStyles() {
  return (
    <style>{`
      @keyframes waFadeUp {
        from {
          opacity: 0;
          transform: translateY(14px) scale(0.96);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      @keyframes waPulseRing {
        0% {
          transform: scale(1);
          opacity: 0.55;
        }
        100% {
          transform: scale(1.9);
          opacity: 0;
        }
      }

      @keyframes waFloat {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
      }

      @keyframes waGlow {
        0%, 100% { filter: drop-shadow(0 0 10px rgba(37,211,102,0.35)); }
        50% { filter: drop-shadow(0 0 18px rgba(37,211,102,0.55)); }
      }

      @keyframes waTypingDot {
        0%, 60%, 100% {
          transform: translateY(0);
          opacity: .42;
        }
        30% {
          transform: translateY(-4px);
          opacity: 1;
        }
      }

      @keyframes waBadgePop {
        0% { transform: scale(0); }
        70% { transform: scale(1.18); }
        100% { transform: scale(1); }
      }

      @keyframes waTwinkle {
        0%, 100% { opacity: 0.16; }
        50% { opacity: 0.42; }
      }

      .wa-fade {
        animation: waFadeUp .3s cubic-bezier(.16,1,.3,1) both;
      }

      .wa-fab-wrap {
        animation: waFloat 3.2s ease-in-out infinite;
      }

      .wa-fab-wrap.pulsing::before,
      .wa-fab-wrap.pulsing::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 999px;
        background: rgba(37,211,102,0.32);
        animation: waPulseRing 2s ease-out infinite;
      }

      .wa-fab-wrap.pulsing::after {
        animation-delay: .7s;
      }

      .wa-icon-glow {
        animation: waGlow 2.2s ease-in-out infinite;
      }

      .wa-badge-pop {
        animation: waBadgePop .34s cubic-bezier(.34,1.56,.64,1) both;
      }

      @media (prefers-reduced-motion: reduce) {
        .wa-fade,
        .wa-fab-wrap,
        .wa-fab-wrap.pulsing::before,
        .wa-fab-wrap.pulsing::after,
        .wa-icon-glow,
        .wa-badge-pop {
          animation: none !important;
        }
      }
    `}</style>
  );
});

/* ────────────────────────────────────────────────────────── */
/* Component */
/* ────────────────────────────────────────────────────────── */
const WhatsAppButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);
  const [showTyping, setShowTyping] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [replyTime, setReplyTime] = useState('');

  const phoneNumber = '919876543210';
  const defaultMessage = 'Hello! I would like to know more about your services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  useEffect(() => {
    const t1 = setTimeout(() => setIsVisible(true), 800);
    const t2 = setTimeout(() => setIsPulsing(false), 6000);

    const t3 = setTimeout(() => {
      setShowPopup(true);
      setShowTyping(true);
    }, 3500);

    const t4 = setTimeout(() => {
      setShowTyping(false);
      setShowReply(true);
      setReplyTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setUnreadCount(1);
    }, 5200);

    const t5 = setTimeout(() => setShowPopup(false), 14000);

    return () => {
      [t1, t2, t3, t4, t5].forEach(clearTimeout);
    };
  }, []);

  const handleOpen = () => {
    setShowPopup(true);
    setUnreadCount(0);

    if (!showReply) {
      setShowTyping(true);
      setTimeout(() => {
        setShowTyping(false);
        setShowReply(true);
        setReplyTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      }, 1600);
    }
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleChatClick = () => {
    setUnreadCount(0);
    setShowPopup(false);
  };

  return (
    <>
      <WhatsAppStyles />

      <Box
        sx={{
          position: 'fixed',
          bottom: { xs: 20, sm: 24, md: 28 },
          right: { xs: 18, sm: 24, md: 28 },
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 1.8,
        }}
      >
        {/* Popup */}
        {showPopup && (
          <Box
            className="wa-fade"
            sx={{
              width: { xs: 280, sm: 316 },
              borderRadius: '22px',
              overflow: 'hidden',
              background: 'linear-gradient(180deg, #0b1220 0%, #08101d 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 24px 60px rgba(2,6,23,0.42)',
              position: 'relative',
            }}
          >
            {/* Background */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                opacity: 0.22,
                backgroundImage: `
                  linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)
                `,
                backgroundSize: '30px 30px',
                pointerEvents: 'none',
              }}
            />

            <Box
              sx={{
                position: 'absolute',
                top: -40,
                right: -30,
                width: 160,
                height: 160,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(37,211,102,0.14), transparent 70%)',
                filter: 'blur(18px)',
                pointerEvents: 'none',
              }}
            />

            {/* Top bar */}
            <Box
              sx={{
                position: 'relative',
                zIndex: 1,
                height: 3,
                background: 'linear-gradient(90deg, #25D366, #128C7E)',
              }}
            />

            {/* Header */}
            <Box
              sx={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 1.4,
                px: 2,
                py: 1.5,
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                background: 'rgba(255,255,255,0.02)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <Box sx={{ position: 'relative', flexShrink: 0 }}>
                <AgentAvatar />
                <Box
                  sx={{
                    position: 'absolute',
                    right: 1,
                    bottom: 1,
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: '#25D366',
                    border: '2px solid #0b1220',
                    boxShadow: '0 0 8px rgba(37,211,102,0.7)',
                  }}
                />
              </Box>

              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    lineHeight: 1.2,
                    mb: 0.2,
                  }}
                >
                  Bendra Support
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.72rem',
                    fontWeight: 500,
                    color: '#86efac',
                  }}
                >
                  Online now
                </Typography>
              </Box>

              <IconButton
                onClick={handleClose}
                size="small"
                sx={{
                  color: 'rgba(255,255,255,0.5)',
                  p: 0.5,
                  '&:hover': {
                    color: '#fff',
                    background: 'rgba(255,255,255,0.07)',
                  },
                }}
              >
                <Close sx={{ fontSize: '1rem' }} />
              </IconButton>
            </Box>

            {/* Chat body */}
            <Box
              sx={{
                position: 'relative',
                zIndex: 1,
                px: 2,
                py: 1.8,
                minHeight: 118,
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              <Typography
                sx={{
                  textAlign: 'center',
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '0.66rem',
                  color: 'rgba(255,255,255,0.24)',
                  letterSpacing: '0.03em',
                  mb: 0.3,
                }}
              >
                Today
              </Typography>

              {(showTyping || showReply) && (
                <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1 }}>
                  <Box sx={{ flexShrink: 0, mb: 0.2 }}>
                    <AgentAvatar />
                  </Box>

                  <Box>
                    {showTyping && !showReply && (
                      <Box
                        sx={{
                          px: 1.7,
                          py: 0.95,
                          borderRadius: '16px 16px 16px 5px',
                          background: 'rgba(255,255,255,0.07)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          backdropFilter: 'blur(10px)',
                        }}
                      >
                        <TypingDots />
                      </Box>
                    )}

                    {showReply && (
                      <Box
                        className="wa-fade"
                        sx={{
                          px: 1.7,
                          py: 1.15,
                          maxWidth: 210,
                          borderRadius: '16px 16px 16px 5px',
                          background: 'rgba(255,255,255,0.08)',
                          border: '1px solid rgba(255,255,255,0.09)',
                          backdropFilter: 'blur(10px)',
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: '"Inter", sans-serif',
                            fontSize: '0.82rem',
                            color: 'rgba(255,255,255,0.88)',
                            lineHeight: 1.52,
                          }}
                        >
                          Hi there! 👋 How can we help you today?
                        </Typography>

                        <Typography
                          sx={{
                            mt: 0.45,
                            textAlign: 'right',
                            fontFamily: '"Inter", sans-serif',
                            fontSize: '0.62rem',
                            color: 'rgba(255,255,255,0.28)',
                            letterSpacing: '0.02em',
                          }}
                        >
                          {replyTime || '--:--'}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Box>
              )}
            </Box>

            {/* Footer CTA */}
            <Box
              component="a"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleChatClick}
              sx={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1.1,
                py: 1.35,
                px: 2,
                textDecoration: 'none',
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                transition: 'transform .22s ease, filter .22s ease',
                '&:hover': {
                  transform: 'translateY(-1px)',
                  filter: 'brightness(1.06)',
                },
                '&:active': {
                  transform: 'scale(0.98)',
                },
              }}
            >
              <Box className="wa-icon-glow">
                <WaIcon size={19} color="#fff" />
              </Box>

              <Typography
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  color: '#fff',
                }}
              >
                Reply on WhatsApp
              </Typography>

              <Box
                sx={{
                  width: 26,
                  height: 26,
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255,255,255,0.16)',
                }}
              >
                <ArrowForwardRounded sx={{ fontSize: 16, color: '#fff' }} />
              </Box>
            </Box>
          </Box>
        )}

        {/* FAB */}
        <Zoom in={isVisible} timeout={500}>
          <Box sx={{ position: 'relative' }}>
            {unreadCount > 0 && !showPopup && (
              <Box
                className="wa-badge-pop"
                sx={{
                  position: 'absolute',
                  top: -4,
                  right: -4,
                  zIndex: 3,
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  background: '#ef4444',
                  border: '2px solid #fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(239,68,68,0.5)',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.64rem',
                    fontWeight: 700,
                    color: '#fff',
                    lineHeight: 1,
                  }}
                >
                  {unreadCount}
                </Typography>
              </Box>
            )}

            <Box className={`wa-fab-wrap ${isPulsing ? 'pulsing' : ''}`} sx={{ position: 'relative' }}>
              <Fab
                aria-label="WhatsApp"
                onClick={showPopup ? handleClose : handleOpen}
                sx={{
                  width: { xs: 56, sm: 60, md: 64 },
                  height: { xs: 56, sm: 60, md: 64 },
                  position: 'relative',
                  zIndex: 2,
                  background: 'linear-gradient(145deg, #2dd96f 0%, #25D366 50%, #128C7E 100%)',
                  color: '#fff',
                  border: '2px solid rgba(255,255,255,0.22)',
                  boxShadow:
                    '0 10px 28px rgba(37,211,102,0.38), 0 4px 10px rgba(2,6,23,0.28)',
                  transition: 'all .28s cubic-bezier(.34,1.56,.64,1)',
                  '&:hover': {
                    background: 'linear-gradient(145deg, #25D366 0%, #128C7E 100%)',
                    boxShadow:
                      '0 14px 34px rgba(37,211,102,0.5), 0 4px 12px rgba(2,6,23,0.32)',
                    transform: 'translateY(-2px) scale(1.04)',
                    borderColor: 'rgba(255,255,255,0.34)',
                  },
                  '&:active': {
                    transform: 'scale(0.96)',
                  },
                }}
              >
                <Box className="wa-icon-glow">
                  <WaIcon size={30} color="#fff" />
                </Box>
              </Fab>
            </Box>
          </Box>
        </Zoom>
      </Box>
    </>
  );
};

export default WhatsAppButton;