// import from libraries
import { connect } from 'react-redux';

// import components
import Categories from '../../components/Categories';

// import actions

const mapStateToProps = (state) => ({
  categoriesData: state.categories.categories,
});

export default connect(mapStateToProps, undefined)(Categories);
