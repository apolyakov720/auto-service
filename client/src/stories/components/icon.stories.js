import React from 'react';

import { CSSConstants } from '@constants';
import Icon from '@components/icon';

export default {
  title: 'Components/Icon',
  component: Icon,
};

export const Default = (args) => <Icon {...args} />;
Default.args = {
  bold: false,
  size: CSSConstants.size.M,
  color: 'red',
  source: Icon.sources.base.check,
};
