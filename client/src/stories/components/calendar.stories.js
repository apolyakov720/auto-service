import React from 'react';

import Calendar from '@components/calendar';

export default {
  title: 'Components/Calendar',
  component: Calendar,
};

export const Basic = (args) => <Calendar {...args} />;
Basic.args = {};
