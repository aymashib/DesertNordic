import React, { useState } from 'react';
import { Dialog, Box, Tabs, Tab } from '@mui/material';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthModal = ({ open, onClose }) => {
  const [tab, setTab] = useState(0);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <Box sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <img 
            src={require('../../assets/images/logobrown-nobackground.png')} 
            alt="Logo" 
            style={{ height: '100px' }} 
          />
        </Box>
        <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)} centered>
          <Tab label="Login" />
          <Tab label="Register" />
        </Tabs>
        <Box sx={{ mt: 3 }}>
          {tab === 0 ? <LoginForm onClose={onClose} /> : <RegisterForm onClose={onClose} />}
        </Box>
      </Box>
    </Dialog>
  );
};

export default AuthModal;