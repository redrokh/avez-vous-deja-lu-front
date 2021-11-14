// Import from libraries
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Import styles
import './page.scss';

const Page = (props) => {
  const location = useLocation();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    window.addEventListener('scroll', props.onScrollChange);
  }, []);

  useEffect(() => {
    // Scroll to top on url change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main
      className={
        classNames(
          'Page',
          {
            'Page--mobile': isMobile,
          }
        )
      }
      style={{ backgroundColor: props.pageBgColor }}
    >
      { props.children }
    </main>
  );
};

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  pageBgColor: PropTypes.string.isRequired,
  onScrollChange: PropTypes.func.isRequired,
};

export default Page;
