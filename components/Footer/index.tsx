'use client';

import React from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
} from '@mui/material';
import {
  ArrowForward,
  SendOutlined,
  LocationOnOutlined,
  PhoneOutlined,
  EmailOutlined,
  Facebook,
  Instagram,
  LinkedIn,
  WhatsApp,
  NorthEast,
} from '@mui/icons-material';
import Link from 'next/link';

const FooterStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

    @keyframes fadeUpFooter {
      from { opacity: 0; transform: translateY(18px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @keyframes pulseGlow {
      0%, 100% { box-shadow: 0 0 20px rgba(59,130,246,0.3); }
      50%      { box-shadow: 0 0 36px rgba(59,130,246,0.55); }
    }

    @keyframes shimmerLine {
      0%   { background-position: -200% center; }
      100% { background-position:  200% center; }
    }

    @keyframes floatIcon {
      0%, 100% { transform: translateY(0px); }
      50%      { transform: translateY(-4px); }
    }

    .footer-section {
      animation: fadeUpFooter 0.6s cubic-bezier(0.16,1,0.3,1) both;
    }

    .footer-cta-glow {
      animation: pulseGlow 3s ease-in-out infinite;
    }

    .footer-accent-line {
      background-image: linear-gradient(
        90deg, transparent, #3b82f6 30%, #60a5fa 50%, #3b82f6 70%, transparent
      );
      background-size: 200% auto;
      animation: shimmerLine 4s linear infinite;
    }

    .footer-link {
      position: relative;
      transition: color 0.25s ease, transform 0.25s ease !important;
      -webkit-tap-highlight-color: transparent;
    }

    .footer-link::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 1px;
      background: #3b82f6;
      transition: width 0.3s ease;
    }

    .footer-social-btn {
      transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1) !important;
      -webkit-tap-highlight-color: transparent;
    }

    .footer-contact-item {
      transition: color 0.25s ease !important;
      -webkit-tap-highlight-color: transparent;
    }

    .footer-contact-icon {
      transition: all 0.3s ease !important;
    }

    .footer-cta-btn {
      transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1) !important;
      -webkit-tap-highlight-color: transparent;
    }

    @media (hover: hover) {
      .footer-link:hover {
        color: #fff !important;
        transform: translateX(4px);
      }

      .footer-link:hover::after {
        width: 100%;
      }

      .footer-social-btn:hover {
        background: #3b82f6 !important;
        border-color: #3b82f6 !important;
        color: #fff !important;
        transform: translateY(-4px) !important;
        box-shadow: 0 8px 20px rgba(59,130,246,0.4) !important;
      }

      .footer-contact-item:hover {
        color: #60a5fa !important;
      }

      .footer-contact-item:hover .footer-contact-icon {
        background: rgba(59,130,246,0.18) !important;
        border-color: rgba(59,130,246,0.4) !important;
        transform: scale(1.05);
      }

      .footer-cta-btn:hover {
        transform: translateY(-3px) scale(1.02) !important;
        box-shadow: 0 10px 32px rgba(59,130,246,0.5) !important;
      }

      .footer-cta-btn:hover .cta-btn-arrow {
        transform: translateX(4px);
      }
    }

    @media (hover: none) {
      .footer-social-btn:active {
        transform: scale(0.92) !important;
      }

      .footer-cta-btn:active {
        transform: scale(0.97) !important;
      }

      .footer-link:active {
        color: #60a5fa !important;
      }
    }

    .cta-btn-arrow {
      transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
    }

    @media (prefers-reduced-motion: reduce) {
      .footer-section, .footer-cta-glow,
      .footer-accent-line, .footer-link,
      .footer-social-btn, .footer-contact-item,
      .footer-contact-icon, .footer-cta-btn,
      .cta-btn-arrow {
        animation: none !important;
        transition: none !important;
      }
    }
  `}</style>
);

const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Our Expertise', href: '/expertise/website-development' },
      { label: 'Blogs', href: '/blogs' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Top Services',
    links: [
      { label: 'Website Development', href: '/expertise/website-development' },
      { label: 'Social Media Marketing', href: '/expertise/social-media-marketing' },
      { label: 'Website UI/UX Design', href: '/expertise/ui-ux-design' },
      { label: 'Email Marketing', href: '/expertise/email-marketing' },
      { label: 'SEO', href: '/expertise/seo' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Refund Policy', href: '/refund' },
    ],
  },
];

const contactInfo = [
  {
    icon: <LocationOnOutlined sx={{ fontSize: 16, color: '#3b82f6' }} />,
    text: '8 S 1 & 2, 2nd Floor, Above Vardhman Spuntex Basant Vihar, Bhilwara 311001',
    href: 'https://maps.google.com',
  },
  {
    icon: <PhoneOutlined sx={{ fontSize: 16, color: '#3b82f6' }} />,
    text: '+91 7065373705',
    href: 'tel:+917065373705',
  },
  {
    icon: <EmailOutlined sx={{ fontSize: 16, color: '#3b82f6' }} />,
    text: 'connect@digitalemantra.com',
    href: 'mailto:connect@digitalemantra.com',
  },
];

const socialLinks = [
  { label: 'Facebook', icon: <Facebook sx={{ fontSize: 18 }} />, href: '#' },
  { label: 'Instagram', icon: <Instagram sx={{ fontSize: 18 }} />, href: '#' },
  { label: 'LinkedIn', icon: <LinkedIn sx={{ fontSize: 18 }} />, href: '#' },
  { label: 'WhatsApp', icon: <WhatsApp sx={{ fontSize: 18 }} />, href: '#' },
];

const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery('(max-width:360px)');

  return (
    <>
      <FooterStyles />

      <Box
        component="footer"
        sx={{
          background: '#050d1a',
          position: 'relative',
          overflow: 'hidden',
          color: '#fff',
        }}
      >
        {/* Grid texture */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)
            `,
            backgroundSize: { xs: '32px 32px', md: '48px 48px' },
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Top accent line */}
        <Box
          className="footer-accent-line"
          sx={{ height: 2, position: 'relative', zIndex: 2 }}
        />

        {/* ── CTA Band ── */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            background:
              'linear-gradient(100deg, #0a1628 0%, #0f1f3d 40%, #0d1b35 100%)',
            borderBottom: '1px solid rgba(59,130,246,0.1)',
          }}
        >
          {/* CTA glow */}
          <Box
            sx={{
              position: 'absolute',
              top: { xs: '-40%', md: '-60%' },
              right: { xs: '5%', md: '15%' },
              width: { xs: 180, md: 280 },
              height: { xs: 180, md: 280 },
              background:
                'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 65%)',
              pointerEvents: 'none',
              filter: 'blur(20px)',
            }}
          />

          <Container
            maxWidth="xl"
            sx={{ px: { xs: 2, sm: 3, md: 5, lg: 6 } }}
          >
            <Box
              className="footer-section"
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: { xs: 'center', md: 'center' },
                justifyContent: 'space-between',
                gap: { xs: 2.5, md: 3 },
                py: { xs: 3, sm: 3.5, md: 3.5 },
                textAlign: { xs: 'center', md: 'left' },
                animationDelay: '0.05s',
              }}
            >
              {/* Left */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'center',
                  gap: { xs: 1.5, sm: 2.5 },
                }}
              >
                <Box
                  className="footer-cta-glow"
                  sx={{
                    width: { xs: 48, md: 56 },
                    height: { xs: 48, md: 56 },
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <SendOutlined
                    sx={{
                      fontSize: { xs: 20, md: 22 },
                      color: '#fff',
                      transform: 'rotate(-30deg)',
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontFamily: "'Sora', sans-serif",
                      fontSize: {
                        xs: isSmallMobile ? '1rem' : '1.1rem',
                        sm: '1.18rem',
                        md: '1.25rem',
                      },
                      fontWeight: 700,
                      color: '#fff',
                      lineHeight: 1.2,
                      mb: 0.4,
                    }}
                  >
                    Ready to build something amazing?
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: { xs: '0.82rem', md: '0.88rem' },
                      color: 'rgba(255,255,255,0.5)',
                      fontWeight: 400,
                    }}
                  >
                    Let&apos;s turn your ideas into powerful digital solutions.
                  </Typography>
                </Box>
              </Box>

              {/* CTA Button */}
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  fullWidth={isMobile}
                  endIcon={
                    <ArrowForward
                      className="cta-btn-arrow"
                      sx={{ fontSize: '1rem !important' }}
                    />
                  }
                  className="footer-cta-btn"
                  sx={{
                    fontFamily: "'Sora', sans-serif",
                    background: 'linear-gradient(90deg, #3b82f6, #2563eb)',
                    color: '#fff',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: { xs: '0.84rem', md: '0.9rem' },
                    letterSpacing: '0.03em',
                    px: { xs: 3, md: 3.5 },
                    py: { xs: 1.2, md: 1.3 },
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(59,130,246,0.35)',
                    whiteSpace: 'nowrap',
                    minWidth: { xs: '100%', sm: 'auto' },
                  }}
                >
                  Get Quote
                </Button>
              </Link>
            </Box>
          </Container>
        </Box>

        {/* ── Main Footer Grid ── */}
        <Container
          maxWidth="xl"
          sx={{ px: { xs: 2, sm: 3, md: 5, lg: 6 } }}
        >
          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              py: { xs: 5, sm: 5.5, md: 6 },
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: '1.4fr 1fr 1.1fr 0.8fr',
                lg: '1.4fr 1fr 1.1fr 0.8fr 1.3fr',
              },
              gap: { xs: 4, sm: 3.5, md: 4, lg: 4.5 },
            }}
          >
            {/* ── Brand Column ── */}
            <Box
              className="footer-section"
              sx={{
                animationDelay: '0.08s',
                gridColumn: { xs: '1 / -1', sm: '1 / -1', md: '1', lg: '1' },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Link href="/" style={{ textDecoration: 'none' }}>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    mb: 1,
                  }}
                >
                  <Box
                    component="img"
                    src="/logo.png"
                    alt="Bendra Logo"
                    sx={{
                      height: { xs: 28, md: 32 },
                      width: 'auto',
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 800,
                      fontSize: { xs: '1.2rem', md: '1.35rem' },
                      letterSpacing: '0.1em',
                      background:
                        'linear-gradient(135deg, #fff 40%, #90cdf4 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    BENDRA
                  </Typography>
                </Box>
              </Link>

              <Typography
                sx={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: '0.72rem',
                  color: 'rgba(255,255,255,0.35)',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  mb: 2.5,
                }}
              >
                Build Smarter Systems
              </Typography>

              <Typography
                sx={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: { xs: '0.84rem', md: '0.88rem' },
                  color: 'rgba(255,255,255,0.45)',
                  lineHeight: 1.7,
                  fontWeight: 400,
                  mb: 3,
                  maxWidth: { xs: 320, md: 280 },
                  mx: { xs: 'auto', md: 0 },
                }}
              >
                Your trusted technology partner for CRM, web development,
                and business automation solutions.
              </Typography>

              <Typography
                sx={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.78rem',
                  color: 'rgba(255,255,255,0.4)',
                  fontWeight: 400,
                  mb: 1.2,
                }}
              >
                Follow Us
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  gap: 1,
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}
              >
                {socialLinks.map((s) => (
                  <IconButton
                    key={s.label}
                    component="a"
                    href={s.href}
                    aria-label={s.label}
                    className="footer-social-btn"
                    sx={{
                      width: 38,
                      height: 38,
                      borderRadius: '10px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'rgba(255,255,255,0.55)',
                      background: 'rgba(255,255,255,0.03)',
                    }}
                  >
                    {s.icon}
                  </IconButton>
                ))}
              </Box>
            </Box>

            {/* ── Link Columns ── */}
            {footerLinks.map((col, colIdx) => (
              <Box
                key={col.title}
                className="footer-section"
                sx={{
                  animationDelay: `${0.14 + colIdx * 0.06}s`,
                  textAlign: { xs: 'center', sm: 'left' },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    color: 'rgba(255,255,255,0.3)',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    mb: { xs: 2, md: 2.5 },
                    position: 'relative',
                    display: 'inline-block',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -6,
                      left: { xs: '50%', sm: 0 },
                      transform: { xs: 'translateX(-50%)', sm: 'none' },
                      width: 20,
                      height: 2,
                      borderRadius: 99,
                      background:
                        'linear-gradient(90deg, #3b82f6, transparent)',
                      opacity: 0.5,
                    },
                  }}
                >
                  {col.title}
                </Typography>

                <Box
                  component="ul"
                  sx={{
                    listStyle: 'none',
                    p: 0,
                    m: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { xs: 1.3, md: 1.5 },
                    mt: 1,
                  }}
                >
                  {col.links.map((link) => (
                    <Box component="li" key={link.label}>
                      <Link
                        href={link.href}
                        className="footer-link"
                        style={{
                          textDecoration: 'none',
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: '0.88rem',
                          color: 'rgba(255,255,255,0.55)',
                          fontWeight: 400,
                          display: 'inline-block',
                        }}
                      >
                        {link.label}
                      </Link>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}

            {/* ── Contact Column ── */}
            <Box
              className="footer-section"
              sx={{
                animationDelay: '0.32s',
                gridColumn: { xs: '1 / -1', sm: '1 / -1', md: 'auto', lg: 'auto' },
                textAlign: { xs: 'center', sm: 'left' },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.3)',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  mb: { xs: 2, md: 2.5 },
                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -6,
                    left: { xs: '50%', sm: 0 },
                    transform: { xs: 'translateX(-50%)', sm: 'none' },
                    width: 20,
                    height: 2,
                    borderRadius: 99,
                    background:
                      'linear-gradient(90deg, #3b82f6, transparent)',
                    opacity: 0.5,
                  },
                }}
              >
                Get In Touch
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  mt: 1,
                }}
              >
                {contactInfo.map((info, idx) => (
                  <Box
                    key={idx}
                    component="a"
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      info.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="footer-contact-item"
                    sx={{
                      display: 'flex',
                      alignItems: { xs: 'center', sm: 'flex-start' },
                      flexDirection: { xs: 'column', sm: 'row' },
                      gap: { xs: 1, sm: 1.5 },
                      color: 'rgba(255,255,255,0.5)',
                      textDecoration: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <Box
                      className="footer-contact-icon"
                      sx={{
                        width: 34,
                        height: 34,
                        borderRadius: '10px',
                        background: 'rgba(59,130,246,0.08)',
                        border: '1px solid rgba(59,130,246,0.18)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: { xs: '0.82rem', md: '0.85rem' },
                        fontWeight: 400,
                        color: 'inherit',
                        lineHeight: 1.5,
                        maxWidth: { xs: 260, sm: 220 },
                      }}
                    >
                      {info.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Divider */}
          <Box
            sx={{
              height: '1px',
              background:
                'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
              position: 'relative',
              zIndex: 1,
            }}
          />

          {/* ── Bottom Bar ── */}
          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              py: { xs: 2.5, md: 2.5 },
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: { xs: 'center', sm: 'space-between' },
              gap: { xs: 1.5, sm: 2 },
            }}
          >
            <Typography
              sx={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: { xs: '0.72rem', md: '0.78rem' },
                color: 'rgba(255,255,255,0.25)',
                fontWeight: 400,
                textAlign: { xs: 'center', sm: 'left' },
              }}
            >
              © Copyright 2025 DEM Technologies Private Limited. All Rights
              Reserved
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              {['Privacy', 'Terms'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="footer-link"
                  style={{
                    textDecoration: 'none',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.75rem',
                    color: 'rgba(255,255,255,0.3)',
                    fontWeight: 400,
                  }}
                >
                  {item}
                </Link>
              ))}

              {/* Back to top */}
              <IconButton
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Back to top"
                className="footer-social-btn"
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.4)',
                  background: 'rgba(255,255,255,0.03)',
                }}
              >
                <NorthEast sx={{ fontSize: 14, transform: 'rotate(-45deg)' }} />
              </IconButton>
            </Box>
          </Box>
        </Container>

        {/* Safe area bottom */}
        <Box
          sx={{
            height: 'env(safe-area-inset-bottom, 0px)',
            background: '#050d1a',
          }}
        />
      </Box>
    </>
  );
};

export default Footer;