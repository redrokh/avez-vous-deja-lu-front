// Import actions
import { UPDATE_PAGE_COLOR, UPDATE_HEADER_COLOR, TOGGLE_HEADER_MENU } from '../actions';

// Import from utils
import { proportionalHexColor, darkenHexColor } from '../utils/functions';

const initialState = {
  darkColor: '#174352',
  lightColor: '#2F86A6',
  pageColor: '#174352',
  headerColor: '#174352',
  isConnected: true,
  isOpened: false,
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
    default:
      return state;
  }
};

export default reducer;
