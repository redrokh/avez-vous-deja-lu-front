// Import from libraries
import { connect } from 'react-redux';

// Import from app components
import Categories from '../../components/Categories';

// Import actions and action creators
import {
  loadCategories,
} from '../../actions/categoryActions';

// Link component props to state
const mapStateToProps = (state) => ({
  categories: state.categories.list,
  loadingData: state.categories.loadingData,
  loadDataFailed: state.categories.loadDataFailed,
  dataLoaded: state.categories.dataLoaded,
});

// Link component props to actions
const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(loadCategories()),
});

// Export container
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
