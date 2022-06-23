import React from 'react';
import DatePicker from '@components/date-picker';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
};

export const Basic = (args) => <DatePicker {...args} />;
Basic.args = {};
