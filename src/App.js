import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Fade } from '@mui/material';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LoginGate from './components/auth/LoginGate';
import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent,
  Box,
  Link,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button
} from '@mui/material';
import logo from './assets/images/logobrown-nobackground.png';
import Loader from './components/Loader';
import Header from './components/layout/Header';
import ProductCard from './components/products/ProductCard';
import Cart from './components/cart/Cart';
import ProductDetail from './components/products/ProductDetail';
import DesertWeather from './components/DesertWeather';
// Remove this import
// import ParticleBackground from './components/ParticleBackground';

// Update the products array with local image paths
const products = [
  {
    id: 1,
    name: 'Nordic Mug 01',
    price: 39.99,
    image: require('./assets/images/preview (1).webp'),
    hoverImage: require('./assets/images/preview (5).webp'),
    description: 'Minimalist ceramic mug with circular patterns'
  },
  {
    id: 2,
    name: 'Nordic Mug 02',
    price: 39.99,
    image: require('./assets/images/preview (2).webp'),
    hoverImage: require('./assets/images/preview (5).webp'),
    description: 'Ceramic mug with wave patterns'
  },
  {
    id: 3,
    name: 'Nordic Mug 03',
    price: 39.99,
    image: require('./assets/images/preview copy.png'),    
    hoverImage: require('./assets/images/preview (1).webp'),
    description: 'Geometric pattern ceramic mug'
  },
  {
    id: 4,
    name: 'Nordic Mug 04',
    price: 39.99,
    image: require('./assets/images/preview (4).webp'),    
    hoverImage: require('./assets/images/preview (4).webp'),
    description: 'Geometric pattern ceramic mug'
  },
  {
    id: 5,
    name: 'Nordic Mug 05',
    price: 39.99,
    image: require('./assets/images/preview (5).webp'),    
    hoverImage: require('./assets/images/preview (7).png'), // Add hover images for other products
    description: 'Geometric pattern ceramic mug'
  },
  {
    id: 6,
    name: 'Nordic Mug 06',
    price: 39.99,
    image: require('./assets/images/preview (5).webp'),    
    hoverImage: require('./assets/images/preview (7).png'), // Add hover images for other products
    description: 'Geometric pattern ceramic mug'
  },
  {
    id: 7,
    name: 'Nordic Mug 07',
    price: 39.99,
    image: require('./assets/images/preview (5).webp'),    
    hoverImage: require('./assets/images/preview (7).png'), // Add hover images for other products
    description: 'Geometric pattern ceramic mug'
  },
  {
    id: 8,
    name: 'Nordic Mug 08',
    price: 39.99,
    image: require('./assets/images/preview (5).webp'),    
    hoverImage: require('./assets/images/preview (7).png'), // Add hover images for other products
    description: 'Geometric pattern ceramic mug'
  },
  {
    id: 9,
    name: 'Nordic Mug 09',
    price: 39.99,
    image: require('./assets/images/preview (5).webp'),    
    hoverImage: require('./assets/images/preview (7).png'), // Add hover images for other products
    description: 'Geometric pattern ceramic mug'
  },
  {
    id: 10,
    name: 'Nordic Mug 10',
    price: 39.99,
    image: require('./assets/images/preview (5).webp'),
    hoverImage: require('./assets/images/preview (5).webp'),
    description: 'Geometric pattern ceramic mug'
  },
  {
    id: 11,
    name: 'Nordic Mug 10',
    price: 39.99,
    image: require('./assets/images/preview (5).webp'),
    hoverImage: require('./assets/images/preview (5).webp'),
    description: 'Geometric pattern ceramic mug'
  },
  {
    id: 12,
    name: 'Nordic Mug 10',
    price: 39.99,
    image: require('./assets/images/preview (5).webp'),
    hoverImage: require('./assets/images/preview (5).webp'),
    description: 'Geometric pattern ceramic mug'
  }
];

// Add this import at the top with other imports




function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentQuote, setCurrentQuote] = useState(0);

  const minimalistQuotes = [
    "Simplicity is the ultimate sophistication",
    "Less is more in design and life",
    "Where desert meets Nordic minimalism",
    "Find beauty in simplicity",
    "Crafted with desert's serenity"
  ];

  // Add back the loader effect
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {!isAuthenticated ? (
        <LoginGate onLogin={() => setIsAuthenticated(true)} />
      ) : (
        <>
          <Loader isLoading={loading} />
          <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease', visibility: loading ? 'hidden' : 'visible', position: 'relative', zIndex: 1 }}>
            <DesertWeather />
            <Header logo={logo} cartItemsCount={cart.length} onCartClick={() => setIsCartOpen(true)} />

            {selectedProduct ? (
              <ProductDetail product={selectedProduct} onAddToCart={addToCart} onBack={handleBackToShop} />
            ) : (
              <>
                <Container sx={{ mt: 3, mb: 8, maxWidth: 'xl', px: { xs: 2, sm: 3, md: 4 } }}>
                  <Grid 
                    container 
                    spacing={0.5}
                    justifyContent="center"
                  >
                    {filteredProducts.map((product, index) => (
                      <Fade 
                        key={product.id}
                        in={!loading}
                        timeout={1000}
                        style={{ 
                          transitionDelay: `${index * 100}ms`
                        }}
                      >
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                          <ProductCard 
                            product={product}
                            onAddToCart={addToCart}
                            onProductClick={handleProductClick}
                          />
                        </Grid>
                      </Fade>
                    ))}
                  </Grid>
                </Container>
              </>
            )}

            <Cart 
              open={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              items={cart}
              onRemove={removeFromCart}
              total={getTotalPrice()}
            />

            <Box component="footer" sx={{ py: 3, textAlign: 'center', mt: 'auto' }}>
              {/* ... footer content ... */}
            </Box>
          </Box>
        </>
      )}
    </>
  );
}

export default App;
