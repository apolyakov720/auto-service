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

  getRedirectPaths() {
    const { routes } = this.props;

    const defaultRoute = routes.find((route) => route.isDefault);
    const indexRoute = routes.find((route) => route.isIndex);

    return {
      default: defaultRoute.path,
      index: indexRoute.path,
    };
  }

  render() {
    const { routes, app } = this.props;

    if (commonUtils.isEmpty(routes)) {
      return null;
    }

    const redirects = this.getRedirectPaths();

    // Если пользователь переходит по роуту, которого не существует, то он будет перенаправлен:
    // 1. На индексную страницу, если он не авторизован
    // 2. На страницу по умолчанию, если авторизован
    const unknowns = app.isAuthorized ? redirects.default : redirects.index;

    return (
      <BrowserRouter>
        <Layout routes={routes}>
          <Routes>
            {routes.map(({ key, path, isDefault, isIndex, ...props }) => {
              const loader = loaders[key];

              if (!path || !loader) {
                return null;
              }

              let element = <Suspense loader={loader} {...props} />;

              // Когда пользователь авторизовался, ему становиться не доступна индексная страница
              // Происходит подмена роута
              if (app.isAuthorized && isIndex) {
                element = <Navigate to={redirects.default} replace />;
              }

              // Если пользователь неавторизован, ему не доступна страница по умолчанию
              if (!app.isAuthorized && isDefault) {
                element = <Navigate to={redirects.index} replace />;
              }

              return <Route key={key} path={path} element={element} />;
            })}
            <Route key="*" path="*" element={<Navigate to={unknowns} replace />} />
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
