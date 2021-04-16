import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Overlay } from '@/components/ingredients/Overlay';

import { ReactComponent as Close } from '@/assets/close.svg';

const ModalContainer = styled('div')`
    width: 90vw;
    height: 35vh;
    position: fixed;
    background-color: #fff;
    box-shadow: 0 5px 4px rgba(1, 1, 1, 0.5);
    padding: 5px;
    z-index: 20;

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
        width: 90vw;
        height: 85vh;
        position: fixed;
        background-color: #fff;
        box-shadow: 0 5px 4px rgb(1 1 1 / 50%);
        padding: 10px;
        z-index: 20;
    }
`;

export interface CloseIcon extends React.HTMLAttributes<HTMLElement> {
    onClick: React.MouseEventHandler<HTMLDivElement>;
}

const CloseIcon = styled(Close)<CloseIcon>`
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    z-index: 30;
    padding: 4px;
    background-color: ${({ theme }) => theme.colors.white};
    border-bottom-left-radius: 5px;

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
        right: 3px;
        top: 3px;
    }
`;

const MainContainer = styled('div')`
    width: 100%;
    height: 100%;
    position: relative;
`;

export interface ModalProps {
    children: React.ReactNode;
    open: boolean;
    onClose?: Function;
}

const Modal: React.FC<ModalProps> = ({
    open,
    onClose,
    children,
}: ModalProps) => {
    const [isOpen, setIsOpen] = useState(open);

    useEffect(() => {
        setIsOpen(open);
    }, [open]);

    useEffect(() => {
        if (!open) return;

        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [open]);

    useEffect(() => {
        if (!open) return;

        const close = (e: KeyboardEvent) => {
            if (e.code === 'Escape') {
                closeModal();
            }
        };
        window.addEventListener('keydown', close);
        return () => window.removeEventListener('keydown', close);
    }, [open]);

    const closeModal = () => {
        setIsOpen(false);
        onClose && onClose();
    };

    const handleClose = (e: React.MouseEvent) => {
        e.preventDefault();
        closeModal();
    };

    const handleClickOnModal = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return isOpen ? (
        <Overlay onClick={handleClose}>
            <ModalContainer onClick={handleClickOnModal}>
                <CloseIcon onClick={handleClose} width="16" height="16" />
                <MainContainer>{children}</MainContainer>
            </ModalContainer>
        </Overlay>
    ) : null;
};

export default Modal;
