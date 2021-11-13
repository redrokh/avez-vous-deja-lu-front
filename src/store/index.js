import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';
import authMiddleware from '../middlewares/authMiddleware';
import anecdotesMiddleware from '../middlewares/anecdotesMiddleware';
import categoriesMiddleware from '../middlewares/categoriesMiddleware';
import usersMiddleware from '../middlewares/usersMiddleware';
import userEditionMiddleware from '../middlewares/userEditionMiddleware';
import registrationMiddleware from '../middlewares/registrationMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    authMiddleware,
    anecdotesMiddleware,
    categoriesMiddleware,
    usersMiddleware,
    registrationMiddleware,
    userEditionMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
