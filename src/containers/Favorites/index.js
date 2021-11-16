// Import from libraries
import { connect } from 'react-redux';

// Import from app components
import Favorites from '../../components/Favorites';

// Import actions and action creators
import { loadFavorites, favoritesDeleteFavorite } from '../../actions/favoriteActions';

// Link component props to state
const mapStateToProps = (state) => ({
  anecdotes: state.favorites.anecdotes,
  loadingData: state.favorites.loadingData,
  loadDataFailed: state.favorites.loadDataFailed,
  dataLoaded: state.favorites.dataLoaded,
  isConnected: state.auth.isConnected,
  reconnecting: state.auth.reconnecting,
});

// Link component props to actions
const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(loadFavorites()),
  deleteFavorite: (anecdoteId) => dispatch(favoritesDeleteFavorite(anecdoteId)),
});

// Export container
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
