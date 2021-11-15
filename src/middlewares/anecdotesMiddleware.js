// Import axios preconfigured object
import API from '../utils/api';

// Import actions and action creators
import {
  LOAD_ANECDOTES,
  LOAD_BEST_ANECDOTES,
  LOAD_ANECDOTES_OF_CATEGORY,
  loadingAnecdotes,
  setAnecdotes,
  loadAnecdotesFailed,
  anecdotesLoaded,
} from '../actions/anecdoteActions';

// Trigger treatment according to action type
const middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_ANECDOTES: {
      store.dispatch(loadingAnecdotes());
      API.get(
        'anecdote',
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(setAnecdotes(response.data));
          store.dispatch(anecdotesLoaded());
        })
        .catch(() => store.dispatch(loadAnecdotesFailed()));
      break;
    }
    case LOAD_BEST_ANECDOTES: {
      store.dispatch(loadingAnecdotes());
      API.get(
        'anecdote/best',
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(setAnecdotes(response.data));
          store.dispatch(anecdotesLoaded());
        })
        .catch(() => store.dispatch(loadAnecdotesFailed()));
      break;
    }
    case LOAD_ANECDOTES_OF_CATEGORY: {
      store.dispatch(loadingAnecdotes());
      API.get(
        `category/${action.slug}/anecdote`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(setAnecdotes(response.data));
          store.dispatch(anecdotesLoaded());
        })
        .catch(() => store.dispatch(loadAnecdotesFailed()));
      break;
    }
    default:
  }
  next(action);
};

// Export middleware
export default middleware;
