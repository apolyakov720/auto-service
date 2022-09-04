import React from 'react';
import { connect } from 'react-redux';

import Avatar from '@components/shared/avatar';
import PersonalDataCard from './personal-data-card';
import PersonalNotificationButton from './personal-notification-button';
import { CSSConstants } from '@constants';

class UserProfileCard extends React.PureComponent {
  render() {
    const { user } = this.props;

    return (
      <div className="user-profile-card">
        <Avatar size={CSSConstants.SIZES.XXL} />
        <PersonalNotificationButton />
        <PersonalDataCard user={user} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(UserProfileCard);
