import {
  LOG_IN_SUCCESS,
  LOG_OUT,
  SET_PSEUDO,
  EDIT_PSEUDO,
  SET_EMAIL,
  EDIT_EMAIL,
  SET_USER,
} from '../actions';

const initialState = {
  id: '',
  pseudo: '',
  email: '',
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
    case SET_PSEUDO:
      console.log('set pseudo');
      return state;
    case EDIT_PSEUDO:
      console.log('edit pseudo');
      return state;
    case SET_EMAIL:
      console.log('set email');
      return state;
    case EDIT_EMAIL:
      console.log('edit email');
      return state;
    case SET_USER:
      console.log('set user');
      return {
        ...state,
        id: action.id,
        pseudo: action.pseudo,
        email: action.email,
        avatar: action.avatar,
      };
    default:
      return state;
  }
};

export default reducer;
