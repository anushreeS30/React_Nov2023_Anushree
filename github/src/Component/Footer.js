// src/components/Footer.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" style={{ top: 'auto', bottom: 0 }}>
      <Toolbar style={{backgroundColor:"#009688"}}>
        <Typography variant="body2" color="inherit" align="center">
          © {new Date().getFullYear()} Inventory Management System
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
