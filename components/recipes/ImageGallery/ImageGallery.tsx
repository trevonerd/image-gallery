import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from '@/context/AppContext';
import { ActionTypes } from '@/context/galleryReducer';

import { Picture } from '@/types';

import ImagePicsum from '@/components/ingredients/ImagePicsum/ImagePicsum';
import { Typography } from '@/components/ingredients/Typography';
import { ReactComponent as PhotoCamera } from '@/assets/photo-camera.svg';

const ImageGalleryThumb = styled('div')`
    cursor: pointer;
    position: relative;
    width: 100%;
    height: 100%;
    transition: box-shadow 200ms;
    border: 2px solid #fff;

    &:hover {
        box-shadow: 0px 6px 7px rgb(0 0 0 / 80%);
        border-color: #ec008c;
    }
`;

const ImageGalleryContainer = styled('div')<ImageGalleryContainerProps>`
    ${({ columns, picturesNumber, showAllPictures, theme }) => `
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(${
        showAllPictures ? Math.round(picturesNumber) : 5
    },
        40vw
    );


    @media (min-width: ${theme.breakpoints.sm + 1}px) and (max-width: ${
        theme.breakpoints.md
    }px) {
        grid-template-columns: repeat(${columns ? Math.round(columns / 2) : 0},
            1fr
        );
        grid-template-rows: repeat(${
            showAllPictures
                ? columns
                    ? Math.round(picturesNumber / (columns / 2)) + 1
                    : 0
                : 4
        },
            28vw
        );
    }

    @media (min-width: ${theme.breakpoints.md + 1}px) {
        grid-template-columns: repeat(${columns}, 1fr);
        grid-template-rows: repeat(${
            showAllPictures
                ? columns
                    ? Math.round(picturesNumber / columns + 1)
                    : 0
                : 2
        },
            12vw
        );
    }


    @media (min-width: ${theme.breakpoints.sm + 1}px) {
        ${ImageGalleryThumb}:nth-child(1) {
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row-start: 1;
            grid-row-end: 3;
        }
    }`}
`;

export interface ThumbOverlayProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    onClick: React.MouseEventHandler<HTMLDivElement>;
}

const ThumbOverlay = styled('div')<ThumbOverlayProps>`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(3, 3, 3, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    z-index: 1;
`;

const PhotoCameraIconContainer = styled('div')`
    border-top: 2px solid #fff;
    border-bottom: 2px solid #fff;
    padding: 8px 12px;
`;

export interface ImageGalleryProps {
    columns?: number;
    showAllPictures?: boolean;
}

export interface ImageGalleryContainerProps extends ImageGalleryProps {
    picturesNumber: number;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ columns = 4 }) => {
    const { state, dispatch } = useContext(AppContext);
    const [showAllPictures, setShowAllPictures] = useState(false);

    const pictures = state.pictures || [];

    const handleLastImageOverlayClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setShowAllPictures(true);
    };

    const handleThumbClick = (pictureID: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        dispatch({
            type: ActionTypes.SelectPicture,
            payload: { selected: pictureID },
        });
    };

    return (
        <ImageGalleryContainer
            columns={columns}
            picturesNumber={pictures?.length}
            showAllPictures={showAllPictures}
        >
            {pictures.slice(0, 5).map((picture: Picture, i: number) => (
                <ImageGalleryThumb
                    key={picture.id}
                    onClick={handleThumbClick(picture.id)}
                >
                    <ImagePicsum id={picture.id} author={picture.author} />
                    {!showAllPictures && i === 4 ? (
                        <ThumbOverlay onClick={handleLastImageOverlayClick}>
                            <Typography color="white" size="xl">
                                {pictures.length - 5}
                            </Typography>
                            <PhotoCameraIconContainer>
                                <PhotoCamera
                                    fill="white"
                                    width="20"
                                    height="20"
                                />
                            </PhotoCameraIconContainer>
                            <Typography color="white">more pictures</Typography>
                        </ThumbOverlay>
                    ) : null}
                </ImageGalleryThumb>
            ))}

            {showAllPictures &&
                pictures.slice(5, pictures.length).map((picture: Picture) => (
                    <ImageGalleryThumb
                        key={picture.id}
                        onClick={handleThumbClick(picture.id)}
                    >
                        <ImagePicsum id={picture.id} author={picture.author} />
                    </ImageGalleryThumb>
                ))}
        </ImageGalleryContainer>
    );
};

export default ImageGallery;
