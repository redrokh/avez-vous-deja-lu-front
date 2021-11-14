// Import from libraries
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Import styles
import './tag.scss';

const Tag = ({
  name,
  color,
  slug,
}) => (
  <NavLink
    className="Tag"
    to={`/categories/${slug}`}
    style={{
      backgroundColor: color,
    }}
  >
    {name}
  </NavLink>
);

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Tag;
