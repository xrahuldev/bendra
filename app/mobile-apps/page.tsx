'use client';

import React, { useState } from 'react';
import { Box, Button, Container, Typography, Chip, IconButton } from '@mui/material';
import {
  ArrowForward,
  PhoneIphone,
  Android,
  Apple,
  Speed,
  Security,
  Notifications,
  CloudSync,
  Fingerprint,
  Payments,
  CheckCircle,
  TrendingUp,
  Groups,
  Timer,
  Download,
  Star,
  FormatQuote,
  ChevronLeft,
  ChevronRight,
  Bolt,
  Brush,
  BugReport,
  RocketLaunch,
  DesignServices,
  Code,
} from '@mui/icons-material';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const f = "'Poppins', sans-serif";
const glass = {
  background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '20px',
};
const ac = '#10b981'; // green accent

export default function MobileAppPage() {
  const [activePlatform, setActivePlatform] = useState(0);
  const [tIdx, setTIdx] = useState(0);

  const features = [
    { icon: <Speed />, title: 'Blazing Performance', desc: '60fps animations, instant load times, and buttery-smooth UX on all devices.', color: ac },
    { icon: <Fingerprint />, title: 'Biometric Auth', desc: 'Face ID, Touch ID, and fingerprint login for secure and seamless authentication.', color: '#3b82f6' },
    { icon: <Notifications />, title: 'Push Notifications', desc: 'Smart, personalized push notifications with rich media and deep linking.', color: '#f59e0b' },
    { icon: <CloudSync />, title: 'Offline-First', desc: 'Works without internet — auto-syncs data when connection is restored.', color: '#a855f7' },
    { icon: <Payments />, title: 'In-App Payments', desc: 'Apple Pay, Google Pay, Stripe, and subscription billing built-in.', color: '#ec4899' },
    { icon: <Security />, title: 'Enterprise Security', desc: 'End-to-end encryption, certificate pinning, and secure key storage.', color: '#06b6d4' },
  ];

  const platforms = [
    {
      name: 'React Native',
      icon: '⚛️',
      desc: 'Build for iOS & Android from a single codebase with near-native performance.',
      pros: ['Single Codebase', '95% Code Sharing', 'Hot Reload', 'Huge Ecosystem', 'Cost Effective', 'Fast Development'],
      best: 'Cross-platform apps with native feel',
      color: '#61dafb',
    },
    {
      name: 'Flutter',
      icon: '🦋',
      desc: 'Google\'s UI toolkit for beautiful, natively compiled apps from one codebase.',
      pros: ['Beautiful UI', 'Fastest Rendering', 'Single Codebase', 'Custom Widgets', 'Web + Desktop', 'Growing Community'],
      best: 'Pixel-perfect custom designs',
      color: '#02569B',
    },
    {
      name: 'Native (Swift/Kotlin)',
      icon: '📱',
      desc: 'Maximum performance and full platform API access with native development.',
      pros: ['Best Performance', 'Full API Access', 'Platform-Specific UX', 'Latest OS Features', 'App Store Optimized', 'Complex Apps'],
      best: 'Performance-critical applications',
      color: '#FF6F00',
    },
  ];

  const process = [
    { icon: <DesignServices />, step: '01', title: 'Discovery & UX Research', desc: 'User personas, journeys, competitor analysis, and feature prioritization.', duration: 'Week 1-2' },
    { icon: <Brush />, step: '02', title: 'UI/UX Design', desc: 'Wireframes, high-fidelity mockups, interactive prototypes, and design system.', duration: 'Week 2-4' },
    { icon: <Code />, step: '03', title: 'Agile Development', desc: '2-week sprints with daily standups, demos, and continuous integration.', duration: 'Week 4-12' },
    { icon: <BugReport />, step: '04', title: 'QA & Testing', desc: 'Manual + automated testing, performance profiling, and security audits.', duration: 'Week 10-13' },
    { icon: <RocketLaunch />, step: '05', title: 'App Store Launch', desc: 'Store optimization, submission, review handling, and launch marketing.', duration: 'Week 13-14' },
    { icon: <TrendingUp />, step: '06', title: 'Growth & Updates', desc: 'Analytics, A/B testing, feature updates, and continuous improvement.', duration: 'Ongoing' },
  ];

  const apps = [
    {
      title: 'Food Delivery App',
      desc: 'Multi-restaurant ordering with real-time tracking, loyalty rewards, and AI recommendations.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      metrics: { downloads: '120K+', rating: '4.8★', orders: '3K+/day' },
      platform: 'React Native',
      tags: ['iOS', 'Android', 'Maps API'],
    },
    {
      title: 'Fitness & Wellness',
      desc: 'Workout tracking, meal plans, live coaching, and wearable device integration.',
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      metrics: { downloads: '250K+', rating: '4.9★', users: '80K Active' },
      platform: 'Flutter',
      tags: ['HealthKit', 'Wearables', 'AI'],
    },
    {
      title: 'Banking & Finance',
      desc: 'Secure mobile banking with biometrics, P2P transfers, bill payments, and investment portfolio.',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      metrics: { downloads: '500K+', rating: '4.7★', transactions: '$10M+/mo' },
      platform: 'Native Swift/Kotlin',
      tags: ['Biometrics', 'Encryption', 'PCI-DSS'],
    },
  ];

  const plans = [
    {
      name: 'MVP', emoji: '🌱', price: '$9,999',
      desc: 'Launch your first version fast',
      features: ['Single Platform (iOS or Android)', 'Up to 8 Screens', 'Basic UI Design', 'Push Notifications', 'Analytics Setup', '1 Month Post-Launch Support'],
      popular: false,
    },
    {
      name: 'Pro', emoji: '🚀', price: '$24,999',
      desc: 'Full-featured cross-platform app',
      features: ['iOS + Android', 'Up to 20 Screens', 'Custom UI/UX Design', 'In-App Payments', 'Offline Mode', '3 Months Support + Updates'],
      popular: true,
    },
    {
      name: 'Enterprise', emoji: '⚡', price: '$49,999+',
      desc: 'Complex, large-scale applications',
      features: ['iOS + Android + Web', 'Unlimited Screens', 'Advanced Animations', 'AI/ML Features', 'Dedicated Team', '6 Months Support + SLA'],
      popular: false,
    },
  ];

  const stats = [
    { icon: <PhoneIphone />, num: '100+', label: 'Apps Delivered' },
    { icon: <Download />, num: '5M+', label: 'Total Downloads' },
    { icon: <Star />, num: '4.8', label: 'Avg Store Rating' },
    { icon: <Groups />, num: '95%', label: 'Client Retention' },
  ];

  const testimonials = [
    { name: 'Riya Kapoor', role: 'CEO, FoodieHub', text: 'Bendra built our food delivery app in just 10 weeks. We hit 120K downloads in 6 months with a 4.8 star rating. Their mobile expertise is world-class!', rating: 5 },
    { name: 'Mark Thompson', role: 'Founder, FitLife', text: 'The fitness app they built integrates perfectly with Apple Watch and Fitbit. Our users love the smooth animations and offline workout mode.', rating: 5 },
    { name: 'Sarah Al Maktoum', role: 'VP Digital, Gulf Bank', text: 'Security was our top priority. Bendra delivered a banking app with military-grade encryption and biometric auth that our 500K users trust completely.', rating: 5 },
  ];

  return (
    <>
      <Navbar />
      <Box sx={{ backgroundColor: '#050d1a', fontFamily: f, position: 'relative', overflow: 'hidden' }}>

        {/* Bg Glows */}
        {[
          { top: '3%', left: '-8%', color: '16,185,129' },
          { top: '40%', right: '-8%', color: '59,130,246' },
          { bottom: '15%', left: '25%', color: '245,158,11' },
        ].map((g, i) => (
          <Box key={i} sx={{ position: 'absolute', ...g, width: 500, height: 500, background: `radial-gradient(circle, rgba(${g.color},0.12), transparent 70%)`, filter: 'blur(80px)', pointerEvents: 'none' }} />
        ))}

        {/* ===== HERO ===== */}
        <Box sx={{ pt: { xs: 14, md: 18 }, pb: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
            <Chip
              icon={<PhoneIphone sx={{ color: `${ac} !important`, fontSize: 18 }} />}
              label="MOBILE APP DEVELOPMENT"
              sx={{ fontFamily: f, fontWeight: 600, fontSize: '0.78rem', letterSpacing: 1.5, mb: 3, backgroundColor: `${ac}20`, color: ac, border: `1px solid ${ac}50`, borderRadius: '8px', py: 2.2 }}
            />

            <Typography variant="h1" sx={{ fontFamily: f, color: '#fff', fontWeight: 800, fontSize: { xs: '2.2rem', sm: '3rem', md: '3.8rem' }, lineHeight: 1.15, mb: 3 }}>
              Apps that users{' '}
              <Box component="span" sx={{ background: `linear-gradient(90deg, ${ac}, #34d399)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                love & keep.
              </Box>
            </Typography>

            <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.7)', fontSize: { xs: '1rem', md: '1.15rem' }, maxWidth: 650, mx: 'auto', lineHeight: 1.7, mb: 5 }}>
              We design and build beautiful, high-performance mobile apps for iOS and Android that delight users, drive engagement, and scale to millions.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 4 }}>
              <Button variant="contained" endIcon={<ArrowForward />} sx={{ fontFamily: f, background: `linear-gradient(90deg, ${ac}, #059669)`, color: '#fff', textTransform: 'none', fontWeight: 700, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '10px', boxShadow: `0 4px 20px ${ac}60`, '&:hover': { transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>
                Build My App
              </Button>
              <Button variant="outlined" sx={{ fontFamily: f, color: '#fff', borderColor: 'rgba(255,255,255,0.3)', textTransform: 'none', fontWeight: 600, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '10px', '&:hover': { borderColor: ac, backgroundColor: `${ac}15`, transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>
                View Our Apps
              </Button>
            </Box>

            {/* Platform Badges */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 6, flexWrap: 'wrap' }}>
              {[
                { icon: <Apple sx={{ fontSize: 20 }} />, label: 'iOS' },
                { icon: <Android sx={{ fontSize: 20 }} />, label: 'Android' },
                { icon: <PhoneIphone sx={{ fontSize: 20 }} />, label: 'Cross-Platform' },
              ].map((p, i) => (
                <Chip key={i} icon={p.icon} label={p.label} sx={{ fontFamily: f, fontWeight: 500, fontSize: '0.85rem', backgroundColor: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', py: 2, '& .MuiChip-icon': { color: 'rgba(255,255,255,0.7)' } }} />
              ))}
            </Box>

            {/* Stats */}
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

        {/* ===== FEATURES ===== */}
        <Box sx={{ py: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography sx={{ fontFamily: f, color: ac, fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>App Features</Typography>
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                Features users{' '}
                <Box component="span" sx={{ color: ac }}>expect</Box>
              </Typography>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' }, gap: 3 }}>
              {features.map((ft, i) => (
                <Box key={i} sx={{ ...glass, p: 4, transition: 'all 0.4s ease', cursor: 'pointer', '&:hover': { transform: 'translateY(-8px)', borderColor: `${ft.color}40`, '& .ic': { transform: 'scale(1.1) rotate(5deg)' } } }}>
                  <Box className="ic" sx={{ width: 56, height: 56, borderRadius: '14px', background: `linear-gradient(135deg, ${ft.color}, ${ft.color}99)`, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2.5, transition: 'all 0.4s ease', boxShadow: `0 4px 14px ${ft.color}30`, '& .MuiSvgIcon-root': { color: '#fff', fontSize: 28 } }}>
                    {ft.icon}
                  </Box>
                  <Typography sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: '1.1rem', mb: 1 }}>{ft.title}</Typography>
                  <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', lineHeight: 1.6 }}>{ft.desc}</Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* ===== PLATFORMS ===== */}
        <Box sx={{ py: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography sx={{ fontFamily: f, color: ac, fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>Technologies</Typography>
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                Choose the right framework
              </Typography>
            </Box>

            {/* Tabs */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, mb: 5, flexWrap: 'wrap' }}>
              {platforms.map((p, i) => (
                <Chip key={i} label={`${p.icon} ${p.name}`} onClick={() => setActivePlatform(i)} sx={{ fontFamily: f, fontWeight: 600, fontSize: '0.88rem', px: 2, py: 2.5, borderRadius: '10px', cursor: 'pointer', transition: 'all 0.3s ease', backgroundColor: activePlatform === i ? p.color : 'rgba(255,255,255,0.05)', color: '#fff', border: `1px solid ${activePlatform === i ? p.color : 'rgba(255,255,255,0.1)'}`, '&:hover': { transform: 'translateY(-2px)' } }} />
              ))}
            </Box>

            {/* Detail */}
            <Box sx={{ ...glass, p: { xs: 3, md: 5 }, maxWidth: 850, mx: 'auto' }}>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
                <Box sx={{ flex: 1 }}>
                  <Chip label={`Best for: ${platforms[activePlatform].best}`} size="small" sx={{ fontFamily: f, fontSize: '0.75rem', fontWeight: 600, backgroundColor: `${platforms[activePlatform].color}20`, color: platforms[activePlatform].color, borderRadius: '6px', mb: 2 }} />
                  <Typography sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: '1.5rem', mb: 1.5 }}>{platforms[activePlatform].icon} {platforms[activePlatform].name}</Typography>
                  <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.7, mb: 3 }}>{platforms[activePlatform].desc}</Typography>
                  <Button variant="contained" endIcon={<ArrowForward />} sx={{ fontFamily: f, background: `linear-gradient(90deg, ${platforms[activePlatform].color}, ${platforms[activePlatform].color}cc)`, color: '#fff', textTransform: 'none', fontWeight: 600, px: 3, py: 1.2, borderRadius: '10px', '&:hover': { transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>
                    Start Project
                  </Button>
                </Box>
                <Box sx={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 2 }}>
                  {platforms[activePlatform].pros.map((pro, pi) => (
                    <Box key={pi} sx={{ display: 'flex', gap: 1, alignItems: 'center', p: 1.5, borderRadius: '10px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <CheckCircle sx={{ fontSize: 18, color: platforms[activePlatform].color }} />
                      <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', fontWeight: 500 }}>{pro}</Typography>
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
                <Box component="span" sx={{ color: ac }}>App Store</Box>
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

        {/* ===== APP SHOWCASE ===== */}
        <Box sx={{ py: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography sx={{ fontFamily: f, color: ac, fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>App Showcase</Typography>
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                Apps we&apos;ve shipped
              </Typography>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3,1fr)' }, gap: 3 }}>
              {apps.map((app, i) => (
                <Box key={i} sx={{ ...glass, overflow: 'hidden', transition: 'all 0.4s ease', cursor: 'pointer', '&:hover': { transform: 'translateY(-8px)', borderColor: `${ac}40`, '& .aimg': { transform: 'scale(1.08)' } } }}>
                  <Box sx={{ height: 200, overflow: 'hidden', position: 'relative' }}>
                    <Box className="aimg" sx={{ position: 'absolute', inset: 0, backgroundImage: `url(${app.image})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.6s ease' }} />
                    <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(5,13,26,0.8) 0%, transparent 50%)' }} />
                    <Chip label={app.platform} sx={{ position: 'absolute', top: 14, left: 14, fontFamily: f, fontWeight: 600, fontSize: '0.75rem', backgroundColor: ac, color: '#fff', borderRadius: '6px' }} />
                  </Box>
                  <Box sx={{ p: 3 }}>
                    <Typography sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: '1.15rem', mb: 1 }}>{app.title}</Typography>
                    <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', lineHeight: 1.5, mb: 2.5 }}>{app.desc}</Typography>

                    {/* Metrics */}
                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1.5, mb: 2.5 }}>
                      {Object.entries(app.metrics).map(([key, val]) => (
                        <Box key={key} sx={{ textAlign: 'center', p: 1, borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <Typography sx={{ fontFamily: f, color: ac, fontWeight: 700, fontSize: '0.95rem' }}>{val}</Typography>
                          <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem', textTransform: 'capitalize' }}>{key}</Typography>
                        </Box>
                      ))}
                    </Box>

                    <Box sx={{ display: 'flex', gap: 0.8, flexWrap: 'wrap' }}>
                      {app.tags.map((tag) => (
                        <Chip key={tag} label={tag} size="small" sx={{ fontFamily: f, fontSize: '0.72rem', fontWeight: 500, height: 24, backgroundColor: `${ac}15`, color: '#34d399', borderRadius: '6px' }} />
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
                App development packages
              </Typography>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3,1fr)' }, gap: 3 }}>
              {plans.map((p, i) => (
                <Box key={i} sx={{ ...glass, p: 4, position: 'relative', overflow: 'hidden', transition: 'all 0.4s ease', ...(p.popular && { borderColor: `${ac}50`, background: `linear-gradient(135deg, ${ac}12, ${ac}05)` }), '&:hover': { transform: 'translateY(-8px)', borderColor: `${ac}50` } }}>
                  {p.popular && <Chip icon={<Bolt sx={{ color: '#000 !important', fontSize: 16 }} />} label="Most Popular" sx={{ position: 'absolute', top: 16, right: 16, fontFamily: f, fontWeight: 600, fontSize: '0.72rem', backgroundColor: ac, color: '#000', borderRadius: '6px', height: 26 }} />}

                  <Typography sx={{ fontSize: '2rem', mb: 1 }}>{p.emoji}</Typography>
                  <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', fontWeight: 500, mb: 0.5 }}>{p.name}</Typography>
                  <Typography sx={{ fontFamily: f, color: '#fff', fontWeight: 800, fontSize: '2.5rem', mb: 0.5 }}>{p.price}</Typography>
                  <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', mb: 3 }}>{p.desc}</Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3 }}>
                    {p.features.map((feat, fi) => (
                      <Box key={fi} sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                        <CheckCircle sx={{ fontSize: 18, color: p.popular ? ac : '#3b82f6' }} />
                        <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.75)', fontSize: '0.88rem' }}>{feat}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Button fullWidth variant={p.popular ? 'contained' : 'outlined'} endIcon={<ArrowForward />} sx={{ fontFamily: f, textTransform: 'none', fontWeight: 600, py: 1.3, borderRadius: '10px', transition: 'all 0.3s ease', ...(p.popular ? { background: `linear-gradient(90deg, ${ac}, #059669)`, color: '#fff', boxShadow: `0 4px 14px ${ac}40`, '&:hover': { transform: 'translateY(-2px)' } } : { color: '#fff', borderColor: 'rgba(255,255,255,0.2)', '&:hover': { borderColor: ac, backgroundColor: `${ac}15`, transform: 'translateY(-2px)' } }) }}>
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
              <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.85)', fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.8, fontStyle: 'italic', maxWidth: 550, mx: 'auto', mb: 2.5, position: 'relative' }}>
                &ldquo;{testimonials[tIdx].text}&rdquo;
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.5, mb: 2 }}>
                {Array.from({ length: testimonials[tIdx].rating }).map((_, i) => (
                  <Star key={i} sx={{ color: '#f59e0b', fontSize: 20 }} />
                ))}
              </Box>
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

              <PhoneIphone sx={{ fontSize: 48, color: ac, mb: 2, position: 'relative' }} />
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' }, mb: 2, position: 'relative' }}>
                Ready to build your app?
              </Typography>
              <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.65)', fontSize: '1rem', mb: 4, lineHeight: 1.7, maxWidth: 500, mx: 'auto', position: 'relative' }}>
                Book a free consultation. We&apos;ll help you choose the right platform, estimate costs, and create a roadmap to the App Store.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
                <Button variant="contained" endIcon={<ArrowForward />} sx={{ fontFamily: f, background: `linear-gradient(90deg, ${ac}, #059669)`, color: '#fff', textTransform: 'none', fontWeight: 700, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '10px', boxShadow: `0 4px 20px ${ac}50`, '&:hover': { transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>
                  Book Free Consultation
                </Button>
                <Button variant="outlined" sx={{ fontFamily: f, color: '#fff', borderColor: 'rgba(255,255,255,0.3)', textTransform: 'none', fontWeight: 600, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '10px', '&:hover': { borderColor: ac, backgroundColor: `${ac}15`, transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>
                  View Portfolio
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>

      </Box>
      <Footer />
    </>
  );
}