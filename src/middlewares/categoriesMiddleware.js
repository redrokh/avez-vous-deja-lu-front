// Import axios preconfigured object
import API from '../utils/api';

// Import actions and action creators
import {
  LOAD_CATEGORIES,
  LOAD_CATEGORY_NAME,
  loadingCategories,
  setCategories,
  loadCategoriesFailed,
  categoriesLoaded,
  loadingCategoryName,
  loadCategoryNameFailed,
  categoryNameLoaded,
} from '../actions/categoryActions';

// Trigger treatment according to action type
const middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_CATEGORIES: {
      store.dispatch(loadingCategories());
      API.get(
        'category',
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(setCategories(response.data));
          store.dispatch(categoriesLoaded());
        })
        .catch(() => store.dispatch(loadCategoriesFailed()))
      break;
    }
    case LOAD_CATEGORY_NAME: {
      store.dispatch(loadingCategoryName());
      API.get(
        'category',
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(setAnecdotesTitle(response.data.name));
          store.dispatch(categoryNameLoaded());
        })
        .catch(() => store.dispatch(loadCategoryNameFailed()))
      break;
    }
    default:
  }
  next(action);
};

// Export middleware
export default middleware;
