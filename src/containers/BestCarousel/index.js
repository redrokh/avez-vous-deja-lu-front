// Import from libraries
import { connect } from 'react-redux';

// Import components
import BestCarousel from '../../components/BestCarousel';

// Import actions
import { setBestIndex, loadBests } from '../../actions';

const mapStateToProps = (state) => ({
  title: state.bestsTitle,
  anecdotes: state.bests,
  currentIndex: state.bestIndex,
});

const mapDispatchToProps = (dispatch) => ({
  modifyIndex: (newIndex) => dispatch(setBestIndex(newIndex)),
  initialize: () => dispatch(loadBests()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BestCarousel);
