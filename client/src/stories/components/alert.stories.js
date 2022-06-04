import React from 'react';

import Alert from '@/components/alert';

export default {
  title: 'Components/Alert',
  component: Alert,
};

const Template = (args) => <Alert {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  content: 'Well done! You successfully read this important alert message.',
  closable: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: 'secondary',
  content: 'This is a secondary alert message.',
  closable: true,
};

export const Info = Template.bind({});
Info.args = {
  theme: 'info',
  content: "Heads up! This alert needs your attention, but it's not super important.",
  closable: true,
};

export const Warning = Template.bind({});
Warning.args = {
  theme: 'warning',
  content: "Warning! Better check yourself, you're not looking too good.",
  closable: true,
};

export const Error = Template.bind({});
Error.args = {
  theme: 'error',
  content: 'Oh snap! Change a few things up and try submitting again.',
  closable: true,
};
