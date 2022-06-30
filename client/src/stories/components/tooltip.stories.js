import React from 'react';

import Tooltip from '@components/shared/tooltip';
import { Badge } from '@components/shared/badges';

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
