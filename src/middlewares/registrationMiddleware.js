import API from '../utils/api';
import {
  REGISTRATION_REQUEST,
  VALIDATE_REGISTRATION_FORM,
  invalidateRegistrationPseudoInput,
  invalidateRegistrationEmailInput,
  invalidateRegistrationPasswordInput,
  validateRegistrationPseudoInput,
  validateRegistrationEmailInput,
  validateRegistrationPasswordInput,
  registrationRequest,
  registrationSuccess,
  registrationFailure,
} from '../actions/registrationActions';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTRATION_REQUEST:
      API.post(
        'register',
        {
          pseudo: store.getState().registration.pseudoInput,
          email: store.getState().registration.emailInput,
          password: store.getState().registration.passwordInput,
        },
      )
        .then((response) => {
          store.dispatch(registrationSuccess());
        })
        .catch((error) => {
          store.dispatch(registrationFailure());
        });
      break;
    case VALIDATE_REGISTRATION_FORM: {
      const pseudoIsValid = store.getState().registration.pseudoInput.length >= 2;
      const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      const emailIsValid = emailRegex.test(
        String(store.getState().registration.emailInput.toLowerCase()),
      );
      const passwordIsValid = store.getState().registration.passwordInput.length >= 6;

      if (!pseudoIsValid) {
        store.dispatch(invalidateRegistrationPseudoInput());
      }
      else {
        store.dispatch(validateRegistrationPseudoInput());
      }

      if (!emailIsValid) {
        store.dispatch(invalidateRegistrationEmailInput());
      }
      else {
        store.dispatch(validateRegistrationEmailInput());
      }

      if (!passwordIsValid) {
        store.dispatch(invalidateRegistrationPasswordInput());
      }
      else {
        store.dispatch(validateRegistrationPasswordInput());
      }

      if (pseudoIsValid && emailIsValid && passwordIsValid) {
        store.dispatch(registrationRequest());
      }
      break;
    }
    default:
  }
  next(action);
};

export default authMiddleware;
