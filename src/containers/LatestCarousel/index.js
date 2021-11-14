// Import from libraries
import { connect } from 'react-redux';

// Import from app components
import LatestCarousel from '../../components/LatestCarousel';

// Import actions and action creators
import { loadLatests, setLatestsIndex } from '../../actions/latestActions';

// Link component props to state
const mapStateToProps = (state) => ({
  title: state.latests.title,
  anecdotes: state.latests.anecdotes,
  currentIndex: state.latests.currentIndex,
  loadingData: state.latests.loadingData,
  dataLoaded: state.latests.dataLoaded,
  context: state.latests.context,
});

// Link component props to actions
const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(loadLatests()),
  setCurrentIndex: (index) => dispatch(setLatestsIndex(index)),
});

// Export container
export default connect(mapStateToProps, mapDispatchToProps)(LatestCarousel);
