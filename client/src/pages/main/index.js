import React from 'react';

import Menu from '@components/layout/menu';
import Icon from '@components/shared/icon';
import dataActions from '@store/actions/data';
import { keys } from '@store/data.config';

class MainPage extends React.Component {
  componentDidMount() {
    dataActions.fetch([keys.user]);
  }

  render() {
    const list = [
      {
        to: '/main',
        label: 'Главная',
        icon: Icon.sources.base.house,
      },
      {
        to: 'profile',
        label: 'Профиль',
        icon: Icon.sources.base.person,
      },
      {
        to: '/messages',
        label: 'Сообщения',
        icon: Icon.sources.base.envelope,
      },
    ];

    return <Menu list={list} vertical />;
  }
}

export default MainPage;
