// Import axios preconfigured object
import API from '../utils/api';

// Import actions and action creators
import {
  LOAD_FAVORITES,
  FAVORITES_DELETE_FAVORITE,
  loadFavorites,
  loadingFavorites,
  setFavorites,
  loadFavoritesFailed,
  favoritesLoaded,
  favoritesDeletingFavorite,
  favoritesDeleteFavoriteFailed,
  favoritesDeleteFavoriteSucceeded,
} from '../actions/favoriteActions';

// Trigger treatment according to action type
const middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_FAVORITES: {
      store.dispatch(loadingFavorites());
      API.get(
        `user/${store.getState().user.id}/favorite`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(setFavorites(response.data));
          store.dispatch(favoritesLoaded());
        })
        .catch((error) => {
          store.dispatch(loadFavoritesFailed());
          console.log(error);
        });
      break;
    }
    case FAVORITES_DELETE_FAVORITE: {
      store.dispatch(favoritesDeletingFavorite());
      API.delete(
        `user/${store.getState().user.id}/favorite/${action.anecdoteId}/delete`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        },
      )
        .then(() => {
          store.dispatch(favoritesDeleteFavoriteSucceeded());
          store.dispatch(loadFavorites());
        })
        .catch(() => store.dispatch(favoritesDeleteFavoriteFailed()));
      break;
    }
    default:
  }
  next(action);
};

// Export middleware
export default middleware;
