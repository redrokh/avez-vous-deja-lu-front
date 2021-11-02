export const rgbToHex = (r, g, b) => {
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

export const hexToRgb = (hexColor) => {
  const hexValue = hexColor.substring(1);
  const rHex = hexValue.substring(0, 2);
  const gHex = hexValue.substring(2, 4);
  const bHex = hexValue.substring(4, 6);

  return [parseInt(rHex, 16), parseInt(gHex, 16), parseInt(bHex, 16)];
};

export const proportionalHexColor = (hexColor1, hexColor2) => {
  const rgbColor1 = hexToRgb(hexColor1);
  const rgbColor2 = hexToRgb(hexColor2);
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
  const rHex = Math.round((rgbColor1[0] * ratio1) + (rgbColor2[0] * ratio2)).toString(16);
  const gHex = Math.round((rgbColor1[1] * ratio1) + (rgbColor2[1] * ratio2)).toString(16);
  const bHex = Math.round((rgbColor1[2] * ratio1) + (rgbColor2[2] * ratio2)).toString(16);
  const hexColor = rgbToHex(rHex, gHex, bHex);
  return hexColor;
};

export const isMobile = () => window.innerWidth < 768;

export const darkenHexColor = (hexColor) => {
  const rgbColors = hexToRgb(hexColor);
  const darkenedRgbColors = rgbColors.map((rgbColor) => {
    const darkenedRgbColor = Math.floor(rgbColor * 0.8);
    return darkenedRgbColor < 255 ? darkenedRgbColor : 255;
  });
  return rgbToHex(...darkenedRgbColors);
};

/* const color1 = hexToRgb('#2c3e50'); // #2193b0
const color2 = hexToRgb('#3498db'); // #6dd5ed
props.updatePageColor(hexColor); */
