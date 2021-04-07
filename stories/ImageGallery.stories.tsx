import React, { useReducer } from 'react';
import { Story, Meta } from '@storybook/react';

import { galleryReducer } from '@/context/galleryReducer';

import { ImageGallery } from '@/components/recipes/ImageGallery';
import { AppContext } from '@/context/AppContext';

export default {
    title: 'Recipes/ImageGallery',
    component: ImageGallery,
} as Meta;

const Template: Story = ({ pictures, ...rest }) => {
    const [state, dispatch] = useReducer(galleryReducer, {
        pictures,
    });

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <ImageGallery {...rest} />
        </AppContext.Provider>
    );
};

export const FiveImages = Template.bind({});
FiveImages.args = {
    pictures: [
        {
            id: '0',
            author: 'Alejandro Escamilla',
        },
        {
            id: '1',
            author: 'Alejandro Escamilla',
        },
        {
            id: '10',
            author: 'Paul Jarvis',
        },
        {
            id: '100',
            author: 'Tina Rataj',
        },
        {
            id: '1000',
            author: 'Lukas Budimaier',
        },
    ],
};

export const MoreThenFiveImages = Template.bind({});
MoreThenFiveImages.args = {
    pictures: [
        {
            id: '0',
            author: 'Alejandro Escamilla',
        },
        {
            id: '1',
            author: 'Alejandro Escamilla',
        },
        {
            id: '10',
            author: 'Paul Jarvis',
        },
        {
            id: '100',
            author: 'Tina Rataj',
        },
        {
            id: '1000',
            author: 'Lukas Budimaier',
        },
        {
            id: '1001',
            author: 'Danielle MacInnes',
        },
        {
            id: '1002',
            author: 'NASA',
        },
        {
            id: '1003',
            author: 'E+N Photographies',
            width: 1181,
            height: 1772,
            url: 'https://unsplash.com/photos/GYumuBnTqKc',
            download_url: 'https://picsum.photos/id/1003/1181/1772',
        },
        {
            id: '1004',
            author: 'Greg Rakozy',
            width: 5616,
            height: 3744,
            url: 'https://unsplash.com/photos/SSxIGsySh8o',
            download_url: 'https://picsum.photos/id/1004/5616/3744',
        },
    ],
};

export const ShowAllPictures = Template.bind({});
ShowAllPictures.args = {
    showAllPictures: true,
    pictures: [
        {
            id: '0',
            author: 'Alejandro Escamilla',
        },
        {
            id: '1',
            author: 'Alejandro Escamilla',
        },
        {
            id: '10',
            author: 'Paul Jarvis',
        },
        {
            id: '100',
            author: 'Tina Rataj',
        },
        {
            id: '1000',
            author: 'Lukas Budimaier',
        },
        {
            id: '1001',
            author: 'Danielle MacInnes',
        },
        {
            id: '1002',
            author: 'NASA',
        },
        {
            id: '1003',
            author: 'E+N Photographies',
            width: 1181,
            height: 1772,
            url: 'https://unsplash.com/photos/GYumuBnTqKc',
            download_url: 'https://picsum.photos/id/1003/1181/1772',
        },
        {
            id: '1004',
            author: 'Greg Rakozy',
            width: 5616,
            height: 3744,
            url: 'https://unsplash.com/photos/SSxIGsySh8o',
            download_url: 'https://picsum.photos/id/1004/5616/3744',
        },
    ],
};
