import React from 'react';

import UserProfileCard from '@modules/user';

class AppHeader extends React.Component {
  render() {
    return (
      <div className="header">
        <UserProfileCard />
      </div>
    );
  }
}

export default AppHeader;
