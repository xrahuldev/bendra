// app/blog/page.tsx

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
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  blogPosts,
  featuredPost,
  categories,
  getCategoryColor,
  getTrendingPosts,
} from '@/lib/blogsData';

export default function BlogPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [email, setEmail] = useState<string>('');

  const trendingPosts = getTrendingPosts(4);

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

  const handleReadMore = (slug: string) => {
    router.push(`/blogs/${slug}`);
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
              onClick={() => handleReadMore(featuredPost.slug)}
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
                  onClick={(e) => {
                    e.stopPropagation();
                    handleReadMore(featuredPost.slug);
                  }}
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
                      onClick={() => handleReadMore(post.slug)}
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
                              onClick={(e) => e.stopPropagation()}
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
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2.5,
                    }}
                  >
                    {trendingPosts.map((post, index) => (
                      <Box
                        key={post.id}
                        onClick={() => handleReadMore(post.slug)}
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