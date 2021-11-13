import {
  UPDATE_EDITION_PSEUDO_INPUT,
  UPDATE_EDITION_EMAIL_INPUT,
  UPDATE_EDITION_PASSWORD_INPUT,
  VALIDATE_EDITION_PSEUDO_INPUT,
  VALIDATE_EDITION_EMAIL_INPUT,
  VALIDATE_EDITION_PASSWORD_INPUT,
  INVALIDATE_EDITION_PSEUDO_INPUT,
  INVALIDATE_EDITION_EMAIL_INPUT,
  INVALIDATE_EDITION_PASSWORD_INPUT,
  TOGGLE_PSEUDO_EDITION,
  TOGGLE_EMAIL_EDITION,
  TOGGLE_PASSWORD_EDITION,
  CHANGE_AVATAR,
} from '../actions/userEditionActions';

const initialState = {
  pseudoInput: '',
  emailInput: '',
  passwordInput: '',
  editingPseudo: false,
  editingEmail: false,
  editingPassword: false,
  pseudoIsInvalid: false,
  emailIsInvalid: false,
  passwordIsInvalid: false,
  pseudoError: 'Le pseudo n\'est pas valide.',
  emailError: 'L\'adresse email n\'est pas valide',
  passwordError: 'Le mot de passe n\'est pas valide',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_EDITION_PSEUDO_INPUT:
      return { ...state, pseudoInput: action.pseudo };
    case UPDATE_EDITION_EMAIL_INPUT:
      return { ...state, emailInput: action.email };
    case UPDATE_EDITION_PASSWORD_INPUT:
      return { ...state, passwordInput: action.password };
    case VALIDATE_EDITION_PSEUDO_INPUT:
      return { ...state, pseudoIsInvalid: false };
    case VALIDATE_EDITION_EMAIL_INPUT:
      return { ...state, emailIsInvalid: false };
    case VALIDATE_EDITION_PASSWORD_INPUT:
      return { ...state, passwordIsInvalid: false };
    case INVALIDATE_EDITION_PSEUDO_INPUT:
      return { ...state, pseudoIsInvalid: true };
    case INVALIDATE_EDITION_EMAIL_INPUT:
      return { ...state, emailIsInvalid: true };
    case INVALIDATE_EDITION_PASSWORD_INPUT:
      return { ...state, passwordIsInvalid: true };
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

export default reducer;
