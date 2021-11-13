import API from '../utils/api';
import {
  LOG_IN_REQUEST,
  logInSuccess,
  loadUser,
  logInRequest,
} from '../actions';

import {
  CONNECTION_FORM_VALIDATION,
  invalidateConnectionEmailInput,
  invalidateConnectionPasswordInput,
  invalidateConnectionForm,
  validateConnectionEmailInput,
  validateConnectionPasswordInput,
  validateConnectionForm,
} from '../actions/connectionActions';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      API.post(
        'login_check',
        {
          username: store.getState().connection.emailInput,
          password: store.getState().connection.passwordInput,
        },
      )
        .then((response) => {
          console.log('?');
          store.dispatch(logInSuccess(response.data.token));
          store.dispatch(validateConnectionForm());
          store.dispatch(loadUser());
          const user = {
            token: response.data.token,
            email: store.getState().user.emailInput,
          };
          localStorage.setItem('user', JSON.stringify(user));
        })
        .catch((error) => store.dispatch(invalidateConnectionForm()));
      break;
    case CONNECTION_FORM_VALIDATION: {
      const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      const emailIsValid = emailRegex.test(
        String(store.getState().connection.emailInput.toLowerCase()),
      );
      const passwordIsValid = store.getState().connection.passwordInput.length >= 6;
      if (!emailIsValid) {
        store.dispatch(invalidateConnectionEmailInput());
      }
      else {
        store.dispatch(validateConnectionEmailInput());
      }
      if (!passwordIsValid) {
        store.dispatch(invalidateConnectionPasswordInput());
      }
      else {
        store.dispatch(validateConnectionPasswordInput());
      }
      if (emailIsValid && passwordIsValid) {
        store.dispatch(logInRequest());
      }
      break;
    }
    default:
  }
  next(action);
};

export default authMiddleware;
