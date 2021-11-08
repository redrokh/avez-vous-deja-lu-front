import API from '../utils/api';
import {
  LOG_IN_REQUEST,
  logInSuccess,
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
        });
      break;
    default:
  }
  next(action);
};

export default authMiddleware;
