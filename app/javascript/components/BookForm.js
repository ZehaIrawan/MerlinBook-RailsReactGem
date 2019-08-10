import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook } from '../redux/actions/index';
import { categories } from '../data';

const BookForm = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');

  const handleInputChange = e => setTitle(e.target.value);
  const handleSelectChange = e => setCategory(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    addBook(title, category);
    setTitle('');
    setCategory('Action');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title" id="titleLabel">
        Title:
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleInputChange}
          value={title}
          required
        />
      </label>
      <label htmlFor="categories" id="categoriesLabel">
        Category:
        <select id="categories" onChange={handleSelectChange} value={category}>
          {categories.map(c => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>
      <button className="blue-button form-button bold" type="submit">
        Add Book
      </button>
    </form>
  );
};

BookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default connect(
  null,
  { addBook: addBook },
)(BookForm);
