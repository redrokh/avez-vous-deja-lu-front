// Import from libraries
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useHistory, useLocation } from 'react-router-dom';

// Import styles
import './accessnav.scss';

const AccessNav = ({ isConnected, logOut }) => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (isConnected && location.pathname === '/connexion') {
      history.push('/');
    }
  }, [isConnected]);

  return (
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
              <NavLink className="access-nav__deconnection-button" to="/" onClick={logOut}>Déconnexion</NavLink>
            </li>
          </>
        )
      }
    </ul>
  );
};

AccessNav.propTypes = {
  isConnected: PropTypes.bool.isRequired,
};

export default AccessNav;
