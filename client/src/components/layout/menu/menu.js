import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '@components/shared/icon';
import { mergeModifiers } from '@utils/css';

class Menu extends React.PureComponent {
  render() {
    const { list, vertical, toActive } = this.props;

    const listFiltered = list.filter(({ hidden }) => !hidden);

    if (listFiltered.length) {
      const menuClass = mergeModifiers('menu', {
        vertical,
      });

      return (
        <div className={menuClass}>
          {listFiltered.map(({ to, icon, label }) => {
            const menuLinkClass = mergeModifiers('menu__link', {
              active: toActive === to,
            });

            return (
              <Link key={to} to={to} className={menuLinkClass}>
                <div className="menu__content">
                  {icon && <Icon source={icon} />}
                  {label && <div className="menu__label">{label}</div>}
                </div>
                <div className="menu__chevron">
                  <Icon source={Icon.sources.base.chevronRight} />
                </div>
              </Link>
            );
          })}
        </div>
      );
    }

    return null;
  }
}

Menu.defaultProps = {
  list: [],
  vertical: false,
};

export default Menu;
