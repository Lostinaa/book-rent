// src/components/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import axios from 'axios';

const AdminDashboard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchPendingBooks = async () => {
      try {
        const response = await axios.get('/api/books/pending', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching pending books:', error.message);
      }
    };

    fetchPendingBooks();
  }, []);

  const handleApprove = async (id) => {
    try {
      await axios.put(`/api/books/${id}/approve`, {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setBooks(books.filter(book => book.id !== id));
    } catch (error) {
      console.error('Error approving book:', error.message);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <List>
        {books.map(book => (
          <ListItem key={book.id}>
            <ListItemText primary={book.title} secondary={book.author} />
            <Button variant="contained" color="primary" onClick={() => handleApprove(book.id)}>
              Approve
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default AdminDashboard;
