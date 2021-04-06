import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Loader } from '@/components/ingredients/Loader';

export default {
    title: 'Ingredients/Loader',
    component: Loader,
} as Meta;

const Template: Story = args => <Loader {...args} />;

export const Default = Template.bind({});
