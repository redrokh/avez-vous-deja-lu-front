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
} from '../../actions';

const mapStateToProps = (state) => ({
  id: state.anecdotes.anecdote.id,
  title: state.anecdotes.anecdote.title,
  content: state.anecdotes.anecdote.content,
  createdAt: state.anecdotes.anecdote.createdAt,
  writer: state.anecdotes.anecdote.writer,
  category: state.anecdotes.anecdote.category,
  source: state.anecdotes.anecdote.source,
});

const mapDispatchToProps = (dispatch) => ({
  initialize: (anecdoteId) => dispatch(loadAnecdote(anecdoteId)),
  prevAnecdote: (url, anecdoteId) => dispatch(loadPrevAnecdote(url, anecdoteId)),
  nextAnecdote: (url, anecdoteId) => dispatch(loadNextAnecdote(url, anecdoteId)),
  upvote: () => dispatch(upvote()),
  downvote: () => dispatch(downvote()),
  knew: () => dispatch(knew()),
  didntKnow: () => dispatch(didntKnow()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Anecdote);
