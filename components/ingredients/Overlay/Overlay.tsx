// import React, { useState, useContext } from 'react';
import styled from 'styled-components';

const StyledOverlay = styled('div')<OverlayProps>`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${({ background }) =>
        background === 'dark' ? 'rgba(1, 1, 1, 0.9)' : 'rgba(255,255,255,0.3)'};
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export interface OverlayProps extends React.HTMLAttributes<HTMLElement> {
    onClick: React.MouseEventHandler<HTMLDivElement>;
    background?: 'dark' | 'light';
}

const Overlay: React.FC<OverlayProps> = ({
    children,
    onClick,
    background = 'dark',
}) => {
    return (
        <StyledOverlay background={background} onClick={onClick}>
            {children}
        </StyledOverlay>
    );
};

export default Overlay;
