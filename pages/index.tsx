import { useEffect, useContext } from 'react';

import { DefaultPage } from '@/components/templates';

import { Typography } from '@/components/ingredients/Typography';

import { Header } from '@/components/recipes/Header';
import { LoaderFullPage } from '@/components/recipes/LoaderFullPage';
import { ImageGallery } from '@/components/recipes/ImageGallery';
import { Modal } from '@/components/recipes/Modal';
import { Pagination } from '@/components/recipes/Pagination';

import { Picture } from '@/types';
import { ActionTypes } from '@/context/galleryReducer';

import { usePictures } from '@/hooks';

import { AppContext } from '@/context/AppContext';

// export async function getServerSideProps() {
//     let pictures = [];
//     try {
//         pictures = await picturesFetcher();
//     } catch (err) {
//         console.error(
//             'Guru Meditation - There was a problem fetching pictures!'
//         );
//     }
//     return { props: { pictures } };
// }

interface HomeProps {
    pictures: Picture[];
}

export default function Home(props: HomeProps) {
    const initialData = props.pictures;

    const { state, dispatch } = useContext(AppContext);

    const { pictures, isLoading, isError } = usePictures({
        initialData,
        page: state.currentPage,
    });

    useEffect(() => {
        if (pictures)
            dispatch({
                type: ActionTypes.LoadPictures,
                payload: { pictures },
            });
    }, [pictures]);

    return (
        <DefaultPage title="LM Image Gallery | Marco Trevisani">
            <Header />
            {isLoading ? <LoaderFullPage /> : null}
            {isError ? (
                <Typography as="h2" color="error">
                    <b>
                        'Guru Meditation - There was a problem fetching
                        pictures!'
                    </b>
                </Typography>
            ) : null}
            <ImageGallery />
            <Pagination />
            {state.selectedPicture ? <Modal /> : null}
        </DefaultPage>
    );
}
