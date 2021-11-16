// Import axios preconfigured object
import API from '../utils/api';

// Import actions and action creators
import {
  CONNECTION_FORM_VALIDATION,
  LOG_IN,
  LOG_OUT,
  invalidateConnectionEmailInput,
  invalidateConnectionPasswordInput,
  validateConnectionEmailInput,
  validateConnectionPasswordInput,
  logIn,
  logingIn,
  connectionFailed,
  clearConnectionForm,
  resetAuthState,
} from '../actions/authActions';

import {
  loadUser,
  resetUserState,
} from '../actions/userActions';

import {
  resetAnecdoteState,
  resetAnecdotesState,
} from '../actions/anecdoteActions';

import {
  resetBestsState,
} from '../actions/bestActions';

import {
  resetLatestsState,
} from '../actions/latestActions';

// Trigger treatment according to action type
const middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CONNECTION_FORM_VALIDATION: {
      // Check email
      const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      const emailIsValid = emailRegex.test(
        String(store.getState().auth.emailInput.toLowerCase()),
      );

      // Check password
      const passwordIsValid = store.getState().auth.passwordInput.length >= 6;

      // Set email validation status
      if (!emailIsValid) {
        store.dispatch(invalidateConnectionEmailInput());
      }
      else {
        store.dispatch(validateConnectionEmailInput());
      }

      // Set password validation status
      if (!passwordIsValid) {
        store.dispatch(invalidateConnectionPasswordInput());
      }
      else {
        store.dispatch(validateConnectionPasswordInput());
      }

      // Ask API for token
      if (emailIsValid && passwordIsValid) {
        store.dispatch(logIn());
      }
      break;
    }
    case LOG_IN: {
      store.dispatch(logingIn());
      API.post(
        'login_check',
        {
          username: store.getState().auth.emailInput,
          password: store.getState().auth.passwordInput,
        },
      )
        .then((response) => {
          // Store token and email in local storage in case page is reloaded
          const user = {
            token: response.data.token,
            email: store.getState().auth.emailInput,
          };
          localStorage.setItem('user', JSON.stringify(user));

          // Get user data
          store.dispatch(loadUser());

          // Reset authReducer data
          store.dispatch(clearConnectionForm());
        })
        .catch(() => store.dispatch(connectionFailed()));
      break;
    }
    case LOG_OUT: {
      localStorage.removeItem('user');
      store.dispatch(resetUserState());
      store.dispatch(resetAuthState());
      break;
    }
    default:
  }
  next(action);
};

// Export middleware
export default middleware;
