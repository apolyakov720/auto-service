import React from 'react';

import { Radio } from '@components/switch';

export default {
  title: 'Components/Switch/Radio',
  component: Radio,
};

export const Basic = (args) => <Radio {...args} />;
Basic.args = {
  caption: 'Normal radio button',
  checked: false,
  onChange: () => null,
};
