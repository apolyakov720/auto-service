import React from 'react';

import Select from '@components/select';

export default {
  title: 'Components/Select',
  component: Select,
};

export const Default = (args) => <Select {...args} />;
Default.args = {
  label: 'Марка машины',
  required: true,
  searchable: true,
  multiple: false,
  placeholder: 'Выберите марку машины',
  placeholderEmpty: 'Список марок машин пуст',
  items: [
    {
      id: '1',
      title: 'Honda',
    },
    {
      id: '2',
      title: 'Ford',
    },
    {
      id: '3',
      title: 'Lada',
    },
    {
      id: '4',
      title: 'Mazda',
    },
    {
      id: '5',
      title: 'Subaru',
    },
    {
      id: '7',
      title: 'BMW',
    },
    {
      id: '8',
      title: 'Mercedes',
    },
    {
      id: '9',
      title: 'Audi',
    },
    {
      id: '10',
      title: 'Saab',
    },
  ],
};
