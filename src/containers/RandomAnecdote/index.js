// Import from libraries
import { connect } from 'react-redux';

// Import from app components
import RandomAnecdote from '../../components/RandomAnecdote';

// Import actions and action creators
import {
  loadRandomAnecdote,
  loadIsFavorite,
  addFavorite,
  deleteFavorite,
  iKnew,
  iDidntKnow,
  upVote,
  downVote,
} from '../../actions/anecdoteActions';

// Link component props to state
const mapStateToProps = (state) => ({
  id: state.anecdote.id,
  title: state.anecdote.title,
  createdAt: state.anecdote.createdAt,
  content: state.anecdote.content,
  writer: state.anecdote.writer,
  category: state.anecdote.category,
  source: state.anecdote.source,
  voteCount: state.anecdote.upVoteUsers.length - state.anecdote.downVoteUsers.length,
  iKnewCount: state.anecdote.knownUsers.length,
  iDidntKnowCount: state.anecdote.unknownUsers.length,
  isFavorite: state.anecdote.isFavorite,
  loadingAnecdote: state.anecdote.loadingAnecdote,
  loadAnecdoteFailed: state.anecdote.loadAnecdoteFailed,
  anecdoteLoaded: state.anecdote.anecdoteLoaded,
  loadingIsFavorite: state.anecdote.loadingIsFavorite,
  loadIsFavoriteFailed: state.anecdote.loadIsFavoriteFailed,
  isFavoriteLoaded: state.anecdote.isFavoriteLoaded,
  upVoting: state.anecdote.upVoting,
  upVoteFailed: state.anecdote.upVoteFailed,
  upVoteSucceeded: state.anecdote.upVoteSucceeded,
  downVoting: state.anecdote.downVoting,
  downVoteFailed: state.anecdote.downVoteFailed,
  downVoteSucceeded: state.anecdote.downVoteSucceeded,
  iKnewPending: state.anecdote.iKnewPending,
  iKnewFailed: state.anecdote.iKnewFailed,
  iKnewSucceeded: state.anecdote.iKnewSucceeded,
  iDidntKnowPending: state.anecdote.iDidntKnowPending,
  iDidntKnowFailed: state.anecdote.iDidntKnowFailed,
  iDidntKnowSucceeded: state.anecdote.iDidntKnowSucceeded,
  isConnected: state.auth.isConnected,
  reconnecting: state.auth.reconnecting,
});

// Link component props to actions
const mapDispatchToProps = (dispatch) => ({
  loadAnecdote: () => dispatch(loadRandomAnecdote()),
  loadIsFavorite: (anecdoteId) => dispatch(loadIsFavorite(anecdoteId)),
  upVote: () => dispatch(upVote('anecdotes')),
  downVote: () => dispatch(downVote('anecdotes')),
  iKnew: () => dispatch(iKnew('anecdotes')),
  iDidntKnow: () => dispatch(iDidntKnow('anecdotes')),
  toggleIsFavorite: (isFavorite) => {
    if (!isFavorite) {
      dispatch(addFavorite());
    }
    else {
      dispatch(deleteFavorite());
    }
  },
});

// Export container
export default connect(mapStateToProps, mapDispatchToProps)(RandomAnecdote);
