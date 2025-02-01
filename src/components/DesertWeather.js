import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import UmbrellaOutlinedIcon from '@mui/icons-material/UmbrellaOutlined';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';

const deserts = [
  { name: 'Sahara Desert', location: 'Libya', temp: '45°C' },
  { name: 'Arabian Desert', location: 'Dubai', temp: '41°C' },
  { name: 'Gobi Desert', location: 'Mongolia', temp: '38°C' },
  { name: 'Mojave Desert', location: 'Nevada', temp: '42°C' },
  { name: 'Atacama Desert', location: 'Chile', temp: '35°C' },
  { name: 'Antartica Desert', location: 'Artic', temp: '-35°C' }
];

const getWeatherIcon = (condition, isNight) => {
  switch (condition.toLowerCase()) {
    case 'clear':
      return isNight ? <NightlightOutlinedIcon sx={{ color: '#2C2C2C' }}/> : <WbSunnyOutlinedIcon sx={{ color: '#2C2C2C' }}/>;
    case 'rain':
      return <UmbrellaOutlinedIcon sx={{ color: '#2C2C2C' }}/>;
    case 'snow':
      return <AcUnitIcon sx={{ color: '#2C2C2C' }}/>;
    case 'cloudy':
      return <CloudOutlinedIcon sx={{ color: '#2C2C2C' }}/>;
    default:
      return <WbSunnyOutlinedIcon sx={{ color: '#2C2C2C' }}/>;
  }
};

const DesertWeather = () => {
  const [currentDesert, setCurrentDesert] = useState(0);
  const [weather, setWeather] = useState({ temp: '--', condition: '--' });

  useEffect(() => {
    const rotateDesert = setInterval(() => {
      setCurrentDesert((prev) => (prev + 1) % deserts.length);
    }, 5000);

    return () => clearInterval(rotateDesert);
  }, []);

  // Note: You'll need to implement actual weather API calls here
  // This is a placeholder for demonstration
  useEffect(() => {
    const fetchWeather = async () => {
      // Replace with actual API call
      const mockWeather = {
        temp: Math.floor(Math.random() * 20 + 25),
        condition: 'Clear'
      };
      setWeather(mockWeather);
    };

    fetchWeather();
  }, [currentDesert]);

  return (
    <Box sx={{ 
      position: 'fixed',
      top: 24,
      left: 24,
      zIndex: 1000,
      textAlign: 'left'
    }}>
      <Typography variant="body2" sx={{ 
        color: '#8C7B6D',
        fontFamily: 'monospace',
        mb: 0.5
      }}>
        {deserts[currentDesert].name}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {getWeatherIcon(weather.condition, weather.isNight)}
        <Typography variant="body2" sx={{ 
          color: '#2C2C2C',
          fontFamily: 'monospace'
        }}>
          {weather.temp}°C | {weather.condition}
        </Typography>
      </Box>
    </Box>
  );
};

export default DesertWeather;