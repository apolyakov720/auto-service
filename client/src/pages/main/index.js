import React from 'react';

import MainMenu from './main-menu';
import RegistrationPage from '@pages/registration';
import dataActions from '@store/actions/data';
import {keys} from '@store/data.config';


class MainPage extends React.Component {
    componentDidMount() {
        dataActions.fetch([
            keys.user
        ])
    }

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
