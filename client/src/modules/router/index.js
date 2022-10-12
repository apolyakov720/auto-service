import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './layout';
import AuthRequired from './auth-required';
import startup from './startup';
import Suspense from '@components/functional/suspense';
import commonUtils from '@utils/common';
import RouterSelectors from '@store/selectors/router';
import { loaders } from './config';

class Router extends React.Component {
  componentDidMount() {
    startup();
  }

  render() {
    const {
      routes: { allRoutes, redirects },
      app,
    } = this.props;

    if (commonUtils.isEmpty(allRoutes)) {
      return null;
    }

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout routes={allRoutes} />}>
            {allRoutes.map((route) => {
              const { id, path, isIndex, ...props } = route;

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
                    <AuthRequired app={app} redirects={redirects} route={route}>
                      <Suspense loader={loader} id={id} {...props} />
                    </AuthRequired>
                  }
                />
              );
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.app,
    routes: RouterSelectors.selectRoutes(state),
  };
};

export default connect(mapStateToProps)(Router);
