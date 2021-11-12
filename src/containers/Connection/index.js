// import from libraries
import { connect } from 'react-redux';

// import components
import Connection from '../../components/Connection';

import { logInRequest, updateEmail, updatePassword, validateConnectionForm } from '../../actions';

const mapStateToProps = (state) => ({
  emailInput: state.user.emailInput,
  passwordInput: state.user.passwordInput,
  emailIsValid: state.user.emailIsValid,
  passwordIsValid: state.user.passwordIsValid,
  emailError: state.user.emailError,
  passwordError: state.user.passwordError,
});

const mapDispatchToProps = (dispatch) => ({
  onEmailChange: (email) => dispatch(updateEmail(email)),
  onPasswordChange: (password) => dispatch(updatePassword(password)),
  logInRequest: () => dispatch(logInRequest()),
  formValidation: () => dispatch(validateConnectionForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Connection);
