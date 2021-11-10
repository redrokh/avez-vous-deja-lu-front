import API from '../utils/api';
import {
  CHANGE_PSEUDO_REQUEST,
  CHANGE_EMAIL_REQUEST,
  CHANGE_AVATAR,
  LOAD_USER,
  RELOAD_USER,
  setPseudo,
  setEmail,
  setUser,
  setAvatar,
  isConnectedToTrue,
  loadUser,
  logOut,
} from '../actions';

const usersMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CHANGE_PSEUDO_REQUEST:
      API.patch(
        `user/${store.getState().user.id}/edit`,
        {
          pseudo: store.getState().user.pseudoInput,
        },
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          if (response.status === 201) {
            store.dispatch(setPseudo());
            store.dispatch(loadUser());
          }
        })
        .catch((error) => console.log(error));
      break;
    case CHANGE_EMAIL_REQUEST:
      API.patch(
        `user/${store.getState().user.id}/edit`,
        {
          email: store.getState().user.emailInput,
        },
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          if (response.status === 201) {
            store.dispatch(setEmail());
            store.dispatch(logOut());
          }
        })
        .catch((error) => console.log(error));
      break;
    case CHANGE_AVATAR:
      store.dispatch(setAvatar(action.avatar));
      break;
    case LOAD_USER:
      console.log(store.getState().user.email);
      console.log(store.getState().user.token);
      API.post(
        'user',
        {
          email: store.getState().user.email,
        },
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          if (response.data.length > 0) {
            const user = response.data[0];
            store.dispatch(setUser(user.id, user.pseudo, user.email, user.avatar));
          }
        })
        .catch((error) => console.log(error));
      break;
    case RELOAD_USER: {
      const { token, email } = JSON.parse(localStorage.getItem('user'));
      API.post(
        'user',
        {
          email: email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then((response) => {
          if (response.data.length > 0) {
            const user = response.data[0];
            store.dispatch(setUser(user.id, user.pseudo, user.email, user.avatar));
            store.dispatch(isConnectedToTrue());
          }
        })
        .catch((error) => console.log(error));
      break;
    }
    default:
  }
  next(action);
};

export default usersMiddleware;
