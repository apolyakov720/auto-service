import React from 'react';

import { Badge } from '@/components/badge';
import { CSSConstants } from '@constants';

export default {
  title: 'Components/Badge/Badge',
  component: Badge,
};

export const Basic = (args) => <Badge {...args} />;
Basic.args = {
  content: 'Это компонент "Значок"',
  theme: CSSConstants.theme.PRIMARY,
  squared: true,
  circled: false,
};
