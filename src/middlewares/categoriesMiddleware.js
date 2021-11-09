import axios from 'axios';
import {
  LOAD_CATEGORIES,
  setCategories,
} from '../actions';

import categories from '../utils/categories';

const categoriesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_CATEGORIES: {
      store.dispatch(setCategories(categories));
      break;
    }
    default:
  }
  next(action);
};

export default categoriesMiddleware;
