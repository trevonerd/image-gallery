import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from '@/components/ingredients/Button';

export default {
    title: 'Ingredients/Button',
    component: Button,
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Button Disabled',
    disabled: true,
};
