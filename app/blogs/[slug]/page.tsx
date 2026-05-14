// app/blog/[slug]/page.tsx

'use client';

import React from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  Chip,
  IconButton,
  Divider,
} from '@mui/material';
import {
  CalendarMonth,
  Person,
  ArrowForward,
  ArrowBack,
  AccessTime,
  Visibility,
  BookmarkBorder,
  Share,
  Facebook,
  Twitter,
  LinkedIn,
} from '@mui/icons-material';
import { useRouter, useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  getPostBySlug,
  getRelatedPosts,
  getCategoryColor,
  type BlogPost,
} from '@/lib/blogsData';
import ReactMarkdown from 'react-markdown';

export default function BlogDetailPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;

  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <Box
          sx={{
            backgroundColor: '#050d1a',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              color: '#fff',
              fontSize: '2rem',
              fontWeight: 700,
            }}
          >
            404 - Blog Not Found
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              color: 'rgba(255,255,255,0.6)',
              fontSize: '1rem',
            }}
          >
            The blog post you&apos;re looking for doesn&apos;t exist.
          </Typography>
          <Button
            startIcon={<ArrowBack />}
            onClick={() => router.push('/blog')}
            sx={{
              fontFamily: "'Poppins', sans-serif",
              background:
                'linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)',
              color: '#fff',
              textTransform: 'none',
              fontWeight: 600,
              px: 4,
              py: 1.5,
              borderRadius: '12px',
              '&:hover': {
                background:
                  'linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)',
              },
            }}
          >
            Back to Blog
          </Button>
        </Box>
        <Footer />
      </>
    );
  }

  const relatedPosts = getRelatedPosts(post, 3);

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

        {/* HERO SECTION */}
        <Box
          sx={{
            pt: { xs: 14, md: 18 },
            pb: { xs: 4, md: 6 },
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
            {/* Back Button */}
            <Button
              startIcon={<ArrowBack />}
              onClick={() => router.push('/blog')}
              sx={{
                fontFamily: "'Poppins', sans-serif",
                color: 'rgba(255,255,255,0.6)',
                textTransform: 'none',
                fontWeight: 500,
                mb: 4,
                px: 2,
                py: 1,
                borderRadius: '10px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  color: '#3b82f6',
                },
              }}
            >
              Back to Blog
            </Button>

            {/* Category & Meta */}
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: 2,
                mb: 3,
              }}
            >
              <Chip
                label={post.category}
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  backgroundColor: `${getCategoryColor(post.category)}20`,
                  color: getCategoryColor(post.category),
                  border: `1px solid ${getCategoryColor(post.category)}40`,
                  borderRadius: '8px',
                  px: 1,
                }}
              />
              {post.featured && (
                <Chip
                  label="⭐ Featured"
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    backgroundColor: '#f59e0b',
                    color: '#fff',
                    borderRadius: '8px',
                  }}
                />
              )}
            </Box>

            {/* Title */}
            <Typography
              variant="h1"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                color: '#fff',
                fontWeight: 800,
                fontSize: {
                  xs: '1.8rem',
                  sm: '2.2rem',
                  md: '2.8rem',
                  lg: '3.2rem',
                },
                lineHeight: 1.2,
                mb: 3,
                maxWidth: '900px',
              }}
            >
              {post.title}
            </Typography>

            {/* Excerpt */}
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                color: 'rgba(255,255,255,0.65)',
                fontSize: { xs: '1rem', md: '1.15rem' },
                lineHeight: 1.8,
                mb: 4,
                maxWidth: '800px',
              }}
            >
              {post.excerpt}
            </Typography>

            {/* Meta Info */}
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 3,
                mb: 4,
              }}
            >
              {[
                {
                  icon: <Person sx={{ fontSize: 18 }} />,
                  text: post.author,
                },
                {
                  icon: <CalendarMonth sx={{ fontSize: 18 }} />,
                  text: post.date,
                },
                {
                  icon: <AccessTime sx={{ fontSize: 18 }} />,
                  text: post.readTime,
                },
                {
                  icon: <Visibility sx={{ fontSize: 18 }} />,
                  text: `${post.views} views`,
                },
              ].map((meta, i) => (
                <Box
                  key={i}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.8,
                    color: 'rgba(255,255,255,0.5)',
                  }}
                >
                  {meta.icon}
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '0.9rem',
                      color: 'inherit',
                    }}
                  >
                    {meta.text}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Share & Bookmark */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                mb: 4,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                }}
              >
                Share:
              </Typography>
              {[
                {
                  icon: <Facebook />,
                  color: '#1877f2',
                },
                {
                  icon: <Twitter />,
                  color: '#1da1f2',
                },
                {
                  icon: <LinkedIn />,
                  color: '#0a66c2',
                },
                {
                  icon: <Share />,
                  color: '#3b82f6',
                },
                {
                  icon: <BookmarkBorder />,
                  color: '#f59e0b',
                },
              ].map((item, i) => (
                <IconButton
                  key={i}
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.6)',
                    width: '38px',
                    height: '38px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: `${item.color}20`,
                      borderColor: item.color,
                      color: item.color,
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  {React.cloneElement(item.icon, {
                    sx: { fontSize: 18 },
                  })}
                </IconButton>
              ))}
            </Box>
          </Container>
        </Box>

        {/* HERO IMAGE */}
        <Box sx={{ position: 'relative', zIndex: 1, mb: { xs: 4, md: 6 } }}>
          <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
            <Box
              sx={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                height: { xs: '250px', sm: '350px', md: '450px', lg: '500px' },
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${post.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(0deg, rgba(5,13,26,0.4) 0%, transparent 30%)',
                }}
              />
            </Box>
          </Container>
        </Box>

        {/* BLOG CONTENT */}
        <Box sx={{ position: 'relative', zIndex: 1, pb: { xs: 6, md: 10 } }}>
          <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', lg: '1fr 300px' },
                gap: { xs: 4, lg: 6 },
              }}
            >
              {/* Main Content */}
              <Box
                sx={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '24px',
                  p: { xs: 3, sm: 4, md: 5 },
                }}
              >
                <Box
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '1rem',
                    lineHeight: 1.9,
                    '& h2': {
                      fontFamily: "'Poppins', sans-serif",
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: { xs: '1.4rem', md: '1.7rem' },
                      mt: 5,
                      mb: 2.5,
                      lineHeight: 1.3,
                      borderLeft: '4px solid #3b82f6',
                      pl: 2,
                    },
                    '& h3': {
                      fontFamily: "'Poppins', sans-serif",
                      color: '#fff',
                      fontWeight: 600,
                      fontSize: { xs: '1.15rem', md: '1.3rem' },
                      mt: 4,
                      mb: 2,
                      lineHeight: 1.4,
                    },
                    '& p': {
                      fontFamily: "'Poppins', sans-serif",
                      mb: 2,
                      color: 'rgba(255,255,255,0.75)',
                    },
                    '& ul, & ol': {
                      pl: 3,
                      mb: 2.5,
                      '& li': {
                        fontFamily: "'Poppins', sans-serif",
                        mb: 1,
                        color: 'rgba(255,255,255,0.7)',
                        '&::marker': {
                          color: '#3b82f6',
                        },
                      },
                    },
                    '& strong': {
                      color: '#fff',
                      fontWeight: 600,
                    },
                    '& a': {
                      color: '#3b82f6',
                      textDecoration: 'none',
                      borderBottom: '1px solid transparent',
                      transition: 'border-color 0.3s ease',
                      '&:hover': {
                        borderColor: '#3b82f6',
                      },
                    },
                    '& blockquote': {
                      borderLeft: '3px solid #3b82f6',
                      pl: 3,
                      py: 1,
                      my: 3,
                      backgroundColor: 'rgba(59,130,246,0.05)',
                      borderRadius: '0 12px 12px 0',
                      fontStyle: 'italic',
                      color: 'rgba(255,255,255,0.6)',
                    },
                    '& code': {
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      color: '#60a5fa',
                      px: 1,
                      py: 0.3,
                      borderRadius: '4px',
                      fontSize: '0.9rem',
                      fontFamily: "'Fira Code', monospace",
                    },
                    '& pre': {
                      backgroundColor: 'rgba(0,0,0,0.4)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '12px',
                      p: 3,
                      overflow: 'auto',
                      my: 3,
                      '& code': {
                        backgroundColor: 'transparent',
                        px: 0,
                        py: 0,
                      },
                    },
                    '& hr': {
                      border: 'none',
                      borderTop: '1px solid rgba(255,255,255,0.1)',
                      my: 4,
                    },
                    '& em': {
                      color: 'rgba(255,255,255,0.6)',
                    },
                  }}
                >
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                </Box>

                {/* Tags */}
                <Divider
                  sx={{
                    borderColor: 'rgba(255,255,255,0.08)',
                    my: 4,
                  }}
                />
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: 'rgba(255,255,255,0.5)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      mb: 1.5,
                    }}
                  >
                    Tags:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {post.tags.map((tag) => (
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

              {/* Sidebar */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                }}
              >
                {/* Author Card */}
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
                  <Box
                    sx={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background:
                        'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '1.5rem',
                      }}
                    >
                      B
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      mb: 0.5,
                    }}
                  >
                    {post.author}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: 'rgba(255,255,255,0.5)',
                      fontSize: '0.85rem',
                      lineHeight: 1.6,
                    }}
                  >
                    Digital marketing experts helping businesses grow through
                    innovative strategies.
                  </Typography>
                </Box>

                {/* Table of Contents */}
                <Box
                  sx={{
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '20px',
                    p: 3,
                    position: 'sticky',
                    top: '100px',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '1.05rem',
                      mb: 2,
                    }}
                  >
                    📋 Quick Info
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1.5,
                    }}
                  >
                    {[
                      { label: 'Category', value: post.category },
                      { label: 'Published', value: post.date },
                      { label: 'Read Time', value: post.readTime },
                      { label: 'Views', value: post.views },
                    ].map((item, i) => (
                      <Box
                        key={i}
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          py: 1,
                          borderBottom:
                            i < 3
                              ? '1px solid rgba(255,255,255,0.06)'
                              : 'none',
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "'Poppins', sans-serif",
                            color: 'rgba(255,255,255,0.5)',
                            fontSize: '0.82rem',
                          }}
                        >
                          {item.label}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "'Poppins', sans-serif",
                            color: '#3b82f6',
                            fontSize: '0.82rem',
                            fontWeight: 600,
                          }}
                        >
                          {item.value}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* RELATED POSTS */}
        {relatedPosts.length > 0 && (
          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              pb: { xs: 8, md: 12 },
            }}
          >
            <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  mb: 1,
                }}
              >
                Related{' '}
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
                  Articles
                </Box>
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '0.95rem',
                  mb: 4,
                }}
              >
                More articles you might enjoy
              </Typography>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                  },
                  gap: 3,
                }}
              >
                {relatedPosts.map((relatedPost) => (
                  <Box
                    key={relatedPost.id}
                    onClick={() => {
                      router.push(`/blog/${relatedPost.slug}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    sx={{
                      background:
                        'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '18px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'all 0.4s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        borderColor: 'rgba(59, 130, 246, 0.3)',
                        boxShadow: '0 16px 40px rgba(0,0,0,0.25)',
                        '& .related-image': {
                          transform: 'scale(1.08)',
                        },
                      },
                    }}
                  >
                    {/* Image */}
                    <Box
                      sx={{
                        position: 'relative',
                        height: '180px',
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        className="related-image"
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          backgroundImage: `url(${relatedPost.image})`,
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
                      <Chip
                        label={relatedPost.category}
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: 12,
                          left: 12,
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 500,
                          fontSize: '0.72rem',
                          backgroundColor: getCategoryColor(
                            relatedPost.category
                          ),
                          color: '#fff',
                          borderRadius: '6px',
                          height: '24px',
                        }}
                      />
                    </Box>

                    {/* Content */}
                    <Box sx={{ p: 2.5 }}>
                      <Typography
                        sx={{
                          fontFamily: "'Poppins', sans-serif",
                          color: '#fff',
                          fontWeight: 700,
                          fontSize: '0.95rem',
                          lineHeight: 1.4,
                          mb: 1,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {relatedPost.title}
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "'Poppins', sans-serif",
                            color: 'rgba(255,255,255,0.4)',
                            fontSize: '0.78rem',
                          }}
                        >
                          {relatedPost.date}
                        </Typography>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                            color: '#3b82f6',
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "'Poppins', sans-serif",
                              fontSize: '0.8rem',
                              fontWeight: 600,
                              color: 'inherit',
                            }}
                          >
                            Read
                          </Typography>
                          <ArrowForward sx={{ fontSize: 14 }} />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>

              {/* Back to Blog */}
              <Box sx={{ textAlign: 'center', mt: 6 }}>
                <Button
                  startIcon={<ArrowBack />}
                  onClick={() => router.push('/blog')}
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    background:
                      'linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)',
                    color: '#fff',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    px: 4,
                    py: 1.5,
                    borderRadius: '12px',
                    boxShadow: '0 4px 14px rgba(59,130,246,0.4)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background:
                        'linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(59,130,246,0.5)',
                    },
                  }}
                >
                  View All Articles
                </Button>
              </Box>
            </Container>
          </Box>
        )}
      </Box>

      <Footer />
    </>
  );
}