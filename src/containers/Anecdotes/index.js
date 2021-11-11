// Import from libraries
import { connect } from 'react-redux';

// Import components
import Anecdotes from '../../components/Anecdotes';

// Import actions
import { loadAnecdotes, loadAnecdotesByCategory, loadBests } from '../../actions';

const mapStateToProps = (state) => ({
  anecdotes: state.anecdotes.anecdotes,
  isLoading: state.app.isLoadingAnecdotes,
});

const mapDispatchToProps = (dispatch) => ({
  initialize: (context, slug) => {
    switch (context) {
      case 'anecdotes':
        dispatch(loadAnecdotes());
        break;
      case 'bests':
        dispatch(loadBests());
        break;
      case 'categories':
        console.log('...');
        dispatch(loadAnecdotesByCategory(slug));
        break;
      default:
        break;
    }
    dispatch(loadAnecdotes());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Anecdotes);
