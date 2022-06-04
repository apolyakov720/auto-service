import React from 'react';

import Pagination from '@/components/pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
};

export const Basic = (args) => <Pagination {...args} />;
Basic.args = {
  quantity: 40,
  size: 5,
};
