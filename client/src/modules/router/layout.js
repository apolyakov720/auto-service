import React from 'react';
import { Outlet } from 'react-router-dom';

import withLocationHOC from './with-location-hoc';
import AppHeader from '@modules/app/app-header';
import Logotype from '@components/shared/logotype';
import { zoneTypes } from './config';
import CSSUtils from '@utils/css';

import Page from '@components/layout/page';

class Layout extends React.Component {
  render() {
    const { location, routes } = this.props;

    const currentRoute = routes.find(({ path }) => path === location.pathname) || {};
    const zoneType = currentRoute.zoneType;

    const zoneTypeClass = CSSUtils.mergeModifiers('page', {
      [zoneType]: zoneType,
    });

    if (zoneType === zoneTypes.unauthorized) {
      return (
        <div className={zoneTypeClass}>
          <div className="page__header">
            <Logotype caption="Добро пожаловать в Auto Service!" />
          </div>
          <div className="page__main">
            <Outlet />
          </div>
        </div>
      );
    }

    return (
      <Page>
        <Page.Header>
          <AppHeader />
        </Page.Header>
        <Outlet />
      </Page>
    );
  }
}

export default withLocationHOC(Layout);
