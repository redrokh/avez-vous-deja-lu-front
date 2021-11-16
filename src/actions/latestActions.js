// Actions
export const LOAD_LATESTS = 'LOAD_LATESTS';
export const LOADING_LATESTS = 'LOADING_LATESTS';
export const SET_LATESTS = 'SET_LATESTS';
export const LATESTS_LOADED = 'LATESTS_LOADED';
export const LOAD_LATESTS_FAILED = 'LOAD_LATESTS_FAILED';
export const SET_LATESTS_INDEX = 'SET_LATESTS_INDEX';
export const RESET_LATESTS_STATE = 'RESET_LATESTS_STATE';

// Action creators
export const loadLatests = () => ({
  type: LOAD_LATESTS,
});

export const loadingLatests = () => ({
  type: LOADING_LATESTS,
});

export const setLatests = (anecdotes) => ({
  type: SET_LATESTS,
  anecdotes,
});

export const latestsLoaded = () => ({
  type: LATESTS_LOADED,
});

export const loadLatestsFailed = () => ({
  type: LOAD_LATESTS_FAILED,
});

export const setLatestsIndex = (index) => ({
  type: SET_LATESTS_INDEX,
  index,
});

export const resetLatestsState = () => ({
  type: RESET_LATESTS_STATE,
});

