// Import from libraries
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';

// Import styles
import './footer.scss';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const cssClass = classNames('footer__list', {
    'footer__list--mobile': isMobile,
  });

  return (
    <div className="footer">
      <ul className={cssClass}>
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
};

export default Footer;
