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
} from '@mui/material';
import {
  ArrowForward,
  Close,
  OpenInNew,
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
    'WordPress',
    'LinkedIn',
    'Podcast',
    'Marketing',
    'E-Commerce',
    'Application',
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Exizenly: Your Trusted Partner in Acquiring Your Business',
      subtitle: 'WordPress & LinkedIn Marketing',
      description:
        'Are you a motivated seller looking for a partner you can truly trust? Exizenly is here to be that partner for you.',
      fullDescription:
        'We provided comprehensive support for Exizenly including WordPress website development and LinkedIn marketing strategy. The project involved creating a professional web presence, optimizing content distribution, and building a strong LinkedIn brand that attracts motivated sellers and buyers in the business acquisition space.',
      category: 'WordPress',
      tags: ['WordPress', 'LinkedIn Marketing', 'Hosted Website', 'Video Testimonial'],
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'Exizenly',
      duration: '2 Months',
      year: '2024',
      liveUrl: '#',
      features: [
        'WordPress Website Development',
        'LinkedIn Marketing Strategy',
        'Content Distribution Optimization',
        'Brand Visibility Enhancement',
        'Lead Generation System',
        'Video Testimonial Production',
      ],
      results: [
        'Increased brand visibility by 150%',
        'Generated quality leads consistently',
        'Strong LinkedIn engagement growth',
        'Professional web presence established',
      ],
    },
    {
      id: 2,
      title: 'Consult Clarity',
      subtitle: 'Enterprise Support',
      description:
        'We provided comprehensive support across website management, LinkedIn strategy, and various tools. For the website, we optimized content distribution and ensured a seamless user experience.',
      fullDescription:
        'Consult Clarity received comprehensive enterprise-level support from Bendra. Our team managed their website, developed LinkedIn strategy, and implemented various digital tools. We focused on optimizing content distribution across platforms, ensuring seamless user experience, and driving meaningful engagement with their target audience.',
      category: 'WordPress',
      tags: ['Enterprise Support', 'Website Management', 'LinkedIn Strategy', 'Hosted Website'],
      image:
        'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'Consult Clarity',
      duration: '4 Months',
      year: '2024',
      liveUrl: '#',
      features: [
        'Website Management & Optimization',
        'LinkedIn Strategy Development',
        'Content Distribution System',
        'User Experience Enhancement',
        'Digital Tools Implementation',
        'Performance Analytics Setup',
      ],
      results: [
        'Seamless user experience achieved',
        'Optimized content distribution',
        'Enhanced online presence',
        'Improved client engagement metrics',
      ],
    },
    {
      id: 3,
      title: 'Dr. Robert Hernandez',
      subtitle: 'LinkedIn, Social Media & Podcast',
      description:
        'Thrilled to have supported Dr. Robert Hernandez in LinkedIn, social media, and podcast management. Boosted presence, engagement, and brand visibility.',
      fullDescription:
        'We provided multi-channel digital support for Dr. Robert Hernandez, covering LinkedIn optimization, social media management, and podcast production. Our team boosted his online presence significantly, increased engagement rates across all platforms, and enhanced his brand visibility as a thought leader in his field.',
      category: 'LinkedIn',
      tags: ['LinkedIn', 'Social Media', 'Podcast', 'Video Testimonial'],
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'Dr. Robert Hernandez',
      duration: '6 Months',
      year: '2024',
      liveUrl: '#',
      features: [
        'LinkedIn Profile Optimization',
        'Social Media Content Strategy',
        'Podcast Production & Management',
        'Brand Visibility Enhancement',
        'Engagement Growth Strategy',
        'Thought Leadership Positioning',
      ],
      results: [
        'Significant LinkedIn presence boost',
        'High engagement across platforms',
        'Strong brand visibility established',
        'Podcast audience growth achieved',
      ],
    },
    {
      id: 4,
      title: 'The Purposeco',
      subtitle: 'LinkedIn Prospecting',
      description:
        'We provided essential support to our client\'s LinkedIn strategy, optimizing their online presence for increased visibility and engagement on the platform.',
      fullDescription:
        'For The Purposeco, we delivered strategic LinkedIn prospecting services that transformed their online presence. Our expertise ensured strategic content distribution for increased visibility and engagement. We developed a comprehensive LinkedIn strategy that positioned them as industry leaders and generated quality business connections.',
      category: 'LinkedIn',
      tags: ['LinkedIn Prospecting', 'Content Strategy', 'Hosted Website', 'Video Testimonial'],
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'The Purposeco',
      duration: '3 Months',
      year: '2023',
      liveUrl: '#',
      features: [
        'LinkedIn Strategy Optimization',
        'Strategic Content Distribution',
        'Online Presence Enhancement',
        'Visibility & Engagement Growth',
        'Connection Building',
        'Brand Positioning',
      ],
      results: [
        'Increased LinkedIn visibility by 200%',
        'Higher engagement rates achieved',
        'Quality connections generated',
        'Strong online presence established',
      ],
    },
    {
      id: 5,
      title: 'Solomon Matzner',
      subtitle: 'LinkedIn Prospecting',
      description:
        'We played a pivotal role in supporting our client\'s social media strategy with optimal LinkedIn presence through strategic content distribution.',
      fullDescription:
        'We provided comprehensive LinkedIn prospecting support for Solomon Matzner, ensuring optimal presence through strategic content distribution. Our team enhanced visibility and engagement, seamlessly coordinated and managed connections, fostering meaningful interactions and network growth across the platform.',
      category: 'LinkedIn',
      tags: ['LinkedIn Prospecting', 'Social Media', 'Hosted Website', 'Video Testimonial'],
      image:
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'Solomon Matzner',
      duration: '3 Months',
      year: '2023',
      liveUrl: '#',
      features: [
        'LinkedIn Presence Optimization',
        'Strategic Content Distribution',
        'Connection Management',
        'Meaningful Interaction Building',
        'Network Growth Strategy',
        'Engagement Enhancement',
      ],
      results: [
        'Optimal LinkedIn presence achieved',
        'Meaningful interactions fostered',
        'Network growth significantly boosted',
        'Enhanced visibility and engagement',
      ],
    },
    {
      id: 6,
      title: 'Kenneth Hellem',
      subtitle: 'Podcast Management',
      description:
        'We took the reins of a dynamic Podcast Management project, providing comprehensive support across major platforms like Apple Podcasts, Spotify, and Google Podcasts.',
      fullDescription:
        'We managed Kenneth Hellem\'s complete podcast operations, providing comprehensive support. Our expertise in streamlining content distribution ensured a seamless presence across major platforms like Apple Podcasts, Spotify, and Google Podcasts. We handled everything from production to distribution and audience growth.',
      category: 'Podcast',
      tags: ['Podcast Management', 'Content Distribution', 'Hosted Website', 'Video Testimonial'],
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'Kenneth Hellem',
      duration: '4 Months',
      year: '2024',
      liveUrl: '#',
      features: [
        'Podcast Production & Editing',
        'Multi-Platform Distribution',
        'Apple Podcasts Management',
        'Spotify Optimization',
        'Google Podcasts Setup',
        'Audience Growth Strategy',
      ],
      results: [
        'Seamless multi-platform presence',
        'Streamlined content distribution',
        'Audience growth across platforms',
        'Professional podcast production',
      ],
    },
    {
      id: 7,
      title: 'Digital Procurement Made Simple',
      subtitle: 'WordPress Development',
      description:
        'Find procurement software that matches your own unique requirements, in just a few clicks. 100% FREE. No pay-to-play listings. No misleading reviews.',
      fullDescription:
        'We developed a comprehensive WordPress platform for a digital procurement solution. The website helps users find procurement software matching their unique requirements in just a few clicks. Features include solution maps, multi-criteria search and filter, and module-based listings — all 100% free with no pay-to-play listings or misleading reviews.',
      category: 'WordPress',
      tags: ['WordPress', 'Web Development', 'Hosted Website', 'Video Testimonial'],
      image:
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'Digital Procurement',
      duration: '3 Months',
      year: '2023',
      liveUrl: '#',
      features: [
        'WordPress Website Development',
        'Advanced Search & Filter System',
        'Solution Maps Integration',
        'Multi-Module Software Listings',
        'User-Friendly Interface',
        'SEO Optimization',
      ],
      results: [
        'User-friendly procurement platform launched',
        'Advanced search functionality implemented',
        'Free platform with honest reviews',
        'Strong organic traffic growth',
      ],
    },
    {
      id: 8,
      title: 'MoiLeon',
      subtitle: 'WordPress Development',
      description:
        'We are a group of expertise in special sectors to find solutions and give answers to some requests, enhancing the quality of different markets.',
      fullDescription:
        'MoiLeon is a group of experts in special sectors focused on finding solutions and answering complex market requests. We built their WordPress website to showcase their expertise, cope with current market issues, and enhance the quality of different markets they serve. The site features professional design and optimized user experience.',
      category: 'WordPress',
      tags: ['WordPress', 'Web Design', 'Hosted Website', 'Video Testimonial'],
      image:
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'MoiLeon',
      duration: '2 Months',
      year: '2024',
      liveUrl: '#',
      features: [
        'WordPress Website Development',
        'Professional Design & Branding',
        'Content Management System',
        'Responsive Mobile Design',
        'SEO Optimization',
        'Performance Optimization',
      ],
      results: [
        'Professional online presence established',
        'Enhanced market positioning',
        'Improved client engagement',
        'Mobile-friendly experience delivered',
      ],
    },
    {
      id: 9,
      title: 'Love In Covid Time',
      subtitle: 'WordPress Development',
      description:
        'A Romance that entertains with the history of two lovers who find themselves in the midst of the COVID-19 pandemic.',
      fullDescription:
        'Love in COVID Time is a Romance that entertains with the history of two lovers, Enrique and Nicole, who find themselves in the midst of the COVID-19 pandemic. We built a compelling WordPress website that captures the essence of the story, featuring engaging design, book preview sections, and purchase integration.',
      category: 'WordPress',
      tags: ['WordPress', 'Web Design', 'Video Testimonial'],
      image:
        'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'Love In Covid Time',
      duration: '1.5 Months',
      year: '2023',
      liveUrl: '#',
      features: [
        'WordPress Website Development',
        'Book Showcase Design',
        'Purchase Integration',
        'Author Profile Section',
        'Responsive Design',
        'Social Media Integration',
      ],
      results: [
        'Engaging book promotion website launched',
        'Increased book visibility online',
        'Smooth purchase experience for readers',
        'Strong social media presence built',
      ],
    },
    {
      id: 10,
      title: 'Leadership Expose',
      subtitle: 'WordPress Development',
      description:
        'Your Leadership Story Is Your Message To Millions. Enabling leaders across the globe to share their story and build visibility.',
      fullDescription:
        'Leadership Expose is a platform enabling leaders across the globe to share their story, their journey, build visibility and impart wisdom to other leaders and businesses. We built their WordPress website to connect and grow more leaders, developing infinite potential leaders and sharing valuable leadership insights worldwide.',
      category: 'WordPress',
      tags: ['WordPress', 'Leadership', 'Hosted Website', 'Video Testimonial'],
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'Leadership Expose',
      duration: '2 Months',
      year: '2023',
      liveUrl: '#',
      features: [
        'WordPress Website Development',
        'Leader Profile Showcases',
        'Story Sharing Platform',
        'Content Management System',
        'Community Building Features',
        'SEO & Visibility Optimization',
      ],
      results: [
        'Global leadership platform launched',
        'Leaders sharing stories worldwide',
        'Strong community engagement',
        'Increased visibility for leaders',
      ],
    },
    {
      id: 11,
      title: 'Meet John Doolittle',
      subtitle: 'WordPress Development',
      description:
        'As a retired Navy SEAL captain, speaking to organizations about overcoming adversity in life with leadership, trust, and resilience.',
      fullDescription:
        'We built a professional WordPress website for John Doolittle, a retired Navy SEAL captain who travels the country speaking to organizations about overcoming adversity in life. After 25 years in the Teams, his message focuses on leadership, trust, and resilience as key essentials to the success of any Team.',
      category: 'WordPress',
      tags: ['WordPress', 'Personal Branding', 'Hosted Website', 'Video Testimonial'],
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'John Doolittle',
      duration: '2 Months',
      year: '2023',
      liveUrl: '#',
      features: [
        'WordPress Website Development',
        'Speaker Portfolio Showcase',
        'Event Booking Integration',
        'Testimonials Section',
        'Media Kit Download',
        'Contact & Inquiry Forms',
      ],
      results: [
        'Professional speaker website launched',
        'Increased speaking engagement inquiries',
        'Strong personal brand online',
        'Streamlined booking process',
      ],
    },
    {
      id: 12,
      title: 'Philippe Renan, Entrepreneur',
      subtitle: 'Marketing',
      description:
        'After having his fingers burnt at the age of 17 by an unsettling foray into the music business, Philippe decided to study business and marketing.',
      fullDescription:
        'We provided comprehensive marketing support for Philippe Renan, an entrepreneur who pivoted from the music business to business and marketing. Our team developed his digital marketing strategy, built his online presence, and created campaigns that positioned him as a successful entrepreneur and business leader.',
      category: 'Marketing',
      tags: ['Marketing', 'Personal Branding', 'Hosted Website', 'Video Testimonial'],
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'Philippe Renan',
      duration: '3 Months',
      year: '2023',
      liveUrl: '#',
      features: [
        'Digital Marketing Strategy',
        'Personal Brand Development',
        'Content Marketing',
        'Social Media Management',
        'Website Optimization',
        'Campaign Management',
      ],
      results: [
        'Strong entrepreneurial brand built',
        'Increased online visibility',
        'Effective marketing campaigns launched',
        'Growing audience engagement',
      ],
    },
    {
      id: 13,
      title: 'About Phoenix',
      subtitle: 'Marketing & Podcast Management',
      description:
        'Utilizing research on organizational change & brain science, techniques for personal growth, going well beyond standard team-building exercises.',
      fullDescription:
        'Phoenix specializes in organizational change using brain science and personal growth techniques. We provided marketing and podcast management support, going well beyond standard team-building exercises and coaching sessions. Our team helped them reach a wider audience through strategic marketing and professional podcast production.',
      category: 'Marketing',
      tags: ['Marketing', 'Podcast Management', 'Hosted Website', 'Video Testimonial'],
      image:
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'Phoenix',
      duration: '4 Months',
      year: '2023',
      liveUrl: '#',
      features: [
        'Marketing Strategy Development',
        'Podcast Production & Management',
        'Content Distribution',
        'Brand Positioning',
        'Audience Growth Strategy',
        'Multi-Platform Presence',
      ],
      results: [
        'Expanded audience reach significantly',
        'Professional podcast series launched',
        'Enhanced brand positioning',
        'Strong engagement metrics achieved',
      ],
    },
    {
      id: 14,
      title: 'Garden, Home & Swimming Pool Maintenance',
      subtitle: 'PHP Laravel Development',
      description:
        'Garden, Home and Swimming Pool Maintenance Services in Dubai. Custom designed solutions to suit client\'s lifestyle.',
      fullDescription:
        'We developed a comprehensive PHP Laravel website for a Dubai-based maintenance services company offering garden, home, and swimming pool maintenance. The platform features custom-designed solutions to suit client lifestyles in Dubai, committed to creating and maintaining beautiful outdoor recreation spaces for discerning clientele.',
      category: 'E-Commerce',
      tags: ['PHP', 'Laravel', 'Hosted Website'],
      image:
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'Dubai Maintenance Services',
      duration: '3 Months',
      year: '2023',
      liveUrl: '#',
      features: [
        'PHP Laravel Backend Development',
        'Service Booking System',
        'Custom Solution Designer',
        'Client Portal',
        'Payment Integration',
        'Admin Dashboard',
      ],
      results: [
        'Streamlined service booking process',
        'Increased client satisfaction',
        'Efficient service management',
        'Growing customer base in Dubai',
      ],
    },
    {
      id: 15,
      title: 'La Hacienda Tile',
      subtitle: 'Magento E-Commerce',
      description:
        'Specializing in Mexican tile, copper sinks, farmhouse sinks, copper tubs, Mexican pottery and ceramic at the best possible price.',
      fullDescription:
        'We built a Magento e-commerce platform for La Hacienda Tile, specializing in Mexican tile, copper sinks, farmhouse sinks, copper tubs, Mexican pottery, and ceramic. The best quality products are brought to customers at the best possible price through a beautifully designed online store.',
      category: 'E-Commerce',
      tags: ['Magento', 'E-Commerce', 'Hosted Website'],
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'La Hacienda Tile',
      duration: '3 Months',
      year: '2023',
      liveUrl: '#',
      features: [
        'Magento E-Commerce Development',
        'Product Catalog Management',
        'Payment Gateway Integration',
        'Shipping & Inventory Management',
        'Customer Account Management',
        'Mobile Responsive Design',
      ],
      results: [
        'Full e-commerce platform launched',
        'Increased online sales significantly',
        'Streamlined product management',
        'Enhanced customer shopping experience',
      ],
    },
    {
      id: 16,
      title: 'Luxury Homes - Real Estate Discovery',
      subtitle: 'WordPress Development',
      description:
        'Luxury Homes is ready to welcome you home in Mumbai. A Mumbai brokerage with a global mindset for exciting developments and investment properties.',
      fullDescription:
        'We developed a WordPress real estate discovery website for Luxury Homes, a Mumbai-based brokerage with a global mindset. The platform brings together exciting developments and investment properties under one roof, helping clients find their dream luxury homes in one of the world\'s most dynamic cities.',
      category: 'WordPress',
      tags: ['WordPress', 'Real Estate', 'Hosted Website'],
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'Luxury Homes Mumbai',
      duration: '2.5 Months',
      year: '2023',
      liveUrl: '#',
      features: [
        'WordPress Property Listing Platform',
        'Advanced Property Search & Filter',
        'Property Detail Pages',
        'Agent Contact System',
        'Virtual Tour Integration',
        'SEO Optimization',
      ],
      results: [
        'Luxury real estate platform launched',
        'Increased property inquiries',
        'Strong organic search visibility',
        'Enhanced user experience for buyers',
      ],
    },
    {
      id: 17,
      title: 'UNIK SEO Agency In Portugal',
      subtitle: 'SEO & Links Building',
      description:
        'UniK SEO is an SEO Agency based in Portugal highly specialized in increasing organic and paid traffic in major search engines.',
      fullDescription:
        'We provided SEO and link building services for UniK SEO, an agency based in Portugal specialized in increasing organic and paid traffic on Google, Bing, and Yahoo. The client wanted to rank higher in Google searches for major selective business-related keywords, and our strategy delivered significant ranking improvements.',
      category: 'Marketing',
      tags: ['SEO', 'Links Building', 'Hosted Website'],
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'UniK SEO Portugal',
      duration: '4 Months',
      year: '2023',
      liveUrl: '#',
      features: [
        'On-Page SEO Optimization',
        'Quality Link Building',
        'Keyword Research & Strategy',
        'Technical SEO Audit',
        'Content Optimization',
        'Monthly Reporting & Analytics',
      ],
      results: [
        'Higher Google rankings achieved',
        'Increased organic traffic significantly',
        'Quality backlink profile built',
        'Improved domain authority',
      ],
    },
    {
      id: 18,
      title: 'Acasa - Real Estate Website',
      subtitle: 'PHP Laravel Development',
      description:
        'Acasa is all set to help you find a dream home in Dubai, one of the world\'s most dynamic hotspots for luxury estate.',
      fullDescription:
        'We built a PHP Laravel real estate platform for Acasa, helping clients find dream homes in Dubai. As premier Luxury Estate Brokers based in Dubai with a truly global outlook, the platform showcases premium properties with advanced search, virtual tours, and seamless agent communication.',
      category: 'E-Commerce',
      tags: ['PHP', 'Laravel', 'Real Estate', 'Hosted Website'],
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'Acasa Dubai',
      duration: '3.5 Months',
      year: '2023',
      liveUrl: '#',
      features: [
        'PHP Laravel Development',
        'Property Listing System',
        'Advanced Search & Filters',
        'Agent Communication Portal',
        'Virtual Tour Integration',
        'Multi-Currency Support',
      ],
      results: [
        'Premium real estate platform launched',
        'Streamlined property discovery',
        'Increased client inquiries',
        'Professional Dubai presence established',
      ],
    },
    {
      id: 19,
      title: 'Savannah Tours - Discover Tanzania',
      subtitle: 'WordPress Development',
      description:
        'A privately owned family company in its 42nd year of operation in the Tanzanian tourism industry with personalized tailor-made safaris.',
      fullDescription:
        'We built a WordPress website for Savannah Tours, a privately owned and managed family company now in its 42nd year of operation in the Tanzanian tourism industry. Being an owner-managed company existing in Tanzania for about 50 years, they\'ve consistently personalized many tailor-made safari experiences for travelers worldwide.',
      category: 'WordPress',
      tags: ['WordPress', 'Tourism', 'Hosted Website'],
      image:
        'https://images.unsplash.com/photo-1516426122078-c23e76b4934d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'Savannah Tours',
      duration: '2 Months',
      year: '2023',
      liveUrl: '#',
      features: [
        'WordPress Website Development',
        'Safari Package Showcases',
        'Booking Inquiry System',
        'Photo Gallery & Tours',
        'Customer Testimonials',
        'Mobile Responsive Design',
      ],
      results: [
        'Tourism website successfully launched',
        'Increased international bookings',
        'Enhanced online safari showcase',
        'Better customer engagement',
      ],
    },
    {
      id: 20,
      title: 'MMUSA - Muscle Building Supplement Store',
      subtitle: 'WordPress E-Commerce',
      description:
        'Known as one of the best muscle building supplement stores with the formula about creatine serum for fitness goals.',
      fullDescription:
        'We developed a WordPress e-commerce website for MMUSA, known as one of the best muscle building supplement stores. As a supplement company with the proprietary creatine serum formula, the platform helps customers reach their fitness goals — whether getting fit, losing weight, improving training, or improving life.',
      category: 'E-Commerce',
      tags: ['WordPress', 'E-Commerce', 'Hosted Website'],
      image:
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'MMUSA',
      duration: '2.5 Months',
      year: '2023',
      liveUrl: '#',
      features: [
        'WordPress E-Commerce Setup',
        'Product Catalog Management',
        'Secure Payment Integration',
        'Supplement Information Pages',
        'Customer Reviews System',
        'Shipping & Order Tracking',
      ],
      results: [
        'Online supplement store launched',
        'Increased online sales channels',
        'Improved customer purchase experience',
        'Strong product presentation',
      ],
    },
    {
      id: 21,
      title: 'Shekhleela - Designer Clothes',
      subtitle: 'WordPress E-Commerce',
      description:
        'Buy designer clothes for men and women. Online shopping for Indian outfits including Bundi, kurta, lehenga, and jackets.',
      fullDescription:
        'We built a WordPress e-commerce platform for Shekhleela, offering designer clothes for men and women. The online shopping experience features Indian outfits for men including Bundi and kurta, and designer Indian dresses, lehenga, and jackets for women. The platform showcases traditional Indian fashion with a modern shopping experience.',
      category: 'E-Commerce',
      tags: ['WordPress', 'E-Commerce', 'Fashion'],
      image:
        'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'Shekhleela',
      duration: '2 Months',
      year: '2023',
      liveUrl: '#',
      features: [
        'WordPress E-Commerce Development',
        'Fashion Product Catalog',
        'Size Guide Integration',
        'Secure Payment Gateway',
        'Wishlist & Cart Features',
        'Mobile-Optimized Shopping',
      ],
      results: [
        'Designer fashion store launched online',
        'Enhanced shopping experience for customers',
        'Increased reach for Indian fashion',
        'Streamlined order management',
      ],
    },
    {
      id: 22,
      title: 'GR Convent School',
      subtitle: 'WordPress Development',
      description:
        'Education for all & Excellence in Education. The dream of Founder Chairman materialized in the form of a school since 2006.',
      fullDescription:
        'We developed a WordPress website for G.R. Convent School, Indirapuram, established in 2006. The school embodies the vision of "Education for all & Excellence in Education" — the long-cherished dream of Mr. Mahendra Singh Tyagi, Founder Chairman. The website showcases academic programs, facilities, and admissions information.',
      category: 'WordPress',
      tags: ['WordPress', 'Education', 'Hosted Website'],
      image:
        'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'GR Convent School',
      duration: '1.5 Months',
      year: '2023',
      liveUrl: '#',
      features: [
        'WordPress School Website',
        'Academic Programs Showcase',
        'Admissions Portal',
        'Photo Gallery',
        'Faculty Profiles',
        'Contact & Inquiry Forms',
      ],
      results: [
        'Professional school website launched',
        'Streamlined admissions process',
        'Enhanced school visibility online',
        'Better parent-school communication',
      ],
    },
    {
      id: 23,
      title: 'Biosoluble Curcumin Supplement',
      subtitle: 'WordPress Development',
      description:
        'The world\'s first biosoluble curcumin supplement with a team of over 200 combined years of experience from multi-billion dollar companies.',
      fullDescription:
        'We built a WordPress website for the world\'s first biosoluble curcumin supplement brand. Their team has over 200 combined years of experience from multi-billion dollar multinational companies, actively applying that track record of success to create ground-breaking health products for the entire world.',
      category: 'WordPress',
      tags: ['WordPress', 'Health', 'Hosted Website'],
      image:
        'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'Curcumin Supplement Brand',
      duration: '2 Months',
      year: '2023',
      liveUrl: '#',
      features: [
        'WordPress Product Website',
        'Scientific Research Showcase',
        'E-Commerce Integration',
        'Team & Expertise Profiles',
        'Blog & Health Resources',
        'Mobile Responsive Design',
      ],
      results: [
        'Product website successfully launched',
        'Enhanced brand credibility online',
        'Increased product awareness',
        'Strong health community engagement',
      ],
    },
    {
      id: 24,
      title: 'Digital Creative Agency',
      subtitle: 'WordPress Development',
      description:
        'Dedicated team delivering innovative and customized Digital Solutions focusing on the big picture with impactful experiences.',
      fullDescription:
        'We developed a WordPress website for a digital creative agency whose dedicated team takes pride in delivering innovative and customized digital solutions. Focusing on the big picture, the website showcases their ability to curate impactful experiences and connect with target audiences across different platforms.',
      category: 'WordPress',
      tags: ['WordPress', 'Agency', 'Hosted Website'],
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'Digital Creative Agency',
      duration: '2 Months',
      year: '2023',
      liveUrl: '#',
      features: [
        'WordPress Agency Website',
        'Portfolio Showcase',
        'Service Pages',
        'Client Testimonials',
        'Contact & Quote Forms',
        'SEO Optimization',
      ],
      results: [
        'Professional agency website launched',
        'Improved client acquisition',
        'Enhanced portfolio presentation',
        'Better online brand presence',
      ],
    },
    {
      id: 25,
      title: 'Luxiador - Source the Best Villa',
      subtitle: 'PHP Laravel Development',
      description:
        'Happy to help you find a dream home in Mumbai. Luxury Apartments, Villas, Penthouses, Plot — only the most extraordinary projects.',
      fullDescription:
        'We built a PHP Laravel platform for Luxiador to help clients find dream homes in Mumbai. The platform lists only the most extraordinary projects personally handpicked by their real estate brokers — including Luxury Apartments, Villas, Penthouses, and Plots.',
      category: 'E-Commerce',
      tags: ['PHP', 'Laravel', 'Real Estate', 'Hosted Website'],
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'Luxiador',
      duration: '3 Months',
      year: '2023',
      liveUrl: '#',
      features: [
        'PHP Laravel Platform',
        'Luxury Property Listings',
        'Advanced Property Search',
        'Broker Dashboard',
        'Inquiry Management System',
        'Virtual Tour Integration',
      ],
      results: [
        'Premium real estate platform launched',
        'Curated luxury property listings',
        'Increased property inquiries',
        'Enhanced Mumbai real estate presence',
      ],
    },
    {
      id: 26,
      title: 'Saudi Arabia Sotheby\'s International Realty',
      subtitle: 'PHP Laravel Development',
      description:
        'For those who seek the exceptional. No other luxury real estate company offers the same breadth of knowledge, reach and experience.',
      fullDescription:
        'We developed a PHP Laravel platform for Saudi Arabia Sotheby\'s International Realty. This dynamic global brand comes with decades of expertise in living an exceptional life. No other luxury real estate company offers the same breadth of knowledge, reach, and experience in the luxury property market.',
      category: 'E-Commerce',
      tags: ['PHP', 'Laravel', 'Luxury Real Estate', 'Hosted Website'],
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'Sotheby\'s Saudi Arabia',
      duration: '4 Months',
      year: '2023',
      liveUrl: '#',
      features: [
        'PHP Laravel Enterprise Platform',
        'Luxury Property Showcase',
        'Global Property Search',
        'Agent Management System',
        'Multi-Language Support',
        'Premium Design & UX',
      ],
      results: [
        'World-class real estate platform launched',
        'Global luxury property visibility',
        'Enhanced brand digital presence',
        'Streamlined property management',
      ],
    },
    {
      id: 27,
      title: 'Global Engineering & Trading Ltd',
      subtitle: 'WordPress Development',
      description:
        'Engineering & Construction Services Since 1995. Quality, Cost and Delivery Time Advantages for construction & engineering projects.',
      fullDescription:
        'We built a WordPress website for Global Engineering & Trading Ltd (GET), founded by Dr. Ali Kemal Pekkendir. Established in 1995, GET provides engineering and construction services with a focus on Quality, Cost, and Delivery Time Advantages for construction and engineering projects worldwide.',
      category: 'WordPress',
      tags: ['WordPress', 'Engineering', 'Construction'],
      image:
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'Global Engineering & Trading',
      duration: '2 Months',
      year: '2023',
      liveUrl: '#',
      features: [
        'WordPress Corporate Website',
        'Project Portfolio Showcase',
        'Service Pages',
        'Team & Leadership Profiles',
        'Contact & RFQ Forms',
        'Mobile Responsive Design',
      ],
      results: [
        'Professional engineering website launched',
        'Enhanced corporate credibility',
        'Improved project inquiry process',
        'Better global visibility',
      ],
    },
    {
      id: 28,
      title: 'Eureka Conveying Growth',
      subtitle: 'WordPress Development',
      description:
        'Striving to maintain top-notch position in the competitive market with plans for expanding the business and developing manufacturing.',
      fullDescription:
        'We developed a WordPress website for Eureka, a company striving to maintain its top-notch position in today\'s fiercely competitive market. Their expansion plans include significant investment for further developing the manufacturing capabilities and growing their market presence.',
      category: 'WordPress',
      tags: ['WordPress', 'Manufacturing', 'Hosted Website'],
      image:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'Eureka',
      duration: '2 Months',
      year: '2023',
      liveUrl: '#',
      features: [
        'WordPress Corporate Website',
        'Product Catalog',
        'Manufacturing Showcase',
        'Company Profile',
        'Contact Integration',
        'SEO Optimization',
      ],
      results: [
        'Professional web presence established',
        'Enhanced market positioning',
        'Improved client outreach',
        'Better product visibility online',
      ],
    },
    {
      id: 29,
      title: 'BENDA Solutions',
      subtitle: 'WordPress Development',
      description:
        'A Canadian Management Consulting company providing business plan writing services for immigration and commercial purposes.',
      fullDescription:
        'We built a WordPress website for BENDA Solutions, a Canadian Management Consulting company that provides business plan writing services for both immigration and commercial purposes. They also provide business launching services to assist entrepreneurs and businesses in establishing and growing their ventures.',
      category: 'WordPress',
      tags: ['WordPress', 'Consulting', 'Hosted Website'],
      image:
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'BENDA Solutions',
      duration: '1.5 Months',
      year: '2023',
      liveUrl: '#',
      features: [
        'WordPress Consulting Website',
        'Service Showcase',
        'Client Inquiry System',
        'Testimonials Section',
        'Blog & Resources',
        'Mobile Responsive Design',
      ],
      results: [
        'Consulting platform launched successfully',
        'Increased client inquiries',
        'Professional online presence',
        'Enhanced service visibility',
      ],
    },
    {
      id: 30,
      title: 'SpeakUp - Women Safety App',
      subtitle: 'Mobile Application',
      description:
        'A free application highly recommended for women in Ajmer range launched by Rajasthan Police for safety and emergency response.',
      fullDescription:
        'We developed SpeakUp, a free mobile application launched by Rajasthan Police, highly recommended for women in the Ajmer range. Users register in the app after downloading from the store, receive a registration key (OTP) to complete the process, and can then access emergency safety features for women\'s protection.',
      category: 'Application',
      tags: ['Application', 'Women Safety', 'Hosted Website'],
      image:
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'Rajasthan Police',
      duration: '4 Months',
      year: '2023',
      liveUrl: '#',
      features: [
        'Mobile App Development',
        'OTP Registration System',
        'Emergency Alert System',
        'GPS Location Tracking',
        'Quick Dial Emergency',
        'Safety Resources Section',
      ],
      results: [
        'Women safety app launched successfully',
        'Adopted by Rajasthan Police officially',
        'Serving women across Ajmer range',
        'Quick emergency response enabled',
      ],
    },
    {
      id: 31,
      title: 'Surplus Lot Deal',
      subtitle: 'Marketplace Application',
      description:
        'A marketplace for sellers to post dead, surplus, and unwanted stocks for buyers to discover and directly contact sellers.',
      fullDescription:
        'We developed Surplus Lot Deal, a marketplace application where sellers post their dead, surplus, and unwanted stocks. Buyers can see the ads in all deal options and directly contact sellers through calling details. The platform promotes stocks on various social channels and digital marketing channels.',
      category: 'Application',
      tags: ['Application', 'Marketplace', 'Hosted Website'],
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'Surplus Lot Deal',
      duration: '3 Months',
      year: '2023',
      liveUrl: '#',
      features: [
        'Marketplace App Development',
        'Seller Listing Portal',
        'Buyer Discovery System',
        'Direct Contact Integration',
        'Social Media Promotion',
        'Stock Category Management',
      ],
      results: [
        'Marketplace platform launched',
        'Connecting sellers with buyers effectively',
        'Surplus stock visibility increased',
        'Growing user base steadily',
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
    { name: 'WordPress', icon: 'https://cdn.simpleicons.org/wordpress/21759B' },
    { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/ffffff' },
    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
    { name: 'PHP', icon: 'https://cdn.simpleicons.org/php/777BB4' },
    { name: 'Laravel', icon: 'https://cdn.simpleicons.org/laravel/FF2D20' },
    { name: 'Flutter', icon: 'https://cdn.simpleicons.org/flutter/02569B' },
    { name: 'Magento', icon: 'https://cdn.simpleicons.org/magento/EE672F' },
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
    { name: 'AWS', icon: 'https://cdn.simpleicons.org/amazonaws/FF9900' },
    { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/FFCA28' },
    { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
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
      text: 'The LinkedIn, social media, and podcast management by Bendra exceeded all expectations. My online presence grew tremendously and I\'m now reaching audiences I never thought possible.',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
    },
    {
      name: 'Kenneth Hellem',
      role: 'Podcaster',
      company: 'Podcast Creator',
      text: 'Bendra\'s podcast management was outstanding. They streamlined distribution across Apple Podcasts, Spotify, and Google Podcasts, making my content reach a much wider audience effortlessly.',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
    },
  ];

  const filteredProjects = projects.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory
  );

  const getCategoryColor = (category: string): string => {
    const colors: { [key: string]: string } = {
      WordPress: '#21759B',
      LinkedIn: '#0A66C2',
      Podcast: '#a855f7',
      Marketing: '#f59e0b',
      'E-Commerce': '#ec4899',
      Application: '#10b981',
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
                Explore Our{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Handcrafted Masterpieces
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
                Explore our portfolio of handcrafted masterpiece projects that stand out — across WordPress, LinkedIn marketing, podcast management, and business solutions that deliver measurable results.
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

                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.5, mb: 2.5 }}>
                  {Array.from({ length: testimonials[testimonialIndex].rating }).map((_, i) => (
                    <Star key={i} sx={{ color: '#f59e0b', fontSize: 22 }} />
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

              <Box sx={{ p: { xs: 3, md: 4 } }}>
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

                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                    gap: 3,
                    mb: 3,
                  }}
                >
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