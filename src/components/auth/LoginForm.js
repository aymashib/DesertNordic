import React, { useState } from 'react';
import { Box, TextField, Button, Typography, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';

const LoginForm = ({ onClose }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box component="form" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
      <TextField
        fullWidth
        label="Email"
        margin="normal"
        required
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon sx={{ color: 'text.secondary' }} />
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#000',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#000',
            },
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#000',
          },
        }}
      />
      <TextField
        fullWidth
        label="Password"
        type={showPassword ? 'text' : 'password'}
        margin="normal"
        required
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#000',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#000',
            },
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#000',
          },
        }}
      />
      <Button
        fullWidth
        type="submit"
        sx={{
          mt: 3,
          mb: 2,
          bgcolor: '#000',
          color: '#fff',
          py: 1.5,
          '&:hover': {
            bgcolor: '#333',
          },
        }}
      >
        Login
      </Button>
      <Typography variant="body2" align="center" sx={{ color: 'text.secondary' }}>
        Forgot your password?
      </Typography>
    </Box>
  );
};

export default LoginForm;