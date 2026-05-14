'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
} from '@mui/material';
import {
  ArrowForwardRounded,
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

/* ─── Styles ──────────────────────────────────────────────── */
const FooterStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=Outfit:wght@300;400;500;600&display=swap');

    @keyframes fadeUpFooter {
      from { opacity: 0; transform: translateY(18px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @keyframes shimmerLine {
      0%   { background-position: -200% center; }
      100% { background-position:  200% center; }
    }

    @keyframes pulseGlow {
      0%, 100% { box-shadow: 0 0 20px rgba(14,90,240,.3); }
      50%      { box-shadow: 0 0 36px rgba(14,90,240,.55); }
    }

    .ft-section {
      animation: fadeUpFooter .6s cubic-bezier(.16,1,.3,1) both;
    }

    .ft-accent-line {
      background-image: linear-gradient(
        90deg, transparent, #0e5af0 30%, #60a5fa 50%, #0e5af0 70%, transparent
      );
      background-size: 200% auto;
      animation: shimmerLine 4s linear infinite;
    }

    .ft-cta-glow {
      animation: pulseGlow 3s ease-in-out infinite;
    }

    /* ── Link ── */
    .ft-link {
      position: relative;
      transition: color .25s ease, transform .25s ease !important;
      -webkit-tap-highlight-color: transparent;
    }
    .ft-link::after {
      content: '';
      position: absolute;
      bottom: -2px; left: 0;
      width: 0; height: 1px;
      background: #0e5af0;
      transition: width .3s ease;
    }
    @media (hover: hover) {
      .ft-link:hover { color: #fff !important; transform: translateX(4px); }
      .ft-link:hover::after { width: 100%; }
    }
    @media (hover: none) {
      .ft-link:active { color: #60a5fa !important; }
    }

    /* ── Disabled Link ── */
    .ft-link-disabled {
      opacity: 0.4;
      cursor: default !important;
      pointer-events: none;
    }

    /* ── Social ── */
    .ft-social {
      transition: all .3s cubic-bezier(.34,1.4,.64,1) !important;
      -webkit-tap-highlight-color: transparent;
    }
    @media (hover: hover) {
      .ft-social:hover {
        background: #0e5af0 !important;
        border-color: #0e5af0 !important;
        color: #fff !important;
        transform: translateY(-4px) !important;
        box-shadow: 0 8px 20px rgba(14,90,240,.4) !important;
      }
    }
    @media (hover: none) {
      .ft-social:active { transform: scale(.92) !important; }
    }

    /* ── Contact item ── */
    .ft-contact {
      transition: color .25s ease !important;
      -webkit-tap-highlight-color: transparent;
    }
    .ft-contact-icon {
      transition: all .3s ease !important;
    }
    @media (hover: hover) {
      .ft-contact:hover { color: #60a5fa !important; }
      .ft-contact:hover .ft-contact-icon {
        background: rgba(14,90,240,.18) !important;
        border-color: rgba(14,90,240,.4) !important;
        transform: scale(1.05);
      }
    }

    /* ── CTA button ── */
    .ft-cta-btn {
      transition: all .3s cubic-bezier(.34,1.4,.64,1) !important;
      -webkit-tap-highlight-color: transparent;
    }
    .ft-cta-arrow {
      transition: transform .3s cubic-bezier(.34,1.4,.64,1);
    }
    @media (hover: hover) {
      .ft-cta-btn:hover {
        transform: translateY(-3px) scale(1.02) !important;
        box-shadow: 0 10px 32px rgba(14,90,240,.5) !important;
      }
      .ft-cta-btn:hover .ft-cta-arrow { transform: translateX(4px); }
    }
    @media (hover: none) {
      .ft-cta-btn:active { transform: scale(.97) !important; }
    }

    @media (prefers-reduced-motion: reduce) {
      .ft-section,.ft-accent-line,.ft-cta-glow,
      .ft-link,.ft-social,.ft-contact,.ft-contact-icon,
      .ft-cta-btn,.ft-cta-arrow {
        animation: none !important; transition: none !important;
      }
    }
  `}</style>
);

/* ─── Data ───────────────────────────────────────────────── */
const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Our Expertise', href: '/expertise' },
      { label: 'Blogs', href: '/blogs' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Top Services',
    links: [
      { label: 'Website Development', href: '#', disabled: true },
      { label: 'Social Media Marketing', href: '#', disabled: true },
      { label: 'UI/UX Design', href: '#', disabled: true },
      { label: 'SEO', href: '#', disabled: true },
      { label: 'Zoho Development', href: '#', disabled: true },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Refund Policy', href: '/refund-policy' },
      { label: 'Terms & Conditions', href: '/terms-and-conditions' },
    ],
  },
];

const contactInfo = [
  {
    icon: <LocationOnOutlined sx={{ fontSize: 16, color: '#0e5af0' }} />,
    text: 'RNA RESOURCES BUILDING, Al Qouz Third 104-0 – Dubai',
    href: 'https://maps.google.com/?q=RNA+RESOURCES+BUILDING+Al+Qouz+Third+Dubai',
  },
  {
    icon: <PhoneOutlined sx={{ fontSize: 16, color: '#0e5af0' }} />,
    text: '+971 50 123 4567',
    href: 'tel:+971501234567',
  },
  {
    icon: <EmailOutlined sx={{ fontSize: 16, color: '#0e5af0' }} />,
    text: 'marketing@acasa.ae',
    href: 'mailto:marketing@acasa.ae',
  },
];

const socialLinks = [
  { label: 'Facebook', icon: <Facebook sx={{ fontSize: 18 }} />, href: 'https://facebook.com' },
  { label: 'Instagram', icon: <Instagram sx={{ fontSize: 18 }} />, href: 'https://instagram.com' },
  { label: 'LinkedIn', icon: <LinkedIn sx={{ fontSize: 18 }} />, href: 'https://linkedin.com' },
  { label: 'WhatsApp', icon: <WhatsApp sx={{ fontSize: 18 }} />, href: 'https://wa.me/971501234567' },
];

/* ─── Component ──────────────────────────────────────────── */
const Footer: React.FC = () => {
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
              linear-gradient(rgba(14,90,240,.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14,90,240,.04) 1px, transparent 1px)
            `,
            backgroundSize: { xs: '28px 28px', md: '44px 44px' },
            pointerEvents: 'none',
            zIndex: 0,
            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)',
          }}
        />

        {/* Top accent line */}
        <Box
          className="ft-accent-line"
          sx={{ height: 2, position: 'relative', zIndex: 2 }}
        />

        {/* ── CTA Band ── */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            background: 'linear-gradient(100deg, #0a1628, #0f1f3d 40%, #0d1b35)',
            borderBottom: '1px solid rgba(14,90,240,.1)',
            overflow: 'hidden',
          }}
        >
          {/* CTA glow */}
          <Box
            sx={{
              position: 'absolute',
              top: { xs: '-40%', md: '-60%' },
              right: { xs: '5%', md: '15%' },
              width: { xs: 160, sm: 220, md: 280 },
              height: { xs: 160, sm: 220, md: 280 },
              background: 'radial-gradient(circle, rgba(14,90,240,.18), transparent 65%)',
              pointerEvents: 'none',
              filter: 'blur(20px)',
            }}
          />

          <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 5 } }}>
            <Box
              className="ft-section"
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'center', sm: 'center' },
                justifyContent: 'space-between',
                gap: { xs: 2.5, sm: 3 },
                py: { xs: 3, sm: 3.5, md: 3.5 },
                textAlign: { xs: 'center', sm: 'left' },
                animationDelay: '.05s',
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
                  className="ft-cta-glow"
                  sx={{
                    width: { xs: 48, md: 56 },
                    height: { xs: 48, md: 56 },
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #0e5af0, #60a5fa)',
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
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' },
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
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: { xs: '.82rem', md: '.88rem' },
                      color: 'rgba(255,255,255,.5)',
                      fontWeight: 400,
                    }}
                  >
                    Let&apos;s turn your ideas into powerful digital solutions.
                  </Typography>
                </Box>
              </Box>

              {/* CTA Button */}
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Box
                  className="ft-cta-btn"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    px: { xs: 2.8, md: 3.2 },
                    py: { xs: 1.2, md: 1.3 },
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #0e5af0, #0a4ad4)',
                    color: '#fff',
                    cursor: 'pointer',
                    boxShadow: '0 4px 20px rgba(14,90,240,.35)',
                    whiteSpace: 'nowrap',
                    width: { xs: '100%', sm: 'auto' },
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontWeight: 700,
                      fontSize: { xs: '.84rem', md: '.9rem' },
                      color: 'inherit',
                    }}
                  >
                    Get Quote
                  </Typography>
                  <ArrowForwardRounded className="ft-cta-arrow" sx={{ fontSize: 18 }} />
                </Box>
              </Link>
            </Box>
          </Container>
        </Box>

        {/* ── Main Footer Grid ── */}
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 5 } }}>
          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              py: { xs: 5, sm: 5.5, md: 6 },
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: '1.4fr 1fr 1fr 1.2fr',
                lg: '1.4fr 1fr 1fr 0.9fr 1.3fr',
              },
              gap: { xs: 4, sm: 3.5, md: 4, lg: 4.5 },
            }}
          >
            {/* ── Brand Column ── */}
            <Box
              className="ft-section"
              sx={{
                animationDelay: '.08s',
                gridColumn: { xs: '1 / -1', sm: '1 / -1', md: '1' },
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
                    sx={{ height: { xs: 28, md: 32 }, width: 'auto' }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontWeight: 800,
                      fontSize: { xs: '1.2rem', md: '1.35rem' },
                      letterSpacing: '.1em',
                      background: 'linear-gradient(135deg, #fff 40%, #90cdf4)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    BENDRA
                  </Typography>
                </Box>
              </Link>

              <Typography
                sx={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: '.72rem',
                  color: 'rgba(255,255,255,.35)',
                  fontWeight: 600,
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  mb: 2.5,
                }}
              >
                Build Smarter Systems
              </Typography>

              <Typography
                sx={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: { xs: '.84rem', md: '.88rem' },
                  color: 'rgba(255,255,255,.45)',
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
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '.78rem',
                  color: 'rgba(255,255,255,.4)',
                  fontWeight: 500,
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
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="ft-social"
                    sx={{
                      width: 38,
                      height: 38,
                      borderRadius: '10px',
                      border: '1px solid rgba(255,255,255,.1)',
                      color: 'rgba(255,255,255,.55)',
                      background: 'rgba(255,255,255,.03)',
                    }}
                  >
                    {s.icon}
                  </IconButton>
                ))}
              </Box>
            </Box>

            {/* ── Link Columns ── */}
            {footerLinks.map((col, ci) => (
              <Box
                key={col.title}
                className="ft-section"
                sx={{
                  animationDelay: `${0.14 + ci * 0.06}s`,
                  textAlign: { xs: 'center', sm: 'left' },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: '.74rem',
                    fontWeight: 700,
                    color: 'rgba(255,255,255,.3)',
                    letterSpacing: '.14em',
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
                      background: 'linear-gradient(90deg, #0e5af0, transparent)',
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
                  {col.links.map((link) => {
                    const isDisabled = 'disabled' in link && link.disabled;

                    if (isDisabled) {
                      return (
                        <Box component="li" key={link.label}>
                          <Typography
                            component="span"
                            className="ft-link ft-link-disabled"
                            sx={{
                              fontFamily: "'Outfit', sans-serif",
                              fontSize: '.88rem',
                              color: 'rgba(255,255,255,.35)',
                              fontWeight: 400,
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 0.5,
                              cursor: 'default',
                            }}
                          >
                            {link.label}
                            <Typography
                              component="span"
                              sx={{
                                fontFamily: "'Outfit', sans-serif",
                                fontSize: '.55rem',
                                color: 'rgba(255,255,255,.2)',
                                fontWeight: 500,
                                px: 0.6,
                                py: 0.15,
                                borderRadius: '4px',
                                border: '1px solid rgba(255,255,255,.08)',
                                background: 'rgba(255,255,255,.03)',
                                letterSpacing: '.05em',
                                textTransform: 'uppercase',
                                lineHeight: 1,
                                ml: 0.3,
                              }}
                            >
                              Soon
                            </Typography>
                          </Typography>
                        </Box>
                      );
                    }

                    return (
                      <Box component="li" key={link.label}>
                        <Link
                          href={link.href}
                          className="ft-link"
                          style={{
                            textDecoration: 'none',
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: '.88rem',
                            color: 'rgba(255,255,255,.55)',
                            fontWeight: 400,
                            display: 'inline-block',
                          }}
                        >
                          {link.label}
                        </Link>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            ))}

            {/* ── Contact Column ── */}
            <Box
              className="ft-section"
              sx={{
                animationDelay: '.32s',
                gridColumn: { xs: '1 / -1', sm: '1 / -1', md: 'auto' },
                textAlign: { xs: 'center', sm: 'left' },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: '.74rem',
                  fontWeight: 700,
                  color: 'rgba(255,255,255,.3)',
                  letterSpacing: '.14em',
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
                    background: 'linear-gradient(90deg, #0e5af0, transparent)',
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
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="ft-contact"
                    sx={{
                      display: 'flex',
                      alignItems: { xs: 'center', sm: 'flex-start' },
                      flexDirection: { xs: 'column', sm: 'row' },
                      gap: { xs: 1, sm: 1.5 },
                      color: 'rgba(255,255,255,.5)',
                      textDecoration: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <Box
                      className="ft-contact-icon"
                      sx={{
                        width: 34,
                        height: 34,
                        borderRadius: '10px',
                        background: 'rgba(14,90,240,.08)',
                        border: '1px solid rgba(14,90,240,.18)',
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
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: { xs: '.82rem', md: '.85rem' },
                        fontWeight: 400,
                        color: 'inherit',
                        lineHeight: 1.5,
                        maxWidth: { xs: 260, sm: 240 },
                      }}
                    >
                      {info.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Newsletter — below grid */}
          <Box
            className="ft-section"
            sx={{
              animationDelay: '.38s',
              position: 'relative',
              zIndex: 1,
              py: { xs: 4, md: 4.5 },
              borderTop: '1px solid rgba(255,255,255,.06)',
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'center', sm: 'flex-start' },
              justifyContent: 'space-between',
              gap: { xs: 2.5, sm: 3 },
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: '.95rem', md: '1.05rem' },
                  color: '#fff',
                  mb: 0.5,
                }}
              >
                Stay up to date
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: { xs: '.82rem', md: '.86rem' },
                  color: 'rgba(255,255,255,.45)',
                  fontWeight: 400,
                }}
              >
                Your Email Address
              </Typography>
            </Box>

            <Box
              component="a"
              href="mailto:marketing@acasa.ae"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.2,
                px: { xs: 2.5, md: 3 },
                py: { xs: 1.1, md: 1.2 },
                borderRadius: '12px',
                border: '1.5px solid rgba(14,90,240,.2)',
                background: 'rgba(14,90,240,.06)',
                color: '#60a5fa',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all .3s cubic-bezier(.34,1.4,.64,1)',
                width: { xs: '100%', sm: 'auto' },
                justifyContent: 'center',
                '&:hover': {
                  background: 'rgba(14,90,240,.12)',
                  borderColor: 'rgba(14,90,240,.4)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 24px rgba(14,90,240,.15)',
                },
                '&:active': {
                  transform: 'scale(.97)',
                },
              }}
            >
              <EmailOutlined sx={{ fontSize: 18 }} />
              <Typography
                sx={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 600,
                  fontSize: { xs: '.82rem', md: '.88rem' },
                  color: 'inherit',
                }}
              >
                marketing@acasa.ae
              </Typography>
            </Box>
          </Box>

          {/* Divider */}
          <Box
            sx={{
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,.08), transparent)',
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
                fontFamily: "'Outfit', sans-serif",
                fontSize: { xs: '.72rem', md: '.78rem' },
                color: 'rgba(255,255,255,.25)',
                fontWeight: 400,
                textAlign: { xs: 'center', sm: 'left' },
              }}
            >
              © 2025 Bendra Technologies. All Rights Reserved.
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Link
                href="/privacy-policy"
                className="ft-link"
                style={{
                  textDecoration: 'none',
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '.75rem',
                  color: 'rgba(255,255,255,.3)',
                  fontWeight: 400,
                }}
              >
                Privacy
              </Link>
              <Link
                href="/refund-policy"
                className="ft-link"
                style={{
                  textDecoration: 'none',
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '.75rem',
                  color: 'rgba(255,255,255,.3)',
                  fontWeight: 400,
                }}
              >
                Refund
              </Link>
              <Link
                href="/terms-and-conditions"
                className="ft-link"
                style={{
                  textDecoration: 'none',
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '.75rem',
                  color: 'rgba(255,255,255,.3)',
                  fontWeight: 400,
                }}
              >
                Terms
              </Link>

              {/* Back to top */}
              <IconButton
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Back to top"
                className="ft-social"
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,.1)',
                  color: 'rgba(255,255,255,.4)',
                  background: 'rgba(255,255,255,.03)',
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