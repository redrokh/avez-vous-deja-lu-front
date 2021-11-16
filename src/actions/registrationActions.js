// Actions
export const SET_REGISTRATION_PSEUDO_INPUT = 'SET_REGISTRATION_PSEUDO_INPUT';
export const SET_REGISTRATION_EMAIL_INPUT = 'SET_REGISTRATION_EMAIL_INPUT';
export const SET_REGISTRATION_PASSWORD_INPUT = 'SET_REGISTRATION_PASSWORD_INPUT';

export const REGISTRATION_FORM_VALIDATION = 'REGISTRATION_FORM_VALIDATION';

export const INVALIDATE_REGISTRATION_PSEUDO_INPUT = 'INVALIDATE_REGISTRATION_PSEUDO_INPUT';
export const INVALIDATE_REGISTRATION_EMAIL_INPUT = 'INVALIDATE_REGISTRATION_EMAIL_INPUT';
export const INVALIDATE_REGISTRATION_PASSWORD_INPUT = 'INVALIDATE_REGISTRATION_PASSWORD_INPUT';

export const VALIDATE_REGISTRATION_PSEUDO_INPUT ='VALIDATE_REGISTRATION_PSEUDO_INPUT';
export const VALIDATE_REGISTRATION_EMAIL_INPUT ='VALIDATE_REGISTRATION_EMAIL_INPUT';
export const VALIDATE_REGISTRATION_PASSWORD_INPUT = 'VALIDATE_REGISTRATION_PASSWORD_INPUT';

export const REGISTER = 'REGISTER';
export const REGISTERING = 'REGISTERING';
export const REGISTRATION_FAILED = 'REGISTRATION_FAILED';
export const REGISTRATION_SUCCEEDED = 'REGISTRATION_SUCCEEDED';

export const CLEAR_REGISTRATION_FORM = 'CLEAR_REGISTRATION_FORM';
export const RESET_REGISTRATION_STATE = 'RESET_REGISTRATION_STATE';

// Action creators
export const setRegistrationPseudoInput = (pseudo) => ({
  type: SET_REGISTRATION_PSEUDO_INPUT,
  pseudo,
});

export const setRegistrationEmailInput = (email) => ({
  type: SET_REGISTRATION_EMAIL_INPUT,
  email,
});

export const setRegistrationPasswordInput = (password) => ({
  type: SET_REGISTRATION_PASSWORD_INPUT,
  password,
});

export const registrationFormValidation = () => ({
  type: REGISTRATION_FORM_VALIDATION,
});

export const invalidateRegistrationPseudoInput = () => ({
  type: INVALIDATE_REGISTRATION_PSEUDO_INPUT,
});

export const invalidateRegistrationEmailInput = () => ({
  type: INVALIDATE_REGISTRATION_EMAIL_INPUT,
});

export const invalidateRegistrationPasswordInput = () => ({
  type: INVALIDATE_REGISTRATION_PASSWORD_INPUT,
});

export const validateRegistrationPseudoInput = () => ({
  type: VALIDATE_REGISTRATION_PSEUDO_INPUT,
});

export const validateRegistrationEmailInput = () => ({
  type: VALIDATE_REGISTRATION_EMAIL_INPUT,
});

export const validateRegistrationPasswordInput = () => ({
  type: VALIDATE_REGISTRATION_PASSWORD_INPUT,
});

export const register = () => ({
  type: REGISTER,
});

export const registering = () => ({
  type: REGISTERING,
});

export const registrationFailed = () => ({
  type: REGISTRATION_FAILED,
});

export const registrationSucceeded = () => ({
  type: REGISTRATION_SUCCEEDED,
});

export const clearRegistrationForm = () => ({
  type: CLEAR_REGISTRATION_FORM,
});

export const resetRegistrationState = () => ({
  type: RESET_REGISTRATION_STATE,
});
