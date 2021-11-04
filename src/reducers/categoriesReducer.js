import categoriesData from '../utils/categories';

const initialState = {
  categories: categoriesData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
