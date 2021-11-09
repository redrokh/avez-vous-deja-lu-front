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
      console.log('load anecdote');
      API.get(
        `anecdote/${action.anecdoteId}`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          console.log(response.data);
          store.dispatch(setAnecdote(response.data));
        })
        .catch((error) => console.log(error));
      break;
    }
    case LOAD_PREV_ANECDOTE: {
      const { anecdoteId } = action;
      API.get(
        `anecdote/${anecdoteId}/prev`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(setAnecdote(response.data));
        })
        .catch((error) => console.log(error));
      break;
    }
    case LOAD_NEXT_ANECDOTE: {
      const { anecdoteId } = action;
      API.get(
        `anecdote/${anecdoteId}/next`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(setAnecdote(response.data));
        })
        .catch((error) => console.log(error));
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
