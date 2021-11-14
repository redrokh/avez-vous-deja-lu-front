// Import actions
import {
  SET_USER_EDITION_PSEUDO_INPUT,
  SET_USER_EDITION_EMAIL_INPUT,
  SET_USER_EDITION_PASSWORD_INPUT,
  SET_USER_EDITION_AVATAR,
  INVALIDATE_USER_EDITION_PSEUDO_INPUT,
  INVALIDATE_USER_EDITION_EMAIL_INPUT,
  INVALIDATE_USER_EDITION_PASSWORD_INPUT,
  VALIDATE_USER_EDITION_PSEUDO_INPUT,
  VALIDATE_USER_EDITION_EMAIL_INPUT,
  VALIDATE_USER_EDITION_PASSWORD_INPUT,
  TOGGLE_PSEUDO_EDITION,
  TOGGLE_EMAIL_EDITION,
  TOGGLE_PASSWORD_EDITION,
} from '../actions/userEditionActions';

// Define initial state
const initialState = {
  editingPseudo: false,
  editingEmail: false,
  editingPassword: false,
  pseudoInput: '',
  emailInput: '',
  passwordInput: '',
  pseudoInputIsInvalid: false,
  emailInputIsInvalid: false,
  passwordInputIsInvalid: false,
  pseudoInputError: 'Votre pseudo doit contenir au moins 2 caractères',
  emailInputError: "Le format de l'adresse email n'est pas valide",
  passwordInputError: 'Votre mot de passe doit contenir au moins 6 caractères',
  registrationFailed: false,
  registrationSucceeded: false,
};

// Set new state based on action dispatched
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_EDITION_PSEUDO_INPUT:
      return { ...state, pseudoInput: action.pseudo };
    case SET_USER_EDITION_EMAIL_INPUT:
      return { ...state, emailInput: action.email };
    case SET_USER_EDITION_PASSWORD_INPUT:
      return { ...state, passwordInput: action.password };
    case SET_USER_EDITION_AVATAR:
      return { ...state, avatar: action.avatar };
    case INVALIDATE_USER_EDITION_PSEUDO_INPUT:
      return { ...state, pseudoInputIsInvalid: true };
    case INVALIDATE_USER_EDITION_EMAIL_INPUT:
      return { ...state, emailInputIsInvalid: true };
    case INVALIDATE_USER_EDITION_PASSWORD_INPUT:
      return { ...state, passwordInputIsInvalid: true };
    case VALIDATE_USER_EDITION_PSEUDO_INPUT:
      return { ...state, pseudoInputIsInvalid: false };
    case VALIDATE_USER_EDITION_EMAIL_INPUT:
      return { ...state, emailInputIsInvalid: false };
    case VALIDATE_USER_EDITION_PASSWORD_INPUT:
      return { ...state, passwordInputIsInvalid: false };
    case TOGGLE_PSEUDO_EDITION:
      return { ...state, editingPseudo: !state.editingPseudo };
    case TOGGLE_EMAIL_EDITION:
      return { ...state, editingEmail: !state.editingEmail };
    case TOGGLE_PASSWORD_EDITION:
      return { ...state, editingPassword: !state.editingPassword };
    default:
      return state;
  }
};

// Export reducer
export default reducer;