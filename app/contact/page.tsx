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
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const contactCards = [
    {
      icon: <Phone />,
      iconBg: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
      title: 'Call Us',
      info: '+91 7065373705',
      subInfo: 'Mon-Sat 10am-7pm',
    },
    {
      icon: <Email />,
      iconBg: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      title: 'Email Us',
      info: 'connect@digitalemantra.com',
      subInfo: 'We reply within 24hrs',
    },
    {
      icon: <LocationOn />,
      iconBg: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)',
      title: 'Visit Us',
      info: 'Bhilwara, Rajasthan',
      subInfo: '8 S 1 & 2, 2nd Floor, Above Vardhman Spuntex, Basant Vihar',
    },
    {
      icon: <AccessTime />,
      iconBg: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      title: 'Working Hours',
      info: 'Mon - Sat',
      subInfo: '10:00 AM - 7:00 PM',
    },
  ];

  const services = [
    'Website Development',
    'Social Media Marketing',
    'Website UI/UX Design',
    'Email Marketing',
    'SEO',
    'Other',
  ];

  const faqs = [
    {
      question: 'What services does Bendra offer?',
      answer:
        'Bendra offers a comprehensive range of digital services including Website Development, Social Media Marketing, Website UI/UX Design, Email Marketing, and SEO. We help businesses establish a strong online presence and reach their target audience effectively.',
    },
    {
      question: 'How long does a typical website project take?',
      answer:
        'Project timelines vary based on complexity and requirements. A standard website typically takes 2-4 weeks, while more complex projects with custom features can take 6-10 weeks. We always discuss timelines upfront during our initial consultation.',
    },
    {
      question: 'Do you offer post-launch support?',
      answer:
        'Yes! We provide comprehensive post-launch support including bug fixes, updates, content changes, and maintenance packages. Our team is always available to help ensure your website continues to perform at its best.',
    },
    {
      question: 'How do you handle SEO for websites?',
      answer:
        'We implement a thorough SEO strategy that includes keyword research, on-page optimization, technical SEO, link building, and regular performance reporting. Our goal is to improve your organic visibility and drive qualified traffic to your website.',
    },
    {
      question: 'What social media platforms do you manage?',
      answer:
        'We manage all major social media platforms including Facebook, Instagram, LinkedIn, Twitter, and WhatsApp Business. We create platform-specific content strategies tailored to your brand and target audience.',
    },
    {
      question: 'How do you handle project pricing?',
      answer:
        'We offer transparent and flexible pricing based on the scope of work. After understanding your requirements, we provide a detailed proposal. We offer packages for startups, small businesses, and enterprises to suit different budget ranges.',
    },
  ];

  const socialLinks = [
    { icon: <Facebook />, color: '#1877f2', href: '#' },
    { icon: <Instagram />, color: '#e4405f', href: '#' },
    { icon: <LinkedIn />, color: '#0077b5', href: '#' },
    { icon: <WhatsApp />, color: '#25d366', href: '#' },
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^[\d\s+()-]{8,}$/.test(formData.phone))
      newErrors.phone = 'Invalid phone number';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length < 10)
      newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSnackbar({
        open: true,
        message:
          '🎉 Message sent successfully! We will get back to you soon.',
        severity: 'success',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
    } catch {
      setSnackbar({
        open: true,
        message: 'Something went wrong. Please try again.',
        severity: 'error',
      });
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
      '&.Mui-focused fieldset': {
        borderColor: '#3b82f6',
        borderWidth: '2px',
      },
    },
    '& .MuiInputLabel-root': {
      color: 'rgba(255,255,255,0.5)',
      fontFamily: "'Poppins', sans-serif",
      '&.Mui-focused': { color: '#3b82f6' },
    },
    '& .MuiFormHelperText-root': {
      color: '#ef4444',
      fontFamily: "'Poppins', sans-serif",
      ml: 0.5,
    },
  };

  const renderTextField = (
    field: keyof FormData,
    label: string,
    icon: React.ReactNode,
    multiline = false,
    rows = 1
  ) => (
    <TextField
      fullWidth
      label={label}
      value={formData[field]}
      onChange={handleChange(field)}
      error={!!errors[field]}
      helperText={
        errors[field] ||
        (field === 'message'
          ? `${formData.message.length}/500 characters`
          : '')
      }
      multiline={multiline}
      rows={rows}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
        },
        htmlInput: field === 'message' ? { maxLength: 500 } : {},
      }}
      sx={{ ...inputStyle, mb: 2.5 }}
    />
  );

  return (
    <>
      <Navbar />
      <Box
        sx={{
          backgroundColor: '#050d1a',
          fontFamily: "'Poppins', sans-serif",
          position: 'relative',
          overflow: 'hidden',
          py: { xs: 6, md: 10 },
        }}
      >
        {/* Background Glows */}
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            left: '-10%',
            width: '500px',
            height: '500px',
            background:
              'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '10%',
            right: '-10%',
            width: '500px',
            height: '500px',
            background:
              'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '40%',
            width: '400px',
            height: '400px',
            background:
              'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />

        <Container
          maxWidth="xl"
          sx={{ px: { xs: 3, md: 6 }, position: 'relative', zIndex: 1 }}
        >
          {/* ===== HEADER ===== */}
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 }, pt: { xs: 8, md: 10 } }}>
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                color: '#3b82f6',
                fontWeight: 600,
                fontSize: '0.9rem',
                letterSpacing: 2,
                mb: 2,
                textTransform: 'uppercase',
              }}
            >
              Get In Touch
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                color: '#fff',
                fontWeight: 700,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              Let&apos;s start a{' '}
              <Box
                component="span"
                sx={{
                  background:
                    'linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                conversation
              </Box>
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                color: 'rgba(255,255,255,0.7)',
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              Have a project in mind? We&apos;d love to hear about it. Reach
              out to us and let&apos;s build something amazing together.
            </Typography>
          </Box>

          {/* ===== CONTACT CARDS ===== */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)',
              },
              gap: 3,
              mb: 8,
            }}
          >
            {contactCards.map((card, i) => (
              <Box
                key={i}
                sx={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px',
                  p: 3,
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    borderColor: 'rgba(59,130,246,0.3)',
                    boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '14px',
                    background: card.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                    boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                    '& svg': { fontSize: 28, color: '#fff' },
                  }}
                >
                  {card.icon}
                </Box>
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    mb: 0.5,
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    mb: 0.5,
                    wordBreak: 'break-word',
                  }}
                >
                  {card.info}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: 'rgba(255,255,255,0.45)',
                    fontSize: '0.78rem',
                    lineHeight: 1.4,
                  }}
                >
                  {card.subInfo}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* ===== FORM + SIDEBAR ===== */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', lg: '1.5fr 1fr' },
              gap: 5,
              mb: 8,
            }}
          >
            {/* CONTACT FORM */}
            <Box
              sx={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                p: { xs: 3, md: 5 },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '1.8rem',
                  mb: 1,
                }}
              >
                Send us a message
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.9rem',
                  mb: 4,
                  lineHeight: 1.7,
                }}
              >
                Fill out the form below and our team will get back to you
                within 24 hours.
              </Typography>

              <form onSubmit={handleSubmit} noValidate>
                {/* Row 1 — Name + Email */}
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                    gap: 2.5,
                    mb: 0,
                  }}
                >
                  {renderTextField(
                    'name',
                    'Full Name *',
                    <Person sx={{ color: 'rgba(255,255,255,0.5)' }} />
                  )}
                  {renderTextField(
                    'email',
                    'Email Address *',
                    <Email sx={{ color: 'rgba(255,255,255,0.5)' }} />
                  )}
                </Box>

                {/* Row 2 — Phone + Company */}
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                    gap: 2.5,
                    mb: 0,
                  }}
                >
                  {renderTextField(
                    'phone',
                    'Phone Number *',
                    <Phone sx={{ color: 'rgba(255,255,255,0.5)' }} />
                  )}
                  {renderTextField(
                    'company',
                    'Company Name',
                    <BusinessIcon sx={{ color: 'rgba(255,255,255,0.5)' }} />
                  )}
                </Box>

                {/* Service Select */}
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
                      startAdornment: (
                        <InputAdornment position="start">
                          <Subject sx={{ color: 'rgba(255,255,255,0.5)' }} />
                        </InputAdornment>
                      ),
                    },
                    select: {
                      MenuProps: {
                        slotProps: {
                          paper: {
                            sx: {
                              backgroundColor: '#0f1f3d',
                              color: '#fff',
                              borderRadius: '10px',
                              border:
                                '1px solid rgba(255,255,255,0.1)',
                              '& .MuiMenuItem-root': {
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: '0.9rem',
                                '&:hover': {
                                  backgroundColor:
                                    'rgba(59,130,246,0.15)',
                                },
                                '&.Mui-selected': {
                                  backgroundColor:
                                    'rgba(59,130,246,0.25)',
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  }}
                  sx={{
                    ...inputStyle,
                    mb: 2.5,
                    '& .MuiSelect-icon': {
                      color: 'rgba(255,255,255,0.5)',
                    },
                  }}
                >
                  {services.map((s) => (
                    <MenuItem key={s} value={s}>
                      {s}
                    </MenuItem>
                  ))}
                </TextField>

                {/* Message */}
                {renderTextField(
                  'message',
                  'Your Message *',
                  <Message
                    sx={{ color: 'rgba(255,255,255,0.5)', mt: 1 }}
                  />,
                  true,
                  5
                )}

                {/* Submit */}
                <Button
                  type="submit"
                  fullWidth
                  disabled={loading}
                  endIcon={
                    loading ? (
                      <CircularProgress
                        size={20}
                        sx={{ color: '#fff' }}
                      />
                    ) : (
                      <Send />
                    )
                  }
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    background:
                      'linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)',
                    color: '#fff',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '1rem',
                    py: 1.8,
                    borderRadius: '10px',
                    boxShadow: '0 4px 20px rgba(59,130,246,0.4)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background:
                        'linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 28px rgba(59,130,246,0.5)',
                    },
                    '&.Mui-disabled': {
                      background: 'rgba(59,130,246,0.5)',
                      color: 'rgba(255,255,255,0.8)',
                    },
                  }}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Box>

            {/* SIDEBAR */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {/* Why Choose Us */}
              <Box
                sx={{
                  background:
                    'linear-gradient(135deg, #1a2f5c 0%, #0f1f3d 100%)',
                  borderRadius: '20px',
                  p: 4,
                  border: '1px solid rgba(59,130,246,0.2)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: '-40%',
                    right: '-20%',
                    width: '250px',
                    height: '250px',
                    background:
                      'radial-gradient(circle, rgba(59,130,246,0.2), transparent 70%)',
                    filter: 'blur(40px)',
                    pointerEvents: 'none',
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '1.3rem',
                    mb: 2.5,
                    position: 'relative',
                  }}
                >
                  Why Choose Bendra?
                </Typography>
                {[
                  'Dedicated Support & Communication',
                  'Expert Team of Specialists',
                  'Free Initial Consultation',
                  'Quality Work Guaranteed',
                  'On-time Project Delivery',
                  'Transparent Pricing',
                  'Long-term Client Relationships',
                ].map((f, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      mb: 1.5,
                      position: 'relative',
                    }}
                  >
                    <CheckCircle
                      sx={{ color: '#3b82f6', fontSize: 20, flexShrink: 0 }}
                    />
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        color: 'rgba(255,255,255,0.85)',
                        fontSize: '0.9rem',
                      }}
                    >
                      {f}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Map - Bhilwara, Rajasthan */}
              <Box
                sx={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.08)',
                  height: 260,
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57855.49736349491!2d74.58977505!3d25.34772905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968fd90c39b9b51%3A0x50b39dfb98a07b9!2sBhilwara%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter:
                      'invert(90%) hue-rotate(180deg) brightness(95%) contrast(85%)',
                  }}
                  loading="lazy"
                  title="Bendra Location - Bhilwara, Rajasthan"
                />
              </Box>

              {/* Address Details */}
              <Box
                sx={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '20px',
                  p: 3,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '1rem',
                    mb: 2,
                  }}
                >
                  📍 Our Office
                </Typography>
                {[
                  {
                    icon: <LocationOn sx={{ color: '#3b82f6', fontSize: 18, flexShrink: 0 }} />,
                    text: '8 S 1 & 2, 2nd Floor, Above Vardhman Spuntex, Basant Vihar, Bhilwara 311001',
                  },
                  {
                    icon: <Phone sx={{ color: '#10b981', fontSize: 18, flexShrink: 0 }} />,
                    text: '+91 7065373705',
                  },
                  {
                    icon: <Email sx={{ color: '#a855f7', fontSize: 18, flexShrink: 0 }} />,
                    text: 'connect@digitalemantra.com',
                  },
                ].map((item, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1.2,
                      mb: 1.5,
                    }}
                  >
                    {item.icon}
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: '0.85rem',
                        lineHeight: 1.5,
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Social Links */}
              <Box
                sx={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '20px',
                  p: 3,
                  textAlign: 'center',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '1rem',
                    mb: 0.5,
                  }}
                >
                  Follow Us
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '0.8rem',
                    mb: 2,
                  }}
                >
                  Stay connected on social media
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 1.5,
                    justifyContent: 'center',
                  }}
                >
                  {socialLinks.map((s, i) => (
                    <IconButton
                      key={i}
                      component="a"
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        width: 44,
                        height: 44,
                        border: '1px solid rgba(255,255,255,0.15)',
                        color: 'rgba(255,255,255,0.7)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: s.color,
                          borderColor: s.color,
                          color: '#fff',
                          transform: 'translateY(-3px)',
                          boxShadow: `0 6px 20px ${s.color}60`,
                        },
                      }}
                    >
                      {s.icon}
                    </IconButton>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>

          {/* ===== FAQ SECTION ===== */}
          <Box sx={{ maxWidth: '900px', mx: 'auto', mb: 4 }}>
            <Box sx={{ textAlign: 'center', mb: 5 }}>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#3b82f6',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  letterSpacing: 2,
                  mb: 1.5,
                  textTransform: 'uppercase',
                }}
              >
                FAQs
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: { xs: '1.6rem', md: '2rem' },
                  mb: 1,
                }}
              >
                Frequently Asked Questions
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.9rem',
                  maxWidth: '500px',
                  mx: 'auto',
                }}
              >
                Find answers to common questions about our services and
                process.
              </Typography>
            </Box>

            {faqs.map((faq, i) => (
              <Accordion
                key={i}
                disableGutters
                elevation={0}
                sx={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px !important',
                  color: '#fff',
                  mb: 2,
                  fontFamily: "'Poppins', sans-serif",
                  '&:before': { display: 'none' },
                  '&.Mui-expanded': {
                    borderColor: 'rgba(59,130,246,0.3)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMore sx={{ color: '#3b82f6' }} />
                  }
                  sx={{
                    px: 3,
                    py: 0.5,
                    '& .MuiAccordionSummary-content': {
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      color: '#fff',
                    },
                  }}
                >
                  {faq.question}
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    px: 3,
                    pb: 3,
                    pt: 0,
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '0.9rem',
                    lineHeight: 1.8,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {faq.answer}
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>

        {/* Snackbar */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={5000}
          onClose={() =>
            setSnackbar((prev) => ({ ...prev, open: false }))
          }
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert
            onClose={() =>
              setSnackbar((prev) => ({ ...prev, open: false }))
            }
            severity={snackbar.severity}
            variant="filled"
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              borderRadius: '10px',
            }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
      <Footer />
    </>
  );
}