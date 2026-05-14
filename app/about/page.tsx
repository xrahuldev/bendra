'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  Chip,
  IconButton,
} from '@mui/material';
import {
  ArrowForward,
  Star,
  CheckCircle,
  Lightbulb,
  Brush,
  Handshake,
  EmojiObjects,
  Assignment,
  RocketLaunch,
  FreeBreakfast,
  VerifiedUser,
  LocalShipping,
  ChevronLeft,
  ChevronRight,
  FormatQuote,
  Groups,
  TrendingUp,
  Public,
  WorkspacePremium,
} from '@mui/icons-material';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface TimelineStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
  rating: number;
}

export default function AboutPage() {
  const [testimonialIndex, setTestimonialIndex] = useState<number>(0);

  const keyValues = [
    {
      icon: <WorkspacePremium sx={{ fontSize: 40 }} />,
      title: 'Quality',
      description:
        'We value quality in all aspects of our work. From the code we write for web and app development to the digital marketing services we provide, quality work is what we ensure.',
      color: '#3b82f6',
      gradient: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
    },
    {
      icon: <Brush sx={{ fontSize: 40 }} />,
      title: 'Creativity',
      description:
        'We value creativity and innovation, and we encourage our team to think outside the box and come up with unique and effective solutions for our clients.',
      color: '#a855f7',
      gradient: 'linear-gradient(135deg, #a855f7, #c084fc)',
    },
    {
      icon: <Handshake sx={{ fontSize: 40 }} />,
      title: 'Reliability',
      description:
        'We value reliability and trustworthiness, and we aim to build long-term relationships with our clients based on mutual respect and open communication.',
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981, #34d399)',
    },
  ];

  const timelineSteps: TimelineStep[] = [
    {
      id: 1,
      title: 'Thoughts Showering',
      description:
        "In this stage, the team at Bendra will brainstorm and share ideas about the project. We will discuss the client's goals, target audience, and any specific requirements or challenges to meet their goals. We also conduct research and gather data and discuss our approach with our clients.",
      icon: <EmojiObjects sx={{ fontSize: 28 }} />,
      color: '#f59e0b',
    },
    {
      id: 2,
      title: 'Project Planning',
      description:
        "Once the team has a clear understanding of the project's goals and requirements, we will begin to plan the best possible way to complete the job. This will involve defining the scope, timeline, budget, and deliverables, as well as assigning tasks and roles to team members along with a blueprint of the final outcome.",
      icon: <Assignment sx={{ fontSize: 28 }} />,
      color: '#3b82f6',
    },
    {
      id: 3,
      title: 'Initiation',
      description:
        'With the plan in place, the team will begin working on the project. This may involve designing and developing the website or app, creating content, and running digital marketing campaigns and PPC campaigns on various platforms. The team will collaborate and communicate regularly to ensure everyone is on track.',
      icon: <RocketLaunch sx={{ fontSize: 28 }} />,
      color: '#10b981',
    },
    {
      id: 4,
      title: 'Tea Breaks',
      description:
        'Yes, as we work hard, we also take regular breaks to recharge and refresh our minds. Breaks between work allow us to feel energized and prevent burnout while also maintaining focus and productivity.',
      icon: <FreeBreakfast sx={{ fontSize: 28 }} />,
      color: '#ec4899',
    },
    {
      id: 5,
      title: 'Quality Checks',
      description:
        "As the project nears completion, the team will conduct a thorough quality check to ensure everything is working properly and meets the client's requirements. This may involve testing the website or app for its features and functionalities, reviewing content, and analyzing data from digital marketing campaigns.",
      icon: <VerifiedUser sx={{ fontSize: 28 }} />,
      color: '#a855f7',
    },
    {
      id: 6,
      title: 'Project Delivery',
      description:
        'Once the quality check is complete and any necessary revisions or adjustments have been made, the project will be delivered to the client. The team will provide support and training as needed and ensure the client is satisfied with the final output.',
      icon: <LocalShipping sx={{ fontSize: 28 }} />,
      color: '#06b6d4',
    },
  ];

  const stats = [
    { number: '250+', label: 'Projects Delivered', icon: <RocketLaunch /> },
    { number: '120+', label: 'Happy Clients', icon: <Groups /> },
    { number: '8+', label: 'Years Experience', icon: <TrendingUp /> },
    { number: '15+', label: 'Countries Served', icon: <Public /> },
  ];

  const testimonials: Testimonial[] = [
    {
      name: 'Exizenly Team',
      role: 'Founder',
      company: 'Exizenly',
      text: 'Bendra transformed our entire online presence with their WordPress and LinkedIn marketing expertise. Our lead generation increased significantly and we now have a professional platform that truly represents our brand.',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
    },
    {
      name: 'Dr. Robert Hernandez',
      role: 'Thought Leader',
      company: 'Personal Brand',
      text: "The LinkedIn, social media, and podcast management by Bendra exceeded all expectations. My online presence grew tremendously and I'm now reaching audiences I never thought possible.",
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
    },
    {
      name: 'Kenneth Hellem',
      role: 'Podcaster',
      company: 'Podcast Creator',
      text: "Bendra's podcast management was outstanding. They streamlined distribution across Apple Podcasts, Spotify, and Google Podcasts, making my content reach a much wider audience effortlessly.",
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
    },
  ];

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
            top: '3%',
            left: '-10%',
            width: '550px',
            height: '550px',
            background:
              'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '35%',
            right: '-10%',
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
            bottom: '20%',
            left: '15%',
            width: '450px',
            height: '450px',
            background:
              'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '5%',
            right: '20%',
            width: '400px',
            height: '400px',
            background:
              'radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />

        {/* ===== HERO SECTION ===== */}
        <Box
          sx={{
            pt: { xs: 14, md: 18 },
            pb: { xs: 8, md: 12 },
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', lg: '1.1fr 1fr' },
                gap: { xs: 5, lg: 8 },
                alignItems: 'center',
              }}
            >
              {/* Left Content */}
              <Box>
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
                  Our Story
                </Typography>

                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: {
                      xs: '2rem',
                      sm: '2.5rem',
                      md: '3rem',
                      lg: '3.2rem',
                    },
                    lineHeight: 1.2,
                    mb: 3,
                  }}
                >
                  Interesting Story Behind{' '}
                  <Box
                    component="span"
                    sx={{
                      background:
                        'linear-gradient(90deg, #3b82f6, #60a5fa)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Bendra
                  </Box>
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: { xs: '0.95rem', md: '1.05rem' },
                    lineHeight: 1.8,
                    mb: 2,
                  }}
                >
                  Welcome to Bendra. Our goal is to help businesses stay ahead
                  of the curve and succeed in the digital age by leveraging the
                  power of technology. We are committed to delivering
                  exceptional digital solutions to help businesses succeed in
                  the online world.
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: { xs: '0.9rem', md: '0.95rem' },
                    lineHeight: 1.8,
                    mb: 4,
                  }}
                >
                  We specialize in website development, app development,
                  digital marketing, and SEO services to help businesses
                  establish a strong online presence and reach their target
                  audience effectively.
                </Typography>

                {/* Quick Highlights */}
                <Box
                  sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 4 }}
                >
                  {[
                    'Exceptional digital solutions for businesses',
                    'Website, app development & digital marketing',
                    'SEO services for strong online presence',
                    'Committed to client success & growth',
                  ].map((item, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.2,
                      }}
                    >
                      <CheckCircle
                        sx={{ color: '#10b981', fontSize: 20 }}
                      />
                      <Typography
                        sx={{
                          fontFamily: "'Poppins', sans-serif",
                          color: 'rgba(255,255,255,0.75)',
                          fontSize: '0.9rem',
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Button
                  variant="contained"
                  endIcon={<ArrowForward />}
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    background:
                      'linear-gradient(90deg, #3b82f6, #2563eb)',
                    color: '#fff',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '1rem',
                    px: 4,
                    py: 1.5,
                    borderRadius: '10px',
                    boxShadow: '0 4px 20px rgba(59,130,246,0.4)',
                    '&:hover': {
                      background:
                        'linear-gradient(90deg, #2563eb, #1d4ed8)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Get a Quote
                </Button>
              </Box>

              {/* Right - Visual Element */}
              <Box
                sx={{
                  position: 'relative',
                  display: { xs: 'none', lg: 'block' },
                }}
              >
                {/* Main Image Card */}
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: '450px',
                      backgroundImage:
                        'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(180deg, transparent 30%, rgba(5,13,26,0.8) 100%)',
                    }}
                  />

                  {/* Floating Stats Card */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 24,
                      left: 24,
                      right: 24,
                      background:
                        'rgba(255,255,255,0.08)',
                      backdropFilter: 'blur(20px)',
                      borderRadius: '16px',
                      p: 3,
                      border: '1px solid rgba(255,255,255,0.12)',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: 2,
                      }}
                    >
                      {stats.slice(0, 4).map((stat, i) => (
                        <Box key={i} sx={{ textAlign: 'center' }}>
                          <Typography
                            sx={{
                              fontFamily: "'Poppins', sans-serif",
                              background:
                                'linear-gradient(90deg, #3b82f6, #60a5fa)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text',
                              fontWeight: 800,
                              fontSize: '1.6rem',
                            }}
                          >
                            {stat.number}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "'Poppins', sans-serif",
                              color: 'rgba(255,255,255,0.6)',
                              fontSize: '0.75rem',
                              fontWeight: 500,
                            }}
                          >
                            {stat.label}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>

                {/* Floating Decoration */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -20,
                    right: -20,
                    width: '100px',
                    height: '100px',
                    borderRadius: '20px',
                    background:
                      'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(59,130,246,0.05))',
                    border: '1px solid rgba(59,130,246,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Lightbulb
                    sx={{ color: '#3b82f6', fontSize: 40 }}
                  />
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* ===== STATS SECTION (Mobile) ===== */}
        <Box
          sx={{
            display: { xs: 'block', lg: 'none' },
            position: 'relative',
            zIndex: 1,
            pb: 6,
          }}
        >
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 2,
              }}
            >
              {stats.map((stat, i) => (
                <Box
                  key={i}
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    borderRadius: '16px',
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
                  <Box sx={{ color: '#3b82f6', mb: 1 }}>{stat.icon}</Box>
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      background:
                        'linear-gradient(90deg, #3b82f6, #60a5fa)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontWeight: 800,
                      fontSize: '2rem',
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
          </Container>
        </Box>

        {/* ===== KEY VALUES SECTION ===== */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            py: { xs: 8, md: 12 },
          }}
        >
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
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
                Key Values
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: {
                    xs: '1.8rem',
                    sm: '2.2rem',
                    md: '2.5rem',
                  },
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                Our Key Values Push Us For{' '}
                <Box
                  component="span"
                  sx={{
                    background:
                      'linear-gradient(90deg, #3b82f6, #60a5fa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Excellent Work
                </Box>
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  md: 'repeat(3, 1fr)',
                },
                gap: 3,
              }}
            >
              {keyValues.map((value, index) => (
                <Box
                  key={index}
                  sx={{
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '24px',
                    p: { xs: 3.5, md: 4.5 },
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.4s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      borderColor: `${value.color}40`,
                      boxShadow: `0 20px 50px rgba(0,0,0,0.3)`,
                      '& .value-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                      },
                      '& .value-glow': {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  {/* Hover glow */}
                  <Box
                    className="value-glow"
                    sx={{
                      position: 'absolute',
                      top: '-30%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '200px',
                      height: '200px',
                      background: `radial-gradient(circle, ${value.color}20, transparent 70%)`,
                      filter: 'blur(40px)',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Icon */}
                  <Box
                    className="value-icon"
                    sx={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '20px',
                      background: `${value.gradient}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                      color: '#fff',
                      boxShadow: `0 8px 25px ${value.color}40`,
                      transition: 'all 0.4s ease',
                      position: 'relative',
                    }}
                  >
                    {value.icon}
                  </Box>

                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '1.3rem',
                      mb: 2,
                      position: 'relative',
                    }}
                  >
                    {value.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: '0.9rem',
                      lineHeight: 1.7,
                      position: 'relative',
                    }}
                  >
                    {value.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* ===== PROJECT LIFE CYCLE ===== */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            py: { xs: 8, md: 12 },
          }}
        >
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
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
                Project Life Cycle
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: {
                    xs: '1.8rem',
                    sm: '2.2rem',
                    md: '2.5rem',
                  },
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                Wanna See,{' '}
                <Box
                  component="span"
                  sx={{
                    background:
                      'linear-gradient(90deg, #3b82f6, #60a5fa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  How We Work?
                </Box>
              </Typography>
            </Box>

            {/* Timeline */}
            <Box
              sx={{
                position: 'relative',
                maxWidth: '900px',
                mx: 'auto',
              }}
            >
              {/* Vertical Line */}
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: '24px', md: '50%' },
                  transform: { md: 'translateX(-50%)' },
                  top: 0,
                  bottom: 0,
                  width: '2px',
                  background:
                    'linear-gradient(180deg, rgba(59,130,246,0.5) 0%, rgba(168,85,247,0.5) 50%, rgba(16,185,129,0.5) 100%)',
                }}
              />

              {timelineSteps.map((step, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <Box
                    key={step.id}
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'row', md: isLeft ? 'row' : 'row-reverse' },
                      alignItems: 'flex-start',
                      mb: 5,
                      position: 'relative',
                      pl: { xs: '60px', md: 0 },
                    }}
                  >
                    {/* Dot on timeline */}
                    <Box
                      sx={{
                        position: 'absolute',
                        left: { xs: '14px', md: '50%' },
                        transform: { md: 'translateX(-50%)' },
                        width: '22px',
                        height: '22px',
                        borderRadius: '50%',
                        backgroundColor: step.color,
                        border: '4px solid #050d1a',
                        boxShadow: `0 0 15px ${step.color}60`,
                        zIndex: 2,
                      }}
                    />

                    {/* Content Card */}
                    <Box
                      sx={{
                        width: { xs: '100%', md: 'calc(50% - 40px)' },
                        ml: { md: isLeft ? 0 : 'auto' },
                        mr: { md: isLeft ? 'auto' : 0 },
                      }}
                    >
                      <Box
                        sx={{
                          background:
                            'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                          border: '1px solid rgba(255,255,255,0.08)',
                          borderRadius: '20px',
                          p: { xs: 3, md: 4 },
                          transition: 'all 0.4s ease',
                          cursor: 'pointer',
                          '&:hover': {
                            transform: 'translateY(-6px)',
                            borderColor: `${step.color}40`,
                            boxShadow: `0 15px 40px rgba(0,0,0,0.25)`,
                            '& .step-icon': {
                              transform: 'scale(1.1)',
                            },
                          },
                        }}
                      >
                        {/* Step Number + Icon */}
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            mb: 2,
                          }}
                        >
                          <Box
                            className="step-icon"
                            sx={{
                              width: '50px',
                              height: '50px',
                              borderRadius: '14px',
                              backgroundColor: `${step.color}15`,
                              border: `1px solid ${step.color}30`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: step.color,
                              flexShrink: 0,
                              transition: 'all 0.3s ease',
                            }}
                          >
                            {step.icon}
                          </Box>
                          <Box>
                            <Typography
                              sx={{
                                fontFamily: "'Poppins', sans-serif",
                                color: step.color,
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                letterSpacing: 1,
                                textTransform: 'uppercase',
                              }}
                            >
                              Step {String(step.id).padStart(2, '0')}
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "'Poppins', sans-serif",
                                color: '#fff',
                                fontWeight: 700,
                                fontSize: '1.15rem',
                              }}
                            >
                              {step.title}
                            </Typography>
                          </Box>
                        </Box>

                        <Typography
                          sx={{
                            fontFamily: "'Poppins', sans-serif",
                            color: 'rgba(255,255,255,0.6)',
                            fontSize: '0.88rem',
                            lineHeight: 1.7,
                          }}
                        >
                          {step.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Container>
        </Box>

        {/* ===== TESTIMONIALS ===== */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            py: { xs: 8, md: 10 },
          }}
        >
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
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '24px',
                  p: { xs: 3, md: 5 },
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: '-50%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '300px',
                    height: '300px',
                    background:
                      'radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)',
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

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 0.5,
                    mb: 2.5,
                  }}
                >
                  {Array.from({
                    length: testimonials[testimonialIndex].rating,
                  }).map((_, i) => (
                    <Star
                      key={i}
                      sx={{ color: '#f59e0b', fontSize: 22 }}
                    />
                  ))}
                </Box>

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

              {/* Nav Arrows */}
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
                  '&:hover': {
                    backgroundColor: '#3b82f6',
                    borderColor: '#3b82f6',
                  },
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
                  '&:hover': {
                    backgroundColor: '#3b82f6',
                    borderColor: '#3b82f6',
                  },
                }}
              >
                <ChevronRight />
              </IconButton>

              {/* Dots */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 1,
                  mt: 3,
                }}
              >
                {testimonials.map((_, i) => (
                  <Box
                    key={i}
                    onClick={() => setTestimonialIndex(i)}
                    sx={{
                      width: testimonialIndex === i ? '28px' : '10px',
                      height: '10px',
                      borderRadius: '10px',
                      backgroundColor:
                        testimonialIndex === i
                          ? '#3b82f6'
                          : 'rgba(255,255,255,0.2)',
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
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            py: { xs: 6, md: 8 },
          }}
        >
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
                  background:
                    'radial-gradient(circle, rgba(59,130,246,0.25), transparent 70%)',
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
                  background:
                    'radial-gradient(circle, rgba(168,85,247,0.15), transparent 70%)',
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
                Ready to Start Your Project?
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
                Let&apos;s discuss how we can bring your ideas to life and
                deliver results that matter for your business.
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  position: 'relative',
                }}
              >
                <Button
                  variant="contained"
                  endIcon={<ArrowForward />}
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    background:
                      'linear-gradient(90deg, #3b82f6, #2563eb)',
                    color: '#fff',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '1rem',
                    px: 4,
                    py: 1.5,
                    borderRadius: '10px',
                    boxShadow: '0 4px 20px rgba(59,130,246,0.4)',
                    '&:hover': {
                      background:
                        'linear-gradient(90deg, #2563eb, #1d4ed8)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Get a Quote
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