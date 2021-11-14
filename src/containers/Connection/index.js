// Import from libraries
import { connect } from 'react-redux';

// Import from app components
import Connection from '../../components/Connection';

// Import actions and action creators
import { setConnectionEmailInput, setConnectionPasswordInput, connectionFormValidation } from '../../actions/authActions';

// Link component props to state
const mapStateToProps = (state) => ({
  emailInput: state.auth.emailInput,
  passwordInput: state.auth.passwordInput,
  emailInputIsInvalid: state.auth.emailInputIsInvalid,
  passwordInputIsInvalid: state.auth.passwordInputIsInvalid,
  emailInputError: state.auth.emailInputError,
  passwordInputError: state.auth.passwordInputError,
  connectionFailed: state.auth.connectionFailed,
  connectionSucceeded: state.auth.connectionSucceeded,
});

// Link component props to actions
const mapDispatchToProps = (dispatch) => ({
  onEmailInputChange: (email) => dispatch(setConnectionEmailInput(email)),
  onPasswordInputChange: (password) => dispatch(setConnectionPasswordInput(password)),
  formValidation: () => dispatch(connectionFormValidation()),
});

// Export container
export default connect(mapStateToProps, mapDispatchToProps)(Connection);
