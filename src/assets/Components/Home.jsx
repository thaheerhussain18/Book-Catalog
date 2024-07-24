import React from 'react';
import { Link } from 'react-router-dom';
import './stylebooks.css'; // Import your global CSS file

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Book Management System</h1>
      <div className="menu">
        <Link to="/add-book" className="menu-link">Add Book</Link>
        <Link to="/update-books" className="menu-link">Update Books</Link>
        <Link to="/view-books" className="menu-link">View Books</Link>
        <Link to="/delete" className="menu-link">Delete</Link>
      </div>
    </div>
  );
};

export default Home;
