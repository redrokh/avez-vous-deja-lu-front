// Import actions
import {
  SET_CONNECTION_EMAIL_INPUT,
  SET_CONNECTION_PASSWORD_INPUT,
  INVALIDATE_CONNECTION_EMAIL_INPUT,
  INVALIDATE_CONNECTION_PASSWORD_INPUT,
  VALIDATE_CONNECTION_EMAIL_INPUT,
  VALIDATE_CONNECTION_PASSWORD_INPUT,
  LOGING_IN,
  CONNECTION_FAILED,
  CONNECTION_SUCCEEDED,
  CLEAR_CONNECTION_FORM,
  RESET_AUTH_STATE,
  SET_RECONNECTING,
} from '../actions/authActions';

// Define initial state
const initialState = {
  emailInput: 'redrokh@oclock.io',
  passwordInput: 'redrokh',
  emailInputIsInvalid: false,
  passwordInputIsInvalid: false,
  emailInputError: "Le format de l'adresse email n'est pas valide",
  passwordInputError: 'Votre mot de passe doit contenir au moins 6 caractères',
  logingIn: false,
  connectionFailed: false,
  connectionSucceeded: false,
  isConnected: false,
  token: '',
  reconnecting: true,
};

// Set new state based on action dispatched
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONNECTION_EMAIL_INPUT:
      return { ...state, emailInput: action.email };
    case SET_CONNECTION_PASSWORD_INPUT:
      return { ...state, passwordInput: action.password };
    case INVALIDATE_CONNECTION_EMAIL_INPUT:
      return { ...state, emailInputIsInvalid: true };
    case INVALIDATE_CONNECTION_PASSWORD_INPUT:
      return { ...state, passwordInputIsInvalid: true };
    case VALIDATE_CONNECTION_EMAIL_INPUT:
      return { ...state, emailInputIsInvalid: false };
    case VALIDATE_CONNECTION_PASSWORD_INPUT:
      return { ...state, passwordInputIsInvalid: false };
    case LOGING_IN:
      return { ...state, logingIn: true };
    case CONNECTION_FAILED: {
      return {
        ...state,
        logingIn: false,
        connectionFailed: true,
        connectionSucceeded: false,
        isConnected: false,
        token: '',
        reconnecting: false,
      };
    }
    case CONNECTION_SUCCEEDED: {
      return {
        ...state,
        logingIn: false,
        connectionFailed: false,
        connectionSucceeded: true,
        isConnected: true,
        token: action.token,
        reconnecting: false,
      };
    }
    case CLEAR_CONNECTION_FORM: {
      const cleared = { ...initialState };
      cleared.emailInput = state.emailInput;
      cleared.isConnected = state.isConnected;
      cleared.token = state.token;
      return cleared;
    }
    case RESET_AUTH_STATE: {
      return initialState;
    }
    case SET_RECONNECTING:
      return { ...state, reconnecting: action.value };
    default:
      return state;
  }
};

// Export reducer
export default reducer;
