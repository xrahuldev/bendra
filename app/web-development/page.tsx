'use client';

import React, { useState } from 'react';
import { Box, Button, Container, Typography, Chip, IconButton } from '@mui/material';
import {
  ArrowForward,
  Code,
  Speed,
  Devices,
  Storage,
  Security,
  Api,
  CheckCircle,
  TrendingUp,
  Groups,
  Timer,
  Verified,
  Star,
  FormatQuote,
  ChevronLeft,
  ChevronRight,
  Bolt,
  Language,
  ShoppingCart,
  Dashboard,
  Web,
  Terminal,
  Dns,
  BugReport,
  RocketLaunch,
  Brush,
} from '@mui/icons-material';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const f = "'Poppins', sans-serif";
const glass = {
  background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '20px',
};
const ac = '#3b82f6';

export default function WebDevelopmentPage() {
  const [activeStack, setActiveStack] = useState(0);
  const [tIdx, setTIdx] = useState(0);

  const services = [
    { icon: <Language />, title: 'Corporate Websites', desc: 'Fast, SEO-optimized corporate sites that establish credibility and generate leads.', color: ac },
    { icon: <ShoppingCart />, title: 'E-Commerce Platforms', desc: 'High-converting online stores with payments, inventory, and order management.', color: '#10b981' },
    { icon: <Dashboard />, title: 'Web Applications', desc: 'Complex SaaS dashboards, admin panels, and data-driven web platforms.', color: '#a855f7' },
    { icon: <Api />, title: 'API Development', desc: 'RESTful & GraphQL APIs with authentication, rate limiting, and documentation.', color: '#f59e0b' },
    { icon: <Web />, title: 'Progressive Web Apps', desc: 'Installable, offline-capable PWAs that work like native apps in browsers.', color: '#ec4899' },
    { icon: <Dns />, title: 'CMS Development', desc: 'Custom WordPress, Strapi, or headless CMS solutions for content management.', color: '#06b6d4' },
  ];

  const stacks = [
    {
      name: 'Next.js + React',
      icon: '⚛️',
      desc: 'Our go-to stack for production-grade web applications with SSR, ISR, and API routes.',
      techs: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Prisma ORM', 'Vercel'],
      best: 'SaaS, dashboards, high-performance sites',
      color: '#61dafb',
    },
    {
      name: 'MERN Stack',
      icon: '🟢',
      desc: 'Full JavaScript stack with MongoDB, Express, React, and Node.js for dynamic apps.',
      techs: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io', 'AWS'],
      best: 'Real-time apps, marketplaces, social platforms',
      color: '#68A063',
    },
    {
      name: 'Python + Django',
      icon: '🐍',
      desc: 'Robust backend framework for data-heavy applications with built-in admin and ORM.',
      techs: ['Python 3', 'Django/FastAPI', 'PostgreSQL', 'Celery', 'Redis', 'Docker'],
      best: 'FinTech, analytics, AI-powered platforms',
      color: '#3776AB',
    },
  ];

  const process = [
    { icon: <Brush />, step: '01', title: 'Discovery & Planning', desc: 'Requirements gathering, sitemap, user flows, and technical architecture.', duration: 'Week 1' },
    { icon: <Devices />, step: '02', title: 'UI/UX Design', desc: 'Wireframes, mockups, responsive design, and interactive prototype.', duration: 'Week 2-3' },
    { icon: <Code />, step: '03', title: 'Frontend Development', desc: 'Pixel-perfect responsive frontend with animations and interactions.', duration: 'Week 3-6' },
    { icon: <Terminal />, step: '04', title: 'Backend & APIs', desc: 'Server-side logic, database, APIs, authentication, and integrations.', duration: 'Week 4-7' },
    { icon: <BugReport />, step: '05', title: 'Testing & QA', desc: 'Cross-browser testing, performance audit, security review, and bug fixes.', duration: 'Week 7-8' },
    { icon: <RocketLaunch />, step: '06', title: 'Launch & Support', desc: 'Deployment, DNS setup, SSL, monitoring, and ongoing maintenance.', duration: 'Week 8+' },
  ];

  const projects = [
    {
      title: 'FinTech Dashboard',
      desc: 'Real-time trading dashboard processing $50M+ monthly with live charts and analytics.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      metrics: { users: '25K+', uptime: '99.99%', speed: '<1.2s' },
      tags: ['Next.js', 'WebSocket', 'D3.js'],
    },
    {
      title: 'Multi-Vendor Marketplace',
      desc: 'E-commerce platform with 500+ vendors, AI search, and multi-currency support.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      metrics: { orders: '2K+/day', vendors: '500+', gmv: '$2M/mo' },
      tags: ['React', 'Node.js', 'Stripe'],
    },
    {
      title: 'Healthcare Portal',
      desc: 'Patient management portal for 15 hospitals with telemedicine and EHR integration.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      metrics: { hospitals: '15', patients: '100K+', rating: '4.8★' },
      tags: ['Django', 'React', 'AWS'],
    },
  ];

  const plans = [
    {
      name: 'Basic', emoji: '🌐', price: '$3,999',
      desc: 'Professional business website',
      features: ['Up to 8 Pages', 'Responsive Design', 'Basic SEO Setup', 'Contact Form', 'CMS Integration', '1 Month Support'],
      popular: false,
    },
    {
      name: 'Professional', emoji: '🚀', price: '$12,999',
      desc: 'Full-featured web application',
      features: ['Up to 25 Pages/Screens', 'Custom UI/UX Design', 'User Authentication', 'Admin Dashboard', 'API Integrations', '3 Months Support'],
      popular: true,
    },
    {
      name: 'Enterprise', emoji: '⚡', price: '$29,999+',
      desc: 'Complex platforms & SaaS',
      features: ['Unlimited Pages', 'Advanced Architecture', 'Real-Time Features', 'AI/ML Integration', 'Dedicated Team', '6 Months Support + SLA'],
      popular: false,
    },
  ];

  const stats = [
    { icon: <Code />, num: '200+', label: 'Websites Built' },
    { icon: <Speed />, num: '<1.5s', label: 'Avg Load Time' },
    { icon: <Verified />, num: '99.9%', label: 'Uptime' },
    { icon: <Groups />, num: '95%', label: 'Client Satisfaction' },
  ];

  const testimonials = [
    { name: 'James Wilson', role: 'CTO, PayStream', text: 'Bendra built our FinTech dashboard handling $50M monthly. The performance and reliability are outstanding. Best web dev team we\'ve worked with.', rating: 5 },
    { name: 'Aisha Rahman', role: 'CEO, MarketHub', text: 'Our marketplace went from concept to 500 vendors in 6 months. The code quality and architecture decisions were spot-on for scale.', rating: 5 },
    { name: 'Dr. Ayesha Khan', role: 'CIO, MedCare', text: 'The patient portal they built serves 100K+ patients across 15 hospitals flawlessly. HIPAA compliant and beautifully designed.', rating: 5 },
  ];

  return (
    <>
      <Navbar />
      <Box sx={{ backgroundColor: '#050d1a', fontFamily: f, position: 'relative', overflow: 'hidden' }}>

        {[
          { top: '3%', left: '-8%', color: '59,130,246' },
          { top: '40%', right: '-8%', color: '168,85,247' },
          { bottom: '15%', left: '25%', color: '16,185,129' },
        ].map((g, i) => (
          <Box key={i} sx={{ position: 'absolute', ...g, width: 500, height: 500, background: `radial-gradient(circle, rgba(${g.color},0.12), transparent 70%)`, filter: 'blur(80px)', pointerEvents: 'none' }} />
        ))}

        {/* ===== HERO ===== */}
        <Box sx={{ pt: { xs: 14, md: 18 }, pb: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
            <Chip icon={<Code sx={{ color: `${ac} !important`, fontSize: 18 }} />} label="WEB DEVELOPMENT" sx={{ fontFamily: f, fontWeight: 600, fontSize: '0.78rem', letterSpacing: 1.5, mb: 3, backgroundColor: `${ac}20`, color: ac, border: `1px solid ${ac}50`, borderRadius: '8px', py: 2.2 }} />

            <Typography variant="h1" sx={{ fontFamily: f, color: '#fff', fontWeight: 800, fontSize: { xs: '2.2rem', sm: '3rem', md: '3.8rem' }, lineHeight: 1.15, mb: 3 }}>
              Websites that{' '}
              <Box component="span" sx={{ background: `linear-gradient(90deg, ${ac}, #60a5fa)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                perform & convert.
              </Box>
            </Typography>

            <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.7)', fontSize: { xs: '1rem', md: '1.15rem' }, maxWidth: 650, mx: 'auto', lineHeight: 1.7, mb: 5 }}>
              We build fast, secure, and scalable web experiences — from corporate websites and e-commerce stores to complex SaaS platforms and real-time dashboards.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 6 }}>
              <Button variant="contained" endIcon={<ArrowForward />} sx={{ fontFamily: f, background: `linear-gradient(90deg, ${ac}, #2563eb)`, color: '#fff', textTransform: 'none', fontWeight: 700, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '10px', boxShadow: `0 4px 20px ${ac}60`, '&:hover': { transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>
                Start My Project
              </Button>
              <Button variant="outlined" sx={{ fontFamily: f, color: '#fff', borderColor: 'rgba(255,255,255,0.3)', textTransform: 'none', fontWeight: 600, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '10px', '&:hover': { borderColor: ac, backgroundColor: `${ac}15`, transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>
                View Portfolio
              </Button>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2,1fr)', md: 'repeat(4,1fr)' }, gap: 2.5, maxWidth: 850, mx: 'auto' }}>
              {stats.map((s, i) => (
                <Box key={i} sx={{ ...glass, p: 2.5, textAlign: 'center', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-4px)', borderColor: `${ac}40` } }}>
                  <Box sx={{ color: ac, mb: 0.8, '& .MuiSvgIcon-root': { fontSize: 26 } }}>{s.icon}</Box>
                  <Typography sx={{ fontFamily: f, color: '#fff', fontWeight: 800, fontSize: '1.6rem', lineHeight: 1 }}>{s.num}</Typography>
                  <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', mt: 0.5 }}>{s.label}</Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* ===== SERVICES ===== */}
        <Box sx={{ py: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography sx={{ fontFamily: f, color: ac, fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>What We Build</Typography>
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                Web solutions for{' '}
                <Box component="span" sx={{ color: ac }}>every need</Box>
              </Typography>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' }, gap: 3 }}>
              {services.map((s, i) => (
                <Box key={i} sx={{ ...glass, p: 4, transition: 'all 0.4s ease', cursor: 'pointer', '&:hover': { transform: 'translateY(-8px)', borderColor: `${s.color}40`, '& .ic': { transform: 'scale(1.1) rotate(5deg)' } } }}>
                  <Box className="ic" sx={{ width: 56, height: 56, borderRadius: '14px', background: `linear-gradient(135deg, ${s.color}, ${s.color}99)`, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2.5, transition: 'all 0.4s ease', boxShadow: `0 4px 14px ${s.color}30`, '& .MuiSvgIcon-root': { color: '#fff', fontSize: 28 } }}>
                    {s.icon}
                  </Box>
                  <Typography sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: '1.1rem', mb: 1 }}>{s.title}</Typography>
                  <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', lineHeight: 1.6 }}>{s.desc}</Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* ===== TECH STACK ===== */}
        <Box sx={{ py: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography sx={{ fontFamily: f, color: ac, fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>Tech Stack</Typography>
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                Built with the best technologies
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, mb: 5, flexWrap: 'wrap' }}>
              {stacks.map((s, i) => (
                <Chip key={i} label={`${s.icon} ${s.name}`} onClick={() => setActiveStack(i)} sx={{ fontFamily: f, fontWeight: 600, fontSize: '0.88rem', px: 2, py: 2.5, borderRadius: '10px', cursor: 'pointer', transition: 'all 0.3s ease', backgroundColor: activeStack === i ? s.color : 'rgba(255,255,255,0.05)', color: '#fff', border: `1px solid ${activeStack === i ? s.color : 'rgba(255,255,255,0.1)'}`, '&:hover': { transform: 'translateY(-2px)' } }} />
              ))}
            </Box>

            <Box sx={{ ...glass, p: { xs: 3, md: 5 }, maxWidth: 850, mx: 'auto' }}>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
                <Box sx={{ flex: 1 }}>
                  <Chip label={`Best for: ${stacks[activeStack].best}`} size="small" sx={{ fontFamily: f, fontSize: '0.75rem', fontWeight: 600, backgroundColor: `${stacks[activeStack].color}20`, color: stacks[activeStack].color, borderRadius: '6px', mb: 2 }} />
                  <Typography sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: '1.5rem', mb: 1.5 }}>{stacks[activeStack].icon} {stacks[activeStack].name}</Typography>
                  <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.7, mb: 3 }}>{stacks[activeStack].desc}</Typography>
                  <Button variant="contained" endIcon={<ArrowForward />} sx={{ fontFamily: f, background: `linear-gradient(90deg, ${stacks[activeStack].color}, ${stacks[activeStack].color}cc)`, color: '#fff', textTransform: 'none', fontWeight: 600, px: 3, py: 1.2, borderRadius: '10px', '&:hover': { transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>
                    Discuss My Project
                  </Button>
                </Box>
                <Box sx={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 2 }}>
                  {stacks[activeStack].techs.map((tech, ti) => (
                    <Box key={ti} sx={{ display: 'flex', gap: 1, alignItems: 'center', p: 1.5, borderRadius: '10px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <CheckCircle sx={{ fontSize: 18, color: stacks[activeStack].color }} />
                      <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', fontWeight: 500 }}>{tech}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* ===== PROCESS ===== */}
        <Box sx={{ py: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography sx={{ fontFamily: f, color: ac, fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>Our Process</Typography>
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                From concept to{' '}
                <Box component="span" sx={{ color: ac }}>production</Box>
              </Typography>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' }, gap: 3 }}>
              {process.map((p, i) => (
                <Box key={i} sx={{ ...glass, p: 3.5, position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-6px)', borderColor: `${ac}40` } }}>
                  <Typography sx={{ position: 'absolute', top: -10, right: 12, fontFamily: f, fontSize: '5rem', fontWeight: 900, color: `${ac}08`, lineHeight: 1, pointerEvents: 'none' }}>{p.step}</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                    <Box sx={{ width: 42, height: 42, borderRadius: '10px', background: `${ac}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', '& .MuiSvgIcon-root': { color: ac, fontSize: 22 } }}>{p.icon}</Box>
                    <Chip label={p.duration} size="small" sx={{ fontFamily: f, fontSize: '0.72rem', fontWeight: 600, height: 24, backgroundColor: `${ac}12`, color: ac, borderRadius: '6px' }} />
                  </Box>
                  <Typography sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: '1.05rem', mb: 1, position: 'relative' }}>{p.title}</Typography>
                  <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', lineHeight: 1.5, position: 'relative' }}>{p.desc}</Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* ===== PROJECTS ===== */}
        <Box sx={{ py: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography sx={{ fontFamily: f, color: ac, fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>Recent Projects</Typography>
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                Websites we&apos;ve launched
              </Typography>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3,1fr)' }, gap: 3 }}>
              {projects.map((p, i) => (
                <Box key={i} sx={{ ...glass, overflow: 'hidden', transition: 'all 0.4s ease', cursor: 'pointer', '&:hover': { transform: 'translateY(-8px)', borderColor: `${ac}40`, '& .pimg': { transform: 'scale(1.08)' } } }}>
                  <Box sx={{ height: 200, overflow: 'hidden', position: 'relative' }}>
                    <Box className="pimg" sx={{ position: 'absolute', inset: 0, backgroundImage: `url(${p.image})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.6s ease' }} />
                    <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(5,13,26,0.8) 0%, transparent 50%)' }} />
                  </Box>
                  <Box sx={{ p: 3 }}>
                    <Typography sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: '1.15rem', mb: 1 }}>{p.title}</Typography>
                    <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', lineHeight: 1.5, mb: 2.5 }}>{p.desc}</Typography>
                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1.5, mb: 2.5 }}>
                      {Object.entries(p.metrics).map(([key, val]) => (
                        <Box key={key} sx={{ textAlign: 'center', p: 1, borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <Typography sx={{ fontFamily: f, color: ac, fontWeight: 700, fontSize: '0.95rem' }}>{val}</Typography>
                          <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem', textTransform: 'capitalize' }}>{key}</Typography>
                        </Box>
                      ))}
                    </Box>
                    <Box sx={{ display: 'flex', gap: 0.8, flexWrap: 'wrap' }}>
                      {p.tags.map((tag) => (
                        <Chip key={tag} label={tag} size="small" sx={{ fontFamily: f, fontSize: '0.72rem', fontWeight: 500, height: 24, backgroundColor: `${ac}15`, color: '#60a5fa', borderRadius: '6px' }} />
                      ))}
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* ===== PRICING ===== */}
        <Box sx={{ py: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography sx={{ fontFamily: f, color: ac, fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>Pricing</Typography>
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                Web development packages
              </Typography>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3,1fr)' }, gap: 3 }}>
              {plans.map((p, i) => (
                <Box key={i} sx={{ ...glass, p: 4, position: 'relative', overflow: 'hidden', transition: 'all 0.4s ease', ...(p.popular && { borderColor: `${ac}50`, background: `linear-gradient(135deg, ${ac}12, ${ac}05)` }), '&:hover': { transform: 'translateY(-8px)', borderColor: `${ac}50` } }}>
                  {p.popular && <Chip icon={<Bolt sx={{ color: '#fff !important', fontSize: 16 }} />} label="Most Popular" sx={{ position: 'absolute', top: 16, right: 16, fontFamily: f, fontWeight: 600, fontSize: '0.72rem', backgroundColor: ac, color: '#fff', borderRadius: '6px', height: 26 }} />}
                  <Typography sx={{ fontSize: '2rem', mb: 1 }}>{p.emoji}</Typography>
                  <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', fontWeight: 500, mb: 0.5 }}>{p.name}</Typography>
                  <Typography sx={{ fontFamily: f, color: '#fff', fontWeight: 800, fontSize: '2.5rem', mb: 0.5 }}>{p.price}</Typography>
                  <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', mb: 3 }}>{p.desc}</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3 }}>
                    {p.features.map((feat, fi) => (
                      <Box key={fi} sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                        <CheckCircle sx={{ fontSize: 18, color: p.popular ? ac : '#10b981' }} />
                        <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.75)', fontSize: '0.88rem' }}>{feat}</Typography>
                      </Box>
                    ))}
                  </Box>
                  <Button fullWidth variant={p.popular ? 'contained' : 'outlined'} endIcon={<ArrowForward />} sx={{ fontFamily: f, textTransform: 'none', fontWeight: 600, py: 1.3, borderRadius: '10px', transition: 'all 0.3s ease', ...(p.popular ? { background: `linear-gradient(90deg, ${ac}, #2563eb)`, color: '#fff', boxShadow: `0 4px 14px ${ac}40` } : { color: '#fff', borderColor: 'rgba(255,255,255,0.2)', '&:hover': { borderColor: ac, backgroundColor: `${ac}15` } }), '&:hover': { transform: 'translateY(-2px)' } }}>
                    Get Started
                  </Button>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* ===== TESTIMONIALS ===== */}
        <Box sx={{ py: { xs: 6, md: 8 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="md">
            <Box sx={{ ...glass, p: { xs: 3, md: 5 }, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <Box sx={{ position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)', width: 300, height: 300, background: `radial-gradient(circle, ${ac}20, transparent 70%)`, filter: 'blur(40px)', pointerEvents: 'none' }} />
              <FormatQuote sx={{ fontSize: 44, color: `${ac}40`, transform: 'rotate(180deg)', position: 'relative', mb: 1 }} />
              <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.85)', fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.8, fontStyle: 'italic', maxWidth: 550, mx: 'auto', mb: 2.5, position: 'relative' }}>&ldquo;{testimonials[tIdx].text}&rdquo;</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.5, mb: 2 }}>{Array.from({ length: testimonials[tIdx].rating }).map((_, i) => (<Star key={i} sx={{ color: '#f59e0b', fontSize: 20 }} />))}</Box>
              <Typography sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: '1rem', position: 'relative' }}>{testimonials[tIdx].name}</Typography>
              <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', position: 'relative' }}>{testimonials[tIdx].role}</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, mt: 3 }}>
                <IconButton onClick={() => setTIdx((p) => (p === 0 ? testimonials.length - 1 : p - 1))} sx={{ border: '1px solid rgba(255,255,255,0.1)', color: '#fff', '&:hover': { backgroundColor: ac, borderColor: ac } }}><ChevronLeft /></IconButton>
                <IconButton onClick={() => setTIdx((p) => (p === testimonials.length - 1 ? 0 : p + 1))} sx={{ border: '1px solid rgba(255,255,255,0.1)', color: '#fff', '&:hover': { backgroundColor: ac, borderColor: ac } }}><ChevronRight /></IconButton>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* ===== CTA ===== */}
        <Box sx={{ py: { xs: 6, md: 8 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="md">
            <Box sx={{ ...glass, background: `linear-gradient(135deg, ${ac}15, ${ac}05)`, borderColor: `${ac}40`, p: { xs: 4, md: 6 }, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <Box sx={{ position: 'absolute', top: '-30%', right: '-15%', width: 350, height: 350, background: `radial-gradient(circle, ${ac}25, transparent 70%)`, filter: 'blur(50px)', pointerEvents: 'none' }} />
              <Code sx={{ fontSize: 48, color: ac, mb: 2, position: 'relative' }} />
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' }, mb: 2, position: 'relative' }}>Ready to build your website?</Typography>
              <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.65)', fontSize: '1rem', mb: 4, lineHeight: 1.7, maxWidth: 500, mx: 'auto', position: 'relative' }}>Get a free project estimate. We&apos;ll analyze your requirements and recommend the best approach.</Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
                <Button variant="contained" endIcon={<ArrowForward />} sx={{ fontFamily: f, background: `linear-gradient(90deg, ${ac}, #2563eb)`, color: '#fff', textTransform: 'none', fontWeight: 700, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '10px', boxShadow: `0 4px 20px ${ac}50`, '&:hover': { transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>Get Free Estimate</Button>
                <Button variant="outlined" sx={{ fontFamily: f, color: '#fff', borderColor: 'rgba(255,255,255,0.3)', textTransform: 'none', fontWeight: 600, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '10px', '&:hover': { borderColor: ac, backgroundColor: `${ac}15`, transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>View Portfolio</Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  );
}