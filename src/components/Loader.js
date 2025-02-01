import React from 'react';
import { Box } from '@mui/material';

const Loader = ({ isLoading }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'white',
        zIndex: 9999,
        opacity: isLoading ? 1 : 0,
        visibility: isLoading ? 'visible' : 'hidden',
        transition: 'opacity 0.5s ease, visibility 0.5s ease'
      }}
    >
      <img 
        src={require('../assets/images/loadercamel.gif')} 
        alt="Loading..."
        style={{
          width: '300px',
          filter: 'grayscale(1)'
        }}
      />
    </Box>
  );
};

export default Loader;