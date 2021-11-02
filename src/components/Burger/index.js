// Import from libraries
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Import styles
import './burger.scss';

const Burger = ({ isOpened, toggleOpen }) => {
  const cssClass = classNames('burger', {
    'burger--opened': isOpened,
  });
  return (
    <div
      className={cssClass}
      onClick={() => {
        toggleOpen(!isOpened);
      }}
    >
      <div className="burger__slice" />
      <div className="burger__slice" />
      <div className="burger__slice" />
    </div>
  );
};

Burger.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
};

export default Burger;
