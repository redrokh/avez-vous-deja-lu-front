// Import from libraries
import { connect } from 'react-redux';

// Import from app components
import AccessNav from '../../components/AccessNav';

// Import actions and action creators
import { logOut } from '../../actions/authActions';

// Link component props to state
const mapStateToProps = (state) => ({
  isConnected: state.auth.isConnected,
});

// Link component props to actions
const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOut()),
});

// Export container
export default connect(mapStateToProps, mapDispatchToProps)(AccessNav);
