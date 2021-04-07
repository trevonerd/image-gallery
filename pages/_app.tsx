import Head from 'next/head';
import { GlobalStyle, theme } from '../styles';
import { ThemeProvider } from 'styled-components';

import { AppProvider } from '@/context/AppContext';

import type { AppProps /*, AppContext */ } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    rel="preload"
                    href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
                    as="style"
                />
            </Head>
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
