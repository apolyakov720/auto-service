import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './layout';
import Suspense from '@components/functional/suspense';
import commonUtils from '@utils/common';
import startup from './startup';

import { loaders } from './config';

class Router extends React.Component {
  componentDidMount() {
    startup();
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
            {routes.map(({ path, ...props }) => {
              const loader = loaders[path];

              if (!path || !loader) {
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

const mapStateToProps = (state) => {
  return {
    routes: state.router.routes,
  };
};

export default connect(mapStateToProps)(Router);
