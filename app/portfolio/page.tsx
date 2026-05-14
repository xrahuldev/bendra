'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  Chip,
  IconButton,
  Dialog,
  DialogContent,
  Modal,
} from '@mui/material';
import {
  ArrowForward,
  Close,
  OpenInNew,
  GitHub,
  CalendarMonth,
  Person,
  Visibility,
  ArrowOutward,
  Star,
  FormatQuote,
  ChevronLeft,
  ChevronRight,
} from '@mui/icons-material';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  category: string;
  tags: string[];
  image: string;
  client: string;
  duration: string;
  year: string;
  liveUrl: string;
  features: string[];
  results: string[];
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
  rating: number;
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [testimonialIndex, setTestimonialIndex] = useState<number>(0);

  const categories: string[] = [
    'All',
    'CRM',
    'Web Apps',
    'Mobile Apps',
    'SaaS',
    'E-Commerce',
    'Automation',
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Real Estate CRM Platform',
      subtitle: 'Zoho CRM Customization',
      description:
        'Complete CRM solution for a leading real estate company with automated lead management and property tracking.',
      fullDescription:
        'We built a comprehensive CRM solution on Zoho platform for one of Dubai\'s leading real estate companies. The system handles 10,000+ leads monthly with automated scoring, property matching, and follow-up sequences. Integration with WhatsApp, email marketing, and property portals made it a central hub for all operations.',
      category: 'CRM',
      tags: ['Zoho', 'Real Estate', 'Automation', 'API Integration'],
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'Dubai Properties Group',
      duration: '3 Months',
      year: '2024',
      liveUrl: '#',
      features: [
        'Automated Lead Scoring & Distribution',
        'Property Matching Algorithm',
        'WhatsApp & Email Integration',
        'Custom Reporting Dashboard',
        'Mobile-friendly Agent Portal',
        'Commission Tracking System',
      ],
      results: [
        '60% increase in lead conversion',
        '45% reduction in response time',
        '10,000+ leads managed monthly',
        '3x improvement in agent productivity',
      ],
    },
    {
      id: 2,
      title: 'Learning Management System',
      subtitle: 'Full-Stack Web Application',
      description:
        'Modern LMS platform with live classes, quizzes, progress tracking, and certificate generation for an EdTech startup.',
      fullDescription:
        'A complete Learning Management System built with Next.js and Node.js for a rapidly growing EdTech company. Features include live video classes, interactive quizzes, progress analytics, automated certificate generation, and a marketplace for course creators. The platform serves 50,000+ students.',
      category: 'Web Apps',
      tags: ['Next.js', 'Node.js', 'EdTech', 'Video Streaming'],
      image:
        'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'EduTech Solutions',
      duration: '5 Months',
      year: '2024',
      liveUrl: '#',
      features: [
        'Live Video Classes with Chat',
        'Interactive Quiz Engine',
        'Progress Tracking Dashboard',
        'Automated Certificate Generation',
        'Course Marketplace',
        'Mobile Responsive Design',
      ],
      results: [
        '50,000+ active students',
        '200+ courses published',
        '95% student satisfaction',
        '40% increase in course completion',
      ],
    },
    {
      id: 3,
      title: 'Healthcare Appointment App',
      subtitle: 'Cross-Platform Mobile App',
      description:
        'Patient appointment booking and health records management app with telemedicine features for a hospital chain.',
      fullDescription:
        'A cross-platform mobile application built with React Native for a network of 15+ hospitals. Patients can book appointments, access medical records, have video consultations, and receive medication reminders. The app integrates with the hospital\'s existing EHR system.',
      category: 'Mobile Apps',
      tags: ['React Native', 'Healthcare', 'Telemedicine', 'HIPAA'],
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'MedCare Hospitals',
      duration: '6 Months',
      year: '2024',
      liveUrl: '#',
      features: [
        'Smart Appointment Booking',
        'Video Consultation (Telemedicine)',
        'Digital Health Records',
        'Medication Reminders',
        'Lab Reports Access',
        'Insurance Integration',
      ],
      results: [
        '100,000+ app downloads',
        '70% reduction in no-shows',
        '15 hospitals integrated',
        '4.8★ rating on App Store',
      ],
    },
    {
      id: 4,
      title: 'Multi-Vendor E-Commerce Platform',
      subtitle: 'Scalable Marketplace Solution',
      description:
        'Feature-rich e-commerce marketplace with vendor management, real-time inventory, and AI-powered recommendations.',
      fullDescription:
        'Built a scalable multi-vendor e-commerce platform handling 500+ vendors and 50,000+ products. Features include AI-powered product recommendations, real-time inventory sync, multi-currency support, and advanced analytics dashboard. The platform processes 2000+ orders daily.',
      category: 'E-Commerce',
      tags: ['React', 'Node.js', 'AI/ML', 'Payment Gateway'],
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'MarketHub UAE',
      duration: '4 Months',
      year: '2023',
      liveUrl: '#',
      features: [
        'Multi-Vendor Dashboard',
        'AI Product Recommendations',
        'Real-time Inventory Management',
        'Multi-Currency & Multi-Language',
        'Advanced Analytics',
        'Multiple Payment Gateways',
      ],
      results: [
        '500+ active vendors',
        '2000+ daily orders',
        '35% increase in average order value',
        '$2M+ monthly GMV',
      ],
    },
    {
      id: 5,
      title: 'HR & Payroll SaaS Platform',
      subtitle: 'Cloud-Based HR Solution',
      description:
        'Complete HR management platform with payroll, attendance, leave management, and performance tracking.',
      fullDescription:
        'An enterprise-grade HR and Payroll SaaS platform serving 200+ companies across the Middle East. Features include automated payroll processing, biometric attendance integration, leave management, performance reviews, and WPS compliance for UAE businesses.',
      category: 'SaaS',
      tags: ['React', 'Python', 'AWS', 'Microservices'],
      image:
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'PeopleFirst HR',
      duration: '8 Months',
      year: '2023',
      liveUrl: '#',
      features: [
        'Automated Payroll Processing',
        'Biometric Attendance Integration',
        'Leave Management System',
        'Performance Review Module',
        'WPS Compliance (UAE)',
        'Employee Self-Service Portal',
      ],
      results: [
        '200+ companies onboarded',
        '50,000+ employees managed',
        '99.9% payroll accuracy',
        '80% reduction in HR workload',
      ],
    },
    {
      id: 6,
      title: 'Sales Pipeline Automation',
      subtitle: 'Salesforce Implementation',
      description:
        'Salesforce customization with automated pipeline management, forecasting, and team performance analytics.',
      fullDescription:
        'Complete Salesforce implementation and customization for a B2B technology company. We automated the entire sales pipeline from lead capture to deal closure, built custom forecasting models, and created a comprehensive analytics dashboard for sales leadership.',
      category: 'Automation',
      tags: ['Salesforce', 'Apex', 'Lightning', 'Analytics'],
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'TechVentures Inc',
      duration: '3 Months',
      year: '2024',
      liveUrl: '#',
      features: [
        'Automated Lead-to-Deal Pipeline',
        'Custom Forecasting Models',
        'Sales Team Leaderboard',
        'Email Sequence Automation',
        'Territory Management',
        'Revenue Analytics Dashboard',
      ],
      results: [
        '40% faster deal closure',
        '55% improvement in forecast accuracy',
        '$5M+ pipeline managed quarterly',
        '90% sales team adoption rate',
      ],
    },
    {
      id: 7,
      title: 'Logistics Tracking Dashboard',
      subtitle: 'Real-Time Fleet Management',
      description:
        'Real-time fleet tracking and logistics management platform with route optimization and delivery analytics.',
      fullDescription:
        'Built a comprehensive logistics management platform with real-time GPS tracking, route optimization using ML algorithms, delivery scheduling, and driver management. The system handles 500+ vehicles and 5000+ daily deliveries across the UAE.',
      category: 'Web Apps',
      tags: ['React', 'Python', 'Google Maps API', 'WebSocket'],
      image:
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'FastTrack Logistics',
      duration: '5 Months',
      year: '2023',
      liveUrl: '#',
      features: [
        'Real-Time GPS Fleet Tracking',
        'ML-Powered Route Optimization',
        'Delivery Scheduling System',
        'Driver Performance Analytics',
        'Customer Notification System',
        'Fuel & Maintenance Tracking',
      ],
      results: [
        '500+ vehicles tracked',
        '30% reduction in fuel costs',
        '5000+ daily deliveries',
        '25% faster delivery times',
      ],
    },
    {
      id: 8,
      title: 'Restaurant Ordering App',
      subtitle: 'iOS & Android Application',
      description:
        'Multi-restaurant food ordering app with real-time tracking, in-app payments, and loyalty rewards system.',
      fullDescription:
        'A comprehensive food ordering and delivery app serving 100+ restaurants. Features include real-time order tracking with live map, multiple payment options, AI-powered food recommendations, loyalty rewards system, and a separate restaurant management portal.',
      category: 'Mobile Apps',
      tags: ['Flutter', 'Firebase', 'Stripe', 'Google Maps'],
      image:
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'FoodieHub',
      duration: '4 Months',
      year: '2024',
      liveUrl: '#',
      features: [
        'Real-Time Order Tracking',
        'AI Food Recommendations',
        'Loyalty Rewards System',
        'Multiple Payment Methods',
        'Restaurant Management Portal',
        'Push Notifications',
      ],
      results: [
        '100+ restaurant partners',
        '75,000+ app downloads',
        '1500+ daily orders',
        '4.7★ average rating',
      ],
    },
  ];

  const stats = [
    { number: '250+', label: 'Projects Delivered' },
    { number: '120+', label: 'Happy Clients' },
    { number: '8+', label: 'Years Experience' },
    { number: '15+', label: 'Countries Served' },
  ];

  const technologies = [
    { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/ffffff' },
    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
    { name: 'Flutter', icon: 'https://cdn.simpleicons.org/flutter/02569B' },
    { name: 'AWS', icon: 'https://cdn.simpleicons.org/amazonaws/FF9900' },
    { name: 'Zoho', icon: 'https://cdn.simpleicons.org/zoho/E42527' },
    { name: 'Salesforce', icon: 'https://cdn.simpleicons.org/salesforce/00A1E0' },
    { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/FFCA28' },
    { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
    { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
    { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
  ];

  const testimonials: Testimonial[] = [
    {
      name: 'Mohammed Al Rashid',
      role: 'CEO',
      company: 'Dubai Properties Group',
      text: 'Bendra transformed our entire sales process with their CRM solution. Our team productivity increased by 3x and we never miss a lead anymore. Highly recommended!',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'EduTech Solutions',
      text: 'The LMS platform Bendra built for us exceeded all expectations. 50,000 students are now learning seamlessly. Their technical expertise is unmatched.',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
    },
    {
      name: 'Ahmed Hassan',
      role: 'Operations Director',
      company: 'FastTrack Logistics',
      text: 'The logistics dashboard saved us 30% in fuel costs and improved delivery times significantly. Bendra&apos;s team understood our needs perfectly from day one.',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
    },
  ];

  // Filter
  const filteredProjects = projects.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory
  );

  const getCategoryColor = (category: string): string => {
    const colors: { [key: string]: string } = {
      CRM: '#3b82f6',
      'Web Apps': '#10b981',
      'Mobile Apps': '#a855f7',
      SaaS: '#f59e0b',
      'E-Commerce': '#ec4899',
      Automation: '#06b6d4',
    };
    return colors[category] || '#3b82f6';
  };

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const nextTestimonial = () => {
    setTestimonialIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <>
      <Navbar />

      <Box
        sx={{
          backgroundColor: '#050d1a',
          fontFamily: "'Poppins', sans-serif",
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
        }}
      >
        {/* Background Glows */}
        <Box
          sx={{
            position: 'absolute',
            top: '5%',
            left: '-8%',
            width: '500px',
            height: '500px',
            background:
              'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '40%',
            right: '-8%',
            width: '500px',
            height: '500px',
            background:
              'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '15%',
            left: '20%',
            width: '400px',
            height: '400px',
            background:
              'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />

        {/* ===== HERO SECTION ===== */}
        <Box sx={{ pt: { xs: 14, md: 16 }, pb: { xs: 4, md: 6 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#3b82f6',
                  fontWeight: 600,
                  fontSize: { xs: '0.8rem', md: '0.9rem' },
                  letterSpacing: 2,
                  mb: 2,
                  textTransform: 'uppercase',
                }}
              >
                Our Portfolio
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                Projects that{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  speak results
                </Box>
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: { xs: '0.95rem', md: '1.05rem' },
                  maxWidth: '650px',
                  mx: 'auto',
                  lineHeight: 1.7,
                }}
              >
                Explore our portfolio of successful projects across CRM, web
                development, mobile apps, and business automation that have
                delivered measurable results.
              </Typography>
            </Box>

            {/* Stats Row */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(2,1fr)', md: 'repeat(4,1fr)' },
                gap: 3,
                maxWidth: '900px',
                mx: 'auto',
                mb: { xs: 5, md: 7 },
              }}
            >
              {stats.map((stat, i) => (
                <Box
                  key={i}
                  sx={{
                    textAlign: 'center',
                    p: 2.5,
                    borderRadius: '14px',
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                    border: '1px solid rgba(255,255,255,0.08)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'rgba(59,130,246,0.3)',
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontWeight: 800,
                      fontSize: { xs: '1.8rem', md: '2.2rem' },
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Category Chips */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 1.5,
                flexWrap: 'wrap',
              }}
            >
              {categories.map((cat) => (
                <Chip
                  key={cat}
                  label={cat}
                  onClick={() => setActiveCategory(cat)}
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 500,
                    fontSize: '0.85rem',
                    px: 1.5,
                    py: 2.5,
                    borderRadius: '10px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    backgroundColor:
                      activeCategory === cat
                        ? '#3b82f6'
                        : 'rgba(255,255,255,0.05)',
                    color:
                      activeCategory === cat ? '#fff' : 'rgba(255,255,255,0.7)',
                    border: `1px solid ${
                      activeCategory === cat
                        ? '#3b82f6'
                        : 'rgba(255,255,255,0.1)'
                    }`,
                    '&:hover': {
                      backgroundColor:
                        activeCategory === cat
                          ? '#2563eb'
                          : 'rgba(255,255,255,0.1)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                />
              ))}
            </Box>
          </Container>
        </Box>

        {/* ===== PROJECTS GRID ===== */}
        <Box sx={{ position: 'relative', zIndex: 1, py: { xs: 5, md: 7 } }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.9rem',
                mb: 4,
              }}
            >
              Showing{' '}
              <Box component="span" sx={{ color: '#3b82f6', fontWeight: 600 }}>
                {filteredProjects.length}
              </Box>{' '}
              projects
              {activeCategory !== 'All' && (
                <>
                  {' '}in{' '}
                  <Box component="span" sx={{ color: '#3b82f6', fontWeight: 600 }}>
                    {activeCategory}
                  </Box>
                </>
              )}
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2,1fr)',
                  lg: 'repeat(3,1fr)',
                },
                gap: 3,
              }}
            >
              {filteredProjects.map((project) => (
                <Box
                  key={project.id}
                  onClick={() => handleOpenProject(project)}
                  sx={{
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      borderColor: 'rgba(59,130,246,0.3)',
                      boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                      '& .project-image': {
                        transform: 'scale(1.08)',
                      },
                      '& .view-btn': {
                        opacity: 1,
                        transform: 'translateY(0)',
                      },
                      '& .overlay': {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  {/* Image */}
                  <Box sx={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                    <Box
                      className="project-image"
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transition: 'transform 0.6s ease',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(0deg, rgba(5,13,26,0.7) 0%, transparent 50%)',
                      }}
                    />

                    {/* Hover Overlay */}
                    <Box
                      className="overlay"
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(59,130,246,0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                      }}
                    >
                      <Box
                        className="view-btn"
                        sx={{
                          backgroundColor: '#3b82f6',
                          color: '#fff',
                          px: 3,
                          py: 1.2,
                          borderRadius: '10px',
                          fontWeight: 600,
                          fontSize: '0.9rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          opacity: 0,
                          transform: 'translateY(10px)',
                          transition: 'all 0.4s ease 0.1s',
                        }}
                      >
                        View Details <ArrowOutward sx={{ fontSize: 18 }} />
                      </Box>
                    </Box>

                    {/* Category Badge */}
                    <Chip
                      label={project.category}
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 14,
                        left: 14,
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                        fontSize: '0.72rem',
                        backgroundColor: getCategoryColor(project.category),
                        color: '#fff',
                        borderRadius: '6px',
                        height: '26px',
                      }}
                    />

                    {/* Year Badge */}
                    <Chip
                      label={project.year}
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 14,
                        right: 14,
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                        fontSize: '0.72rem',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        backdropFilter: 'blur(10px)',
                        color: '#fff',
                        borderRadius: '6px',
                        height: '26px',
                      }}
                    />
                  </Box>

                  {/* Content */}
                  <Box sx={{ p: 3 }}>
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        color: 'rgba(255,255,255,0.5)',
                        fontSize: '0.78rem',
                        fontWeight: 500,
                        mb: 0.5,
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                      }}
                    >
                      {project.subtitle}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '1.15rem',
                        lineHeight: 1.3,
                        mb: 1.5,
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        color: 'rgba(255,255,255,0.55)',
                        fontSize: '0.85rem',
                        lineHeight: 1.6,
                        mb: 2.5,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {project.description}
                    </Typography>

                    {/* Tags */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mb: 2 }}>
                      {project.tags.slice(0, 3).map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: '0.72rem',
                            fontWeight: 500,
                            height: '24px',
                            backgroundColor: 'rgba(255,255,255,0.06)',
                            color: 'rgba(255,255,255,0.6)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '6px',
                          }}
                        />
                      ))}
                      {project.tags.length > 3 && (
                        <Chip
                          label={`+${project.tags.length - 3}`}
                          size="small"
                          sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: '0.72rem',
                            fontWeight: 600,
                            height: '24px',
                            backgroundColor: 'rgba(59,130,246,0.15)',
                            color: '#3b82f6',
                            borderRadius: '6px',
                          }}
                        />
                      )}
                    </Box>

                    {/* Footer */}
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        pt: 2,
                        borderTop: '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'rgba(255,255,255,0.4)' }}>
                        <Person sx={{ fontSize: 15 }} />
                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.78rem', color: 'inherit' }}>
                          {project.client}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'rgba(255,255,255,0.4)' }}>
                        <CalendarMonth sx={{ fontSize: 15 }} />
                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.78rem', color: 'inherit' }}>
                          {project.duration}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>

            {filteredProjects.length === 0 && (
              <Box
                sx={{
                  textAlign: 'center',
                  py: 8,
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
                  borderRadius: '20px',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <Visibility sx={{ fontSize: 60, color: 'rgba(255,255,255,0.2)', mb: 2 }} />
                <Typography sx={{ fontFamily: "'Poppins', sans-serif", color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem', fontWeight: 500 }}>
                  No projects found in this category
                </Typography>
              </Box>
            )}
          </Container>
        </Box>

        {/* ===== TECHNOLOGIES ===== */}
        <Box sx={{ position: 'relative', zIndex: 1, py: { xs: 6, md: 8 } }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
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
                Tech Stack
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: { xs: '1.6rem', md: '2rem' },
                }}
              >
                Technologies We Work With
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 3,
                maxWidth: '900px',
                mx: 'auto',
              }}
            >
              {technologies.map((tech) => (
                <Box
                  key={tech.name}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1.2,
                    p: 2.5,
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                    border: '1px solid rgba(255,255,255,0.08)',
                    width: { xs: '80px', sm: '90px', md: '100px' },
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      borderColor: 'rgba(59,130,246,0.3)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={tech.icon}
                    alt={tech.name}
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                    sx={{ width: '36px', height: '36px', objectFit: 'contain' }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      textAlign: 'center',
                    }}
                  >
                    {tech.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* ===== TESTIMONIALS ===== */}
        <Box sx={{ position: 'relative', zIndex: 1, py: { xs: 6, md: 8 } }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
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
                Testimonials
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: { xs: '1.6rem', md: '2rem' },
                }}
              >
                What Our Clients Say
              </Typography>
            </Box>

            <Box
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '24px',
                  p: { xs: 3, md: 5 },
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Glow */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '-50%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)',
                    filter: 'blur(40px)',
                    pointerEvents: 'none',
                  }}
                />

                <FormatQuote
                  sx={{
                    fontSize: 50,
                    color: 'rgba(59,130,246,0.3)',
                    mb: 2,
                    transform: 'rotate(180deg)',
                    position: 'relative',
                  }}
                />

                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: 'rgba(255,255,255,0.85)',
                    fontSize: { xs: '1rem', md: '1.15rem' },
                    lineHeight: 1.8,
                    mb: 3,
                    fontStyle: 'italic',
                    position: 'relative',
                    maxWidth: '600px',
                    mx: 'auto',
                  }}
                >
                  &ldquo;{testimonials[testimonialIndex].text}&rdquo;
                </Typography>

                {/* Stars */}
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.5, mb: 2.5 }}>
                  {Array.from({ length: testimonials[testimonialIndex].rating }).map((_, i) => (
                    <Star key={i} sx={{ color: '#f59e0b', fontSize: 22 }} />
                  ))}
                </Box>

                {/* Avatar + Name */}
                <Box
                  component="img"
                  src={testimonials[testimonialIndex].avatar}
                  alt={testimonials[testimonialIndex].name}
                  sx={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    mb: 1.5,
                    border: '3px solid rgba(59,130,246,0.3)',
                    mx: 'auto',
                    display: 'block',
                    position: 'relative',
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '1rem',
                    position: 'relative',
                  }}
                >
                  {testimonials[testimonialIndex].name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '0.85rem',
                    position: 'relative',
                  }}
                >
                  {testimonials[testimonialIndex].role},{' '}
                  {testimonials[testimonialIndex].company}
                </Typography>
              </Box>

              {/* Navigation Arrows */}
              <IconButton
                onClick={prevTestimonial}
                sx={{
                  position: 'absolute',
                  left: { xs: -5, md: -25 },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#fff',
                  '&:hover': { backgroundColor: '#3b82f6', borderColor: '#3b82f6' },
                }}
              >
                <ChevronLeft />
              </IconButton>
              <IconButton
                onClick={nextTestimonial}
                sx={{
                  position: 'absolute',
                  right: { xs: -5, md: -25 },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#fff',
                  '&:hover': { backgroundColor: '#3b82f6', borderColor: '#3b82f6' },
                }}
              >
                <ChevronRight />
              </IconButton>

              {/* Dots */}
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 3 }}>
                {testimonials.map((_, i) => (
                  <Box
                    key={i}
                    onClick={() => setTestimonialIndex(i)}
                    sx={{
                      width: testimonialIndex === i ? '28px' : '10px',
                      height: '10px',
                      borderRadius: '10px',
                      backgroundColor:
                        testimonialIndex === i ? '#3b82f6' : 'rgba(255,255,255,0.2)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Container>
        </Box>

        {/* ===== CTA SECTION ===== */}
        <Box sx={{ position: 'relative', zIndex: 1, py: { xs: 6, md: 8 } }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box
              sx={{
                background: 'linear-gradient(135deg, #1a2f5c, #0f1f3d)',
                borderRadius: '24px',
                p: { xs: 4, md: 6 },
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(59,130,246,0.2)',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: '-30%',
                  right: '-10%',
                  width: '400px',
                  height: '400px',
                  background: 'radial-gradient(circle, rgba(59,130,246,0.25), transparent 70%)',
                  filter: 'blur(50px)',
                  pointerEvents: 'none',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '-30%',
                  left: '-10%',
                  width: '300px',
                  height: '300px',
                  background: 'radial-gradient(circle, rgba(168,85,247,0.15), transparent 70%)',
                  filter: 'blur(50px)',
                  pointerEvents: 'none',
                }}
              />

              <Typography
                variant="h3"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: { xs: '1.6rem', md: '2.2rem' },
                  mb: 2,
                  position: 'relative',
                }}
              >
                Have a project in mind?
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '1rem',
                  maxWidth: '500px',
                  mx: 'auto',
                  mb: 4,
                  lineHeight: 1.7,
                  position: 'relative',
                }}
              >
                Let&apos;s discuss how we can bring your ideas to life and deliver
                results that matter.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
                <Button
                  variant="contained"
                  endIcon={<ArrowForward />}
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    background: 'linear-gradient(90deg, #3b82f6, #2563eb)',
                    color: '#fff',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '1rem',
                    px: 4,
                    py: 1.5,
                    borderRadius: '10px',
                    boxShadow: '0 4px 20px rgba(59,130,246,0.4)',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #2563eb, #1d4ed8)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Start a Project
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: '#fff',
                    borderColor: 'rgba(255,255,255,0.3)',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '1rem',
                    px: 4,
                    py: 1.5,
                    borderRadius: '10px',
                    '&:hover': {
                      borderColor: '#3b82f6',
                      backgroundColor: 'rgba(59,130,246,0.1)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  View Our Process
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>

      {/* ===== PROJECT DETAIL MODAL ===== */}
    <Dialog
  open={modalOpen}
  onClose={handleCloseModal}
  maxWidth="md"
  fullWidth
  slotProps={{
    paper: {
      sx: {
        backgroundColor: '#0a1628',
        backgroundImage: 'none',
        borderRadius: '20px',
        border: '1px solid rgba(255,255,255,0.1)',
        maxHeight: '90vh',
      },
    },
  }}
>
        <DialogContent sx={{ p: 0 }}>
          {selectedProject && (
            <Box>
              {/* Close Button */}
              <IconButton
                onClick={handleCloseModal}
                sx={{
                  position: 'absolute',
                  top: 12,
                  right: 12,
                  zIndex: 10,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  backdropFilter: 'blur(10px)',
                  color: '#fff',
                  '&:hover': { backgroundColor: '#ef4444' },
                }}
              >
                <Close />
              </IconButton>

              {/* Image */}
              <Box
                sx={{
                  height: { xs: '200px', md: '300px' },
                  backgroundImage: `url(${selectedProject.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(0deg, #0a1628 0%, transparent 60%)',
                  }}
                />
                <Box sx={{ position: 'absolute', bottom: 20, left: 24, zIndex: 2 }}>
                  <Chip
                    label={selectedProject.category}
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                      backgroundColor: getCategoryColor(selectedProject.category),
                      color: '#fff',
                      borderRadius: '8px',
                      mb: 1,
                    }}
                  />
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: { xs: '1.3rem', md: '1.8rem' },
                    }}
                  >
                    {selectedProject.title}
                  </Typography>
                </Box>
              </Box>

              {/* Content */}
              <Box sx={{ p: { xs: 3, md: 4 } }}>
                {/* Meta */}
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 3,
                    mb: 3,
                    pb: 3,
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {[
                    { icon: <Person sx={{ fontSize: 16 }} />, label: 'Client', value: selectedProject.client },
                    { icon: <CalendarMonth sx={{ fontSize: 16 }} />, label: 'Duration', value: selectedProject.duration },
                    { icon: <Visibility sx={{ fontSize: 16 }} />, label: 'Year', value: selectedProject.year },
                  ].map((meta, i) => (
                    <Box key={i}>
                      <Typography sx={{ fontFamily: "'Poppins', sans-serif", color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', mb: 0.3 }}>
                        {meta.label}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#fff' }}>
                        {meta.icon}
                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.9rem', fontWeight: 600 }}>
                          {meta.value}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>

                {/* Description */}
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: 'rgba(255,255,255,0.75)',
                    fontSize: '0.95rem',
                    lineHeight: 1.8,
                    mb: 3,
                  }}
                >
                  {selectedProject.fullDescription}
                </Typography>

                {/* Features + Results Grid */}
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                    gap: 3,
                    mb: 3,
                  }}
                >
                  {/* Features */}
                  <Box
                    sx={{
                      background: 'rgba(255,255,255,0.03)',
                      borderRadius: '14px',
                      p: 3,
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        color: '#3b82f6',
                        fontWeight: 700,
                        fontSize: '1rem',
                        mb: 2,
                      }}
                    >
                      🚀 Key Features
                    </Typography>
                    {selectedProject.features.map((f, i) => (
                      <Box key={i} sx={{ display: 'flex', gap: 1, mb: 1.2, alignItems: 'flex-start' }}>
                        <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#3b82f6', mt: 0.8, flexShrink: 0 }} />
                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>
                          {f}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  {/* Results */}
                  <Box
                    sx={{
                      background: 'rgba(16,185,129,0.05)',
                      borderRadius: '14px',
                      p: 3,
                      border: '1px solid rgba(16,185,129,0.15)',
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        color: '#10b981',
                        fontWeight: 700,
                        fontSize: '1rem',
                        mb: 2,
                      }}
                    >
                      📈 Results Achieved
                    </Typography>
                    {selectedProject.results.map((r, i) => (
                      <Box key={i} sx={{ display: 'flex', gap: 1, mb: 1.2, alignItems: 'flex-start' }}>
                        <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#10b981', mt: 0.8, flexShrink: 0 }} />
                        <Typography sx={{ fontFamily: "'Poppins', sans-serif", color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>
                          {r}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>

                {/* Tags */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                  {selectedProject.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: '0.78rem',
                        fontWeight: 500,
                        backgroundColor: 'rgba(255,255,255,0.06)',
                        color: 'rgba(255,255,255,0.65)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '6px',
                      }}
                    />
                  ))}
                </Box>

                {/* Action Buttons */}
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    endIcon={<OpenInNew />}
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      background: 'linear-gradient(90deg, #3b82f6, #2563eb)',
                      color: '#fff',
                      textTransform: 'none',
                      fontWeight: 600,
                      px: 3,
                      py: 1.2,
                      borderRadius: '10px',
                      '&:hover': { background: 'linear-gradient(90deg, #2563eb, #1d4ed8)' },
                    }}
                  >
                    Live Preview
                  </Button>
                  <Button
                    variant="outlined"
                    endIcon={<ArrowForward />}
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: '#fff',
                      borderColor: 'rgba(255,255,255,0.2)',
                      textTransform: 'none',
                      fontWeight: 600,
                      px: 3,
                      py: 1.2,
                      borderRadius: '10px',
                      '&:hover': { borderColor: '#3b82f6', backgroundColor: 'rgba(59,130,246,0.1)' },
                    }}
                  >
                    Start Similar Project
                  </Button>
                </Box>
              </Box>
            </Box>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  );
}