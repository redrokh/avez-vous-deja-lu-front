// Import from libraries
import { combineReducers } from 'redux';

// Import reducers
import anecdotesReducer from './anecdotesReducer';
import appReducer from './appReducer';
import userReducer from './userReducer';
import categoriesReducer from './categoriesReducer';

// Combine reducers
const reducer = combineReducers({
  anecdotes: anecdotesReducer,
  app: appReducer,
  user: userReducer,
  categories: categoriesReducer,
});

export default reducer;
