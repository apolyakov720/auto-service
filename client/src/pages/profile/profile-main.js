import React from 'react';
import { Form } from 'react-final-form';

import ProfileFormFields from '@pages/profile/profile-form-fields';

class ProfileMain extends React.PureComponent {
  render() {
    return (
      <div className="page__main">
        <Form onSubmit={() => {}} validate={() => {}}>
          {({ handleSubmit }) => {
            return (
              <form className="form" onSubmit={handleSubmit}>
                <ProfileFormFields />
              </form>
            );
          }}
        </Form>
      </div>
    );
  }
}

export default ProfileMain;
