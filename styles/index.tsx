import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
 
  body {
    padding: 0;
    background-color: #ec008c;
  }
`;

export const theme = {
    colors: {
        primary: '#0070f3',
    },
};
