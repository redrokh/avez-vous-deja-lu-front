import axios from 'axios';
import {
  LOG_IN_REQUEST,
  CHANGE_PSEUDO_REQUEST,
  CHANGE_EMAIL_REQUEST,
  CHANGE_AVATAR,
  LOAD_USER,
  logInSuccess,
  setPseudo,
  setEmail,
  setUser,
  setAvatar,
} from '../actions';

import user from '../utils/user';

const usersMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CHANGE_PSEUDO_REQUEST:
      console.log('change pseudo request');
      store.dispatch(setPseudo());
      break;
    case CHANGE_EMAIL_REQUEST:
      console.log('change email request');
      store.dispatch(setEmail());
      break;
    case CHANGE_AVATAR:
      console.log('change avatar');
      console.log(action);
      store.dispatch(setAvatar(action.avatar));
      break;
    case LOAD_USER:
      console.log('load user');
      store.dispatch(setUser(user.id, user.pseudo, user.email, user.avatar));
      break;
    default:
  }
  next(action);
};

export default usersMiddleware;
