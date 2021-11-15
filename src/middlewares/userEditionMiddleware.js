// Import axios preconfigured object
import API from '../utils/api';

// Import actions and action creators
import {
  PSEUDO_INPUT_VALIDATION,
  EMAIL_INPUT_VALIDATION,
  PASSWORD_INPUT_VALIDATION,
  CHANGE_PSEUDO,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  CHANGE_AVATAR,
  validateUserEditionPseudoInput,
  validateUserEditionEmailInput,
  validateUserEditionPasswordInput,
  invalidateUserEditionPseudoInput,
  invalidateUserEditionEmailInput,
  invalidateUserEditionPasswordInput,
  togglePseudoEdition,
  toggleEmailEdition,
  togglePasswordEdition,
  changePseudo,
  changeEmail,
  changePassword,
} from '../actions/userEditionActions';

import { loadUser } from '../actions/userActions';

import { logOut } from '../actions/authActions';

// Trigger treatment according to action type
const middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case PSEUDO_INPUT_VALIDATION: {
      const pseudoIsValid = store.getState().userEdition.pseudoInput.length >= 2;
      if (!pseudoIsValid) {
        store.dispatch(invalidateUserEditionPseudoInput());
      }
      else {
        store.dispatch(validateUserEditionPseudoInput());
        store.dispatch(changePseudo());
        store.dispatch(togglePseudoEdition());
      }
      break;
    }
    case EMAIL_INPUT_VALIDATION: {
      const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      const emailIsValid = emailRegex.test(
        String(store.getState().userEdition.emailInput.toLowerCase()),
      );
      if (!emailIsValid) {
        store.dispatch(invalidateUserEditionEmailInput());
      }
      else {
        store.dispatch(validateUserEditionEmailInput());
        store.dispatch(changeEmail());
        store.dispatch(toggleEmailEdition());
      }
      break;
    }
    case PASSWORD_INPUT_VALIDATION: {
      const passwordIsValid = store.getState().userEdition.passwordInput.length >= 6;
      if (!passwordIsValid) {
        store.dispatch(invalidateUserEditionPasswordInput());
      }
      else {
        store.dispatch(validateUserEditionPasswordInput());
        store.dispatch(changePassword());
        store.dispatch(togglePasswordEdition());
      }
      break;
    }
    case CHANGE_PSEUDO:
      API.patch(
        `user/${store.getState().user.id}/edit`,
        {
          pseudo: store.getState().userEdition.pseudoInput,
        },
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
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
    case CHANGE_EMAIL:
      API.patch(
        `user/${store.getState().user.id}/edit`,
        {
          email: store.getState().userEdition.emailInput,
        },
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
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
    case CHANGE_PASSWORD:
      API.patch(
        `user/${store.getState().user.id}/edit`,
        {
          password: store.getState().userEdition.passwordInput,
        },
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
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
      API.patch(
        `user/${store.getState().user.id}/edit`,
        {
          avatar: `${action.avatar}`,
        },
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        },
      )
        .then(() => {
          store.dispatch(loadUser());
        })
        .catch((error) => console.log(error));
      break;
    default:
  }
  next(action);
};

// Export middleware
export default middleware;
