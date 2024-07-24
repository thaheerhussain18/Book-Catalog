import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

const DeleteBook = () => {
  const [books, setBooks] = useState([]);
  const [selectedBookId, setSelectedBookId] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Fetch the list of books when the component mounts
  useEffect(() => {
    axios.get('http://localhost:5000/books')
      .then((res) => setBooks(res.data))
      .catch((err) => setError(err.message));
  }, []);

  // Handle delete operation
  const handleDelete = () => {
    if (!selectedBookId) {
      setError('Please select a book to delete');
      return;
    }

    axios.delete(`http://localhost:5000/books/${selectedBookId}`)
      .then(() => {
        setMessage('Book deleted successfully');
        setSelectedBookId('');
        // Remove the deleted book from the list
        setBooks(books.filter((book) => book.id !== selectedBookId));
        setError('');
      })
      .catch((err) => setError('Failed to delete book'));
  };

  return (
    <div style={styles.container}>
      
      <div style={styles.content}>
        <h1 style={styles.header}>Delete Book</h1>
        {error && <p style={styles.error}>{error}</p>}
        {message && <p style={styles.success}>{message}</p>}
        <NavBar />
        <select
          value={selectedBookId}
          onChange={(e) => setSelectedBookId(e.target.value)}
          style={styles.select}
        >
          <option value="">Select a book to delete</option>
          {books.map((book) => (
            <option key={book.id} value={book.id}>
              {book.title}
            </option>
          ))}
        </select>

        <button onClick={handleDelete} style={styles.button}>Delete Book</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f4f4f9',
    minHeight: '100vh',
    padding: '20px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    width: '100%',
  },
  header: {
    color: '#333',
    marginBottom: '20px',
  },
  error: {
    color: 'red',
    margin: '10px 0',
  },
  success: {
    color: 'green',
    margin: '10px 0',
  },
  select: {
    padding: '10px',
    margin: '20px 0',
    borderRadius: '4px',
    border: '1px solid #ddd',
    width: '100%',
    maxWidth: '300px',
  },
  button: {
    padding: '10px 20px',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default DeleteBook;
