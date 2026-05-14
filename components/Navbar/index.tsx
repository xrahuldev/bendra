'use client';

import React, { useState, useEffect, useRef } from 'react';
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
  {
    label: 'Services',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Web Development', href: '/web-development' },
      { label: 'Mobile Apps', href: '/mobile-apps' },
      { label: 'UI/UX Design', href: '/ui-ux-design' },
      { label: 'Consulting', href: '/consulting' },
    ],
  },
  {
    label: 'Solutions',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Enterprise', href: '/enterprise' },
      { label: 'Startup', href: '/startup' },
      { label: 'E-Commerce', href: '/ecommerce' },
      { label: 'SaaS', href: '/saas' },
    ],
  },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blogs' },
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
      background: rgba(8, 15, 32, 0.88) !important;
      backdrop-filter: blur(24px) !important;
      border-bottom: 1px solid rgba(99,179,237,0.12) !important;
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

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node) && !anchorEl?.contains(e.target as Node)) {
        onClose();
      }
    };
    if (anchorEl) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [anchorEl, onClose]);

  if (!anchorEl) return null;

  const rect = anchorEl.getBoundingClientRect();

  return (
    <div
      ref={ref}
      className="bendra-dropdown"
      style={{
        position: 'fixed',
        top: rect.bottom + 10,
        left: rect.left,
        zIndex: 1400,
        background: 'linear-gradient(135deg, rgba(10,22,48,0.97) 0%, rgba(14,26,56,0.97) 100%)',
        border: '1px solid rgba(99,179,237,0.15)',
        borderRadius: 16,
        minWidth: 210,
        boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 1px 0 rgba(99,179,237,0.1) inset',
        backdropFilter: 'blur(28px)',
        padding: '8px',
        overflow: 'hidden',
      }}
    >
      {/* subtle top glow line */}
      <div style={{
        position: 'absolute', top: 0, left: '20%', right: '20%', height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(99,179,237,0.5), transparent)',
      }} />

      {items.map((option, i) => {
        const active = pathname === option.href;
        return (
          <Link key={option.label} href={option.href} style={{ textDecoration: 'none' }}>
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
                (e.currentTarget as HTMLElement).style.background = 'rgba(99,179,237,0.1)';
                (e.currentTarget as HTMLElement).style.color = '#90cdf4';
                (e.currentTarget as HTMLElement).style.transform = 'translateX(4px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.color = active ? '#90cdf4' : 'rgba(255,255,255,0.82)';
                (e.currentTarget as HTMLElement).style.transform = 'translateX(0)';
              }}
            >
              {/* dot indicator */}
              <span style={{
                width: 5, height: 5, borderRadius: '50%',
                background: active ? '#63b3ed' : 'rgba(255,255,255,0.2)',
                flexShrink: 0,
                transition: 'background 0.2s',
              }} />
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
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (item: NavItem): boolean => {
    if (item.href && pathname === item.href) return true;
    if (item.dropdownItems) return item.dropdownItems.some((d) => pathname === d.href);
    return false;
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, label: string) => {
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
    setMobileExpanded('');
  };

  const handleMobileExpand = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? '' : label);
  };

  const currentItem = navItems.find((item) => item.label === currentDropdown);

  return (
    <>
      <GlobalStyles />

      <AppBar
        position="fixed"
        elevation={0}
        className={scrolled ? 'scrolled-bar' : ''}
        sx={{
          background: scrolled
            ? 'transparent'
            : 'linear-gradient(180deg, rgba(6,13,30,0.98) 0%, rgba(8,18,40,0.92) 100%)',
          borderBottom: scrolled ? 'none' : '1px solid rgba(255,255,255,0.04)',
          transition: 'background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
          zIndex: 1300,
          animation: mounted ? 'navSlideDown 0.5s cubic-bezier(0.16,1,0.3,1) both' : 'none',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: { xs: 2.5, md: 6 },
            py: 0,
            minHeight: { xs: 66, md: 76 },
          }}
        >
          {/* ── Logo ─────────────────────────────────────────────── */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Box
              sx={{
                display: 'flex', alignItems: 'center', gap: 1.5, cursor: 'pointer',
                transition: 'opacity 0.2s, transform 0.3s',
                '&:hover': { opacity: 0.88, transform: 'scale(1.02)' },
              }}
            >
              <Box
                component="img"
                src="/logo.png"
                alt="Bendra Logo"
                sx={{ height: 38, width: 'auto' }}
              />
              <Typography
                sx={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 800,
                  color: '#fff',
                  letterSpacing: '0.12em',
                  fontSize: { xs: '1.15rem', md: '1.35rem' },
                  background: 'linear-gradient(135deg, #fff 40%, #90cdf4 100%)',
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
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25 }}>
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
                              fontSize: '1rem !important',
                              color: active || isOpen ? '#90cdf4' : 'rgba(255,255,255,0.5)',
                              transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1), color 0.2s',
                              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            }}
                          />
                        }
                        sx={{
                          fontFamily: "'Sora', sans-serif",
                          color: active || isOpen ? '#90cdf4' : 'rgba(255,255,255,0.88)',
                          textTransform: 'none',
                          fontSize: '0.875rem',
                          fontWeight: active ? 600 : 500,
                          letterSpacing: '0.02em',
                          px: 1.75,
                          py: 1.1,
                          borderRadius: '10px',
                          position: 'relative',
                          transition: 'color 0.2s, background 0.2s',
                          '&:hover': {
                            backgroundColor: 'rgba(99,179,237,0.07)',
                            color: '#90cdf4',
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                    ) : (
                      <Link href={item.href || '/'} style={{ textDecoration: 'none' }}>
                        <Button
                          className={`nav-link-btn${active ? ' active' : ''}`}
                          sx={{
                            fontFamily: "'Sora', sans-serif",
                            color: active ? '#90cdf4' : 'rgba(255,255,255,0.88)',
                            textTransform: 'none',
                            fontSize: '0.875rem',
                            fontWeight: active ? 600 : 500,
                            letterSpacing: '0.02em',
                            px: 1.75,
                            py: 1.1,
                            borderRadius: '10px',
                            position: 'relative',
                            transition: 'color 0.2s, background 0.2s',
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

          {/* ── CTA Button ───────────────────────────────────────── */}
          {!isMobile && (
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                endIcon={<ArrowForward sx={{ fontSize: '1rem !important', transition: 'transform 0.3s' }} />}
                className="cta-shimmer"
                sx={{
                  fontFamily: "'Sora', sans-serif",
                  color: '#fff',
                  textTransform: 'none',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  letterSpacing: '0.04em',
                  px: 3,
                  py: 1.15,
                  borderRadius: '10px',
                  border: '1px solid rgba(99,179,237,0.25)',
                  animation: 'shimmer 2.6s linear infinite, pulseGlow 3s ease-in-out infinite',
                  transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-2px) scale(1.03)',
                    '& .MuiButton-endIcon': { transform: 'translateX(3px)' },
                  },
                  '&:active': { transform: 'translateY(0) scale(0.98)' },
                }}
              >
                Get in Touch
              </Button>
            </Link>
          )}

          {/* ── Mobile Hamburger ─────────────────────────────────── */}
          {isMobile && (
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                p: 0.9,
                transition: 'background 0.2s, border-color 0.2s',
                '&:hover': {
                  background: 'rgba(99,179,237,0.1)',
                  borderColor: 'rgba(99,179,237,0.3)',
                },
              }}
            >
              <MenuIcon sx={{ fontSize: '1.3rem' }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* ── Custom Desktop Dropdown ──────────────────────────────── */}
      <DesktopDropdown
        items={currentItem?.dropdownItems || []}
        anchorEl={anchorEl}
        pathname={pathname}
        onClose={handleMenuClose}
      />

      {/* ── Mobile Drawer ────────────────────────────────────────── */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        slotProps={{
          paper: {
            sx: {
              background: 'linear-gradient(160deg, #060d1e 0%, #0a1530 60%, #0d1c3c 100%)',
              color: '#fff',
              width: 300,
              borderLeft: '1px solid rgba(99,179,237,0.1)',
              boxShadow: '-20px 0 60px rgba(0,0,0,0.6)',
            },
          },
        }}
      >
        {/* Drawer Header */}
        <Box
          sx={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            p: 2.5,
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            background: 'rgba(99,179,237,0.03)',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
            <Box component="img" src="/logo.png" alt="Bendra" sx={{ height: 30, width: 'auto' }} />
            <Typography
              sx={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 800,
                letterSpacing: '0.12em',
                fontSize: '1rem',
                background: 'linear-gradient(135deg, #fff 40%, #90cdf4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              BENDRA
            </Typography>
          </Box>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              color: 'rgba(255,255,255,0.6)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '8px',
              p: 0.7,
              transition: 'all 0.2s',
              '&:hover': { color: '#fff', background: 'rgba(99,179,237,0.1)', borderColor: 'rgba(99,179,237,0.25)' },
            }}
          >
            <CloseIcon sx={{ fontSize: '1.1rem' }} />
          </IconButton>
        </Box>

        {/* Drawer Nav Items */}
        <List sx={{ px: 1.5, py: 2.5, flex: 1 }}>
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
                      sx={{
                        cursor: 'pointer',
                        borderRadius: '12px',
                        py: 1.3,
                        px: 2,
                        backgroundColor: active ? 'rgba(99,179,237,0.1)' : 'transparent',
                        border: active ? '1px solid rgba(99,179,237,0.2)' : '1px solid transparent',
                        transition: 'all 0.25s',
                        '&:hover': {
                          backgroundColor: 'rgba(99,179,237,0.07)',
                          borderColor: 'rgba(99,179,237,0.15)',
                        },
                      }}
                    >
                      <ListItemText
                        primary={item.label}
                        sx={{
                          '& .MuiTypography-root': {
                            fontFamily: "'Sora', sans-serif",
                            color: active ? '#90cdf4' : 'rgba(255,255,255,0.9)',
                            fontWeight: active ? 600 : 500,
                            fontSize: '0.9rem',
                            letterSpacing: '0.02em',
                          },
                        }}
                      />
                      <KeyboardArrowDown
                        sx={{
                          fontSize: '1.1rem',
                          color: active ? '#90cdf4' : 'rgba(255,255,255,0.35)',
                          transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1), color 0.2s',
                          transform: mobileExpanded === item.label ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      />
                    </ListItem>

                    {/* Sub items */}
                    <Box
                      sx={{
                        maxHeight: mobileExpanded === item.label ? '280px' : '0px',
                        overflow: 'hidden',
                        transition: 'max-height 0.4s cubic-bezier(0.16,1,0.3,1)',
                        pl: 1,
                        mt: 0.5,
                      }}
                    >
                      {item.dropdownItems?.map((sub) => {
                        const subActive = pathname === sub.href;
                        return (
                          <Link key={sub.label} href={sub.href} style={{ textDecoration: 'none' }}>
                            <ListItem
                              onClick={handleDrawerToggle}
                              sx={{
                                cursor: 'pointer',
                                borderRadius: '10px',
                                py: 1,
                                px: 2,
                                mb: 0.3,
                                transition: 'all 0.2s',
                                '&:hover': { backgroundColor: 'rgba(99,179,237,0.07)' },
                              }}
                            >
                              <Box sx={{
                                width: 4, height: 4, borderRadius: '50%',
                                background: subActive ? '#63b3ed' : 'rgba(255,255,255,0.25)',
                                mr: 1.5, flexShrink: 0,
                              }} />
                              <ListItemText
                                primary={sub.label}
                                sx={{
                                  '& .MuiTypography-root': {
                                    fontFamily: "'DM Sans', sans-serif",
                                    color: subActive ? '#90cdf4' : 'rgba(255,255,255,0.6)',
                                    fontWeight: subActive ? 600 : 400,
                                    fontSize: '0.855rem',
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
                  <Link href={item.href || '/'} style={{ textDecoration: 'none' }}>
                    <ListItem
                      onClick={handleDrawerToggle}
                      sx={{
                        cursor: 'pointer',
                        borderRadius: '12px',
                        py: 1.3,
                        px: 2,
                        backgroundColor: active ? 'rgba(99,179,237,0.1)' : 'transparent',
                        border: active ? '1px solid rgba(99,179,237,0.2)' : '1px solid transparent',
                        transition: 'all 0.25s',
                        '&:hover': {
                          backgroundColor: 'rgba(99,179,237,0.07)',
                          borderColor: 'rgba(99,179,237,0.15)',
                        },
                      }}
                    >
                      <ListItemText
                        primary={item.label}
                        sx={{
                          '& .MuiTypography-root': {
                            fontFamily: "'Sora', sans-serif",
                            color: active ? '#90cdf4' : 'rgba(255,255,255,0.9)',
                            fontWeight: active ? 600 : 500,
                            fontSize: '0.9rem',
                            letterSpacing: '0.02em',
                          },
                        }}
                      />
                    </ListItem>
                  </Link>
                )}
              </Box>
            );
          })}

          {/* Mobile CTA */}
          <Box sx={{ mt: 3, px: 0.5 }}>
            <Link href="/contact" style={{ textDecoration: 'none', width: '100%' }}>
              <Button
                fullWidth
                variant="contained"
                endIcon={<ArrowForward sx={{ fontSize: '1rem !important' }} />}
                className="cta-shimmer"
                onClick={handleDrawerToggle}
                sx={{
                  fontFamily: "'Sora', sans-serif",
                  color: '#fff',
                  textTransform: 'none',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  letterSpacing: '0.04em',
                  py: 1.5,
                  borderRadius: '12px',
                  border: '1px solid rgba(99,179,237,0.25)',
                  animation: 'shimmer 2.6s linear infinite',
                  transition: 'transform 0.2s',
                  '&:active': { transform: 'scale(0.98)' },
                }}
              >
                Get in Touch
              </Button>
            </Link>
          </Box>
        </List>

        {/* Drawer bottom watermark */}
        <Box sx={{
          p: 2.5, pt: 1,
          borderTop: '1px solid rgba(255,255,255,0.05)',
          textAlign: 'center',
        }}>
          <Typography sx={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.72rem',
            color: 'rgba(255,255,255,0.2)',
            letterSpacing: '0.05em',
          }}>
            © 2025 Bendra. All rights reserved.
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;