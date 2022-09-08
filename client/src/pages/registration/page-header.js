import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '@components/shared/icon';

class PageHeader extends React.PureComponent {
  render() {
    return (
      <div className="page-header">
        <Link to={-1}>
          <Icon source={Icon.sources.base.arrowLeft} bold color="primary" />
        </Link>
        <div className="page-header__title">Регистрация нового пользователя</div>
      </div>
    );
  }
}

export default PageHeader;
