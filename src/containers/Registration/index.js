// import from libraries
import { connect } from 'react-redux';

// import components
import Registration from '../../components/Registration';

import {
  updateRegistrationPseudoInput,
  updateRegistrationEmailInput,
  updateRegistrationPasswordInput,
  validateRegistrationForm,
} from '../../actions/registrationActions';

const mapStateToProps = (state) => ({
  pseudoInput: state.registration.pseudoInput,
  emailInput: state.registration.emailInput,
  passwordInput: state.registration.passwordInput,
  pseudoIsInvalid: state.registration.pseudoIsInvalid,
  emailIsInvalid: state.registration.emailIsInvalid,
  passwordIsInvalid: state.registration.passwordIsInvalid,
  pseudoError: state.registration.pseudoError,
  emailError: state.registration.emailError,
  passwordError: state.registration.passwordError,
  registrationFailed: state.registration.registrationFailed,
  registrationSucceeded: state.registration.registrationSucceeded,
  registrationError: state.registration.registrationError,
});

const mapDispatchToProps = (dispatch) => ({
  onPseudoChange: (pseudo) => dispatch(updateRegistrationPseudoInput(pseudo)),
  onEmailChange: (email) => dispatch(updateRegistrationEmailInput(email)),
  onPasswordChange: (password) => dispatch(updateRegistrationPasswordInput(password)),
  formValidation: () => dispatch(validateRegistrationForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
