import {
  SET_LATEST_ANECDOTES,
  SET_BEST_ANECDOTES,
  SET_ANECDOTES,
  SET_LATEST_INDEX,
  SET_BEST_INDEX,
} from '../actions';

const initialState = {
  bests: [],
  bestIndex: 0,
  latests: [],
  latestsTitle: 'Nos dernières anecdotes',
  bestsTitle: 'Nos meilleures anecdotes',
  latestIndex: 0,
  latestsLoaded: false,
  bestsLoaded: false,
  anecdotesLoaded: false,
  anecdotes: [],
  anecdote: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LATEST_ANECDOTES:
      return { ...state, latests: action.anecdotes, latestsLoaded: true };
    case SET_BEST_ANECDOTES:
      return { ...state, bests: action.anecdotes, bestsLoaded: true };
    case SET_ANECDOTES:
      return { ...state, anecdotes: action.anecdotes };
    case SET_LATEST_INDEX:
      return { ...state, latestIndex: action.newIndex };
    case SET_BEST_INDEX:
      return { ...state, bestIndex: action.newIndex };
    default:
      return state;
  }
};

export default reducer;
