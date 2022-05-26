import React from 'react';

const withRef = (Component) =>
  React.forwardRef((props, ref) => (
    <div ref={ref}>
      <Component {...props} />
    </div>
  ));

export default withRef;
