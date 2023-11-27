import React from 'react';
import {
  AppBar,
  Container,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import { useQuery } from 'react-query';

const drawerWidth = 240;

const getUsers = async () => {
  // Simulating fetching users from an API
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
};

function Users() {
  const { data: users, isLoading } = useQuery('users', getUsers);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Admin Page
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <List>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItem>
        </List>
      </Drawer>
      <Container component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {/* Content */}
        <Users />
      </Container>
    </div>
  );
}

export default App;
