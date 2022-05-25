import React from 'react';

import Icon from '@components/icon';

const Checkbox = () => {
  return (
    <label className="checkbox">
      <input className="input-no-visible" type="checkbox" />
      <span className="checkbox__input">
        <Icon source={Icon.sources.base.check} />
      </span>
      <span className="checkbox__caption">Save my account data</span>
    </label>
  );
};

export default Checkbox;
