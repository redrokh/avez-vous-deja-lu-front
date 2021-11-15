// Import from libraries
import { connect } from 'react-redux';

// Import from app components
import App from '../../components/App';

// Import actions and action creators
import {
  loadUser,
} from '../../actions/userActions';

import { setReconnecting } from '../../actions/authActions';
import { resetRegistrationState } from '../../actions/registrationActions';

// Link components props to state
const mapStateToProps = (state) => ({
  registrationSucceeded: state.registration.registrationSucceeded,
});

// Link component props to actions
const mapDispatchToProps = (dispatch) => ({
  reconnectUser: () => dispatch(loadUser()),
  cancelReconnection: () => dispatch(setReconnecting(false)),
  resetRegistrationState: () => dispatch(resetRegistrationState()),
});

// Export container
export default connect(mapStateToProps, mapDispatchToProps)(App);
