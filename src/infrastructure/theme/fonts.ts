import { Platform } from 'react-native';

// iOS resolves fonts by PostScript name; Android by file name (react-native-asset renames `-` to `_`).
const oswald = Platform.select({ ios: 'Oswald-Regular', default: 'Oswald_Regular' });
const lato = Platform.select({ ios: 'Lato-Regular', default: 'Lato_Regular' });

export const fonts = {
  body: oswald,
  heading: lato,
  monospace: oswald,
};

export const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
};

export type FontWeight = (typeof fontWeights)[keyof typeof fontWeights];

export const fontSizes = {
  caption: '12px',
  button: '14px',
  body: '16px',
  title: '20px',
  h5: '24px',
  h4: '34px',
  h3: '45px',
  h2: '56px',
  h1: '112px',
};

export type FontSize = (typeof fontSizes)[keyof typeof fontSizes];
