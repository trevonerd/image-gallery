import Head from 'next/head';
import styled from 'styled-components';
import { Typography } from '../ingredients/Typography';

const MainContainer = styled('div')`
    ${({ theme }) => `
    padding: 8px;
    margin: 0 auto;
    min-height: calc(100vh - 95px);

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

const Footer = styled('footer')`
    ${({ theme }) => `
    padding: 6px;
    border-top: 1px solid ${theme.colors.primary};
    text-align: center;
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

            <Footer>
                <span>
                    <Typography size="xs">
                        © Copyright 2020{' '}
                        <a href="mailto:marco.trevisani81@gmail.com">
                            Marco Trevisani
                        </a>
                        . Handcrafted in Bologna.
                    </Typography>
                </span>
            </Footer>
        </div>
    );
};

export default DefaultPage;
