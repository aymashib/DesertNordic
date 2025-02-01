import React, { useState } from 'react';
import { Box, TextField, Button, Container, Typography } from '@mui/material';

const LoginGate = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo credentials - in a real app, never hardcode these
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      onLogin();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img 
          src={require('../../assets/images/logobrown-nobackground.png')}
          alt="Logo"
          style={{ height: '80px', marginBottom: '2rem' }}
        />
        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          <TextField
            fullWidth
            label="Username"
            margin="normal"
            required
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            required
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
          <Button
            fullWidth
            type="submit"
            sx={{
              mt: 3,
              bgcolor: '#000',
              color: '#fff',
              py: 1.5,
              '&:hover': {
                bgcolor: '#333',
              },
            }}
          >
            Enter Site
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginGate;