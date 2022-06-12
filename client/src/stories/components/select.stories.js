import React from 'react';

import Select from '@components/select';

export default {
  title: 'Components/Select',
  component: Select,
};

export const Default = (args) => <Select {...args} />;
Default.args = {
  items: [
    {
      id: 1,
      name: 'Honda',
    },
    {
      id: 2,
      name: 'Ford',
    },
    {
      id: 3,
      name: 'Lada',
    },
    {
      id: 4,
      name: 'Mazda',
    },
  ],
};
