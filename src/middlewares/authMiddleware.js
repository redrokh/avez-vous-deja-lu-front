import API from '../utils/api';
import {
  LOG_IN_REQUEST,
  CONNECTION_FORM_VALIDATION,
  logInSuccess,
  loadUser,
  invalidateEmailInput,
  invalidatePasswordInput,
  validateEmailInput,
  validatePasswordInput,
  logInRequest,
} from '../actions';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      API.post(
        'login_check',
        {
          username: store.getState().user.emailInput,
          password: store.getState().user.passwordInput,
        },
      )
        .then((response) => {
          store.dispatch(logInSuccess(response.data.token));
          store.dispatch(loadUser());
          const user = {
            token: response.data.token,
            email: store.getState().user.emailInput,
          };
          localStorage.setItem('user', JSON.stringify(user));
        });
      break;
    case CONNECTION_FORM_VALIDATION: {
      const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      const emailIsValid = emailRegex.test(String(store.getState().user.emailInput.toLowerCase()));
      const passwordIsValid = store.getState().user.passwordInput.length >= 4;
      if (!emailIsValid) {
        store.dispatch(invalidateEmailInput());
      }
      else {
        store.dispatch(validateEmailInput());
      }
      if (!passwordIsValid) {
        store.dispatch(invalidatePasswordInput());
      }
      else {
        store.dispatch(validatePasswordInput());
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
