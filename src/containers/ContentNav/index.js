// Import from libraries
import { connect } from 'react-redux';

// Import from app components
import ContentNav from '../../components/ContentNav';

// Link component props to state
const mapStateToProps = (state) => ({
  menus: state.app.contentMenus,
});

// Export container
export default connect(mapStateToProps, undefined)(ContentNav);
