'use client';

import React, { memo } from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { alpha } from '@mui/material/styles';
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

/* ────────────────────────────────────────────────────────── */
/* Styles */
/* ────────────────────────────────────────────────────────── */
const FooterStyles = memo(function FooterStyles() {
  return (
    <style>{`
      @keyframes footerFadeUp {
        from {
          opacity: 0;
          transform: translateY(18px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes footerTwinkle {
        0%, 100% { opacity: 0.22; }
        50% { opacity: 0.72; }
      }

      .footer-fade {
        animation: footerFadeUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) both;
      }

      @media (prefers-reduced-motion: reduce) {
        .footer-fade {
          animation: none !important;
        }
      }
    `}</style>
  );
});

/* ────────────────────────────────────────────────────────── */
/* Types */
/* ────────────────────────────────────────────────────────── */
type FooterLink = {
  label: string;
  href: string;
  disabled?: boolean;
};

type FooterGroup = {
  title: string;
  links: FooterLink[];
};

type ContactItem = {
  icon: React.ReactNode;
  text: string;
  href: string;
};

type SocialItem = {
  label: string;
  icon: React.ReactNode;
  href: string;
};

/* ────────────────────────────────────────────────────────── */
/* Data */
/* ────────────────────────────────────────────────────────── */
const footerLinks: FooterGroup[] = [
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

const contactInfo: ContactItem[] = [
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

const socialLinks: SocialItem[] = [
  {
    label: 'Facebook',
    icon: <Facebook sx={{ fontSize: 18 }} />,
    href: 'https://facebook.com',
  },
  {
    label: 'Instagram',
    icon: <Instagram sx={{ fontSize: 18 }} />,
    href: 'https://instagram.com',
  },
  {
    label: 'LinkedIn',
    icon: <LinkedIn sx={{ fontSize: 18 }} />,
    href: 'https://linkedin.com',
  },
  {
    label: 'WhatsApp',
    icon: <WhatsApp sx={{ fontSize: 18 }} />,
    href: 'https://wa.me/971501234567',
  },
];

const stars = [
  { left: '8%', top: '12%', size: 2, delay: '0s', duration: '3.6s' },
  { left: '18%', top: '28%', size: 1.5, delay: '1s', duration: '4.2s' },
  { left: '28%', top: '10%', size: 1.8, delay: '0.8s', duration: '3.8s' },
  { left: '36%', top: '22%', size: 2, delay: '1.4s', duration: '4s' },
  { left: '44%', top: '8%', size: 1.4, delay: '0.2s', duration: '3.2s' },
  { left: '54%', top: '30%', size: 2, delay: '1.2s', duration: '4.4s' },
  { left: '63%', top: '14%', size: 1.7, delay: '0.4s', duration: '3.5s' },
  { left: '74%', top: '24%', size: 1.5, delay: '1.6s', duration: '4.1s' },
  { left: '86%', top: '18%', size: 2, delay: '0.9s', duration: '3.9s' },
  { left: '92%', top: '32%', size: 1.2, delay: '1.8s', duration: '3.4s' },
  { left: '12%', top: '62%', size: 1.8, delay: '0.6s', duration: '4s' },
  { left: '26%', top: '72%', size: 1.4, delay: '1.1s', duration: '3.6s' },
  { left: '40%', top: '68%', size: 2, delay: '1.9s', duration: '4.5s' },
  { left: '57%', top: '78%', size: 1.6, delay: '0.3s', duration: '3.7s' },
  { left: '72%', top: '70%', size: 1.9, delay: '1.5s', duration: '4.3s' },
  { left: '88%', top: '76%', size: 1.5, delay: '0.7s', duration: '3.9s' },
];

/* ────────────────────────────────────────────────────────── */
/* Small Components */
/* ────────────────────────────────────────────────────────── */
const DisabledLink = memo(function DisabledLink({ label }: { label: string }) {
  return (
    <Box
      component="span"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.65,
        fontFamily: '"Inter", sans-serif',
        fontSize: '0.88rem',
        color: 'rgba(255,255,255,0.28)',
        fontWeight: 400,
        userSelect: 'none',
      }}
    >
      {label}
      <Box
        component="span"
        sx={{
          fontSize: '0.56rem',
          fontWeight: 700,
          color: 'rgba(255,255,255,0.22)',
          px: 0.6,
          py: 0.14,
          borderRadius: '5px',
          border: '1px solid rgba(255,255,255,0.08)',
          background: 'rgba(255,255,255,0.03)',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          lineHeight: 1.4,
        }}
      >
        Soon
      </Box>
    </Box>
  );
});

const FooterColumn = memo(function FooterColumn({
  title,
  links,
  delay,
}: {
  title: string;
  links: FooterLink[];
  delay: string;
}) {
  return (
    <Box
      className="footer-fade"
      sx={{
        animationDelay: delay,
        textAlign: { xs: 'center', sm: 'left' },
      }}
    >
      <Typography
        sx={{
          fontFamily: '"Inter", sans-serif',
          fontSize: '0.74rem',
          fontWeight: 700,
          color: 'rgba(255,255,255,0.32)',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          mb: 2.4,
          position: 'relative',
          display: 'inline-block',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -7,
            left: { xs: '50%', sm: 0 },
            transform: { xs: 'translateX(-50%)', sm: 'none' },
            width: 20,
            height: 2,
            borderRadius: 99,
            background: 'linear-gradient(90deg, #3b82f6, transparent)',
            opacity: 0.55,
          },
        }}
      >
        {title}
      </Typography>

      <Box
        component="ul"
        sx={{
          listStyle: 'none',
          p: 0,
          m: 0,
          mt: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 1.45,
        }}
      >
        {links.map((link) =>
          link.disabled ? (
            <Box component="li" key={link.label}>
              <DisabledLink label={link.label} />
            </Box>
          ) : (
            <Box component="li" key={link.label}>
              <Link
                href={link.href}
                style={{ textDecoration: 'none', display: 'inline-block' }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.88rem',
                    color: 'rgba(255,255,255,0.55)',
                    fontWeight: 400,
                    transition: 'color .24s ease, transform .24s ease',
                    '&:hover': {
                      color: '#ffffff',
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  {link.label}
                </Typography>
              </Link>
            </Box>
          )
        )}
      </Box>
    </Box>
  );
});

const ContactRow = memo(function ContactRow({ item }: { item: ContactItem }) {
  const external = item.href.startsWith('http');

  return (
    <Box
      component="a"
      href={item.href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      sx={{
        display: 'flex',
        alignItems: { xs: 'center', sm: 'flex-start' },
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 1, sm: 1.4 },
        color: 'rgba(255,255,255,0.5)',
        textDecoration: 'none',
        transition: 'color .24s ease',
        '&:hover': {
          color: '#93c5fd',
        },
        '&:hover .contact-icon-box': {
          background: 'rgba(59,130,246,0.16)',
          borderColor: 'rgba(59,130,246,0.28)',
          transform: 'scale(1.04)',
        },
      }}
    >
      <Box
        className="contact-icon-box"
        sx={{
          width: 36,
          height: 36,
          borderRadius: '11px',
          background: 'rgba(59,130,246,0.08)',
          border: '1px solid rgba(59,130,246,0.16)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'all .24s ease',
        }}
      >
        {item.icon}
      </Box>

      <Typography
        sx={{
          fontFamily: '"Inter", sans-serif',
          fontSize: { xs: '0.83rem', md: '0.86rem' },
          lineHeight: 1.55,
          color: 'inherit',
          maxWidth: { xs: 280, sm: 240 },
        }}
      >
        {item.text}
      </Typography>
    </Box>
  );
});

/* ────────────────────────────────────────────────────────── */
/* Main Component */
/* ────────────────────────────────────────────────────────── */
const Footer: React.FC = () => {
  return (
    <>
      <FooterStyles />

      <Box
        component="footer"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          color: '#fff',
          background: 'linear-gradient(135deg, #081020 0%, #0b1630 40%, #0a1226 100%)',
        }}
      >
        {/* Background grid */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            opacity: 0.28,
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '44px 44px',
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
            height: 320,
            background: 'radial-gradient(ellipse at top, rgba(59,130,246,0.12), transparent 65%)',
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
            background: 'radial-gradient(circle, rgba(37,99,235,0.08), transparent 70%)',
            filter: 'blur(44px)',
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '-10%',
            left: '-8%',
            width: 280,
            height: 280,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(14,165,233,0.06), transparent 70%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }}
        />

        {/* Stars */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
          }}
        >
          {stars.map((star, index) => (
            <Box
              key={index}
              sx={{
                position: 'absolute',
                left: star.left,
                top: star.top,
                width: `${star.size}px`,
                height: `${star.size}px`,
                borderRadius: '50%',
                background: '#fff',
                opacity: 0.35,
                animation: `footerTwinkle ${star.duration} ease-in-out ${star.delay} infinite`,
                boxShadow: `0 0 ${star.size * 5}px rgba(255,255,255,0.45)`,
              }}
            />
          ))}
        </Box>

        {/* Top accent line */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            height: 2,
            background:
              'linear-gradient(90deg, transparent, rgba(59,130,246,0.85) 35%, rgba(96,165,250,0.95) 50%, rgba(59,130,246,0.85) 65%, transparent)',
          }}
        />

        {/* CTA Band */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))',
            backdropFilter: 'blur(8px)',
          }}
        >
          <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
            <Box
              className="footer-fade"
              sx={{
                py: { xs: 3.2, md: 3.6 },
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: { xs: 2.4, md: 3 },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'center',
                  gap: { xs: 1.4, sm: 2.2 },
                }}
              >
                <Box
                  sx={{
                    width: { xs: 48, md: 56 },
                    height: { xs: 48, md: 56 },
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 24px rgba(59,130,246,0.32)',
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
                      fontFamily: '"Inter", sans-serif',
                      fontSize: { xs: '1rem', sm: '1.12rem', md: '1.24rem' },
                      fontWeight: 700,
                      color: '#fff',
                      lineHeight: 1.2,
                      mb: 0.45,
                    }}
                  >
                    Ready to build something impactful?
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: { xs: '0.84rem', md: '0.9rem' },
                      color: 'rgba(255,255,255,0.52)',
                      fontWeight: 400,
                    }}
                  >
                    Let’s turn your ideas into scalable digital systems.
                  </Typography>
                </Box>
              </Box>

              <Link href="/contact" style={{ textDecoration: 'none', width: 'fit-content' }}>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1.1,
                    px: { xs: 2.7, md: 3.1 },
                    py: { xs: 1.15, md: 1.25 },
                    borderRadius: '14px',
                    color: '#fff',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                    boxShadow: '0 10px 24px rgba(37,99,235,0.24)',
                    transition: 'transform .26s ease, box-shadow .26s ease, background .26s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 14px 28px rgba(37,99,235,0.3)',
                      background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                    },
                    width: { xs: '100%', md: 'auto' },
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"Inter", sans-serif',
                      fontWeight: 700,
                      fontSize: { xs: '0.88rem', md: '0.92rem' },
                      color: 'inherit',
                    }}
                  >
                    Get Quote
                  </Typography>

                  <Box
                    sx={{
                      width: 28,
                      height: 28,
                      borderRadius: '9px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(255,255,255,0.16)',
                    }}
                  >
                    <ArrowForwardRounded sx={{ fontSize: 18, color: '#fff' }} />
                  </Box>
                </Box>
              </Link>
            </Box>
          </Container>
        </Box>

        {/* Main Footer */}
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              py: { xs: 5, md: 6 },
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, minmax(0, 1fr))',
                md: '1.35fr 1fr 1fr 1.2fr',
                lg: '1.35fr 1fr 1fr 0.95fr 1.2fr',
              },
              gap: { xs: 4, sm: 3.5, md: 4, lg: 4.5 },
            }}
          >
            {/* Brand */}
            <Box
              className="footer-fade"
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
                    loading="lazy"
                    decoding="async"
                    sx={{
                      height: { xs: 32, md: 38 },
                      width: 'auto',
                      filter: 'drop-shadow(0 0 18px rgba(59,130,246,0.38))',
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: '"Inter", sans-serif',
                      fontWeight: 800,
                      fontSize: { xs: '1.2rem', md: '1.34rem' },
                      letterSpacing: '0.08em',
                      background: 'linear-gradient(135deg, #ffffff 30%, #93c5fd 100%)',
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
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '0.72rem',
                  color: 'rgba(255,255,255,0.34)',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  mb: 2.4,
                }}
              >
                Build Smarter Systems
              </Typography>

              <Typography
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: { xs: '0.84rem', md: '0.88rem' },
                  color: 'rgba(255,255,255,0.48)',
                  lineHeight: 1.72,
                  maxWidth: { xs: 340, md: 290 },
                  mx: { xs: 'auto', md: 0 },
                  mb: 3,
                }}
              >
                Your trusted technology partner for CRM, business automation,
                websites, and growth-focused digital systems.
              </Typography>

              <Typography
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '0.79rem',
                  color: 'rgba(255,255,255,0.42)',
                  fontWeight: 500,
                  mb: 1.15,
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
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.label}
                    component="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    sx={{
                      width: 38,
                      height: 38,
                      borderRadius: '11px',
                      color: 'rgba(255,255,255,0.56)',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      transition: 'all .26s ease',
                      '&:hover': {
                        color: '#fff',
                        background: '#3b82f6',
                        borderColor: '#3b82f6',
                        transform: 'translateY(-3px)',
                        boxShadow: '0 10px 20px rgba(59,130,246,0.32)',
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Box>

            {/* Links */}
            {footerLinks.map((group, index) => (
              <FooterColumn
                key={group.title}
                title={group.title}
                links={group.links}
                delay={`${0.14 + index * 0.06}s`}
              />
            ))}

            {/* Contact */}
            <Box
              className="footer-fade"
              sx={{
                animationDelay: '.32s',
                gridColumn: { xs: '1 / -1', sm: '1 / -1', md: 'auto' },
                textAlign: { xs: 'center', sm: 'left' },
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.32)',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  mb: 2.4,
                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -7,
                    left: { xs: '50%', sm: 0 },
                    transform: { xs: 'translateX(-50%)', sm: 'none' },
                    width: 20,
                    height: 2,
                    borderRadius: 99,
                    background: 'linear-gradient(90deg, #3b82f6, transparent)',
                    opacity: 0.55,
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
                {contactInfo.map((item, index) => (
                  <ContactRow key={index} item={item} />
                ))}
              </Box>
            </Box>
          </Box>

          {/* Newsletter / Contact strip */}
          <Box
            className="footer-fade"
            sx={{
              animationDelay: '.38s',
              position: 'relative',
              zIndex: 1,
              py: { xs: 4, md: 4.4 },
              borderTop: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'center', sm: 'center' },
              justifyContent: 'space-between',
              gap: { xs: 2.4, sm: 3 },
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 700,
                  fontSize: { xs: '0.96rem', md: '1.04rem' },
                  color: '#fff',
                  mb: 0.45,
                }}
              >
                Stay up to date
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: { xs: '0.82rem', md: '0.86rem' },
                  color: 'rgba(255,255,255,0.45)',
                }}
              >
                Reach us directly at our email address.
              </Typography>
            </Box>

            <Box
              component="a"
              href="mailto:marketing@acasa.ae"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1.1,
                px: { xs: 2.5, md: 3 },
                py: { xs: 1.08, md: 1.18 },
                borderRadius: '12px',
                border: '1px solid rgba(59,130,246,0.18)',
                background: 'rgba(59,130,246,0.06)',
                color: '#93c5fd',
                textDecoration: 'none',
                transition: 'all .26s ease',
                width: { xs: '100%', sm: 'auto' },
                '&:hover': {
                  background: 'rgba(59,130,246,0.1)',
                  borderColor: 'rgba(59,130,246,0.32)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 10px 24px rgba(59,130,246,0.14)',
                },
              }}
            >
              <EmailOutlined sx={{ fontSize: 18 }} />
              <Typography
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 600,
                  fontSize: { xs: '0.82rem', md: '0.87rem' },
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
              position: 'relative',
              zIndex: 1,
              height: 1,
              background:
                'linear-gradient(90deg, transparent, rgba(59,130,246,0.18), transparent)',
            }}
          />

          {/* Bottom bar */}
          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              py: { xs: 2.6, md: 2.8 },
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: { xs: 'center', sm: 'space-between' },
              gap: { xs: 1.5, sm: 2 },
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Inter", sans-serif',
                fontSize: { xs: '0.73rem', md: '0.78rem' },
                color: 'rgba(255,255,255,0.28)',
                textAlign: { xs: 'center', sm: 'left' },
              }}
            >
              © 2025 Bendra Technologies. All Rights Reserved.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 1.4, sm: 2 },
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              {[
                { label: 'Privacy', href: '/privacy-policy' },
                { label: 'Refund', href: '/refund-policy' },
                { label: 'Terms', href: '/terms-and-conditions' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{ textDecoration: 'none' }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: '0.76rem',
                      color: 'rgba(255,255,255,0.34)',
                      transition: 'color .24s ease',
                      '&:hover': {
                        color: '#fff',
                      },
                    }}
                  >
                    {item.label}
                  </Typography>
                </Link>
              ))}

              <IconButton
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Back to top"
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '9px',
                  color: 'rgba(255,255,255,0.42)',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'all .24s ease',
                  '&:hover': {
                    color: '#fff',
                    background: '#3b82f6',
                    borderColor: '#3b82f6',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <NorthEast sx={{ fontSize: 14, transform: 'rotate(-45deg)' }} />
              </IconButton>
            </Box>
          </Box>
        </Container>

        {/* Safe area */}
        <Box
          sx={{
            height: 'env(safe-area-inset-bottom, 0px)',
            background: 'linear-gradient(135deg, #081020 0%, #0b1630 40%, #0a1226 100%)',
          }}
        />
      </Box>
    </>
  );
};

export default Footer;