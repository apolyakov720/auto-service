import React from 'react';

import UserProfileCard from '@modules/user';
import Logotype from '@components/shared/logotype';

class AppHeader extends React.Component {
  render() {
    return (
      <div className="header">
        <Logotype />
        <UserProfileCard />
      </div>
    );
  }
}

export default AppHeader;
