// Import from libraries
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Import styles
import './contentnav.scss';

// Component
const ContentNav = ({ menus }) => {
  const location = useLocation();

  return (
    <ul className="ContentNav">
      {
        menus.map((menu) => (
          <li
            key={menu.id}
            className={
              classNames(
                'ContentNav__item',
                {
                  'ContentNav__item--selected': location.pathname === menu.route,
                },
              )
            }
          >
            <NavLink to={menu.route}>{menu.title}</NavLink>
          </li>
        ))
      }
    </ul>
  );
};

// Props validation
ContentNav.propTypes = {
  menus: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    route: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

// Export component
export default ContentNav;
