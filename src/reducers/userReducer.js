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
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return {
        ...state,
        token: action.token,
        isConnected: true,
        emailInput: '',
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
    case SET_EMAIL:
      return { ...state, email: state.emailInput };
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
        avatar: 'https://drive.google.com/uc?export=view&id=1iYWpjbucR26X7d0w0Pj0-vg6fJK72jQb',
      };
    case SET_AVATAR:
      return { ...state, avatar: action.avatar };
    default:
      return state;
  }
};

export default reducer;
