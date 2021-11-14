// Import from libraries
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

// Import from app components
import AccessNav from '../../containers/AccessNav';

// Import styles
import './mobilenav.scss';

// Component
const MobileNav = ({ menus }) => {
  const location = useLocation();

  return (
    <div className="MobileNav">
      <AccessNav />

      <ul className="MobileNav__links">
        {
          menus.map(({ id, route, title }) => (
            <li
              key={id}
              className={
                classNames(
                  'MobileNav__item',
                  { 'MobileNav__item--selected': location.pathname === route },
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

// Props validation
MobileNav.propTypes = {
  menus: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    route: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

// Export component
export default MobileNav;
