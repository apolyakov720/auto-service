import React from 'react';

import Tooltip from '@components/tooltip';
import { Badge } from '@components/badge'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
};

export const Basic = (args) => <Tooltip {...args} />;
Basic.args = {
  children: <Badge content="Show your unread messages" />,
  content: 'Your unread messages',
  position: 'top',
};
