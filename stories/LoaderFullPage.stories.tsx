import React from 'react';
import { Story, Meta } from '@storybook/react';

import { LoaderFullPage } from '@/components/recipes/LoaderFullPage';

export default {
    title: 'Recipes/LoaderFullPage',
    component: LoaderFullPage,
} as Meta;

const Template: Story = args => <LoaderFullPage {...args} />;

export const Default = Template.bind({});
