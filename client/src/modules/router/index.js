import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './layout';
import Suspense from '@components/functional/suspense';
import { CommonUtils } from '@utils';

import config from './config';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Routes>
            {config.map(({ path, loader, ...props }) => {
              if (!path || !CommonUtils.isFunction(loader)) {
                return null;
              }

              return (
                <Route key={path} path={path} element={<Suspense loader={loader} {...props} />} />
              );
            })}
          </Routes>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default Router;
