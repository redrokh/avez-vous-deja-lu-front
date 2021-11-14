// Import from libraries
import { connect } from 'react-redux';

// Import from app components
import Footer from '../../components/Footer';

// Link component props to state
const mapStateToProps = (state) => ({
  menus: state.app.footerMenus,
});

// Export container
export default connect(mapStateToProps, undefined)(Footer);
