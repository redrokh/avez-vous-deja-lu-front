import PropTypes from 'prop-types';

import './position.scss';

const Position = ({ position }) => (
  <div className="position">
    <div className="position__outer-circle" />
    <div className="position__inner-circle">{position}</div>
    <div className="position__left-ruban" />
    <div className="position__right-ruban" />
  </div>
);

Position.propTypes = {
  position: PropTypes.number.isRequired,
};

export default Position;
