import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Popover } from '../components/index';

export default {
  title: 'Popover',
  component: Popover,
} as Meta;

const Template: Story = () =>
  <Popover title="title" description="description" />;

export const PopoverStory = Template.bind({});

PopoverStory.args = {
  title: 'title',
  description: 'description'
};
