import React from 'react';

import Loader from '@/components/loader';

export default {
  title: 'Components/Loader',
  component: Loader,
};

export const Basic = (args) => <Loader {...args} />;
Basic.args = {};
