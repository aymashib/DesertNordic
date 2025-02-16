import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import 'swiper/css';
import 'swiper/css/navigation';

const ProductSlider = ({ products, onAddToCart, onProductClick }) => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box sx={{ 
        position: 'relative',
        '& .swiper-button-next, & .swiper-button-prev': {
          display: 'none'
        }
      }}>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Box
                sx={{
                  position: 'relative',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  '&:hover img': {
                    transform: 'scale(1.05)',
                  },
                  '&:hover .product-info': {
                    opacity: 1,
                    transform: 'translateY(0)',
                  }
                }}
                onClick={() => onProductClick(product)}
              >
                <Box
                  component="img"
                  src={product.image}
                  alt={product.name}
                  sx={{
                    width: '100%',
                    height: '380px',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease',
                  }}
                />
                <Box
                  className="product-info"
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    bgcolor: 'rgba(250, 246, 241, 0.95)',
                    p: 3,
                    transform: 'translateY(20px)',
                    opacity: 0,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: '14px',
                      letterSpacing: '1px',
                      mb: 1,
                      textTransform: 'uppercase'
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '13px',
                      color: 'text.secondary',
                      letterSpacing: '0.5px'
                    }}
                  >
                    ${product.price}
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Custom Navigation Buttons */}
      <IconButton
        className="swiper-button-prev-custom"
        sx={{
          position: 'absolute',
          left: -20,
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'transparent',
          color: '#000',
          zIndex: 2,
          '&:hover': {
            bgcolor: 'transparent',
            color: '#666'
          }
        }}
      >
        <ArrowBackIcon />
      </IconButton>
      <IconButton
        className="swiper-button-next-custom"
        sx={{
          position: 'absolute',
          right: -20,
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'transparent',
          color: '#000',
          zIndex: 2,
          '&:hover': {
            bgcolor: 'transparent',
            color: '#666'
          }
        }}
      >
        <ArrowForwardIcon />
      </IconButton>
    </Box>
  );
};

export default ProductSlider;