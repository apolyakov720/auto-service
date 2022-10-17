import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '@components/shared/icon';
import CSSUtils from '@utils/css';
import commonUtils from '@utils/common';

class Menu extends React.PureComponent {
  render() {
    const { list, vertical, toActive } = this.props;

    if (commonUtils.isEmpty(list)) {
      return null;
    }

    const menuClass = CSSUtils.mergeModifiers('menu', {
      vertical,
    });

    return (
      <div className={menuClass}>
        {list.map(({ to, icon, label }) => {
          const menuLinkClass = CSSUtils.mergeModifiers('menu__link', {
            active: toActive === to,
          });

          return (
            <Link key={to} to={to} className={menuLinkClass}>
              <div className="menu__content">
                {icon && <Icon source={icon} />}
                {label && <div className="menu__label">{label}</div>}
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

Menu.defaultProps = {
  list: [],
  vertical: false,
};

export default Menu;
