import React, { lazy, useMemo } from 'react';

const Suspense = ({ component, ...props }) => {
  const Component = useMemo(() => lazy(() => component()), [component]);

  return (
    <React.Suspense fallback="loading...">
      <Component {...props} />
    </React.Suspense>
  );
};

export default Suspense;
