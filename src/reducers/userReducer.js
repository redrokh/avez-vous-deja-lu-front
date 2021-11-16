// Import actions
import {
  SET_USER,
  RESET_USER_STATE,
} from '../actions/userActions';

// Define initial state
const initialState = {
  id: 0,
  pseudo: '',
  email: '',
  avatar: 'default-avatar.png',
};

// Set new state based on action dispatched
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      const {
        id,
        pseudo,
        email,
        img,
      } = action.user;
      return {
        ...state,
        id,
        pseudo,
        email,
        avatar: img,
      };
    }
    case RESET_USER_STATE:
      return initialState;
    default:
      return state;
  }
};

// Export reducer
export default reducer;
