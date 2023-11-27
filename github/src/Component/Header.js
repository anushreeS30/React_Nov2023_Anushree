// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{backgroundColor:"#009688"}}>
        <Typography variant="h6" >Inventory Management System</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
