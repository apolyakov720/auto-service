import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';

import Reroute from './reroute';
import Layout from '../layout';
import ErrorIndicator from '../error-indicator';
import ModuleLoader from '../module-loader';

class Router extends React.Component {
  get currentRoute() {
    const { routes, location } = this.props;

    return routes.find(({ path }) => path === location.pathname) || {};
  }

  get layout() {
    const { id, layoutId } = this.currentRoute;

    return (
      <Layout id={layoutId} moduleId={id}>
        <Layout.Header>[Header]</Layout.Header>
        <Layout.Main>
          <ErrorIndicator message="error/module">
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
          {routes.map((route) => {
            const { id, isIndex, path } = route;

            return (
              <Route
                key={id}
                index={isIndex}
                path={path}
                element={
                  <Reroute>
                    <ModuleLoader id={id} />
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
