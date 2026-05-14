'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  IconButton,
  Snackbar,
  Alert,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CircularProgress,
  InputAdornment,
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  Send,
  LinkedIn,
  Facebook,
  Instagram,
  Twitter,
  WhatsApp,
  AccessTime,
  CheckCircle,
  ExpandMore,
  Person,
  Business as BusinessIcon,
  Subject,
  Message,
} from '@mui/icons-material';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', phone: '', company: '', service: '', message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' });

  const contactCards = [
    { icon: <Phone />, iconBg: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', title: 'Call Us', info: '+971 50 123 4567', subInfo: 'Mon-Fri 9am-6pm' },
    { icon: <Email />, iconBg: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', title: 'Email Us', info: 'hello@bendra.ae', subInfo: 'We reply within 24hrs' },
    { icon: <LocationOn />, iconBg: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)', title: 'Visit Us', info: 'Dubai, UAE', subInfo: 'Business Bay Tower' },
    { icon: <AccessTime />, iconBg: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', title: 'Working Hours', info: 'Mon - Fri', subInfo: '9:00 AM - 6:00 PM' },
  ];

  const services = ['CRM Development', 'Web Development', 'Business Automation', 'SaaS Solutions', 'Mobile App Development', 'Other'];
  
  const faqs = [
    { question: 'How long does a typical project take?', answer: 'Project timelines vary based on complexity. A standard CRM implementation takes 4-8 weeks, while custom software can take 2-6 months.' },
    { question: 'Do you offer post-launch support?', answer: 'Yes! We provide comprehensive post-launch support including bug fixes, updates, training, and maintenance packages.' },
    { question: 'What technologies do you specialize in?', answer: 'We specialize in Zoho, Salesforce, AWS, React, Node.js, Python, and many more modern technologies.' },
    { question: 'How do you handle project pricing?', answer: 'We offer flexible pricing models including fixed-price, time & materials, and dedicated team options.' },
  ];

  const socialLinks = [
    { icon: <LinkedIn />, color: '#0077b5' },
    { icon: <Facebook />, color: '#1877f2' },
    { icon: <Instagram />, color: '#e4405f' },
    { icon: <Twitter />, color: '#1da1f2' },
    { icon: <WhatsApp />, color: '#25d366' },
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^[\d\s+()-]{8,}$/.test(formData.phone)) newErrors.phone = 'Invalid phone number';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSnackbar({ open: true, message: '🎉 Message sent successfully! We will get back to you soon.', severity: 'success' });
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    } catch {
      setSnackbar({ open: true, message: 'Something went wrong. Please try again.', severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'rgba(255, 255, 255, 0.03)',
      borderRadius: '10px',
      color: '#fff',
      fontFamily: "'Poppins', sans-serif",
      '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.1)' },
      '&:hover fieldset': { borderColor: 'rgba(59, 130, 246, 0.5)' },
      '&.Mui-focused fieldset': { borderColor: '#3b82f6', borderWidth: '2px' },
    },
    '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.5)', fontFamily: "'Poppins', sans-serif", '&.Mui-focused': { color: '#3b82f6' } },
    '& .MuiFormHelperText-root': { color: '#ef4444', fontFamily: "'Poppins', sans-serif", ml: 0.5 },
  };

  const renderTextField = (field: keyof FormData, label: string, icon: React.ReactNode, multiline = false, rows = 1) => (
    <TextField
      fullWidth
      label={label}
      value={formData[field]}
      onChange={handleChange(field)}
      error={!!errors[field]}
      helperText={errors[field] || (field === 'message' ? `${formData.message.length}/500 characters` : '')}
      multiline={multiline}
      rows={rows}
      slotProps={{
        input: {
          startAdornment: <InputAdornment position="start">{icon}</InputAdornment>,
        },
        htmlInput: field === 'message' ? { maxLength: 500 } : {},
      }}
      sx={{ ...inputStyle, mb: 2.5 }}
    />
  );

  return (
    <>
      <Navbar />
      <Box sx={{ backgroundColor: '#050d1a', fontFamily: "'Poppins', sans-serif", position: 'relative', overflow: 'hidden', py: { xs: 6, md: 10 } }}>
        <Box sx={{ position: 'absolute', top: '10%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
        <Box sx={{ position: 'absolute', bottom: '10%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 }, position: 'relative', zIndex: 1 }}>
          {/* HEADER */}
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography sx={{ color: '#3b82f6', fontWeight: 600, fontSize: '0.9rem', letterSpacing: 2, mb: 2, textTransform: 'uppercase' }}>Get In Touch</Typography>
            <Typography variant="h1" sx={{ color: '#fff', fontWeight: 700, fontSize: { xs: '2rem', md: '3.5rem' }, lineHeight: 1.2, mb: 2 }}>
              Let&apos;s start a <Box component="span" sx={{ background: 'linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>conversation</Box>
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', maxWidth: '600px', mx: 'auto' }}>
              Have a project in mind? We&apos;d love to hear about it.
            </Typography>
          </Box>

          {/* CONTACT CARDS */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', md: 'repeat(4,1fr)' }, gap: 3, mb: 8 }}>
            {contactCards.map((card, i) => (
              <Box key={i} sx={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', p: 3, textAlign: 'center', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-8px)', borderColor: 'rgba(59,130,246,0.3)' } }}>
                <Box sx={{ width: 60, height: 60, borderRadius: '14px', background: card.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 2, '& svg': { fontSize: 28, color: '#fff' } }}>
                  {card.icon}
                </Box>
                <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', mb: 0.5 }}>{card.title}</Typography>
                <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: '1rem', mb: 0.3 }}>{card.info}</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>{card.subInfo}</Typography>
              </Box>
            ))}
          </Box>

          {/* FORM + SIDEBAR */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1.5fr 1fr' }, gap: 5, mb: 8 }}>
            {/* FORM */}
            <Box sx={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', p: { xs: 3, md: 5 } }}>
              <Typography variant="h3" sx={{ color: '#fff', fontWeight: 700, fontSize: '1.8rem', mb: 1 }}>Send us a message</Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', mb: 4 }}>Fill out the form below and our team will get back to you shortly.</Typography>

              <form onSubmit={handleSubmit} noValidate>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2.5, mb: 2.5 }}>
                  {renderTextField('name', 'Full Name *', <Person sx={{ color: 'rgba(255,255,255,0.5)' }} />)}
                  {renderTextField('email', 'Email Address *', <Email sx={{ color: 'rgba(255,255,255,0.5)' }} />)}
                </Box>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2.5, mb: 2.5 }}>
                  {renderTextField('phone', 'Phone Number *', <Phone sx={{ color: 'rgba(255,255,255,0.5)' }} />)}
                  {renderTextField('company', 'Company Name', <BusinessIcon sx={{ color: 'rgba(255,255,255,0.5)' }} />)}
                </Box>

               <TextField
  fullWidth
  select
  label="Service Required *"
  value={formData.service}
  onChange={handleChange('service')}
  error={!!errors.service}
  helperText={errors.service}
  slotProps={{
    input: { 
      startAdornment: <InputAdornment position="start"><Subject sx={{ color: 'rgba(255,255,255,0.5)' }} /></InputAdornment> 
    },
    select: {
      MenuProps: {
        slotProps: {
          paper: {
            sx: {
              backgroundColor: '#0f1f3d', 
              color: '#fff', 
              borderRadius: '10px', 
              border: '1px solid rgba(255,255,255,0.1)',
              '& .MuiMenuItem-root': { 
                fontFamily: "'Poppins', sans-serif", 
                '&:hover': { backgroundColor: 'rgba(59,130,246,0.15)' }, 
                '&.Mui-selected': { backgroundColor: 'rgba(59,130,246,0.25)' } 
              },
            },
          },
        },
      },
    },
  }}
  sx={{ ...inputStyle, mb: 2.5, '& .MuiSelect-icon': { color: 'rgba(255,255,255,0.5)' } }}
>
  {services.map(s => <MenuItem key={s} value={s}>{s}</MenuItem>)}
</TextField>

                {renderTextField('message', 'Your Message *', <Message sx={{ color: 'rgba(255,255,255,0.5)', mt: 1 }} />, true, 5)}

                <Button type="submit" fullWidth disabled={loading} endIcon={loading ? <CircularProgress size={20} sx={{ color: '#fff' }} /> : <Send />}
                  sx={{ fontFamily: "'Poppins', sans-serif", background: 'linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)', color: '#fff', fontWeight: 600, fontSize: '1rem', py: 1.8, borderRadius: '10px', '&:hover': { transform: 'translateY(-2px)' }, '&.Mui-disabled': { background: 'rgba(59,130,246,0.5)' } }}>
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Box>

            {/* SIDEBAR */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box sx={{ background: 'linear-gradient(135deg, #1a2f5c 0%, #0f1f3d 100%)', borderRadius: '20px', p: 4, border: '1px solid rgba(59,130,246,0.2)' }}>
                <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1.3rem', mb: 2.5 }}>Why Choose Bendra?</Typography>
                {['24/7 Customer Support', 'Expert Team of Developers', 'Free Initial Consultation', 'Money-back Guarantee', 'On-time Project Delivery'].map((f, i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}><CheckCircle sx={{ color: '#3b82f6', fontSize: 20 }} /><Typography sx={{ color: 'rgba(255,255,255,0.85)' }}>{f}</Typography></Box>
                ))}
              </Box>

              <Box sx={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', height: 280 }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.836008771708!2d55.27218731500964!3d25.18707128390531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682829c85cb7%3A0x8f3d0f5e0e0e0e0e!2sBusiness%20Bay%2C%20Dubai!5e0!3m2!1sen!2sae!4v1635000000000!5m2!1sen!2sae" width="100%" height="100%" style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(85%)' }} loading="lazy" title="Location" />
              </Box>

              <Box sx={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', p: 3, textAlign: 'center' }}>
                <Typography sx={{ color: '#fff', fontWeight: 600, mb: 2 }}>Connect With Us</Typography>
                <Box sx={{ display: 'flex', gap: 1.5, justifyContent: 'center' }}>
                  {socialLinks.map((s, i) => (
                    <IconButton key={i} sx={{ width: 44, height: 44, border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)', '&:hover': { backgroundColor: s.color, color: '#fff', transform: 'translateY(-3px)' } }}>{s.icon}</IconButton>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>

          {/* FAQ */}
          <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
            <Box sx={{ textAlign: 'center', mb: 5 }}>
              <Typography sx={{ color: '#3b82f6', fontWeight: 600, fontSize: '0.85rem', letterSpacing: 2, mb: 1.5, textTransform: 'uppercase' }}>FAQs</Typography>
              <Typography variant="h3" sx={{ color: '#fff', fontWeight: 700, fontSize: { xs: '1.6rem', md: '2rem' } }}>Frequently Asked Questions</Typography>
            </Box>
            {faqs.map((faq, i) => (
              <Accordion key={i} disableGutters elevation={0} sx={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px !important', color: '#fff', mb: 2, '&:before': { display: 'none' }, '&.Mui-expanded': { borderColor: 'rgba(59,130,246,0.3)' } }}>
                <AccordionSummary expandIcon={<ExpandMore sx={{ color: '#3b82f6' }} />} sx={{ px: 3, '& .MuiAccordionSummary-content': { fontWeight: 600, fontSize: '1rem' } }}>{faq.question}</AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 3, color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.7 }}>{faq.answer}</AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>

        <Snackbar open={snackbar.open} autoHideDuration={5000} onClose={() => setSnackbar(prev => ({ ...prev, open: false }))} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <Alert onClose={() => setSnackbar(prev => ({ ...prev, open: false }))} severity={snackbar.severity} variant="filled" sx={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, borderRadius: '10px' }}>{snackbar.message}</Alert>
        </Snackbar>
      </Box>
      <Footer />
    </>
  );
}