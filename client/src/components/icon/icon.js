import React from 'react';

import baseIconSet from './sets/base';

const Icon = ({ source }) => {
  if (!source) {
    return null;
  }

  const Svg = source;

  return <Svg />;
};

Icon.sources = {
  base: baseIconSet,
};

export default Icon;
