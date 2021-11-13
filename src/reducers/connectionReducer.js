import {
  VALIDATE_CONNECTION_EMAIL_INPUT,
  VALIDATE_CONNECTION_PASSWORD_INPUT,
  VALIDATE_CONNECTION_FORM,
  INVALIDATE_CONNECTION_EMAIL_INPUT,
  INVALIDATE_CONNECTION_PASSWORD_INPUT,
  INVALIDATE_CONNECTION_FORM,
  UPDATE_CONNECTION_EMAIL_INPUT,
  UPDATE_CONNECTION_PASSWORD_INPUT,
} from '../actions/connectionActions';

const initialState = {
  emailInput: '',
  passwordInput: '',
  emailIsInvalid: false,
  passwordIsInvalid: false,
  connectionFailed: false,
  emailError: 'L\'adresse email n\'est pas valide',
  passwordError: 'Le mot de passe n\'est pas valide',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case VALIDATE_CONNECTION_EMAIL_INPUT:
      return { ...state, emailIsInvalid: false };
    case VALIDATE_CONNECTION_PASSWORD_INPUT:
      return { ...state, passwordIsInvalid: false };
    case VALIDATE_CONNECTION_FORM:
      return { ...state, connectionFailed: false };
    case INVALIDATE_CONNECTION_EMAIL_INPUT:
      return { ...state, emailIsInvalid: true };
    case INVALIDATE_CONNECTION_PASSWORD_INPUT:
      return { ...state, passwordIsInvalid: true };
    case INVALIDATE_CONNECTION_FORM:
      return { ...state, connectionFailed: true };
    case UPDATE_CONNECTION_EMAIL_INPUT:
      return { ...state, emailInput: action.email };
    case UPDATE_CONNECTION_PASSWORD_INPUT:
      return { ...state, passwordInput: action.password };
    default:
      return state;
  }
};

export default reducer;
