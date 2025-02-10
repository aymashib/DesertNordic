import React, { useState } from 'react';
import { 
  Container, 
  Grid, 
  Box, 
  Typography, 
  Button,
  Fade 
} from '@mui/material';
import ProductCard from '../components/products/ProductCard';
import ProductDetail from '../components/products/ProductDetail';
import Loader from '../components/Loader';

const Store = ({ products, loading, selectedCategory, categories, handleCategoryChange, onAddToCart, handleProductClick }) => {
  if (loading) {
    return <Loader isLoading={loading} />;
  }

  return (
    <Box sx={{ pt: '120px', minHeight: '100vh', backgroundColor: '#FAF6F1' }}>
      <Container maxWidth="xl">
        <Typography variant="h1" sx={{
          fontFamily: 'Akrobat, sans-serif',
          fontSize: '192px',
          fontWeight: 900,
          letterSpacing: '-3.84px',
          lineHeight: '172.8px',
          textAlign: 'center',
          textTransform: 'uppercase',
          color: 'rgb(7.8% 7.1% 7.1%)',
          mb: 6
        }}>
          Store
        </Typography>
        
        {/* Categories */}
        <Box sx={{ 
          mb: 8,
          display: 'flex',
          justifyContent: 'center',
          gap: { xs: 2, md: 4 },
          flexWrap: 'wrap',
          borderTop: '1px solid rgba(0,0,0,0.05)',
          borderBottom: '1px solid rgba(0,0,0,0.05)',
          py: 4,
          px: { xs: 2, md: 8 }
        }}>
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => handleCategoryChange(category)}
              sx={{
                color: selectedCategory === category ? '#000' : '#666',
                fontSize: '13px',
                letterSpacing: '2px',
                fontWeight: selectedCategory === category ? 500 : 400,
                textTransform: 'uppercase',
                position: 'relative',
                padding: '8px 16px',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  width: selectedCategory === category ? '100%' : 0,
                  height: '1px',
                  backgroundColor: '#000',
                  transition: 'all 0.3s ease',
                  transform: selectedCategory === category ? 'translateX(-50%)' : 'translateX(-50%) scaleX(0)'
                },
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: '#000',
                  '&:after': {
                    width: '100%',
                    transform: 'translateX(-50%)'
                  }
                }
              }}
            >
              {category}
            </Button>
          ))}
        </Box>

        {/* Products Grid */}
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard
                product={product}
                onAddToCart={onAddToCart}
                handleProductClick={handleProductClick}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Store;