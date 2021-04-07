import React, { useReducer } from 'react';
import { Story, Meta } from '@storybook/react';

import { galleryReducer } from '@/context/galleryReducer';

import { Modal } from '@/components/recipes/Modal';
import { AppContext } from '@/context/AppContext';

export default {
    title: 'Recipes/Modal',
    component: Modal,
} as Meta;

const Template: Story = ({ selectedPicture, ...rest }) => {
    const [state, dispatch] = useReducer(galleryReducer, {
        selectedPicture,
    });

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <Modal {...rest} />
        </AppContext.Provider>
    );
};

export const Default = Template.bind({});
Default.args = {
    selectedPicture: '10',
};
