import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './layout';
import RerouteRequired from './reroute-required';
import startup from './startup';
import Suspense from '@components/functional/suspense';
import commonUtils from '@utils/common';
import { loaders } from './config';

class Router extends React.Component {
  componentDidMount() {
    startup();
  }

  render() {
    const {
      app: { isAuthorized },
      routes,
    } = this.props;

    if (commonUtils.isEmpty(routes)) {
      return null;
    }

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout routes={routes} />}>
            {routes.map((route) => {
              const { id, path, isIndex, isAuthNoRequired, ...props } = route;

              const loader = loaders[id];

              if (!path || !loader) {
                return null;
              }

              return (
                <Route
                  key={id}
                  path={path}
                  index={isIndex}
                  element={
                    <RerouteRequired state={isAuthorized} isNotRequired={isAuthNoRequired}>
                      <Suspense loader={loader} id={id} {...props} />
                    </RerouteRequired>
                  }
                />
              );
            })}
          </Route>
          <Route path="*" element={<RerouteRequired state={isAuthorized} force />} />
        </Routes>
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
