import React from 'react';
import { CSSUtils } from '@utils';
import Icon from '@components/icon';

class Avatar extends React.Component {
  render() {
    const { source, size } = this.props;
    let content = <Icon source={Icon.sources.base.person} />;
    if (source) {
      content = <img src={source} alt="avatarImage" />;
    }
    const avatarClass = CSSUtils.mergeModifiers('avatar', {
      [`size-${size}`]: size,
    });
    return <div className={avatarClass}>{content}</div>;
  }
}
export default Avatar;
