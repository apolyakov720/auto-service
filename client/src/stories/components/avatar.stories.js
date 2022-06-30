import React from 'react';

import Avatar from '@components/shared/avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
};

export const Basic = (args) => <Avatar {...args} />;
Basic.args = {
  source:
    'https://e7.pngegg.com/pngimages/168/549/png-clipart-computer-icons-avatar-male-super-b-face-heroes-thumbnail.png',
  size: 'm',
};
