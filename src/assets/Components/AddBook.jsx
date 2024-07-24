import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from './NavBar';

const AddBook = () => {
  // State to hold form data
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!title || !author) {
      setError('Both fields are required');
      return;
    }

    try {
      // POST request to json-server
      await axios.post('http://localhost:5000/books', { title, author });
      setSuccess('Book added successfully');
      setTitle('');
      setAuthor('');
      setError('');
    } catch (err) {
      setError('Failed to add book');
    }
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
    nav: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '20px',
    },
    navLink: {
      margin: '0 10px',
      padding: '10px 15px',
      color: '#007bff',
      backgroundColor: '#e9ecef',
      textDecoration: 'none',
      borderRadius: '5px',
      transition: 'background-color 0.3s ease',
    },
    navLinkHover: {
      backgroundColor: '#0056b3',
      color: '#fff',
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
        <h1>Add a New Book</h1>
      </header>
      <NavBar />
      {error && <p style={{ ...styles.message, ...styles.error }}>{error}</p>}
      {success && <p style={{ ...styles.message, ...styles.success }}>{success}</p>}
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
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
