import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import ProductCard from './ProductCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProductSlider = ({ products, onAddToCart, onProductClick }) => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box className="swiper-button-prev" sx={{
        position: 'absolute',
        left: '-20px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 2,
        width: '40px',
        height: '40px',
        bgcolor: 'white',
        borderRadius: '50%',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        '&:hover': {
          bgcolor: '#f5f5f5'
        }
      }}>
        <ArrowBackIosIcon sx={{ fontSize: 20 }} />
      </Box>

      <Box className="swiper-button-next" sx={{
        position: 'absolute',
        right: '-20px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 2,
        width: '40px',
        height: '40px',
        bgcolor: 'white',
        borderRadius: '50%',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        '&:hover': {
          bgcolor: '#f5f5f5'
        }
      }}>
        <ArrowForwardIosIcon sx={{ fontSize: 20 }} />
      </Box>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={false}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Box sx={{ 
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <ProductCard
                product={product}
                onAddToCart={onAddToCart}
                onProductClick={onProductClick}
              />
              <Typography 
                variant="h6" 
                sx={{ 
                  mt: 2,
                  fontWeight: 500,
                  fontSize: '1rem'
                }}
              >
                {product.name}
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mt: 1,
                  color: 'text.secondary'
                }}
              >
                ${product.price}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ProductSlider;