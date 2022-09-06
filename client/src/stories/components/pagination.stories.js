import React from 'react';

import Pagination from '@components/shared/pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
};

export const Basic = (args) => <Pagination {...args} />;
Basic.args = {
  quantity: 61,
  size: 5,
};
