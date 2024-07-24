import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar'; // Adjust the import path accordingly
import './stylebooks.css'; // Import the stylesheet

const ListBooks = () => {
  // State to hold books data
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  // useEffect to fetch books data when component mounts
  useEffect(() => {
    axios.get('http://localhost:5000/books')
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message));
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="list-books-container">
      <header>
        <h1>Book List</h1>
      </header>
      <NavBar />
      {error && <p className="error">Error: {error}</p>}
      {data.length === 0 ? (
        <p className="no-books">No books available</p>
      ) : (
        <div className="books-grid">
          {data.map((book) => (
            <div key={book.id} className="book-item">
              <strong>Title:</strong> {book.title} <br />
              <strong>Author:</strong> {book.author}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListBooks;
