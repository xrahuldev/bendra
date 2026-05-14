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
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

    @keyframes fadeUpFooter {
      from { opacity: 0; transform: translateY(18px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @keyframes shimmerLine {
      0%   { background-position: -200% center; }
      100% { background-position:  200% center; }
    }

    @keyframes pulseGlow {
      0%, 100% { box-shadow: 0 0 20px rgba(59,130,246,.3); }
      50%      { box-shadow: 0 0 36px rgba(59,130,246,.55); }
    }

    @keyframes starTwinkle {
      0%, 100% { opacity: 0.3; }
      50%       { opacity: 0.8; }
    }

    @keyframes nodePulse {
      0%, 100% { opacity: 0.4; transform: scale(1); }
      50%       { opacity: 0.8; transform: scale(1.5); }
    }

    @keyframes dataFlow {
      0%   { transform: translateX(0); opacity: 0; }
      50%  { opacity: 1; }
      100% { transform: translateX(50px); opacity: 0; }
    }

    .ft-section {
      animation: fadeUpFooter .6s cubic-bezier(.16,1,.3,1) both;
    }

    .ft-accent-line {
      background-image: linear-gradient(
        90deg, transparent, #3b82f6 30%, #60a5fa 50%, #3b82f6 70%, transparent
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
      background: #3b82f6;
      transition: width .3s ease;
    }

    /* ── Disabled Link — right after ft-link ── */
    .ft-link-disabled {
      opacity: 0.4;
      cursor: default !important;
      pointer-events: none !important;
    }

    @media (hover: hover) {
      .ft-link:hover { color: #fff !important; transform: translateX(4px); }
      .ft-link:hover::after { width: 100%; }
    }
    @media (hover: none) {
      .ft-link:active { color: #60a5fa !important; }
    }

    /* ── Social ── */
    .ft-social {
      transition: all .3s cubic-bezier(.34,1.4,.64,1) !important;
      -webkit-tap-highlight-color: transparent;
    }
    @media (hover: hover) {
      .ft-social:hover {
        background: #3b82f6 !important;
        border-color: #3b82f6 !important;
        color: #fff !important;
        transform: translateY(-4px) !important;
        box-shadow: 0 8px 20px rgba(59,130,246,.4) !important;
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
        background: rgba(59,130,246,.18) !important;
        border-color: rgba(59,130,246,.4) !important;
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
        box-shadow: 0 10px 32px rgba(59,130,246,.5) !important;
      }
      .ft-cta-btn:hover .ft-cta-arrow { transform: translateX(4px); }
    }
    @media (hover: none) {
      .ft-cta-btn:active { transform: scale(.97) !important; }
    }

    @media (prefers-reduced-motion: reduce) {
      .ft-section, .ft-accent-line, .ft-cta-glow,
      .ft-link, .ft-link-disabled, .ft-social,
      .ft-contact, .ft-contact-icon,
      .ft-cta-btn, .ft-cta-arrow {
        animation: none !important;
        transition: none !important;
      }
    }
  `}</style>
);

/* ─── Types ─────────────────────────────────────────────── */
interface FooterLink {
  label: string;
  href: string;
  disabled?: boolean;
}

interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

/* ─── Data ───────────────────────────────────────────────── */
const footerLinks: FooterLinkGroup[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us',      href: '/about' },
      { label: 'Portfolio',     href: '/portfolio' },
      { label: 'Our Expertise', href: '/expertise' },
      { label: 'Blogs',         href: '/blogs' },
      { label: 'Contact Us',    href: '/contact' },
    ],
  },
  {
    title: 'Top Services',
    links: [
      { label: 'Website Development',   href: '#', disabled: true },
      { label: 'Social Media Marketing', href: '#', disabled: true },
      { label: 'UI/UX Design',           href: '#', disabled: true },
      { label: 'SEO',                    href: '#', disabled: true },
      { label: 'Zoho Development',       href: '#', disabled: true },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy',    href: '/privacy-policy' },
      { label: 'Refund Policy',     href: '/refund-policy' },
      { label: 'Terms & Conditions', href: '/terms-and-conditions' },
    ],
  },
];

const contactInfo = [
  {
    icon: <LocationOnOutlined sx={{ fontSize: 16, color: '#3b82f6' }} />,
    text: 'RNA RESOURCES BUILDING, Al Qouz Third 104-0 – Dubai',
    href: 'https://maps.google.com/?q=RNA+RESOURCES+BUILDING+Al+Qouz+Third+Dubai',
  },
  {
    icon: <PhoneOutlined sx={{ fontSize: 16, color: '#3b82f6' }} />,
    text: '+971 50 123 4567',
    href: 'tel:+971501234567',
  },
  {
    icon: <EmailOutlined sx={{ fontSize: 16, color: '#3b82f6' }} />,
    text: 'marketing@acasa.ae',
    href: 'mailto:marketing@acasa.ae',
  },
];

const socialLinks = [
  { label: 'Facebook',  icon: <Facebook  sx={{ fontSize: 18 }} />, href: 'https://facebook.com' },
  { label: 'Instagram', icon: <Instagram sx={{ fontSize: 18 }} />, href: 'https://instagram.com' },
  { label: 'LinkedIn',  icon: <LinkedIn  sx={{ fontSize: 18 }} />, href: 'https://linkedin.com' },
  { label: 'WhatsApp',  icon: <WhatsApp  sx={{ fontSize: 18 }} />, href: 'https://wa.me/971501234567' },
];

/* ─── Disabled Link Sub-component (avoids hydration diff) ── */
const DisabledLink = ({ label }: { label: string }) => (
  <Box
    component="span"
    sx={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 0.6,
      fontFamily: "'DM Sans', sans-serif",
      fontSize: '.88rem',
      color: 'rgba(255,255,255,.28)',
      fontWeight: 400,
      cursor: 'default',
      userSelect: 'none',
    }}
  >
    {label}
    <Box
      component="span"
      sx={{
        fontSize: '.55rem',
        color: 'rgba(255,255,255,.2)',
        fontWeight: 600,
        px: 0.6,
        py: 0.15,
        borderRadius: '4px',
        border: '1px solid rgba(255,255,255,.08)',
        background: 'rgba(255,255,255,.03)',
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        lineHeight: 1.4,
      }}
    >
      Soon
    </Box>
  </Box>
);

/* ─── Component ──────────────────────────────────────────── */
const Footer: React.FC = () => {
  // Generate stars for background
  const stars = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 3,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <>
      <FooterStyles />

      <Box
        component="footer"
        sx={{
          background: 'linear-gradient(135deg, #0a0e27 0%, #0d1b3e 30%, #0a1628 60%, #0c1a34 100%)',
          position: 'relative',
          overflow: 'hidden',
          color: '#fff',
        }}
      >
        {/* Space Background with Stars */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            overflow: 'hidden',
          }}
        >
          {/* Twinkling Stars */}
          {stars.map((star) => (
            <Box
              key={star.id}
              sx={{
                position: 'absolute',
                left: star.left,
                top: star.top,
                width: `${star.size}px`,
                height: `${star.size}px`,
                background: 'white',
                borderRadius: '50%',
                animation: `starTwinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
                boxShadow: `0 0 ${star.size * 2}px rgba(255,255,255,0.8)`,
              }}
            />
          ))}

          {/* Nebula effects */}
          <Box
            sx={{
              position: 'absolute',
              bottom: '0%',
              left: '0%',
              width: '50%',
              height: '70%',
              background: 'radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '0%',
              right: '10%',
              width: '40%',
              height: '60%',
              background: 'radial-gradient(ellipse, rgba(99,179,237,0.04) 0%, transparent 70%)',
              filter: 'blur(50px)',
            }}
          />
        </Box>

        {/* Grid texture */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(59,130,246,.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,.04) 1px, transparent 1px)
            `,
            backgroundSize: { xs: '28px 28px', md: '44px 44px' },
            pointerEvents: 'none',
            zIndex: 0,
            maskImage:
              'radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)',
          }}
        />

        {/* Network nodes (decorative) */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
          }}
        >
          {[
            { x: '10%', y: '20%' },
            { x: '90%', y: '30%' },
            { x: '50%', y: '80%' },
            { x: '30%', y: '60%' },
            { x: '70%', y: '40%' },
          ].map((node, i) => (
            <Box
              key={i}
              sx={{
                position: 'absolute',
                left: node.x,
                top: node.y,
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'rgba(59,130,246,0.4)',
                animation: `nodePulse ${3 + i * 0.5}s ease-in-out infinite`,
                boxShadow: '0 0 10px rgba(59,130,246,0.3)',
              }}
            />
          ))}
        </Box>

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
            background:
              'linear-gradient(100deg, rgba(10,14,39,0.9), rgba(13,27,62,0.8) 40%, rgba(10,22,40,0.9))',
            borderBottom: '1px solid rgba(59,130,246,.1)',
            overflow: 'hidden',
            backdropFilter: 'blur(10px)',
          }}
        >
          {/* CTA glow blob */}
          <Box
            sx={{
              position: 'absolute',
              top: { xs: '-40%', md: '-60%' },
              right: { xs: '5%', md: '15%' },
              width: { xs: 160, sm: 220, md: 280 },
              height: { xs: 160, sm: 220, md: 280 },
              background:
                'radial-gradient(circle, rgba(59,130,246,.18), transparent 65%)',
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
                alignItems: 'center',
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
                    background: 'linear-gradient(135deg, #1a4fd8, #3b82f6)',
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
                      fontFamily: "'DM Sans', sans-serif",
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
                    background: 'linear-gradient(135deg, #1a4fd8, #3b82f6)',
                    color: '#fff',
                    cursor: 'pointer',
                    boxShadow: '0 4px 20px rgba(59,130,246,.35)',
                    whiteSpace: 'nowrap',
                    width: { xs: '100%', sm: 'auto' },
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 700,
                      fontSize: { xs: '.84rem', md: '.9rem' },
                      color: 'inherit',
                    }}
                  >
                    Get Quote
                  </Typography>
                  <ArrowForwardRounded
                    className="ft-cta-arrow"
                    sx={{ fontSize: 18 }}
                  />
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
                    sx={{ 
                      height: { xs: 32, md: 38 }, 
                      width: 'auto',
                      filter: 'drop-shadow(0 0 20px rgba(59,130,246,0.5))',
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 800,
                      fontSize: { xs: '1.2rem', md: '1.35rem' },
                      letterSpacing: '.1em',
                      background:
                        'linear-gradient(135deg, #fff 40%, #90cdf4)',
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
                  fontFamily: "'Sora', sans-serif",
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
                  fontFamily: "'DM Sans', sans-serif",
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
                  fontFamily: "'DM Sans', sans-serif",
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
                {/* Column heading */}
                <Typography
                  sx={{
                    fontFamily: "'Sora', sans-serif",
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
                      background:
                        'linear-gradient(90deg, #3b82f6, transparent)',
                      opacity: 0.5,
                    },
                  }}
                >
                  {col.title}
                </Typography>

                {/* Links list */}
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
                  {col.links.map((link) =>
                    link.disabled ? (
                      /* Disabled — plain span, no <a>, no <Link> */
                      <Box component="li" key={link.label}>
                        <DisabledLink label={link.label} />
                      </Box>
                    ) : (
                      /* Active — Next.js Link */
                      <Box component="li" key={link.label}>
                        <Link
                          href={link.href}
                          className="ft-link"
                          style={{
                            textDecoration: 'none',
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: '.88rem',
                            color: 'rgba(255,255,255,.55)',
                            fontWeight: 400,
                            display: 'inline-block',
                          }}
                        >
                          {link.label}
                        </Link>
                      </Box>
                    )
                  )}
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
                  fontFamily: "'Sora', sans-serif",
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
                    background: 'linear-gradient(90deg, #3b82f6, transparent)',
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
                    target={
                      info.href.startsWith('http') ? '_blank' : undefined
                    }
                    rel={
                      info.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
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
                        background: 'rgba(59,130,246,.08)',
                        border: '1px solid rgba(59,130,246,.18)',
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

          {/* ── Newsletter strip ── */}
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
                  fontFamily: "'Sora', sans-serif",
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
                  fontFamily: "'DM Sans', sans-serif",
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
                border: '1.5px solid rgba(59,130,246,.2)',
                background: 'rgba(59,130,246,.06)',
                color: '#60a5fa',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all .3s cubic-bezier(.34,1.4,.64,1)',
                width: { xs: '100%', sm: 'auto' },
                justifyContent: 'center',
                '&:hover': {
                  background: 'rgba(59,130,246,.12)',
                  borderColor: 'rgba(59,130,246,.4)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 24px rgba(59,130,246,.15)',
                },
                '&:active': { transform: 'scale(.97)' },
              }}
            >
              <EmailOutlined sx={{ fontSize: 18 }} />
              <Typography
                sx={{
                  fontFamily: "'DM Sans', sans-serif",
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
              background:
                'linear-gradient(90deg, transparent, rgba(59,130,246,.15), transparent)',
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
                fontSize: { xs: '.72rem', md: '.78rem' },
                color: 'rgba(255,255,255,.25)',
                fontWeight: 400,
                textAlign: { xs: 'center', sm: 'left' },
              }}
            >
              © 2025 Bendra Technologies. All Rights Reserved.
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {[
                { label: 'Privacy', href: '/privacy-policy' },
                { label: 'Refund',  href: '/refund-policy' },
                { label: 'Terms',   href: '/terms-and-conditions' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="ft-link"
                  style={{
                    textDecoration: 'none',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '.75rem',
                    color: 'rgba(255,255,255,.3)',
                    fontWeight: 400,
                  }}
                >
                  {item.label}
                </Link>
              ))}

              {/* Back to top */}
              <IconButton
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
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
                <NorthEast
                  sx={{ fontSize: 14, transform: 'rotate(-45deg)' }}
                />
              </IconButton>
            </Box>
          </Box>
        </Container>

        {/* Safe area bottom */}
        <Box
          sx={{
            height: 'env(safe-area-inset-bottom, 0px)',
            background: 'linear-gradient(135deg, #0a0e27 0%, #0d1b3e 30%, #0a1628 60%, #0c1a34 100%)',
          }}
        />
      </Box>
    </>
  );
};

export default Footer;