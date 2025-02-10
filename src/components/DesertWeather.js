import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import logo from '../../src/assets/images/logobrown-nobackground.png'; // Actualizada la ruta del logo

const DesertWeather = () => {
  return (
    <Box sx={{ p: 2, bgcolor: 'transparent' }}>
      <Typography sx={{ fontSize: '14px', color: 'rgb(20%, 18%, 18%)', fontWeight: 500 }}>
        Gobi Desert
        <Box component="span" sx={{ mx: 1 }}>|</Box>
        44°C
        <Box component="span" sx={{ mx: 1 }}>|</Box>
        Clear
      </Typography>
    </Box>
  );
};

export default DesertWeather;