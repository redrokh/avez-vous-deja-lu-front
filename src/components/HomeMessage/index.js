// Import from libraries
import { NavLink } from 'react-router-dom';

// Import styles
import './homemessage.scss';

// Component
const HomeMessage = () => (
  <section className="HomeMessage">
    <h1 className="HomeMessage__title">Avez-vous déjà lu</h1>

    <p className="HomeMessage__content">
      Bienvenue sur le site d'Avez-vous déjà lu !<br />
      Vous voulez faire le malin avec vos amis et votre famille ? Vous voulez juste passer un peu bon temps en sirotant votre café ?<br />
      Pas de soucis vous êtes au bon endroit ! Nous avons recensés des anecdotes insolites et drôles pour votre plus grand plaisir ! ;)<br />
      Vous pouvez librement consulter nos meilleures anecdotes ainsi que nos plus récentes !<br />
      Vous en voulez plus ? Il suffit de vous inscrire <NavLink className="HomeMessage__inscription-link" to="/inscription">ici</NavLink>.<br />
    </p>
  </section>
);

// Export component
export default HomeMessage;
