import * as React from 'react';
import styles from './NavBar.module.css';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import logo from '../../assets/logo.png'

const NavBar = () => (
  <AppBar
    id="header"
    position="fixed"
    sx={{
      boxShadow: 0,
      bgcolor: 'transparent',
      backgroundImage: 'none',
    }}>
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <a href='https://blackcapitaltechnology.com/da'>
          <img
            src={logo}
            alt="Logo"
            className='logo'
            width='200'
          />
        </a>
      </Toolbar>
    </Container>
  </AppBar>
);

export default NavBar;
