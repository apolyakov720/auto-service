import React from 'react';

import Icon from '@components/shared/icon';
import commonUtils from '@utils/common';
import CSSUtils from '@utils/css';

class SelectListItem extends React.PureComponent {
  onClick = () => {
    const { id, onClick } = this.props;

    commonUtils.isFunction(onClick) && onClick(id);
  };

  render() {
    const { id, title, selected, highlighted } = this.props;

    const listItemClass = CSSUtils.mergeModifiers('select__list-item', {
      selected,
      highlighted,
    });

    const iconColor = selected ? '' : 'white';

    return (
      <li className={listItemClass} key={id} onClick={this.onClick}>
        <div>{title}</div>
        <Icon source={Icon.sources.base.check} color={iconColor} />
      </li>
    );
  }
}

export default SelectListItem;
