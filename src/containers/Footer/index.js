// Import from libraries
import { connect } from 'react-redux';

// Import components
import Footer from '../../components/Footer';

const mapStateToProps = (state) => ({
  menus: state.app.footerMenus,
});

export default connect(mapStateToProps, undefined)(Footer);
