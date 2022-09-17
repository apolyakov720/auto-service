import React from 'react';

import MainMenu from './main-menu';
import RegistrationPage from '@pages/registration';

class MainPage extends React.Component {
  render() {
    return (
      <div className="page-aside">
        <div className="page-aside__menu">
          <MainMenu />
        </div>
        <div className="page-aside__content">
          <RegistrationPage />
        </div>
      </div>
    );
  }
}

export default MainPage;
