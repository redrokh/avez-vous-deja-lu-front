import {
  SET_LATEST_ANECDOTES,
  SET_BEST_ANECDOTES,
  SET_ANECDOTES,
  SET_ANECDOTE,
  SET_LATEST_INDEX,
  SET_BEST_INDEX,
  SET_FAVORITES,
} from '../actions';

const initialState = {
  bests: [],
  bestIndex: 0,
  bestsTitle: 'Nos meilleures anecdotes',
  bestsContext: '/nos-meilleures-anecdotes',
  latests: [],
  latestIndex: 0,
  latestsTitle: 'Nos dernières anecdotes',
  latestsContext: '/nos-dernieres-anecdotes',
  latestsLoaded: false,
  bestsLoaded: false,
  anecdotesLoaded: false,
  anecdotes: [],
  anecdotesContext: '/anecdotes',
  anecdote: {
    id: 0,
    title: '',
    content: '',
    writer: {
      id: 0,
      pseudo: '',
    },
    category: [],
    source: '',
    createdAt: '',
  },
  favorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LATEST_ANECDOTES:
      return { ...state, latests: action.anecdotes, latestsLoaded: true };
    case SET_BEST_ANECDOTES:
      return { ...state, bests: action.anecdotes, bestsLoaded: true };
    case SET_ANECDOTES:
      return { ...state, anecdotes: action.anecdotes };
    case SET_ANECDOTE: {
      return { ...state, anecdote: action.anecdote };
    }
    case SET_LATEST_INDEX:
      return { ...state, latestIndex: action.newIndex };
    case SET_BEST_INDEX:
      return { ...state, bestIndex: action.newIndex };
    case SET_FAVORITES:
      return { ...state, favorites: action.favorites };
    default:
      return state;
  }
};

export default reducer;
