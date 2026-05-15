'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
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

/* ─── CSS ──────────────────────────────────────────────── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=Outfit:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; }

  @keyframes nb-in   { from { opacity:0; transform:translateY(-14px) } to { opacity:1; transform:none } }
  @keyframes nb-drop { from { opacity:0; transform:translateY(6px) scale(.97) } to { opacity:1; transform:none } }
  @keyframes nb-slide{ from { opacity:0; transform:translateX(18px) } to { opacity:1; transform:none } }
  @keyframes nb-up   { from { opacity:0; transform:translateY(8px) } to { opacity:1; transform:none } }

  .nb-bar {
    position: fixed; top: 0; left: 0; right: 0; z-index: 1300;
    background: linear-gradient(180deg,rgba(5,11,26,.98) 0%,rgba(8,18,44,.92) 100%);
    border-bottom: 1px solid rgba(255,255,255,.04);
    transition: background .35s ease, border-color .35s ease, box-shadow .35s ease;
    animation: nb-in .45s cubic-bezier(.16,1,.3,1) both;
    will-change: background;
  }
  .nb-bar.scrolled {
    background: rgba(5,11,26,.94);
    backdrop-filter: blur(22px) saturate(170%);
    -webkit-backdrop-filter: blur(22px) saturate(170%);
    border-bottom: 1px solid rgba(14,90,240,.14);
    box-shadow: 0 2px 20px rgba(0,0,0,.3);
  }

  .nb-toolbar {
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 24px; min-height: 72px; gap: 16px;
  }
  @media (max-width:900px) { .nb-toolbar { min-height:66px; padding:0 20px; } }
  @media (max-width:600px) { .nb-toolbar { min-height:60px; padding:0 14px; } }

  /* Logo */
  .nb-logo {
    display: flex; align-items: center; gap: 10px;
    text-decoration: none; flex-shrink: 0;
    transition: opacity .2s, transform .22s;
  }
  .nb-logo:hover { opacity:.88; transform:scale(1.02); }
  .nb-logo:active { transform:scale(.97); }
  .nb-logo img { height:36px; width:auto; display:block; }
  @media (max-width:900px) { .nb-logo img { height:32px; } }
  @media (max-width:600px) { .nb-logo img { height:28px; } }
  .nb-logo-text {
    font-family:'Bricolage Grotesque',sans-serif;
    font-weight:800; letter-spacing:.12em; font-size:1.22rem;
    background:linear-gradient(135deg,#fff 35%,#90cdf4 100%);
    -webkit-background-clip:text; -webkit-text-fill-color:transparent;
    background-clip:text;
  }
  @media (max-width:600px) { .nb-logo-text { font-size:1rem; letter-spacing:.08em; } }
  @media (max-width:900px) { .nb-logo-text { font-size:1.1rem; } }

  /* Desktop nav */
  .nb-links { display:flex; align-items:center; flex:1; justify-content:center; }
  @media (max-width:900px) { .nb-links { display:none; } }

  .nb-btn {
    font-family:'Bricolage Grotesque',sans-serif;
    color:rgba(255,255,255,.88); background:none; border:none;
    font-size:.875rem; font-weight:500; letter-spacing:.02em;
    padding:9px 14px; border-radius:10px; cursor:pointer;
    display:flex; align-items:center; gap:4px;
    position:relative; white-space:nowrap;
    transition:color .18s, background .18s;
    text-decoration:none;
  }
  .nb-btn::after {
    content:''; position:absolute; bottom:5px; left:50%;
    transform:translateX(-50%); height:2px; width:0; border-radius:99px;
    background:linear-gradient(90deg,#0e5af0,#60a5fa);
    transition:width .28s cubic-bezier(.34,1.56,.64,1);
  }
  .nb-btn:hover, .nb-btn.active { color:#90cdf4; background:rgba(14,90,240,.08); }
  .nb-btn:hover::after, .nb-btn.active::after { width:20px; }

  .nb-chevron {
    width:16px; height:16px; color:rgba(255,255,255,.45);
    transition:transform .28s cubic-bezier(.34,1.56,.64,1), color .18s;
    flex-shrink:0;
  }
  .nb-btn.active .nb-chevron, .nb-btn:hover .nb-chevron { color:#90cdf4; }
  .nb-chevron.open { transform:rotate(180deg); }

  /* CTA button */
  .nb-cta {
    font-family:'Bricolage Grotesque',sans-serif;
    display:flex; align-items:center; gap:6px;
    color:#fff; background:linear-gradient(135deg,#0e5af0 0%,#2d7cf6 100%);
    border:1px solid rgba(14,90,240,.3); border-radius:10px;
    font-size:.875rem; font-weight:700; letter-spacing:.04em;
    padding:10px 22px; text-decoration:none; white-space:nowrap; flex-shrink:0;
    box-shadow:0 4px 18px rgba(14,90,240,.32); cursor:pointer;
    transition:transform .25s cubic-bezier(.34,1.56,.64,1), box-shadow .25s, background .2s;
  }
  .nb-cta:hover {
    background:linear-gradient(135deg,#0b48cc 0%,#1a6af2 100%);
    transform:translateY(-2px) scale(1.03);
    box-shadow:0 8px 26px rgba(14,90,240,.45);
  }
  .nb-cta:active { transform:scale(.97); box-shadow:0 2px 8px rgba(14,90,240,.22); }
  .nb-cta svg { transition:transform .22s; }
  .nb-cta:hover svg { transform:translate(2px,-2px); }
  @media (max-width:900px) { .nb-cta { display:none; } }

  /* Hamburger */
  .nb-burger {
    display:none; background:none; border:1px solid rgba(255,255,255,.12);
    border-radius:10px; padding:8px; cursor:pointer; color:#fff;
    transition:background .2s, border-color .2s, transform .18s;
    align-items:center; justify-content:center;
  }
  .nb-burger:hover { background:rgba(14,90,240,.12); border-color:rgba(14,90,240,.3); }
  .nb-burger:active { transform:scale(.92); }
  @media (max-width:900px) { .nb-burger { display:flex; } }

  /* Dropdown */
  .nb-drop {
    position:fixed; z-index:1400;
    background:linear-gradient(145deg,rgba(5,11,26,.97) 0%,rgba(8,18,44,.97) 100%);
    border:1px solid rgba(14,90,240,.18); border-radius:16px;
    min-width:232px; padding:8px;
    box-shadow:0 20px 56px rgba(0,0,0,.55);
    backdrop-filter:blur(28px); overflow:hidden;
    animation:nb-drop .18s cubic-bezier(.16,1,.3,1) both;
    transform-origin:top left;
  }
  .nb-drop-glow {
    position:absolute; top:0; left:18%; right:18%; height:1px;
    background:linear-gradient(90deg,transparent,rgba(14,90,240,.5),transparent);
  }
  .nb-drop-item {
    font-family:'Outfit',sans-serif; font-size:.875rem; font-weight:400;
    color:rgba(255,255,255,.82); padding:10px 14px; border-radius:10px;
    cursor:pointer; display:flex; align-items:center; gap:8px;
    text-decoration:none;
    transition:background .16s, color .16s, transform .16s;
  }
  .nb-drop-item:hover { background:rgba(14,90,240,.12); color:#90cdf4; transform:translateX(4px); }
  .nb-drop-item.active { color:#90cdf4; font-weight:600; }
  .nb-drop-dot {
    width:5px; height:5px; border-radius:50%; flex-shrink:0;
    background:rgba(255,255,255,.2); transition:background .16s;
  }
  .nb-drop-item.active .nb-drop-dot { background:#0e5af0; }

  /* Backdrop */
  .nb-backdrop {
    position:fixed; inset:0; z-index:1298;
    background:rgba(0,0,0,.65); backdrop-filter:blur(10px);
    opacity:0; pointer-events:none; transition:opacity .25s ease;
  }
  .nb-backdrop.open { opacity:1; pointer-events:all; }

  /* Mobile drawer */
  .nb-drawer {
    position:fixed; top:0; right:0; bottom:0; z-index:1299;
    width:300px; max-width:100vw;
    background:linear-gradient(160deg,#05091a 0%,#091428 55%,#0c1a36 100%);
    border-left:1px solid rgba(14,90,240,.12);
    box-shadow:-20px 0 60px rgba(0,0,0,.65);
    display:flex; flex-direction:column; overflow-x:hidden;
    transform:translateX(100%); transition:transform .32s cubic-bezier(.16,1,.3,1);
    overscroll-behavior:contain;
  }
  .nb-drawer.open { transform:translateX(0); }
  @media (max-width:600px) { .nb-drawer { width:100vw; border-left:none; } }
  @media (min-width:600px) and (max-width:900px) { .nb-drawer { width:340px; } }

  .nb-drawer-head {
    display:flex; align-items:center; justify-content:space-between;
    padding:18px 20px; border-bottom:1px solid rgba(255,255,255,.06);
    background:rgba(14,90,240,.04); flex-shrink:0;
  }

  .nb-close {
    background:none; border:1px solid rgba(255,255,255,.08); border-radius:8px;
    padding:7px; cursor:pointer; color:rgba(255,255,255,.55);
    display:flex; align-items:center; transition:all .18s;
  }
  .nb-close:hover { color:#fff; background:rgba(14,90,240,.1); border-color:rgba(14,90,240,.25); }
  .nb-close:active { transform:scale(.9); }

  .nb-drawer-list { padding:18px 10px; flex:1; overflow-y:auto; -webkit-overflow-scrolling:touch; }
  @media (max-width:600px) { .nb-drawer-list { padding:16px 8px; } }

  .nb-drawer-list::-webkit-scrollbar { width:3px; }
  .nb-drawer-list::-webkit-scrollbar-thumb { background:rgba(14,90,240,.25); border-radius:10px; }

  .nb-ditem {
    display:flex; align-items:center;
    padding:12px 16px; border-radius:12px; cursor:pointer;
    text-decoration:none; position:relative;
    border:1px solid transparent;
    transition:background .18s, border-color .18s;
    margin-bottom:4px;
    -webkit-tap-highlight-color:transparent;
  }
  .nb-ditem:hover { background:rgba(14,90,240,.07); border-color:rgba(14,90,240,.15); }
  .nb-ditem.active { background:rgba(14,90,240,.1); border-color:rgba(14,90,240,.22); }

  .nb-ditem-text {
    font-family:'Bricolage Grotesque',sans-serif;
    color:rgba(255,255,255,.9); font-weight:500; font-size:.875rem;
    letter-spacing:.02em; flex:1;
  }
  .nb-ditem.active .nb-ditem-text { color:#90cdf4; font-weight:700; }

  .nb-active-bar {
    position:absolute; left:0; top:50%; transform:translateY(-50%);
    width:3px; height:55%; border-radius:0 4px 4px 0;
    background:linear-gradient(180deg,#0e5af0,#60a5fa);
  }
  .nb-active-dot {
    width:6px; height:6px; border-radius:50%;
    background:#0e5af0; box-shadow:0 0 8px rgba(14,90,240,.55); flex-shrink:0;
  }

  /* Sub-menu */
  .nb-sub { overflow:hidden; transition:max-height .34s cubic-bezier(.16,1,.3,1), opacity .26s ease; }
  .nb-sub-item {
    display:flex; align-items:center; gap:10px;
    padding:9px 16px 9px 20px; border-radius:10px; cursor:pointer;
    text-decoration:none; margin-bottom:2px;
    -webkit-tap-highlight-color:transparent;
    transition:background .16s;
  }
  .nb-sub-item:hover { background:rgba(14,90,240,.07); }
  .nb-sub-dot {
    width:4px; height:4px; border-radius:50%;
    background:rgba(255,255,255,.22); flex-shrink:0; transition:all .16s;
  }
  .nb-sub-item.active .nb-sub-dot { background:#0e5af0; transform:scale(1.5); }
  .nb-sub-text {
    font-family:'Outfit',sans-serif;
    color:rgba(255,255,255,.58); font-weight:400; font-size:.84rem;
    letter-spacing:.01em;
  }
  .nb-sub-item.active .nb-sub-text { color:#90cdf4; font-weight:600; }

  /* Mobile CTA */
  .nb-mcta {
    display:flex; align-items:center; justify-content:center; gap:6px;
    margin: 12px 2px 0; padding:13px; border-radius:12px;
    font-family:'Bricolage Grotesque',sans-serif;
    color:#fff; font-weight:700; font-size:.875rem; letter-spacing:.04em;
    background:linear-gradient(135deg,#0e5af0 0%,#2d7cf6 100%);
    border:1px solid rgba(14,90,240,.3);
    box-shadow:0 4px 18px rgba(14,90,240,.3);
    text-decoration:none; cursor:pointer;
    -webkit-tap-highlight-color:transparent;
    transition:transform .18s, box-shadow .18s;
  }
  .nb-mcta:active { transform:scale(.97); box-shadow:0 2px 8px rgba(14,90,240,.2); }

  .nb-footer {
    padding:12px 20px 18px; border-top:1px solid rgba(255,255,255,.05);
    text-align:center; flex-shrink:0;
    font-family:'Outfit',sans-serif; font-size:.65rem;
    color:rgba(255,255,255,.18); letter-spacing:.05em; line-height:1.5;
  }

  .nb-spacer-72 { height:72px; }
  @media (max-width:900px) { .nb-spacer-72 { height:66px; } }
  @media (max-width:600px) { .nb-spacer-72 { height:60px; } }

  .body-lock { overflow:hidden !important; position:fixed !important; width:100% !important; }
`;

/* ─── SVG Icons ─────────────────────────────────────────── */
const ChevronDown = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 6 8 10 12 6"/>
  </svg>
);
const NorthEast = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="11" x2="11" y2="3"/>
    <polyline points="5 3 11 3 11 9"/>
  </svg>
);
const MenuIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <line x1="2" y1="5" x2="16" y2="5"/>
    <line x1="2" y1="9" x2="16" y2="9"/>
    <line x1="2" y1="13" x2="16" y2="13"/>
  </svg>
);
const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <line x1="3" y1="3" x2="13" y2="13"/>
    <line x1="13" y1="3" x2="3" y2="13"/>
  </svg>
);

/* ─── Desktop Dropdown ───────────────────────────────────── */
const DesktopDropdown: React.FC<{
  items: DropdownItem[];
  anchor: HTMLElement | null;
  pathname: string;
  onClose: () => void;
}> = ({ items, anchor, pathname, onClose }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({ top: 0, left: 0 });

  useEffect(() => {
    if (!anchor) return;
    const update = () => {
      const r = anchor.getBoundingClientRect();
      const w = 248;
      let left = r.left;
      if (left + w > window.innerWidth - 16) left = window.innerWidth - w - 16;
      if (left < 16) left = 16;
      setStyle({ top: r.bottom + 8, left });
    };
    update();
    window.addEventListener('resize', update, { passive: true });
    window.addEventListener('scroll', update, { passive: true });
    return () => { window.removeEventListener('resize', update); window.removeEventListener('scroll', update); };
  }, [anchor]);

  useEffect(() => {
    if (!anchor) return;
    const fn = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node) && !anchor.contains(e.target as Node)) onClose();
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, [anchor, onClose]);

  if (!anchor) return null;

  return (
    <div ref={ref} className="nb-drop" style={style}>
      <div className="nb-drop-glow"/>
      {items.map(opt => (
        <Link key={opt.label} href={opt.href} className={`nb-drop-item${pathname === opt.href ? ' active' : ''}`} onClick={onClose}>
          <span className="nb-drop-dot"/>
          {opt.label}
        </Link>
      ))}
    </div>
  );
};

/* ─── Navbar ─────────────────────────────────────────────── */
const Navbar: React.FC = () => {
  const [anchor, setAnchor]       = useState<HTMLElement | null>(null);
  const [openDrop, setOpenDrop]   = useState('');
  const [drawerOpen, setDrawer]   = useState(false);
  const [expanded, setExpanded]   = useState('');
  const [scrolled, setScrolled]   = useState(false);
  const pathname                  = usePathname();

  /* scroll listener */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  /* body lock */
  useEffect(() => {
    document.body.classList.toggle('body-lock', drawerOpen);
    return () => document.body.classList.remove('body-lock');
  }, [drawerOpen]);

  /* close everything on route change */
  useEffect(() => {
    setAnchor(null); setOpenDrop('');
    setDrawer(false); setExpanded('');
  }, [pathname]);

  const isActive = useCallback((item: NavItem) => {
    if (item.href && pathname === item.href) return true;
    if (item.dropdownItems) return item.dropdownItems.some(d => pathname === d.href);
    return false;
  }, [pathname]);

  const toggleDrop = (e: React.MouseEvent<HTMLElement>, label: string) => {
    if (openDrop === label) { setAnchor(null); setOpenDrop(''); }
    else { setAnchor(e.currentTarget); setOpenDrop(label); }
  };
  const closeDrop = useCallback(() => { setAnchor(null); setOpenDrop(''); }, []);
  const closeDrawer = useCallback(() => setDrawer(false), []);

  const currentItem = navItems.find(i => i.label === openDrop);

  return (
    <>
      <style>{css}</style>

      {/* ── AppBar ── */}
      <nav className={`nb-bar${scrolled ? ' scrolled' : ''}`}>
        <div className="nb-toolbar">

          {/* Logo */}
          <Link href="/" className="nb-logo">
            <img src="/logo.png" alt="Bendra"/>
            <span className="nb-logo-text">BENDRA</span>
          </Link>

          {/* Desktop links */}
          <div className="nb-links">
            {navItems.map(item => {
              const active = isActive(item);
              const isOpen = openDrop === item.label;
              return item.hasDropdown ? (
                <button
                  key={item.label}
                  className={`nb-btn${active || isOpen ? ' active' : ''}`}
                  onClick={e => toggleDrop(e, item.label)}
                >
                  {item.label}
                  <ChevronDown className={`nb-chevron${isOpen ? ' open' : ''}`}/>
                </button>
              ) : (
                <Link key={item.label} href={item.href!} className={`nb-btn${active ? ' active' : ''}`}>
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <Link href="/contact" className="nb-cta">
            Get Quote <NorthEast/>
          </Link>

          {/* Hamburger */}
          <button className="nb-burger" onClick={() => setDrawer(true)} aria-label="Open menu">
            <MenuIcon/>
          </button>
        </div>
      </nav>

      {/* Desktop dropdown */}
      <DesktopDropdown
        items={currentItem?.dropdownItems || []}
        anchor={anchor}
        pathname={pathname}
        onClose={closeDrop}
      />

      {/* ── Mobile Drawer ── */}
      <div className={`nb-backdrop${drawerOpen ? ' open' : ''}`} onClick={closeDrawer}/>

      <div className={`nb-drawer${drawerOpen ? ' open' : ''}`} role="dialog" aria-modal="true">
        {/* Header */}
        <div className="nb-drawer-head">
          <Link href="/" className="nb-logo" onClick={closeDrawer}>
            <img src="/logo.png" alt="Bendra"/>
            <span className="nb-logo-text">BENDRA</span>
          </Link>
          <button className="nb-close" onClick={closeDrawer} aria-label="Close menu">
            <CloseIcon/>
          </button>
        </div>

        {/* Nav list */}
        <div className="nb-drawer-list">
          {navItems.map(item => {
            const active = isActive(item);
            const isExp  = expanded === item.label;
            return (
              <div key={item.label}>
                {item.hasDropdown ? (
                  <>
                    <div
                      className={`nb-ditem${active ? ' active' : ''}`}
                      onClick={() => setExpanded(isExp ? '' : item.label)}
                    >
                      <span className="nb-ditem-text">{item.label}</span>
                      <ChevronDown className={`nb-chevron${isExp ? ' open' : ''}`}/>
                    </div>
                    <div className="nb-sub" style={{ maxHeight: isExp ? '400px' : '0', opacity: isExp ? 1 : 0, paddingLeft: 4, marginTop: isExp ? 2 : 0 }}>
                      {item.dropdownItems?.map(sub => (
                        <Link key={sub.label} href={sub.href} className={`nb-sub-item${pathname === sub.href ? ' active' : ''}`} onClick={closeDrawer}>
                          <span className="nb-sub-dot"/>
                          <span className="nb-sub-text">{sub.label}</span>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link href={item.href!} className={`nb-ditem${active ? ' active' : ''}`} onClick={closeDrawer}>
                    {active && <span className="nb-active-bar"/>}
                    <span className="nb-ditem-text">{item.label}</span>
                    {active && <span className="nb-active-dot"/>}
                  </Link>
                )}
              </div>
            );
          })}

          {/* Mobile CTA */}
          <Link href="/contact" className="nb-mcta" onClick={closeDrawer}>
            Get Quote <NorthEast/>
          </Link>
        </div>

        {/* Footer */}
        <div className="nb-footer">
          © Copyright 2025 DEM Technologies Private Limited.<br/>All Rights Reserved
        </div>
      </div>

      {/* Spacer */}
      <div className="nb-spacer-72"/>
    </>
  );
};

export default Navbar;