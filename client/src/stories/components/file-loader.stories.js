import React from 'react';

import FileLoader from '@components/file-loader';

export default {
  title: 'Components/FileLoader',
  component: FileLoader,
};

export const Basic = (args) => <FileLoader {...args} />;
Basic.args = {
  percent: 30,
};
