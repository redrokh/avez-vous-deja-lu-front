import axios from 'axios';
import {
  LOAD_LATEST_ANECDOTES,
  LOAD_BEST_ANECDOTES,
  LOAD_ANECDOTES,
  setLatests,
  setBests,
  setAnecdotes,
} from '../actions';
import latests from '../utils/latests';
import bests from '../utils/bests';
import anecdotes from '../utils/anecdotes';

const anecdoteMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_LATEST_ANECDOTES:
      store.dispatch(setLatests(latests));
      break;
    case LOAD_BEST_ANECDOTES:
      store.dispatch(setBests(bests));
      break;
    case LOAD_ANECDOTES:
      store.dispatch(setAnecdotes(anecdotes));
      break;
    default:
  }
  next(action);
};

export default anecdoteMiddleware;
