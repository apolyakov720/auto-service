import React from 'react';
import { CountBadge } from '@components/shared/badges';

export default {
  title: 'Components/Badge/CountBadge',
  component: CountBadge,
};

export const Basic = (args) => <CountBadge {...args} />;
Basic.args = {
  count: 15,
  limit: 1,
};
