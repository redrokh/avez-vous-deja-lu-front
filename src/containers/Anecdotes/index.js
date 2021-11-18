// Import from libraries
import { connect } from 'react-redux';

// Import from app components
import Anecdotes from '../../components/Anecdotes';

// Import actions and action creators
import {
  loadAnecdotes,
  loadBestAnecdotes,
  loadAnecdotesOfCategory,
  setAnecdotesTitle,
} from '../../actions/anecdoteActions';

import {
  loadCategoryName,
} from '../../actions/categoryActions';

// Link component props to state
const mapStateToProps = (state) => ({
  title: state.anecdotes.title,
  anecdotes: state.anecdotes.list,
  loadingData: state.anecdotes.loadingData,
  loadDataFailed: state.anecdotes.loadDataFailed,
  dataLoaded: state.anecdotes.dataLoaded,
  isConnected: state.auth.isConnected,
  reconnecting: state.auth.reconnecting,
});

// Link component props to actions
const mapDispatchToProps = (dispatch) => ({
  loadData: (context, slug) => {
    switch (context) {
      case 'anecdotes': {
        dispatch(loadAnecdotes());
        dispatch(setAnecdotesTitle('Toutes nos anecdotes'));
        break;
      }
      case 'bests': {
        dispatch(loadBestAnecdotes());
        dispatch(setAnecdotesTitle('Découvrez nos meilleures anecdotes'));
        break;
      }
      case 'categories': {
        dispatch(loadCategoryName(slug));
        dispatch(loadAnecdotesOfCategory(slug));
        dispatch(loadCategoryName(slug));
        break;
      }
      default:
        break;
    }
  },
});

// Export container
export default connect(mapStateToProps, mapDispatchToProps)(Anecdotes);
