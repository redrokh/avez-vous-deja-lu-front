// Import from libraries
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Import styles
import './burger.scss';

const Burger = ({ isOpened, toggleIsOpened }) => {
  const cssClass = classNames('Burger', {
    'Burger--opened': isOpened,
  });

  return (
    <div
      className={cssClass}
      onClick={() => {
        toggleIsOpened();
      }}
    >
      <div className="Burger__slice" />
      <div className="Burger__slice" />
      <div className="Burger__slice" />
    </div>
  );
};

// Props validation
Burger.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  toggleIsOpened: PropTypes.func.isRequired,
};

// Export component
export default Burger;
