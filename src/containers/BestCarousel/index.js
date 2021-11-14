// Import from libraries
import { connect } from 'react-redux';

// Import from app components
import BestCarousel from '../../components/BestCarousel';

// Import actions and action creators
import { loadBests, setBestsIndex } from '../../actions/bestActions';

// Link component props to state
const mapStateToProps = (state) => ({
  title: state.bests.title,
  anecdotes: state.bests.anecdotes,
  currentIndex: state.bests.currentIndex,
  loadingData: state.bests.loadingData,
  dataLoaded: state.bests.dataLoaded,
  context: state.bests.context,
});

// Link component props to actions
const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(loadBests()),
  setCurrentIndex: (index) => dispatch(setBestsIndex(index)),
});

// Export container
export default connect(mapStateToProps, mapDispatchToProps)(BestCarousel);
