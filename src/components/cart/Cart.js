import React from 'react';
import { Drawer, Box, Typography, List, ListItem, ListItemText, Button, IconButton, Divider } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloseIcon from '@mui/icons-material/Close';

const Cart = ({ open, onClose, cart = [], removeFromCart, getTotalPrice }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: '100%', sm: 400 },
          backgroundColor: '#FAF6F1',
          p: 3
        }
      }}
    >
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography sx={{ 
            fontSize: '14px', 
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontWeight: 400
          }}>
            Shopping Cart ({cart.length})
          </Typography>
          <IconButton onClick={onClose} sx={{ p: 0 }}>
            <CloseIcon sx={{ fontSize: '20px' }} />
          </IconButton>
        </Box>

        <Divider sx={{ borderColor: 'rgba(0,0,0,0.06)' }} />

        {/* Cart Items */}
        <Box sx={{ 
          flex: 1, 
          overflowY: 'auto',
          my: 3,
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,0.2)',
            borderRadius: '2px',
          }
        }}>
          {cart.length === 0 ? (
            <Typography sx={{ 
              textAlign: 'center', 
              color: 'text.secondary',
              fontSize: '13px',
              letterSpacing: '1px',
              mt: 8
            }}>
              Your cart is empty
            </Typography>
          ) : (
            cart.map((item) => (
              <Box key={item.id} sx={{ 
                display: 'flex', 
                gap: 2, 
                mb: 3,
                p: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.02)'
                }
              }}>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  style={{ 
                    width: 80, 
                    height: 80, 
                    objectFit: 'cover',
                    backgroundColor: '#fff'
                  }} 
                />
                <Box sx={{ flex: 1 }}>
                  <Typography sx={{ 
                    fontSize: '14px',
                    letterSpacing: '0.5px',
                    mb: 1
                  }}>
                    {item.name}
                  </Typography>
                  <Typography sx={{ 
                    fontSize: '13px',
                    color: 'text.secondary',
                    mb: 2
                  }}>
                    ${item.price}
                  </Typography>
                  <Button 
                    onClick={() => removeFromCart(item.id)}
                    sx={{
                      fontSize: '11px',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      color: 'text.secondary',
                      p: 0,
                      minWidth: 'auto',
                      '&:hover': {
                        backgroundColor: 'transparent',
                        color: 'text.primary'
                      }
                    }}
                  >
                    Remove
                  </Button>
                </Box>
              </Box>
            ))
          )}
        </Box>

        {/* Footer */}
        <Box>
          <Divider sx={{ borderColor: 'rgba(0,0,0,0.06)' }} />
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            my: 3
          }}>
            <Typography sx={{ 
              fontSize: '14px',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              Total
            </Typography>
            <Typography sx={{ 
              fontSize: '16px',
              fontWeight: 500
            }}>
              ${getTotalPrice()}
            </Typography>
          </Box>
          <Button
            fullWidth
            sx={{
              backgroundColor: '#1a1a1a',
              color: '#fff',
              py: 1.5,
              fontSize: '13px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              borderRadius: 0,
              '&:hover': {
                backgroundColor: '#333'
              }
            }}
          >
            Checkout
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Cart;