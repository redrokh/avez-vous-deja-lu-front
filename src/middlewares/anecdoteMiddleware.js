// Import axios preconfigured object
import API from '../utils/api';

// Import actions and action creators
import {
  LOAD_ANECDOTES,
  LOAD_ANECDOTE,
  LOAD_PREV_ANECDOTE,
  LOAD_NEXT_ANECDOTE,
  LOAD_RANDOM_ANECDOTE,
  LOAD_IS_FAVORITE,
  ADD_FAVORITE,
  DELETE_FAVORITE,
  UP_VOTE,
  DOWN_VOTE,
  I_KNEW,
  I_DIDNT_KNOW,
  loadingAnecdotes,
  setAnecdotes,
  loadAnecdotesFailed,
  anecdotesLoaded,
  loadAnecdote,
  loadingAnecdote,
  setAnecdote,
  loadAnecdoteFailed,
  anecdoteLoaded,
  loadIsFavorite,
  loadingIsFavorite,
  setIsFavorite,
  loadIsFavoriteFailed,
  isFavoriteLoaded,
  addingFavorite,
  addFavoriteFailed,
  addFavoriteSucceeded,
  deletingFavorite,
  deleteFavoriteFailed,
  deleteFavoriteSucceeded,
  upVoting,
  upVoteFailed,
  upVoteSucceeded,
  downVoting,
  downVoteFailed,
  downVoteSucceeded,
  iKnewPending,
  iKnewFailed,
  iKnewSucceeded,
  iDidntKnowPending,
  iDidntKnowFailed,
  iDidntKnowSucceeded,
} from '../actions/anecdoteActions';

// Trigger treatment according to action type
const middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_ANECDOTE: {
      store.dispatch(loadingAnecdote());
      let baseUrl = '';
      switch (action.context) {
        case 'bests':
          baseUrl = 'anecdote/best/';
          break;
        case 'latests':
          baseUrl = 'anecdote/latest/';
          break;
        default:
          baseUrl = 'anecdote/';
      }
      API.get(
        `${baseUrl}${action.anecdoteId}`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(setAnecdote(response.data));
          store.dispatch(anecdoteLoaded());
          if (action.context === 'favorites' || action.context === 'categories' || action.context === 'anecdotes') {
            store.dispatch((loadIsFavorite(response.data.id)));
          }
        })
        .catch(() => store.dispatch(loadAnecdoteFailed()));
      break;
    }
    case LOAD_PREV_ANECDOTE: {
      store.dispatch(loadingAnecdote());
      let baseUrl = '';
      switch (action.context) {
        case 'bests':
          baseUrl = 'anecdote/best/';
          break;
        case 'latests':
          baseUrl = 'anecdote/latest/';
          break;
        case 'categories':
          baseUrl = `category/${action.categorySlug}/anecdote/`;
          break;
        case 'favorites':
          baseUrl = `user/${store.getState().user.id}/favorite/`;
          break;
        default:
          baseUrl = 'anecdote/';
      }
      API.get(
        `${baseUrl}${action.anecdoteId}/prev`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(setAnecdote(response.data));
          store.dispatch(anecdoteLoaded());
          if (action.context === 'favorites' || action.context === 'categories' || action.context === 'anecdotes') {
            store.dispatch((loadIsFavorite(response.data.id)));
          }
        })
        .catch(() => store.dispatch(loadAnecdoteFailed()));
      break;
    }
    case LOAD_NEXT_ANECDOTE: {
      store.dispatch(loadingAnecdote());
      let baseUrl = '';
      switch (action.context) {
        case 'bests':
          baseUrl = 'anecdote/best/';
          break;
        case 'latests':
          baseUrl = 'anecdote/latest/';
          break;
        case 'categories':
          baseUrl = `category/${action.categorySlug}/anecdote/`;
          break;
        case 'favorites':
          baseUrl = `user/${store.getState().user.id}/favorite/`;
          break;
        default:
          baseUrl = 'anecdote/';
      }
      API.get(
        `${baseUrl}${action.anecdoteId}/next`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(setAnecdote(response.data));
          store.dispatch(anecdoteLoaded());
          if (action.context === 'favorites' || action.context === 'categories' || action.context === 'anecdotes') {
            store.dispatch((loadIsFavorite(response.data.id)));
          }
        })
        .catch(() => store.dispatch(loadAnecdoteFailed()));
      break;
    }
    case LOAD_IS_FAVORITE: {
      store.dispatch(loadingIsFavorite());
      API.get(
        `user/${store.getState().user.id}/favorite/${action.anecdoteId}/check`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(setIsFavorite(response.data.response));
          store.dispatch(isFavoriteLoaded());
        })
        .catch(() => store.dispatch(loadIsFavoriteFailed()));
      break;
    }
    case ADD_FAVORITE: {
      store.dispatch(addingFavorite());
      API.post(
        `user/${store.getState().user.id}/favorite/${store.getState().anecdote.id}/add`,
        {},
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        },
      )
        .then(() => {
          store.dispatch(setIsFavorite(true));
          store.dispatch(addFavoriteSucceeded());
        })
        .catch(() => store.dispatch(addFavoriteFailed()));
      break;
    }
    case DELETE_FAVORITE: {
      store.dispatch(deletingFavorite());
      API.delete(
        `user/${store.getState().user.id}/favorite/${store.getState().anecdote.id}/delete`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        },
      )
        .then(() => {
          store.dispatch(setIsFavorite(false));
          store.dispatch(deleteFavoriteSucceeded());
        })
        .catch(() => store.dispatch(deleteFavoriteFailed()));
      break;
    }
    case UP_VOTE: {
      store.dispatch(upVoting());
      API.post(
        `anecdote/${store.getState().anecdote.id}/user/${store.getState().user.id}/upvote`,
        {},
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        },
      )
        .then(() => {
          store.dispatch(loadAnecdote(action.context, store.getState().anecdote.id));
          store.dispatch(upVoteSucceeded());
        })
        .catch(() => store.dispatch(upVoteFailed()));
      break;
    }
    case DOWN_VOTE: {
      store.dispatch(downVoting());
      API.post(
        `anecdote/${store.getState().anecdote.id}/user/${store.getState().user.id}/downvote`,
        {},
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        },
      )
        .then(() => {
          store.dispatch(loadAnecdote(action.context, store.getState().anecdote.id));
          store.dispatch(downVoteSucceeded());
        })
        .catch(() => store.dispatch(downVoteFailed()));
      break;
    }
    case I_KNEW: {
      store.dispatch(iKnewPending());
      API.post(
        `anecdote/${store.getState().anecdote.id}/user/${store.getState().user.id}/known`,
        {},
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        },
      )
        .then(() => {
          store.dispatch(loadAnecdote(action.context, store.getState().anecdote.id));
          store.dispatch(iKnewSucceeded());
        })
        .catch(() => store.dispatch(iKnewFailed()));
      break;
    }
    case I_DIDNT_KNOW: {
      store.dispatch(iDidntKnowPending());
      API.post(
        `anecdote/${store.getState().anecdote.id}/user/${store.getState().user.id}/unknown`,
        {},
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        },
      )
        .then(() => {
          store.dispatch(loadAnecdote(action.context, store.getState().anecdote.id));
          store.dispatch(iDidntKnowSucceeded());
        })
        .catch(() => store.dispatch(iDidntKnowFailed()));
      break;
    }
    case LOAD_RANDOM_ANECDOTE: {
      store.dispatch(loadingAnecdote());
      API.get(
        `user/${store.getState().user.id}/random`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(setAnecdote(response.data));
          store.dispatch(anecdoteLoaded());
          store.dispatch((loadIsFavorite(response.data.id)));
        })
        .catch(() => store.dispatch(loadAnecdoteFailed()));
      break;
    }
    default:
  }
  next(action);
};

// Export middleware
export default middleware;
