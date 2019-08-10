import React from 'react';
// import '../styles/style.css';
import BookList from './BookList';
import BookForm from './BookForm';
import Navbar from './Navbar';

function Homepage() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-container">
        <BookList />
        <BookForm />
      </div>
    </div>
  );
}

export default Homepage;
