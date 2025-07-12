import React, { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  Button,
  Link,
  Avatar,
} from '@mui/material';
import rewearLogo from '../assets/rewear.png'; 

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    contact: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register Submitted:', form);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f9f9f5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
        fontFamily: 'Sen, sans-serif',
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          backgroundColor: '#ffffff',
          p: 4,
          borderRadius: 3,
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          maxWidth: 400,
          width: '100%',
          textAlign: 'center',
        }}
      >
        {/* Logo */}
        <Avatar
          src={rewearLogo}
          alt="ReWear Logo"
          sx={{
            width: 72,
            height: 72,
            margin: '0 auto',
            backgroundColor: '#d3e3cc',
            mb: 1.5,
          }}
        />

        {/* Title */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: '#5d8a53',
            mb: 3,
            fontFamily: 'Sen, sans-serif',
          }}
        >
          ReWear
        </Typography>

        {/* Name */}
        <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 0.5, textAlign: 'left' }}>
          Name
        </Typography>
        <TextField
          name="name"
          fullWidth
          variant="outlined"
          size="small"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              borderRadius: '10px',
              backgroundColor: '#f1ede7',
              height: '2.5rem',
              fontSize: '0.9rem',
            },
          }}
        />

        {/* Email */}
        <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 0.5, textAlign: 'left' }}>
          Email
        </Typography>
        <TextField
          name="email"
          type="email"
          fullWidth
          variant="outlined"
          size="small"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              borderRadius: '10px',
              backgroundColor: '#f1ede7',
              height: '2.5rem',
              fontSize: '0.9rem',
            },
          }}
        />

        {/* Contact */}
        <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 0.5, textAlign: 'left' }}>
          Contact
        </Typography>
        <TextField
          name="contact"
          type="tel"
          fullWidth
          variant="outlined"
          size="small"
          placeholder="Enter your contact number"
          value={form.contact}
          onChange={handleChange}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              borderRadius: '10px',
              backgroundColor: '#f1ede7',
              height: '2.5rem',
              fontSize: '0.9rem',
            },
          }}
        />

        {/* Password */}
        <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 0.5, textAlign: 'left' }}>
          Password
        </Typography>
        <TextField
          name="password"
          type="password"
          fullWidth
          variant="outlined"
          size="small"
          placeholder="Create a password"
          value={form.password}
          onChange={handleChange}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              borderRadius: '10px',
              backgroundColor: '#f1ede7',
              height: '2.5rem',
              fontSize: '0.9rem',
            },
          }}
        />

        {/* Register Button */}
        <Button
          type="submit"
          fullWidth
          sx={{
            backgroundColor: '#8ba96f',
            color: '#fff',
            py: 1.2,
            borderRadius: '10px',
            fontWeight: 600,
            fontSize: '1rem',
            textTransform: 'none',
            mt: 1,
            '&:hover': {
              backgroundColor: '#76995c',
            },
          }}
        >
          Register
        </Button>

        {/* Already have account? */}
        <Typography
          sx={{
            textAlign: 'center',
            mt: 3,
            fontSize: '0.9rem',
            color: '#444',
          }}
        >
          Already have an account?{' '}
          <Link
            href="#"
            underline="hover"
            sx={{
              color: '#5d8a53',
              fontWeight: 600,
              cursor: 'pointer',
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            Login
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Register;
