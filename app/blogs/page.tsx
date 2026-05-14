'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  Chip,
  InputAdornment,
  IconButton,
  Pagination,
} from '@mui/material';
import {
  Search,
  CalendarMonth,
  Person,
  ArrowForward,
  AccessTime,
  TrendingUp,
  BookmarkBorder,
  Share,
  Send,
  Visibility,
} from '@mui/icons-material';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  views: string;
  image: string;
  featured?: boolean;
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [email, setEmail] = useState<string>('');

  const categories: string[] = [
    'All',
    'Digital Marketing',
    'SEO',
    'Social Media',
    'Web Development',
    'Automation',
    'AI & Tools',
  ];

  const featuredPost: BlogPost = {
    id: 0,
    title: 'How Digital Marketing Can Transform Small Business',
    excerpt:
      "In today's digital-first world, small businesses face fierce competition, evolving consumer behaviours, and an ever-changing technological landscape. Leveraging digital marketing is no longer optional—it's a necessity for survival and growth. Discover how the right strategies can transform your business.",
    category: 'Digital Marketing',
    author: 'Bendra Team',
    date: 'Jan 10, 2024',
    readTime: '8 min read',
    views: '3.2k',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
    featured: true,
  };

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'How to Build an SEO-Friendly Website from Scratch',
      excerpt:
        "In today's digital landscape, having an SEO-friendly website is crucial for online visibility and business success. An SEO-friendly website ensures that search engines can crawl, index, and rank your content effectively.",
      category: 'SEO',
      author: 'Bendra Team',
      date: 'Dec 28, 2023',
      readTime: '7 min read',
      views: '2.8k',
      image:
        'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Unleashing the Power of AI: The Top 50 Tools You Need in 2023',
      excerpt:
        'In a world where technology evolves at lightning speed, our blog explores the top AI tools you need. Discover how artificial intelligence is reshaping industries and how you can leverage these tools for maximum impact.',
      category: 'AI & Tools',
      author: 'Bendra Team',
      date: 'Dec 20, 2023',
      readTime: '12 min read',
      views: '5.1k',
      image:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'SEO Stardom: The Ultimate Guide to Ranking in 2023',
      excerpt:
        'Embark on the path to SEO stardom with The Ultimate Guide to SEO Ranking. Equip yourself with the knowledge to optimize your website and dominate search engine results pages effectively.',
      category: 'SEO',
      author: 'Bendra Team',
      date: 'Dec 15, 2023',
      readTime: '10 min read',
      views: '4.3k',
      image:
        'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      title: 'Top 6 Marketing Strategies To Grow Your Business',
      excerpt:
        "As a business owner, you're always looking for ways to grow your business. As the New Year starts, it's the perfect time to revisit your marketing strategies and implement new approaches for growth.",
      category: 'Digital Marketing',
      author: 'Bendra Team',
      date: 'Dec 10, 2023',
      readTime: '6 min read',
      views: '3.7k',
      image:
        'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      title: '6 Best Tools For How To Set Up a Podcast in 2023',
      excerpt:
        "If you're looking to start a podcast in 2023, you'll need to be aware of the latest tools and technologies. In this blog post, we'll cover the 6 best tools for setting up and running a professional podcast.",
      category: 'AI & Tools',
      author: 'Bendra Team',
      date: 'Dec 5, 2023',
      readTime: '5 min read',
      views: '2.1k',
      image:
        'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      title: '5 Rank Tracing Tools to Boost Your SEO Performance',
      excerpt:
        'SEO has an important role in Digital Marketing whether you have to boost your website or enhance your ranking. Discover the top rank tracing tools that will help you monitor and improve your search performance.',
      category: 'SEO',
      author: 'Bendra Team',
      date: 'Nov 28, 2023',
      readTime: '5 min read',
      views: '1.9k',
      image:
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 7,
      title: 'Digital Marketing Versus Traditional Marketing: Which is Better?',
      excerpt:
        'Traditional marketing encompasses the marketing methods that can be used without the internet. These are the methods that have been around for decades. Explore how digital marketing compares and which is right for your business.',
      category: 'Digital Marketing',
      author: 'Bendra Team',
      date: 'Nov 20, 2023',
      readTime: '7 min read',
      views: '3.4k',
      image:
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 8,
      title: 'Web Development Services for a Strong Digital Presence',
      excerpt:
        'The biggest external and internal developmental factors the business world has been witnessing in the last decade are due to the rapid adoption and implementation of web technologies.',
      category: 'Web Development',
      author: 'Bendra Team',
      date: 'Nov 15, 2023',
      readTime: '6 min read',
      views: '2.6k',
      image:
        'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 9,
      title: 'Why Use Social Media For Brand Building',
      excerpt:
        'Over the past few years, social media has proved to be the most happening platform for all social interaction. Be it for personal interaction with friends or for growing a powerful business brand.',
      category: 'Social Media',
      author: 'Bendra Team',
      date: 'Nov 8, 2023',
      readTime: '5 min read',
      views: '2.9k',
      image:
        'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 10,
      title: 'OptiMonk + Zapier = ROI: The Power of Automation',
      excerpt:
        "Discover the transformative power of automation in today's fast-paced business world. Learn how to streamline your operations, reduce manual tasks, and optimize your ROI with OptiMonk and Zapier.",
      category: 'Automation',
      author: 'Bendra Team',
      date: 'Nov 2, 2023',
      readTime: '6 min read',
      views: '1.8k',
      image:
        'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 11,
      title: 'How to Implement Site Search – Google Analytics Guide',
      excerpt:
        'Learn to master site search tracking with Google Analytics. This comprehensive guide covers why it matters, how to set it up, advanced techniques, and future trends in search analytics.',
      category: 'Digital Marketing',
      author: 'Bendra Team',
      date: 'Oct 25, 2023',
      readTime: '8 min read',
      views: '2.2k',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 12,
      title: 'How To Automate Workflows With Zapier',
      excerpt:
        "Explore the world of workflow automation with our comprehensive guide on using Zapier. Learn how to harness the power of technology to streamline repetitive tasks, save time, and boost productivity.",
      category: 'Automation',
      author: 'Bendra Team',
      date: 'Oct 18, 2023',
      readTime: '7 min read',
      views: '2.4k',
      image:
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 13,
      title: 'How to Improve Search Engine Rankings Internationally?',
      excerpt:
        'Geographical or IP filtration to show up two different entities in search engines — Local vs International. Learn how to optimize each entity accordingly for maximum international reach and visibility.',
      category: 'SEO',
      author: 'Bendra Team',
      date: 'Oct 10, 2023',
      readTime: '6 min read',
      views: '1.7k',
      image:
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 14,
      title: 'Adwords Terminologies, Nomenclature & Formulas',
      excerpt:
        'Seed keywords are the keywords you use to begin determining your keyword strategy. These are the words which will be used as your base keywords. Master all the essential AdWords terminology and formulas.',
      category: 'Digital Marketing',
      author: 'Bendra Team',
      date: 'Oct 3, 2023',
      readTime: '9 min read',
      views: '3.1k',
      image:
        'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 15,
      title: 'How to Set Up Facebook Campaigns?',
      excerpt:
        "Facebook & Google are considered to be the two most utilized channels when it comes to paid marketing. Let's have a look at how to set up effective Facebook campaigns that drive real results.",
      category: 'Social Media',
      author: 'Bendra Team',
      date: 'Sep 25, 2023',
      readTime: '7 min read',
      views: '2.8k',
      image:
        'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 16,
      title: 'How to Rank Well in Google? 27 Proven Strategies',
      excerpt:
        "Hey there, let's talk SEO. It's not just some fancy buzzword that floats around; it's the lifeline of your online presence. In a world where Google processes billions of searches daily, here are 27 proven strategies.",
      category: 'SEO',
      author: 'Bendra Team',
      date: 'Sep 18, 2023',
      readTime: '15 min read',
      views: '6.2k',
      image:
        'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 17,
      title: 'Improve CTR and Increase Your Search Traffic',
      excerpt:
        "Surprised? Yes, you don't have to increase keyword rankings to get more search traffic. Today, we will go through some basic tactics of improving traffic by boosting your click-through rate.",
      category: 'SEO',
      author: 'Bendra Team',
      date: 'Sep 10, 2023',
      readTime: '6 min read',
      views: '2.5k',
      image:
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 18,
      title: 'Step By Step Guide to Dynamic Remarketing in Google Ads',
      excerpt:
        'Unlock the potential of dynamic remarketing with our comprehensive guide to mastering this game-changing online advertising strategy. Discover why dynamic remarketing matters in Google Ads.',
      category: 'Digital Marketing',
      author: 'Bendra Team',
      date: 'Sep 3, 2023',
      readTime: '8 min read',
      views: '2.1k',
      image:
        'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 19,
      title: 'How to Create a Wikipedia Page?',
      excerpt:
        'As per Wikipedia norms, any article you are proposing should fall into notable criteria and be considered good for the Wikipedia audience. Learn the complete process step by step.',
      category: 'Digital Marketing',
      author: 'Bendra Team',
      date: 'Aug 25, 2023',
      readTime: '5 min read',
      views: '1.6k',
      image:
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 20,
      title: 'Google Data Studio: This is a Killer Reporting Tool',
      excerpt:
        'Google has released Google Data Studio, a reporting & data visualization tool which is integrated with Adwords, Analytics, YouTube & other data sources. Discover why it\'s a game-changer.',
      category: 'AI & Tools',
      author: 'Bendra Team',
      date: 'Aug 18, 2023',
      readTime: '6 min read',
      views: '2.3k',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 21,
      title: 'How to Set Up & Optimize Google Display Campaigns',
      excerpt:
        'In the digital age, Google Display Campaigns are your ticket to online stardom. Discover the art of crafting captivating ads, targeting your audience, and optimizing for maximum performance.',
      category: 'Digital Marketing',
      author: 'Bendra Team',
      date: 'Aug 10, 2023',
      readTime: '9 min read',
      views: '3.0k',
      image:
        'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 22,
      title: '#LearnWithGoogle (Inside Adwords): Amazing Day at Google',
      excerpt:
        'Had a great time attending Google Webinar on AdWords. It was a day-long event where the Google Team was helping us understand each and every aspect of the AdWords platform in depth.',
      category: 'Digital Marketing',
      author: 'Bendra Team',
      date: 'Aug 3, 2023',
      readTime: '4 min read',
      views: '1.4k',
      image:
        'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 23,
      title: 'Beginners Guide to Product Listing Ads',
      excerpt:
        "If you are dealing or working with an eCommerce business, setting up shopping campaigns in AdWords becomes quite important as it can help you increase your visibility and drive more qualified traffic.",
      category: 'Digital Marketing',
      author: 'Bendra Team',
      date: 'Jul 25, 2023',
      readTime: '7 min read',
      views: '2.0k',
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 24,
      title: 'Some Of The Must Follow SEO Experts',
      excerpt:
        "One of the best ways to get success in your industry is to follow the footprints of those who have achieved success. I have put together a list of must-follow SEO experts who will transform your thinking.",
      category: 'SEO',
      author: 'Bendra Team',
      date: 'Jul 18, 2023',
      readTime: '4 min read',
      views: '1.5k',
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 25,
      title: 'How to Convince a Client on Not Targeting Singular Keywords',
      excerpt:
        'You may find it hard to believe but most site owners are still showing interest in targeting singular keywords for their business. Learn how to educate clients on the right keyword strategy.',
      category: 'SEO',
      author: 'Bendra Team',
      date: 'Jul 10, 2023',
      readTime: '5 min read',
      views: '1.8k',
      image:
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 26,
      title: 'SEO: Here\'s How I Converted a Negative Response to Positive',
      excerpt:
        'If you are sending standard quotations or templates in response to search engine optimization queries, then BEWARE about how much they can damage your chances. Learn how to turn rejections into wins.',
      category: 'SEO',
      author: 'Bendra Team',
      date: 'Jul 3, 2023',
      readTime: '6 min read',
      views: '2.2k',
      image:
        'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 27,
      title: 'Affiliate Marketing: DOs And DON\'Ts',
      excerpt:
        "Everyone must be aware of Affiliate Marketing. It is a form of marketing based on performance where the business rewards affiliates for each visitor or customer brought by the affiliate's own marketing efforts.",
      category: 'Digital Marketing',
      author: 'Bendra Team',
      date: 'Jun 25, 2023',
      readTime: '7 min read',
      views: '2.7k',
      image:
        'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 28,
      title: 'Amazing Facts About Global Internet Users',
      excerpt:
        'Do you know how many internet users there are all over the world? Which country has the highest internet audience? Discover amazing and eye-opening facts about global internet usage and trends.',
      category: 'Digital Marketing',
      author: 'Bendra Team',
      date: 'Jun 18, 2023',
      readTime: '4 min read',
      views: '3.5k',
      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  const trendingPosts = [...blogPosts]
    .sort((a, b) => parseFloat(b.views) - parseFloat(a.views))
    .slice(0, 4);

  // Filter posts
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const postsPerPage = 6;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage
  );

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 600, behavior: 'smooth' });
  };

  const getCategoryColor = (category: string): string => {
    const colors: { [key: string]: string } = {
      'Digital Marketing': '#3b82f6',
      SEO: '#10b981',
      'Social Media': '#a855f7',
      'Web Development': '#f59e0b',
      Automation: '#06b6d4',
      'AI & Tools': '#ec4899',
    };
    return colors[category] || '#3b82f6';
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
        {/* Background Effects */}
        <Box
          sx={{
            position: 'absolute',
            top: '5%',
            left: '-8%',
            width: '500px',
            height: '500px',
            background:
              'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
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
              'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '10%',
            left: '20%',
            width: '400px',
            height: '400px',
            background:
              'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />

        {/* HERO SECTION */}
        <Box
          sx={{
            pt: { xs: 14, md: 16 },
            pb: { xs: 6, md: 8 },
            position: 'relative',
            zIndex: 1,
          }}
        >
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
                Blogs
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
                    lg: '3.5rem',
                  },
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                Read Our Latest{' '}
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
                  Informative Blogs
                </Box>
              </Typography>

              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: { xs: '0.95rem', md: '1.05rem' },
                  maxWidth: '600px',
                  mx: 'auto',
                  lineHeight: 1.7,
                }}
              >
                Stay updated with the latest trends, tips, and insights in
                digital marketing, SEO, social media, and web development.
              </Typography>
            </Box>

            {/* Search Bar */}
            <Box
              sx={{
                maxWidth: '600px',
                mx: 'auto',
                mb: { xs: 4, md: 5 },
              }}
            >
              <TextField
                fullWidth
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setPage(1);
                }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search sx={{ color: 'rgba(255,255,255,0.5)' }} />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '14px',
                    color: '#fff',
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '1rem',
                    py: 0.5,
                    transition: 'all 0.3s ease',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(59, 130, 246, 0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#3b82f6',
                      borderWidth: '2px',
                    },
                    '&.Mui-focused': {
                      backgroundColor: 'rgba(59, 130, 246, 0.05)',
                    },
                  },
                }}
              />
            </Box>

            {/* Category Chips */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 1.5,
                flexWrap: 'wrap',
                mb: { xs: 5, md: 7 },
              }}
            >
              {categories.map((category) => (
                <Chip
                  key={category}
                  label={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setPage(1);
                  }}
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 500,
                    fontSize: '0.85rem',
                    px: 1.5,
                    py: 2.5,
                    borderRadius: '10px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    backgroundColor:
                      activeCategory === category
                        ? '#3b82f6'
                        : 'rgba(255,255,255,0.05)',
                    color:
                      activeCategory === category
                        ? '#fff'
                        : 'rgba(255,255,255,0.7)',
                    border: `1px solid ${
                      activeCategory === category
                        ? '#3b82f6'
                        : 'rgba(255,255,255,0.1)'
                    }`,
                    '&:hover': {
                      backgroundColor:
                        activeCategory === category
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

        {/* FEATURED POST */}
        <Box sx={{ position: 'relative', zIndex: 1, mb: { xs: 6, md: 8 } }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1.2fr 1fr' },
                borderRadius: '24px',
                overflow: 'hidden',
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.4s ease',
                cursor: 'pointer',
                '&:hover': {
                  borderColor: 'rgba(59, 130, 246, 0.3)',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
                  '& .featured-image': {
                    transform: 'scale(1.05)',
                  },
                },
              }}
            >
              {/* Image */}
              <Box
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: { xs: '250px', md: '400px' },
                }}
              >
                <Box
                  className="featured-image"
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${featuredPost.image})`,
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
                      'linear-gradient(0deg, rgba(5,13,26,0.6) 0%, transparent 50%)',
                  }}
                />
                <Chip
                  label="⭐ Featured"
                  sx={{
                    position: 'absolute',
                    top: 20,
                    left: 20,
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    backgroundColor: '#f59e0b',
                    color: '#fff',
                    borderRadius: '8px',
                  }}
                />
              </Box>

              {/* Content */}
              <Box
                sx={{
                  p: { xs: 3, md: 5 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Chip
                  label={featuredPost.category}
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 500,
                    fontSize: '0.8rem',
                    backgroundColor: `${getCategoryColor(featuredPost.category)}20`,
                    color: getCategoryColor(featuredPost.category),
                    border: `1px solid ${getCategoryColor(featuredPost.category)}40`,
                    borderRadius: '8px',
                    alignSelf: 'flex-start',
                    mb: 2.5,
                  }}
                />

                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: { xs: '1.4rem', md: '1.8rem' },
                    lineHeight: 1.3,
                    mb: 2,
                  }}
                >
                  {featuredPost.title}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    mb: 3,
                  }}
                >
                  {featuredPost.excerpt}
                </Typography>

                {/* Meta Info */}
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2.5,
                    mb: 3,
                  }}
                >
                  {[
                    {
                      icon: <Person sx={{ fontSize: 16 }} />,
                      text: featuredPost.author,
                    },
                    {
                      icon: <CalendarMonth sx={{ fontSize: 16 }} />,
                      text: featuredPost.date,
                    },
                    {
                      icon: <AccessTime sx={{ fontSize: 16 }} />,
                      text: featuredPost.readTime,
                    },
                    {
                      icon: <Visibility sx={{ fontSize: 16 }} />,
                      text: featuredPost.views,
                    },
                  ].map((meta, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        color: 'rgba(255,255,255,0.5)',
                        fontSize: '0.82rem',
                      }}
                    >
                      {meta.icon}
                      <Typography
                        sx={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: '0.82rem',
                          color: 'inherit',
                        }}
                      >
                        {meta.text}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Button
                  endIcon={<ArrowForward />}
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    background:
                      'linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)',
                    color: '#fff',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    px: 3.5,
                    py: 1.3,
                    borderRadius: '10px',
                    alignSelf: 'flex-start',
                    boxShadow: '0 4px 14px rgba(59, 130, 246, 0.4)',
                    '&:hover': {
                      background:
                        'linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Read Full Article
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* BLOG GRID + SIDEBAR */}
        <Box sx={{ position: 'relative', zIndex: 1, pb: { xs: 6, md: 10 } }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', lg: '1fr 340px' },
                gap: { xs: 4, lg: 5 },
              }}
            >
              {/* LEFT - BLOG GRID */}
              <Box>
                {/* Results Count */}
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.9rem',
                    mb: 3,
                  }}
                >
                  Showing{' '}
                  <Box
                    component="span"
                    sx={{ color: '#3b82f6', fontWeight: 600 }}
                  >
                    {filteredPosts.length}
                  </Box>{' '}
                  articles
                  {activeCategory !== 'All' && (
                    <>
                      {' '}
                      in{' '}
                      <Box
                        component="span"
                        sx={{ color: '#3b82f6', fontWeight: 600 }}
                      >
                        {activeCategory}
                      </Box>
                    </>
                  )}
                </Typography>

                {/* Blog Cards Grid */}
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                      xs: '1fr',
                      sm: 'repeat(2, 1fr)',
                    },
                    gap: 3,
                  }}
                >
                  {paginatedPosts.map((post) => (
                    <Box
                      key={post.id}
                      sx={{
                        background:
                          'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '18px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        transition: 'all 0.4s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          borderColor: 'rgba(59, 130, 246, 0.3)',
                          boxShadow: '0 16px 40px rgba(0, 0, 0, 0.25)',
                          '& .card-image': {
                            transform: 'scale(1.08)',
                          },
                          '& .read-more': {
                            color: '#3b82f6',
                            gap: 1.5,
                          },
                        },
                      }}
                    >
                      {/* Card Image */}
                      <Box
                        sx={{
                          position: 'relative',
                          height: '200px',
                          overflow: 'hidden',
                        }}
                      >
                        <Box
                          className="card-image"
                          sx={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: `url(${post.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            transition: 'transform 0.5s ease',
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            inset: 0,
                            background:
                              'linear-gradient(0deg, rgba(5,13,26,0.5) 0%, transparent 60%)',
                          }}
                        />

                        {/* Category Badge */}
                        <Chip
                          label={post.category}
                          size="small"
                          sx={{
                            position: 'absolute',
                            top: 14,
                            left: 14,
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 500,
                            fontSize: '0.72rem',
                            backgroundColor: getCategoryColor(post.category),
                            color: '#fff',
                            borderRadius: '6px',
                            height: '26px',
                          }}
                        />

                        {/* Action Icons */}
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 14,
                            right: 14,
                            display: 'flex',
                            gap: 0.8,
                          }}
                        >
                          {[
                            <BookmarkBorder key="bm" />,
                            <Share key="sh" />,
                          ].map((icon, i) => (
                            <IconButton
                              key={i}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(0,0,0,0.4)',
                                backdropFilter: 'blur(10px)',
                                color: '#fff',
                                width: '32px',
                                height: '32px',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                  backgroundColor: '#3b82f6',
                                },
                              }}
                            >
                              {React.cloneElement(icon, {
                                sx: { fontSize: 16 },
                              })}
                            </IconButton>
                          ))}
                        </Box>
                      </Box>

                      {/* Card Content */}
                      <Box sx={{ p: 3 }}>
                        <Typography
                          sx={{
                            fontFamily: "'Poppins', sans-serif",
                            color: '#fff',
                            fontWeight: 700,
                            fontSize: '1.05rem',
                            lineHeight: 1.4,
                            mb: 1.5,
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          }}
                        >
                          {post.title}
                        </Typography>

                        <Typography
                          sx={{
                            fontFamily: "'Poppins', sans-serif",
                            color: 'rgba(255,255,255,0.55)',
                            fontSize: '0.85rem',
                            lineHeight: 1.6,
                            mb: 2.5,
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          }}
                        >
                          {post.excerpt}
                        </Typography>

                        {/* Meta Row */}
                        <Box
                          sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: 1,
                            mb: 2,
                          }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 0.5,
                              color: 'rgba(255,255,255,0.45)',
                            }}
                          >
                            <CalendarMonth sx={{ fontSize: 14 }} />
                            <Typography
                              sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: '0.78rem',
                                color: 'inherit',
                              }}
                            >
                              {post.date}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 0.5,
                              color: 'rgba(255,255,255,0.45)',
                            }}
                          >
                            <AccessTime sx={{ fontSize: 14 }} />
                            <Typography
                              sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: '0.78rem',
                                color: 'inherit',
                              }}
                            >
                              {post.readTime}
                            </Typography>
                          </Box>
                        </Box>

                        {/* Read More */}
                        <Box
                          className="read-more"
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            color: 'rgba(255,255,255,0.7)',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "'Poppins', sans-serif",
                              fontSize: '0.85rem',
                              fontWeight: 600,
                              color: 'inherit',
                            }}
                          >
                            Read More
                          </Typography>
                          <ArrowForward sx={{ fontSize: 16 }} />
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>

                {/* No Results */}
                {filteredPosts.length === 0 && (
                  <Box
                    sx={{
                      textAlign: 'center',
                      py: 8,
                      background:
                        'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)',
                      borderRadius: '20px',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <Search
                      sx={{
                        fontSize: 60,
                        color: 'rgba(255,255,255,0.2)',
                        mb: 2,
                      }}
                    />
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        color: 'rgba(255,255,255,0.5)',
                        fontSize: '1.1rem',
                        fontWeight: 500,
                      }}
                    >
                      No articles found
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        color: 'rgba(255,255,255,0.35)',
                        fontSize: '0.9rem',
                        mt: 1,
                      }}
                    >
                      Try a different search term or category
                    </Typography>
                  </Box>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mt: 5,
                    }}
                  >
                    <Pagination
                      count={totalPages}
                      page={page}
                      onChange={handlePageChange}
                      sx={{
                        '& .MuiPaginationItem-root': {
                          fontFamily: "'Poppins', sans-serif",
                          color: 'rgba(255,255,255,0.7)',
                          borderColor: 'rgba(255,255,255,0.15)',
                          fontWeight: 500,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: 'rgba(59,130,246,0.15)',
                            borderColor: '#3b82f6',
                          },
                          '&.Mui-selected': {
                            backgroundColor: '#3b82f6',
                            color: '#fff',
                            borderColor: '#3b82f6',
                            '&:hover': {
                              backgroundColor: '#2563eb',
                            },
                          },
                        },
                      }}
                      variant="outlined"
                      shape="rounded"
                    />
                  </Box>
                )}
              </Box>

              {/* RIGHT SIDEBAR */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                }}
              >
                {/* Trending Posts */}
                <Box
                  sx={{
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '20px',
                    p: 3,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      mb: 3,
                    }}
                  >
                    <TrendingUp sx={{ color: '#3b82f6', fontSize: 22 }} />
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                      }}
                    >
                      Trending Posts
                    </Typography>
                  </Box>

                  <Box
                    sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}
                  >
                    {trendingPosts.map((post, index) => (
                      <Box
                        key={post.id}
                        sx={{
                          display: 'flex',
                          gap: 2,
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            '& .trending-title': {
                              color: '#3b82f6',
                            },
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "'Poppins', sans-serif",
                            color: 'rgba(59,130,246,0.3)',
                            fontWeight: 800,
                            fontSize: '1.8rem',
                            lineHeight: 1,
                            minWidth: '30px',
                          }}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </Typography>

                        <Box sx={{ flex: 1 }}>
                          <Typography
                            className="trending-title"
                            sx={{
                              fontFamily: "'Poppins', sans-serif",
                              color: '#fff',
                              fontWeight: 600,
                              fontSize: '0.88rem',
                              lineHeight: 1.4,
                              mb: 0.5,
                              transition: 'color 0.3s ease',
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                            }}
                          >
                            {post.title}
                          </Typography>
                          <Box
                            sx={{
                              display: 'flex',
                              gap: 1.5,
                              color: 'rgba(255,255,255,0.4)',
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: '0.75rem',
                                color: 'inherit',
                              }}
                            >
                              {post.date}
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: '0.75rem',
                                color: 'inherit',
                              }}
                            >
                              {post.views} views
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>

                {/* Newsletter */}
                <Box
                  sx={{
                    background:
                      'linear-gradient(135deg, #1a2f5c 0%, #0f1f3d 100%)',
                    borderRadius: '20px',
                    p: 3.5,
                    position: 'relative',
                    overflow: 'hidden',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '-40%',
                      right: '-30%',
                      width: '200px',
                      height: '200px',
                      background:
                        'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)',
                      filter: 'blur(40px)',
                      pointerEvents: 'none',
                    }}
                  />

                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '1.2rem',
                      mb: 1,
                      position: 'relative',
                    }}
                  >
                    📬 Newsletter
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: '0.85rem',
                      lineHeight: 1.6,
                      mb: 2.5,
                      position: 'relative',
                    }}
                  >
                    Get the latest articles and insights delivered straight to
                    your inbox. No spam, ever.
                  </Typography>

                  <TextField
                    fullWidth
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                      mb: 2,
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        borderRadius: '10px',
                        color: '#fff',
                        fontFamily: "'Poppins', sans-serif",
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.15)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(59, 130, 246, 0.5)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#3b82f6',
                        },
                      },
                    }}
                  />

                  <Button
                    fullWidth
                    variant="contained"
                    endIcon={<Send />}
                    onClick={() => {
                      if (email) {
                        setEmail('');
                      }
                    }}
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      background:
                        'linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)',
                      color: '#fff',
                      textTransform: 'none',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      py: 1.3,
                      borderRadius: '10px',
                      boxShadow: '0 4px 14px rgba(59, 130, 246, 0.4)',
                      '&:hover': {
                        background:
                          'linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Subscribe
                  </Button>
                </Box>

                {/* Categories Widget */}
                <Box
                  sx={{
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '20px',
                    p: 3,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      mb: 2.5,
                    }}
                  >
                    Categories
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 0.5,
                    }}
                  >
                    {categories
                      .filter((c) => c !== 'All')
                      .map((category) => {
                        const count = blogPosts.filter(
                          (p) => p.category === category
                        ).length;
                        return (
                          <Box
                            key={category}
                            onClick={() => {
                              setActiveCategory(category);
                              setPage(1);
                            }}
                            sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              py: 1.2,
                              px: 1.5,
                              borderRadius: '8px',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease',
                              backgroundColor:
                                activeCategory === category
                                  ? 'rgba(59,130,246,0.15)'
                                  : 'transparent',
                              '&:hover': {
                                backgroundColor: 'rgba(59,130,246,0.1)',
                              },
                            }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.2,
                              }}
                            >
                              <Box
                                sx={{
                                  width: '8px',
                                  height: '8px',
                                  borderRadius: '50%',
                                  backgroundColor: getCategoryColor(category),
                                }}
                              />
                              <Typography
                                sx={{
                                  fontFamily: "'Poppins', sans-serif",
                                  color:
                                    activeCategory === category
                                      ? '#3b82f6'
                                      : 'rgba(255,255,255,0.7)',
                                  fontSize: '0.88rem',
                                  fontWeight:
                                    activeCategory === category ? 600 : 400,
                                }}
                              >
                                {category}
                              </Typography>
                            </Box>
                            <Chip
                              label={count}
                              size="small"
                              sx={{
                                fontFamily: "'Poppins', sans-serif",
                                height: '24px',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                backgroundColor: 'rgba(255,255,255,0.08)',
                                color: 'rgba(255,255,255,0.6)',
                                borderRadius: '6px',
                              }}
                            />
                          </Box>
                        );
                      })}
                  </Box>
                </Box>

                {/* Tags Cloud */}
                <Box
                  sx={{
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '20px',
                    p: 3,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      mb: 2,
                    }}
                  >
                    Popular Tags
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {[
                      'SEO',
                      'Google Ads',
                      'Facebook Ads',
                      'WordPress',
                      'Content Marketing',
                      'Social Media',
                      'Email Marketing',
                      'Analytics',
                      'Zapier',
                      'AI Tools',
                      'Affiliate Marketing',
                      'Digital Strategy',
                    ].map((tag) => (
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
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: 'rgba(59,130,246,0.15)',
                            borderColor: '#3b82f6',
                            color: '#3b82f6',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>

      <Footer />
    </>
  );
}