import React from 'react';

import Alert from '@/components/alert';
import { CSSConstants } from '@constants';

export default {
  title: 'Components/Alert',
  component: Alert,
};

export const Basic = (args) => <Alert {...args} />;
Basic.args = {
  content: 'Это компонент "Оповещение"',
  theme: CSSConstants.theme.PRIMARY,
  closable: true,
};
