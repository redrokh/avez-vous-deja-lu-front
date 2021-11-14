// Import actions
import {
  LOADING_FAVORITES,
  SET_FAVORITES,
  LOAD_FAVORITES_FAILED,
  FAVORITES_LOADED,
  FAVORITES_DELETING_FAVORITE,
  FAVORITES_DELETE_FAVORITE_FAILED,
  FAVORITES_DELETE_FAVORITE_SUCCEEDED,
} from '../actions/favoriteActions';

// Define initial state
const initialState = {
  anecdotes: [],
  loadingData: false,
  loadDataFaild: false,
  dataLoaded: false,
  deletingFavorite: false,
  deleteFavoriteFailed: false,
  deleteFavoriteSucceeded: false,

};

// Set new state based on action dispatched
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_FAVORITES:
      return { ...state, loadingFavorites: true };
    case SET_FAVORITES:
      return { ...state, anecdotes: action.anecdotes };
    case LOAD_FAVORITES_FAILED:
      return { ...state, dataLoaded: false, loadingData: false };
    case FAVORITES_LOADED:
      return { ...state, dataLoaded: true, loadingData: false }
    case FAVORITES_DELETING_FAVORITE:
      return {
        ...state,
        deletingFavorite: true,
        deleteFavoriteFailed: false,
        deleteFavoriteSucceeded: false,
      };
    case FAVORITES_DELETE_FAVORITE_FAILED:
      return {
        ...state,
        deletingFavorite: false,
        deleteFavoriteFailed: true,
        deleteFavoriteSucceeded: false,
      };
    case FAVORITES_DELETE_FAVORITE_SUCCEEDED:
      return {
        ...state,
        deletingFavorite: false,
        deleteFavoriteFailed: false,
        deleteFavoriteSucceeded: true
      };
    default:
      return state;
  }
};

// Export reducer
export default reducer;