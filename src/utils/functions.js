/**
 * Convert color from rgb format to hex format
 * @param {int} r: red component of color with value between 0 and 255
 * @param {int} g: green component of color with value between 0 and 255
 * @param {int} b: blue component of color with value between 0 and 255
 * @returns {String} hex color
 */

export const rgbToHex = (r, g, b) => {
  // Convert rgb components to hex values (string)
  let rHex = r.toString(16);
  let gHex = g.toString(16);
  let bHex = b.toString(16);

  // Make sure hex values lengths equal to 2
  if (rHex.length === 1) {
    rHex = `0${rHex}`;
  }
  if (gHex.length === 1) {
    gHex = `0${gHex}`;
  }
  if (bHex.length === 1) {
    bHex = `0${bHex}`;
  }

  // Return hex value in string format
  return `#${rHex}${gHex}${bHex}`;
};

/**
 * Convert color from hex format to rgb format
 * @param {String} hexColor (ex: #000000)
 * @returns {Array} of rgb components (between 0 and 255)
 */
export const hexToRgb = (hexColor) => {
  // Get rid of # in front of hex color
  const hexValue = hexColor.substring(1);

  // Get rgb hex components
  const rHex = hexValue.substring(0, 2);
  const gHex = hexValue.substring(2, 4);
  const bHex = hexValue.substring(4, 6);

  // Convert to decimal values
  return [parseInt(rHex, 16), parseInt(gHex, 16), parseInt(bHex, 16)];
};

/**
 * Mix 2 colors with varying proportions corresponding to:
 * -> actual scrolling y position / max scrolling y position
 * -> 1 - (actual scrolling y position / max scrolling y position)
 * @param {String} hexColor1
 * @param {String} hexColor2
 * @returns {String} the mixed color
 */
export const proportionalHexColor = (hexColor1, hexColor2) => {
  // Get rgb equivalents
  const rgbColor1 = hexToRgb(hexColor1);
  const rgbColor2 = hexToRgb(hexColor2);

  // Get scroll y max position
  const scrollMaxY = window.innerHeight;
  let { scrollY } = window;
  if (scrollY > scrollMaxY) {
    scrollY = scrollMaxY;
  }
  else if (scrollY < 0) {
    scrollY = 0;
  }

  // Get ratios
  const ratio1 = scrollY / scrollMaxY;
  const ratio2 = 1 - ratio1;

  // Blend components according to ratios
  const rHex = Math.round((rgbColor1[0] * ratio1) + (rgbColor2[0] * ratio2)).toString(16);
  const gHex = Math.round((rgbColor1[1] * ratio1) + (rgbColor2[1] * ratio2)).toString(16);
  const bHex = Math.round((rgbColor1[2] * ratio1) + (rgbColor2[2] * ratio2)).toString(16);

  // Convert to hex format and return value
  const hexColor = rgbToHex(rHex, gHex, bHex);

  return hexColor;
};

/**
 * Darken color in hex format
 * @param {String} hexColor
 * @returns {String} darkened color
 */
export const darkenHexColor = (hexColor) => {
  // Convert to rgb format
  const rgbColors = hexToRgb(hexColor);

  // Increase rgb components values by a certain amount
  const darkenedRgbColors = rgbColors.map((rgbColor) => {
    const darkenedRgbColor = Math.floor(rgbColor * 0.8);
    return darkenedRgbColor < 255 ? darkenedRgbColor : 255;
  });

  // Convert and return new value
  return rgbToHex(...darkenedRgbColors);
};
