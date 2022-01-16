import React from 'react';
import Dropdown from '@components/dropdown';
import Button from '@components/button';

const LoginPage = () => {
  return (
    <div style={{ width: '500px', fontSize: '2rem' }}>
      <Dropdown>
        {(handleSwitchOpen) => <Button name="Button" onClick={handleSwitchOpen} />}
      </Dropdown>
    </div>
  );
};

/*
 * const Component = withDropdown(Button)
 * <Component {...props} />
 * <Button />
 * <Dropdown trigger={} />
 * */

export default LoginPage;
