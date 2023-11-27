// src/components/InventoryHomePage.js
import React from 'react';
import { Typography, Container, Paper, Divider, Button, AppBar, Toolbar, IconButton ,TextField} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PersonIcon from '@mui/icons-material/Person';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import PlaceIcon from '@mui/icons-material/Place';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PaidIcon from '@mui/icons-material/Paid';
import CategoryIcon from '@mui/icons-material/Category';
import PeopleIcon from '@mui/icons-material/People';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import { Link as RouterLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './InventoryHomePage.css';



const SearchBar = styled('input')({
  padding: '12px',  // Adjusted padding for a larger size
  borderRadius: '4px',
  border: '1px solid #ccc',
  marginRight: '10px',
  fontSize: '16px',  // Adjusted font size for better visibility
  outline: 'none',  // Remove the default input outline
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',  // Add a subtle box shadow
  transition: '0.3s',  // Add a smooth transition on hover
  '&:hover': {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  // Increase box shadow on hover
  },
});

const InventoryHomePage = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  return (
    <Container maxWidth="xl" sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
    <AppBar position="static" sx={{ bgcolor: "#009688" }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleMenuClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            
            <MenuItem onClick={handleMenuClose} component={RouterLink} to="/AboutUs"><ManageAccountsIcon/>AboutUs</MenuItem>
            <MenuItem onClick={handleMenuClose} component={RouterLink} to="/Categories"><CategoryIcon/>Categories</MenuItem>
            <MenuItem onClick={handleMenuClose} component={RouterLink} to="/Products"><LocalGroceryStoreIcon />Products</MenuItem>
            <MenuItem onClick={handleMenuClose} component={RouterLink} to="/loan"><PaidIcon/>Loan</MenuItem>
            <MenuItem onClick={handleMenuClose} component={RouterLink} to="/Staff"><PersonIcon/>Staff</MenuItem>
            <MenuItem onClick={handleMenuClose} component={RouterLink} to="/location"><PlaceIcon/>Location</MenuItem>
            <MenuItem onClick={handleMenuClose} component={RouterLink} to="/brand"><LocalOfferIcon/>Brands</MenuItem>
            <MenuItem onClick={handleMenuClose} component={RouterLink} to="/Report"><SignalCellularAltIcon />Reports</MenuItem>
            <MenuItem onClick={handleMenuClose} component={RouterLink} to="/SignUp"><LogoutIcon/>Logout</MenuItem>
            {/* Add more menu items as needed */}
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Inventory Management
          </Typography>
          <Button color="inherit"  component={RouterLink} to="/SignUp">
            <PersonIcon/>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      
        <Paper elevation={3} sx={{ padding: 3, marginBottom: 3, backgroundColor:"#6CB59B " }}>
          <br></br>
        <TextField variant="filled" color="success" type="date"  sx={{ marginLeft: '10px' }} />
        <br></br><br></br>
        <SearchBar type="text" placeholder="Search Offers" />
          <button>Search</button>
        </Paper>

      <div style={{ flexGrow: 1, overflowY: 'auto', padding: '20px' }}>
        <SearchBar type="text" placeholder="Enter Company Name" />
        <button><SearchIcon/></button>
      <div style={{ flexGrow: 1, overflowY: 'auto', padding: '20px' }}>
        <SearchBar type="text" placeholder="Enter Product Name" />
        <button><SearchIcon/> </button>

<br></br><br></br>
        <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
          <Typography variant="h4" gutterBottom >
            Product Statistics
          </Typography  >
          <Button variant="contained" color="primary" >Product Statistics</Button>
        </Paper>

        <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
          <Typography variant="h4" gutterBottom>
            Pending Orders
          </Typography>
          <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
          <Button variant="contained" color="primary">
            View All Pending Orders
          </Button>
        </Paper>

        <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
          <Typography variant="h4" gutterBottom>
            Today's Delivered Orders
          </Typography>
          <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
          <Button variant="contained" color="primary">
            View Delivered Orders
          </Button>
        </Paper>

        <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
          <Typography variant="h4" gutterBottom>
            Cancelled Orders
          </Typography>
          <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
          <Button variant="contained" color="primary">
            View Cancelled Orders
          </Button>
        </Paper>

        

      </div></div>


      <Paper elevation={3} sx={{ padding: 3, bgcolor: "#009688" }}>
       
        <Typography variant="body2" color="white" align="center">
        <InstagramIcon/>
        <WhatsAppIcon/>
        <TwitterIcon/>
        <LinkedInIcon/>
        <br></br>
          Contact: 9876543210<br>
          </br>Mail: inventorytech@gmail.com<br>
          </br>© 2023 Your Company Name. All rights reserved.
          
        </Typography>
      </Paper>
    
    </Container>
  );
};

export default InventoryHomePage;