// Import from libraries
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Import styles
import './accessnav.scss';

// Component
const AccessNav = ({ isConnected, logOut }) => (
  <ul className="AccessNav">
    {
      !isConnected
      && (
        <>
          <li className="AccessNav__item">
            <NavLink
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

// Props validation
AccessNav.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired,
};

// Export component
export default AccessNav;
