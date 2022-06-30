import React from 'react';

import { CSSConstants } from '@constants';
import Icon from '@components/shared/icon';

export default {
  title: 'Components/Icon',
  component: Icon,
};

export const Default = (args) => <Icon {...args} />;
Default.args = {
  bold: false,
  size: CSSConstants.SIZES.M,
  color: 'red',
  source: Icon.sources.base.check,
};
