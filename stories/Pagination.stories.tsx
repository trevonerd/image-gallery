import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Pagination } from '@/components/recipes/Pagination';
import { AppContext } from '@/context/AppContext';

export default {
    title: 'Recipes/Pagination',
    component: Pagination,
} as Meta;

const Template: Story = ({ currentPage, ...rest }) => (
    <AppContext.Provider value={{ state: { currentPage } }}>
        <Pagination {...rest} />
    </AppContext.Provider>
);

export const FirstPage = Template.bind({});
FirstPage.args = {
    currentPage: 1,
};

export const OtherPages = Template.bind({});
OtherPages.args = {
    currentPage: 2,
};
