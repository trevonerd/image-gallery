// import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { Typography } from '@/components/ingredients/Typography';

import { ReactComponent as GitHub } from '@/assets/github.svg';

const HeaderContainer = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Typography as="h1" size="xl">
                Image Gallery
            </Typography>
            <a
                href="https://github.com/trevonerd/image-gallery"
                title="go to GitHub"
                target="_blank"
            >
                <GitHub width="20" height="20" />
            </a>
        </HeaderContainer>
    );
};

export default Header;
