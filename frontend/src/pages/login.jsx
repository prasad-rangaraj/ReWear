import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Divider,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import rewearLogo from '../assets/rewear.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password });
  };

  return (
    <Box
      sx={{
        backgroundColor: '#f9f9f5',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Sen, sans-serif',
        px: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: '#ffffff',
          p: 4,
          borderRadius: 3,
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          maxWidth: 400,
          width: '100%',
          textAlign: 'center',
        }}
      >
        {/* Logo Container */}
        <Box
          sx={{
            backgroundColor: '#dfeede',
            borderRadius: '50%',
            width: 80,
            height: 80,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto',
            mb: 3,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Box
            component="img"
            src={rewearLogo}
            alt="Rewear Logo"
            sx={{
              width: 80,
              height: 80,
              objectFit: 'contain',
            }}
          />
        </Box>
        <Typography sx={{color: '#8ba96f',fontWeight:800,fontSize:25,marginBottom:"10px"}}>ReWear</Typography>

        {/* Email */}
        <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 1,alignItems:"start",display:"flex" }}>
          Email
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            mb: 3,
            '& .MuiOutlinedInput-root': {
              borderRadius: '12px',
              backgroundColor: '#f1ede7',
            },
          }}
        />

        {/* Password */}
        <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 1 ,alignItems:"start",display:"flex"}}>
          Password
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '12px',
              backgroundColor: '#f1ede7',
            },
          }}
        />

        {/* Forgot Password */}
        <Box textAlign="right" sx={{ my: 2 }}>
          <Link
            href="#"
            underline="hover"
            sx={{ color: '#5d8a53', fontSize: '0.9rem', fontWeight: 500 }}
          >
            Forgot password?
          </Link>
        </Box>

        {/* Login Button */}
        <Button
          type="submit"
          onClick={handleSubmit}
          fullWidth
          sx={{
            backgroundColor: '#8ba96f',
            color: '#fff',
            py: 1.5,
            borderRadius: '10px',
            fontWeight: 600,
            fontSize: '1rem',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#76995c',
            },
          }}
        >
          Login
        </Button>

        {/* Divider */}
        <Divider sx={{ my: 3 }}>
          <Typography sx={{ fontSize: '0.75rem', color: '#999' }}>
            OR CONTINUE WITH
          </Typography>
        </Divider>

        {/* Google Button */}
        <Button
          fullWidth
          variant="outlined"
          startIcon={<GoogleIcon />}
          sx={{
            borderRadius: '10px',
            textTransform: 'none',
            fontWeight: 500,
            py: 1.2,
            borderColor: '#ccc',
            color: '#333',
            '&:hover': {
              backgroundColor: '#f5f5f5',
            },
          }}
        >
          Login with Google
        </Button>

        {/* Sign up prompt */}
        <Typography
          sx={{
            textAlign: 'center',
            mt: 3,
            fontSize: '0.9rem',
            color: '#444',
          }}
        >
          Don't have an account?{' '}
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
            Sign up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
