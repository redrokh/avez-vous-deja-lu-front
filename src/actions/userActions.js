// Actions
export const LOAD_USER = 'LOAD_USER';
export const LOAD_FAVORITES = 'LOAD_FAVORITES';

export const SET_USER = 'SET_USER';
export const SET_FAVORITES = 'SET_FAVORITES';

export const LOADING_USER = 'LOADING_USER';
export const LOADING_FAVORITES = 'LOADING_FAVORITES';

export const LOAD_USER_FAILED = 'LOAD_USER_FAILED';
export const LOAD_FAVORITES_FAILED = 'LOAD_FAVORITES_FAILED';

export const USER_LOADED = 'USER_LOADED';
export const FAVORITES_LOADED = 'FAVORITES_LOADED';

export const RESET_USER_STATE = 'RESET_USER_STATE';

export const DELETE_FAVORITE = 'DELETE_FAVORITE';

// Action creators
export const loadUser = () => ({
  type: LOAD_USER,
});

export const loadFavorites = () => ({
  type: LOAD_FAVORITES,
});

export const setUser = (user) => ({
  type: SET_USER,
  user,
});

export const setFavorites = (anecdotes) => ({
  type: SET_FAVORITES,
  anecdotes,
});

export const loadingUser = () => ({
  type: LOADING_USER,
});

export const loadingFavorites = () => ({
  type: LOADING_FAVORITES,
});

export const loadUserFailed = () => ({
  type: LOAD_USER_FAILED,
});

export const loadFavoritesFailed = () => ({
  type: LOAD_FAVORITES_FAILED,
});

export const userLoaded = () => ({
  type: USER_LOADED,
});

export const favoritesLoaded = () => ({
  type: FAVORITES_LOADED,
});

export const resetUserState = () => ({
  type: RESET_USER_STATE,
});

export const deleteFavorite = (anecdoteId) => ({
  type: DELETE_FAVORITE,
  anecdoteId,
});
