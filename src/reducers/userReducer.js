import {
  LOG_IN_SUCCESS,
  LOG_OUT,
  SET_PSEUDO,
  TOGGLE_PSEUDO_EDITION,
  UPDATE_PSEUDO,
  SET_EMAIL,
  TOGGLE_EMAIL_EDITION,
  UPDATE_EMAIL,
  SET_USER,
  SET_AVATAR,
} from '../actions';

const initialState = {
  id: '',
  pseudo: '',
  newPseudo: '',
  email: '',
  newEmail: '',
  avatar: '',
  isConnected: false,
  editingPseudo: false,
  editingEmail: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      console.log('log in success');
      return state;
    case LOG_OUT:
      console.log('log out');
      return state;
    case SET_PSEUDO: {
      return { ...state, pseudo: state.newPseudo };
    }
    case TOGGLE_PSEUDO_EDITION:
      return { ...state, editingPseudo: !state.editingPseudo };
    case SET_EMAIL:
      return { ...state, email: state.newEmail };
    case TOGGLE_EMAIL_EDITION:
      return { ...state, editingEmail: !state.editingEmail };
    case UPDATE_PSEUDO:
      return { ...state, newPseudo: action.newPseudo };
    case UPDATE_EMAIL:
      return { ...state, newEmail: action.newEmail };
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
