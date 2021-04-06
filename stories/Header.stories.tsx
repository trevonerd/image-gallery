import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Header } from '@/components/recipes/Header';

export default {
    title: 'Recipes/Header',
    component: Header,
} as Meta;

const Template: Story = args => <Header {...args} />;

export const Default = Template.bind({});
