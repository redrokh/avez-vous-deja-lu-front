// Import from libraries
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Import styles
import './tag.scss';

const Tag = ({ id, name, color }) => (
  <NavLink
    className="tag"
    to={`/categories/${id}`}
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
};

export default Tag;
