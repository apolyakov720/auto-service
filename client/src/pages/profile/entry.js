import React from 'react';

// import ProfileMain from '@pages/profile/profile-main';
import ProfileHeader from '@pages/profile/profile-header';
import dataActions from '@store/actions/data';
import { dataKeys } from '@store/data.config';
import Menu from '@components/layout/menu';
import Icon from '@components/shared/icon';

const list1 = [
  {
    to: 'messages',
    label: 'Сообщения',
    icon: Icon.sources.base.envelope,
  },
  {
    to: 'news',
    label: 'Новости',
    icon: Icon.sources.base.news,
  },
];

const list2 = [
  {
    to: 'personal-data',
    label: 'Личные данные',
  },
  {
    to: 'change-login',
    label: 'Изменить логин',
  },
  {
    to: 'change-password',
    label: 'Изменить пароль',
  },
];

const list3 = [
  {
    to: 'app-info',
    label: 'Информация о приложении',
  },
];

const list4 = [
  {
    to: 'logout',
    label: 'Выйти',
    icon: Icon.sources.base.boxArrowInLeft,
  },
];

class ProfilePage extends React.Component {
  componentDidMount() {
    dataActions.fetch([dataKeys.user]);
  }

  render() {
    const { user } = this.props;

    return (
      <div className="page">
        <ProfileHeader user={user} />
        <Menu list={list1} vertical />
        <Menu list={list2} vertical />
        <Menu list={list3} vertical />
        <Menu list={list4} vertical />
      </div>
    );
  }
}

export default ProfilePage;
