// Import from libraries
import { connect } from 'react-redux';
import LatestCarousel from '../../components/LatestCarousel';
import { setLatestIndex } from '../../actions';

const mapStateToProps = (state) => ({
  title: state.latestsTitle,
  anecdotes: state.latests,
  currentIndex: state.latestIndex,
});

const mapDispatchToProps = (dispatch) => ({
  modifyIndex: (newIndex) => dispatch(setLatestIndex(newIndex)),
  initialize: (actionCreator) => dispatch(actionCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LatestCarousel);
