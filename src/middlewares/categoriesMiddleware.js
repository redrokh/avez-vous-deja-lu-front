import API from '../utils/api';
import {
  LOAD_CATEGORIES,
  setCategories,
} from '../actions';

const categoriesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_CATEGORIES: {
      API.get('category')
        .then((response) => {
          store.dispatch(setCategories(response.data));
        })
        .catch((error) => console.log(error));
      break;
    }
    default:
  }
  next(action);
};

export default categoriesMiddleware;
