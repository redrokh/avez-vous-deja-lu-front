import API from '../utils/api';
import {
  LOG_IN_REQUEST,
  logInSuccess,
  loadUser,
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
    default:
  }
  next(action);
};

export default authMiddleware;
