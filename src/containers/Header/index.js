// Import from libraries
import { connect } from 'react-redux';

// Import components
import Header from '../../components/Header';

// Import action creators
import {
  toggleHeaderMenu,
  updateHeaderColor,
  logOut,
  setToken,
  reloadUser,
} from '../../actions';

// Import from utils
import { darkenHexColor } from '../../utils/functions';

const mapStateToProps = (state) => ({
  contentMenus: state.app.contentMenus,
  isOpened: state.app.isOpened,
  isConnected: state.user.isConnected,
  headerColor: darkenHexColor(state.app.pageColor),
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: () => dispatch(toggleHeaderMenu()),
  updateHeaderColor: () => dispatch(updateHeaderColor()),
  logOut: () => dispatch(logOut()),
  reconnectionAttempt: () => {
    dispatch(setToken());
    dispatch(reloadUser());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
