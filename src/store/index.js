import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';
import anecdoteMiddleware from '../middlewares/anecdoteMiddleware';
import userMiddleware from '../middlewares/userMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(anecdoteMiddleware, userMiddleware),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
