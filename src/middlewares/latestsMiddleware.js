// Import axios preconfigured object
import API from '../utils/api';

// Import actions and action creators
import {
  LOAD_LATESTS,
  loadingLatests,
  setLatests,
  latestsLoaded,
  loadLatestsFailed,
} from '../actions/latestActions';

// Trigger treatment according to action type
const middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_LATESTS: {
      store.dispatch(loadingLatests());
      API.get('anecdote/latest')
        .then((response) => {
          store.dispatch(setLatests(response.data));
          store.dispatch(latestsLoaded());
        })
        .catch(() => store.dispatch(loadLatestsFailed()));
    }
    default:
  }
  next(action);
};

// Export middleware
export default middleware;
