// Import axios preconfigured object
import API from '../utils/api';

// Import actions and action creators
import {
  connectionFailed,
  connectionSucceeded,
} from '../actions/authActions';
import {
  LOAD_USER,
  setUser,

} from '../actions/userActions';

// Trigger treatment according to action type
const middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_USER: {
      const { email, token } = JSON.parse(localStorage.getItem('user'));
      API.post(
        'user',
        {
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then((response) => {
          // Store user data
          store.dispatch(setUser(response.data[0]));

          // Connection succeeded
          store.dispatch(
            connectionSucceeded(
              token,
            ),
          );
        })
        .catch(() => store.dispatch(connectionFailed()));
      break;
    }
    default:
  }
  next(action);
};

// Export middleware
export default middleware;
