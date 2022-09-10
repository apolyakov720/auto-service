import React from 'react';
import { Link } from 'react-router-dom';

class LoginFooter extends React.PureComponent {
  render() {
    return (
      <div className="page__footer">
        <div className="subheader text-center">
          У вас нет учетной записи?&nbsp;
          <Link to="/registration" className="a">
            Зарегистироваться
          </Link>
        </div>
      </div>
    );
  }
}

export default LoginFooter;
