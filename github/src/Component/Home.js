import React from 'react';
import { styled } from '@mui/system';
import {
  Container,
  
  Typography,
  Paper,
  Divider,
  Button,
} from '@mui/material';


const Header = styled('header')({
  backgroundColor: '#2979ff',
  color: 'white',
  padding: '20px',
  textAlign: 'center',
});

const Navbar = styled('nav')({
  backgroundColor: '#9e9e9e',
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const SearchBar = styled('input')({
  padding: '8px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  marginRight: '10px',
});

const NavLink = styled('a')({
  textDecoration: 'none',
  color: '#333',
  margin: '0 10px',
  cursor: 'pointer',
  '&:hover': {
    color: '#1976d2',
  },
});

const Content = styled('main')({
  padding: '20px',
});

const Section = styled('section')({
  marginBottom: '20px',
  border: '2px solid #ccc',
  padding: '10px',
  borderRadius: '4px',
});

const Home = () => {
  return (
    <div>
      {/* Header */}
      <Header>
        <h1 style={{color:("#e1f5fe")}}>INVENTORY MANAGEMENT</h1>
      </Header>

      {/* Navbar */}
      <Navbar>
        <div>
          <SearchBar type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
        <div>
          <NavLink>Dashboard</NavLink>
          <NavLink>Inventory</NavLink>
          <NavLink>Orders</NavLink>
          {/* Add more navigation links as needed */}
        </div>
      </Navbar>

      <Container sx={{ marginTop: 5 }}>
      {/* Pending Orders */}
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
        <Typography variant="h4" gutterBottom>
          Pending Orders
        </Typography>
        <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
        {/* Display pending orders or related content */}
        <Button variant="contained" color="primary">
          View All Pending Orders
        </Button>
      </Paper>

      {/* Today's Delivered Orders */}
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
        <Typography variant="h4" gutterBottom>
          Today's Delivered Orders
        </Typography>
        <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
        {/* Display today's delivered orders or related content */}
        <Button variant="contained" color="primary">
          View Delivered Orders
        </Button>
      </Paper>

      {/* Cancelled Orders */}
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Cancelled Orders
        </Typography>
        <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
        {/* Display cancelled orders or related content */}
        <Button variant="contained" color="primary">
          View Cancelled Orders
        </Button>
      </Paper>
    </Container>
      
    </div>
  );
};

export default Home;