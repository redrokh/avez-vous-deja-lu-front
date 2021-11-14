// Import from libraries
import { combineReducers } from 'redux';

// Import reducers
import appReducer from './appReducer';
import authReducer from './authReducer';
import registrationReducer from './registrationReducer';
import userEditionReducer from './userEditionReducer';
import userReducer from './userReducer';
import favoritesReducer from './favoritesReducer';
import bestsReducer from './bestsReducer';
import latestsReducer from './latestsReducer';
import anecdotesReducer from './anecdotesReducer';
import anecdoteReducer from './anecdoteReducer';
import categoriesReducer from './categoriesReducer';

// Combine reducers
const reducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  registration: registrationReducer,
  userEdition: userEditionReducer,
  user: userReducer,
  favorites: favoritesReducer,
  bests: bestsReducer,
  latests: latestsReducer,
  anecdotes: anecdotesReducer,
  anecdote: anecdoteReducer,
  categories: categoriesReducer,
});

// Export reducer
export default reducer;
