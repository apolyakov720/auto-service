import React from 'react';

import Icon from '@components/shared/icon';
import Button from '@components/shared/button';
import { CountBadge } from '@components/shared/badges';
import { CSSConstants } from '@constants';

class PersonalNotificationButton extends React.PureComponent {
  icon = (<Icon source={Icon.sources.base.bell} />);

  render() {
    return (
      <div className="personal-notification-button">
        <Button extra={this.icon} />
        <div className="personal-notification-button__badge">
          <CountBadge limit={2} size={CSSConstants.SIZES.XS} />
        </div>
      </div>
    );
  }
}

export default PersonalNotificationButton;
