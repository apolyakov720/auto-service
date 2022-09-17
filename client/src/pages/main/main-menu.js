import React from 'react';

import Icon from '@components/shared/icon';

class MainMenu extends React.PureComponent {
  render() {
    return (
      <ul className="main-menu">
        <li className="main-menu__item">
          <div>
            <Icon source={Icon.sources.base.person} />
          </div>
          <div>Personal Data</div>
          <div>
            <Icon source={Icon.sources.base.chevronRight} />
          </div>
        </li>
        <li className="main-menu__item">
          <div>
            <Icon source={Icon.sources.base.person} />
          </div>
          <div>Settings</div>
          <div>
            <Icon source={Icon.sources.base.chevronRight} />
          </div>
        </li>
        <li className="main-menu__item">
          <div>
            <Icon source={Icon.sources.base.person} />
          </div>
          <div>E-Statement</div>
          <div>
            <Icon source={Icon.sources.base.chevronRight} />
          </div>
        </li>
        <li className="main-menu__item">
          <div>
            <Icon source={Icon.sources.base.person} />
          </div>
          <div>Refferal Code</div>
          <div>
            <Icon source={Icon.sources.base.chevronRight} />
          </div>
        </li>
        <li className="main-menu__item">
          <div>
            <Icon source={Icon.sources.base.person} />
          </div>
          <div>FAQs</div>
          <div>
            <Icon source={Icon.sources.base.chevronRight} />
          </div>
        </li>
        <li className="main-menu__item">
          <div>
            <Icon source={Icon.sources.base.person} />
          </div>
          <div>Our Handbook</div>
          <div>
            <Icon source={Icon.sources.base.chevronRight} />
          </div>
        </li>
        <li className="main-menu__item">
          <div>
            <Icon source={Icon.sources.base.person} />
          </div>
          <div>Community</div>
          <div>
            <Icon source={Icon.sources.base.chevronRight} />
          </div>
        </li>
      </ul>
    );
  }
}

export default MainMenu;
