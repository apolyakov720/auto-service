import React from 'react';

import Alert from '@/components/shared/alert';
import { CSSConstants } from '@constants';

export default {
  title: 'Components/Alert',
  component: Alert,
};

export const Basic = (args) => <Alert {...args} />;
Basic.args = {
  content: 'Это компонент "Оповещение"',
  theme: CSSConstants.THEMES.PRIMARY,
  closable: true,
};
