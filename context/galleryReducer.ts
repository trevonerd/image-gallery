import { ActionMap, Picture, InitialStateType } from '@/types';

export type GalleryActions = ActionMap<GalleryPayload>[keyof ActionMap<GalleryPayload>];

export enum ActionTypes {
    LoadPictures = 'LOAD_PICTURES',
    SelectPicture = 'SELECT_PICTURE',
    GotoPage = 'LOAD_PAGE',
}

type GalleryPayload = {
    [ActionTypes.LoadPictures]: {
        pictures: Picture[];
    };
    [ActionTypes.SelectPicture]: {
        selected: string;
    };
    [ActionTypes.GotoPage]: {
        page: number;
    };
};

export const galleryReducer = (
    state: InitialStateType,
    action: GalleryActions
) => {
    switch (action.type) {
        case ActionTypes.LoadPictures:
            return {
                ...state,
                pictures: action.payload.pictures,
            };
        case ActionTypes.SelectPicture:
            return {
                ...state,
                selectedPicture: action.payload.selected,
            };
        case ActionTypes.GotoPage:
            return {
                ...state,
                currentPage: action.payload.page,
            };
        default:
            return state;
    }
};
