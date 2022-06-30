import React from 'react';

import Loader from '@/components/shared/loader';

export default {
  title: 'Components/Loader',
  component: Loader,
};

export const Basic = (args) => <Loader {...args} />;
Basic.args = {};
