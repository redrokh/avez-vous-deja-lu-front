// Import from libraries
import { connect } from 'react-redux';

// Import components
import Anecdotes from '../../components/Anecdotes';

// Import actions
import { loadAnecdotes, loadAnecdotesByCategory, loadFavorites } from '../../actions';

const mapStateToProps = (state) => ({
  anecdotes: state.anecdotes.anecdotes,
});

const mapDispatchToProps = (dispatch) => ({
  initialize: (context, params) => {
    switch (context) {
      case 'anecdotes':
        dispatch(loadAnecdotes());
        break;
      case 'categories':
        dispatch(loadAnecdotesByCategory(...params));
        break;
      case 'favorites':
        dispatch(loadFavorites());
        break;
      default:
        break;
    }
    dispatch(loadAnecdotes());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Anecdotes);
