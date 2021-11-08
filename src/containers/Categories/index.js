// import from libraries
import { connect } from 'react-redux';

// import components
import Categories from '../../components/Categories';

// import actions
import { loadCategories } from '../../actions';

const mapStateToProps = (state) => ({
  categoriesData: state.categories.categories,
});

const mapDispatchToProps = (dispatch) => ({
  initialize: () => dispatch(loadCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
