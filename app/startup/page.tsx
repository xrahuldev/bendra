'use client';

import React from 'react';
import { Box, Button, Container, Typography, Chip } from '@mui/material';
import {
  ArrowForward,
  RocketLaunch,
  TrendingUp,
  Bolt,
  Palette,
  Code,
  Campaign,
  CheckCircle,
  Timer,
  AttachMoney,
  Groups,
  EmojiObjects,
  AutoAwesome,
} from '@mui/icons-material';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const f = "'Poppins', sans-serif";

const glass = {
  background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '20px',
};

export default function StartupPage() {
  const services = [
    { icon: <EmojiObjects />, title: 'Idea Validation', desc: 'We help you validate your idea with market research, competitor analysis, and rapid prototyping before you invest heavily.', color: '#f59e0b' },
    { icon: <Palette />, title: 'MVP Design & Development', desc: 'Launch fast with a beautiful, functional MVP built in 4-8 weeks using modern tech stack.', color: '#3b82f6' },
    { icon: <Code />, title: 'Full Product Development', desc: 'Scale from MVP to full product with robust architecture, CI/CD pipelines, and automated testing.', color: '#10b981' },
    { icon: <TrendingUp />, title: 'Growth Engineering', desc: 'Analytics, A/B testing, SEO, and performance optimization to fuel your startup growth.', color: '#a855f7' },
    { icon: <Campaign />, title: 'Go-To-Market Strategy', desc: 'Launch strategy, landing pages, marketing automation, and CRM setup to acquire first 1000 users.', color: '#ec4899' },
    { icon: <Bolt />, title: 'CTO as a Service', desc: 'Get a fractional CTO to guide technical decisions, build team, and set engineering culture.', color: '#06b6d4' },
  ];

  const process = [
    { step: '01', title: 'Discovery Call', desc: 'Understand your vision, market, and goals', duration: 'Day 1' },
    { step: '02', title: 'Strategy & Wireframes', desc: 'Define scope, user flows, and technical architecture', duration: 'Week 1' },
    { step: '03', title: 'Design & Prototype', desc: 'Create stunning UI/UX with interactive prototype', duration: 'Week 2-3' },
    { step: '04', title: 'Agile Development', desc: 'Build in 2-week sprints with regular demos', duration: 'Week 3-8' },
    { step: '05', title: 'Testing & Launch', desc: 'QA, performance testing, and production deployment', duration: 'Week 8-10' },
    { step: '06', title: 'Scale & Iterate', desc: 'Monitor, gather feedback, and iterate fast', duration: 'Ongoing' },
  ];

  const packages = [
    {
      name: 'Starter',
      emoji: '🌱',
      price: '$4,999',
      desc: 'Perfect for idea validation',
      features: ['Landing Page + Branding', 'Interactive Prototype', 'Market Research Report', 'Basic MVP (4 weeks)', '1 Month Post-Launch Support', 'Analytics Setup'],
      popular: false,
    },
    {
      name: 'Growth',
      emoji: '🚀',
      price: '$14,999',
      desc: 'Full MVP to market',
      features: ['Everything in Starter', 'Full MVP Development', 'Admin Dashboard', 'Payment Integration', '3 Months Support', 'CI/CD + Hosting Setup'],
      popular: true,
    },
    {
      name: 'Scale',
      emoji: '⚡',
      price: '$29,999',
      desc: 'Production-ready product',
      features: ['Everything in Growth', 'Mobile App (iOS + Android)', 'Advanced Analytics + AI', 'Auto-Scaling Infrastructure', '6 Months Dedicated Team', 'CTO Advisory Sessions'],
      popular: false,
    },
  ];

  const successStories = [
    {
      name: 'FoodieHub',
      desc: 'Food delivery startup — MVP to 75K users in 6 months',
      raised: '$2.5M Seed Round',
      metric: '75K+ Users',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'EduTech Pro',
      desc: 'EdTech platform — From idea to 50K students in 8 months',
      raised: '$5M Series A',
      metric: '50K+ Students',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'HealthSync',
      desc: 'HealthTech app — 100K downloads, 4.8★ rating on App Store',
      raised: '$3M Seed Round',
      metric: '100K+ Downloads',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
  ];

  const stats = [
    { icon: <RocketLaunch />, num: '80+', label: 'Startups Launched' },
    { icon: <AttachMoney />, num: '$50M+', label: 'Funding Raised by Clients' },
    { icon: <Timer />, num: '6 Weeks', label: 'Avg MVP Delivery' },
    { icon: <Groups />, num: '95%', label: 'Client Retention' },
  ];

  return (
    <>
      <Navbar />
      <Box sx={{ backgroundColor: '#050d1a', fontFamily: f, position: 'relative', overflow: 'hidden' }}>

        {/* Bg Glows */}
        {[
          { top: '3%', left: '-8%', color: '245,158,11' },
          { top: '35%', right: '-8%', color: '59,130,246' },
          { bottom: '15%', left: '30%', color: '168,85,247' },
        ].map((g, i) => (
          <Box key={i} sx={{ position: 'absolute', ...g, width: 500, height: 500, background: `radial-gradient(circle, rgba(${g.color},0.12), transparent 70%)`, filter: 'blur(80px)', pointerEvents: 'none' }} />
        ))}

        {/* ===== HERO ===== */}
        <Box sx={{ pt: { xs: 14, md: 18 }, pb: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
            <Chip
              icon={<RocketLaunch sx={{ color: '#f59e0b !important', fontSize: 18 }} />}
              label="FOR STARTUPS & FOUNDERS"
              sx={{ fontFamily: f, fontWeight: 600, fontSize: '0.78rem', letterSpacing: 1.5, mb: 3, backgroundColor: 'rgba(245,158,11,0.15)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.3)', borderRadius: '8px', py: 2.2 }}
            />

            <Typography variant="h1" sx={{ fontFamily: f, color: '#fff', fontWeight: 800, fontSize: { xs: '2.2rem', sm: '3rem', md: '3.8rem' }, lineHeight: 1.15, mb: 3 }}>
              From idea to{' '}
              <Box component="span" sx={{ background: 'linear-gradient(90deg, #f59e0b, #fbbf24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                launch in weeks
              </Box>
              , not months.
            </Typography>

            <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.7)', fontSize: { xs: '1rem', md: '1.15rem' }, maxWidth: 650, mx: 'auto', lineHeight: 1.7, mb: 5 }}>
              We partner with early-stage startups to build beautiful, scalable products fast. Stop burning cash on slow development — launch your MVP and start growing.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 6 }}>
              <Button variant="contained" endIcon={<ArrowForward />} sx={{ fontFamily: f, background: 'linear-gradient(90deg, #f59e0b, #d97706)', color: '#000', textTransform: 'none', fontWeight: 700, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '10px', boxShadow: '0 4px 20px rgba(245,158,11,0.4)', '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 6px 25px rgba(245,158,11,0.5)' }, transition: 'all 0.3s ease' }}>
                Launch My Startup
              </Button>
              <Button variant="outlined" sx={{ fontFamily: f, color: '#fff', borderColor: 'rgba(255,255,255,0.3)', textTransform: 'none', fontWeight: 600, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '10px', '&:hover': { borderColor: '#f59e0b', backgroundColor: 'rgba(245,158,11,0.1)', transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>
                See Our Work
              </Button>
            </Box>

            {/* Stats */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2,1fr)', md: 'repeat(4,1fr)' }, gap: 2.5, maxWidth: 850, mx: 'auto' }}>
              {stats.map((s, i) => (
                <Box key={i} sx={{ ...glass, p: 2.5, textAlign: 'center', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-4px)', borderColor: 'rgba(245,158,11,0.3)' } }}>
                  <Box sx={{ color: '#f59e0b', mb: 0.8, '& .MuiSvgIcon-root': { fontSize: 26 } }}>{s.icon}</Box>
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
              <Typography sx={{ fontFamily: f, color: '#f59e0b', fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>What We Offer</Typography>
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                Everything your startup needs to{' '}
                <Box component="span" sx={{ color: '#f59e0b' }}>succeed</Box>
              </Typography>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' }, gap: 3 }}>
              {services.map((s, i) => (
                <Box key={i} sx={{ ...glass, p: 4, transition: 'all 0.4s ease', cursor: 'pointer', '&:hover': { transform: 'translateY(-8px)', borderColor: `${s.color}40`, boxShadow: `0 16px 40px rgba(0,0,0,0.25)`, '& .sicon': { transform: 'scale(1.1) rotate(5deg)' } } }}>
                  <Box className="sicon" sx={{ width: 56, height: 56, borderRadius: '14px', background: `linear-gradient(135deg, ${s.color}, ${s.color}99)`, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2.5, transition: 'all 0.4s ease', boxShadow: `0 4px 14px ${s.color}30`, '& .MuiSvgIcon-root': { color: '#fff', fontSize: 28 } }}>
                    {s.icon}
                  </Box>
                  <Typography sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: '1.1rem', mb: 1 }}>{s.title}</Typography>
                  <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', lineHeight: 1.6 }}>{s.desc}</Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* ===== PROCESS ===== */}
        <Box sx={{ py: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography sx={{ fontFamily: f, color: '#f59e0b', fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>Our Process</Typography>
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                From zero to launch in{' '}
                <Box component="span" sx={{ color: '#f59e0b' }}>6 steps</Box>
              </Typography>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' }, gap: 3 }}>
              {process.map((p, i) => (
                <Box key={i} sx={{ ...glass, p: 3.5, position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-6px)', borderColor: 'rgba(245,158,11,0.3)' } }}>
                  {/* Step Number Bg */}
                  <Typography sx={{ position: 'absolute', top: -8, right: 10, fontFamily: f, fontSize: '5rem', fontWeight: 900, color: 'rgba(245,158,11,0.06)', lineHeight: 1, pointerEvents: 'none' }}>
                    {p.step}
                  </Typography>

                  <Chip label={p.duration} size="small" sx={{ fontFamily: f, fontSize: '0.72rem', fontWeight: 600, height: 24, backgroundColor: 'rgba(245,158,11,0.12)', color: '#f59e0b', borderRadius: '6px', mb: 2 }} />
                  <Typography sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: '1.1rem', mb: 1, position: 'relative' }}>{p.title}</Typography>
                  <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem', lineHeight: 1.5, position: 'relative' }}>{p.desc}</Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* ===== SUCCESS STORIES ===== */}
        <Box sx={{ py: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography sx={{ fontFamily: f, color: '#f59e0b', fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>Success Stories</Typography>
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                Startups we helped{' '}
                <Box component="span" sx={{ color: '#f59e0b' }}>take off</Box>
              </Typography>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3,1fr)' }, gap: 3 }}>
              {successStories.map((s, i) => (
                <Box key={i} sx={{ ...glass, overflow: 'hidden', transition: 'all 0.4s ease', cursor: 'pointer', '&:hover': { transform: 'translateY(-8px)', borderColor: 'rgba(245,158,11,0.3)', boxShadow: '0 16px 40px rgba(0,0,0,0.3)', '& .story-img': { transform: 'scale(1.08)' } } }}>
                  <Box sx={{ height: 200, overflow: 'hidden', position: 'relative' }}>
                    <Box className="story-img" sx={{ position: 'absolute', inset: 0, backgroundImage: `url(${s.image})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.6s ease' }} />
                    <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(5,13,26,0.8) 0%, transparent 60%)' }} />
                    <Chip label={s.raised} sx={{ position: 'absolute', bottom: 14, left: 14, fontFamily: f, fontWeight: 600, fontSize: '0.78rem', backgroundColor: '#f59e0b', color: '#000', borderRadius: '6px' }} />
                  </Box>
                  <Box sx={{ p: 3 }}>
                    <Typography sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: '1.15rem', mb: 0.8 }}>{s.name}</Typography>
                    <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem', lineHeight: 1.5, mb: 2 }}>{s.desc}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Chip icon={<TrendingUp sx={{ color: '#10b981 !important', fontSize: 16 }} />} label={s.metric} size="small" sx={{ fontFamily: f, fontSize: '0.78rem', fontWeight: 600, backgroundColor: 'rgba(16,185,129,0.12)', color: '#10b981', borderRadius: '6px' }} />
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#f59e0b', cursor: 'pointer', '&:hover': { gap: 1 }, transition: 'all 0.3s ease' }}>
                        <Typography sx={{ fontFamily: f, fontSize: '0.85rem', fontWeight: 600 }}>Read More</Typography>
                        <ArrowForward sx={{ fontSize: 16 }} />
                      </Box>
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
              <Typography sx={{ fontFamily: f, color: '#f59e0b', fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>Startup Packages</Typography>
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                Flexible plans for every stage
              </Typography>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3,1fr)' }, gap: 3 }}>
              {packages.map((p, i) => (
                <Box key={i} sx={{ ...glass, p: 4, position: 'relative', overflow: 'hidden', transition: 'all 0.4s ease', ...(p.popular && { borderColor: 'rgba(245,158,11,0.4)', background: 'linear-gradient(135deg, rgba(245,158,11,0.08), rgba(245,158,11,0.02))' }), '&:hover': { transform: 'translateY(-8px)', borderColor: 'rgba(245,158,11,0.4)' } }}>
                  {p.popular && (
                    <Chip icon={<AutoAwesome sx={{ color: '#000 !important', fontSize: 16 }} />} label="Most Popular" sx={{ position: 'absolute', top: 16, right: 16, fontFamily: f, fontWeight: 600, fontSize: '0.72rem', backgroundColor: '#f59e0b', color: '#000', borderRadius: '6px', height: 26 }} />
                  )}

                  <Typography sx={{ fontSize: '2rem', mb: 1 }}>{p.emoji}</Typography>
                  <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', fontWeight: 500, mb: 0.5 }}>{p.name}</Typography>
                  <Typography sx={{ fontFamily: f, color: '#fff', fontWeight: 800, fontSize: '2.5rem', mb: 0.5 }}>{p.price}</Typography>
                  <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', mb: 3 }}>{p.desc}</Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3 }}>
                    {p.features.map((feat, fi) => (
                      <Box key={fi} sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                        <CheckCircle sx={{ fontSize: 18, color: p.popular ? '#f59e0b' : '#10b981' }} />
                        <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.75)', fontSize: '0.88rem' }}>{feat}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Button fullWidth variant={p.popular ? 'contained' : 'outlined'} endIcon={<ArrowForward />} sx={{ fontFamily: f, textTransform: 'none', fontWeight: 600, py: 1.3, borderRadius: '10px', transition: 'all 0.3s ease', ...(p.popular ? { background: 'linear-gradient(90deg, #f59e0b, #d97706)', color: '#000', boxShadow: '0 4px 14px rgba(245,158,11,0.4)', '&:hover': { transform: 'translateY(-2px)' } } : { color: '#fff', borderColor: 'rgba(255,255,255,0.2)', '&:hover': { borderColor: '#f59e0b', backgroundColor: 'rgba(245,158,11,0.1)', transform: 'translateY(-2px)' } }) }}>
                    Get Started
                  </Button>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* ===== CTA ===== */}
        <Box sx={{ py: { xs: 6, md: 8 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="md">
            <Box sx={{ ...glass, background: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(245,158,11,0.03))', borderColor: 'rgba(245,158,11,0.3)', p: { xs: 4, md: 6 }, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <Box sx={{ position: 'absolute', top: '-30%', right: '-15%', width: 350, height: 350, background: 'radial-gradient(circle, rgba(245,158,11,0.2), transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} />

              <RocketLaunch sx={{ fontSize: 48, color: '#f59e0b', mb: 2, position: 'relative' }} />
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' }, mb: 2, position: 'relative' }}>
                Ready to launch your startup?
              </Typography>
              <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.65)', fontSize: '1rem', mb: 4, lineHeight: 1.7, maxWidth: 500, mx: 'auto', position: 'relative' }}>
                Book a free 30-minute strategy call. We&apos;ll help you plan your MVP, estimate costs, and create a roadmap to launch.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
                <Button variant="contained" endIcon={<ArrowForward />} sx={{ fontFamily: f, background: 'linear-gradient(90deg, #f59e0b, #d97706)', color: '#000', textTransform: 'none', fontWeight: 700, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '10px', boxShadow: '0 4px 20px rgba(245,158,11,0.4)', '&:hover': { transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>
                  Book Free Strategy Call
                </Button>
                <Button variant="outlined" sx={{ fontFamily: f, color: '#fff', borderColor: 'rgba(255,255,255,0.3)', textTransform: 'none', fontWeight: 600, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '10px', '&:hover': { borderColor: '#f59e0b', backgroundColor: 'rgba(245,158,11,0.1)', transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>
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