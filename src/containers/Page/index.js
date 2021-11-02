// Import from libraries
import { connect } from 'react-redux';

// Import components
import Page from '../../components/Page';

// Import action creators
import { updatePageColor } from '../../actions';

const mapStateToProps = (state) => ({
  pageColor: state.app.pageColor,
});

const mapDispatchToProps = (dispatch) => ({
  updatePageColor: () => dispatch(updatePageColor()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
