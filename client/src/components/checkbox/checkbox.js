import React from 'react';

const Checkbox = () => {
  return (
    <label className="checkbox">
      <input className="input-no-visible" type="checkbox" />
      <span className="checkbox__input" />
    </label>
  );
};

export default Checkbox;
