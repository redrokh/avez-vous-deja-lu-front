// import libraries
import { Link } from 'react-router-dom';
// import styles
import './legalesmentions.scss';

const LegalesMentions = () => (

  <section className="container__mentions">
    <h2 className="mentions__title">Mentions Légales</h2>
    <p className="mentions__description">
      Merci de lire avec attention les différentes modalités d'utilisation du présent
      site avant d'y parcourir ses pages. En vous connectant sur ce site, vous accepter,
      sans réserves, les présentes modalités. Aussi, conformément à l'article n°6 de la loi
      n°2004-575 du 24 Juin 2004 pour la confiance dans l'économie numérique,
      les responsables du présent site internet sont :
    </p>

    <div className="mentions__article">
      <h3 className="article__title"> Editeur du Site : </h3>
      <ul className="list__article">
        <li className="article__description">
          Responsables éditorials :  Alexandre, Julian, Benjamain et Lucas
        </li>
        <li className="article__description">
          67 Rue Henri Durant, 92700 Colombes
        </li>
        <li className="article__description">
          Téléphone : 06 06 06 06 06
        </li>
        <li className="article__description">
          Email : avezvousdejalu.pro@gmail.com
        </li>
        <li className="article__description">
          Site Web : <Link to="/" className="site__link">www.avezvousdéjàlu.fr</Link>
        </li>
      </ul>

      <h3 className="article__title">Hébergement : </h3>
      <ul className="list__article">
        <li className="article__description">
          Hébergeur : AWS Amazon
        </li>
        <li className="article__description">
          Adresse : 31 PL des Corolles, 92400 Courbevoie.
        </li>
        <li className="article__description">
          Site Web : <Link to="/" className="site__link">www.avezvousdejalu.fr</Link>
        </li>
      </ul>

      <h3 className="article__title">Développement : </h3>
      <ul className="list__article">
        <li className="article__description">
          Etudiant O'clock
        </li>
        <li className="article__description">
          Adresse : 67 Rue Henri Durant, 92700 Colombes
        </li>
        <li className="article__description">
          Site Web : <Link to="/" className="site__link">www.avezvousdéjàlu.fr</Link>
        </li>
      </ul>

      <h3 className="article__title">Conditions d'utilisation : </h3>
      <ul className="list__article">
        <li className="article__description">
          Ce site web est proposé en différents langages web
          (JavaSrcipt, React, PHP, Symphony, CSS...) pour un meilleur confort d'utilisation
          et un graphisme plus agréable. Nous vous recommandons de recourir à des naviguateurs
          modernes comme Internet Explore, Safari, Firefox, Google Chrome, etc...
        </li>
        <li className="article__description">
          Nous mettons en oeuvre tous les moyens dont nous disposons,
          pour assurer une information fiable et une mise à jour de notre site internet.
        </li>
        <li className="article__description">
          Toutesfois, des erreurs ou omissions peuvent survenir.
          L'internaute devra donc s'assurer de l'exactitude des informations via
          le formulaire de contact, et signaler toutes modifications du site qu'il jugerait utile.
        </li>
      </ul>

    </div>
  </section>
);

export default LegalesMentions;
