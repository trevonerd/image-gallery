// import React, { useState, useContext } from 'react';
import styled from 'styled-components';

const StyledOverlay = styled('div')`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(1, 1, 1, 0.9);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export interface OverlayProps extends React.HTMLAttributes<HTMLElement> {
    onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Overlay: React.FC<OverlayProps> = ({ children, onClick }) => {
    return <StyledOverlay onClick={onClick}>{children}</StyledOverlay>;
};

export default Overlay;
