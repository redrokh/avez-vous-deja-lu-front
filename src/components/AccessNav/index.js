// Import from libraries
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Import styles
import './accessnav.scss';

const AccessNav = ({ isConnected }) => (
  <ul className="access-nav">
    {
      !isConnected
      && (
        <>
          <li className="access-nav__item">
            <NavLink to="/inscription">Inscription</NavLink>
          </li>
          <li className="access-nav__item">
            <NavLink to="/connexion">Connexion</NavLink>
          </li>
        </>
      )
    }
    {
      isConnected
      && (
        <>
          <li className="access-nav__item">
            <NavLink to="/mon-compte">Mon compte</NavLink>
          </li>
          <li className="access-nav__item">
            <button type="button">Déconnexion</button>
          </li>
        </>
      )
    }
  </ul>
);

AccessNav.propTypes = {
  isConnected: PropTypes.bool.isRequired,
};

export default AccessNav;
