import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Navbar } from '../components/index';

export default {
  title: 'Navbar',
  component: Navbar,
} as Meta;

const Template: Story = () =>
  <Navbar />;

export const NavbarStory = Template.bind({});
