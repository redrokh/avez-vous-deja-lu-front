// Import axios preconfigured object
import API from '../utils/api';

// Import actions and action creators
import {
  LOAD_BESTS,
  loadingBests,
  setBests,
  bestsLoaded,
  loadBestsFailed,
} from '../actions/bestActions';

// Trigger treatment according to action type
const middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_BESTS: {
      store.dispatch(loadingBests());
      API.get('anecdote/best')
        .then((response) => {
          store.dispatch(setBests(response.data));
          store.dispatch(bestsLoaded());
        })
        .catch(() => store.dispatch(loadBestsFailed()));
      break;
    }
    default:
  }
  next(action);
};

// Export middleware
export default middleware;
