import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Layout from './layout';
import Suspense from '@components/functional/suspense';
import commonUtils from '@utils/common';
import startup from './startup';

import { loaders } from './config';

class Router extends React.Component {
  componentDidMount() {
    startup();
  }

  redirectUnknownRoute() {
    const { app, routes } = this.props;

    const defaultRoute = routes.find((route) => route.isDefault);
    const indexRoute = routes.find((route) => route.isIndex);

    if (app.isAuthorized && defaultRoute) {
      return <Navigate to={defaultRoute.path} replace />;
    }

    if (!app.isAuthorized && indexRoute) {
      return <Navigate to={indexRoute.path} replace />;
    }
  }

  render() {
    const { routes } = this.props;

    if (commonUtils.isEmpty(routes)) {
      return null;
    }

    return (
      <BrowserRouter>
        <Layout routes={routes}>
          <Routes>
            {routes.map(({ key, path, ...props }) => {
              const loader = loaders[key];

              if (!path || !loader) {
                return null;
              }

              return (
                <Route key={key} path={path} element={<Suspense loader={loader} {...props} />} />
              );
            })}
            <Route path="*" element={this.redirectUnknownRoute()} />
          </Routes>
        </Layout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.app,
    routes: state.router.routes,
  };
};

export default connect(mapStateToProps)(Router);
