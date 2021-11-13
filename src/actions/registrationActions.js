// Actions
export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
export const VALIDATE_REGISTRATION_FORM = 'VALIDATE_REGISTRATION_FORM';
export const VALIDATE_REGISTRATION_PSEUDO_INPUT = 'VALIDATE_REGISTRATION_PSEUDO_INPUT';
export const VALIDATE_REGISTRATION_EMAIL_INPUT = 'VALIDATE_REGISTRATION_EMAIL_INPUT';
export const VALIDATE_REGISTRATION_PASSWORD_INPUT = 'VALIDATE_REGISTRATION_PASSWORD_INPUT';
export const INVALIDATE_REGISTRATION_PSEUDO_INPUT = 'INVALIDATE_REGISTRATION_PSEUDO_INPUT';
export const INVALIDATE_REGISTRATION_EMAIL_INPUT = 'INVALIDATE_REGISTRATION_EMAIL_INPUT';
export const INVALIDATE_REGISTRATION_PASSWORD_INPUT = 'INVALIDATE_REGISTRATION_PASSWORD_INPUT';

export const UPDATE_REGISTRATION_PSEUDO_INPUT = 'UPDATE_REGISTRATION_PSEUDO_INPUT';
export const UPDATE_REGISTRATION_EMAIL_INPUT = 'UPDATE_REGISTRATION_EMAIL_INPUT';
export const UPDATE_REGISTRATION_PASSWORD_INPUT = 'UPDATE_REGISTRATION_PASSWORD_INPUT';

export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE';

// Action creators
export const registrationRequest = () => ({
  type: REGISTRATION_REQUEST,
});

export const validateRegistrationForm = () => ({
  type: VALIDATE_REGISTRATION_FORM,
});

export const validateRegistrationPseudoInput = (context) => ({
  type: VALIDATE_REGISTRATION_PSEUDO_INPUT,
  context,
});

export const validateRegistrationEmailInput = (context) => ({
  context,
  type: VALIDATE_REGISTRATION_EMAIL_INPUT,
});

export const validateRegistrationPasswordInput = (context) => ({
  type: VALIDATE_REGISTRATION_PASSWORD_INPUT,
  context,
});

export const invalidateRegistrationPseudoInput = (context) => ({
  type: INVALIDATE_REGISTRATION_PSEUDO_INPUT,
  context,
});

export const invalidateRegistrationEmailInput = (context) => ({
  type: INVALIDATE_REGISTRATION_EMAIL_INPUT,
  context,
});

export const invalidateRegistrationPasswordInput = (context) => ({
  type: INVALIDATE_REGISTRATION_PASSWORD_INPUT,
  context,
});

export const updateRegistrationPseudoInput = (pseudo) => ({
  type: UPDATE_REGISTRATION_PSEUDO_INPUT,
  pseudo,
});

export const updateRegistrationEmailInput = (email) => ({
  type: UPDATE_REGISTRATION_EMAIL_INPUT,
  email,
});

export const updateRegistrationPasswordInput = (password) => ({
  type: UPDATE_REGISTRATION_PASSWORD_INPUT,
  password,
});

export const registrationSuccess = () => ({
  type: REGISTRATION_SUCCESS,
});

export const registrationFailure = () => ({
  type: REGISTRATION_FAILURE,
});
