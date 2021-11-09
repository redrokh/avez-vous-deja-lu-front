// Import from libraries
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

// Import components
import AccessNav from '../AccessNav';

// Import styles
import './mobilenav.scss';

const MobileNav = ({ contentMenus, isConnected, logOut }) => {
  const location = useLocation();
  return (
    <div className="mobile-nav">
      <AccessNav isConnected={isConnected} logOut={logOut} />

      <ul className="mobile-nav__links">
        {
          contentMenus.map(({ id, route, title }) => (
            <li
              key={id}
              className={
                classNames(
                  'mobile-nav__item',
                  { 'mobile-nav__item--selected': location.pathname === route },
                )
              }
            >
              <NavLink to={route}>{title}</NavLink>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

MobileNav.propTypes = {
  contentMenus: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    route: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  isConnected: PropTypes.bool.isRequired,
};

export default MobileNav;
