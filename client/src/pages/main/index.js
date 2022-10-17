import React from 'react';

import dataActions from '@store/actions/data';
import { keys } from '@store/data.config';

class MainPage extends React.Component {
  componentDidMount() {
    dataActions.fetch([keys.user]);
  }

  render() {
    return <div>Это главная страница</div>;
  }
}

export default MainPage;
