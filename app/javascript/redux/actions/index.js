import axios from 'axios';

export const removeBook = id => ({
  type: 'REMOVE_BOOK',
  id,
});

export const changeFilter = filter => ({
  type: 'CHANGE_FILTER',
  filter,
});

export const getBooks = books => ({
  type: 'GET_BOOKS',
  books,
});

export const postError = error => ({
  type: 'POST_ERROR',
  error,
});

// postError equal to bookError
// change how to handle error in try catch

export const fetchBooks = () => async dispatch => {
  try {
    const res = await axios.get('/v1/books');
    dispatch(getBooks(res.data));
  } catch (err) {
    dispatch(
      postError({ msg: err })
    );
  }
};

export const deleteBook = id => async dispatch => {
  try {
    const res = await axios.delete(`/v1/books/${id}`);
    dispatch(removeBook(id));
  } catch (err) {
    dispatch(
      postError({ msg: err })
    );
  }
};

export const addBook = (title, category) => async dispatch => {
  try {
    const res = await axios.post('/v1/books', {
      title,
      category,
      author: 'Unknown',
    });
    dispatch(fetchBooks());
  } catch (err) {
    dispatch(
      postError({ msg: err }),
    );
  }
};

export default fetchBooks;
