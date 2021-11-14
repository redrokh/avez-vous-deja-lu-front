// Actions
export const LOAD_FAVORITES = 'LOAD_FAVORITES';
export const LOADING_FAVORITES = 'LOADING_FAVORITES';
export const SET_FAVORITES = 'SET_FAVORITES';
export const LOAD_FAVORITES_FAILED = 'LOAD_FAVORITES_FAILED';
export const FAVORITES_LOADED = 'FAVORITES_LOADED';

export const FAVORITES_DELETE_FAVORITE = 'FAVORITES_DELETE_FAVORITE';
export const FAVORITES_DELETING_FAVORITE = 'FAVORITES_DELETING_FAVORITE';
export const FAVORITES_DELETE_FAVORITE_FAILED = 'FAVORITES_DELETE_FAVORITE_FAILED';
export const FAVORITES_DELETE_FAVORITE_SUCCEEDED = 'FAVORITES_DELETE_FAVORITE_SUCCEEDED';

// Action creators
export const loadFavorites = () => ({
  type: LOAD_FAVORITES,
});

export const loadingFavorites = () => ({
  type: LOADING_FAVORITES,
});

export const setFavorites = (anecdotes) => ({
  type: SET_FAVORITES,
  anecdotes,
});

export const loadFavoritesFailed = () => ({
  type: LOAD_FAVORITES_FAILED,
});

export const favoritesLoaded = () => ({
  type: FAVORITES_LOADED,
});

export const favoritesDeleteFavorite = (anecdoteId) => ({
  type: FAVORITES_DELETE_FAVORITE,
  anecdoteId,
});

export const favoritesDeletingFavorite = () => ({
  type: FAVORITES_DELETING_FAVORITE,
});

export const favoritesDeleteFavoriteFailed = () => ({
  type: FAVORITES_DELETE_FAVORITE_FAILED,
});

export const favoritesDeleteFavoriteSucceeded = () => ({
  type: FAVORITES_DELETE_FAVORITE_SUCCEEDED,
});
