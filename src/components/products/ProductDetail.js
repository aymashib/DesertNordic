import React, { useState } from 'react';
import { Box, Button, Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const ProductDetail = ({ product, onAddToCart, onBack }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [product.image, product.hoverImage].filter(Boolean);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', p: 4 }}>
      <Button startIcon={<ArrowBackIcon />} onClick={onBack} sx={{ mb: 4 }}>
        Back to Shop
      </Button>
      
      <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
        <Box sx={{ flex: '1 1 500px', position: 'relative' }}>
          <img
            src={images[currentImageIndex]}
            alt={product.name}
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '600px',
              objectFit: 'contain'
            }}
          />
          {images.length > 1 && (
            <>
              <IconButton
                onClick={handlePrevImage}
                sx={{
                  position: 'absolute',
                  left: 16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  bgcolor: 'transparent',
                  border: '1px solid #000',
                  borderRadius: '50%',
                  transition: 'all 0.3s ease',
                  width: 40,
                  height: 40,
                  opacity: 0.7,
                  '&:hover': {
                    bgcolor: '#000',
                    opacity: 1,
                    transform: 'translateY(-50%) scale(1.1)',
                    '& .MuiSvgIcon-root': {
                      color: '#fff',
                      transform: 'translateX(-2px)'
                    }
                  }
                }}
              >
                <ArrowBackIosIcon sx={{ 
                  color: '#000',
                  transition: 'all 0.3s ease',
                  fontSize: 20
                }} />
              </IconButton>
              <IconButton
                onClick={handleNextImage}
                sx={{
                  position: 'absolute',
                  right: 16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  bgcolor: 'transparent',
                  border: '1px solid #000',
                  borderRadius: '50%',
                  transition: 'all 0.3s ease',
                  width: 40,
                  height: 40,
                  opacity: 0.7,
                  '&:hover': {
                    bgcolor: '#000',
                    opacity: 1,
                    transform: 'translateY(-50%) scale(1.1)',
                    '& .MuiSvgIcon-root': {
                      color: '#fff',
                      transform: 'translateX(2px)'
                    }
                  }
                }}
              >
                <ArrowForwardIosIcon sx={{ 
                  color: '#000',
                  transition: 'all 0.3s ease',
                  fontSize: 20
                }} />
              </IconButton>
            </>
          )}
        </Box>

        <Box sx={{ flex: '1 1 300px' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            ${product.price}
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            {product.description}
          </Typography>
          <Button
            variant="outlined"
            onClick={() => onAddToCart(product)}
            sx={{
              color: 'black',
              border: '1px solid black',
              '&:hover': {
                bgcolor: 'black',
                color: 'white'
              }
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetail;