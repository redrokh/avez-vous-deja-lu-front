// Import from libraries
import { combineReducers } from 'redux';

// Import reducers
import anecdotesReducer from './anecdotesReducer';
import appReducer from './appReducer';
import userReducer from './userReducer';

// Combine reducers
const reducer = combineReducers({
  anecdotes: anecdotesReducer,
  app: appReducer,
  user: userReducer,
});

export default reducer;
