// Import from libraries
import { connect } from 'react-redux';

// Import components
import LatestCarousel from '../../components/LatestCarousel';

// Import actions
import { setLatestIndex, loadLatests } from '../../actions';

const mapStateToProps = (state) => ({
  title: state.anecdotes.latestsTitle,
  anecdotes: state.anecdotes.latests,
  currentIndex: state.anecdotes.latestIndex,
});

const mapDispatchToProps = (dispatch) => ({
  modifyIndex: (newIndex) => dispatch(setLatestIndex(newIndex)),
  initialize: () => dispatch(loadLatests()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LatestCarousel);
