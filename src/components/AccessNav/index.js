// Import from libraries
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';

// Import styles
import './accessnav.scss';

// Component
const AccessNav = ({ isConnected, logOut }) => {
  const location = useLocation();

  return (
    <ul className="AccessNav">
      {
        !isConnected
        && (
          <>
            <li className="AccessNav__item">
              <NavLink
                className={
                  classNames(
                    'AccessNav__left-link',
                    {
                      'AccessNav__left-link--selected': location.pathname === '/inscription',
                    },
                  )
                }
                to="/inscription"
              >
                S'inscrire
              </NavLink>
            </li>
            <li className="AccessNav__item">
              <NavLink
                className="AccessNav__connection-button"
                to="/connexion"
              >
                Connexion
              </NavLink>
            </li>
          </>
        )
      }

      {
        isConnected
        && (
          <>
            <li className="AccessNav__item">
              <NavLink
                className={
                  classNames(
                    'AccessNav__left-link',
                    {
                      'AccessNav__left-link--selected': location.pathname === '/mon-compte',
                    },
                  )
                }
                to="/mon-compte"
              >
                Mon compte
              </NavLink>
            </li>
            <li className="AccessNav__item">
              <NavLink
                className="AccessNav__deconnection-button"
                to="/"
                onClick={logOut}
              >
                Déconnexion
              </NavLink>
            </li>
          </>
        )
      }
    </ul>
  );
};

// Props validation
AccessNav.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired,
};

// Export component
export default AccessNav;
