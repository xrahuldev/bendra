'use client';

import React from 'react';
import { Box, Button, Container, Typography, Chip } from '@mui/material';
import {
  ArrowForward,
  Security,
  Speed,
  CloudQueue,
  SupportAgent,
  IntegrationInstructions,
  Analytics,
  CheckCircle,
  Groups,
  Verified,
} from '@mui/icons-material';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const font = "'Poppins', sans-serif";

const glass = {
  background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '20px',
};

export default function EnterprisePage() {
  const features = [
    { icon: <Security />, title: 'Enterprise Security', desc: 'SOC2 compliant, end-to-end encryption, role-based access control & audit logs.', color: '#3b82f6' },
    { icon: <Speed />, title: '99.99% Uptime SLA', desc: 'Guaranteed availability with redundant infrastructure and real-time monitoring.', color: '#10b981' },
    { icon: <CloudQueue />, title: 'Cloud Infrastructure', desc: 'Multi-region AWS/Azure deployment with auto-scaling and disaster recovery.', color: '#a855f7' },
    { icon: <SupportAgent />, title: 'Dedicated Support', desc: '24/7 priority support with dedicated account manager and technical team.', color: '#f59e0b' },
    { icon: <IntegrationInstructions />, title: 'Custom Integrations', desc: 'Seamless integration with your existing ERP, CRM, HR and finance systems.', color: '#ec4899' },
    { icon: <Analytics />, title: 'Advanced Analytics', desc: 'Real-time dashboards, custom reports, and AI-powered business insights.', color: '#06b6d4' },
  ];

  const solutions = [
    { title: 'Enterprise CRM', desc: 'Unified customer management for teams of 500+', tags: ['Zoho', 'Salesforce', 'Custom'] },
    { title: 'ERP Integration', desc: 'Connect all departments into one seamless system', tags: ['SAP', 'Oracle', 'API'] },
    { title: 'Workflow Automation', desc: 'Automate complex multi-department business processes', tags: ['RPA', 'AI', 'Low-Code'] },
    { title: 'Data Platform', desc: 'Centralized data warehouse with real-time analytics', tags: ['BigQuery', 'Snowflake', 'ETL'] },
  ];

  const clients = [
    'https://cdn.simpleicons.org/samsung/ffffff',
    'https://cdn.simpleicons.org/siemens/ffffff',
    'https://cdn.simpleicons.org/oracle/ffffff',
    'https://cdn.simpleicons.org/dell/ffffff',
    'https://cdn.simpleicons.org/cisco/ffffff',
    'https://cdn.simpleicons.org/ibm/ffffff',
  ];

  const plans = [
    {
      name: 'Business',
      price: '$2,499',
      period: '/month',
      desc: 'For growing teams',
      features: ['Up to 100 Users', '50GB Storage', 'Email Support', 'Basic Analytics', 'Standard SLA', '5 Integrations'],
      popular: false,
    },
    {
      name: 'Enterprise',
      price: '$5,999',
      period: '/month',
      desc: 'For large organizations',
      features: ['Unlimited Users', '1TB Storage', '24/7 Priority Support', 'Advanced Analytics & AI', '99.99% Uptime SLA', 'Unlimited Integrations'],
      popular: true,
    },
    {
      name: 'Custom',
      price: 'Let\'s Talk',
      period: '',
      desc: 'Tailored for your needs',
      features: ['Everything in Enterprise', 'On-Premise Option', 'Dedicated Infra', 'Custom Development', 'White-Label Option', 'SLA Negotiable'],
      popular: false,
    },
  ];

  return (
    <>
      <Navbar />
      <Box sx={{ backgroundColor: '#050d1a', fontFamily: font, position: 'relative', overflow: 'hidden' }}>

        {/* Bg Glows */}
        {[
          { top: '5%', left: '-8%', color: '59,130,246' },
          { top: '45%', right: '-8%', color: '168,85,247' },
          { bottom: '10%', left: '25%', color: '16,185,129' },
        ].map((g, i) => (
          <Box key={i} sx={{ position: 'absolute', ...g, width: 500, height: 500, background: `radial-gradient(circle, rgba(${g.color},0.12), transparent 70%)`, filter: 'blur(80px)', pointerEvents: 'none' }} />
        ))}

        {/* ===== HERO ===== */}
        <Box sx={{ pt: { xs: 14, md: 18 }, pb: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
            <Chip label="ENTERPRISE SOLUTIONS" sx={{ fontFamily: font, fontWeight: 600, fontSize: '0.78rem', letterSpacing: 1.5, mb: 3, backgroundColor: 'rgba(59,130,246,0.15)', color: '#3b82f6', border: '1px solid rgba(59,130,246,0.3)', borderRadius: '8px', py: 2.2 }} />

            <Typography variant="h1" sx={{ fontFamily: font, color: '#fff', fontWeight: 800, fontSize: { xs: '2.2rem', sm: '3rem', md: '3.8rem' }, lineHeight: 1.15, mb: 3 }}>
              Built for scale.{' '}
              <Box component="span" sx={{ background: 'linear-gradient(90deg, #3b82f6, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Designed for enterprise.
              </Box>
            </Typography>

            <Typography sx={{ fontFamily: font, color: 'rgba(255,255,255,0.7)', fontSize: { xs: '1rem', md: '1.15rem' }, maxWidth: 650, mx: 'auto', lineHeight: 1.7, mb: 5 }}>
              Empower your organization with secure, scalable, and customizable digital solutions built to handle millions of users and complex workflows.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 6 }}>
              <Button variant="contained" endIcon={<ArrowForward />} sx={{ fontFamily: font, background: 'linear-gradient(90deg, #3b82f6, #2563eb)', color: '#fff', textTransform: 'none', fontWeight: 600, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '10px', boxShadow: '0 4px 20px rgba(59,130,246,0.4)', '&:hover': { transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>
                Request a Demo
              </Button>
              <Button variant="outlined" sx={{ fontFamily: font, color: '#fff', borderColor: 'rgba(255,255,255,0.3)', textTransform: 'none', fontWeight: 600, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '10px', '&:hover': { borderColor: '#3b82f6', backgroundColor: 'rgba(59,130,246,0.1)', transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>
                Talk to Sales
              </Button>
            </Box>

            {/* Client Logos */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 3, md: 5 }, flexWrap: 'wrap', opacity: 0.5 }}>
              {clients.map((src, i) => (
                <Box key={i} component="img" src={src} alt="" onError={(e: React.SyntheticEvent<HTMLImageElement>) => { (e.target as HTMLImageElement).style.display = 'none'; }} sx={{ height: 28, width: 'auto', objectFit: 'contain' }} />
              ))}
            </Box>
          </Container>
        </Box>

        {/* ===== FEATURES ===== */}
        <Box sx={{ py: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography sx={{ fontFamily: font, color: '#3b82f6', fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>
                Why Enterprise Teams Choose Us
              </Typography>
              <Typography variant="h3" sx={{ fontFamily: font, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                Enterprise-Grade Capabilities
              </Typography>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' }, gap: 3 }}>
              {features.map((f, i) => (
                <Box key={i} sx={{ ...glass, p: 4, transition: 'all 0.4s ease', cursor: 'pointer', '&:hover': { transform: 'translateY(-8px)', borderColor: `${f.color}40`, boxShadow: `0 16px 40px rgba(0,0,0,0.25)`, '& .icon-box': { transform: 'scale(1.1) rotate(5deg)' } } }}>
                  <Box className="icon-box" sx={{ width: 56, height: 56, borderRadius: '14px', background: `linear-gradient(135deg, ${f.color}, ${f.color}99)`, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2.5, transition: 'all 0.4s ease', boxShadow: `0 4px 14px ${f.color}30`, '& .MuiSvgIcon-root': { color: '#fff', fontSize: 28 } }}>
                    {f.icon}
                  </Box>
                  <Typography sx={{ fontFamily: font, color: '#fff', fontWeight: 700, fontSize: '1.1rem', mb: 1 }}>{f.title}</Typography>
                  <Typography sx={{ fontFamily: font, color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', lineHeight: 1.6 }}>{f.desc}</Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* ===== SOLUTIONS ===== */}
        <Box sx={{ py: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 4, md: 6 }, alignItems: 'center' }}>

              {/* Left Text */}
              <Box sx={{ flex: { md: '1 1 40%' } }}>
                <Typography sx={{ fontFamily: font, color: '#3b82f6', fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>Solutions</Typography>
                <Typography variant="h3" sx={{ fontFamily: font, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' }, lineHeight: 1.2, mb: 2 }}>
                  End-to-end solutions for{' '}
                  <Box component="span" sx={{ color: '#3b82f6' }}>every department</Box>
                </Typography>
                <Typography sx={{ fontFamily: font, color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', lineHeight: 1.7, mb: 3 }}>
                  From CRM and ERP integration to AI-powered automation — we build systems that connect your entire organization.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {['Reduce operational costs by 40%', 'Increase team productivity by 3x', 'Deploy in weeks, not months'].map((item, i) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                      <CheckCircle sx={{ color: '#10b981', fontSize: 20 }} />
                      <Typography sx={{ fontFamily: font, color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>{item}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Right Cards */}
              <Box sx={{ flex: { md: '1 1 60%' }, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)' }, gap: 2.5 }}>
                {solutions.map((s, i) => (
                  <Box key={i} sx={{ ...glass, p: 3, transition: 'all 0.3s ease', cursor: 'pointer', '&:hover': { transform: 'translateY(-6px)', borderColor: 'rgba(59,130,246,0.3)' } }}>
                    <Typography sx={{ fontFamily: font, color: '#fff', fontWeight: 700, fontSize: '1.05rem', mb: 1 }}>{s.title}</Typography>
                    <Typography sx={{ fontFamily: font, color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', lineHeight: 1.5, mb: 2 }}>{s.desc}</Typography>
                    <Box sx={{ display: 'flex', gap: 0.8, flexWrap: 'wrap' }}>
                      {s.tags.map((tag) => (
                        <Chip key={tag} label={tag} size="small" sx={{ fontFamily: font, fontSize: '0.72rem', fontWeight: 500, height: 24, backgroundColor: 'rgba(59,130,246,0.12)', color: '#60a5fa', borderRadius: '6px' }} />
                      ))}
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
              <Typography sx={{ fontFamily: font, color: '#3b82f6', fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>Pricing</Typography>
              <Typography variant="h3" sx={{ fontFamily: font, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
                Transparent pricing, no surprises
              </Typography>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3,1fr)' }, gap: 3 }}>
              {plans.map((plan, i) => (
                <Box key={i} sx={{ ...glass, p: 4, position: 'relative', overflow: 'hidden', transition: 'all 0.4s ease', ...(plan.popular && { borderColor: 'rgba(59,130,246,0.4)', background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(59,130,246,0.03))' }), '&:hover': { transform: 'translateY(-8px)', borderColor: 'rgba(59,130,246,0.4)' } }}>
                  {plan.popular && (
                    <Chip label="Most Popular" sx={{ position: 'absolute', top: 16, right: 16, fontFamily: font, fontWeight: 600, fontSize: '0.72rem', backgroundColor: '#3b82f6', color: '#fff', borderRadius: '6px', height: 26 }} />
                  )}

                  <Typography sx={{ fontFamily: font, color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', fontWeight: 500, mb: 1 }}>{plan.name}</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5, mb: 0.5 }}>
                    <Typography sx={{ fontFamily: font, color: '#fff', fontWeight: 800, fontSize: '2.5rem' }}>{plan.price}</Typography>
                    {plan.period && <Typography sx={{ fontFamily: font, color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>{plan.period}</Typography>}
                  </Box>
                  <Typography sx={{ fontFamily: font, color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', mb: 3 }}>{plan.desc}</Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3 }}>
                    {plan.features.map((f, fi) => (
                      <Box key={fi} sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                        <CheckCircle sx={{ fontSize: 18, color: plan.popular ? '#3b82f6' : '#10b981' }} />
                        <Typography sx={{ fontFamily: font, color: 'rgba(255,255,255,0.75)', fontSize: '0.88rem' }}>{f}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Button fullWidth variant={plan.popular ? 'contained' : 'outlined'} sx={{ fontFamily: font, textTransform: 'none', fontWeight: 600, py: 1.3, borderRadius: '10px', ...(plan.popular ? { background: 'linear-gradient(90deg, #3b82f6, #2563eb)', color: '#fff', boxShadow: '0 4px 14px rgba(59,130,246,0.4)' } : { color: '#fff', borderColor: 'rgba(255,255,255,0.2)', '&:hover': { borderColor: '#3b82f6', backgroundColor: 'rgba(59,130,246,0.1)' } }), transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-2px)' } }}>
                    {plan.price === "Let's Talk" ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* ===== TRUST SECTION ===== */}
        <Box sx={{ py: { xs: 6, md: 8 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="lg">
            <Box sx={{ ...glass, background: 'linear-gradient(135deg, #1a2f5c, #0f1f3d)', borderColor: 'rgba(59,130,246,0.2)', p: { xs: 4, md: 6 }, position: 'relative', overflow: 'hidden' }}>
              <Box sx={{ position: 'absolute', top: '-30%', right: '-10%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(59,130,246,0.2), transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} />

              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 5, alignItems: 'center', position: 'relative' }}>
                <Box>
                  <Typography variant="h3" sx={{ fontFamily: font, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2rem' }, lineHeight: 1.3, mb: 2 }}>
                    Trusted by 120+ enterprises worldwide
                  </Typography>
                  <Typography sx={{ fontFamily: font, color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', lineHeight: 1.7, mb: 3 }}>
                    From startups to Fortune 500 companies, organizations trust Bendra to build mission-critical systems that scale.
                  </Typography>
                  <Button variant="contained" endIcon={<ArrowForward />} sx={{ fontFamily: font, background: 'linear-gradient(90deg, #3b82f6, #2563eb)', color: '#fff', textTransform: 'none', fontWeight: 600, px: 3.5, py: 1.3, borderRadius: '10px', boxShadow: '0 4px 14px rgba(59,130,246,0.4)', '&:hover': { transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>
                    Schedule a Call
                  </Button>
                </Box>

                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 2.5 }}>
                  {[
                    { icon: <Verified />, num: '99.99%', label: 'Uptime Guaranteed' },
                    { icon: <Security />, num: 'SOC2', label: 'Compliant' },
                    { icon: <Groups />, num: '50K+', label: 'Users Served' },
                    { icon: <Speed />, num: '<200ms', label: 'Avg Response Time' },
                  ].map((s, i) => (
                    <Box key={i} sx={{ textAlign: 'center', p: 2, borderRadius: '14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <Box sx={{ color: '#3b82f6', mb: 1, '& .MuiSvgIcon-root': { fontSize: 28 } }}>{s.icon}</Box>
                      <Typography sx={{ fontFamily: font, color: '#fff', fontWeight: 800, fontSize: '1.5rem', lineHeight: 1 }}>{s.num}</Typography>
                      <Typography sx={{ fontFamily: font, color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', mt: 0.5 }}>{s.label}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* ===== CTA ===== */}
        <Box sx={{ py: { xs: 6, md: 8 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="md" sx={{ textAlign: 'center' }}>
            <Typography variant="h3" sx={{ fontFamily: font, color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' }, mb: 2 }}>
              Ready to transform your enterprise?
            </Typography>
            <Typography sx={{ fontFamily: font, color: 'rgba(255,255,255,0.65)', fontSize: '1rem', mb: 4, lineHeight: 1.7 }}>
              Get a free consultation with our enterprise solutions team. No commitments, just clarity.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button variant="contained" endIcon={<ArrowForward />} sx={{ fontFamily: font, background: 'linear-gradient(90deg, #3b82f6, #2563eb)', color: '#fff', textTransform: 'none', fontWeight: 600, fontSize: '1rem', px: 4, py: 1.5, borderRadius: '10px', boxShadow: '0 4px 20px rgba(59,130,246,0.4)', '&:hover': { transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>
                Book Free Consultation
              </Button>
            </Box>
          </Container>
        </Box>

      </Box>
      <Footer />
    </>
  );
}