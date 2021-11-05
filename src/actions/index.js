// Anecdotes actions
export const LOAD_LATEST_ANECDOTES = 'LOAD_LATEST_ANECDOTES';
export const SET_LATEST_ANECDOTES = 'SET_LATEST_ANECDOTES';
export const SET_LATEST_INDEX = 'SET_LATEST_INDEX';

export const LOAD_BEST_ANECDOTES = 'LOAD_BEST_ANECDOTES';
export const SET_BEST_ANECDOTES = 'SET_BEST_ANECDOTES';
export const SET_BEST_INDEX = 'SET_BEST_INDEX';


export const LOAD_ANECDOTES = 'LOAD_ANECDOTES';
export const SET_ANECDOTES = 'SET_ANECDOTES';

export const LOAD_ANECDOTE = 'LOAD_ANECDOTE';
export const SET_ANECDOTE = 'SET_ANECDOTE';
export const LOAD_PREV_ANECDOTE = 'PREV_ANECDOTE';
export const LOAD_NEXT_ANECDOTE = 'NEXT_ANECDOTE';
export const UPVOTE = 'UPVOTE';
export const DOWNVOTE = 'DOWNVOTE';
export const KNEW = 'KNEW';
export const DIDNT_KNOW = 'DIDNT_KNOW';

export const LOAD_ANECDOTES_BY_CATEGORY = 'LOAD_ANECDOTES_BY_CATEGORY';

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
export const SET_CATEGORIES = 'SET_CATEGORIES';

// App actions
export const UPDATE_PAGE_COLOR = 'UPDATE_PAGE_COLOR';
export const UPDATE_HEADER_COLOR = 'UPDATE_HEADER_COLOR';
export const TOGGLE_HEADER_MENU = 'TOGGLE_HEADER_MENU';

// Anecdotes action creators
export const loadLatests = () => ({
  type: LOAD_LATEST_ANECDOTES,
});

export const setLatests = (anecdotes) => ({
  type: SET_LATEST_ANECDOTES,
  anecdotes,
});

export const setLatestIndex = (newIndex) => ({
  type: SET_LATEST_INDEX,
  newIndex,
});

export const loadBests = () => ({
  type: LOAD_BEST_ANECDOTES,
});

export const setBests = (anecdotes) => ({
  type: SET_BEST_ANECDOTES,
  anecdotes,
});

export const setBestIndex = (newIndex) => ({
  type: SET_BEST_INDEX,
  newIndex,
});

export const loadAnecdotes = (path) => ({
  type: LOAD_ANECDOTES,
  path,
});

export const setAnecdotes = (anecdotes) => ({
  type: SET_ANECDOTES,
  anecdotes,
});

export const loadAnecdote = (anecdoteId) => ({
  type: LOAD_ANECDOTE,
  anecdoteId,
});

export const setAnecdote = (anecdote) => ({
  type: SET_ANECDOTE,
  anecdote,
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

export const loadAnecdotesByCategory = (categoryId) => ({
  type: LOAD_ANECDOTES_BY_CATEGORY,
  categoryId,
});

// App action creators
export const updatePageColor = () => ({
  type: UPDATE_PAGE_COLOR,
});

export const updateHeaderColor = () => ({
  type: UPDATE_HEADER_COLOR,
});

export const toggleHeaderMenu = () => ({
  type: TOGGLE_HEADER_MENU,
});

export const loadCategories = () => ({
  type: LOAD_CATEGORIES,
});

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  categories,
});
