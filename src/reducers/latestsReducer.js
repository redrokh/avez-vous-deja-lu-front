// Import actions
import {
  SET_LATESTS,
  LOADING_LATESTS,
  LATESTS_LOADED,
  LOAD_LATESTS_FAILED,
  SET_LATESTS_INDEX,
  RESET_LATESTS_STATE,
} from '../actions/latestActions';

// Define initial state
const initialState = {
  title: 'Découvrez nos dernières anecdotes',
  anecdotes: [],
  currentIndex: 0,
  loadingData: false,
  dataLoaded: false,
  context: '/nos-dernieres-anecdotes',
};

// Set new state based on action dispatched
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LATESTS:
      return { ...state, anecdotes: action.anecdotes };
    case LOADING_LATESTS:
      return { ...state, loadingData: true };
    case LATESTS_LOADED:
      return { ...state, dataLoaded: true, loadingData: false };
    case LOAD_LATESTS_FAILED:
      return { ...state, dataLoaded: false, loadingData: false };
    case SET_LATESTS_INDEX:
      return { ...state, currentIndex: action.index };
    case RESET_LATESTS_STATE:
      return initialState;
    default:
      return state;
  }
};

// Export reducer
export default reducer;
