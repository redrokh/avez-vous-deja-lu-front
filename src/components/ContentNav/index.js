// Import from libraries
import { NavLink } from 'react-router-dom';

// Import styles
import './contentnav.scss';

const ContentNav = () => (
  <ul className="content-nav">
    <li className="content-nav__item">
      <NavLink to="/">Accueil</NavLink>
    </li>
    <li className="content-nav__item">
      <NavLink to="/anecdotes">Toutes nos Anecdotes</NavLink>
    </li>
    <li className="content-nav__item">
      <NavLink to="/categories">Par Catégorie</NavLink>
    </li>
    <li className="content-nav__item">
      <NavLink to="/au-hasard">Au Hasard</NavLink>
    </li>
    <li className="content-nav__item">
      <NavLink to="/nos-meilleures-anecdotes">Nos Meilleures</NavLink>
    </li>
  </ul>
);

export default ContentNav;
