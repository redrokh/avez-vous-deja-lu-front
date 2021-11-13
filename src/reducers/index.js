// Import from libraries
import { combineReducers } from 'redux';

// Import reducers
import anecdotesReducer from './anecdotesReducer';
import appReducer from './appReducer';
import userReducer from './userReducer';
import userEditionReducer from './userEditionReducer';
import categoriesReducer from './categoriesReducer';
import registrationReducer from './registrationReducer';
import connectionReducer from './connectionReducer';

// Combine reducers
const reducer = combineReducers({
  anecdotes: anecdotesReducer,
  app: appReducer,
  user: userReducer,
  userEdition: userEditionReducer,
  categories: categoriesReducer,
  registration: registrationReducer,
  connection: connectionReducer,
});

export default reducer;
