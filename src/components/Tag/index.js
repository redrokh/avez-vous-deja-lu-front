// Import from libraries
import PropTypes from 'prop-types';

// Import styles
import './tag.scss';

const Tag = ({ name, color }) => {
  return (
    <span
      className="tag"
      style={{
        backgroundColor: color,
      }}
    >
      {name}
    </span>
  );
};

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Tag;
