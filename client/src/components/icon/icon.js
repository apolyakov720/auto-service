import React from 'react';

import baseIconSet from './sets/base';

const Icon = ({ source }) => {
  if (!source) {
    return null;
  }

  const Svg = source;

  return (
    <div className="icon">
      <Svg />
    </div>
  );
};

Icon.sources = {
  base: baseIconSet,
};

export default Icon;
