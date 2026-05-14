'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  KeyboardArrowDown,
  ArrowForward,
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  {
    label: 'Our Expertise',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Website Development', href: '/expertise/website-development' },
      { label: 'Social Media Marketing', href: '/expertise/social-media-marketing' },
      { label: 'Website UI/UX Design', href: '/expertise/ui-ux-design' },
      { label: 'Email Marketing', href: '/expertise/email-marketing' },
      { label: 'SEO', href: '/expertise/seo' },
    ],
  },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact', href: '/contact' },
];

/* ─── Global keyframe styles injected once ─────────────────────────── */
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap');

    * { box-sizing: border-box; }

    @keyframes navSlideDown {
      from { opacity: 0; transform: translateY(-18px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @keyframes dropdownFadeIn {
      from { opacity: 0; transform: translateY(10px) scale(0.97); }
      to   { opacity: 1; transform: translateY(0)   scale(1); }
    }

    @keyframes shimmer {
      0%   { background-position: -200% center; }
      100% { background-position:  200% center; }
    }

    @keyframes pulseGlow {
      0%, 100% { box-shadow: 0 0 18px rgba(99,179,237,0.35); }
      50%       { box-shadow: 0 0 32px rgba(99,179,237,0.65); }
    }

    @keyframes drawerSlideIn {
      from { opacity: 0; transform: translateX(24px); }
      to   { opacity: 1; transform: translateX(0); }
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(12px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* Dropdown mega-panel */
    .bendra-dropdown {
      animation: dropdownFadeIn 0.22s cubic-bezier(0.16,1,0.3,1) both;
      transform-origin: top left;
    }

    /* Nav item underline slide */
    .nav-link-btn::after {
      content: '';
      position: absolute;
      bottom: 6px;
      left: 50%;
      transform: translateX(-50%);
      height: 2px;
      border-radius: 99px;
      background: linear-gradient(90deg, #63b3ed, #4299e1);
      width: 0;
      transition: width 0.35s cubic-bezier(0.34,1.56,0.64,1);
    }
    .nav-link-btn:hover::after,
    .nav-link-btn.active::after {
      width: 22px;
    }

    /* CTA shimmer */
    .cta-shimmer {
      background-image: linear-gradient(
        110deg,
        #2b6cb0 0%, #3b82f6 35%, #7ec8fc 50%, #3b82f6 65%, #1a56a0 100%
      );
      background-size: 200% auto;
      animation: shimmer 2.6s linear infinite;
    }

    /* Mobile drawer item stagger */
    .drawer-item {
      animation: drawerSlideIn 0.3s cubic-bezier(0.16,1,0.3,1) both;
    }

    .scrolled-bar {
      background: rgba(8, 15, 32, 0.92) !important;
      backdrop-filter: blur(24px) saturate(180%) !important;
      -webkit-backdrop-filter: blur(24px) saturate(180%) !important;
      border-bottom: 1px solid rgba(99,179,237,0.12) !important;
    }

    /* Prevent body scroll when drawer is open */
    .body-no-scroll {
      overflow: hidden !important;
      position: fixed !important;
      width: 100% !important;
    }

    /* Custom scrollbar for drawer */
    .drawer-scroll::-webkit-scrollbar {
      width: 3px;
    }
    .drawer-scroll::-webkit-scrollbar-track {
      background: transparent;
    }
    .drawer-scroll::-webkit-scrollbar-thumb {
      background: rgba(99,179,237,0.2);
      border-radius: 10px;
    }

    /* Touch feedback for mobile */
    @media (hover: none) {
      .mobile-touch-item:active {
        transform: scale(0.98);
        background: rgba(99,179,237,0.12) !important;
      }
    }

    /* Safe area for notched phones */
    .safe-area-top {
      padding-top: env(safe-area-inset-top, 0px);
    }
    .safe-area-bottom {
      padding-bottom: env(safe-area-inset-bottom, 0px);
    }
  `}</style>
);

/* ─── Custom Dropdown (replaces MUI Menu) ───────────────────────────── */
const DesktopDropdown: React.FC<{
  items: DropdownItem[];
  anchorEl: HTMLElement | null;
  pathname: string;
  onClose: () => void;
}> = ({ items, anchorEl, pathname, onClose }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(e.target as Node) &&
        !anchorEl?.contains(e.target as Node)
      ) {
        onClose();
      }
    };
    if (anchorEl) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [anchorEl, onClose]);

  useEffect(() => {
    if (!anchorEl) return;

    const updatePosition = () => {
      const rect = anchorEl.getBoundingClientRect();
      const dropdownWidth = 260;
      let left = rect.left;

      // Prevent dropdown from going off-screen right
      if (left + dropdownWidth > window.innerWidth - 16) {
        left = window.innerWidth - dropdownWidth - 16;
      }
      // Prevent going off-screen left
      if (left < 16) left = 16;

      setPosition({
        top: rect.bottom + 10,
        left,
      });
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition);
    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition);
    };
  }, [anchorEl]);

  if (!anchorEl) return null;

  return (
    <div
      ref={ref}
      className="bendra-dropdown"
      style={{
        position: 'fixed',
        top: position.top,
        left: position.left,
        zIndex: 1400,
        background:
          'linear-gradient(135deg, rgba(10,22,48,0.97) 0%, rgba(14,26,56,0.97) 100%)',
        border: '1px solid rgba(99,179,237,0.15)',
        borderRadius: 16,
        minWidth: 240,
        maxWidth: 'calc(100vw - 32px)',
        boxShadow:
          '0 20px 60px rgba(0,0,0,0.5), 0 1px 0 rgba(99,179,237,0.1) inset',
        backdropFilter: 'blur(28px)',
        padding: '8px',
        overflow: 'hidden',
      }}
    >
      {/* subtle top glow line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '20%',
          right: '20%',
          height: 1,
          background:
            'linear-gradient(90deg, transparent, rgba(99,179,237,0.5), transparent)',
        }}
      />

      {items.map((option, i) => {
        const active = pathname === option.href;
        return (
          <Link
            key={option.label}
            href={option.href}
            style={{ textDecoration: 'none' }}
          >
            <div
              onClick={onClose}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.875rem',
                color: active ? '#90cdf4' : 'rgba(255,255,255,0.82)',
                fontWeight: active ? 600 : 400,
                padding: '10px 16px',
                borderRadius: 10,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                transition: 'background 0.2s, color 0.2s, transform 0.2s',
                animationDelay: `${i * 0.04}s`,
                letterSpacing: '0.01em',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  'rgba(99,179,237,0.1)';
                (e.currentTarget as HTMLElement).style.color = '#90cdf4';
                (e.currentTarget as HTMLElement).style.transform =
                  'translateX(4px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  'transparent';
                (e.currentTarget as HTMLElement).style.color = active
                  ? '#90cdf4'
                  : 'rgba(255,255,255,0.82)';
                (e.currentTarget as HTMLElement).style.transform =
                  'translateX(0)';
              }}
            >
              {/* dot indicator */}
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  background: active
                    ? '#63b3ed'
                    : 'rgba(255,255,255,0.2)',
                  flexShrink: 0,
                  transition: 'background 0.2s',
                }}
              />
              {option.label}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

/* ─── Main Navbar ───────────────────────────────────────────────────── */
const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentDropdown, setCurrentDropdown] = useState<string>('');
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [mobileExpanded, setMobileExpanded] = useState<string>('');
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isSmallMobile = useMediaQuery('(max-width:360px)');
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('body-no-scroll');
    } else {
      document.body.classList.remove('body-no-scroll');
    }
    return () => document.body.classList.remove('body-no-scroll');
  }, [mobileOpen]);

  // Close dropdown on route change
  useEffect(() => {
    handleMenuClose();
    setMobileOpen(false);
    setMobileExpanded('');
  }, [pathname]);

  const isActive = useCallback(
    (item: NavItem): boolean => {
      if (item.href && pathname === item.href) return true;
      if (item.dropdownItems)
        return item.dropdownItems.some((d) => pathname === d.href);
      return false;
    },
    [pathname]
  );

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    label: string
  ) => {
    if (currentDropdown === label) {
      setAnchorEl(null);
      setCurrentDropdown('');
    } else {
      setAnchorEl(event.currentTarget);
      setCurrentDropdown(label);
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentDropdown('');
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    if (!mobileOpen) {
      setMobileExpanded('');
    }
  };

  const handleMobileExpand = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? '' : label);
  };

  const currentItem = navItems.find(
    (item) => item.label === currentDropdown
  );

  // Drawer width based on screen size
  const drawerWidth = isSmallMobile ? '100vw' : isTablet ? 340 : 300;

  return (
    <>
      <GlobalStyles />

      <AppBar
        position="fixed"
        elevation={0}
        className={`${scrolled ? 'scrolled-bar' : ''} safe-area-top`}
        sx={{
          background: scrolled
            ? 'transparent'
            : 'linear-gradient(180deg, rgba(6,13,30,0.98) 0%, rgba(8,18,40,0.92) 100%)',
          borderBottom: scrolled
            ? 'none'
            : '1px solid rgba(255,255,255,0.04)',
          transition:
            'background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
          zIndex: 1300,
          animation: mounted
            ? 'navSlideDown 0.5s cubic-bezier(0.16,1,0.3,1) both'
            : 'none',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: { xs: 1.5, sm: 2.5, md: 4, lg: 6 },
            py: 0,
            minHeight: { xs: 60, sm: 66, md: 72, lg: 76 },
            gap: { xs: 1, md: 2 },
          }}
        >
          {/* ── Logo ─────────────────────────────────────────────── */}
          <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 0.8, sm: 1, md: 1.5 },
                cursor: 'pointer',
                transition: 'opacity 0.2s, transform 0.3s',
                '&:hover': { opacity: 0.88, transform: 'scale(1.02)' },
                '&:active': { transform: 'scale(0.98)' },
              }}
            >
              <Box
                component="img"
                src="/logo.png"
                alt="Bendra Logo"
                sx={{
                  height: { xs: 28, sm: 32, md: 36, lg: 38 },
                  width: 'auto',
                }}
              />
              <Typography
                sx={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 800,
                  color: '#fff',
                  letterSpacing: { xs: '0.08em', md: '0.12em' },
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem', lg: '1.35rem' },
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

          {/* ── Desktop Nav ──────────────────────────────────────── */}
          {!isMobile && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { md: 0, lg: 0.25 },
                flex: '1 1 auto',
                justifyContent: 'center',
              }}
            >
              {navItems.map((item) => {
                const active = isActive(item);
                const isOpen = currentDropdown === item.label;
                return (
                  <Box key={item.label} sx={{ position: 'relative' }}>
                    {item.hasDropdown ? (
                      <Button
                        className={`nav-link-btn${active ? ' active' : ''}`}
                        onClick={(e) => handleMenuOpen(e, item.label)}
                        endIcon={
                          <KeyboardArrowDown
                            sx={{
                              fontSize: { md: '0.9rem', lg: '1rem' },
                              color:
                                active || isOpen
                                  ? '#90cdf4'
                                  : 'rgba(255,255,255,0.5)',
                              transition:
                                'transform 0.35s cubic-bezier(0.34,1.56,0.64,1), color 0.2s',
                              transform: isOpen
                                ? 'rotate(180deg)'
                                : 'rotate(0deg)',
                            }}
                          />
                        }
                        sx={{
                          fontFamily: "'Sora', sans-serif",
                          color:
                            active || isOpen
                              ? '#90cdf4'
                              : 'rgba(255,255,255,0.88)',
                          textTransform: 'none',
                          fontSize: { md: '0.8rem', lg: '0.875rem' },
                          fontWeight: active ? 600 : 500,
                          letterSpacing: '0.02em',
                          px: { md: 1.2, lg: 1.75 },
                          py: 1.1,
                          borderRadius: '10px',
                          position: 'relative',
                          transition: 'color 0.2s, background 0.2s',
                          whiteSpace: 'nowrap',
                          minWidth: 'auto',
                          '&:hover': {
                            backgroundColor: 'rgba(99,179,237,0.07)',
                            color: '#90cdf4',
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                    ) : (
                      <Link
                        href={item.href || '/'}
                        style={{ textDecoration: 'none' }}
                      >
                        <Button
                          className={`nav-link-btn${active ? ' active' : ''}`}
                          sx={{
                            fontFamily: "'Sora', sans-serif",
                            color: active
                              ? '#90cdf4'
                              : 'rgba(255,255,255,0.88)',
                            textTransform: 'none',
                            fontSize: { md: '0.8rem', lg: '0.875rem' },
                            fontWeight: active ? 600 : 500,
                            letterSpacing: '0.02em',
                            px: { md: 1.2, lg: 1.75 },
                            py: 1.1,
                            borderRadius: '10px',
                            position: 'relative',
                            transition: 'color 0.2s, background 0.2s',
                            whiteSpace: 'nowrap',
                            minWidth: 'auto',
                            '&:hover': {
                              backgroundColor: 'rgba(99,179,237,0.07)',
                              color: '#90cdf4',
                            },
                          }}
                        >
                          {item.label}
                        </Button>
                      </Link>
                    )}
                  </Box>
                );
              })}
            </Box>
          )}

          {/* ── CTA Button (Desktop) ─────────────────────────────── */}
          {!isMobile && (
            <Link href="/contact" style={{ textDecoration: 'none', flexShrink: 0 }}>
              <Button
                variant="contained"
                endIcon={
                  <ArrowForward
                    sx={{
                      fontSize: { md: '0.9rem', lg: '1rem' },
                      transition: 'transform 0.3s',
                    }}
                  />
                }
                className="cta-shimmer"
                sx={{
                  fontFamily: "'Sora', sans-serif",
                  color: '#fff',
                  textTransform: 'none',
                  fontWeight: 700,
                  fontSize: { md: '0.8rem', lg: '0.875rem' },
                  letterSpacing: '0.04em',
                  px: { md: 2.2, lg: 3 },
                  py: { md: 1, lg: 1.15 },
                  borderRadius: '10px',
                  border: '1px solid rgba(99,179,237,0.25)',
                  animation:
                    'shimmer 2.6s linear infinite, pulseGlow 3s ease-in-out infinite',
                  transition:
                    'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s',
                  whiteSpace: 'nowrap',
                  '&:hover': {
                    transform: 'translateY(-2px) scale(1.03)',
                    '& .MuiButton-endIcon': {
                      transform: 'translateX(3px)',
                    },
                  },
                  '&:active': {
                    transform: 'translateY(0) scale(0.98)',
                  },
                }}
              >
                Get Quote
              </Button>
            </Link>
          )}

          {/* ── Mobile Hamburger ─────────────────────────────────── */}
          {isMobile && (
            <IconButton
              onClick={handleDrawerToggle}
              aria-label="Open navigation menu"
              sx={{
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '10px',
                p: { xs: 0.7, sm: 0.9 },
                transition: 'all 0.25s',
                '&:hover': {
                  background: 'rgba(99,179,237,0.1)',
                  borderColor: 'rgba(99,179,237,0.3)',
                },
                '&:active': {
                  transform: 'scale(0.92)',
                  background: 'rgba(99,179,237,0.15)',
                },
              }}
            >
              <MenuIcon sx={{ fontSize: { xs: '1.2rem', sm: '1.3rem' } }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* ── Custom Desktop Dropdown ──────────────────────────────── */}
      {!isMobile && (
        <DesktopDropdown
          items={currentItem?.dropdownItems || []}
          anchorEl={anchorEl}
          pathname={pathname}
          onClose={handleMenuClose}
        />
      )}

      {/* ── Mobile Drawer ────────────────────────────────────────── */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        slotProps={{
          backdrop: {
            sx: {
              background: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            },
          },
          paper: {
            className: 'drawer-scroll safe-area-top safe-area-bottom',
            sx: {
              background:
                'linear-gradient(160deg, #060d1e 0%, #0a1530 60%, #0d1c3c 100%)',
              color: '#fff',
              width: drawerWidth,
              maxWidth: '100vw',
              borderLeft: isSmallMobile
                ? 'none'
                : '1px solid rgba(99,179,237,0.1)',
              boxShadow: '-20px 0 60px rgba(0,0,0,0.6)',
              display: 'flex',
              flexDirection: 'column',
              overflowX: 'hidden',
            },
          },
        }}
      >
        {/* Drawer Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: { xs: 2, sm: 2.5 },
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            background: 'rgba(99,179,237,0.03)',
            flexShrink: 0,
          }}
        >
          <Link href="/" onClick={handleDrawerToggle} style={{ textDecoration: 'none' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
              <Box
                component="img"
                src="/logo.png"
                alt="Bendra"
                sx={{ height: { xs: 26, sm: 30 }, width: 'auto' }}
              />
              <Typography
                sx={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  fontSize: { xs: '0.9rem', sm: '1rem' },
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
          <IconButton
            onClick={handleDrawerToggle}
            aria-label="Close navigation menu"
            sx={{
              color: 'rgba(255,255,255,0.6)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '8px',
              p: 0.7,
              transition: 'all 0.2s',
              '&:hover': {
                color: '#fff',
                background: 'rgba(99,179,237,0.1)',
                borderColor: 'rgba(99,179,237,0.25)',
              },
              '&:active': {
                transform: 'scale(0.9)',
              },
            }}
          >
            <CloseIcon sx={{ fontSize: '1.1rem' }} />
          </IconButton>
        </Box>

        {/* Drawer Nav Items */}
        <List
          sx={{
            px: { xs: 1, sm: 1.5 },
            py: { xs: 2, sm: 2.5 },
            flex: 1,
            overflowY: 'auto',
            overflowX: 'hidden',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {navItems.map((item, idx) => {
            const active = isActive(item);
            return (
              <Box
                key={item.label}
                className="drawer-item"
                sx={{ animationDelay: `${idx * 0.06}s`, mb: 0.5 }}
              >
                {item.hasDropdown ? (
                  <>
                    <ListItem
                      onClick={() => handleMobileExpand(item.label)}
                      className="mobile-touch-item"
                      sx={{
                        cursor: 'pointer',
                        borderRadius: '12px',
                        py: { xs: 1.2, sm: 1.3 },
                        px: { xs: 1.5, sm: 2 },
                        backgroundColor: active
                          ? 'rgba(99,179,237,0.1)'
                          : 'transparent',
                        border: active
                          ? '1px solid rgba(99,179,237,0.2)'
                          : '1px solid transparent',
                        transition: 'all 0.25s',
                        WebkitTapHighlightColor: 'transparent',
                        userSelect: 'none',
                        '&:hover': {
                          backgroundColor: 'rgba(99,179,237,0.07)',
                          borderColor: 'rgba(99,179,237,0.15)',
                        },
                        '&:active': {
                          backgroundColor: 'rgba(99,179,237,0.12)',
                        },
                      }}
                    >
                      <ListItemText
                        primary={item.label}
                        sx={{
                          '& .MuiTypography-root': {
                            fontFamily: "'Sora', sans-serif",
                            color: active
                              ? '#90cdf4'
                              : 'rgba(255,255,255,0.9)',
                            fontWeight: active ? 600 : 500,
                            fontSize: { xs: '0.85rem', sm: '0.9rem' },
                            letterSpacing: '0.02em',
                          },
                        }}
                      />
                      <KeyboardArrowDown
                        sx={{
                          fontSize: '1.1rem',
                          color: active
                            ? '#90cdf4'
                            : 'rgba(255,255,255,0.35)',
                          transition:
                            'transform 0.35s cubic-bezier(0.34,1.56,0.64,1), color 0.2s',
                          transform:
                            mobileExpanded === item.label
                              ? 'rotate(180deg)'
                              : 'rotate(0deg)',
                        }}
                      />
                    </ListItem>

                    {/* Sub items with smooth expand */}
                    <Box
                      sx={{
                        maxHeight:
                          mobileExpanded === item.label ? '400px' : '0px',
                        overflow: 'hidden',
                        transition:
                          'max-height 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease',
                        opacity: mobileExpanded === item.label ? 1 : 0,
                        pl: { xs: 0.5, sm: 1 },
                        mt: mobileExpanded === item.label ? 0.5 : 0,
                      }}
                    >
                      {item.dropdownItems?.map((sub, subIdx) => {
                        const subActive = pathname === sub.href;
                        return (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            style={{ textDecoration: 'none' }}
                          >
                            <ListItem
                              onClick={handleDrawerToggle}
                              className="mobile-touch-item"
                              sx={{
                                cursor: 'pointer',
                                borderRadius: '10px',
                                py: { xs: 0.9, sm: 1 },
                                px: { xs: 1.5, sm: 2 },
                                mb: 0.3,
                                transition: 'all 0.2s',
                                WebkitTapHighlightColor: 'transparent',
                                animation:
                                  mobileExpanded === item.label
                                    ? `fadeInUp 0.3s cubic-bezier(0.16,1,0.3,1) ${subIdx * 0.05}s both`
                                    : 'none',
                                '&:hover': {
                                  backgroundColor:
                                    'rgba(99,179,237,0.07)',
                                },
                                '&:active': {
                                  backgroundColor:
                                    'rgba(99,179,237,0.12)',
                                  transform: 'scale(0.98)',
                                },
                              }}
                            >
                              <Box
                                sx={{
                                  width: 4,
                                  height: 4,
                                  borderRadius: '50%',
                                  background: subActive
                                    ? '#63b3ed'
                                    : 'rgba(255,255,255,0.25)',
                                  mr: 1.5,
                                  flexShrink: 0,
                                  transition: 'background 0.2s, transform 0.2s',
                                  transform: subActive ? 'scale(1.5)' : 'scale(1)',
                                }}
                              />
                              <ListItemText
                                primary={sub.label}
                                sx={{
                                  '& .MuiTypography-root': {
                                    fontFamily:
                                      "'DM Sans', sans-serif",
                                    color: subActive
                                      ? '#90cdf4'
                                      : 'rgba(255,255,255,0.6)',
                                    fontWeight: subActive ? 600 : 400,
                                    fontSize: { xs: '0.82rem', sm: '0.855rem' },
                                    letterSpacing: '0.01em',
                                  },
                                }}
                              />
                            </ListItem>
                          </Link>
                        );
                      })}
                    </Box>
                  </>
                ) : (
                  <Link
                    href={item.href || '/'}
                    style={{ textDecoration: 'none' }}
                  >
                    <ListItem
                      onClick={handleDrawerToggle}
                      className="mobile-touch-item"
                      sx={{
                        cursor: 'pointer',
                        borderRadius: '12px',
                        py: { xs: 1.2, sm: 1.3 },
                        px: { xs: 1.5, sm: 2 },
                        backgroundColor: active
                          ? 'rgba(99,179,237,0.1)'
                          : 'transparent',
                        border: active
                          ? '1px solid rgba(99,179,237,0.2)'
                          : '1px solid transparent',
                        transition: 'all 0.25s',
                        WebkitTapHighlightColor: 'transparent',
                        '&:hover': {
                          backgroundColor: 'rgba(99,179,237,0.07)',
                          borderColor: 'rgba(99,179,237,0.15)',
                        },
                        '&:active': {
                          backgroundColor: 'rgba(99,179,237,0.12)',
                          transform: 'scale(0.98)',
                        },
                      }}
                    >
                      {/* Active indicator line */}
                      {active && (
                        <Box
                          sx={{
                            position: 'absolute',
                            left: 0,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: 3,
                            height: '60%',
                            borderRadius: '0 4px 4px 0',
                            background: 'linear-gradient(180deg, #63b3ed, #4299e1)',
                          }}
                        />
                      )}
                      <ListItemText
                        primary={item.label}
                        sx={{
                          '& .MuiTypography-root': {
                            fontFamily: "'Sora', sans-serif",
                            color: active
                              ? '#90cdf4'
                              : 'rgba(255,255,255,0.9)',
                            fontWeight: active ? 600 : 500,
                            fontSize: { xs: '0.85rem', sm: '0.9rem' },
                            letterSpacing: '0.02em',
                          },
                        }}
                      />
                      {active && (
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            background: '#63b3ed',
                            boxShadow: '0 0 8px rgba(99,179,237,0.5)',
                            flexShrink: 0,
                          }}
                        />
                      )}
                    </ListItem>
                  </Link>
                )}
              </Box>
            );
          })}

          {/* Mobile CTA */}
          <Box
            sx={{
              mt: 3,
              px: { xs: 0.25, sm: 0.5 },
            }}
          >
            <Link
              href="/contact"
              style={{ textDecoration: 'none', width: '100%', display: 'block' }}
            >
              <Button
                fullWidth
                variant="contained"
                endIcon={
                  <ArrowForward
                    sx={{ fontSize: '1rem !important' }}
                  />
                }
                className="cta-shimmer"
                onClick={handleDrawerToggle}
                sx={{
                  fontFamily: "'Sora', sans-serif",
                  color: '#fff',
                  textTransform: 'none',
                  fontWeight: 700,
                  fontSize: { xs: '0.85rem', sm: '0.9rem' },
                  letterSpacing: '0.04em',
                  py: { xs: 1.3, sm: 1.5 },
                  borderRadius: '12px',
                  border: '1px solid rgba(99,179,237,0.25)',
                  animation: 'shimmer 2.6s linear infinite',
                  transition: 'transform 0.2s',
                  WebkitTapHighlightColor: 'transparent',
                  '&:active': { transform: 'scale(0.97)' },
                }}
              >
                Get Quote
              </Button>
            </Link>
          </Box>
        </List>

        {/* Drawer bottom watermark */}
        <Box
          sx={{
            p: { xs: 2, sm: 2.5 },
            pt: 1,
            borderTop: '1px solid rgba(255,255,255,0.05)',
            textAlign: 'center',
            flexShrink: 0,
          }}
        >
          <Typography
            sx={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: { xs: '0.65rem', sm: '0.72rem' },
              color: 'rgba(255,255,255,0.2)',
              letterSpacing: '0.05em',
              lineHeight: 1.5,
            }}
          >
            © Copyright 2025 DEM Technologies Private Limited.
            <br />
            All Rights Reserved
          </Typography>
        </Box>
      </Drawer>

      {/* ── Spacer to prevent content from hiding behind fixed navbar ── */}
      <Box
        sx={{
          height: { xs: 60, sm: 66, md: 72, lg: 76 },
        }}
      />
    </>
  );
};

export default Navbar;