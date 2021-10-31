// Import from libraries
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';

// Import styles
import './page.scss';

const Page = (props) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [bgColor, setBgColor] = useState('#1CB5E0');

  const rgbToHex = (r, g, b) => {
    let rHex = r.toString(16);
    let gHex = g.toString(16);
    let bHex = b.toString(16);

    if (rHex.length === 1) {
      rHex = `0${rHex}`;
    }
    if (gHex.length === 1) {
      gHex = `0${gHex}`;
    }
    if (bHex.length === 1) {
      bHex = `0${bHex}`;
    }

    return `#${rHex}${gHex}${bHex}`;
  };

  const hexToRgb = (hexColor) => {
    const hexValue = hexColor.substring(1);
    const rHex = hexValue.substring(0, 2);
    const gHex = hexValue.substring(2, 4);
    const bHex = hexValue.substring(4, 6);

    return [parseInt(rHex, 16), parseInt(gHex, 16), parseInt(bHex, 16)];
  };

  const updateBgColor = () => {
    const color1 = hexToRgb('#2c3e50'); // #2193b0
    const color2 = hexToRgb('#3498db'); // #6dd5ed
    const scrollMaxY = document.body.offsetHeight - window.innerHeight;
    let { scrollY } = window;
    if (scrollY > scrollMaxY) {
      scrollY = scrollMaxY;
    }
    else if (scrollY < 0) {
      scrollY = 0;
    }
    const ratio1 = scrollY / scrollMaxY;
    const ratio2 = 1 - ratio1;
    const rHex = Math.round((color1[0] * ratio1) + (color2[0] * ratio2)).toString(16);
    const gHex = Math.round((color1[1] * ratio1) + (color2[1] * ratio2)).toString(16);
    const bHex = Math.round((color1[2] * ratio1) + (color2[2] * ratio2)).toString(16);
    const hexColor = rgbToHex(rHex, gHex, bHex);
    setBgColor(hexColor);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateBgColor);
  }, []);
  return (
    <main
      className={classNames('page', { 'page--mobile': isMobile })}
      style={{ backgroundColor: bgColor }}
    >
      { props.children }
    </main>
  );
};

/* Page.propTypes = {
  children: PropTypes.oneOf(
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ).isRequired,
}; */

export default Page;
