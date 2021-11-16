// Import actions
import {
  SET_BESTS,
  LOADING_BESTS,
  BESTS_LOADED,
  LOAD_BESTS_FAILED,
  SET_BESTS_INDEX,
  RESET_BESTS_STATE,
} from '../actions/bestActions';

// Define initial state
const initialState = {
  title: 'Découvrez nos meilleures anecdotes',
  anecdotes: [],
  currentIndex: 0,
  loadingData: false,
  dataLoaded: false,
  context: '/nos-meilleures-anecdotes',
};

// Set new state based on action dispatched
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BESTS:
      return { ...state, anecdotes: action.anecdotes };
    case LOADING_BESTS:
      return { ...state, loadingData: true };
    case BESTS_LOADED:
      return { ...state, dataLoaded: true, loadingData: false };
    case LOAD_BESTS_FAILED:
      return { ...state, dataLoaded: false, loadingData: false };
    case SET_BESTS_INDEX:
      return { ...state, currentIndex: action.index };
    case RESET_BESTS_STATE:
      return initialState;
    default:
      return state;
  }
};

// Export reducer
export default reducer;
