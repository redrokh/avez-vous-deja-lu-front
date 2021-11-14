// Actions
export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
export const LOADING_CATEGORIES = 'LOADING_CATEGORIES';
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const LOAD_CATEGORIES_FAILED = 'LOAD_CATEGORIES_FAILED';
export const CATEGORIES_LOADED = 'CATEGORIES_LOADED';

export const LOAD_CATEGORY_NAME = 'LOAD_CATEGORY_NAME';
export const LOADING_CATEGORY_NAME = 'LOADING_CATEGORY_NAME';
export const LOAD_CATEGORY_NAME_FAILED = 'LOAD_CATEGORY_NAME_FAILED';
export const CATEGORY_NAME_LOADED = 'CATEGORY_NAME_LOADED';

// Action creators
export const loadCategories = () => ({
  type: LOAD_CATEGORIES,
});

export const loadingCategories = () => ({
  type: LOADING_CATEGORIES,
});

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  categories,
});

export const loadCategoriesFailed = () => ({
  type: LOAD_CATEGORIES_FAILED,
});

export const categoriesLoaded = () => ({
  type: CATEGORIES_LOADED,
});

export const loadCategoryName = (slug) => ({
  type: LOAD_CATEGORY_NAME,
  slug,
});

export const loadingCategoryName = (lug) => ({
  type: LOADING_CATEGORY_NAME,
});

export const loadCategoryNameFailed = () => ({
  type: LOAD_CATEGORY_NAME_FAILED,
});

export const categoryNameLoaded = () => ({
  type: CATEGORY_NAME_LOADED,
});