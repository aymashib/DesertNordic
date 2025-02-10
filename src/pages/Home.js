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
          fontSize: '2.5rem',
          fontWeight: 500,
          mb: 6,
          textAlign: 'left'
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

     
    </>
  );
}; 

export default Home;