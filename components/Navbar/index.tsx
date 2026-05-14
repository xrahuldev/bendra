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
  NorthEast,
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface DropdownItem { label: string; href: string; }
interface NavItem {
  label: string;
  href?: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: 'Home',        href: '/' },
  { label: 'About Us',    href: '/about' },
  { label: 'Portfolio',   href: '/portfolio' },
  {
    label: 'Our Expertise',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Website Development',    href: '/expertise/website-development' },
      { label: 'Social Media Marketing', href: '/expertise/social-media-marketing' },
      { label: 'Website UI/UX Design',   href: '/expertise/ui-ux-design' },
      { label: 'SEO',                    href: '/expertise/seo' },
    ],
  },
  { label: 'Blogs',   href: '/blogs' },
  { label: 'Contact', href: '/contact' },
];

/* ─── Global Styles ──────────────────────────────────────── */
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=Outfit:wght@300;400;500;600&display=swap');

    * { box-sizing: border-box; }

    @keyframes navIn {
      from { opacity: 0; transform: translateY(-16px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes dropIn {
      from { opacity: 0; transform: translateY(8px) scale(.97); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
    @keyframes drawerIn {
      from { opacity: 0; transform: translateX(20px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(10px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .nb-drop { animation: dropIn .2s cubic-bezier(.16,1,.3,1) both; transform-origin: top left; }

    /* underline on active/hover */
    .nb-link::after {
      content: '';
      position: absolute;
      bottom: 5px; left: 50%;
      transform: translateX(-50%);
      height: 2px; width: 0;
      border-radius: 99px;
      background: linear-gradient(90deg, #0e5af0, #60a5fa);
      transition: width .3s cubic-bezier(.34,1.56,.64,1);
    }
    .nb-link:hover::after, .nb-link.nb-active::after { width: 20px; }

    .nb-drawer-item { animation: drawerIn .28s cubic-bezier(.16,1,.3,1) both; }

    /* scrolled state */
    .nb-scrolled {
      background: rgba(5,11,26,0.94) !important;
      backdrop-filter: blur(24px) saturate(180%) !important;
      -webkit-backdrop-filter: blur(24px) saturate(180%) !important;
      border-bottom: 1px solid rgba(14,90,240,.14) !important;
    }

    .body-lock { overflow: hidden !important; position: fixed !important; width: 100% !important; }

    .nb-drawer::-webkit-scrollbar { width: 3px; }
    .nb-drawer::-webkit-scrollbar-thumb { background: rgba(14,90,240,.25); border-radius: 10px; }

    @media (hover: none) {
      .nb-touch:active { transform: scale(.98); background: rgba(14,90,240,.1) !important; }
    }
  `}</style>
);

/* ─── Desktop Dropdown ───────────────────────────────────── */
const DesktopDropdown: React.FC<{
  items: DropdownItem[];
  anchorEl: HTMLElement | null;
  pathname: string;
  onClose: () => void;
}> = ({ items, anchorEl, pathname, onClose }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node) && !anchorEl?.contains(e.target as Node)) onClose();
    };
    if (anchorEl) document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, [anchorEl, onClose]);

  useEffect(() => {
    if (!anchorEl) return;
    const update = () => {
      const r = anchorEl.getBoundingClientRect();
      const w = 248;
      let left = r.left;
      if (left + w > window.innerWidth - 16) left = window.innerWidth - w - 16;
      if (left < 16) left = 16;
      setPos({ top: r.bottom + 8, left });
    };
    update();
    window.addEventListener('resize', update);
    window.addEventListener('scroll', update);
    return () => { window.removeEventListener('resize', update); window.removeEventListener('scroll', update); };
  }, [anchorEl]);

  if (!anchorEl) return null;

  return (
    <div ref={ref} className="nb-drop" style={{
      position: 'fixed', top: pos.top, left: pos.left, zIndex: 1400,
      background: 'linear-gradient(145deg, rgba(5,11,26,.97) 0%, rgba(8,18,44,.97) 100%)',
      border: '1px solid rgba(14,90,240,.18)',
      borderRadius: 16, minWidth: 232,
      boxShadow: '0 20px 56px rgba(0,0,0,.55), 0 1px 0 rgba(14,90,240,.1) inset',
      backdropFilter: 'blur(28px)', padding: '8px', overflow: 'hidden',
    }}>
      {/* top glow line */}
      <div style={{
        position: 'absolute', top: 0, left: '18%', right: '18%', height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(14,90,240,.5), transparent)',
      }}/>

      {items.map((opt, i) => {
        const active = pathname === opt.href;
        return (
          <Link key={opt.label} href={opt.href} style={{ textDecoration: 'none' }}>
            <div
              onClick={onClose}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '.875rem', fontWeight: active ? 600 : 400,
                color: active ? '#90cdf4' : 'rgba(255,255,255,.82)',
                padding: '10px 14px', borderRadius: 10,
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8,
                transition: 'background .18s, color .18s, transform .18s',
                animationDelay: `${i * .04}s`, letterSpacing: '.01em',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(14,90,240,.12)';
                el.style.color = '#90cdf4';
                el.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'transparent';
                el.style.color = active ? '#90cdf4' : 'rgba(255,255,255,.82)';
                el.style.transform = 'translateX(0)';
              }}
            >
              <span style={{
                width: 5, height: 5, borderRadius: '50%', flexShrink: 0,
                background: active ? '#0e5af0' : 'rgba(255,255,255,.2)',
                transition: 'background .18s',
              }}/>
              {opt.label}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

/* ─── Navbar ─────────────────────────────────────────────── */
const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl]         = useState<HTMLElement | null>(null);
  const [currentDrop, setCurrentDrop]   = useState('');
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [mobileExp, setMobileExp]       = useState('');
  const [scrolled, setScrolled]         = useState(false);
  const [mounted, setMounted]           = useState(false);

  const theme      = useTheme();
  const isMobile   = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet   = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isSmallMob = useMediaQuery('(max-width:360px)');
  const pathname   = usePathname();

  useEffect(() => {
    setMounted(true);
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('body-lock', mobileOpen);
    return () => document.body.classList.remove('body-lock');
  }, [mobileOpen]);

  useEffect(() => {
    setAnchorEl(null); setCurrentDrop('');
    setMobileOpen(false); setMobileExp('');
  }, [pathname]);

  const isActive = useCallback((item: NavItem) => {
    if (item.href && pathname === item.href) return true;
    if (item.dropdownItems) return item.dropdownItems.some(d => pathname === d.href);
    return false;
  }, [pathname]);

  const openDrop = (e: React.MouseEvent<HTMLElement>, label: string) => {
    if (currentDrop === label) { setAnchorEl(null); setCurrentDrop(''); }
    else { setAnchorEl(e.currentTarget); setCurrentDrop(label); }
  };
  const closeDrop = () => { setAnchorEl(null); setCurrentDrop(''); };

  const currentItem = navItems.find(i => i.label === currentDrop);
  const drawerWidth = isSmallMob ? '100vw' : isTablet ? 340 : 300;

  /* shared nav button style */
  const navBtnSx = (active: boolean, isOpen?: boolean) => ({
    fontFamily: "'Bricolage Grotesque', sans-serif",
    color: active || isOpen ? '#90cdf4' : 'rgba(255,255,255,.88)',
    textTransform: 'none' as const,
    fontSize: { md: '.8rem', lg: '.875rem' },
    fontWeight: active ? 700 : 500,
    letterSpacing: '.02em',
    px: { md: 1.2, lg: 1.75 }, py: 1.1,
    borderRadius: '10px',
    position: 'relative' as const,
    transition: 'color .2s, background .2s',
    whiteSpace: 'nowrap' as const, minWidth: 'auto',
    '&:hover': { backgroundColor: 'rgba(14,90,240,.08)', color: '#90cdf4' },
  });

  return (
    <>
      <GlobalStyles />

      <AppBar
        position="fixed" elevation={0}
        className={scrolled ? 'nb-scrolled' : ''}
        sx={{
          background: scrolled
            ? 'transparent'
            : 'linear-gradient(180deg, rgba(5,11,26,.98) 0%, rgba(8,18,44,.92) 100%)',
          borderBottom: scrolled ? 'none' : '1px solid rgba(255,255,255,.04)',
          transition: 'background .4s ease, border-color .4s ease, box-shadow .4s ease',
          zIndex: 1300,
          animation: mounted ? 'navIn .5s cubic-bezier(.16,1,.3,1) both' : 'none',
        }}
      >
        <Toolbar sx={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          px: { xs: 1.5, sm: 2.5, md: 4, lg: 6 }, py: 0,
          minHeight: { xs: 60, sm: 66, md: 72 }, gap: { xs: 1, md: 2 },
        }}>

          {/* ── Logo ── */}
          <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <Box sx={{
              display: 'flex', alignItems: 'center', gap: { xs: .8, sm: 1, md: 1.2 },
              transition: 'opacity .2s, transform .25s',
              '&:hover': { opacity: .88, transform: 'scale(1.02)' },
              '&:active': { transform: 'scale(.97)' },
            }}>
              <Box component="img" src="/logo.png" alt="Bendra"
                sx={{ height: { xs: 28, sm: 32, md: 36 }, width: 'auto' }}/>
              <Typography sx={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 800, letterSpacing: { xs: '.08em', md: '.12em' },
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.22rem', lg: '1.32rem' },
                background: 'linear-gradient(135deg, #fff 35%, #90cdf4 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>BENDRA</Typography>
            </Box>
          </Link>

          {/* ── Desktop Nav Links ── */}
          {!isMobile && (
            <Box sx={{
              display: 'flex', alignItems: 'center',
              gap: { md: 0, lg: .15 }, flex: '1 1 auto', justifyContent: 'center',
            }}>
              {navItems.map(item => {
                const active = isActive(item);
                const isOpen = currentDrop === item.label;
                return (
                  <Box key={item.label} sx={{ position: 'relative' }}>
                    {item.hasDropdown ? (
                      <Button
                        className={`nb-link${active ? ' nb-active' : ''}`}
                        onClick={e => openDrop(e, item.label)}
                        endIcon={
                          <KeyboardArrowDown sx={{
                            fontSize: { md: '.9rem', lg: '1rem' },
                            color: active || isOpen ? '#90cdf4' : 'rgba(255,255,255,.45)',
                            transition: 'transform .32s cubic-bezier(.34,1.56,.64,1), color .2s',
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          }}/>
                        }
                        sx={navBtnSx(active, isOpen)}
                      >{item.label}</Button>
                    ) : (
                      <Link href={item.href || '/'} style={{ textDecoration: 'none' }}>
                        <Button
                          className={`nb-link${active ? ' nb-active' : ''}`}
                          sx={navBtnSx(active)}
                        >{item.label}</Button>
                      </Link>
                    )}
                  </Box>
                );
              })}
            </Box>
          )}

          {/* ── Desktop CTA ── */}
          {!isMobile && (
            <Link href="/contact" style={{ textDecoration: 'none', flexShrink: 0 }}>
              <Button
                variant="contained"
                endIcon={<NorthEast sx={{ fontSize: '.95rem !important', transition: 'transform .25s' }}/>}
                sx={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  color: '#fff', textTransform: 'none',
                  fontWeight: 700, fontSize: { md: '.8rem', lg: '.875rem' },
                  letterSpacing: '.04em',
                  px: { md: 2.2, lg: 2.8 }, py: { md: 1, lg: 1.15 },
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #0e5af0 0%, #2d7cf6 100%)',
                  border: '1px solid rgba(14,90,240,.3)',
                  boxShadow: '0 4px 18px rgba(14,90,240,.32)',
                  whiteSpace: 'nowrap',
                  transition: 'transform .28s cubic-bezier(.34,1.56,.64,1), box-shadow .28s',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #0b48cc 0%, #1a6af2 100%)',
                    transform: 'translateY(-2px) scale(1.03)',
                    boxShadow: '0 8px 26px rgba(14,90,240,.45)',
                    '& .MuiButton-endIcon': { transform: 'translate(2px,-2px)' },
                  },
                  '&:active': { transform: 'scale(.97)', boxShadow: '0 2px 8px rgba(14,90,240,.22)' },
                }}
              >Get Quote</Button>
            </Link>
          )}

          {/* ── Mobile Hamburger ── */}
          {isMobile && (
            <IconButton
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Open menu"
              sx={{
                color: '#fff',
                border: '1px solid rgba(255,255,255,.12)',
                borderRadius: '10px', p: { xs: .7, sm: .9 },
                transition: 'all .22s',
                '&:hover': { background: 'rgba(14,90,240,.12)', borderColor: 'rgba(14,90,240,.3)' },
                '&:active': { transform: 'scale(.92)' },
              }}
            >
              <MenuIcon sx={{ fontSize: { xs: '1.2rem', sm: '1.3rem' } }}/>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* ── Desktop Dropdown ── */}
      {!isMobile && (
        <DesktopDropdown
          items={currentItem?.dropdownItems || []}
          anchorEl={anchorEl}
          pathname={pathname}
          onClose={closeDrop}
        />
      )}

      {/* ── Mobile Drawer ── */}
      <Drawer
        anchor="right" open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        slotProps={{
          backdrop: { sx: { background: 'rgba(0,0,0,.65)', backdropFilter: 'blur(10px)' } },
          paper: {
            className: 'nb-drawer',
            sx: {
              background: 'linear-gradient(160deg, #05091a 0%, #091428 55%, #0c1a36 100%)',
              color: '#fff',
              width: drawerWidth, maxWidth: '100vw',
              borderLeft: isSmallMob ? 'none' : '1px solid rgba(14,90,240,.12)',
              boxShadow: '-20px 0 60px rgba(0,0,0,.65)',
              display: 'flex', flexDirection: 'column', overflowX: 'hidden',
            },
          },
        }}
      >
        {/* Drawer header */}
        <Box sx={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          p: { xs: 2, sm: 2.5 },
          borderBottom: '1px solid rgba(255,255,255,.06)',
          background: 'rgba(14,90,240,.04)', flexShrink: 0,
        }}>
          <Link href="/" onClick={() => setMobileOpen(false)} style={{ textDecoration: 'none' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
              <Box component="img" src="/logo.png" alt="Bendra" sx={{ height: { xs: 26, sm: 30 }, width: 'auto' }}/>
              <Typography sx={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 800, letterSpacing: '.12em',
                fontSize: { xs: '.9rem', sm: '1rem' },
                background: 'linear-gradient(135deg, #fff 35%, #90cdf4 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>BENDRA</Typography>
            </Box>
          </Link>
          <IconButton
            onClick={() => setMobileOpen(false)} aria-label="Close menu"
            sx={{
              color: 'rgba(255,255,255,.55)',
              border: '1px solid rgba(255,255,255,.08)',
              borderRadius: '8px', p: .7, transition: 'all .2s',
              '&:hover': { color: '#fff', background: 'rgba(14,90,240,.1)', borderColor: 'rgba(14,90,240,.25)' },
              '&:active': { transform: 'scale(.9)' },
            }}
          >
            <CloseIcon sx={{ fontSize: '1.1rem' }}/>
          </IconButton>
        </Box>

        {/* Nav items */}
        <List sx={{ px: { xs: 1, sm: 1.5 }, py: { xs: 2, sm: 2.5 }, flex: 1, overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}>
          {navItems.map((item, idx) => {
            const active = isActive(item);
            return (
              <Box key={item.label} className="nb-drawer-item" sx={{ animationDelay: `${idx * .055}s`, mb: .5 }}>
                {item.hasDropdown ? (
                  <>
                    <ListItem
                      onClick={() => setMobileExp(mobileExp === item.label ? '' : item.label)}
                      className="nb-touch"
                      sx={{
                        cursor: 'pointer', borderRadius: '12px',
                        py: { xs: 1.2, sm: 1.3 }, px: { xs: 1.5, sm: 2 },
                        background: active ? 'rgba(14,90,240,.1)' : 'transparent',
                        border: active ? '1px solid rgba(14,90,240,.22)' : '1px solid transparent',
                        transition: 'all .22s', WebkitTapHighlightColor: 'transparent',
                        '&:hover': { background: 'rgba(14,90,240,.07)', borderColor: 'rgba(14,90,240,.15)' },
                      }}
                    >
                      <ListItemText primary={item.label} sx={{ '& .MuiTypography-root': {
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        color: active ? '#90cdf4' : 'rgba(255,255,255,.9)',
                        fontWeight: active ? 700 : 500,
                        fontSize: { xs: '.85rem', sm: '.9rem' }, letterSpacing: '.02em',
                      }}}/>
                      <KeyboardArrowDown sx={{
                        fontSize: '1.1rem',
                        color: active ? '#90cdf4' : 'rgba(255,255,255,.3)',
                        transition: 'transform .32s cubic-bezier(.34,1.56,.64,1)',
                        transform: mobileExp === item.label ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}/>
                    </ListItem>

                    <Box sx={{
                      maxHeight: mobileExp === item.label ? '400px' : '0px',
                      overflow: 'hidden',
                      transition: 'max-height .38s cubic-bezier(.16,1,.3,1), opacity .28s ease',
                      opacity: mobileExp === item.label ? 1 : 0,
                      pl: { xs: .5, sm: 1 }, mt: mobileExp === item.label ? .5 : 0,
                    }}>
                      {item.dropdownItems?.map((sub, si) => {
                        const subActive = pathname === sub.href;
                        return (
                          <Link key={sub.label} href={sub.href} style={{ textDecoration: 'none' }}>
                            <ListItem
                              onClick={() => setMobileOpen(false)}
                              className="nb-touch"
                              sx={{
                                cursor: 'pointer', borderRadius: '10px',
                                py: { xs: .9, sm: 1 }, px: { xs: 1.5, sm: 2 }, mb: .25,
                                transition: 'all .18s', WebkitTapHighlightColor: 'transparent',
                                animation: mobileExp === item.label
                                  ? `fadeUp .28s cubic-bezier(.16,1,.3,1) ${si * .04}s both` : 'none',
                                '&:hover': { background: 'rgba(14,90,240,.07)' },
                              }}
                            >
                              <Box sx={{
                                width: 4, height: 4, borderRadius: '50%', mr: 1.5, flexShrink: 0,
                                background: subActive ? '#0e5af0' : 'rgba(255,255,255,.22)',
                                transform: subActive ? 'scale(1.5)' : 'scale(1)',
                                transition: 'all .18s',
                              }}/>
                              <ListItemText primary={sub.label} sx={{ '& .MuiTypography-root': {
                                fontFamily: "'Outfit', sans-serif",
                                color: subActive ? '#90cdf4' : 'rgba(255,255,255,.58)',
                                fontWeight: subActive ? 600 : 400,
                                fontSize: { xs: '.82rem', sm: '.855rem' }, letterSpacing: '.01em',
                              }}}/>
                            </ListItem>
                          </Link>
                        );
                      })}
                    </Box>
                  </>
                ) : (
                  <Link href={item.href || '/'} style={{ textDecoration: 'none' }}>
                    <ListItem
                      onClick={() => setMobileOpen(false)}
                      className="nb-touch"
                      sx={{
                        cursor: 'pointer', borderRadius: '12px',
                        py: { xs: 1.2, sm: 1.3 }, px: { xs: 1.5, sm: 2 },
                        background: active ? 'rgba(14,90,240,.1)' : 'transparent',
                        border: active ? '1px solid rgba(14,90,240,.22)' : '1px solid transparent',
                        transition: 'all .22s', WebkitTapHighlightColor: 'transparent',
                        '&:hover': { background: 'rgba(14,90,240,.07)', borderColor: 'rgba(14,90,240,.15)' },
                      }}
                    >
                      {active && (
                        <Box sx={{
                          position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
                          width: 3, height: '55%', borderRadius: '0 4px 4px 0',
                          background: 'linear-gradient(180deg, #0e5af0, #60a5fa)',
                        }}/>
                      )}
                      <ListItemText primary={item.label} sx={{ '& .MuiTypography-root': {
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        color: active ? '#90cdf4' : 'rgba(255,255,255,.9)',
                        fontWeight: active ? 700 : 500,
                        fontSize: { xs: '.85rem', sm: '.9rem' }, letterSpacing: '.02em',
                      }}}/>
                      {active && (
                        <Box sx={{
                          width: 6, height: 6, borderRadius: '50%',
                          background: '#0e5af0', boxShadow: '0 0 8px rgba(14,90,240,.55)', flexShrink: 0,
                        }}/>
                      )}
                    </ListItem>
                  </Link>
                )}
              </Box>
            );
          })}

          {/* Mobile CTA */}
          <Box sx={{ mt: 3, px: { xs: .25, sm: .5 } }}>
            <Link href="/contact" style={{ textDecoration: 'none', display: 'block' }}>
              <Button
                fullWidth variant="contained"
                endIcon={<NorthEast sx={{ fontSize: '1rem !important' }}/>}
                onClick={() => setMobileOpen(false)}
                sx={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  color: '#fff', textTransform: 'none',
                  fontWeight: 700, fontSize: { xs: '.85rem', sm: '.9rem' },
                  letterSpacing: '.04em',
                  py: { xs: 1.3, sm: 1.5 }, borderRadius: '12px',
                  background: 'linear-gradient(135deg, #0e5af0 0%, #2d7cf6 100%)',
                  border: '1px solid rgba(14,90,240,.3)',
                  boxShadow: '0 4px 18px rgba(14,90,240,.3)',
                  WebkitTapHighlightColor: 'transparent',
                  transition: 'transform .2s, box-shadow .2s',
                  '&:active': { transform: 'scale(.97)', boxShadow: '0 2px 8px rgba(14,90,240,.2)' },
                }}
              >Get Quote</Button>
            </Link>
          </Box>
        </List>

        {/* Drawer footer */}
        <Box sx={{
          p: { xs: 2, sm: 2.5 }, pt: 1,
          borderTop: '1px solid rgba(255,255,255,.05)',
          textAlign: 'center', flexShrink: 0,
        }}>
          <Typography sx={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: { xs: '.62rem', sm: '.7rem' },
            color: 'rgba(255,255,255,.18)', letterSpacing: '.05em', lineHeight: 1.5,
          }}>
            © Copyright 2025 DEM Technologies Private Limited.<br/>All Rights Reserved
          </Typography>
        </Box>
      </Drawer>

      {/* Spacer */}
      <Box sx={{ height: { xs: 60, sm: 66, md: 72 } }}/>
    </>
  );
};

export default Navbar;