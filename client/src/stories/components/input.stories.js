import React from 'react';

import Input from '@components/input';

export default {
  title: 'Components/Input',
  component: Input,
};

export const Basic = (args) => <Input {...args} />;
Basic.args = {
  theme: '',
  placeholder: 'Hello world',
};
