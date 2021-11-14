// Actions
export const PSEUDO_INPUT_VALIDATION = 'PSEUDO_INPUT_VALIDATION';
export const EMAIL_INPUT_VALIDATION = 'EMAIL_INPUT_VALIDATION';
export const PASSWORD_INPUT_VALIDATION = 'PASSWORD_INPUT_VALIDATION';

export const VALIDATE_USER_EDITION_PSEUDO_INPUT = 'VALIDATE_USER_EDITION_PSEUDO_INPUT';
export const VALIDATE_USER_EDITION_EMAIL_INPUT = 'VALIDATE_USER_EDITION_EMAIL_INPUT';
export const VALIDATE_USER_EDITION_PASSWORD_INPUT = 'VALIDATE_USER_EDITION_PASSWORD_INPUT';

export const INVALIDATE_USER_EDITION_PSEUDO_INPUT = 'INVALIDATE_USER_EDITION_PSEUDO_INPUT';
export const INVALIDATE_USER_EDITION_EMAIL_INPUT = 'INVALIDATE_USER_EDITION_EMAIL_INPUT';
export const INVALIDATE_USER_EDITION_PASSWORD_INPUT = 'INVALIDATE_USER_EDITION_PASSWORD_INPUT';

export const CHANGE_PSEUDO = 'CHANGE_PSEUDO';
export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const CHANGE_AVATAR = 'CHANGE_AVATAR';

export const CHANGE_PSEUDO_FAILED = 'CHANGE_PSEUDO_FAILED';
export const CHANGE_EMAIL_FAILED = 'CHANGE_EMAIL_FAILED';
export const CHANGE_PASSWORD_FAILED = 'CHANGE_PASSWORD_FAILED';
export const CHANGE_AVATAR_FAILED = 'CHANGE_AVATAR_FAILED';

export const CHANGE_PSEUDO_SUCCEEDED = 'CHANGE_PSEUDO_SUCCEEDED';
export const CHANGE_EMAIL_SUCCEEDED = 'CHANGE_EMAIL_SUCCEEDED';
export const CHANGE_PASSWORD_SUCCEEDED = 'CHANGE_PASSWORD_SUCCEEDED';
export const CHANGE_AVATAR_SUCCEEDED = 'CHANGE_AVATAR_SUCCEEDED';

export const SET_USER_EDITION_PSEUDO_INPUT = 'SET_USER_EDITION_PSEUDO_INPUT';
export const SET_USER_EDITION_EMAIL_INPUT = 'SET_USER_EDITION_EMAIL_INPUT';
export const SET_USER_EDITION_PASSWORD_INPUT = 'SET_USER_EDITION_PASSWORD_INPUT';
export const SET_USER_EDITION_AVATAR = 'SET_USER_EDITION_AVATAR';


export const TOGGLE_PSEUDO_EDITION = 'TOGGLE_PSEUDO_EDITION';
export const TOGGLE_EMAIL_EDITION = 'TOGGLE_EMAIL_EDITION';
export const TOGGLE_PASSWORD_EDITION = 'TOGGLE_PASSWORD_EDITION';

// Action creators
export const pseudoInputValidation = () => ({
  type: PSEUDO_INPUT_VALIDATION,
});

export const emailInputValidation = () => ({
  type: EMAIL_INPUT_VALIDATION,
});

export const passwordInputValidation = () => ({
  type: PASSWORD_INPUT_VALIDATION,
});

export const validateUserEditionPseudoInput = () => ({
  type: VALIDATE_USER_EDITION_PSEUDO_INPUT,
});

export const validateUserEditionEmailInput = () => ({
  type: VALIDATE_USER_EDITION_EMAIL_INPUT,
});

export const validateUserEditionPasswordInput = () => ({
  type: VALIDATE_USER_EDITION_PASSWORD_INPUT,
});

export const invalidateUserEditionPseudoInput = () => ({
  type: INVALIDATE_USER_EDITION_PSEUDO_INPUT,
});

export const invalidateUserEditionEmailInput = () => ({
  type: INVALIDATE_USER_EDITION_EMAIL_INPUT,
});

export const invalidateUserEditionPasswordInput = () => ({
  type: INVALIDATE_USER_EDITION_PASSWORD_INPUT,
});

export const changePseudo = () => ({
  type: CHANGE_PSEUDO,
});

export const changeEmail = () => ({
  type: CHANGE_EMAIL,
});

export const changePassword = () => ({
  type: CHANGE_PASSWORD,
});

export const changeAvatar = (avatar) => ({
  type: CHANGE_AVATAR,
  avatar,
});

export const changePseudoFailed = () => ({
  type: CHANGE_PSEUDO_FAILED,
});

export const changeEmailFailed = () => ({
  type: CHANGE_EMAIL_FAILED,
});

export const changePasswordFailed = () => ({
  type: CHANGE_PASSWORD_FAILED,
});

export const changeAvatarFailed = () => ({
  type: CHANGE_AVATAR_FAILED,
});

export const changePseudoSucceeded = () => ({
  type: CHANGE_PSEUDO_SUCCEEDED,
});

export const changeEmailSucceeded = () => ({
  type: CHANGE_EMAIL_SUCCEEDED,
});

export const changePasswordSucceeded = () => ({
  type: CHANGE_PASSWORD_SUCCEEDED,
});

export const changeAvatarSucceeded = () => ({
  type: CHANGE_AVATAR_SUCCEEDED,
});

export const setUserEditionPseudoInput = (pseudo) => ({
  type: SET_USER_EDITION_PSEUDO_INPUT,
  pseudo,
});
export const setUserEditionEmailInput = (email) => ({
  type: SET_USER_EDITION_EMAIL_INPUT,
  email,
});
export const setUserEditionPasswordInput = (password) => ({
  type: SET_USER_EDITION_PASSWORD_INPUT,
  password,
});

export const setUserEditionAvatar = (avatar) => ({
  type: SET_USER__EDITION_AVATAR,
  avatar,
});

export const togglePseudoEdition = () => ({
  type: TOGGLE_PSEUDO_EDITION,
});

export const toggleEmailEdition = () => ({
  type: TOGGLE_EMAIL_EDITION,
});

export const togglePasswordEdition = () => ({
  type: TOGGLE_PASSWORD_EDITION,
});
