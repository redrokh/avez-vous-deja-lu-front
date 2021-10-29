// Import from libraries
import { connect } from 'react-redux';

// Import components
import Anecdotes from '../../components/Anecdotes';

// Import actions
import { loadAnecdotes } from '../../actions';

const mapStateToProps = (state) => ({
  anecdotes: state.anecdotes,
});

const mapDispatchToProps = (dispatch) => ({
  initialize: () => dispatch(loadAnecdotes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Anecdotes);
