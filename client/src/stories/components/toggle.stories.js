import React from 'react';
import { Toggle } from '@components/switch';

export default {
  title: 'Components/Switch/Toggle',
  component: Toggle,
};

export const Basic = (args) => <Toggle {...args} />;
Basic.args = {
  caption: 'Normal toggle button',
};
