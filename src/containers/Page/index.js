// Import from libraries
import { connect } from 'react-redux';

// Import from app components
import Page from '../../components/Page';

// Import action creators
import { setPageBgColor, setHeaderBgColor } from '../../actions/appActions';

// Link component props to state
const mapStateToProps = (state) => ({
  pageBgColor: state.app.pageBgColor,
});

// Link component props to actions
const mapDispatchToProps = (dispatch) => ({
  onScrollChange: () => {
    dispatch(setPageBgColor());
    dispatch(setHeaderBgColor());
  },
});

// Export container
export default connect(mapStateToProps, mapDispatchToProps)(Page);
