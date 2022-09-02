import React, { useState, useEffect } from 'react';

const Suspense = ({ loader, ...props }) => {
  const [Component, setComponent] = useState();

  useEffect(() => {
    React.startTransition(() => {
      setComponent(React.lazy(loader));
    });
  }, [loader]);

  return (
    <React.Suspense fallback="loading...">{Component && <Component {...props} />}</React.Suspense>
  );
};

export default Suspense;
