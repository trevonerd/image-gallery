import Head from 'next/head';
import styled from 'styled-components';

const MainContainer = styled('div')`
    ${({ theme }) => `
    padding: 8px;
    margin: 0 auto;

    @media (min-width: ${theme.breakpoints.md}px) {
        max-width: ${theme.breakpoints.md}px;
        padding: 16px;
    }

    @media (min-width: ${theme.breakpoints.lg}px) {
        max-width: ${theme.breakpoints.lg}px;
        padding: 32px;
    }

    @media (min-width: ${theme.breakpoints.xl}px) {
        max-width: ${theme.breakpoints.xl}px;
    }
`}
`;

export interface PageProps {
    children: React.ReactNode;
    title?: string;
}

const DefaultPage: React.FC<PageProps> = ({ children, title = 'LM TEST' }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MainContainer>{children}</MainContainer>

            <footer>
                <span>Made by @trevonerd</span>
            </footer>
        </div>
    );
};

export default DefaultPage;
