// Import from libraries
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';

// Import components
import AccessNav from '../AccessNav';
import Burger from '../Burger';
import ContentNav from '../ContentNav';
import MobileNav from '../MobileNav';

// Import styles
import './header.scss';

const Header = ({
  contentMenus,
  isConnected,
  isOpened,
  toggleMenu,
  headerColor,
  logOut,
  reconnectionAttempt,
}) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      reconnectionAttempt();
    }
  }, []);

  return (
    <header
      className={classNames('header', { 'header--mobile': isMobile })}
      style={{ backgroundColor: headerColor }}
    >
      <nav>
        <div className="header__top">
          <NavLink className="header__title" to="/">Avez-vous déjà lu..?</NavLink>
          { !isMobile && <AccessNav isConnected={isConnected} logOut={logOut} /> }
          { isMobile && <Burger isOpened={isOpened} toggleOpen={toggleMenu} />}
        </div>

        <div className="header__bottom">
          { !isMobile && <ContentNav menus={contentMenus} /> }
          {
            isMobile
            && isOpened
            && <MobileNav contentMenus={contentMenus} isConnected={isConnected} logOut={logOut} />
          }
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  contentMenus: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    route: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  isConnected: PropTypes.bool.isRequired,
  isOpened: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  headerColor: PropTypes.string.isRequired,
};

export default Header;
