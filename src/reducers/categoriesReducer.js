// Import actions
import {
  LOADING_CATEGORIES,
  SET_CATEGORIES,
  LOAD_CATEGORIES_FAILED,
  CATEGORIES_LOADED,
  LOADING_CATEGORY_NAME,
  LOAD_CATEGORY_NAME_FAILED,
  CATEGORY_NAME_LOADED,
} from '../actions/categoryActions';

// Define initial state
const initialState = {
  list: [],
  loadingData: false,
  loadDataFailed: false,
  dataLoaded: false,
  loadingCategoryName: false,
  loadCategoryNameFailed: false,
  categoryNameLoaded: false,
};

// Set new state based on action dispatched
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_CATEGORIES:
      return {
        ...state,
        loadingData: true,
        loadDataFailed: false,
        dataLoaded: false,
      };
    case SET_CATEGORIES:
      return { ...state, list: action.categories };
    case LOAD_CATEGORIES_FAILED:
      return {
        ...state,
        loadingData: false,
        loadDataFailed: true,
        dataLoaded: false,
      };
    case CATEGORIES_LOADED:
      return {
        ...state,
        loadingData: false,
        loadDataFailed: false,
        dataLoaded: true,
      };
    case LOADING_CATEGORY_NAME:
      return {
        ...state,
        loadingCategoryName: true,
        loadCategoryNameFailed: false,
        categoryNameLoaded: false,
      };
    case LOAD_CATEGORY_NAME_FAILED:
      return {
        ...state,
        loadingCategoryName: false,
        loadCategoryNameFailed: true,
        categoryNameLoaded: false,
      };
    case CATEGORY_NAME_LOADED:
      return {
        ...state,
        loadingCategoryName: false,
        loadCategoryNameFailed: false,
        categoryNameLoaded: true,
      };
    default:
      return state;
  }
};

// Export reducer
export default reducer;