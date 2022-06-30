import React from 'react';

import { Badge } from '@/components/shared/badges';
import { CSSConstants } from '@constants';

export default {
  title: 'Components/Badge/Badge',
  component: Badge,
};

export const Basic = (args) => <Badge {...args} />;
Basic.args = {
  content: 'Это компонент "Значок"',
  theme: CSSConstants.THEMES.PRIMARY,
  squared: true,
  circled: false,
};
