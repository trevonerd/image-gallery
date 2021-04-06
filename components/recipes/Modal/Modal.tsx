import { useContext, useEffect } from 'react';
import styled from 'styled-components';

import { AppContext } from '@/context/AppContext';
import { ActionTypes } from '@/context/galleryReducer';

import { Overlay } from '@/components/ingredients/Overlay';
import { ImagePicsum } from '@/components/ingredients/ImagePicsum';

import { ReactComponent as Close } from '@/assets/close.svg';

const ModalContainer = styled('div')`
    width: 90vw;
    height: 90vh;
    position: fixed;
    background-color: #fff;
    box-shadow: 0 5px 4px rgba(1, 1, 1, 0.5);
    padding: 26px;
    z-index: 20;
`;

export interface CloseIcon extends React.HTMLAttributes<HTMLElement> {
    onClick: React.MouseEventHandler<HTMLDivElement>;
}

const CloseIcon = styled(Close)<CloseIcon>`
    position: absolute;
    right: 6px;
    top: 6px;
    cursor: pointer;
`;

const ImageContainer = styled('div')`
    width: 100%;
    height: 100%;
    position: relative;
`;

const Modal = () => {
    const { state, dispatch } = useContext(AppContext);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    useEffect(() => {
        const close = (e: KeyboardEvent) => {
            if (e.code === 'Escape') {
                closeModal();
            }
        };
        window.addEventListener('keydown', close);
        return () => window.removeEventListener('keydown', close);
    }, []);

    const closeModal = () => {
        dispatch({
            type: ActionTypes.SelectPicture,
            payload: { selected: '' },
        });
    };

    const handleClose = (e: React.MouseEvent) => {
        e.preventDefault();
        closeModal();
    };

    const handleClickOnModal = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <Overlay onClick={handleClose}>
            <ModalContainer onClick={handleClickOnModal}>
                <CloseIcon onClick={handleClose} width="16" height="16" />
                <ImageContainer>
                    <ImagePicsum id={state.selectedPicture} />
                </ImageContainer>
            </ModalContainer>
        </Overlay>
    );
};

export default Modal;
