// Anecdotes actions
export const LOAD_LATEST_ANECDOTES = 'LOAD_LATEST_ANECDOTES';
export const LOAD_BEST_ANECDOTES = 'LOAD_BEST_ANECDOTES';
export const LOAD_ANECDOTES = 'LOAD_ANECDOTES';
export const LOAD_ANECDOTE = 'LOAD_ANECDOTE';
export const LOAD_PREV_ANECDOTE = 'PREV_ANECDOTE';
export const LOAD_NEXT_ANECDOTE = 'NEXT_ANECDOTE';
export const LOAD_ANECDOTES_BY_CATEGORY = 'LOAD_ANECDOTES_BY_CATEGORY';
export const LOAD_FAVORITES = 'LOAD_FAVORITES';

export const SET_LATEST_ANECDOTES = 'SET_LATEST_ANECDOTES';
export const SET_BEST_ANECDOTES = 'SET_BEST_ANECDOTES';
export const SET_ANECDOTES = 'SET_ANECDOTES';
export const SET_ANECDOTE = 'SET_ANECDOTE';
export const SET_LATEST_INDEX = 'SET_LATEST_INDEX';
export const SET_BEST_INDEX = 'SET_BEST_INDEX';
export const SET_FAVORITES = 'SET_FAVORITES';

export const UPVOTE = 'UPVOTE';
export const DOWNVOTE = 'DOWNVOTE';
export const KNEW = 'KNEW';
export const DIDNT_KNOW = 'DIDNT_KNOW';

export const UPDATE_PAGE_COLOR = 'UPDATE_PAGE_COLOR';
export const UPDATE_HEADER_COLOR = 'UPDATE_HEADER_COLOR';
export const TOGGLE_HEADER_MENU = 'TOGGLE_HEADER_MENU';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_OUT = 'LOG_OUT';

export const UPDATE_PSEUDO = 'UPDATE_PSEUDO';
export const CHANGE_PSEUDO_REQUEST = 'CHANGE_PSEUDO_REQUEST';
export const SET_PSEUDO = 'SET_PSEUDO';
export const EDIT_PSEUDO = 'EDIT_PSEUDO';

export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const CHANGE_EMAIL_REQUEST = 'CHANGE_EMAIL_REQUEST';
export const SET_EMAIL = 'SET_EMAIL';
export const EDIT_EMAIL = 'EDIT_EMAIL';

export const CHANGE_AVATAR = 'CHANGE_AVATAR';

export const LOAD_USER = 'LOAD_USER';
export const SET_USER = 'SET_USER';

// Anecdotes action creators
export const loadLatests = () => ({
  type: LOAD_LATEST_ANECDOTES,
});

export const loadBests = () => ({
  type: LOAD_BEST_ANECDOTES,
});

export const loadAnecdotes = (path) => ({
  type: LOAD_ANECDOTES,
  path,
});

export const loadAnecdote = (anecdoteId) => ({
  type: LOAD_ANECDOTE,
  anecdoteId,
});

export const loadPrevAnecdote = (baseUrl, anecdoteId) => ({
  type: LOAD_PREV_ANECDOTE,
  baseUrl,
  anecdoteId,
});

export const loadNextAnecdote = (baseUrl, anecdoteId) => ({
  type: LOAD_NEXT_ANECDOTE,
  baseUrl,
  anecdoteId,
});

export const loadAnecdotesByCategory = (categoryId) => ({
  type: LOAD_ANECDOTES_BY_CATEGORY,
  categoryId,
});

export const loadFavorites = () => ({
  type: LOAD_FAVORITES,
});

export const setLatests = (anecdotes) => ({
  type: SET_LATEST_ANECDOTES,
  anecdotes,
});

export const setBests = (anecdotes) => ({
  type: SET_BEST_ANECDOTES,
  anecdotes,
});

export const setAnecdotes = (anecdotes) => ({
  type: SET_ANECDOTES,
  anecdotes,
});

export const setAnecdote = (anecdote) => ({
  type: SET_ANECDOTE,
  anecdote,
});

export const setLatestIndex = (newIndex) => ({
  type: SET_LATEST_INDEX,
  newIndex,
});

export const setBestIndex = (newIndex) => ({
  type: SET_BEST_INDEX,
  newIndex,
});

export const setFavorites = (favorites) => ({
  type: SET_FAVORITES,
  favorites,
});

export const upvote = () => ({
  type: UPVOTE,
});

export const downvote = () => ({
  type: DOWNVOTE,
});

export const knew = () => ({
  type: KNEW,
});

export const didntKnow = () => ({
  type: DIDNT_KNOW,
});

export const updatePageColor = () => ({
  type: UPDATE_PAGE_COLOR,
});

export const updateHeaderColor = () => ({
  type: UPDATE_HEADER_COLOR,
});

export const toggleHeaderMenu = () => ({
  type: TOGGLE_HEADER_MENU,
});

export const logInRequest = (email, password) => ({
  type: LOG_IN_REQUEST,
  email,
  password,
});

export const logInSuccess = (id, email, password) => ({
  type: LOG_IN_SUCCESS,
  id,
  email,
  password,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const updatePseudo = (newPseudo) => ({
  type: UPDATE_PSEUDO,
  newPseudo,
});

export const changePseudoRequest = () => ({
  type: CHANGE_PSEUDO_REQUEST,
});

export const setPseudo = () => ({
  type: SET_PSEUDO,
});

export const editPseudo = () => ({
  type: EDIT_PSEUDO,
});

export const updateEmail = (newEmail) => ({
  type: UPDATE_EMAIL,
  newEmail,
});

export const changeEmailRequest = () => ({
  type: CHANGE_EMAIL_REQUEST,
});

export const setEmail = () => ({
  type: SET_EMAIL,
});

export const editEmail = () => ({
  type: EDIT_EMAIL,
});

export const changeAvatar = () => ({
  type: CHANGE_AVATAR,
});

export const loadUser = () => ({
  type: LOAD_USER,
});

export const setUser = (id, pseudo, email, avatar) => ({
  type: SET_USER,
  id,
  pseudo,
  email,
  avatar,
});
