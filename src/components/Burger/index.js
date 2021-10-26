// Import from libraries
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Import styles
import './burger.scss';

const Burger = ({ isOpen, toggleOpen }) => {
  const cssClass = classNames('burger', {
    'burger--opened': isOpen,
  });
  return (
    <div
      className={cssClass}
      onClick={() => {
        toggleOpen(!isOpen);
      }}
    >
      <div className="burger__slice" />
      <div className="burger__slice" />
      <div className="burger__slice" />
    </div>
  );
};

Burger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
};

export default Burger;
