'use client';

import React, { useState } from 'react';
import { Box, Button, Container, Typography, Chip, IconButton, Switch } from '@mui/material';
import {
  ArrowForward,
  Cloud,
  Speed,
  Security,
  Api,
  Storage,
  AutoAwesome,
  CheckCircle,
  TrendingUp,
  Groups,
  Timer,
  Bolt,
  ChevronLeft,
  ChevronRight,
  Star,
  FormatQuote,
  Webhook,
  Hub,
  DataObject,
  CloudSync,
  Lock,
  Notifications,
} from '@mui/icons-material';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const f = "'Poppins', sans-serif";
const glass = {
  background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '20px',
};
const ac = '#06b6d4'; // cyan accent

export default function SaaSPage() {
  const [yearly, setYearly] = useState(true);
  const [tIdx, setTIdx] = useState(0);

  const features = [
    { icon: <Cloud />, title: 'Multi-Tenant Architecture', desc: 'Serve thousands of customers on shared infra with complete data isolation.', color: ac },
    { icon: <Api />, title: 'RESTful & GraphQL APIs', desc: 'Developer-friendly APIs with OAuth2, rate limiting, and comprehensive docs.', color: '#3b82f6' },
    { icon: <Security />, title: 'Enterprise Security', desc: 'SOC2, GDPR, end-to-end encryption, SSO, and role-based access control.', color: '#10b981' },
    { icon: <Storage />, title: 'Auto-Scaling Infra', desc: 'AWS/GCP auto-scaling, load balancing, and 99.99% uptime guarantee.', color: '#f59e0b' },
    { icon: <AutoAwesome />, title: 'AI/ML Integration', desc: 'Built-in AI features — smart recommendations, predictions, and NLP.', color: '#a855f7' },
    { icon: <Webhook />, title: 'Webhooks & Integrations', desc: 'Connect with 100+ tools via webhooks, Zapier, and native integrations.', color: '#ec4899' },
  ];

  const techStack = [
    { icon: <DataObject />, title: 'Microservices', desc: 'Loosely coupled services for independent scaling' },
    { icon: <CloudSync />, title: 'CI/CD Pipelines', desc: 'Automated testing, building, and deployment' },
    { icon: <Hub />, title: 'Event-Driven', desc: 'Kafka/RabbitMQ for real-time data processing' },
    { icon: <Lock />, title: 'Zero-Trust Security', desc: 'Every request authenticated and authorized' },
    { icon: <Speed />, title: 'Edge Computing', desc: 'Global CDN for sub-100ms response times' },
    { icon: <Notifications />, title: 'Real-Time Updates', desc: 'WebSocket-powered live notifications' },
  ];

  const plans = [
    {
      name: 'Starter', emoji: '🌱', monthly: 49, yearly: 39,
      desc: 'For early-stage SaaS',
      features: ['Up to 1K Users', '10GB Storage', 'Basic Analytics', 'Email Support', '3 API Endpoints', 'Community Access'],
      popular: false,
    },
    {
      name: 'Growth', emoji: '🚀', monthly: 199, yearly: 159,
      desc: 'For scaling products',
      features: ['Up to 50K Users', '100GB Storage', 'Advanced Analytics + AI', 'Priority Support 24/7', 'Unlimited APIs', 'Custom Domain & Branding'],
      popular: true,
    },
    {
      name: 'Enterprise', emoji: '⚡', monthly: 499, yearly: 399,
      desc: 'For large-scale platforms',
      features: ['Unlimited Users', '1TB+ Storage', 'Dedicated Infrastructure', 'SLA 99.99% Uptime', 'On-Premise Option', 'Dedicated Account Manager'],
      popular: false,
    },
  ];

  const caseStudies = [
    { title: 'HR Management SaaS', desc: '200+ companies, 50K employees managed with automated payroll and attendance.', metric: '200+ Companies', growth: '400% YoY', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', tags: ['React', 'Node.js', 'AWS'] },
    { title: 'Project Management Tool', desc: 'Real-time collaboration platform serving 10K+ teams globally with Kanban & Gantt.', metric: '10K+ Teams', growth: '300% YoY', image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', tags: ['Next.js', 'WebSocket', 'Redis'] },
    { title: 'FinTech Dashboard', desc: 'Multi-currency payment platform processing $50M+ monthly with real-time analytics.', metric: '$50M+ Monthly', growth: '250% YoY', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', tags: ['Python', 'Stripe', 'Kafka'] },
  ];

  const testimonials = [
    { name: 'James Wilson', role: 'CTO, PeopleFirst HR', text: 'Bendra built our entire SaaS from scratch. We went from 0 to 200 paying customers in 8 months. Their architecture decisions were spot-on!', rating: 5 },
    { name: 'Priya Sharma', role: 'Founder, TaskFlow', text: 'The real-time collaboration features they built are incredible. Our users love the speed and reliability. Best tech partner we\'ve worked with.', rating: 5 },
    { name: 'Alex Morgan', role: 'CEO, PayStream', text: 'Processing $50M monthly with zero downtime. Bendra\'s SaaS expertise gave us the confidence to scale aggressively.', rating: 5 },
  ];

  const stats = [
    { icon: <Cloud />, num: '40+', label: 'SaaS Products Built' },
    { icon: <Groups />, num: '2M+', label: 'End Users Served' },
    { icon: <Timer />, num: '99.99%', label: 'Avg Uptime' },
    { icon: <TrendingUp />, num: '10x', label: 'Avg Client Growth' },
  ];

  return (
    <>
      <Navbar />
      <Box sx={{ backgroundColor: '#050d1a', fontFamily: f, position: 'relative', overflow: 'hidden' }}>

        {/* Bg Glows */}
        {[
          { top: '3%', left: '-8%', color: '6,182,212' },
          { top: '40%', right: '-8%', color: '59,130,246' },
          { bottom: '15%', left: '25%', color: '168,85,247' },
        ].map((g, i) => (
          <Box key={i} sx={{ position: 'absolute', ...g, width: 500, height: 500, background: `radial-gradient(circle, rgba(${g.color},0.12), transparent 70%)`, filter: 'blur(80px)', pointerEvents: 'none' }} />
        ))}

        {/* ===== HERO ===== */}
        <Box sx={{ pt: { xs: 14, md: 18 }, pb: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
            <Chip icon={<Cloud sx={{ color: `${ac} !important`, fontSize: 18 }} />} label="SAAS DEVELOPMENT" sx={{ fontFamily: f, fontWeight: 600, fontSize: '0.78rem', letterSpacing: 1.5, mb: 3, backgroundColor: `${ac}20`, color: ac, border: `1px solid ${ac}50`, borderRadius: '8px', py: 2.2 }} />

            <Typography variant="h1" sx={{ fontFamily: f, color: '#fff', fontWeight: 800, fontSize: { xs: '2.2rem', sm: '3rem', md: '3.8rem' }, lineHeight: 1.15, mb: 3 }}>
              Build SaaS that{' '}
              <Box component="span" sx={{ background: `linear-gradient(90deg, ${ac}, #22d3ee)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                scales to millions.
              </Box>
            </Typography>

            <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.7)', fontSize: { xs: '1rem', md: '1.15rem' }, maxWidth: 650, mx: 'auto', lineHeight: 1.7, mb: 5 }}>
              We architect, design, and build production-ready SaaS platforms with multi-tenancy, subscription billing, analytics, and enterprise-grade security — from MVP to scale.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 6 }}>
              <Button variant="contained" endIcon={<ArrowForward />} sx={{ fontFamily: f, background: `linear-gradient(90deg, ${ac}, #0891b2)`, color: '#fff', textTransform: 'none', fontWeight: 700, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '10px', boxShadow: `0 4px 20px ${ac}60`, '&:hover': { transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>
                Build My SaaS
              </Button>
              <Button variant="outlined" sx={{ fontFamily: f, color: '#fff', borderColor: 'rgba(255,255,255,0.3)', textTransform: 'none', fontWeight: 600, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '10px', '&:hover': { borderColor: ac, backgroundColor: `${ac}15`, transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>
                See Case Studies
              </Button>
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
              <Typography sx={{ fontFamily: f, color: ac, fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>Core Features</Typography>
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                Everything a modern SaaS needs
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

        {/* ===== TECH ARCHITECTURE ===== */}
        <Box sx={{ py: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 4, md: 6 }, alignItems: 'center' }}>
              <Box sx={{ flex: { md: '1 1 40%' } }}>
                <Typography sx={{ fontFamily: f, color: ac, fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>Architecture</Typography>
                <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' }, lineHeight: 1.2, mb: 2 }}>
                  Built on{' '}
                  <Box component="span" sx={{ color: ac }}>battle-tested</Box>{' '}
                  architecture
                </Typography>
                <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', lineHeight: 1.7, mb: 3 }}>
                  Our SaaS products are built using modern cloud-native architecture patterns that ensure reliability, performance, and infinite scalability.
                </Typography>
                {['Handle 1M+ concurrent users', 'Sub-100ms API response times', 'Zero-downtime deployments'].map((item, i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mb: 1.5 }}>
                    <CheckCircle sx={{ color: '#10b981', fontSize: 20 }} />
                    <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>{item}</Typography>
                  </Box>
                ))}
              </Box>

              <Box sx={{ flex: { md: '1 1 60%' }, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)' }, gap: 2 }}>
                {techStack.map((t, i) => (
                  <Box key={i} sx={{ ...glass, p: 2.5, display: 'flex', gap: 2, alignItems: 'flex-start', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-4px)', borderColor: `${ac}30` } }}>
                    <Box sx={{ width: 42, height: 42, borderRadius: '10px', background: `${ac}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, '& .MuiSvgIcon-root': { color: ac, fontSize: 22 } }}>
                      {t.icon}
                    </Box>
                    <Box>
                      <Typography sx={{ fontFamily: f, color: '#fff', fontWeight: 600, fontSize: '0.95rem', mb: 0.3 }}>{t.title}</Typography>
                      <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', lineHeight: 1.5 }}>{t.desc}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Container>
        </Box>

        {/* ===== CASE STUDIES ===== */}
        <Box sx={{ py: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography sx={{ fontFamily: f, color: ac, fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>Case Studies</Typography>
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                SaaS products we&apos;ve launched
              </Typography>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3,1fr)' }, gap: 3 }}>
              {caseStudies.map((cs, i) => (
                <Box key={i} sx={{ ...glass, overflow: 'hidden', transition: 'all 0.4s ease', cursor: 'pointer', '&:hover': { transform: 'translateY(-8px)', borderColor: `${ac}40`, '& .cimg': { transform: 'scale(1.08)' } } }}>
                  <Box sx={{ height: 200, overflow: 'hidden', position: 'relative' }}>
                    <Box className="cimg" sx={{ position: 'absolute', inset: 0, backgroundImage: `url(${cs.image})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.6s ease' }} />
                    <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(5,13,26,0.8) 0%, transparent 50%)' }} />
                    <Box sx={{ position: 'absolute', bottom: 14, left: 14, display: 'flex', gap: 1 }}>
                      <Chip label={cs.metric} sx={{ fontFamily: f, fontWeight: 600, fontSize: '0.78rem', backgroundColor: ac, color: '#fff', borderRadius: '6px' }} />
                      <Chip label={cs.growth} sx={{ fontFamily: f, fontWeight: 600, fontSize: '0.78rem', backgroundColor: '#10b981', color: '#fff', borderRadius: '6px' }} />
                    </Box>
                  </Box>
                  <Box sx={{ p: 3 }}>
                    <Typography sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: '1.15rem', mb: 1 }}>{cs.title}</Typography>
                    <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', lineHeight: 1.5, mb: 2 }}>{cs.desc}</Typography>
                    <Box sx={{ display: 'flex', gap: 0.8, flexWrap: 'wrap' }}>
                      {cs.tags.map((tag) => (
                        <Chip key={tag} label={tag} size="small" sx={{ fontFamily: f, fontSize: '0.72rem', fontWeight: 500, height: 24, backgroundColor: `${ac}15`, color: '#22d3ee', borderRadius: '6px' }} />
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
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <Typography sx={{ fontFamily: f, color: ac, fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>Pricing</Typography>
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' }, mb: 3 }}>
                Simple, transparent pricing
              </Typography>
            </Box>

            {/* Toggle */}
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1.5, mb: 5 }}>
              <Typography sx={{ fontFamily: f, color: !yearly ? '#fff' : 'rgba(255,255,255,0.5)', fontWeight: 600, fontSize: '0.9rem' }}>Monthly</Typography>
              <Switch checked={yearly} onChange={() => setYearly(!yearly)} sx={{ '& .MuiSwitch-switchBase.Mui-checked': { color: ac }, '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { backgroundColor: ac } }} />
              <Typography sx={{ fontFamily: f, color: yearly ? '#fff' : 'rgba(255,255,255,0.5)', fontWeight: 600, fontSize: '0.9rem' }}>Yearly</Typography>
              {yearly && <Chip label="Save 20%" size="small" sx={{ fontFamily: f, fontSize: '0.72rem', fontWeight: 600, backgroundColor: '#10b98120', color: '#10b981', borderRadius: '6px', height: 24 }} />}
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3,1fr)' }, gap: 3 }}>
              {plans.map((p, i) => (
                <Box key={i} sx={{ ...glass, p: 4, position: 'relative', overflow: 'hidden', transition: 'all 0.4s ease', ...(p.popular && { borderColor: `${ac}50`, background: `linear-gradient(135deg, ${ac}12, ${ac}05)` }), '&:hover': { transform: 'translateY(-8px)', borderColor: `${ac}50` } }}>
                  {p.popular && <Chip icon={<Bolt sx={{ color: '#000 !important', fontSize: 16 }} />} label="Recommended" sx={{ position: 'absolute', top: 16, right: 16, fontFamily: f, fontWeight: 600, fontSize: '0.72rem', backgroundColor: ac, color: '#000', borderRadius: '6px', height: 26 }} />}

                  <Typography sx={{ fontSize: '2rem', mb: 1 }}>{p.emoji}</Typography>
                  <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', fontWeight: 500, mb: 0.5 }}>{p.name}</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5, mb: 0.5 }}>
                    <Typography sx={{ fontFamily: f, color: '#fff', fontWeight: 800, fontSize: '2.5rem' }}>${yearly ? p.yearly : p.monthly}</Typography>
                    <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>/mo</Typography>
                  </Box>
                  <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', mb: 3 }}>{p.desc}</Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3 }}>
                    {p.features.map((feat, fi) => (
                      <Box key={fi} sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                        <CheckCircle sx={{ fontSize: 18, color: p.popular ? ac : '#10b981' }} />
                        <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.75)', fontSize: '0.88rem' }}>{feat}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Button fullWidth variant={p.popular ? 'contained' : 'outlined'} endIcon={<ArrowForward />} sx={{ fontFamily: f, textTransform: 'none', fontWeight: 600, py: 1.3, borderRadius: '10px', transition: 'all 0.3s ease', ...(p.popular ? { background: `linear-gradient(90deg, ${ac}, #0891b2)`, color: '#fff', boxShadow: `0 4px 14px ${ac}40`, '&:hover': { transform: 'translateY(-2px)' } } : { color: '#fff', borderColor: 'rgba(255,255,255,0.2)', '&:hover': { borderColor: ac, backgroundColor: `${ac}15`, transform: 'translateY(-2px)' } }) }}>
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

              <Cloud sx={{ fontSize: 48, color: ac, mb: 2, position: 'relative' }} />
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' }, mb: 2, position: 'relative' }}>
                Ready to build your SaaS?
              </Typography>
              <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.65)', fontSize: '1rem', mb: 4, lineHeight: 1.7, maxWidth: 500, mx: 'auto', position: 'relative' }}>
                Book a free architecture consultation. We&apos;ll help you plan your SaaS, choose the right stack, and create a roadmap to launch.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
                <Button variant="contained" endIcon={<ArrowForward />} sx={{ fontFamily: f, background: `linear-gradient(90deg, ${ac}, #0891b2)`, color: '#fff', textTransform: 'none', fontWeight: 700, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '10px', boxShadow: `0 4px 20px ${ac}50`, '&:hover': { transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>
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