import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const styles = {
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
  };

  return (
    <nav style={styles.nav}>
      <Link
        to="/add-book"
        style={styles.navLink}
        onMouseOver={(e) => e.target.style.backgroundColor = styles.navLinkHover.backgroundColor}
        onMouseOut={(e) => e.target.style.backgroundColor = styles.navLink.backgroundColor}
      >
        Add Book
      </Link>
      <Link
        to="/update-books"
        style={styles.navLink}
        onMouseOver={(e) => e.target.style.backgroundColor = styles.navLinkHover.backgroundColor}
        onMouseOut={(e) => e.target.style.backgroundColor = styles.navLink.backgroundColor}
      >
        Update Books
      </Link>
      <Link
        to="/view-books"
        style={styles.navLink}
        onMouseOver={(e) => e.target.style.backgroundColor = styles.navLinkHover.backgroundColor}
        onMouseOut={(e) => e.target.style.backgroundColor = styles.navLink.backgroundColor}
      >
        View Books
      </Link>
      <Link
        to="/delete"
        style={styles.navLink}
        onMouseOver={(e) => e.target.style.backgroundColor = styles.navLinkHover.backgroundColor}
        onMouseOut={(e) => e.target.style.backgroundColor = styles.navLink.backgroundColor}
      >
        Delete
      </Link>
    </nav>
  );
};

export default NavBar;
