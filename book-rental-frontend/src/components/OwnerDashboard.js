// src/components/OwnerDashboard.js
import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

const OwnerDashboard = () => {
  const [books, setBooks] = useState([]);
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    const fetchBooksAndRentals = async () => {
      try {
        const [booksResponse, rentalsResponse] = await Promise.all([
          axios.get('/api/books/owner', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }),
          axios.get('/api/rentals/owner', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
        ]);
        setBooks(booksResponse.data);
        setRentals(rentalsResponse.data);
      } catch (error) {
        console.error('Error fetching books and rentals:', error.message);
      }
    };

    fetchBooksAndRentals();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Owner Dashboard
      </Typography>
      <Typography variant="h6" gutterBottom>
        My Books
      </Typography>
      <List>
        {books.map(book => (
          <ListItem key={book.id}>
            <ListItemText primary={book.title} secondary={book.author} />
          </ListItem>
        ))}
      </List>
      <Typography variant="h6" gutterBottom>
        Rentals
      </Typography>
      <List>
        {rentals.map(rental => (
          <ListItem key={rental.id}>
            <ListItemText primary={rental.Book.title} secondary={`Rented by ${rental.renter.name}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default OwnerDashboard;
