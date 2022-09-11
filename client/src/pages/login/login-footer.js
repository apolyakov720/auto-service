import React from 'react';

import { routes } from '@modules/router/config';
import modalActions from '@store/actions/modal';

class LoginFooter extends React.PureComponent {
  onRegistrationClick = () => {
    modalActions.openModal({ id: routes.registration });
  };

  render() {
    return (
      <div className="page__footer">
        <div className="subheader text-center">
          У вас нет учетной записи?&nbsp;
          <span className="a" onClick={this.onRegistrationClick}>
            Зарегистироваться
          </span>
        </div>
      </div>
    );
  }
}

export default LoginFooter;
