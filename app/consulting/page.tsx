'use client';

import React, { useState } from 'react';
import { Box, Button, Container, Typography, Chip, IconButton } from '@mui/material';
import {
  ArrowForward,
  Lightbulb,
  Architecture,
  Psychology,
  Timeline,
  Assessment,
  GroupWork,
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
  School,
  Handshake,
  QueryStats,
  AutoFixHigh,
  SupportAgent,
  WorkspacePremium,
} from '@mui/icons-material';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const f = "'Poppins', sans-serif";
const glass = {
  background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '20px',
};
const ac = '#f97316'; // orange accent

export default function ConsultingPage() {
  const [tIdx, setTIdx] = useState(0);

  const services = [
    { icon: <Psychology />, title: 'Digital Strategy', desc: 'Define your digital roadmap with market analysis, technology assessment, and growth planning.', color: ac },
    { icon: <Architecture />, title: 'Technology Architecture', desc: 'Design scalable, future-proof tech architecture aligned with your business goals.', color: '#3b82f6' },
    { icon: <Assessment />, title: 'Business Process Audit', desc: 'Identify bottlenecks, inefficiencies, and automation opportunities in your workflows.', color: '#10b981' },
    { icon: <QueryStats />, title: 'Data & Analytics Strategy', desc: 'Turn raw data into actionable insights with BI dashboards and predictive analytics.', color: '#a855f7' },
    { icon: <AutoFixHigh />, title: 'Digital Transformation', desc: 'End-to-end transformation from legacy systems to modern cloud-native platforms.', color: '#ec4899' },
    { icon: <GroupWork />, title: 'Team Augmentation', desc: 'Scale your team with vetted senior developers, designers, and project managers.', color: '#06b6d4' },
  ];

  const approach = [
    { step: '01', icon: <Handshake />, title: 'Discovery Session', desc: 'Deep-dive into your business, challenges, goals, and current tech landscape.', output: 'Business Assessment Report' },
    { step: '02', icon: <Lightbulb />, title: 'Strategy Design', desc: 'Create a tailored digital strategy with clear milestones, KPIs, and ROI projections.', output: 'Strategic Roadmap' },
    { step: '03', icon: <Architecture />, title: 'Solution Blueprint', desc: 'Design detailed technical architecture, integration plans, and implementation timeline.', output: 'Technical Blueprint' },
    { step: '04', icon: <Timeline />, title: 'Implementation Support', desc: 'Hands-on guidance during execution with regular reviews and course corrections.', output: 'Progress Reports' },
    { step: '05', icon: <Assessment />, title: 'Measure & Optimize', desc: 'Track KPIs, analyze results, and continuously optimize for maximum ROI.', output: 'Performance Dashboard' },
  ];

  const industries = [
    { name: 'Real Estate', icon: '🏢', projects: '35+', desc: 'CRM, property management, virtual tours' },
    { name: 'Healthcare', icon: '🏥', projects: '20+', desc: 'Telemedicine, EHR, patient portals' },
    { name: 'FinTech', icon: '💰', projects: '25+', desc: 'Payment platforms, banking apps, trading' },
    { name: 'Education', icon: '📚', projects: '18+', desc: 'LMS, EdTech, e-learning platforms' },
    { name: 'Retail', icon: '🛒', projects: '30+', desc: 'E-commerce, POS, inventory management' },
    { name: 'Logistics', icon: '🚚', projects: '15+', desc: 'Fleet tracking, route optimization, WMS' },
    { name: 'Manufacturing', icon: '🏭', projects: '12+', desc: 'IoT, ERP integration, quality control' },
    { name: 'Hospitality', icon: '🏨', projects: '10+', desc: 'Booking systems, guest experience, PMS' },
  ];

  const packages = [
    {
      name: 'Advisory', emoji: '💡', price: '$2,500',
      period: 'per engagement',
      desc: 'Quick strategic guidance',
      features: ['2-Hour Strategy Session', 'Business Assessment', 'Technology Recommendations', 'Written Summary Report', 'Email Follow-Up Support', '1 Revision Round'],
      popular: false,
    },
    {
      name: 'Strategic', emoji: '🎯', price: '$9,999',
      period: 'per project',
      desc: 'Complete digital strategy',
      features: ['Full Business Audit', 'Custom Digital Roadmap', 'Tech Architecture Design', 'ROI Projections', '4 Weeks of Support', 'Monthly Review Calls'],
      popular: true,
    },
    {
      name: 'Transformation', emoji: '🚀', price: '$24,999',
      period: 'per quarter',
      desc: 'End-to-end transformation',
      features: ['Everything in Strategic', 'Implementation Oversight', 'Dedicated Consultant', 'Team Training & Workshops', 'Quarterly Business Reviews', 'Priority Slack Channel'],
      popular: false,
    },
  ];

  const results = [
    {
      client: 'Dubai Properties Group',
      challenge: 'Manual lead management causing 40% lead loss',
      solution: 'CRM strategy + Zoho implementation roadmap',
      results: ['60% increase in conversions', '45% faster response time', '$2M additional revenue'],
      industry: 'Real Estate',
    },
    {
      client: 'MedCare Hospitals',
      challenge: 'Fragmented patient data across 15 hospitals',
      solution: 'Digital transformation + unified platform strategy',
      results: ['100% data centralization', '70% reduction in no-shows', '4.8★ patient app rating'],
      industry: 'Healthcare',
    },
    {
      client: 'FastTrack Logistics',
      challenge: 'High fuel costs and inefficient route planning',
      solution: 'Tech audit + ML-powered route optimization',
      results: ['30% fuel cost reduction', '25% faster deliveries', '500+ vehicles optimized'],
      industry: 'Logistics',
    },
  ];

  const stats = [
    { icon: <Verified />, num: '150+', label: 'Consulting Projects' },
    { icon: <TrendingUp />, num: '3.5x', label: 'Avg ROI Delivered' },
    { icon: <Groups />, num: '120+', label: 'Businesses Advised' },
    { icon: <Timer />, num: '8+', label: 'Years Experience' },
  ];

  const team = [
    { name: 'Strategy Consultants', desc: 'Ex-McKinsey & Deloitte advisors with deep industry knowledge', icon: <Psychology /> },
    { name: 'Solution Architects', desc: 'AWS & Azure certified architects with 10+ years experience', icon: <Architecture /> },
    { name: 'Data Scientists', desc: 'ML engineers who turn data into competitive advantage', icon: <QueryStats /> },
    { name: 'Project Managers', desc: 'PMP certified managers ensuring on-time, on-budget delivery', icon: <WorkspacePremium /> },
  ];

  const testimonials = [
    { name: 'Mohammed Al Rashid', role: 'CEO, Dubai Properties', text: 'Bendra\'s consulting transformed our entire sales process. Their CRM strategy alone generated $2M in additional revenue within the first year.', rating: 5 },
    { name: 'Dr. Ayesha Khan', role: 'CIO, MedCare Hospitals', text: 'The digital transformation roadmap they created unified 15 hospitals into one seamless platform. Their strategic thinking is exceptional.', rating: 5 },
    { name: 'Khalid Bin Saeed', role: 'COO, FastTrack Logistics', text: 'Their tech audit saved us 30% in operational costs. The ROI was visible within 3 months. Best consulting investment we\'ve made.', rating: 5 },
  ];

  return (
    <>
      <Navbar />
      <Box sx={{ backgroundColor: '#050d1a', fontFamily: f, position: 'relative', overflow: 'hidden' }}>

        {/* Bg Glows */}
        {[
          { top: '3%', left: '-8%', color: '249,115,22' },
          { top: '40%', right: '-8%', color: '59,130,246' },
          { bottom: '15%', left: '25%', color: '168,85,247' },
        ].map((g, i) => (
          <Box key={i} sx={{ position: 'absolute', ...g, width: 500, height: 500, background: `radial-gradient(circle, rgba(${g.color},0.12), transparent 70%)`, filter: 'blur(80px)', pointerEvents: 'none' }} />
        ))}

        {/* ===== HERO ===== */}
        <Box sx={{ pt: { xs: 14, md: 18 }, pb: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
            <Chip icon={<Lightbulb sx={{ color: `${ac} !important`, fontSize: 18 }} />} label="IT CONSULTING" sx={{ fontFamily: f, fontWeight: 600, fontSize: '0.78rem', letterSpacing: 1.5, mb: 3, backgroundColor: `${ac}20`, color: ac, border: `1px solid ${ac}50`, borderRadius: '8px', py: 2.2 }} />

            <Typography variant="h1" sx={{ fontFamily: f, color: '#fff', fontWeight: 800, fontSize: { xs: '2.2rem', sm: '3rem', md: '3.8rem' }, lineHeight: 1.15, mb: 3 }}>
              Strategy that drives{' '}
              <Box component="span" sx={{ background: `linear-gradient(90deg, ${ac}, #fb923c)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                real results.
              </Box>
            </Typography>

            <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.7)', fontSize: { xs: '1rem', md: '1.15rem' }, maxWidth: 660, mx: 'auto', lineHeight: 1.7, mb: 5 }}>
              We help businesses make smarter technology decisions. From digital strategy and architecture consulting to full-scale transformation — we turn complexity into clarity.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 6 }}>
              <Button variant="contained" endIcon={<ArrowForward />} sx={{ fontFamily: f, background: `linear-gradient(90deg, ${ac}, #ea580c)`, color: '#fff', textTransform: 'none', fontWeight: 700, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '10px', boxShadow: `0 4px 20px ${ac}60`, '&:hover': { transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>
                Book Free Consultation
              </Button>
              <Button variant="outlined" sx={{ fontFamily: f, color: '#fff', borderColor: 'rgba(255,255,255,0.3)', textTransform: 'none', fontWeight: 600, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '10px', '&:hover': { borderColor: ac, backgroundColor: `${ac}15`, transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>
                View Case Studies
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

        {/* ===== SERVICES ===== */}
        <Box sx={{ py: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography sx={{ fontFamily: f, color: ac, fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>Our Services</Typography>
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                Expert guidance for{' '}
                <Box component="span" sx={{ color: ac }}>every challenge</Box>
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

        {/* ===== APPROACH ===== */}
        <Box sx={{ py: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography sx={{ fontFamily: f, color: ac, fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>Our Approach</Typography>
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                A proven 5-step framework
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: 900, mx: 'auto' }}>
              {approach.map((a, i) => (
                <Box key={i} sx={{ ...glass, p: { xs: 3, md: 4 }, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3, alignItems: { sm: 'center' }, transition: 'all 0.3s ease', '&:hover': { transform: 'translateX(8px)', borderColor: `${ac}40` } }}>
                  {/* Left - Step */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, minWidth: { sm: '200px' } }}>
                    <Box sx={{ width: 52, height: 52, borderRadius: '14px', background: `${ac}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, '& .MuiSvgIcon-root': { color: ac, fontSize: 26 } }}>
                      {a.icon}
                    </Box>
                    <Box>
                      <Typography sx={{ fontFamily: f, color: `${ac}80`, fontSize: '0.72rem', fontWeight: 700, letterSpacing: 1 }}>STEP {a.step}</Typography>
                      <Typography sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: '1.05rem' }}>{a.title}</Typography>
                    </Box>
                  </Box>

                  {/* Middle - Desc */}
                  <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', lineHeight: 1.6, flex: 1 }}>{a.desc}</Typography>

                  {/* Right - Output */}
                  <Chip label={`📄 ${a.output}`} sx={{ fontFamily: f, fontSize: '0.75rem', fontWeight: 600, backgroundColor: `${ac}12`, color: ac, borderRadius: '8px', py: 2, whiteSpace: 'nowrap', flexShrink: 0 }} />
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* ===== INDUSTRIES ===== */}
        <Box sx={{ py: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography sx={{ fontFamily: f, color: ac, fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>Industries</Typography>
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                Deep expertise across{' '}
                <Box component="span" sx={{ color: ac }}>8+ industries</Box>
              </Typography>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2,1fr)', sm: 'repeat(3,1fr)', lg: 'repeat(4,1fr)' }, gap: 2.5 }}>
              {industries.map((ind, i) => (
                <Box key={i} sx={{ ...glass, p: 3, textAlign: 'center', transition: 'all 0.3s ease', cursor: 'pointer', '&:hover': { transform: 'translateY(-6px)', borderColor: `${ac}40`, '& .ind-emoji': { transform: 'scale(1.2)' } } }}>
                  <Typography className="ind-emoji" sx={{ fontSize: '2.5rem', mb: 1.5, transition: 'transform 0.3s ease' }}>{ind.icon}</Typography>
                  <Typography sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: '1rem', mb: 0.3 }}>{ind.name}</Typography>
                  <Typography sx={{ fontFamily: f, color: ac, fontWeight: 700, fontSize: '0.85rem', mb: 0.8 }}>{ind.projects} projects</Typography>
                  <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', lineHeight: 1.4 }}>{ind.desc}</Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* ===== CASE RESULTS ===== */}
        <Box sx={{ py: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography sx={{ fontFamily: f, color: ac, fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>Results</Typography>
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                Real impact, real numbers
              </Typography>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3,1fr)' }, gap: 3 }}>
              {results.map((r, i) => (
                <Box key={i} sx={{ ...glass, p: 4, transition: 'all 0.4s ease', '&:hover': { transform: 'translateY(-8px)', borderColor: `${ac}40` } }}>
                  <Chip label={r.industry} size="small" sx={{ fontFamily: f, fontSize: '0.72rem', fontWeight: 600, backgroundColor: `${ac}15`, color: ac, borderRadius: '6px', mb: 2 }} />
                  <Typography sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: '1.1rem', mb: 2 }}>{r.client}</Typography>

                  {/* Challenge */}
                  <Box sx={{ mb: 2, p: 2, borderRadius: '10px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.15)' }}>
                    <Typography sx={{ fontFamily: f, color: '#ef4444', fontSize: '0.72rem', fontWeight: 600, mb: 0.5, textTransform: 'uppercase', letterSpacing: 1 }}>Challenge</Typography>
                    <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: 1.5 }}>{r.challenge}</Typography>
                  </Box>

                  {/* Solution */}
                  <Box sx={{ mb: 2, p: 2, borderRadius: '10px', background: `${ac}08`, border: `1px solid ${ac}20` }}>
                    <Typography sx={{ fontFamily: f, color: ac, fontSize: '0.72rem', fontWeight: 600, mb: 0.5, textTransform: 'uppercase', letterSpacing: 1 }}>Solution</Typography>
                    <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: 1.5 }}>{r.solution}</Typography>
                  </Box>

                  {/* Results */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {r.results.map((res, ri) => (
                      <Box key={ri} sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                        <CheckCircle sx={{ fontSize: 18, color: '#10b981' }} />
                        <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', fontWeight: 600 }}>{res}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* ===== TEAM ===== */}
        <Box sx={{ py: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 4, md: 6 }, alignItems: 'center' }}>
              <Box sx={{ flex: { md: '1 1 40%' } }}>
                <Typography sx={{ fontFamily: f, color: ac, fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>Our Team</Typography>
                <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' }, lineHeight: 1.2, mb: 2 }}>
                  Advised by{' '}
                  <Box component="span" sx={{ color: ac }}>industry veterans</Box>
                </Typography>
                <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', lineHeight: 1.7, mb: 3 }}>
                  Our consulting team combines deep technical expertise with real-world business experience from top consulting firms and tech companies.
                </Typography>
                {['Ex-Big 4 Consulting Experience', 'AWS & Azure Certified Architects', 'Published Industry Thought Leaders'].map((item, i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mb: 1.5 }}>
                    <CheckCircle sx={{ color: '#10b981', fontSize: 20 }} />
                    <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>{item}</Typography>
                  </Box>
                ))}
              </Box>

              <Box sx={{ flex: { md: '1 1 60%' }, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)' }, gap: 2.5 }}>
                {team.map((t, i) => (
                  <Box key={i} sx={{ ...glass, p: 3, display: 'flex', gap: 2, alignItems: 'flex-start', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-4px)', borderColor: `${ac}30` } }}>
                    <Box sx={{ width: 48, height: 48, borderRadius: '12px', background: `${ac}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, '& .MuiSvgIcon-root': { color: ac, fontSize: 24 } }}>
                      {t.icon}
                    </Box>
                    <Box>
                      <Typography sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: '0.95rem', mb: 0.5 }}>{t.name}</Typography>
                      <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', lineHeight: 1.5 }}>{t.desc}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Container>
        </Box>

        {/* ===== PRICING ===== */}
        <Box sx={{ py: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography sx={{ fontFamily: f, color: ac, fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>Engagement Models</Typography>
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                Flexible consulting packages
              </Typography>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3,1fr)' }, gap: 3 }}>
              {packages.map((p, i) => (
                <Box key={i} sx={{ ...glass, p: 4, position: 'relative', overflow: 'hidden', transition: 'all 0.4s ease', ...(p.popular && { borderColor: `${ac}50`, background: `linear-gradient(135deg, ${ac}12, ${ac}05)` }), '&:hover': { transform: 'translateY(-8px)', borderColor: `${ac}50` } }}>
                  {p.popular && <Chip icon={<Bolt sx={{ color: '#000 !important', fontSize: 16 }} />} label="Most Popular" sx={{ position: 'absolute', top: 16, right: 16, fontFamily: f, fontWeight: 600, fontSize: '0.72rem', backgroundColor: ac, color: '#000', borderRadius: '6px', height: 26 }} />}

                  <Typography sx={{ fontSize: '2rem', mb: 1 }}>{p.emoji}</Typography>
                  <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', fontWeight: 500, mb: 0.5 }}>{p.name}</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5, mb: 0.3 }}>
                    <Typography sx={{ fontFamily: f, color: '#fff', fontWeight: 800, fontSize: '2.5rem' }}>{p.price}</Typography>
                  </Box>
                  <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem', mb: 0.5 }}>{p.period}</Typography>
                  <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', mb: 3 }}>{p.desc}</Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3 }}>
                    {p.features.map((feat, fi) => (
                      <Box key={fi} sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                        <CheckCircle sx={{ fontSize: 18, color: p.popular ? ac : '#10b981' }} />
                        <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.75)', fontSize: '0.88rem' }}>{feat}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Button fullWidth variant={p.popular ? 'contained' : 'outlined'} endIcon={<ArrowForward />} sx={{ fontFamily: f, textTransform: 'none', fontWeight: 600, py: 1.3, borderRadius: '10px', transition: 'all 0.3s ease', ...(p.popular ? { background: `linear-gradient(90deg, ${ac}, #ea580c)`, color: '#fff', boxShadow: `0 4px 14px ${ac}40`, '&:hover': { transform: 'translateY(-2px)' } } : { color: '#fff', borderColor: 'rgba(255,255,255,0.2)', '&:hover': { borderColor: ac, backgroundColor: `${ac}15`, transform: 'translateY(-2px)' } }) }}>
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

              <SupportAgent sx={{ fontSize: 48, color: ac, mb: 2, position: 'relative' }} />
              <Typography variant="h3" sx={{ fontFamily: f, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' }, mb: 2, position: 'relative' }}>
                Let&apos;s solve your biggest challenge
              </Typography>
              <Typography sx={{ fontFamily: f, color: 'rgba(255,255,255,0.65)', fontSize: '1rem', mb: 4, lineHeight: 1.7, maxWidth: 500, mx: 'auto', position: 'relative' }}>
                Book a free 30-minute consultation. We&apos;ll analyze your situation and recommend the best path forward — no strings attached.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
                <Button variant="contained" endIcon={<ArrowForward />} sx={{ fontFamily: f, background: `linear-gradient(90deg, ${ac}, #ea580c)`, color: '#fff', textTransform: 'none', fontWeight: 700, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '10px', boxShadow: `0 4px 20px ${ac}50`, '&:hover': { transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>
                  Book Free Consultation
                </Button>
                <Button variant="outlined" sx={{ fontFamily: f, color: '#fff', borderColor: 'rgba(255,255,255,0.3)', textTransform: 'none', fontWeight: 600, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '10px', '&:hover': { borderColor: ac, backgroundColor: `${ac}15`, transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>
                  Download Brochure
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