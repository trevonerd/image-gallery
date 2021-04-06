import '../styles/globals.css';
import { GlobalStyle, theme } from '../styles';
import { ThemeProvider } from 'styled-components';

import { AppProvider } from '@/context/AppContext';

import type { AppProps /*, AppContext */ } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <AppProvider>
                    <Component {...pageProps} />
                </AppProvider>
            </ThemeProvider>
        </>
    );
}

export default MyApp;
