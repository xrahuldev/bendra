'use client';

import React, { useState } from 'react';
import { Box, Button, Container, Typography, Chip, IconButton } from '@mui/material';
import {
  ArrowForward,
  ShoppingCart,
  Store,
  Payments,
  Inventory,
  LocalShipping,
  TrendingUp,
  CheckCircle,
  Security,
  Speed,
  PhoneIphone,
  Dashboard,
  ChevronLeft,
  ChevronRight,
  Star,
  FormatQuote,
  AutoAwesome,
  BarChart,
  Group,
} from '@mui/icons-material';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const f = "'Poppins', sans-serif";
const glass = {
  background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '20px',
};
const accent = '#8b5cf6';

export default function EcommercePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const features = [
    { icon: <Store />, title: 'Custom Storefront', desc: 'Stunning, conversion-optimized storefronts with blazing-fast load times and seamless UX.', color: accent },
    { icon: <Payments />, title: 'Payment Integration', desc: 'Stripe, PayPal, Apple Pay, crypto — accept payments from anywhere in the world.', color: '#3b82f6' },
    { icon: <Inventory />, title: 'Inventory Management', desc: 'Real-time stock tracking, automated reordering, and multi-warehouse support.', color: '#10b981' },
    { icon: <LocalShipping />, title: 'Shipping & Logistics', desc: 'Integrated shipping calculators, tracking, and multi-carrier support.', color: '#f59e0b' },
    { icon: <PhoneIphone />, title: 'Mobile Commerce', desc: 'Native iOS & Android apps or PWA for on-the-go shopping experience.', color: '#ec4899' },
    { icon: <Dashboard />, title: 'Admin Dashboard', desc: 'Powerful admin panel with analytics, order management, and customer insights.', color: '#06b6d4' },
  ];

  const platforms = [
    {
      name: 'Custom Built',
      desc: 'Fully custom e-commerce from scratch using React/Next.js',
      pros: ['100% Customizable', 'No Platform Fees', 'Own Your Code', 'Unlimited Scale'],
      best: 'Unique business models',
      color: accent,
    },
    {
      name: 'Shopify Plus',
      desc: 'Enterprise Shopify solutions with custom theme & apps',
      pros: ['Quick Setup', 'App Ecosystem', 'Hosted Solution', 'Easy Management'],
      best: 'Fast go-to-market',
      color: '#95BF47',
    },
    {
      name: 'WooCommerce',
      desc: 'WordPress-powered stores with full flexibility',
      pros: ['WordPress Ecosystem', 'SEO Friendly', 'Cost Effective', 'Plugin Library'],
      best: 'Content-driven brands',
      color: '#7F54B3',
    },
  ];

  const results = [
    { num: '500+', label: 'Stores Launched' },
    { num: '$120M+', label: 'Revenue Generated' },
    { num: '35%', label: 'Avg Conversion Boost' },
    { num: '99.9%', label: 'Uptime' },
  ];

  const caseStudies = [
    {
      title: 'Fashion Marketplace',
      desc: 'Multi-vendor fashion platform with 200+ brands, AI recommendations, and same-day delivery.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      metrics: [
        { label: 'Monthly Orders', value: '15K+' },
        { label: 'Revenue Growth', value: '280%' },
        { label: 'Vendors', value: '200+' },
      ],
      tags: ['Next.js', 'Stripe', 'AI/ML'],
    },
    {
      title: 'Electronics Store',
      desc: 'High-performance electronics store with AR product preview and smart search.',
      image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      metrics: [
        { label: 'Daily Visitors', value: '50K+' },
        { label: 'Conversion Rate', value: '4.8%' },
        { label: 'Avg Order', value: '$285' },
      ],
      tags: ['Shopify Plus', 'AR', 'Algolia'],
    },
    {
      title: 'Grocery Delivery App',
      desc: 'On-demand grocery delivery with real-time tracking, subscriptions, and loyalty program.',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      metrics: [
        { label: 'App Downloads', value: '120K+' },
        { label: 'Daily Orders', value: '3K+' },
        { label: 'Retention', value: '68%' },
      ],
      tags: ['React Native', 'Firebase', 'Maps'],
    },
  ];

  const process = [
    { step: '01', title: 'Discovery & Strategy', desc: 'Understand your market, competitors, and define your e-commerce roadmap.' },
    { step: '02', title: 'UX/UI Design', desc: 'Design conversion-focused user journeys, wireframes, and stunning interfaces.' },
    { step: '03', title: 'Development & Integration', desc: 'Build your store with payment, shipping, inventory, and analytics integrations.' },
    { step: '04', title: 'Launch & Optimize', desc: 'Go live, monitor performance, and continuously optimize for growth.' },
  ];

  const testimonials = [
    { name: 'Aisha Rahman', role: 'CEO, LuxeFashion', text: 'Bendra built our marketplace from scratch. We hit $1M in sales within 6 months of launch. Their e-commerce expertise is unmatched!', rating: 5 },
    { name: 'David Chen', role: 'Founder, TechMart', text: 'Our conversion rate jumped 40% after Bendra redesigned our store. The attention to UX detail is phenomenal.', rating: 5 },
    { name: 'Maria Santos', role: 'COO, FreshBasket', text: 'The grocery delivery app they built handles 3000+ orders daily without a glitch. Incredible reliability!', rating: 5 },
  ];

  const addons = [
    { icon: <BarChart />, title: 'Analytics & BI', desc: 'Customer behavior, sales funnels, and revenue analytics' },
    { icon: <Security />, title: 'Fraud Protection', desc: 'AI-powered fraud detection and PCI compliance' },
    { icon: <Group />, title: 'Loyalty & Rewards', desc: 'Points, tiers, referrals, and gamification' },
    { icon: <Speed />, title: 'Performance CDN', desc: 'Global CDN, image optimization, and caching' },
    { icon: <AutoAwesome />, title: 'AI Recommendations', desc: 'Personalized product suggestions using ML' },
    { icon: <TrendingUp />, title: 'SEO & Marketing', desc: 'On-page SEO, email marketing, and retargeting' },
  ];

  return (
    <>
      <Navbar />
      <Box sx={{ backgroundColor: '#050d1a', fontFamily: f, position: 'relative', overflow: 'hidden' }}>

        {/* Bg Glows */}
        {[
          { top: '3%', left: '-8%', color: '139,92,246' },
          { top: '40%', right: '-8%', color: '59,130,246' },
          { bottom: '15%', left: '25%', color: '236,72,153' },
        ].map((g, i) => (
          <Box key={i} sx={{ position: 'absolute', ...g, width: 500, height: 500, background: `radial-gradient(circle, rgba(${g.color},0.12), transparent 70%)`, filter: 'blur(80px)', pointerEvents: 'none' }} />
        ))}

        {/* ===== HERO ===== */}
        <Box sx={{ pt: { xs: 14, md: 18 }, pb: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
            <Chip
              icon={<ShoppingCart sx={{ color: `${accent} !important`, fontSize: 18 }} />}
              label="E-COMMERCE SOLUTIONS"
              sx={{ fontFamily: f, fontWeight: 600, fontSize: '0.78rem', letterSpacing: 1.5, mb: 3, backgroundColor: `${accent}20`, color: accent, border: `1px solid ${accent}50`, borderRadius: '8px', py: 2.2 }}
            />

            <Typography variant="h1" sx={{ fontFamily: f, color: '#fff', fontWeight: 800, fontSize: { xs: '2.2rem', sm: '3rem', md: '3.8rem' }, lineHeight: 1.15, mb: 3 }}>
              Sell more with{' '}
              <Box component="span" sx={{ background: `linear-gradient(90deg, ${accent}, #a78bfa)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                smarter stores.
              </Box>
            </Typography>

            <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.7)', fontSize: { xs: '1rem', md: '1.15rem' }, maxWidth: 650, mx: 'auto', lineHeight: 1.7, mb: 5 }}>
              We build high-converting e-commerce experiences — from custom storefronts and mobile apps to multi-vendor marketplaces that scale to millions.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 6 }}>
              <Button variant="contained" endIcon={<ArrowForward />} sx={{ fontFamily: f, background: `linear-gradient(90deg, ${accent}, #7c3aed)`, color: '#fff', textTransform: 'none', fontWeight: 700, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '10px', boxShadow: `0 4px 20px ${accent}60`, '&:hover': { transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>
                Get a Free Quote
              </Button>
              <Button variant="outlined" sx={{ fontFamily: f, color: '#fff', borderColor: 'rgba(255,255,255,0.3)', textTransform: 'none', fontWeight: 600, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '10px', '&:hover': { borderColor: accent, backgroundColor: `${accent}15`, transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>
                View Case Studies
              </Button>
            </Box>

            {/* Stats */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2,1fr)', md: 'repeat(4,1fr)' }, gap: 2.5, maxWidth: 850, mx: 'auto' }}>
              {results.map((s, i) => (
                <Box key={i} sx={{ ...glass, p: 2.5, textAlign: 'center', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-4px)', borderColor: `${accent}40` } }}>
                  <Typography sx={{ fontFamily: f, background: `linear-gradient(90deg, ${accent}, #a78bfa)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 800, fontSize: '1.8rem', lineHeight: 1 }}>{s.num}</Typography>
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
              <Typography sx={{ fontFamily: f, color: accent, fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>Features</Typography>
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                Everything you need to{' '}
                <Box component="span" sx={{ color: accent }}>sell online</Box>
              </Typography>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' }, gap: 3 }}>
              {features.map((ft, i) => (
                <Box key={i} sx={{ ...glass, p: 4, transition: 'all 0.4s ease', cursor: 'pointer', '&:hover': { transform: 'translateY(-8px)', borderColor: `${ft.color}40`, boxShadow: '0 16px 40px rgba(0,0,0,0.25)', '& .ficon': { transform: 'scale(1.1) rotate(5deg)' } } }}>
                  <Box className="ficon" sx={{ width: 56, height: 56, borderRadius: '14px', background: `linear-gradient(135deg, ${ft.color}, ${ft.color}99)`, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2.5, transition: 'all 0.4s ease', boxShadow: `0 4px 14px ${ft.color}30`, '& .MuiSvgIcon-root': { color: '#fff', fontSize: 28 } }}>
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
              <Typography sx={{ fontFamily: f, color: accent, fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>Platforms</Typography>
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                Choose the right platform
              </Typography>
            </Box>

            {/* Tabs */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, mb: 5, flexWrap: 'wrap' }}>
              {platforms.map((p, i) => (
                <Chip key={i} label={p.name} onClick={() => setActiveTab(i)} sx={{ fontFamily: f, fontWeight: 600, fontSize: '0.88rem', px: 2, py: 2.5, borderRadius: '10px', cursor: 'pointer', transition: 'all 0.3s ease', backgroundColor: activeTab === i ? p.color : 'rgba(255,255,255,0.05)', color: activeTab === i ? '#fff' : 'rgba(255,255,255,0.7)', border: `1px solid ${activeTab === i ? p.color : 'rgba(255,255,255,0.1)'}`, '&:hover': { transform: 'translateY(-2px)' } }} />
              ))}
            </Box>

            {/* Platform Detail */}
            <Box sx={{ ...glass, p: { xs: 3, md: 5 }, maxWidth: 800, mx: 'auto', transition: 'all 0.3s ease' }}>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
                <Box sx={{ flex: 1 }}>
                  <Chip label={`Best for: ${platforms[activeTab].best}`} size="small" sx={{ fontFamily: f, fontSize: '0.75rem', fontWeight: 600, backgroundColor: `${platforms[activeTab].color}20`, color: platforms[activeTab].color, borderRadius: '6px', mb: 2 }} />
                  <Typography sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: '1.5rem', mb: 1.5 }}>{platforms[activeTab].name}</Typography>
                  <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.7, mb: 3 }}>{platforms[activeTab].desc}</Typography>
                  <Button variant="contained" endIcon={<ArrowForward />} sx={{ fontFamily: f, background: `linear-gradient(90deg, ${platforms[activeTab].color}, ${platforms[activeTab].color}cc)`, color: '#fff', textTransform: 'none', fontWeight: 600, px: 3, py: 1.2, borderRadius: '10px', '&:hover': { transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>
                    Get Started
                  </Button>
                </Box>
                <Box sx={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 2 }}>
                  {platforms[activeTab].pros.map((pro, pi) => (
                    <Box key={pi} sx={{ display: 'flex', gap: 1, alignItems: 'center', p: 1.5, borderRadius: '10px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <CheckCircle sx={{ fontSize: 18, color: platforms[activeTab].color }} />
                      <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', fontWeight: 500 }}>{pro}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* ===== CASE STUDIES ===== */}
        <Box sx={{ py: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography sx={{ fontFamily: f, color: accent, fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>Case Studies</Typography>
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                Stores we&apos;ve built
              </Typography>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3,1fr)' }, gap: 3 }}>
              {caseStudies.map((cs, i) => (
                <Box key={i} sx={{ ...glass, overflow: 'hidden', transition: 'all 0.4s ease', cursor: 'pointer', '&:hover': { transform: 'translateY(-8px)', borderColor: `${accent}40`, boxShadow: '0 16px 40px rgba(0,0,0,0.3)', '& .cs-img': { transform: 'scale(1.08)' } } }}>
                  <Box sx={{ height: 200, overflow: 'hidden', position: 'relative' }}>
                    <Box className="cs-img" sx={{ position: 'absolute', inset: 0, backgroundImage: `url(${cs.image})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.6s ease' }} />
                    <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(5,13,26,0.8) 0%, transparent 50%)' }} />
                  </Box>
                  <Box sx={{ p: 3 }}>
                    <Typography sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: '1.15rem', mb: 1 }}>{cs.title}</Typography>
                    <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', lineHeight: 1.5, mb: 2.5 }}>{cs.desc}</Typography>

                    {/* Metrics */}
                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1.5, mb: 2.5 }}>
                      {cs.metrics.map((m, mi) => (
                        <Box key={mi} sx={{ textAlign: 'center', p: 1, borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <Typography sx={{ fontFamily: f, color: accent, fontWeight: 700, fontSize: '1rem' }}>{m.value}</Typography>
                          <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.45)', fontSize: '0.68rem' }}>{m.label}</Typography>
                        </Box>
                      ))}
                    </Box>

                    {/* Tags */}
                    <Box sx={{ display: 'flex', gap: 0.8, flexWrap: 'wrap' }}>
                      {cs.tags.map((tag) => (
                        <Chip key={tag} label={tag} size="small" sx={{ fontFamily: f, fontSize: '0.72rem', fontWeight: 500, height: 24, backgroundColor: `${accent}15`, color: '#a78bfa', borderRadius: '6px' }} />
                      ))}
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* ===== PROCESS ===== */}
        <Box sx={{ py: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography sx={{ fontFamily: f, color: accent, fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>How It Works</Typography>
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                4 steps to your dream store
              </Typography>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', md: 'repeat(4,1fr)' }, gap: 3 }}>
              {process.map((p, i) => (
                <Box key={i} sx={{ ...glass, p: 3.5, position: 'relative', overflow: 'hidden', textAlign: 'center', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-6px)', borderColor: `${accent}40` } }}>
                  <Typography sx={{ position: 'absolute', top: -10, right: 12, fontFamily: f, fontSize: '5rem', fontWeight: 900, color: `${accent}08`, lineHeight: 1, pointerEvents: 'none' }}>{p.step}</Typography>
                  <Box sx={{ width: 48, height: 48, borderRadius: '50%', background: `${accent}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 2 }}>
                    <Typography sx={{ fontFamily: f, color: accent, fontWeight: 800, fontSize: '1.1rem' }}>{p.step}</Typography>
                  </Box>
                  <Typography sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: '1.05rem', mb: 1, position: 'relative' }}>{p.title}</Typography>
                  <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', lineHeight: 1.5, position: 'relative' }}>{p.desc}</Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* ===== ADD-ONS ===== */}
        <Box sx={{ py: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 4, md: 6 }, alignItems: 'center' }}>
              <Box sx={{ flex: { md: '1 1 40%' } }}>
                <Typography sx={{ fontFamily: f, color: accent, fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>Add-Ons</Typography>
                <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' }, lineHeight: 1.2, mb: 2 }}>
                  Supercharge your store with{' '}
                  <Box component="span" sx={{ color: accent }}>powerful add-ons</Box>
                </Typography>
                <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  Extend your e-commerce platform with best-in-class integrations and features to maximize revenue and customer satisfaction.
                </Typography>
              </Box>

              <Box sx={{ flex: { md: '1 1 60%' }, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)' }, gap: 2 }}>
                {addons.map((a, i) => (
                  <Box key={i} sx={{ ...glass, p: 2.5, display: 'flex', gap: 2, alignItems: 'flex-start', transition: 'all 0.3s ease', cursor: 'pointer', '&:hover': { transform: 'translateY(-4px)', borderColor: `${accent}30` } }}>
                    <Box sx={{ width: 42, height: 42, borderRadius: '10px', background: `${accent}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, '& .MuiSvgIcon-root': { color: accent, fontSize: 22 } }}>
                      {a.icon}
                    </Box>
                    <Box>
                      <Typography sx={{ fontFamily: f, color: '#fff', fontWeight: 600, fontSize: '0.95rem', mb: 0.3 }}>{a.title}</Typography>
                      <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', lineHeight: 1.5 }}>{a.desc}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Container>
        </Box>

        {/* ===== TESTIMONIALS ===== */}
        <Box sx={{ py: { xs: 6, md: 8 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="md">
            <Box sx={{ ...glass, p: { xs: 3, md: 5 }, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <Box sx={{ position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)', width: 300, height: 300, background: `radial-gradient(circle, ${accent}20, transparent 70%)`, filter: 'blur(40px)', pointerEvents: 'none' }} />

              <FormatQuote sx={{ fontSize: 44, color: `${accent}40`, transform: 'rotate(180deg)', position: 'relative', mb: 1 }} />
              <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.85)', fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.8, fontStyle: 'italic', maxWidth: 550, mx: 'auto', mb: 2.5, position: 'relative' }}>
                &ldquo;{testimonials[testimonialIdx].text}&rdquo;
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.5, mb: 2 }}>
                {Array.from({ length: testimonials[testimonialIdx].rating }).map((_, i) => (
                  <Star key={i} sx={{ color: '#f59e0b', fontSize: 20 }} />
                ))}
              </Box>
              <Typography sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: '1rem', position: 'relative' }}>{testimonials[testimonialIdx].name}</Typography>
              <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', position: 'relative' }}>{testimonials[testimonialIdx].role}</Typography>

              {/* Nav */}
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, mt: 3 }}>
                <IconButton onClick={() => setTestimonialIdx((p) => (p === 0 ? testimonials.length - 1 : p - 1))} sx={{ border: '1px solid rgba(255,255,255,0.1)', color: '#fff', '&:hover': { backgroundColor: accent, borderColor: accent } }}>
                  <ChevronLeft />
                </IconButton>
                <IconButton onClick={() => setTestimonialIdx((p) => (p === testimonials.length - 1 ? 0 : p + 1))} sx={{ border: '1px solid rgba(255,255,255,0.1)', color: '#fff', '&:hover': { backgroundColor: accent, borderColor: accent } }}>
                  <ChevronRight />
                </IconButton>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* ===== CTA ===== */}
        <Box sx={{ py: { xs: 6, md: 8 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="md">
            <Box sx={{ ...glass, background: `linear-gradient(135deg, ${accent}15, ${accent}05)`, borderColor: `${accent}40`, p: { xs: 4, md: 6 }, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <Box sx={{ position: 'absolute', top: '-30%', right: '-15%', width: 350, height: 350, background: `radial-gradient(circle, ${accent}25, transparent 70%)`, filter: 'blur(50px)', pointerEvents: 'none' }} />

              <ShoppingCart sx={{ fontSize: 48, color: accent, mb: 2, position: 'relative' }} />
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' }, mb: 2, position: 'relative' }}>
                Ready to build your store?
              </Typography>
              <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.65)', fontSize: '1rem', mb: 4, lineHeight: 1.7, maxWidth: 500, mx: 'auto', position: 'relative' }}>
                Get a free e-commerce consultation. We&apos;ll analyze your needs and recommend the perfect solution for your business.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
                <Button variant="contained" endIcon={<ArrowForward />} sx={{ fontFamily: f, background: `linear-gradient(90deg, ${accent}, #7c3aed)`, color: '#fff', textTransform: 'none', fontWeight: 700, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '10px', boxShadow: `0 4px 20px ${accent}50`, '&:hover': { transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>
                  Get Free Consultation
                </Button>
                <Button variant="outlined" sx={{ fontFamily: f, color: '#fff', borderColor: 'rgba(255,255,255,0.3)', textTransform: 'none', fontWeight: 600, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '10px', '&:hover': { borderColor: accent, backgroundColor: `${accent}15`, transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>
                  View Pricing
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