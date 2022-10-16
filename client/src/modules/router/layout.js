import React from 'react';
import { Outlet } from 'react-router-dom';

import withLocationHOC from './with-location-hoc';
// import CSSUtils from '@utils/css';

// import Menu from '@components/layout/menu'
// <Menu list={[{ to:' ', label: 'hello' }]} />

class Layout extends React.Component {
  render() {
    // const { location, routes } = this.props;

    // const currentRoute = routes.find(({ path }) => path === location.pathname) || {};
    // const zoneType = currentRoute.zoneType;

    // const zoneTypeClass = CSSUtils.mergeModifiers('page', {
    //   [zoneType]: zoneType,
    // });

    return (
      <div className="layout">
        <header className="layout__header">Header</header>
        <main className="layout__main">
          <div className="layout__panel">Panel 1</div>
          <div className="layout__content">
            <Outlet />
          </div>
          <div className="layout__panel layout__panel--right">Panel 2</div>
        </main>
        <footer className="layout__footer">Footer</footer>
      </div>
    );
  }
}

export default withLocationHOC(Layout);
