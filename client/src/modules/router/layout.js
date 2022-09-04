import React from 'react';
import { useLocation } from 'react-router-dom';

import AppHeader from '@modules/app/app-header';
import constants from './constants';
import Logotype from '@components/shared/logotype';

class Layout extends React.Component {
  render() {
    const { children, location, routes } = this.props;

    const currentRoute = routes.find(({ path }) => path === location.pathname);
    const zoneType = currentRoute.zoneType;

    switch (zoneType) {
      case constants.ZONE_TYPES.UNAUTHORIZED:
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

export default (props) => {
  const location = useLocation();

  return <Layout location={location} {...props} />;
};
