// Actions
export const CONNECTION_FORM_VALIDATION = 'CONNECTION_FORM_VALIDATION';
export const VALIDATE_CONNECTION_EMAIL_INPUT = 'VALIDATE_CONNECTION_EMAIL_INPUT';
export const VALIDATE_CONNECTION_PASSWORD_INPUT = 'VALIDATE_CONNECTION_PASSWORD_INPUT';
export const VALIDATE_CONNECTION_FORM = 'VALIDATE_CONNECTION_FORM';
export const INVALIDATE_CONNECTION_EMAIL_INPUT = 'INVALIDATE_CONNECTION_EMAIL_INPUT';
export const INVALIDATE_CONNECTION_PASSWORD_INPUT = 'INVALIDATE_CONNECTION_PASSWORD_INPUT';
export const INVALIDATE_CONNECTION_FORM = 'INVALIDATE_CONNECTION_FORM';
export const UPDATE_CONNECTION_EMAIL_INPUT = 'UPDATE_CONNECTION_EMAIL_INPUT';
export const UPDATE_CONNECTION_PASSWORD_INPUT = 'UPDATE_CONNECTION_PASSWORD_INPUT';

// Action creators
export const connectionFormValidation = () => ({
  type: CONNECTION_FORM_VALIDATION,
});

export const validateConnectionEmailInput = (context) => ({
  context,
  type: VALIDATE_CONNECTION_EMAIL_INPUT,
});

export const validateConnectionPasswordInput = (context) => ({
  type: VALIDATE_CONNECTION_PASSWORD_INPUT,
  context,
});

export const validateConnectionForm = () => ({
  type: VALIDATE_CONNECTION_FORM,
});

export const invalidateConnectionEmailInput = (context) => ({
  type: INVALIDATE_CONNECTION_EMAIL_INPUT,
  context,
});

export const invalidateConnectionPasswordInput = (context) => ({
  type: INVALIDATE_CONNECTION_PASSWORD_INPUT,
  context,
});

export const invalidateConnectionForm = () => ({
  type: INVALIDATE_CONNECTION_FORM,
});

export const updateConnectionEmailInput = (email) => ({
  type: UPDATE_CONNECTION_EMAIL_INPUT,
  email,
});

export const updateConnectionPasswordInput = (password) => ({
  type: UPDATE_CONNECTION_PASSWORD_INPUT,
  password,
});
