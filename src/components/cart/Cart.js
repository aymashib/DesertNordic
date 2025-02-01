import React from 'react';
import { Drawer, Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

const Cart = ({ open, onClose, items, onRemove, total }) => {
  return (
    <Drawer 
      anchor="right" 
      open={open} 
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 350,
          bgcolor: 'white',
          p: 2
        }
      }}
    >
      <Box>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'light' }}>
          Cart
        </Typography>
        <List>
          {items.map((item, index) => (
            <ListItem key={index} sx={{ py: 2 }}>
              <ListItemText 
                primary={item.name}
                secondary={`$${item.price}`}
                sx={{ color: 'black' }}
              />
              <Button 
                onClick={() => onRemove(item.id)}
                sx={{ 
                  color: 'black',
                  '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' }
                }}
              >
                Remove
              </Button>
            </ListItem>
          ))}
        </List>
        {items.length > 0 && (
          <>
            <Typography variant="body1" sx={{ mt: 2, textAlign: 'right' }}>
              Total: ${total}
            </Typography>
            <Button 
              fullWidth 
              sx={{ 
                mt: 2,
                color: 'black',
                border: '1px solid black',
                '&:hover': { bgcolor: 'black', color: 'white' }
              }}
            >
              Checkout
            </Button>
          </>
        )}
      </Box>
    </Drawer>
  );
};

export default Cart;