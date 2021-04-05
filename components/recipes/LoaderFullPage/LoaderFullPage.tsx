import styled from 'styled-components';

import { Loader } from '@/ingredients/Loader';

const Overlay = styled('div')`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgb(255, 255, 255, 0.8);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LoaderFullPage = () => {
    return (
        <Overlay>
            <Loader />
        </Overlay>
    );
};
export default LoaderFullPage;
