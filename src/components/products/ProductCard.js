import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';

const ProductCard = ({ product, onAddToCart, onProductClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      sx={{ 
        boxShadow: 'none', 
        bgcolor: 'transparent',
        position: 'relative',
        maxWidth: '100%',
        cursor: 'pointer',
        '&:hover .product-info': {
          opacity: 1
        }
      }}
      onClick={() => onProductClick(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="300"
          image={isHovered && product.hoverImage ? product.hoverImage : product.image}
          alt={product.name}
          sx={{ 
            objectFit: 'cover',
            backgroundColor: '#e8e8e8'
          }}
        />
        <Box 
          className="product-info"
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: 'rgba(255, 255, 255, 0.9)',
            p: 1,
            opacity: 0,
            transition: 'opacity 0.3s ease'
          }}
        >
          <Typography variant="subtitle2" sx={{ color: '#000' }}>
            {product.name}
          </Typography>
          <Typography variant="body2" sx={{ color: '#666' }}>
            ${product.price}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default ProductCard;