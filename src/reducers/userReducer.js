import {
  LOG_IN_SUCCESS,
  LOG_OUT,
  SET_PSEUDO,
  TOGGLE_PSEUDO_EDITION,
  UPDATE_PSEUDO,
  SET_EMAIL,
  TOGGLE_EMAIL_EDITION,
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  SET_USER,
  SET_AVATAR,
  SET_TOKEN,
  IS_CONNECTED_TO_TRUE,
  TOGGLE_IS_FAVORITE,
  INVALIDATE_EMAIL_INPUT,
  INVALIDATE_PASSWORD_INPUT,
  VALIDATE_EMAIL_INPUT,
  VALIDATE_PASSWORD_INPUT,
} from '../actions';

const initialState = {
  id: '',
  pseudo: '',
  pseudoInput: '',
  email: '',
  emailInput: '',
  passwordInput: '',
  avatar: '',
  isConnected: false,
  editingPseudo: false,
  editingEmail: false,
  token: '',
  isFavorite: false,
  emailIsValid: true,
  passwordIsValid: true,
  emailError: 'L\'adresse email valide',
  passwordError: 'Le mot de passe n\'est pas valide',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return {
        ...state,
        email: state.emailInput,
        token: action.token,
        isConnected: true,
        passwordInput: '',
      };
    case UPDATE_PASSWORD:
      return { ...state, passwordInput: action.password };
    case LOG_OUT:
      return {
        ...state,
        isConnected: false,
        pseudo: '',
        email: '',
      };
    case SET_PSEUDO: {
      return { ...state, pseudo: state.pseudoInput };
    }
    case TOGGLE_PSEUDO_EDITION:
      return { ...state, editingPseudo: !state.editingPseudo };
    case SET_EMAIL: {
      const { token } = JSON.parse(localStorage.getItem('user'));
      localStorage.setItem('user', JSON.stringify({
        email: state.emailInput,
        token,
      }));
      return { ...state, email: state.emailInput };
    }
    case TOGGLE_EMAIL_EDITION:
      return { ...state, editingEmail: !state.editingEmail };
    case UPDATE_PSEUDO:
      return { ...state, pseudoInput: action.pseudo };
    case UPDATE_EMAIL:
      return { ...state, emailInput: action.email };
    case SET_USER:
      return {
        ...state,
        id: action.id,
        pseudo: action.pseudo,
        email: action.email,
        avatar: !action.avatar ? 'https://drive.google.com/uc?export=view&id=1iYWpjbucR26X7d0w0Pj0-vg6fJK72jQb' : action.avatar,
      };
    case SET_AVATAR:
      return { ...state, avatar: action.avatar };
    case SET_TOKEN: {
      const { token } = JSON.parse(localStorage.getItem('user'));
      return { ...state, token };
    }
    case IS_CONNECTED_TO_TRUE:
      return { ...state, isConnected: true };
    case TOGGLE_IS_FAVORITE:
      return { ...state, isFavorite: !state.isFavorite };
    case INVALIDATE_EMAIL_INPUT:
      return { ...state, emailIsValid: false };
    case INVALIDATE_PASSWORD_INPUT:
      return { ...state, passwordIsValid: false };
    case VALIDATE_EMAIL_INPUT:
      return { ...state, emailIsValid: true };
    case VALIDATE_PASSWORD_INPUT:
      return { ...state, passwordIsValid: true };
    default:
      return state;
  }
};

export default reducer;
