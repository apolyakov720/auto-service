import React from 'react';

import { CSSUtils } from '@utils';

class PaginationItem extends React.Component {
  onItemClick = () => {
    const { onClick, id, disabled } = this.props;

    if (disabled) {
      return;
    }

    onClick && onClick(id);
  };

  render() {
    const { content, selected, disabled } = this.props;

    const itemPageClass = CSSUtils.mergeModifiers('pagination__page', { disabled });
    const itemContentClass = CSSUtils.mergeModifiers('pagination__page-content', {
      selected,
    });

    if (!content) {
      return null;
    }

    return (
      <li className={itemPageClass} onClick={this.onItemClick}>
        <div className={itemContentClass}>{content}</div>
      </li>
    );
  }
}

export default PaginationItem;
