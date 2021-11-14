// Import from libraries
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';

// Import from app components
import AccessNav from '../../containers/AccessNav';
import Burger from '../../containers/Burger';
import ContentNav from '../../containers/ContentNav';
import MobileNav from '../../containers/MobileNav';

// Import styles
import './header.scss';

// Component
const Header = ({
  burgerIsOpened,
  headerBgColor,
}) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <header
      className={classNames('Header', { 'Header--mobile': isMobile })}
      style={{ backgroundColor: headerBgColor }}
    >
      <nav>
        <div className="Header__top">
          <NavLink className="Header__title" to="/">Avez-vous déjà lu..?</NavLink>
          { !isMobile && <AccessNav /> }
          { isMobile && <Burger />}
        </div>

        <div className="Header__bottom">
          { !isMobile && <ContentNav /> }
          {
            isMobile
            && burgerIsOpened
            && <MobileNav />
          }
        </div>
      </nav>
    </header>
  );
};

// Props validation
Header.propTypes = {
  burgerIsOpened: PropTypes.bool.isRequired,
  headerBgColor: PropTypes.string.isRequired,
};

// Export component
export default Header;
