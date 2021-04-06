import React from 'react';
import { Story, Meta } from '@storybook/react';

import {
    ImagePicsum,
    ImagePicsumProps,
} from '@/components/ingredients/ImagePicsum';

export default {
    title: 'Ingredients/ImagePicsum',
    component: ImagePicsum,
} as Meta;

const Template: Story<ImagePicsumProps> = args => (
    <div style={{ height: '20vw' }}>
        <ImagePicsum {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = {
    id: '1',
    author: 'author',
};

export const Empty = Template.bind({});
Empty.args = {
    author: 'author',
};
