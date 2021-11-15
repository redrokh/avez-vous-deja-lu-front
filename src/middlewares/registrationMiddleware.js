// Import axios preconfigured object
import API from '../utils/api';

// Import actions and action creators
import {
  REGISTRATION_FORM_VALIDATION,
  REGISTER,
  invalidateRegistrationPseudoInput,
  invalidateRegistrationEmailInput,
  invalidateRegistrationPasswordInput,
  validateRegistrationPseudoInput,
  validateRegistrationEmailInput,
  validateRegistrationPasswordInput,
  register,
  registrationFailed,
  registrationSucceeded,
  clearRegistrationForm,
} from '../actions/registrationActions';

// Trigger treatment according to action type
const middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTRATION_FORM_VALIDATION: {
      // Check pseudo
      const pseudoIsValid = store.getState().registration.pseudoInput.length >= 2;

      // Check email
      const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      const emailIsValid = emailRegex.test(
        String(store.getState().registration.emailInput.toLowerCase()),
      );

      // Check password
      const passwordIsValid = store.getState().registration.passwordInput.length >= 6;

      // Set pseudo validation status
      if (!pseudoIsValid) {
        store.dispatch(invalidateRegistrationPseudoInput());
      }
      else {
        store.dispatch(validateRegistrationPseudoInput());
      }

      // Set email validation status
      if (!emailIsValid) {
        store.dispatch(invalidateRegistrationEmailInput());
      }
      else {
        store.dispatch(validateRegistrationEmailInput());
      }

      // Set password validation status
      if (!passwordIsValid) {
        store.dispatch(invalidateRegistrationPasswordInput());
      }
      else {
        store.dispatch(validateRegistrationPasswordInput());
      }

      // Ask API for token
      if (pseudoIsValid && emailIsValid && passwordIsValid) {
        store.dispatch(register());
      }
      break;
    }
    case REGISTER: {
      const { pseudoInput, emailInput, passwordInput } = store.getState().registration;
      API.post(
        'register',
        {
          pseudo: pseudoInput,
          email: emailInput,
          password: passwordInput,
        },
      )
        .then(() => {
          store.dispatch(registrationSucceeded());
          store.dispatch(clearRegistrationForm());
        })
        .catch(() => store.dispatch(registrationFailed()));
      break;
    }
    default:
  }
  next(action);
};

// Export middleware
export default middleware;
