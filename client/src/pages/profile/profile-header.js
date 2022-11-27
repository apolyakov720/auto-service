import React from 'react';

import Avatar from '@components/shared/avatar';
import { CSSSizes } from '@utils/css';

class ProfileHeader extends React.PureComponent {
  render() {
    const {
      user: { firstName, lastName, job },
    } = this.props;

    return (
      <div className="page__header">
        <Avatar size={CSSSizes.l} />
        <div>
          {firstName} {lastName}
          <br />
          <span className="subheader">{job}</span>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
