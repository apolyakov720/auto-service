import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '@components/shared/icon';
import CSSUtils from '@utils/css';
import commonUtils from '@utils/common';

// TODO добавить логику дл определения активной ссылки
class Menu extends React.Component {
  render() {
    const { list, vertical } = this.props;

    if (commonUtils.isEmpty(list)) {
      return null;
    }

    const menuClass = CSSUtils.mergeModifiers('menu', {
      vertical,
    });

    return (
      <div className={menuClass}>
        {list.map(({ to, icon, label }) => {
          return (
            <Link key={to} to={to} className="menu__link">
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
