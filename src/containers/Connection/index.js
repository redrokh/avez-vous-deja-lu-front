// import from libraries
import { connect } from 'react-redux';

// import components
import Connection from '../../components/Connection';

import {
  updateConnectionEmailInput,
  updateConnectionPasswordInput,
  connectionFormValidation,
} from '../../actions/connectionActions';

const mapStateToProps = (state) => ({
  emailInput: state.connection.emailInput,
  passwordInput: state.connection.passwordInput,
  emailIsInvalid: state.connection.emailIsInvalid,
  passwordIsInvalid: state.connection.passwordIsInvalid,
  emailError: state.connection.emailError,
  passwordError: state.connection.passwordError,
  connectionFailed: state.connection.connectionFailed,
});

const mapDispatchToProps = (dispatch) => ({
  onEmailInputChange: (email) => dispatch(updateConnectionEmailInput(email)),
  onPasswordInputChange: (password) => dispatch(updateConnectionPasswordInput(password)),
  formValidation: () => dispatch(connectionFormValidation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Connection);
