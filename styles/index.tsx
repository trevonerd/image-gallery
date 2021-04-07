import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { colors } from './_colors';
import { breakpoints } from './_breakpoints';
import { fontSizes } from './_typography';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    background-color: ${colors.white};
    color: ${colors.primary};
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    padding: 0;
  }

  a {
    color: ${colors.primary};  
  }
`;

export const theme = {
    colors,
    breakpoints,
    fontSizes,
};

export * from './_colors';
export * from './_typography';
export * from './_breakpoints';
