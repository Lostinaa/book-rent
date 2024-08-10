// src/components/RenterDashboard.js
import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import axios from 'axios';

const RenterDashboard = () => {
  const [books, setBooks] = useState([]);
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    const fetchBooksAndRentals = async () => {
      try {
        const [booksResponse, rentalsResponse] = await Promise.all([
          axios.get('/api/books/available', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }),
          axios.get('/api/rentals', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
        ]);
        setBooks(booksResponse.data);
        setRentals(rentalsResponse.data);
      } catch (error) {
        console.error('Error fetching books and rentals:', error.message);
      }
    };

    fetchBooksAndRentals();
  }, []);

  const handleRent = async (bookId) => {
    try {
      await axios.post('/api/rentals', { bookId }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setBooks(books.filter(book => book.id !== bookId));
    } catch (error) {
      console.error('Error renting book:', error.message);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Renter Dashboard
      </Typography>
      <Typography variant="h6" gutterBottom>
        Available Books
      </Typography>
      <List>
        {books.map(book => (
          <ListItem key={book.id}>
            <ListItemText primary={book.title} secondary={book.author} />
            <Button variant="contained" color="primary" onClick={() => handleRent(book.id)}>
              Rent
            </Button>
          </ListItem>
        ))}
      </List>
      <Typography variant="h6" gutterBottom>
        My Rentals
      </Typography>
      <List>
        {rentals.map(rental => (
          <ListItem key={rental.id}>
            <ListItemText primary={rental.Book.title} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default RenterDashboard;
