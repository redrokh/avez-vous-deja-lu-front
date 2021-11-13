// Import from libraries
import { connect } from 'react-redux';

// Import components
import Anecdote from '../../components/Anecdote';

// Import action creators
import {
  loadAnecdote,
  loadPrevAnecdote,
  loadNextAnecdote,
  upvote,
  downvote,
  knew,
  didntKnow,
  addToFavorites,
  removeFromFavorites,
} from '../../actions';

const mapStateToProps = (state) => ({
  id: state.anecdotes.anecdote.id,
  title: state.anecdotes.anecdote.title,
  content: state.anecdotes.anecdote.content,
  createdAt: state.anecdotes.anecdote.createdAt,
  writer: state.anecdotes.anecdote.writer,
  category: state.anecdotes.anecdote.category,
  source: state.anecdotes.anecdote.source,
  isFavorite: state.user.isFavorite,
  isConnected: state.user.isConnected,
  isLoading: state.app.isLoadingAnecdote,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  initialize: (anecdoteId, userId) => {
    dispatch(loadAnecdote(anecdoteId));
  },
  prevAnecdote: (anecdoteId) => dispatch(loadPrevAnecdote(anecdoteId)),
  nextAnecdote: (anecdoteId) => dispatch(loadNextAnecdote(anecdoteId)),
  upvote: () => dispatch(upvote()),
  downvote: () => dispatch(downvote()),
  knew: () => dispatch(knew()),
  didntKnow: () => dispatch(didntKnow()),
  toggleIsFavorite: () => {
    if (ownProps.isFavorite) {
      dispatch(removeFromFavorites());
    }
    else {
      dispatch(addToFavorites());
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Anecdote);
