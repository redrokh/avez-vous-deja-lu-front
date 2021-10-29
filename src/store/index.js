import { createStore, applyMiddleware, compose } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from '../reducers';
import anecdoteMiddleware from '../middlewares/anecdoteMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(anecdoteMiddleware),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
