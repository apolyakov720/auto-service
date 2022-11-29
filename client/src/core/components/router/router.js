import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';

import Reroute from './reroute';
import Layout from '../layout';
import ErrorIndicator from '../error-indicator';
import ModuleLoader from '../module-loader';
import commonUtils from '@utils/common';
import localeService from '../../services/locale';

class Router extends React.Component {
  get currentRoute() {
    const { routes, location } = this.props;

    return routes.find(({ path }) => path === location.pathname) || {};
  }

  get layout() {
    return (
      <Layout>
        <Layout.Header>[Header]</Layout.Header>
        <Layout.Main>
          <ErrorIndicator alertContent={localeService.take('errors/module')}>
            <Outlet />
          </ErrorIndicator>
        </Layout.Main>
        <Layout.Footer>[Footer]</Layout.Footer>
      </Layout>
    );
  }

  render() {
    const { routes } = this.props;

    return (
      <Routes>
        <Route path="/" element={this.layout}>
          {routes?.map((route) => {
            const { id, isIndex, path } = route;

            return (
              <Route
                key={id}
                index={isIndex}
                path={path}
                element={
                  <Reroute>
                    <ModuleLoader loaderId={id} />
                  </Reroute>
                }
              />
            );
          })}
          <Route path="*" element={<Reroute />} />
        </Route>
      </Routes>
    );
  }
}

export default Router;
