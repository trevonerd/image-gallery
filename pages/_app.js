import '../styles/globals.css';
import { GlobalStyle, theme } from '../styles';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />;
            </ThemeProvider>
        </>
    );
}

export default MyApp;
