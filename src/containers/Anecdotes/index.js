// Import from libraries
import { connect } from 'react-redux';
import Anecdotes from '../../components/Anecdotes';

const mapStateToProps = (state) => ({
  anecdotes: state.anecdotes,
});

const mapDispatchToProps = (dispatch) => ({
  initialize: (actionCreator) => dispatch(actionCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Anecdotes);
