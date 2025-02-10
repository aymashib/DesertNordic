import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Fade, Divider } from '@mui/material'; // Ensure Divider is imported from @mui/material
import SearchIcon from '@mui/icons-material/Search';
import LoginGate from './components/auth/LoginGate';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link as RouterLink } from 'react-router-dom';
import Store from './pages/Store';
import Home from './pages/Home';
import { FaUser, FaShoppingCart, FaInstagram, FaPinterest, FaLinkedinIn } from 'react-icons/fa'; // Import icons from react-icons
import useScrollDirection from './hooks/useScrollDirection';

import { 
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  Link as HeroLink, 
  button as HeroButton,
  AcmeLogo,
 
} from "@heroui/react";
import { 
  Typography, 
  Container, 
  Grid, 
  Box,
  TextField,
  IconButton,
  Button // Add this import for Button
} from '@mui/material';
import logo from './assets/images/logobrown-nobackground.png';
import Loader from './components/Loader';
// Remove the Header import
// import Header from './components/layout/Header';
import ProductCard from './components/products/ProductCard';
import Cart from './components/cart/Cart';
import ProductDetail from './components/products/ProductDetail';
// Remove this import
// import DesertWeather from './components/DesertWeather';
// Remove this import
// import ParticleBackground from './components/ParticleBackground';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';
import ProductSlider from './components/products/ProductSlider';
// Update the products array with local image paths
const products = [
  {
    id: 1,
    name: 'Nordic Mug 01',
    price: 39.99,
    image: require('./assets/images/preview (1).webp'),
    hoverImage: require('./assets/images/preview (5).webp'),
    description: 'Minimalist ceramic mug with circular patterns',
    category: 'Gobi Desert'
  },
  {
    id: 2,
    name: 'Nordic Mug 02',
    price: 39.99,
    image: require('./assets/images/preview (2).webp'),
    hoverImage: require('./assets/images/preview (5).webp'),
    description: 'Ceramic mug with wave patterns',
    category: 'Monte Fuji'
  },
  {
    id: 3,
    name: 'Nordic Mug 03',
    price: 39.99,
    image: require('./assets/images/preview copy.png'),    
    hoverImage: require('./assets/images/preview (1).webp'),
    description: 'Geometric pattern ceramic mug',
    category: 'Achacama Desert'
  },
  {
    id: 4,
    name: 'Nordic Mug 04',
    price: 39.99,
    image: require('./assets/images/preview (4).webp'),    
    hoverImage: require('./assets/images/preview (4).webp'),
    description: 'Geometric pattern ceramic mug',
    category: 'Antartica'
  },
  // Fix the category name in the products array
  {
    id: 5,
    name: 'Nordic Mug 05',
    price: 39.99,
    image: require('./assets/images/preview (5).webp'),    
    hoverImage: require('./assets/images/preview (7).png'),
    description: 'Geometric pattern ceramic mug',
    category: 'Monte Fuji'  // Changed from 'MONTE FUJI' to match other categories
  },
  {
    id: 6,
    name: 'Nordic Mug 06',
    price: 39.99,
    image: require('./assets/images/preview (5).webp'),    
    hoverImage: require('./assets/images/preview (7).png'),
    description: 'Geometric pattern ceramic mug',
    category: 'Gobi Desert'
  },
  {
    id: 7,
    name: 'Nordic Mug 07',
    price: 39.99,
    image: require('./assets/images/preview (5).webp'),    
    hoverImage: require('./assets/images/preview (7).png'),
    description: 'Geometric pattern ceramic mug',
    category: 'Achacama Desert'
  },
  {
    id: 8,
    name: 'Nordic Mug 08',
    price: 39.99,
    image: require('./assets/images/preview (5).webp'),    
    hoverImage: require('./assets/images/preview (7).png'),
    description: 'Geometric pattern ceramic mug',
    category: 'Antartica'
  },
  {
    id: 9,
    name: 'Nordic Mug 09',
    price: 39.99,
    image: require('./assets/images/preview (5).webp'),    
    hoverImage: require('./assets/images/preview (7).png'),
    description: 'Geometric pattern ceramic mug',
    category: 'Monte Fuji'
  },
  {
    id: 10,
    name: 'Nordic Mug 10',
    price: 39.99,
    image: require('./assets/images/preview (5).webp'),
    hoverImage: require('./assets/images/preview (5).webp'),
    description: 'Geometric pattern ceramic mug',
    category: 'Gobi Desert'
  },
  {
    id: 11,
    name: 'Nordic Mug 10',
    price: 39.99,
    image: require('./assets/images/preview (5).webp'),
    hoverImage: require('./assets/images/preview (5).webp'),
    description: 'Geometric pattern ceramic mug',
    category: 'Achacama Desert'
  },
  {
    id: 12,
    name: 'Nordic Mug 10',
    price: 39.99,
    image: require('./assets/images/preview (5).webp'),
    hoverImage: require('./assets/images/preview (5).webp'),
    description: 'Geometric pattern ceramic mug',
    category: 'Antartica'
  }
];

// Add this import at the top with other imports






function App() {
  const scrollDirection = useScrollDirection();
  
  // Remove the isAuthenticated state
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentQuote, setCurrentQuote] = useState(0);

  // Add these new quotes that blend desert and Nordic concepts
  const minimalistQuotes = [
    "Where desert winds meet Nordic simplicity",
    "Crafted in silence, like desert at dawn",
    "Minimalism inspired by nature's extremes",
    "Finding beauty in emptiness",
    "Where two worlds of simplicity collide",
    "Embracing the essence of less"
  ];

  // Add a new state for parallax effect
  const [scrollPosition, setScrollPosition] = useState(0);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Clock effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Quote rotation effect
  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % minimalistQuotes.length);
    }, 5000);
    return () => clearInterval(quoteInterval);
  }, [minimalistQuotes.length]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBackToShop = () => {
    setSelectedProduct(null);
  };

  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Gobi Desert', 'Monte fuji', 'Achacama Desert', 'Antartica'];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    console.log('Selected Category:', category);
    console.log('Filtered Products:', products.filter(product => product.category === category));
  };

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  // Define drawerOpen state
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Define toggleDrawer function
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  // Use media query to determine if the screen size is small (mobile)
  const isMobile = useMediaQuery('(max-width:768px)'); // Adjusted breakpoint

  // Modify the loader effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup function
    return () => clearTimeout(timer);
  }, []); // Empty dependency array to run only once

  // Update the main Box component's styling
  return (
    <>
      {loading && <Loader isLoading={loading} />}
      <Box sx={{ 
        bgcolor: '#FAF6F1', 
        minHeight: '100vh', 
        opacity: loading ? 0 : 1, 
        transition: 'all 0.5s ease-in-out',
        visibility: loading ? 'hidden' : 'visible', 
        position: 'relative', 
        zIndex: 1,
        display: loading ? 'none' : 'block'
      }}>
        {/* Use Divider from @mui/material */}
        <Divider />
        
        {/* Navbar */}
        <Box
          sx={{
            position: 'fixed',
            width: '100%',
            top: 0,
            backgroundColor: 'rgba(250, 246, 241, 0.98)',
            backdropFilter: 'blur(10px)',
            zIndex: 1000,
            height: '120px',
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid rgba(0,0,0,0.03)',
            transition: 'all 0.3s ease',
            transform: scrollDirection === 'down' ? 'translateY(-120px)' : 'translateY(0)',
            opacity: scrollDirection === 'down' ? 0 : 1,
          }}
        >
          <Container maxWidth="xl">
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
                height: '100%',
                py: 3,
              }}
            >
              {/* Desktop Navigation Menu */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 5 }}>
                <Typography 
                  component={RouterLink}
                  to="/about" 
                  sx={{ 
                    textDecoration: 'none', 
                    color: '#000',
                    fontSize: '13px',
                    letterSpacing: '2px',
                    fontWeight: 400,
                    textTransform: 'uppercase',
                    position: 'relative',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -2,
                      left: 0,
                      width: 0,
                      height: '1px',
                      backgroundColor: '#000',
                      transition: 'width 0.3s ease'
                    },
                    '&:hover:after': {
                      width: '100%'
                    }
                  }}
                >
                  About
                </Typography>
                <Typography 
                  component={RouterLink}
                  to="/store" 
                  sx={{ 
                    textDecoration: 'none', 
                    color: '#000',
                    fontSize: '13px',
                    letterSpacing: '2px',
                    fontWeight: 400,
                    textTransform: 'uppercase',
                    position: 'relative',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -2,
                      left: 0,
                      width: 0,
                      height: '1px',
                      backgroundColor: '#000',
                      transition: 'width 0.3s ease'
                    },
                    '&:hover:after': {
                      width: '100%'
                    }
                  }}
                >
                  Store
                </Typography>
                <Typography 
                  component={RouterLink}
                  to="/collaborations" 
                  sx={{ 
                    textDecoration: 'none', 
                    color: '#000',
                    fontSize: '13px',
                    letterSpacing: '2px',
                    fontWeight: 400,
                    textTransform: 'uppercase',
                    position: 'relative',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -2,
                      left: 0,
                      width: 0,
                      height: '1px',
                      backgroundColor: '#000',
                      transition: 'width 0.3s ease'
                    },
                    '&:hover:after': {
                      width: '100%'
                    }
                  }}
                >
                  Collaborations
                </Typography>
              </Box>

              {/* Brand Logo - Centered Position */}
              <Box sx={{ 
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                alignItems: 'center'
              }}>
                <Typography
                  component={RouterLink}
                  to="/"
                  sx={{
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'opacity 0.3s ease',
                    '&:hover': {
                      opacity: 0.85
                    }
                  }}
                >
                  <img src={logo} alt="Logo" style={{ height: '150px' }} />
                </Typography>
              </Box>

              {/* Cart */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography 
                  component="button"
                  onClick={() => setIsCartOpen(true)}
                  sx={{ 
                    cursor: 'pointer',
                    border: 'none',
                    background: 'none',
                    color: '#000',
                    fontSize: '13px',
                    letterSpacing: '2px',
                    fontWeight: 400,
                    textTransform: 'uppercase',
                    position: 'relative',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -2,
                      left: 0,
                      width: 0,
                      height: '1px',
                      backgroundColor: '#000',
                      transition: 'width 0.3s ease'
                    },
                    '&:hover:after': {
                      width: '100%'
                    }
                  }}
                >
                  Cart ({cart.length})
                </Typography>
                <IconButton 
                  sx={{ 
                    display: { md: 'none' },
                    color: '#000'
                  }}
                  onClick={() => setDrawerOpen(!drawerOpen)}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Mobile Navigation Menu */}
        <Box
          sx={{
            position: 'fixed',
            top: '120px', // Positioned below main navbar
            left: 0,
            right: 0,
            bgcolor: 'background.paper',
            display: { xs: drawerOpen ? 'block' : 'none', md: 'none' },
            zIndex: 999,
          }}
        >
          <Container>
            <Box sx={{ py: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography component="a" href="#" sx={{ textDecoration: 'none', color: 'text.primary' }}>
                About
              </Typography>
              <Typography component="a" href="#" sx={{ textDecoration: 'none', color: 'text.primary' }}>
                Shop
              </Typography>
              <Typography component="a" href="#" sx={{ textDecoration: 'none', color: 'text.primary' }}>
                Collaborations
              </Typography>
            </Box>
          </Container>
        </Box>

        <Routes>
          <Route path="/" element={
            <Home 
              products={products}
              onAddToCart={addToCart}
              handleProductClick={handleProductClick}
            />
          } />
          
          <Route path="/store" element={
            <Store 
              products={filteredProducts}
              loading={loading}  // This is already being passed
              selectedCategory={selectedCategory}
              categories={categories}
              handleCategoryChange={handleCategoryChange}
              onAddToCart={addToCart}
              handleProductClick={handleProductClick}
            />
          } />
        </Routes>

        {/* Cart Component */}
        <Cart 
          open={isCartOpen} 
          onClose={() => setIsCartOpen(false)}
          cart={cart}
          removeFromCart={removeFromCart}
          getTotalPrice={getTotalPrice}
        />

        {/* Minimalist Contact Section */}
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
                <Box sx={{ 
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2
                }}>
                  <img 
                    src={logo} 
                    alt="DesertNordic Logo" 
                    style={{ 
                      width: '120px', 
                      marginBottom: '24px',
                      opacity: 0.9
                    }} 
                  />
                  <Typography variant="body2" sx={{ 
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': { pl: 1 }
                  }}>
                    Our Story
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': { pl: 1 }
                  }}>
                    Store
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': { pl: 1 }
                  }}>
                    Contact
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  gap: 3,
                  alignItems: 'center'
                }}>
                  <Typography variant="subtitle1" sx={{ letterSpacing: 1 }}>
                    CONNECT WITH US
                  </Typography>
                  <Box sx={{ 
                    display: 'flex', 
                    gap: 3,
                    '& svg': {
                      fontSize: '20px',
                      transition: 'all 0.3s ease',
                    }
                  }}>
                    <IconButton 
                      sx={{ 
                        color: '#1a1a1a',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          color: '#666'
                        }
                      }}
                    >
                      <FaInstagram />
                    </IconButton>
                    <IconButton 
                      sx={{ 
                        color: '#1a1a1a',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          color: '#666'
                        }
                      }}
                    >
                      <FaPinterest />
                    </IconButton>
                    <IconButton 
                      sx={{ 
                        color: '#1a1a1a',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          color: '#666'
                        }
                      }}
                    >
                      <FaLinkedinIn />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="subtitle1" sx={{ mb: 3, letterSpacing: 1 }}>
                    NEWSLETTER
                  </Typography>
                  <TextField
                    variant="standard"
                    placeholder="Your email"
                    fullWidth
                    sx={{
                      '& .MuiInput-underline:before': {
                        borderBottomColor: 'rgba(0,0,0,0.12)'
                      },
                      '& .MuiInput-underline:hover:before': {
                        borderBottomColor: 'rgba(0,0,0,0.3)'
                      }
                    }}
                  />
                  <Button 
                    sx={{ 
                      mt: 3,
                      textTransform: 'none',
                      borderBottom: '1px solid #1a1a1a',
                      borderRadius: 0,
                      padding: '4px 0',
                      minWidth: 'auto',
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

        {/* Footer */}
        <Box component="footer" sx={{ /* ... */ }}>
          {/* ... footer content ... */}
        </Box>
      </Box>
    </>
  );
}

export default App;
