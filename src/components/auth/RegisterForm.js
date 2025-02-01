import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const RegisterForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add registration logic here
    console.log('Register:', formData);
    onClose();
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="Name"
        margin="normal"
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <TextField
        fullWidth
        label="Email"
        type="email"
        margin="normal"
        required
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        margin="normal"
        required
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <TextField
        fullWidth
        label="Confirm Password"
        type="password"
        margin="normal"
        required
        value={formData.confirmPassword}
        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
      />
      <Button
        fullWidth
        type="submit"
        sx={{
          mt: 3,
          bgcolor: '#000',
          color: '#fff',
          '&:hover': {
            bgcolor: '#333'
          }
        }}
      >
        Register
      </Button>
    </Box>
  );
};

export default RegisterForm;