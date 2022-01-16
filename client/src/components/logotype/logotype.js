import React from 'react';

const Logotype = ({ caption }) => {
  return (
    <div className="logo">
      <div className="logotype" />
      {caption && <div className="logo__caption">{caption}</div>}
    </div>
  );
};

export default Logotype;
