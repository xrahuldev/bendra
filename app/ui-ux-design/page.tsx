'use client';

import React, { useState } from 'react';
import { Box, Button, Container, Typography, Chip, IconButton } from '@mui/material';
import {
  ArrowForward,
  Brush,
  Palette,
  DesignServices,
  Devices,
  Psychology,
  TouchApp,
  CheckCircle,
  TrendingUp,
  Groups,
  Verified,
  Star,
  FormatQuote,
  ChevronLeft,
  ChevronRight,
  Bolt,
  GridView,
  AutoAwesome,
  Visibility,
  ColorLens,
  Animation,
  Draw,
  Interests,
  EmojiObjects,
  Layers,
} from '@mui/icons-material';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const f = "'Poppins', sans-serif";
const glass = {
  background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '20px',
};
const ac = '#e11d48'; // rose/red accent

export default function UIUXPage() {
  const [tIdx, setTIdx] = useState(0);
  const [activePhase, setActivePhase] = useState(0);

  const services = [
    { icon: <Psychology />, title: 'UX Research', desc: 'User interviews, personas, journey mapping, and competitive analysis to understand your audience deeply.', color: ac },
    { icon: <GridView />, title: 'Wireframing', desc: 'Low-fidelity wireframes and user flows that define structure before visual design begins.', color: '#3b82f6' },
    { icon: <Palette />, title: 'Visual Design', desc: 'Stunning high-fidelity mockups with brand-aligned typography, colors, and imagery.', color: '#a855f7' },
    { icon: <TouchApp />, title: 'Interaction Design', desc: 'Micro-interactions, animations, and transitions that make interfaces feel alive.', color: '#10b981' },
    { icon: <Devices />, title: 'Responsive Design', desc: 'Pixel-perfect designs for mobile, tablet, desktop, and large screens.', color: '#f59e0b' },
    { icon: <Layers />, title: 'Design Systems', desc: 'Scalable component libraries, style guides, and design tokens for consistency.', color: '#06b6d4' },
  ];

  const phases = [
    {
      name: 'Research',
      icon: '🔍',
      steps: [
        { title: 'Stakeholder Interviews', desc: 'Understand business goals and constraints' },
        { title: 'User Research', desc: 'Surveys, interviews, and behavior analysis' },
        { title: 'Competitor Audit', desc: 'Analyze 5-10 competitors for gaps and opportunities' },
        { title: 'Persona Creation', desc: 'Define 2-4 user personas with goals and pain points' },
      ],
      duration: 'Week 1-2',
      color: ac,
    },
    {
      name: 'Define',
      icon: '🎯',
      steps: [
        { title: 'User Journeys', desc: 'Map complete user flows from entry to conversion' },
        { title: 'Information Architecture', desc: 'Organize content and navigation structure' },
        { title: 'Wireframes', desc: 'Low-fidelity layouts for key screens' },
        { title: 'Usability Testing', desc: 'Validate wireframes with real users' },
      ],
      duration: 'Week 2-3',
      color: '#3b82f6',
    },
    {
      name: 'Design',
      icon: '🎨',
      steps: [
        { title: 'Mood Board & Style', desc: 'Visual direction, colors, typography selection' },
        { title: 'High-Fidelity Mockups', desc: 'Pixel-perfect designs for all screens' },
        { title: 'Interactive Prototype', desc: 'Clickable Figma prototype for testing' },
        { title: 'Design System', desc: 'Reusable component library for developers' },
      ],
      duration: 'Week 3-5',
      color: '#a855f7',
    },
    {
      name: 'Deliver',
      icon: '🚀',
      steps: [
        { title: 'Developer Handoff', desc: 'Specs, assets, and Figma dev mode access' },
        { title: 'Animation Specs', desc: 'Detailed interaction and animation guidelines' },
        { title: 'QA Review', desc: 'Design review during development sprints' },
        { title: 'Iteration', desc: 'Post-launch feedback and design updates' },
      ],
      duration: 'Week 5-6',
      color: '#10b981',
    },
  ];

  const tools = [
    { name: 'Figma', emoji: '🎨', desc: 'Primary design & prototyping' },
    { name: 'Framer', emoji: '⚡', desc: 'Advanced animations & interactions' },
    { name: 'Maze', emoji: '🧪', desc: 'Usability testing & analytics' },
    { name: 'Hotjar', emoji: '🔥', desc: 'Heatmaps & session recordings' },
    { name: 'Principle', emoji: '🎬', desc: 'Motion design & transitions' },
    { name: 'Zeplin', emoji: '📐', desc: 'Developer handoff & specs' },
  ];

  const portfolio = [
    {
      title: 'Banking App Redesign',
      desc: 'Complete UX overhaul for a mobile banking app serving 500K+ users, resulting in 40% increase in daily active users.',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      metrics: { dau: '+40%', nps: '72', screens: '65+' },
      tags: ['Mobile', 'FinTech', 'Redesign'],
    },
    {
      title: 'SaaS Dashboard',
      desc: 'Data-rich analytics dashboard with complex data visualization, dark/light themes, and role-based views.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      metrics: { adoption: '95%', time: '-30%', screens: '40+' },
      tags: ['Web App', 'Analytics', 'Design System'],
    },
    {
      title: 'E-Commerce Experience',
      desc: 'Luxury fashion marketplace with immersive product views, AR try-on, and seamless checkout flow.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      metrics: { conversion: '+35%', bounce: '-25%', screens: '50+' },
      tags: ['E-Commerce', 'Mobile', 'AR'],
    },
  ];

  const plans = [
    {
      name: 'Essential', emoji: '✏️', price: '$2,999',
      desc: 'Clean UI for small projects',
      features: ['Up to 10 Screens', 'Mobile OR Desktop', 'Basic Wireframes', 'Figma Deliverables', 'Style Guide', '1 Revision Round'],
      popular: false,
    },
    {
      name: 'Premium', emoji: '🎨', price: '$8,999',
      desc: 'Full UX/UI for products',
      features: ['Up to 30 Screens', 'Mobile + Desktop', 'UX Research & Personas', 'Interactive Prototype', 'Design System', '3 Revision Rounds'],
      popular: true,
    },
    {
      name: 'Complete', emoji: '💎', price: '$19,999+',
      desc: 'End-to-end design partnership',
      features: ['Unlimited Screens', 'All Platforms', 'Full UX Research Sprint', 'Usability Testing', 'Motion Design', 'Ongoing Design Support'],
      popular: false,
    },
  ];

  const stats = [
    { icon: <Brush />, num: '300+', label: 'Designs Delivered' },
    { icon: <TrendingUp />, num: '35%', label: 'Avg Conversion Lift' },
    { icon: <Verified />, num: '98%', label: 'Client Approval Rate' },
    { icon: <Groups />, num: '120+', label: 'Brands Designed' },
  ];

  const testimonials = [
    { name: 'Sarah Johnson', role: 'CPO, FinanceApp', text: 'Bendra\'s UX research uncovered insights we never knew about our users. The redesign increased our DAU by 40% and NPS from 32 to 72. Transformative work!', rating: 5 },
    { name: 'Aisha Rahman', role: 'CEO, LuxeFashion', text: 'The e-commerce design they created is absolutely stunning. Our conversion rate jumped 35% and customers constantly compliment our app experience.', rating: 5 },
    { name: 'Mark Thompson', role: 'VP Product, DataHub', text: 'They turned our complex analytics dashboard into something beautiful and intuitive. 95% adoption rate from our team on day one!', rating: 5 },
  ];

  return (
    <>
      <Navbar />
      <Box sx={{ backgroundColor: '#050d1a', fontFamily: f, position: 'relative', overflow: 'hidden' }}>

        {[
          { top: '3%', left: '-8%', color: '225,29,72' },
          { top: '40%', right: '-8%', color: '168,85,247' },
          { bottom: '15%', left: '25%', color: '59,130,246' },
        ].map((g, i) => (
          <Box key={i} sx={{ position: 'absolute', ...g, width: 500, height: 500, background: `radial-gradient(circle, rgba(${g.color},0.12), transparent 70%)`, filter: 'blur(80px)', pointerEvents: 'none' }} />
        ))}

        {/* ===== HERO ===== */}
        <Box sx={{ pt: { xs: 14, md: 18 }, pb: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
            <Chip icon={<DesignServices sx={{ color: `${ac} !important`, fontSize: 18 }} />} label="UI/UX DESIGN" sx={{ fontFamily: f, fontWeight: 600, fontSize: '0.78rem', letterSpacing: 1.5, mb: 3, backgroundColor: `${ac}20`, color: ac, border: `1px solid ${ac}50`, borderRadius: '8px', py: 2.2 }} />

            <Typography variant="h1" sx={{ fontFamily: f, color: '#fff', fontWeight: 800, fontSize: { xs: '2.2rem', sm: '3rem', md: '3.8rem' }, lineHeight: 1.15, mb: 3 }}>
              Design that users{' '}
              <Box component="span" sx={{ background: `linear-gradient(90deg, ${ac}, #fb7185)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                fall in love with.
              </Box>
            </Typography>

            <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.7)', fontSize: { xs: '1rem', md: '1.15rem' }, maxWidth: 660, mx: 'auto', lineHeight: 1.7, mb: 5 }}>
              We create beautiful, intuitive, and conversion-focused digital experiences. From research and wireframing to pixel-perfect UI and design systems — we make products people love to use.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 6 }}>
              <Button variant="contained" endIcon={<ArrowForward />} sx={{ fontFamily: f, background: `linear-gradient(90deg, ${ac}, #be123c)`, color: '#fff', textTransform: 'none', fontWeight: 700, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '10px', boxShadow: `0 4px 20px ${ac}60`, '&:hover': { transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>
                Start My Design Project
              </Button>
              <Button variant="outlined" sx={{ fontFamily: f, color: '#fff', borderColor: 'rgba(255,255,255,0.3)', textTransform: 'none', fontWeight: 600, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '10px', '&:hover': { borderColor: ac, backgroundColor: `${ac}15`, transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>
                View Design Portfolio
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
              <Typography sx={{ fontFamily: f, color: ac, fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>Our Services</Typography>
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                End-to-end design{' '}
                <Box component="span" sx={{ color: ac }}>expertise</Box>
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

        {/* ===== DESIGN PROCESS ===== */}
        <Box sx={{ py: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography sx={{ fontFamily: f, color: ac, fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>Design Process</Typography>
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                Our 4-phase design framework
              </Typography>
            </Box>

            {/* Phase Tabs */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, mb: 5, flexWrap: 'wrap' }}>
              {phases.map((p, i) => (
                <Chip key={i} label={`${p.icon} ${p.name}`} onClick={() => setActivePhase(i)} sx={{ fontFamily: f, fontWeight: 600, fontSize: '0.88rem', px: 2, py: 2.5, borderRadius: '10px', cursor: 'pointer', transition: 'all 0.3s ease', backgroundColor: activePhase === i ? p.color : 'rgba(255,255,255,0.05)', color: '#fff', border: `1px solid ${activePhase === i ? p.color : 'rgba(255,255,255,0.1)'}`, '&:hover': { transform: 'translateY(-2px)' } }} />
              ))}
            </Box>

            {/* Phase Detail */}
            <Box sx={{ ...glass, p: { xs: 3, md: 5 }, maxWidth: 900, mx: 'auto' }}>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
                <Box sx={{ flex: '1 1 35%' }}>
                  <Chip label={phases[activePhase].duration} size="small" sx={{ fontFamily: f, fontSize: '0.75rem', fontWeight: 600, backgroundColor: `${phases[activePhase].color}20`, color: phases[activePhase].color, borderRadius: '6px', mb: 2 }} />
                  <Typography sx={{ fontFamily: f, fontSize: '3rem', mb: 1 }}>{phases[activePhase].icon}</Typography>
                  <Typography sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: '1.5rem', mb: 1 }}>Phase: {phases[activePhase].name}</Typography>
                  <Button variant="contained" endIcon={<ArrowForward />} sx={{ fontFamily: f, background: `linear-gradient(90deg, ${phases[activePhase].color}, ${phases[activePhase].color}cc)`, color: '#fff', textTransform: 'none', fontWeight: 600, px: 3, py: 1.2, borderRadius: '10px', mt: 2, '&:hover': { transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>
                    Start This Phase
                  </Button>
                </Box>
                <Box sx={{ flex: '1 1 65%', display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {phases[activePhase].steps.map((step, si) => (
                    <Box key={si} sx={{ display: 'flex', gap: 2, p: 2, borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', transition: 'all 0.3s ease', '&:hover': { borderColor: `${phases[activePhase].color}30`, transform: 'translateX(4px)' } }}>
                      <CheckCircle sx={{ fontSize: 20, color: phases[activePhase].color, mt: 0.2, flexShrink: 0 }} />
                      <Box>
                        <Typography sx={{ fontFamily: f, color: '#fff', fontWeight: 600, fontSize: '0.95rem', mb: 0.3 }}>{step.title}</Typography>
                        <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem' }}>{step.desc}</Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* ===== TOOLS ===== */}
        <Box sx={{ py: { xs: 6, md: 8 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 5 }}>
              <Typography sx={{ fontFamily: f, color: ac, fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>Our Tools</Typography>
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2rem' } }}>
                Industry-leading design tools
              </Typography>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2,1fr)', sm: 'repeat(3,1fr)', md: 'repeat(6,1fr)' }, gap: 2.5 }}>
              {tools.map((t, i) => (
                <Box key={i} sx={{ ...glass, p: 2.5, textAlign: 'center', transition: 'all 0.3s ease', cursor: 'pointer', '&:hover': { transform: 'translateY(-6px)', borderColor: `${ac}40` } }}>
                  <Typography sx={{ fontSize: '2rem', mb: 1 }}>{t.emoji}</Typography>
                  <Typography sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: '0.9rem', mb: 0.3 }}>{t.name}</Typography>
                  <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.45)', fontSize: '0.72rem', lineHeight: 1.3 }}>{t.desc}</Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* ===== PORTFOLIO ===== */}
        <Box sx={{ py: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography sx={{ fontFamily: f, color: ac, fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>Portfolio</Typography>
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                Designs that{' '}
                <Box component="span" sx={{ color: ac }}>drive results</Box>
              </Typography>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3,1fr)' }, gap: 3 }}>
              {portfolio.map((p, i) => (
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
                        <Chip key={tag} label={tag} size="small" sx={{ fontFamily: f, fontSize: '0.72rem', fontWeight: 500, height: 24, backgroundColor: `${ac}15`, color: '#fb7185', borderRadius: '6px' }} />
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
                Design packages
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
                  <Button fullWidth variant={p.popular ? 'contained' : 'outlined'} endIcon={<ArrowForward />} sx={{ fontFamily: f, textTransform: 'none', fontWeight: 600, py: 1.3, borderRadius: '10px', transition: 'all 0.3s ease', ...(p.popular ? { background: `linear-gradient(90deg, ${ac}, #be123c)`, color: '#fff', boxShadow: `0 4px 14px ${ac}40` } : { color: '#fff', borderColor: 'rgba(255,255,255,0.2)', '&:hover': { borderColor: ac, backgroundColor: `${ac}15` } }), '&:hover': { transform: 'translateY(-2px)' } }}>
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
              <Palette sx={{ fontSize: 48, color: ac, mb: 2, position: 'relative' }} />
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' }, mb: 2, position: 'relative' }}>Ready to redesign your product?</Typography>
              <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.65)', fontSize: '1rem', mb: 4, lineHeight: 1.7, maxWidth: 500, mx: 'auto', position: 'relative' }}>Book a free design consultation. We&apos;ll review your current product and share actionable UX recommendations — no strings attached.</Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
                <Button variant="contained" endIcon={<ArrowForward />} sx={{ fontFamily: f, background: `linear-gradient(90deg, ${ac}, #be123c)`, color: '#fff', textTransform: 'none', fontWeight: 700, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '10px', boxShadow: `0 4px 20px ${ac}50`, '&:hover': { transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>Book Design Consultation</Button>
                <Button variant="outlined" sx={{ fontFamily: f, color: '#fff', borderColor: 'rgba(255,255,255,0.3)', textTransform: 'none', fontWeight: 600, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '10px', '&:hover': { borderColor: ac, backgroundColor: `${ac}15`, transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>View Dribbble</Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  );
}