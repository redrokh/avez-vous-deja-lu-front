// Import from libraries
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';

// Import components
import AccessNav from '../AccessNav';
import Burger from '../Burger';
import ContentNav from '../ContentNav';
import MobileNav from '../MobileNav';

// Import styles
import './header.scss';

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isConnected, setIsConnected] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={classNames('header', { 'header--mobile': isMobile })}
    >
      <nav>
        <div className="header__top">
          <NavLink className="header__title" to="/">Avez-vous déjà lu..?</NavLink>
          { !isMobile && <AccessNav isConnected={isConnected} /> }
          { isMobile && <Burger isOpen={isOpen} toggleOpen={setIsOpen} />}
        </div>

        <div className="header__bottom">
          { !isMobile && <ContentNav /> }
          { isMobile && isOpen && <MobileNav isConnected={isConnected} /> }
        </div>
      </nav>
    </header>
  );
};

export default Header;
