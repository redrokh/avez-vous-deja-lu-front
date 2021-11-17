// Import from libraries
import { connect } from 'react-redux';

// Import from app components
import Registration from '../../components/Registration';

// Import actions and action creators
import {
  setRegistrationPseudoInput,
  setRegistrationEmailInput,
  setRegistrationPasswordInput,
  registrationFormValidation,
  resetRegistrationState,
} from '../../actions/registrationActions';

// Link component props to state
const mapStateToProps = (state) => ({
  pseudoInput: state.registration.pseudoInput,
  emailInput: state.registration.emailInput,
  passwordInput: state.registration.passwordInput,
  pseudoInputIsInvalid: state.registration.pseudoInputIsInvalid,
  emailInputIsInvalid: state.registration.emailInputIsInvalid,
  passwordInputIsInvalid: state.registration.passwordInputIsInvalid,
  pseudoInputError: state.registration.pseudoInputError,
  emailInputError: state.registration.emailInputError,
  passwordInputError: state.registration.passwordInputError,
  registrationError: state.registration.registrationError,
  registering: state.registration.registering,
  registrationFailed: state.registration.registrationFailed,
  registrationSucceeded: state.registration.registrationSucceeded,
});

// Link component props to actions
const mapDispatchToProps = (dispatch) => ({
  onPseudoInputChange: (pseudo) => dispatch(setRegistrationPseudoInput(pseudo)),
  onEmailInputChange: (email) => dispatch(setRegistrationEmailInput(email)),
  onPasswordInputChange: (password) => dispatch(setRegistrationPasswordInput(password)),
  formValidation: () => dispatch(registrationFormValidation()),
  resetRegistrationState: () => dispatch(resetRegistrationState()),
});

// Export container
export default connect(mapStateToProps, mapDispatchToProps)(Registration);
