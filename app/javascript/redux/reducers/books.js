const books = (state = [], action) => {
  const { type, books } = action;

  switch (type) {
    case 'REMOVE_BOOK': {
      console.log('remove');
      return state.filter(({ id }) => action.id !== id);
    }
    case 'GET_BOOKS':
      return [...books];
    case 'POST_ERROR':
      return state;
    default:
      return state;
  }
};

export default books;
