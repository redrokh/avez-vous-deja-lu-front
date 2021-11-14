// Import from libraries
import { connect } from 'react-redux';

// Import from app components
import Burger from '../../components/Burger';

// Import actions and action creators
import { toggleBurgerIsOpened } from '../../actions/appActions';

// Link component props to state
const mapStateToProps = (state) => ({
  isOpened: state.app.burgerIsOpened,
});

// Link component props to actions
const mapDispatchToProps = (dispatch) => ({
  toggleIsOpened: () => dispatch(toggleBurgerIsOpened()),
});

// Export container
export default connect(mapStateToProps, mapDispatchToProps)(Burger);
