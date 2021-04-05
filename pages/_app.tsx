import '../styles/globals.css';
import { GlobalStyle, theme } from '../styles';
import { ThemeProvider } from 'styled-components';

import type { AppProps /*, AppContext */ } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

export default MyApp;
