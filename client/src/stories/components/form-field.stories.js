import React from 'react';

import FormField from '@components/form-field';
import Input from '@components/input';

export default {
  title: 'Components/FormField',
  component: FormField,
};

export const Default = (args) => (
  <FormField {...args}>
    <Input />
  </FormField>
);

Default.args = {
  label: 'login',
  required: true,
  hints: [
    'Придумайте логин для входа в систему',
    'Логин должен соответствовать правилам безопасности',
  ],
  errors: ['Логин должен содержать не менее 10 символов', 'Обязательно для заполнения'],
};
