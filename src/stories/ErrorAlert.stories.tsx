import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import ErrorAlert from '../components/ErrorAlert/ErrorAlert';

export default {
  title: 'Error Alert',
  component: ErrorAlert,
} as Meta;

const Template: Story = () =>
  <ErrorAlert error={true} />;

export const ErrorAlertStory = Template.bind({});

ErrorAlertStory.args = {
  error: true
};
