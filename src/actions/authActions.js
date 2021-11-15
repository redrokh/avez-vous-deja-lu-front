// Actions
export const SET_CONNECTION_EMAIL_INPUT = 'SET_CONNECTION_EMAIL_INPUT';
export const SET_CONNECTION_PASSWORD_INPUT = 'SET_CONNECTION_PASSWORD_INPUT';

export const CONNECTION_FORM_VALIDATION = 'CONNECTION_FORM_VALIDATION';

export const INVALIDATE_CONNECTION_EMAIL_INPUT = 'INVALIDATE_CONNECTION_EMAIL_INPUT';
export const INVALIDATE_CONNECTION_PASSWORD_INPUT = 'INVALIDATE_CONNECTIONPASSWORD_INPUT';

export const VALIDATE_CONNECTION_EMAIL_INPUT = 'VALIDATE_CONNECTION_EMAIL_INPUT';
export const VALIDATE_CONNECTION_PASSWORD_INPUT = 'VALIDATE_CONNECTION_PASSWORD_INPUT';

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export const LOGING_IN = 'LOGING_IN';

export const CONNECTION_FAILED = 'CONNECTION_FAILED';
export const CONNECTION_SUCCEEDED = 'CONNECTION_SUCCEEDED';

export const CLEAR_CONNECTION_FORM = 'CLEAR_CONNECTION_FORM';
export const RESET_AUTH_STATE = 'RESET_AUTH_STATE';

export const SET_RECONNECTING = 'SET_RECONNECTING';

// Action creators
export const setConnectionEmailInput = (email) => ({
  type: SET_CONNECTION_EMAIL_INPUT,
  email,
});

export const setConnectionPasswordInput = (password) => ({
  type: SET_CONNECTION_PASSWORD_INPUT,
  password,
});

export const connectionFormValidation = () => ({
  type: CONNECTION_FORM_VALIDATION,
});

export const invalidateConnectionEmailInput = () => ({
  type: INVALIDATE_CONNECTION_EMAIL_INPUT,
});

export const invalidateConnectionPasswordInput = () => ({
  type: INVALIDATE_CONNECTION_PASSWORD_INPUT,
});

export const validateConnectionEmailInput = () => ({
  type: VALIDATE_CONNECTION_EMAIL_INPUT,
});

export const validateConnectionPasswordInput = () => ({
  type: VALIDATE_CONNECTION_PASSWORD_INPUT,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const logingIn = () => ({
  type: LOGING_IN,
});

export const connectionFailed = () => ({
  type: CONNECTION_FAILED,
});

export const connectionSucceeded = (token) => ({
  type: CONNECTION_SUCCEEDED,
  token,
});

export const clearConnectionForm = () => ({
  type: CLEAR_CONNECTION_FORM,
});

export const resetAuthState = () => ({
  type: RESET_AUTH_STATE,
});

export const setReconnecting = (value) => ({
  type: SET_RECONNECTING,
  value
});
