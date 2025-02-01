import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Link, Typography, Badge, IconButton } from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AuthModal from '../auth/AuthModal';

const Header = ({ logo, cartItemsCount, onCartClick }) => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <AppBar position="static" sx={{ bgcolor: 'transparent', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ width: '40px' }} />
        <Box sx={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
          <Link href="/" sx={{ display: 'flex', justifyContent: 'center' }}>
            <img src={logo} alt="Logo" style={{ height: '150px' }} />
          </Link>
        </Box>
        <Box>
          <IconButton onClick={() => setIsAuthOpen(true)}>
            <PersonOutlineIcon sx={{ color: '#000' }} />
          </IconButton>
          <IconButton onClick={onCartClick}>
            <Badge badgeContent={cartItemsCount} color="primary">
              <ShoppingBagOutlinedIcon sx={{ color: '#000' }} />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
      <AuthModal open={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </AppBar>
  );
};

export default Header;