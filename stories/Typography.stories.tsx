import React from 'react';
import { Story, Meta } from '@storybook/react';

import {
    Typography,
    TypographyProps,
} from '@/components/ingredients/Typography';

export default {
    title: 'Ingredients/Typography',
    component: Typography,
} as Meta;

const Template: Story<TypographyProps> = args => <Typography {...args} />;

export const SizeXs = Template.bind({});
SizeXs.args = {
    color: '#333',
    size: 'xs',
    children: 'Text Size XS',
};

export const SizeSm = Template.bind({});
SizeSm.args = {
    color: '#333',
    size: 'sm',
    children: 'Text Size SM',
};

export const SizeMd = Template.bind({});
SizeMd.args = {
    color: '#333',
    size: 'md',
    children: 'Text Size MD',
};

export const SizeLg = Template.bind({});
SizeLg.args = {
    color: '#333',
    size: 'lg',
    children: 'Text Size LG',
};

export const SizeXl = Template.bind({});
SizeXl.args = {
    color: '#333',
    size: 'xl',
    children: 'Text Size XL',
};

export const customElement = Template.bind({});
customElement.args = {
    as: 'h1',
    color: '#333',
    children: '<h1></h1>',
};
