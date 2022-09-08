import React from 'react';
import { Link } from 'react-router-dom';

class LoginFooter extends React.PureComponent {
  render() {
    return (
      <div className="login-footer">
        У вас нет учетной записи?{' '}
        <Link to="/registration">
          <span className="a">Зарегистироваться</span>
        </Link>
      </div>
    );
  }
}

export default LoginFooter;
