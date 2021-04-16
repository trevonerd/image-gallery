import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Modal } from '@/components/recipes/Modal';

export default {
    title: 'Recipes/Modal',
    component: Modal,
} as Meta;

const Template: Story = args => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
    open: true,
    children: <div>CHILDREN</div>,
};
