// import from libraries
import { connect } from 'react-redux';

// import components
import Connection from '../../components/Connection';

import { logInRequest, updateEmail, updatePassword } from '../../actions';

const mapStateToProps = (state) => ({
  emailInput: state.user.emailInput,
  passwordInput: state.user.passwordInput,
});

const mapDispatchToProps = (dispatch) => ({
  onEmailChange: (email) => dispatch(updateEmail(email)),
  onPasswordChange: (password) => dispatch(updatePassword(password)),
  logInRequest: () => dispatch(logInRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Connection);
