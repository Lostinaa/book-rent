// src/components/Header.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const Header = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Welcome to the Book Rental System
      </Typography>
    </Container>
  );
};

export default Header;
