import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './assets/Components/Home';
import AddBook from './assets/Components/AddBook';
import DeleteBook from './assets/Components/DeleteBook';
import ListBooks from './assets/Components/ListBooks';
import UpdateBook from './assets/Components/UpdateBook';
import './assets/Components/stylebooks.css';

const App = () => {
  const location = useLocation();

  // Determine if the current route is a CRUD page
  const isCrudPage = location.pathname.startsWith('/add-book') ||
                      location.pathname.startsWith('/update-books') ||
                      location.pathname.startsWith('/view-books') ||
                      location.pathname.startsWith('/delete');

  return (
    <div className={`app-container ${isCrudPage ? 'crud-page' : ''}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/update-books" element={<UpdateBook />} />
        <Route path="/view-books" element={<ListBooks />} />
        <Route path="/delete" element={<DeleteBook />} />
      </Routes>
    </div>
  );
};

export default App;
