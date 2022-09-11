import React from 'react';

import withLocationHOC from './with-location-hoc';
import AppHeader from '@modules/app/app-header';
import Logotype from '@components/shared/logotype';
import { zoneTypes } from './config';
import CSSUtils from '@utils/css';

class Layout extends React.Component {
  render() {
    const { children, location, routes } = this.props;

    const currentRoute = routes.find(({ path }) => path === location.pathname) || {};
    const zoneType = currentRoute.zoneType;

    const zoneTypeClass = CSSUtils.mergeModifiers('page', {
      [zoneType]: zoneType,
    });

    switch (zoneType) {
      case zoneTypes.unauthorized:
        return (
          <div className={zoneTypeClass}>
            <div className="page__header">
              <Logotype caption="Добро пожаловать в Auto Service!" />
            </div>
            <div className="page__main">{children}</div>
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
