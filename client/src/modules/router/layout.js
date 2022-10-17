import React from 'react';
import { Outlet } from 'react-router-dom';

import Menu from '@components/layout/menu';
import withLocationHOC from './with-location-hoc';
import { panels } from './config';

class Layout extends React.Component {
  render() {
    const { location, routes } = this.props;

    const currentRoute = routes.find(({ path }) => path === location.pathname) || {};
    const { zoneType, path } = currentRoute;

    const zonePanels = panels[zoneType] || {};
    const { panel1, panel2 } = zonePanels;

    let header = 'header';
    let footer = 'footer';

    // Можно добавить модификаторы класса к слою и каждой страницы отдельно, но пока в этом нет необходимости
    return (
      <div className="layout">
        {header && <header>{header}</header>}
        <main className="layout__main">
          {panel1 && (
            <div className="layout__panel">
              <Menu list={panel1} toActive={path} vertical />
            </div>
          )}
          <div className="layout__content">
            <div className="layout__outlet">
              <Outlet />
            </div>
          </div>
          {panel2 && (
            <div className="layout__panel layout__panel--right">
              <Menu list={panel2} toActive={path} vertical />
            </div>
          )}
        </main>
        {footer && <footer>{footer}</footer>}
      </div>
    );
  }
}

export default withLocationHOC(Layout);
