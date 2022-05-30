import React from 'react';
import { CountBadge } from '@components/badge';

export default {
  title: 'Components/CountBadge',
  component: CountBadge,
};

export const Default = (args) => <CountBadge {...args} />;

Default.args = {
  count: 15,
  limit: 1,
};
