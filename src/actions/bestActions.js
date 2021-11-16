// Actions
export const LOAD_BESTS = 'LOAD_BESTS';
export const LOADING_BESTS = 'LOADING_BESTS';
export const SET_BESTS = 'SET_BESTS';
export const BESTS_LOADED = 'BESTS_LOADED';
export const LOAD_BESTS_FAILED = 'LOAD_BESTS_FAILED';
export const SET_BESTS_INDEX = 'SET_BESTS_INDEX';
export const RESET_BESTS_STATE = 'RESET_BESTS_STATE';

// Action creators
export const loadBests = () => ({
  type: LOAD_BESTS,
});

export const loadingBests = () => ({
  type: LOADING_BESTS,
});

export const setBests = (anecdotes) => ({
  type: SET_BESTS,
  anecdotes,
});

export const bestsLoaded = () => ({
  type: BESTS_LOADED,
});

export const loadBestsFailed = () => ({
  type: LOAD_BESTS_FAILED,
});

export const setBestsIndex = (index) => ({
  type: SET_BESTS_INDEX,
  index,
});

export const resetBestsState = () => ({
  type: RESET_BESTS_STATE,
});
