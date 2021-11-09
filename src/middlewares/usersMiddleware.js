import API from '../utils/api';
import {
  CHANGE_PSEUDO_REQUEST,
  CHANGE_EMAIL_REQUEST,
  CHANGE_AVATAR,
  LOAD_USER,
  setPseudo,
  setEmail,
  setUser,
  setAvatar,
} from '../actions';

import userData from '../utils/user';
import axios from 'axios';

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
      store.dispatch(setAvatar(action.avatar));
      break;
    case LOAD_USER:
      API.post(
        'user/',
        {
          data: {
            email: store.getState().user.emailInput,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          const user = response.data;
          console.log(response);
          store.dispatch(setUser(user.id, user.pseudo, user.email, user.avatar));
          return response.data;
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.log(error));
      break;
    default:
  }
  next(action);
};

export default usersMiddleware;
