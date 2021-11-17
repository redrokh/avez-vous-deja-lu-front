// Import actions
import {
  SET_REGISTRATION_PSEUDO_INPUT,
  SET_REGISTRATION_EMAIL_INPUT,
  SET_REGISTRATION_PASSWORD_INPUT,
  INVALIDATE_REGISTRATION_PSEUDO_INPUT,
  INVALIDATE_REGISTRATION_EMAIL_INPUT,
  INVALIDATE_REGISTRATION_PASSWORD_INPUT,
  VALIDATE_REGISTRATION_PSEUDO_INPUT,
  VALIDATE_REGISTRATION_EMAIL_INPUT,
  VALIDATE_REGISTRATION_PASSWORD_INPUT,
  REGISTERING,
  REGISTRATION_FAILED,
  REGISTRATION_SUCCEEDED,
  CLEAR_REGISTRATION_FORM,
  RESET_REGISTRATION_STATE,
} from '../actions/registrationActions';

// Define initial state
const initialState = {
  pseudoInput: '',
  emailInput: '',
  passwordInput: '',
  pseudoInputIsInvalid: false,
  emailInputIsInvalid: false,
  passwordInputIsInvalid: false,
  pseudoInputError: 'Votre pseudo doit contenir au moins 2 caractères',
  emailInputError: "Le format de l'adresse email n'est pas valide",
  passwordInputError: 'Votre mot de passe doit contenir au moins 6 caractères',
  registrationError: 'Adresse email ou pseudo déjà pris',
  registering: false,
  registrationFailed: false,
  registrationSucceeded: false,
};

// Set new state based on action dispatched
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REGISTRATION_PSEUDO_INPUT:
      return { ...state, pseudoInput: action.pseudo };
    case SET_REGISTRATION_EMAIL_INPUT:
      return { ...state, emailInput: action.email };
    case SET_REGISTRATION_PASSWORD_INPUT:
      return { ...state, passwordInput: action.password };
    case INVALIDATE_REGISTRATION_PSEUDO_INPUT:
      return { ...state, pseudoInputIsInvalid: true };
    case INVALIDATE_REGISTRATION_EMAIL_INPUT:
      return { ...state, emailInputIsInvalid: true };
    case INVALIDATE_REGISTRATION_PASSWORD_INPUT:
      return { ...state, passwordInputIsInvalid: true };
    case VALIDATE_REGISTRATION_PSEUDO_INPUT:
      return { ...state, pseudoInputIsInvalid: false };
    case VALIDATE_REGISTRATION_EMAIL_INPUT:
      return { ...state, emailInputIsInvalid: false };
    case VALIDATE_REGISTRATION_PASSWORD_INPUT:
      return { ...state, passwordInputIsInvalid: false };
    case REGISTERING:
      return {
        ...state,
        registering: true,
        registrationFailed: false,
        registrationSucceeded: false,
      };
    case REGISTRATION_FAILED: {
      return {
        ...state,
        registering: false,
        registrationFailed: true,
        registrationSucceeded: false,
      };
    }
    case REGISTRATION_SUCCEEDED: {
      return {
        ...state,
        registering: false,
        registrationFailed: false,
        registrationSucceeded: true,
      };
    }
    case CLEAR_REGISTRATION_FORM: {
      const cleared = { ...initialState };
      cleared.registrationSucceeded = state.registrationSucceeded;
      cleared.registrationFailed = state.registrationFailed;
      return cleared;
    }
    case RESET_REGISTRATION_STATE: {
      return initialState;
    }
    default:
      return state;
  }
};

// Export reducer
export default reducer;
