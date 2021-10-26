import './footer.scss';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer">
    <ul className="footer__list">
      <Link to="/qui-sommes-nous">
        <li className="footer__item">Qui-sommes nous ?</li>
      </Link>
      <Link to="/contact">
        <li className="footer__item">Contact</li>
      </Link>
      <Link to="/mentions-legales">
        <li className="footer__item">Mentions Légales</li>
      </Link>
    </ul>
  </div>
);

export default Footer;
