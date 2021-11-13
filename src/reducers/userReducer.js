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
      console.log(token);
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
      console.log('set user');
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
    default:
      return state;
  }
};

export default reducer;
