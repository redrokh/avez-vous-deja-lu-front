import API from '../utils/api';
import {
  EDITION_PSEUDO_INPUT_VALIDATION,
  EDITION_EMAIL_INPUT_VALIDATION,
  EDITION_PASSWORD_INPUT_VALIDATION,
  CHANGE_PSEUDO_REQUEST,
  CHANGE_EMAIL_REQUEST,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_AVATAR_REQUEST,
  CHANGE_AVATAR,
  changePseudoRequest,
  changeEmailRequest,
  changePasswordRequest,
  changeAvatarRequest,
  invalidateEditionPseudoInput,
  invalidateEditionEmailInput,
  invalidateEditionPasswordInput,
  validateEditionPseudoInput,
  validateEditionEmailInput,
  validateEditionPasswordInput,
  togglePseudoEdition,
  toggleEmailEdition,
  togglePasswordEdition,
} from '../actions/userEditionActions';

import {
  loadUser,
  setAvatar,
  logOut,
} from '../actions';

const userEditionMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case EDITION_PSEUDO_INPUT_VALIDATION: {
      const pseudoIsValid = store.getState().userEdition.pseudoInput.length >= 2;
      if (!pseudoIsValid) {
        store.dispatch(invalidateEditionPseudoInput());
      }
      else {
        store.dispatch(validateEditionPseudoInput());
        store.dispatch(changePseudoRequest());
        store.dispatch(togglePseudoEdition());
      }
      break;
    }
    case EDITION_EMAIL_INPUT_VALIDATION: {
      const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      const emailIsValid = emailRegex.test(
        String(store.getState().userEdition.emailInput.toLowerCase()),
      );
      if (!emailIsValid) {
        store.dispatch(invalidateEditionEmailInput());
      }
      else {
        store.dispatch(validateEditionEmailInput());
        store.dispatch(changeEmailRequest());
        store.dispatch(toggleEmailEdition());
      }
      break;
    }
    case EDITION_PASSWORD_INPUT_VALIDATION: {
      const passwordIsValid = store.getState().userEdition.passwordInput.length >= 6;
      if (!passwordIsValid) {
        store.dispatch(invalidateEditionPasswordInput());
      }
      else {
        store.dispatch(validateEditionPasswordInput());
        store.dispatch(changePasswordRequest());
        store.dispatch(togglePasswordEdition());
      }
      break;
    }
    case CHANGE_PSEUDO_REQUEST:
      API.patch(
        `user/${store.getState().user.id}/edit`,
        {
          pseudo: store.getState().userEdition.pseudoInput,
        },
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          if (response.status === 201) {
            store.dispatch(loadUser());
          }
        })
        .catch((error) => console.log(error));
      break;
    case CHANGE_EMAIL_REQUEST:
      API.patch(
        `user/${store.getState().user.id}/edit`,
        {
          email: store.getState().userEdition.emailInput,
        },
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          if (response.status === 201) {
            store.dispatch(logOut());
          }
        })
        .catch((error) => console.log(error));
      break;
    case CHANGE_PASSWORD_REQUEST:
      API.patch(
        `user/${store.getState().user.id}/edit`,
        {
          password: store.getState().userEdition.passwordInput,
        },
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          if (response.status === 201) {
            store.dispatch(logOut());
          }
        })
        .catch((error) => console.log(error));
      break;
    case CHANGE_AVATAR:
      store.dispatch(setAvatar(action.avatar));
      break;
    default:
  }
  next(action);
};

export default userEditionMiddleware;
