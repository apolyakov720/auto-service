import React, { useEffect } from 'react';

import Router from '@components/router';

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
