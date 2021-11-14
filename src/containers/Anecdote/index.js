// Import from libraries
import { connect } from 'react-redux';

// Import from app components
import Anecdote from '../../components/Anecdote';

// Import actions and action creators
import {
  loadAnecdote,
  loadPrevAnecdote,
  loadNextAnecdote,
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
  isConnected: state.auth.isConnected,
});

// Link component props to actions
const mapDispatchToProps = (dispatch, ownProps) => ({
  loadAnecdote: (context, anecdoteId) => dispatch(loadAnecdote(context, anecdoteId)),
  loadIsFavorite: (anecdoteId) => dispatch(loadIsFavorite(anecdoteId)),
  prevAnecdote: (anecdoteId) => dispatch(loadPrevAnecdote(ownProps.context, anecdoteId)),
  nextAnecdote: (anecdoteId) => dispatch(loadNextAnecdote(ownProps.context, anecdoteId)),
  upVote: (context) => dispatch(upVote(context)),
  downVote: (context) => dispatch(downVote(context)),
  iKnew: (context) => dispatch(iKnew(context)),
  iDidntKnow: (context) => dispatch(iDidntKnow(context)),
  toggleIsFavorite: (isFavorite) => {
    console.log(isFavorite);
    if (!isFavorite) {
      dispatch(addFavorite());
    }
    else {
      dispatch(deleteFavorite());
    }
  },
});

// Export container
export default connect(mapStateToProps, mapDispatchToProps)(Anecdote);
