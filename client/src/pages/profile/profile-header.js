import React from 'react';

import Avatar from '@components/shared/avatar';
import { CSSConstants } from '@constants';

class ProfileHeader extends React.PureComponent {
  render() {
    const {
      user: { firstName, lastName, job },
    } = this.props;

    return (
      <div className="page__header">
        <Avatar size={CSSConstants.SIZES.XXL} />
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
