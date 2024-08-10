// src/components/Register.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, MenuItem } from '@mui/material';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('/api/users/register', { name, email, password, role });
      window.location.href = '/login';
    } catch (error) {
      console.error('Register error:', error.message);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        select
        fullWidth
        margin="normal"
      >
        <MenuItem value="admin">Admin</MenuItem>
        <MenuItem value="owner">Owner</MenuItem>
        <MenuItem value="renter">Renter</MenuItem>
      </TextField>
      <Button variant="contained" color="primary" onClick={handleRegister}>
        Register
      </Button>
    </Container>
  );
};

export default Register;
