import React from 'react';

import { Badge } from '@/components/badge';

export default {
  title: 'Components/Badge/Badge',
  component: Badge,
};

const Template = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  content: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: 'secondary',
  content: 'Secondary',
};

export const Info = Template.bind({});
Info.args = {
  theme: 'info',
  content: 'Info',
};

export const Warning = Template.bind({});
Warning.args = {
  theme: 'warning',
  content: 'Warning',
};

export const Error = Template.bind({});
Error.args = {
  theme: 'error',
  content: 'Error',
};

export const Circled = Template.bind({});
Circled.args = {
  content: 'Circled',
  circled: true,
};

export const Squared = Template.bind({});
Squared.args = {
  content: 'Squared',
  squared: true,
};
