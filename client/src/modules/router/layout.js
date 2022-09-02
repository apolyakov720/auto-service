import React from 'react';

import AppHeader from '../app/app-header';

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <>
        <AppHeader />
        {children}
      </>
    );
  }
}

export default Layout;
