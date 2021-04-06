import { createContext, useReducer, Dispatch } from 'react';
import { galleryReducer, GalleryActions } from '@/context/galleryReducer';

import { InitialStateType } from '@/types';

const initialState: InitialStateType = {
    pictures: [],
    selectedPicture: '',
    currentPage: 1,
};

const AppContext = createContext<{
    state: InitialStateType;
    dispatch: Dispatch<GalleryActions>;
}>({
    state: initialState,
    dispatch: () => null,
});

const AppProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(galleryReducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };
