// Import from libraries
import { createStore, applyMiddleware, compose } from 'redux';

// Import reducers and middlewares
import reducer from '../reducers';
import authMiddleware from '../middlewares/authMiddleware';
import registrationMiddleware from '../middlewares/registrationMiddleware';
import userEditionMiddleware from '../middlewares/userEditionMiddleware';
import userMiddleware from '../middlewares/userMiddleware';
import favoritesMiddleware from '../middlewares/favoritesMiddleware';
import bestsMiddleware from '../middlewares/bestsMiddleware';
import latestsMiddleware from '../middlewares/latestsMiddleware';
import anecdotesMiddleware from '../middlewares/anecdotesMiddleware';
import anecdoteMiddleware from '../middlewares/anecdoteMiddleware';
import categoriesMiddleware from '../middlewares/categoriesMiddleware';
import { composeWithDevTools } from 'redux-devtools-extension';

// Combine middlewares
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = (
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ 
    trace: true,
    traceLimit: 25,
  }))
  || (compose);
const enhancers = composeEnhancers(
  applyMiddleware(
    authMiddleware,
    registrationMiddleware,
    userEditionMiddleware,
    userMiddleware,
    favoritesMiddleware,
    bestsMiddleware,
    latestsMiddleware,
    anecdotesMiddleware,
    anecdoteMiddleware,
    categoriesMiddleware,
  ),
);

// Store creation
const store = createStore(
  reducer,
  enhancers,
);

// Export store
export default store;
