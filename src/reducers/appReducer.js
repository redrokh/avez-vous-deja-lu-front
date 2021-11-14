// Import actions
import {
  TOGGLE_BURGER_IS_OPENED,
  SET_PAGE_BACKGROUND_COLOR,
  SET_HEADER_BACKGROUND_COLOR
} from '../actions/appActions';

// Import from utils
import {
  darkenHexColor,
  proportionalHexColor
} from '../utils/functions';

// Define initial state
const initialState = {
  baseSrc: 'http://localhost:8000/uploads/',
  burgerIsOpened: false,
  headerBgColor: '#000',
  pageBgColor: '#283655',
  color1: '#283655',
  color2: '#536878',
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

initialState.headerBgColor = darkenHexColor(initialState.color1);

// Set new state based on action dispatched
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BURGER_IS_OPENED:
      return { ...state, burgerIsOpened: !state.burgerIsOpened };
    case SET_PAGE_BACKGROUND_COLOR: {
      const newColor = proportionalHexColor(state.color1, state.color2);
      return { ...state, pageBgColor: newColor };
    }
    case SET_HEADER_BACKGROUND_COLOR: {
      const newColor = darkenHexColor(state.pageBgColor);
      return { ...state, headerBgColor: newColor };
    }
    default:
      return state;
  }
};

// Export reducer
export default reducer;