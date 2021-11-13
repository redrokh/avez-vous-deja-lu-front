import {
  UPDATE_REGISTRATION_PSEUDO_INPUT,
  UPDATE_REGISTRATION_EMAIL_INPUT,
  UPDATE_REGISTRATION_PASSWORD_INPUT,
  VALIDATE_REGISTRATION_PSEUDO_INPUT,
  VALIDATE_REGISTRATION_EMAIL_INPUT,
  VALIDATE_REGISTRATION_PASSWORD_INPUT,
  INVALIDATE_REGISTRATION_PSEUDO_INPUT,
  INVALIDATE_REGISTRATION_EMAIL_INPUT,
  INVALIDATE_REGISTRATION_PASSWORD_INPUT,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
} from '../actions/registrationActions';

const initialState = {
  pseudoInput: '',
  emailInput: '',
  passwordInput: '',
  pseudoIsInvalid: false,
  emailIsInvalid: false,
  passwordIsInvalid: false,
  registrationError: 'Une erreur est survenue lors de l\'envoi de la requête',
  pseudoError: 'Le pseudo n\'est pas valide.',
  emailError: 'L\'adresse email n\'est pas valide',
  passwordError: 'Le mot de passe n\'est pas valide',
  registrationFailed: false,
  registrationSucceeded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_REGISTRATION_PSEUDO_INPUT:
      return { ...state, pseudoInput: action.pseudo };
    case UPDATE_REGISTRATION_EMAIL_INPUT:
      return { ...state, emailInput: action.email };
    case UPDATE_REGISTRATION_PASSWORD_INPUT:
      return { ...state, passwordInput: action.password };
    case VALIDATE_REGISTRATION_PSEUDO_INPUT:
      return { ...state, pseudoIsInvalid: false };
    case VALIDATE_REGISTRATION_EMAIL_INPUT:
      return { ...state, emailIsInvalid: false };
    case VALIDATE_REGISTRATION_PASSWORD_INPUT:
      return { ...state, passwordIsInvalid: false };
    case INVALIDATE_REGISTRATION_PSEUDO_INPUT:
      return { ...state, pseudoIsInvalid: true };
    case INVALIDATE_REGISTRATION_EMAIL_INPUT:
      return { ...state, emailIsInvalid: true };
    case INVALIDATE_REGISTRATION_PASSWORD_INPUT:
      return { ...state, passwordIsInvalid: true };
    case REGISTRATION_SUCCESS:
      return { ...state, registrationSucceeded: true };
    case REGISTRATION_FAILURE:
      return { ...state, registrationFailed: true };
    default:
      return state;
  }
};

export default reducer;
