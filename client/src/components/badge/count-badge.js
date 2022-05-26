import React from 'react';
import Badge from './badge';
import { CommonUtils } from '@utils';

class CountBadge extends React.Component {
  get value() {
    const { count, limit = 1 } = this.props;

    if (CommonUtils.isNumeric(count) && count > -1) {
      const digitNumber = String(count).length;

      if (digitNumber > limit) {
        return '9'.repeat(limit).concat('+');
      }

      return count;
    }

    return 0;
  }

  render() {
    return <Badge content={this.value} circled />;
  }
}

export default CountBadge;
