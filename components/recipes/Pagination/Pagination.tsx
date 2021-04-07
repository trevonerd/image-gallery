// import React, { useState, useContext } from 'react';
import { useContext } from 'react';
import styled from 'styled-components';

import { Button } from '@/components/ingredients/Button';
import { Typography } from '@/components/ingredients/Typography';

import { AppContext } from '@/context/AppContext';
import { ActionTypes } from '@/context/galleryReducer';

const PaginationContainer = styled('div')`
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
`;

const CurrentPage = styled('div')`
    align-self: center;
`;

const Pagination: React.FC = () => {
    const { state, dispatch } = useContext(AppContext);

    return (
        <PaginationContainer>
            <Button
                onClick={() => {
                    dispatch({
                        type: ActionTypes.GotoPage,
                        payload: { page: state.currentPage - 1 },
                    });
                }}
                disabled={state.currentPage === 1 ? true : false}
            >
                Previous Page
            </Button>
            <CurrentPage>
                <Typography size="sm">PAGE {state.currentPage}</Typography>
            </CurrentPage>
            <Button
                onClick={() => {
                    dispatch({
                        type: ActionTypes.GotoPage,
                        payload: { page: state.currentPage + 1 },
                    });
                }}
            >
                Next Page
            </Button>
        </PaginationContainer>
    );
};

export default Pagination;
