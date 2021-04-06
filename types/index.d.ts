export interface Picture {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
}

export type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
        ? {
              type: Key;
          }
        : {
              type: Key;
              payload: M[Key];
          };
};

export type InitialStateType = {
    pictures: Picture[];
    selectedPicture: string;
    currentPage: number;
};

export interface UsePictures {
    pictures: Picture[];
    isLoading: boolean;
    isError: boolean;
}
