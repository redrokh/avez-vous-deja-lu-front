// Import from libraries
import { connect } from 'react-redux';

// Import from app components
import MyAccount from '../../components/MyAccount';

// Link component props to state
const mapStateToProps = (state) => ({
  isConnected: state.auth.isConnected,
});

// Export container
export default connect(mapStateToProps, undefined)(MyAccount);
