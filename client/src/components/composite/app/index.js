import React, { useEffect } from 'react';

import Router from '@components/composite/router';

const App = () => {
  const init = () => {
    console.log('hello');
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="application">
      <Router />
    </div>
  );
};

export default App;
