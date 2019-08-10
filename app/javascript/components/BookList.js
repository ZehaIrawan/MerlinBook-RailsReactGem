import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {deleteBook, changeFilter } from '../redux/actions/index';
import CategoryFilter from './CategoryFilter';
import Book from './Book';

const mapStateToProps = state => ({
  books: state.books.filter(book =>
    state.filter === '' ? true : book.category === state.filter
  ),
});

const BookList = ({ books, deleteBook, handleFilterChange }) => (
  <div>
    <CategoryFilter handleFilterChange={handleFilterChange} />
    <table className="books-table">
      <tbody>
        {books.map(book => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
            percentage={'0'}
            deleteBook={deleteBook}
          />
        ))}
      </tbody>
    </table>
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteBook: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  {
    deleteBook: deleteBook,
    handleFilterChange: changeFilter,
  },
)(BookList);
