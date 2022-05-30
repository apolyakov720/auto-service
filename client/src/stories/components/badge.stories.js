import React from 'react';

import { Badge } from '@/components/badge';

export default {
  title: 'Components/Badge',
  component: Badge,
};

export const Default = (args) => <Badge {...args} />;

Default.args = {
  type: 'secondary',
  content: 'Hello world',
  circled: false,
  squared: false,
};
