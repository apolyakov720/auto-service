import React from 'react';

import Button from '@components/button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Basic = (args) => <Button {...args} />;
Basic.args = {
  caption: 'Button',
};
