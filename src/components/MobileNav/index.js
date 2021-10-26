// Import from libraries
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Import components
import AccessNav from '../AccessNav';

// Import styles
import './mobilenav.scss';

const MobileNav = ({ isConnected }) => (
  <div className="mobile-nav">
    <AccessNav isConnected={isConnected} />

    <ul className="mobile-nav__links">
      <li className="mobile-nav__item">
        <NavLink to="/">Accueil</NavLink>
      </li>
      <li className="mobile-nav__item">
        <NavLink to="/anecdotes">Anecdotes</NavLink>
      </li>
      <li className="mobile-nav__item">
        <NavLink to="/categories">Catégories</NavLink>
      </li>
      <li className="mobile-nav__item">
        <NavLink to="/au-hasard">Hasard</NavLink>
      </li>
      <li className="mobile-nav__item">
        <NavLink to="/nos-meilleures-anecdotes">Meilleures</NavLink>
      </li>
    </ul>
  </div>
);

MobileNav.propTypes = {
  isConnected: PropTypes.bool.isRequired,
};

export default MobileNav;
