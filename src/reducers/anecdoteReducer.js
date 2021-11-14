// Import actions
import {
  SET_ANECDOTE,
  LOADING_ANECDOTE,
  LOAD_ANECDOTE_FAILED,
  ANECDOTE_LOADED,
  SET_IS_FAVORITE,
  LOADING_IS_FAVORITE,
  LOAD_IS_FAVORITE_FAILED,
  IS_FAVORITE_LOADED,
  LOADING_DATA,
  LOAD_DATA_FAILED,
  DATA_LOADED,
} from '../actions/anecdoteActions';

// Define initial state
const initialState = {
  id: 0,
  title: '',
  createdAt: '',
  content: '',
  writer: {
    id: 0,
    pseudo: '',
    img: '',
  },
  category: [],
  source: '',
  upVoteUsers: [],
  downVoteUsers: [],
  knownUsers: [],
  unknownUsers: [],
  isFavorite: false,
  loadingAnecdote: false,
  loadAnecdoteFailed: false,
  anecdoteLoaded: false,
  loadingIsFavorite: false,
  loadIsFavoriteFailed: false,
  isFavoriteLoaded: false,
};

// Set new state based on action dispatched
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ANECDOTE:
      return { ...state, ...action.anecdote };
    case SET_IS_FAVORITE:
      return { ...state, isFavorite: action.value };
    case LOADING_ANECDOTE:
      return {
        ...state,
        loadingAnecdote: true,
        loadAnecdoteFailed: false,
        anecdoteLoaded: false
      };
    case LOAD_ANECDOTE_FAILED:
      return {
        ...state,
        loadingAnecdote: false,
        loadAnecdoteFailed: true,
        anecdoteLoaded: false
      };
    case ANECDOTE_LOADED:
      return {
        ...state,
        loadingAnecdote: false,
        loadAnecdoteFailed: false,
        anecdoteLoaded: true
      };
    case LOADING_IS_FAVORITE:
      return {
        ...state,
        loadingIsFavorite: true,
        loadIsFavoriteFailed: false,
        isFavoriteLoaded: false
      };
    case LOAD_IS_FAVORITE_FAILED:
      return {
        ...state,
        loadingIsFavorite: false,
        loadIsFavoriteFailed: true,
        isFavoriteLoaded: false
      };
    case IS_FAVORITE_LOADED:
      return {
        ...state,
        loadingIsFavorite: false,
        loadIsFavoriteFailed: false,
        isFavoriteLoaded: true
      };
    default:
      return state;
  }
};

// Export reducer
export default reducer;