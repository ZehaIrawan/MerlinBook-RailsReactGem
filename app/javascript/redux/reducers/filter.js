const filter = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      if (action.filter === 'All') return '';
      return action.filter;
    default:
      return state;
  }
};

export default filter;
