import React from 'react';

import SearchBar from '@components/shared/search-bar';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
};

export const Basic = (args) => <SearchBar {...args} />;
Basic.args = {
  placeholder: 'Введите искомое значение',
};
