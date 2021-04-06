// import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { Typography } from '@/components/ingredients/Typography';

import { ReactComponent as GitHub } from '@/assets/github.svg';

const HeaderContainer = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Typography as="h1" size="xl">
                Image Gallery
            </Typography>
            <a href="#">
                <GitHub width="20" height="20" />
            </a>
        </HeaderContainer>
    );
};

export default Header;
