// Import actions
import {
  UPDATE_PAGE_COLOR,
  UPDATE_HEADER_COLOR,
  TOGGLE_HEADER_MENU,
  SET_PAGE_TITLE,
  SET_IS_LOADING_LATESTS,
  SET_IS_LOADING_BESTS,
  SET_IS_LOADING_ANECDOTES,
  SET_IS_LOADING_ANECDOTE,
  SET_IS_LOADING_FAVORITES,
  SET_IS_LOADING_USER,
} from '../actions';

// Import from utils
import { proportionalHexColor, darkenHexColor } from '../utils/functions';

const initialState = {
  darkColor: '#283655', // #D0E1F9 #4D648D #1E1F26 #283655 (#174352)
  lightColor: '#536878', // (#2F86A6)
  pageColor: '#283655',
  headerColor: '#283655',
  isOpened: false,
  isLoadingBests: true,
  isLoadingLatests: true,
  isLoadingAnecdotes: true,
  isLoadingAnecdote: true,
  isLoadingUser: true,
  isLoadingFavorites: true,
  contentMenus: [
    {
      id: 1,
      route: '/',
      title: 'Accueil',
    },
    {
      id: 2,
      route: '/anecdotes',
      title: 'Anecdotes',
    },
    {
      id: 3,
      route: '/categories',
      title: 'Par catégorie',
    },
    {
      id: 4,
      route: '/au-hasard',
      title: 'Au hasard',
    },
    {
      id: 5,
      route: '/nos-meilleures-anecdotes',
      title: 'Nos meilleures',
    },
  ],
  footerMenus: [
    {
      id: 1,
      route: '/qui-sommes-nous',
      title: 'Qui sommes-nous ?',
    },
    {
      id: 2,
      route: '/contact',
      title: 'Contact',
    },
    {
      id: 3,
      route: '/mentions-legales',
      title: 'Mentions légales',
    },
  ],
  pageTitle: '',
};

initialState.headerColor = darkenHexColor(initialState.lightColor);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PAGE_COLOR: {
      const pageColor = proportionalHexColor(state.darkColor, state.lightColor);
      return { ...state, pageColor };
    }
    case UPDATE_HEADER_COLOR: {
      const headerColor = darkenHexColor(state.pageColor);
      return { ...state, headerColor };
    }
    case TOGGLE_HEADER_MENU:
      return { ...state, isOpened: !state.isOpened };
    case SET_PAGE_TITLE:
      return { ...state, pageTitle: action.title };
    case SET_IS_LOADING_LATESTS:
      return { ...state, isLoadingLatests: action.value };
    case SET_IS_LOADING_BESTS:
      return { ...state, isLoadingBests: action.value };
    case SET_IS_LOADING_ANECDOTES:
      return { ...state, isLoadingAnecdotes: action.value };
    case SET_IS_LOADING_ANECDOTE:
      return { ...state, isLoadingAnecdote: action.value };
    case SET_IS_LOADING_FAVORITES:
      return { ...state, isLoadingFavorites: action.value };
    case SET_IS_LOADING_USER:
      return { ...state, isLoadingUser: action.value };
    default:
      return state;
  }
};

export default reducer;
