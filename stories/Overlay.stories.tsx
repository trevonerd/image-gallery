import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Overlay } from '@/components/ingredients/Overlay';

export default {
    title: 'Ingredients/Overlay',
    component: Overlay,
} as Meta;

const Template: Story = args => <Overlay {...args} />;

export const Dark = Template.bind({});
Dark.args = {
    background: 'dark',
};
