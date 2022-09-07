import React from 'react';

import withLocationHOC from './with-location-hoc';
import AppHeader from '@modules/app/app-header';
import Logotype from '@components/shared/logotype';
import { zoneTypes } from './config';

class Layout extends React.Component {
  render() {
    const { children, location, routes } = this.props;

    const currentRoute = routes.find(({ path }) => path === location.pathname) || {};
    const zoneType = currentRoute.zoneType;

    switch (zoneType) {
      case zoneTypes.unauthorized:
        return (
          <div className="unauthorized-page">
            <Logotype caption="Добро пожаловать в Auto Service!" />
            <div className="unauthorized-page__main">{children}</div>
          </div>
        );

      default:
        return (
          <>
            <AppHeader />
            {children}
          </>
        );
    }
  }
}

export default withLocationHOC(Layout);
