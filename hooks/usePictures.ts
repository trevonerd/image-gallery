import useSWR from 'swr';

import { Picture, UsePictures } from '@/types';

const picturesAPIUrl =
    process.env.PICTURES_API_URL || 'https://picsum.photos/v2/list';

export const picturesFetcher = (url: string) => fetch(url).then(r => r.json());

const usePictures = ({
    initialData,
    page = 1,
    limit = 21,
}: {
    initialData: Picture[];
    page?: number;
    limit?: number;
}): UsePictures => {
    const pictureAPIUrlwithPage = `${picturesAPIUrl}?page=${page}&limit=${limit}`;
    const { data, error } = useSWR(pictureAPIUrlwithPage, picturesFetcher, {
        initialData,
    });

    return {
        pictures: data,
        isLoading: !error && !data,
        isError: error,
    };
};

export default usePictures;
