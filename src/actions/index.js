// Anecdotes actions
export const LOAD_LATEST_ANECDOTES = 'LOAD_LATEST_ANECDOTES';
export const LOAD_BEST_ANECDOTES = 'LOAD_BEST_ANECDOTES';
export const LOAD_ANECDOTES = 'LOAD_ANECDOTES';
export const SET_LATEST_ANECDOTES = 'SET_LATEST_ANECDOTES';
export const SET_BEST_ANECDOTES = 'SET_BEST_ANECDOTES';
export const SET_ANECDOTES = 'SET_ANECDOTES';
export const SET_LATEST_INDEX = 'SET_LATEST_INDEX';
export const SET_BEST_INDEX = 'SET_BEST_INDEX';

// App actions
export const UPDATE_PAGE_COLOR = 'UPDATE_PAGE_COLOR';
export const UPDATE_HEADER_COLOR = 'UPDATE_HEADER_COLOR';
export const TOGGLE_HEADER_MENU = 'TOGGLE_HEADER_MENU';

// Anecdotes action creators
export const loadLatests = () => ({
  type: LOAD_LATEST_ANECDOTES,
});

export const loadBests = () => ({
  type: LOAD_BEST_ANECDOTES,
});

export const loadAnecdotes = (parameters) => ({
  type: LOAD_ANECDOTES,
  parameters,
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

export const setLatestIndex = (newIndex) => ({
  type: SET_LATEST_INDEX,
  newIndex,
});

export const setBestIndex = (newIndex) => ({
  type: SET_BEST_INDEX,
  newIndex,
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
