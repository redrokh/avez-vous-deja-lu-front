// Actions
export const TOGGLE_BURGER_IS_OPENED = 'TOGGLE_BURGER_IS_OPENED';
export const SET_PAGE_BACKGROUND_COLOR = 'SET_PAGE_BACKGROUND_COLOR';
export const SET_HEADER_BACKGROUND_COLOR = 'SET_HEADER_BACKGROUND_COLOR';

// Action creators
export const toggleBurgerIsOpened = () => ({
  type: TOGGLE_BURGER_IS_OPENED,
});

export const setPageBgColor = () => ({
  type: SET_PAGE_BACKGROUND_COLOR,
});

export const setHeaderBgColor = () => ({
  type: SET_HEADER_BACKGROUND_COLOR,
});
