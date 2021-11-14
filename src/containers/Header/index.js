// Import from libraries
import { connect } from 'react-redux';

// Import from app components
import Header from '../../components/Header';

// Link component props to state
const mapStateToProps = (state) => ({
  burgerIsOpened: state.app.burgerIsOpened,
  headerBgColor: state.app.headerBgColor,
});

// Export container
export default connect(mapStateToProps, undefined)(Header);
