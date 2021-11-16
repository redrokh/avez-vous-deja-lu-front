// Import actions
import {
  SET_ANECDOTES,
  LOADING_ANECDOTES,
  LOAD_ANECDOTES_FAILED,
  ANECDOTES_LOADED,
  SET_ANECDOTES_TITLE,
  RESET_ANECDOTES_STATE,
} from '../actions/anecdoteActions';

// Define initial state
const initialState = {
  title: '',
  list: [],
  loadingData: false,
  loadDataFailed: false,
  dataLoaded: false,
};

// Set new state based on action dispatched
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ANECDOTES:
      return { ...state, list: action.anecdotes };
    case LOADING_ANECDOTES:
      return {
        ...state,
        loadingData: true,
        loadDataFailed: false,
        dataLoaded: false,
      };
    case LOAD_ANECDOTES_FAILED:
      return {
        ...state,
        loadingData: false,
        loadDataFailed: true,
        dataLoaded: false,
      };
    case ANECDOTES_LOADED:
      return {
        ...state,
        loadingData: false,
        loadDataFailed: false,
        dataLoaded: true,
      };
    case SET_ANECDOTES_TITLE:
      return {
        ...state,
        title: action.title,
      };
    case RESET_ANECDOTES_STATE:
      return initialState;
    default:
      return state;
  }
};

// Export reducer
export default reducer;
