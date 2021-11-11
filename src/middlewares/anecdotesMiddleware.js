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
  setLatests,
  setBests,
  setAnecdotes,
  setAnecdote,
  setFavorites,
  setIsLoadingLatests,
  setIsLoadingBests,
  setIsLoadingAnecdote,
  setIsLoadingAnecdotes,
  setIsLoadingFavorites,
} from '../actions';

const anecdotesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_LATEST_ANECDOTES:
      store.dispatch(setIsLoadingLatests(true));
      API.get('anecdote/latest')
        .then((response) => {
          store.dispatch(setLatests(response.data));
        })
        .catch((error) => console.log(error))
        .finally(() => {
          store.dispatch(setIsLoadingLatests(false));
        });
      break;
    case LOAD_BEST_ANECDOTES:
      store.dispatch(setIsLoadingBests(true));
      API.get('anecdote/best')
        .then((response) => {
          store.dispatch(setBests(response.data));
        })
        .catch((error) => console.log(error))
        .finally(() => {
          store.dispatch(setIsLoadingBests(false));
        });
      break;
    case LOAD_ANECDOTES:
      store.dispatch(setIsLoadingAnecdotes(true));
      API.get('anecdote')
        .then((response) => {
          store.dispatch(setAnecdotes(response.data));
        })
        .catch((error) => console.log(error))
        .finally(() => {
          store.dispatch(setIsLoadingAnecdotes(false));
        });
      break;
    case LOAD_ANECDOTE: {
      store.dispatch(setIsLoadingAnecdote(true));
      API.get(
        `anecdote/${action.anecdoteId}`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(setAnecdote(response.data));
        })
        .catch((error) => console.log(error))
        .finally(() => {
          store.dispatch(setIsLoadingAnecdote(false));
        });
      break;
    }
    case LOAD_PREV_ANECDOTE: {
      store.dispatch(setIsLoadingAnecdote(true));
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
        .catch((error) => console.log(error))
        .finally(() => {
          store.dispatch(setIsLoadingAnecdote(false));
        });
      break;
    }
    case LOAD_NEXT_ANECDOTE: {
      store.dispatch(setIsLoadingAnecdote(true));
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
        .catch((error) => console.log(error))
        .finally(() => {
          store.dispatch(setIsLoadingAnecdote(false));
        });
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
      store.dispatch(setIsLoadingAnecdotes(true));
      API.get(
        `category/${action.slug}/anecdote`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(setAnecdotes(response.data));
        })
        .catch((error) => console.log(error))
        .finally(() => {
          store.dispatch(setIsLoadingAnecdotes(false));
        });
      break;
    }
    case LOAD_FAVORITES: {
      store.dispatch(setIsLoadingFavorites(true));
      API.get(
        `user/${store.getState().user.id}/favorite`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(setFavorites(response.data));
        })
        .catch((error) => console.log(error))
        .finally(() => {
          store.dispatch(setIsLoadingFavorites(false));
        });
      break;
    }
    default:
  }
  next(action);
};

export default anecdotesMiddleware;
