// Import from libraries
import PropTypes from 'prop-types';

// Import styles
import './page.scss';

const Page = (props) => (
  <main className="page">
    { props.children }
  </main>
);

Page.propTypes = {
  children: PropTypes.oneOf(
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ).isRequired,
};

export default Page;
