import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Button,
  Grid 
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ProductSlider from '../components/products/ProductSlider';
import { FaInstagram, FaPinterest, FaLinkedinIn } from 'react-icons/fa';

const Home = ({ products, onAddToCart, handleProductClick }) => {
  return (
    <>
      {/* Hero Section */}
      <Box sx={{
        height: '100vh',
        width: '100%',
        position: 'relative',
        backgroundColor: '#FAF6F1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        <Box sx={{ 
          position: 'relative', 
          zIndex: 2,
          padding: { xs: '2rem', md: '4rem' }
        }}>
          <Typography variant="h1" sx={{
            fontSize: { xs: '4rem', md: '12rem' },
            fontWeight: 900,
            letterSpacing: '-0.02em',
            lineHeight: 0.9,
            mb: 2,
            textTransform: 'uppercase',
            color: 'rgb(20, 18, 18)',
            fontFamily: 'Akrobat, sans-serif'  // You'll need to import this font or use a similar one
          }}>
            Desert
            <br />
            Nordic
          </Typography>
          {/* Rest of the hero section remains the same */}
          <Typography variant="h4" sx={{
            fontSize: { xs: '1rem', md: '1.5rem' },
            fontWeight: 300,
            maxWidth: '500px',
            mb: 4,
            letterSpacing: '0.05em',
            margin: '0 auto',
            color: '#4A2F24'  // Changed to dark brown
          }}>
            Minimalist ceramic designs inspired by desert landscapes
          </Typography>
          <Button
            component={RouterLink}
            to="/store"
            variant="outlined"
            sx={{
              borderColor: '#4A2F24',  // Changed to dark brown
              color: '#4A2F24',        // Changed to dark brown
              borderWidth: '1px',
              px: 4,
              py: 1.5,
              borderRadius: 0,
              '&:hover': {
                borderWidth: '1px',
                backgroundColor: '#4A2F24',
                color: '#FAF6F1'
              }
            }}
          >
            EXPLORE COLLECTION
          </Button>
        </Box>
      </Box>

      {/* Cover Image Section */}
      <Box sx={{
        height: '80vh',
        width: '100%',
        position: 'relative',
        backgroundColor: '#FAF6F1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
      }}>
        <Box sx={{
          width: { xs: '90%', md: '60%' },
          height: { xs: '50%', md: '60%' },
          position: 'relative',
          zIndex: 2,
          overflow: 'hidden',
          backgroundColor: '#000',
        }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.8
            }}
          >
            <source src={require('../assets/images/desert-collection.mp4')} type="video/mp4" />
          </video>
          <Box sx={{
            position: 'absolute',
            bottom: 40,
            left: 0,
            right: 0,
            textAlign: 'center'
          }}>
         
            <Button
              component={RouterLink}
              to="/store"
              variant="outlined"
              sx={{
                borderColor: '#fff',
                color: '#fff',
                borderWidth: '1px',
                px: 4,
                py: 1.5,
                borderRadius: 0,
                '&:hover': {
                  borderWidth: '1px',
                  backgroundColor: '#fff',
                  color: '#000'
                }
              }}
            >
              Explore Now
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Best Sellers Section */}
      <Container sx={{ py: 12 }}>
        <Typography variant="h2" sx={{
          color: 'rgb(7.8% 7.1% 7.1%)',
          fontFamily: 'Akrobat',
          fontSize: '56px',
          fontWeight: 900,
          letterSpacing: '-3.84px',
          lineHeight: '172.8px',
          margin: '0px 0px 16px',
          textAlign: 'center',
          textTransform: 'uppercase'
        }}>
          BEST SELLERS
        </Typography>
        <ProductSlider 
          products={products.slice(0, 6)}
          onAddToCart={onAddToCart}
          onProductClick={handleProductClick}
        />
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mt: 6 
        }}>
          <Button
            component={RouterLink}
            to="/store"
            variant="outlined"
            sx={{
              borderColor: '#000',
              color: '#000',
              px: 4,
              py: 1.5,
              borderRadius: 0,
              fontSize: '0.9rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              '&:hover': {
                backgroundColor: '#000',
                color: '#fff',
                borderColor: '#000'
              }
            }}
          >
            VIEW ALL PRODUCTS
          </Button>
        </Box>
      </Container>

      {/* Video Section */}
      <Box sx={{
        height: '100vh',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        bgcolor: '#000'
      }}>
        <Box
          component="img"
          src={require('../assets/images/blackdesert.jpg')}
          className="parallax-image"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: '0.7'
          }}
        />
        <Box sx={{
          position: 'absolute',
          bottom: { xs: 40, md: 80 },
          left: { xs: 20, md: 80 },
          color: '#fff',
          zIndex: 2
        }}>
          <Typography variant="h2" sx={{ 
            mb: 2,
            fontSize: { xs: '2rem', md: '3.5rem' },
            fontWeight: 600
          }}>
            NEW DROP
          </Typography>
          <Typography variant="h4" sx={{ 
            mb: 3,
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 300
          }}>
            Desert Collection 2024
          </Typography>
          <Button
            component={RouterLink}
            to="/store"
            variant="outlined"
            sx={{
              borderColor: '#fff',
              color: '#fff',
              borderWidth: '2px',
              px: 4,
              py: 1.5,
              '&:hover': {
                borderWidth: '2px',
                backgroundColor: '#fff',
                color: '#000'
              }
            }}
          >
            DISCOVER MORE
          </Button>
        </Box>
      </Box>

            {/* Contact Section */}
            <Box sx={{ 
        py: 16, 
        bgcolor: '#FAF6F1', 
        color: '#1a1a1a', 
        textAlign: 'center',
        borderTop: '1px solid rgba(0,0,0,0.06)'
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} justifyContent="center" alignItems="flex-start">
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle1" sx={{ mb: 3, letterSpacing: 1 }}>
                CONTACT
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, color: '#4A2F24' }}>
                info@desertnordic.com
              </Typography>
              <Typography variant="body1" sx={{ color: '#4A2F24' }}>
                +1 234 567 890
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, color: '#4A2F24' }}>
                123 Desert Street
              </Typography>
              <Typography variant="body1" sx={{ color: '#4A2F24' }}>
                Nordic City, NC 12345
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography variant="subtitle1" sx={{ mb: 3, letterSpacing: 1 }}>
                FOLLOW US
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
                <FaInstagram style={{ cursor: 'pointer', fontSize: '20px' }} />
                <FaPinterest style={{ cursor: 'pointer', fontSize: '20px' }} />
                <FaLinkedinIn style={{ cursor: 'pointer', fontSize: '20px' }} />
              </Box>
              <Typography variant="body2" sx={{ mt: 3, color: '#4A2F24' }}>
                Follow us for exclusive updates
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography variant="subtitle1" sx={{ mb: 3, letterSpacing: 1 }}>
                NEWSLETTER
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                gap: 2 
              }}>
                <input
                  type="email"
                  placeholder="Your email"
                  style={{
                    width: '100%',
                    padding: '8px 0',
                    border: 'none',
                    borderBottom: '1px solid rgba(0,0,0,0.12)',
                    backgroundColor: 'transparent',
                    outline: 'none',
                    textAlign: 'center'
                  }}
                />
                <Button 
                  sx={{ 
                    mt: 2,
                    textTransform: 'none',
                    borderBottom: '1px solid #4A2F24',
                    borderRadius: 0,
                    padding: '4px 0',
                    minWidth: 'auto',
                    color: '#4A2F24',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      paddingLeft: '8px'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;