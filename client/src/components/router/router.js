import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Suspense from '@components/suspense';

import routerConfig from './config';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routerConfig.map(({ path, component }) => {
          return <Route key={path} path={path} element={<Suspense component={component} />} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
