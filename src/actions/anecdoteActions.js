// Actions
export const LOAD_ANECDOTES = 'LOAD_ANECDOTES';
export const LOADING_ANECDOTES = 'LOADING_ANECDOTES';
export const SET_ANECDOTES = 'SET_ANECDOTES';
export const LOAD_ANECDOTES_FAILED = 'LOAD_ANECDOTES_FAILED';
export const ANECDOTES_LOADED = 'ANECDOTES_LOADED';

export const LOAD_BEST_ANECDOTES = 'LOAD_BEST_ANECDOTES';

export const LOAD_ANECDOTES_OF_CATEGORY = 'LOAD_ANECDOTES_OF_CATEGORY';

export const SET_ANECDOTES_TITLE = 'SET_ANECDOTES_TITLE';

export const LOAD_ANECDOTE = 'LOAD_ANECDOTE';
export const LOADING_ANECDOTE = 'LOADING_ANECDOTE';
export const SET_ANECDOTE = 'SET_ANECDOTE';
export const LOAD_ANECDOTE_FAILED = 'LOAD_ANECDOTE_FAILED';
export const ANECDOTE_LOADED = 'ANECDOTE_LOADED';

export const LOAD_PREV_ANECDOTE = 'LOAD_PREV_ANECDOTE';
export const LOAD_NEXT_ANECDOTE = 'LOAD_NEXT_ANECDOTE';

export const LOAD_IS_FAVORITE = 'LOAD_IS_FAVORITE';
export const LOADING_IS_FAVORITE = 'LOADING_IS_FAVORITE';
export const SET_IS_FAVORITE = 'SET_IS_FAVORITE';
export const LOAD_IS_FAVORITE_FAILED = 'LOAD_IS_FAVORITE_FAILED';
export const IS_FAVORITE_LOADED = 'IS_FAVORITE_LOADED';

export const TOGGLE_IS_FAVORITE = 'TOGGLE_IS_FAVORITE';

export const ADD_FAVORITE = 'ADD_FAVORITE';
export const ADDING_FAVORITE = 'ADDING_FAVORITE';
export const ADD_FAVORITE_FAILED = 'ADD_FAVORITE_FAILED';
export const ADD_FAVORITE_SUCCEEDED = 'ADD_FAVORITE_SUCCEEDED';

export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const DELETING_FAVORITE = 'DELETING_FAVORITE';
export const DELETE_FAVORITE_FAILED = 'DELETE_FAVORITE_FAILED';
export const DELETE_FAVORITE_SUCCEEDED = 'DELETE_FAVORITE_SUCCEEDED';

export const UP_VOTE = 'UP_VOTE';
export const UP_VOTING = 'UP_VOTING';
export const UP_VOTE_FAILED = 'UP_VOTE_FAILED';
export const UP_VOTE_SUCCEEDED = 'UP_VOTE_SUCCEEDED';

export const DOWN_VOTE = 'DOWN_VOTE';
export const DOWN_VOTING = 'DOWN_VOTING';
export const DOWN_VOTE_FAILED = 'DOWN_VOTE_FAILED';
export const DOWN_VOTE_SUCCEEDED = 'DOWN_VOTE_SUCCEEDED';

export const I_KNEW = 'I_KNEW';
export const I_KNEW_PENDING = 'I_KNEW_PENDING';
export const I_KNEW_FAILED = 'I_KNEW_FAILED';
export const I_KNEW_SUCCEEDED = 'I_KNEW_SUCCEEDED';

export const I_DIDNT_KNOW = 'I_DIDNT_KNOW';
export const I_DIDNT_KNOW_PENDING = 'I_DIDNT_KNOW_PENDING';
export const I_DIDNT_KNOW_FAILED = 'I_DIDNT_KNOW_FAILED';
export const I_DIDNT_KNOW_SUCCEEDED = 'I_DIDNT_KNOW_SUCCEEDED';

// Action creators
export const loadAnecdotes = () => ({
  type: LOAD_ANECDOTES,
});

export const loadingAnecdotes = () => ({
  type: LOADING_ANECDOTES,
});

export const setAnecdotes = (anecdotes) => ({
  type: SET_ANECDOTES,
  anecdotes,
});

export const loadAnecdotesFailed = () => ({
  type: LOAD_ANECDOTES_FAILED,
});

export const anecdotesLoaded = () => ({
  type: ANECDOTES_LOADED,
});

export const loadBestAnecdotes = () => ({
  type: LOAD_BEST_ANECDOTES,
});

export const loadAnecdotesOfCategory = (slug) => ({
  type: LOAD_ANECDOTES_OF_CATEGORY,
  slug,
});

export const setAnecdotesTitle = (title) => ({
  type: SET_ANECDOTES_TITLE,
  title,
});

export const loadAnecdote = (context, anecdoteId) => ({
  type: LOAD_ANECDOTE,
  context,
  anecdoteId,
});

export const loadingAnecdote = () => ({
  type: LOADING_ANECDOTE,
});

export const setAnecdote = (anecdote) => ({
  type: SET_ANECDOTE,
  anecdote
});

export const loadAnecdoteFailed = () => ({
  type: LOAD_ANECDOTE_FAILED,
});

export const anecdoteLoaded = () => ({
  type: ANECDOTE_LOADED,
});

export const loadPrevAnecdote = (context, anecdoteId) => ({
  type: LOAD_PREV_ANECDOTE,
  context,
  anecdoteId,
});

export const loadNextAnecdote = (context, anecdoteId) => ({
  type: LOAD_NEXT_ANECDOTE,
  context,
  anecdoteId,
});

export const loadIsFavorite = (anecdoteId) => ({
  type: LOAD_IS_FAVORITE,
  anecdoteId,
});

export const setIsFavorite = (value) => ({
  type: SET_IS_FAVORITE,
  value,
});

export const loadingIsFavorite = () => ({
  type: LOADING_IS_FAVORITE,
});

export const loadIsFavoriteFailed = () => ({
  type: LOAD_IS_FAVORITE_FAILED,
});

export const isFavoriteLoaded = () => ({
  type: IS_FAVORITE_LOADED,
});

export const addFavorite = () => ({
  type: ADD_FAVORITE,
});

export const addingFavorite = () => ({
  type: ADDING_FAVORITE,
});

export const addFavoriteFailed = () => ({
  type: ADD_FAVORITE_FAILED,
});

export const addFavoriteSucceeded = () => ({
  type: ADD_FAVORITE_SUCCEEDED,
});

export const deleteFavorite = () => ({
  type: DELETE_FAVORITE,
});

export const deletingFavorite = () => ({
  type: DELETING_FAVORITE,
});

export const deleteFavoriteFailed = () => ({
  type: DELETE_FAVORITE_FAILED,
});

export const deleteFavoriteSucceeded = () => ({
  type: DELETE_FAVORITE_SUCCEEDED,
});

export const upVote = (context) => ({
  type: UP_VOTE,
  context,
});

export const upVoting = () => ({
  type: UP_VOTING,
});

export const upVoteFailed = () => ({
  type: UP_VOTE_FAILED,
});

export const upVoteSucceeded = () => ({
  type: UP_VOTE_SUCCEEDED,
});

export const downVote = (context) => ({
  type: DOWN_VOTE,
  context,
});

export const downVoting = () => ({
  type: DOWN_VOTING,
});

export const downVoteFailed = () => ({
  type: DOWN_VOTE_FAILED,
});

export const downVoteSucceeded = () => ({
  type: DOWN_VOTE_SUCCEEDED,
});

export const iKnew = (context) => ({
  type: I_KNEW,
  context,
});

export const iKnewPending = () => ({
  type: I_KNEW_PENDING,
});

export const iKnewFailed = () => ({
  type: I_KNEW_FAILED,
});

export const iKnewSucceeded = () => ({
  type: I_KNEW_SUCCEEDED,
});

export const iDidntKnow = (context) => ({
  type: I_DIDNT_KNOW,
  context,
});

export const iDidntKnowPending = () => ({
  type: I_DIDNT_KNOW_PENDING,
});

export const iDidntKnowFailed = () => ({
  type: I_DIDNT_KNOW_FAILED,
});

export const iDidntKnowSucceeded = () => ({
  type: I_DIDNT_KNOW_SUCCEEDED,
});