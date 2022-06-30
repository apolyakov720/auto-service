import React from 'react';

import { Checkbox } from '@components/shared/switches';

export default {
  title: 'Components/Switch/Checkbox',
  component: Checkbox,
};

export const Basic = (args) => <Checkbox {...args} />;
Basic.args = {
  caption: 'Normal radio button',
};
