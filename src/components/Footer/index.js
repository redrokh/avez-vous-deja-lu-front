// Import from libraries
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Import styles
import './footer.scss';
import { Link } from 'react-router-dom';

const Footer = ({ menus }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const cssClass = classNames('footer__list', {
    'footer__list--mobile': isMobile,
  });

  return (
    <div className="footer">
      <ul className={cssClass}>
        {
          menus.map(({ id, route, title }) => (
            <Link key={id} to={route}>
              <li className="footer__item">{title}</li>
            </Link>
          ))
        }
      </ul>
    </div>
  );
};

Footer.propTypes = {
  menus: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    route: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default Footer;
