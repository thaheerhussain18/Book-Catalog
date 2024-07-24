import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar';  // Adjust the import path accordingly

const UpdateBook = () => {
  const [books, setBooks] = useState([]);
  const [selectedBookId, setSelectedBookId] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Fetch the list of books when the component mounts
  useEffect(() => {
    axios.get('http://localhost:5000/books')
      .then((res) => setBooks(res.data))
      .catch((err) => setError(err.message));
  }, []);

  // Fetch the details of the selected book
  useEffect(() => {
    if (selectedBookId) {
      axios.get(`http://localhost:5000/books/${selectedBookId}`)
        .then((res) => {
          setTitle(res.data.title);
          setAuthor(res.data.author);
          setMessage('');
        })
        .catch((err) => setError(err.message));
    }
  }, [selectedBookId]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author) {
      setError('Both fields are required');
      return;
    }

    axios.put(`http://localhost:5000/books/${selectedBookId}`, { title, author })
      .then(() => setMessage('Book updated successfully'))
      .catch((err) => setError('Failed to update book'));
  };

  // Inline styles
  const styles = {
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      background: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    header: {
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '15px',
      textAlign: 'center',
      marginBottom: '20px',
      borderRadius: '8px 8px 0 0',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      marginBottom: '5px',
      fontWeight: 'bold',
    },
    input: {
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    button: {
      padding: '15px',
      fontSize: '16px',
      color: '#fff',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    message: {
      textAlign: 'center',
    },
    error: {
      color: 'red',
    },
    success: {
      color: 'green',
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Update Book</h1>
      </header>
      <NavBar />
      {error && <p style={{ ...styles.message, ...styles.error }}>{error}</p>}
      {message && <p style={{ ...styles.message, ...styles.success }}>{message}</p>}
      <select
        value={selectedBookId}
        onChange={(e) => setSelectedBookId(e.target.value)}
        style={styles.input}
      >
        <option value="">Select a book to update</option>
        {books.map((book) => (
          <option key={book.id} value={book.id}>
            {book.title}
          </option>
        ))}
      </select>

      {selectedBookId && (
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="title" style={styles.label}>Title:</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="author" style={styles.label}>Author:</label>
            <input
              id="author"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              style={styles.input}
            />
          </div>
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
          >
            Update Book
          </button>
        </form>
      )}
    </div>
  );
};

export default UpdateBook;
