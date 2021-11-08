import API from '../utils/api';
import {
  LOAD_LATEST_ANECDOTES,
  LOAD_BEST_ANECDOTES,
  LOAD_ANECDOTES,
  LOAD_ANECDOTE,
  LOAD_PREV_ANECDOTE,
  LOAD_NEXT_ANECDOTE,
  LOAD_FAVORITES,
  UPVOTE,
  DOWNVOTE,
  KNEW,
  DIDNT_KNOW,
  LOAD_ANECDOTES_BY_CATEGORY,
  LOAD_CATEGORIES,
  setLatests,
  setBests,
  setAnecdotes,
  setAnecdote,
  setFavorites,
  setCategories,
} from '../actions';
import latests from '../utils/latests';
import bests from '../utils/bests';
import anecdotes from '../utils/anecdotes';
import latestsFull from '../utils/latestsFull';
import bestsFull from '../utils/bestsFull';
import anecdotesFull from '../utils/anecdotesFull';
import favorites from '../utils/favorites';
import favoritesFull from '../utils/favoritesFull';
import categories from '../utils/categories';

const anecdotesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_LATEST_ANECDOTES:
      API.get('anecdote/latest')
        .then((response) => {
          store.dispatch(setLatests(response.data));
        })
        .catch((error) => console.log(error));
      break;
    case LOAD_BEST_ANECDOTES:
      API.get('anecdote/best')
        .then((response) => {
          store.dispatch(setBests(response.data));
        })
        .catch((error) => console.log(error));
      break;
    case LOAD_ANECDOTES:
      API.get('anecdote')
        .then((response) => {
          store.dispatch(setAnecdotes(response.data));
        })
        .catch((error) => console.log(error));
      break;
    case LOAD_ANECDOTE: {
      const newAnecdote = anecdotesFull.find((anecdote) => anecdote.id === action.anecdoteId);
      store.dispatch(setAnecdote(newAnecdote));
      break;
    }
    case LOAD_PREV_ANECDOTE: {
      /*
      when connecting to api:
      const url = `${url}/prev`;
      */
      const currentAnecdote = anecdotesFull.find((anecdote) => anecdote.id === action.anecdoteId);
      const currentIndex = anecdotesFull.indexOf(currentAnecdote);
      let prevIndex = currentIndex - 1;
      if (prevIndex < 0) {
        prevIndex = anecdotesFull.length - 1;
      }
      const prevAnecdote = anecdotesFull[prevIndex];
      store.dispatch(setAnecdote(prevAnecdote));
      break;
    }
    case LOAD_NEXT_ANECDOTE: {
      /*
      when connecting to api:
      const url = `${url}/next`;
      */
      const currentAnecdote = anecdotesFull.find((anecdote) => anecdote.id === action.anecdoteId);
      const currentIndex = anecdotesFull.indexOf(currentAnecdote);
      let nextIndex = currentIndex + 1;
      if (nextIndex >= anecdotesFull.length) {
        nextIndex = 0;
      }
      const nextAnecdote = anecdotesFull[nextIndex];
      store.dispatch(setAnecdote(nextAnecdote));
      break;
    }
    case UPVOTE:
      console.log('upvote');
      break;
    case DOWNVOTE:
      console.log('downvote');
      break;
    case KNEW:
      console.log('knew');
      break;
    case DIDNT_KNOW:
      console.log('didntKnow');
      break;
    case LOAD_ANECDOTES_BY_CATEGORY: {
      store.dispatch(setAnecdotes(anecdotes));
      break;
    }
    case LOAD_FAVORITES: {
      store.dispatch(setFavorites(favorites));
      break;
    }
    default:
  }
  next(action);
};

export default anecdotesMiddleware;
