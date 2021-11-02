// Import from libraries
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Import styles
import './page.scss';

const Page = (props) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    window.addEventListener('scroll', props.updatePageColor);
  }, []);
  return (
    <main
      className={
        classNames(
          'page',
          {
            'page--mobile': isMobile,
          }
        )
      }
      style={{ backgroundColor: props.pageColor }}
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
  pageColor: PropTypes.string.isRequired,
  updatePageColor: PropTypes.func.isRequired,
};

export default Page;
