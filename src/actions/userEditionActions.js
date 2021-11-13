// Actions
export const EDITION_PSEUDO_INPUT_VALIDATION = 'EDITION_PSEUDO_INPUT_VALIDATION';
export const EDITION_EMAIL_INPUT_VALIDATION = 'EDITION_EMAIL_INPUT_VALIDATION';
export const EDITION_PASSWORD_INPUT_VALIDATION = 'EDITION_PASSWORD_INPUT_VALIDATION';

export const VALIDATE_EDITION_PSEUDO_INPUT = 'VALIDATE_EDITION_PSEUDO_INPUT';
export const VALIDATE_EDITION_EMAIL_INPUT = 'VALIDATE_EDITION_EMAIL_INPUT';
export const VALIDATE_EDITION_PASSWORD_INPUT = 'VALIDATE_EDITION_PASSWORD_INPUT';

export const INVALIDATE_EDITION_PSEUDO_INPUT = 'INVALIDATE_EDITION_PSEUDO_INPUT';
export const INVALIDATE_EDITION_EMAIL_INPUT = 'INVALIDATE_EDITION_EMAIL_INPUT';
export const INVALIDATE_EDITION_PASSWORD_INPUT = 'INVALIDATE_EDITION_PASSWORD_INPUT';

export const CHANGE_PSEUDO_REQUEST = 'CHANGE_PSEUDO_REQUEST';
export const CHANGE_EMAIL_REQUEST = 'CHANGE_EMAIL_REQUEST';
export const CHANGE_PASSWORD_REQUEST = 'CHANGE_PASSWORD_REQUEST';
export const CHANGE_AVATAR_REQUEST = 'CHANGE_AVATAR_REQUEST';

export const UPDATE_EDITION_PSEUDO_INPUT = 'UPDATE_EDITION_PSEUDO_INPUT';
export const UPDATE_EDITION_EMAIL_INPUT = 'UPDATE_EDITION_EMAIL_INPUT';
export const UPDATE_EDITION_PASSWORD_INPUT = 'UPDATE_EDITION_PASSWORD_INPUT';
export const CHANGE_AVATAR = 'CHANGE_AVATAR';

export const TOGGLE_PSEUDO_EDITION = 'TOGGLE_PSEUDO_EDITION';
export const TOGGLE_EMAIL_EDITION = 'TOGGLE_EMAIL_EDITION';
export const TOGGLE_PASSWORD_EDITION = 'TOGGLE_PASSWORD_EDITION';

// Action creators
export const editionPseudoInputValidation = () => ({
  type: EDITION_PSEUDO_INPUT_VALIDATION,
});

export const editionEmailInputValidation = () => ({
  type: EDITION_EMAIL_INPUT_VALIDATION,
});

export const editionPasswordInputValidation = () => ({
  type: EDITION_PASSWORD_INPUT_VALIDATION,
});

export const validateEditionPseudoInput = () => ({
  type: VALIDATE_EDITION_PSEUDO_INPUT,
});

export const validateEditionEmailInput = () => ({
  type: VALIDATE_EDITION_EMAIL_INPUT,
});

export const validateEditionPasswordInput = () => ({
  type: VALIDATE_EDITION_PASSWORD_INPUT,
});

export const invalidateEditionPseudoInput = () => ({
  type: INVALIDATE_EDITION_PSEUDO_INPUT,
});

export const invalidateEditionEmailInput = () => ({
  type: INVALIDATE_EDITION_EMAIL_INPUT,
});

export const invalidateEditionPasswordInput = () => ({
  type: INVALIDATE_EDITION_PASSWORD_INPUT,
});

export const changePseudoRequest = () => ({
  type: CHANGE_PSEUDO_REQUEST,
});

export const changeEmailRequest = () => ({
  type: CHANGE_EMAIL_REQUEST,
});

export const changePasswordRequest = () => ({
  type: CHANGE_PASSWORD_REQUEST,
});

export const changeAvatarRequest = () => ({
  type: CHANGE_AVATAR_REQUEST,
});

export const changeAvatar = (avatar) => ({
  type: CHANGE_AVATAR,
  avatar,
});

export const updateEditionPseudoInput = (pseudo) => ({
  type: UPDATE_EDITION_PSEUDO_INPUT,
  pseudo,
});
export const updateEditionEmailInput = (email) => ({
  type: UPDATE_EDITION_EMAIL_INPUT,
  email,
});
export const updateEditionPasswordInput = (password) => ({
  type: UPDATE_EDITION_PASSWORD_INPUT,
  password,
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
