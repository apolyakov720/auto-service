import React from 'react';

import Chip from '@components/shared/chip';
import { CSSThemes, CSSSizes } from '@utils/css';

export default {
  title: 'Components/Chip',
  component: Chip,
};

export const Basic = (args) => <Chip {...args} />;
Basic.args = {
  id: '0',
  label: 'Это компонент "Фишка"',
  modifiers: {
    theme: CSSThemes.primary,
    textual: false,
  },
  classes: {
    size: CSSSizes.m,
  },
};
