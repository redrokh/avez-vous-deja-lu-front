// Import from libraries
import { connect } from 'react-redux';
import BestCarousel from '../../components/BestCarousel';
import { setBestIndex } from '../../actions';

const mapStateToProps = (state) => ({
  title: state.bestsTitle,
  anecdotes: state.bests,
  currentIndex: state.bestIndex,
});

const mapDispatchToProps = (dispatch) => ({
  modifyIndex: (newIndex) => dispatch(setBestIndex(newIndex)),
  initialize: (actionCreator) => dispatch(actionCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BestCarousel);
