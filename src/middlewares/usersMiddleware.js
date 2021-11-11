import API from '../utils/api';
import {
  CHANGE_PSEUDO_REQUEST,
  CHANGE_EMAIL_REQUEST,
  CHANGE_AVATAR,
  LOAD_USER,
  RELOAD_USER,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  setPseudo,
  setEmail,
  setUser,
  setAvatar,
  isConnectedToTrue,
  loadUser,
  logOut,
  toggleIsFavorite,
  loadFavorites,
  setIsLoadingUser,
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
      store.dispatch(setIsLoadingUser(true));
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
        .catch((error) => console.log(error))
        .finally(() => {
          store.dispatch(setIsLoadingUser(false));
        });
      break;
    case RELOAD_USER: {
      store.dispatch(setIsLoadingUser(true));
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
        .catch((error) => console.log(error))
        .finally(() => {
          store.dispatch(setIsLoadingUser(false));
        });
      break;
    }
    case ADD_TO_FAVORITES:
      API.post(
        `user/${store.getState().user.id}/favorite/${store.getState().anecdotes.anecdote.id}/add`,
        {},
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          if (response.status === 200) {
            store.dispatch(toggleIsFavorite());
          }
        })
        .catch((error) => console.log(error));
      break;
    case REMOVE_FROM_FAVORITES:
      API.delete(
        `user/${action.userId}/favorite/${action.anecdoteId}/delete`,
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          if (response.status === 200) {
            store.dispatch(loadFavorites());
          }
        })
        .catch((error) => console.log(error));
      break;
    default:
  }
  next(action);
};

export default usersMiddleware;
