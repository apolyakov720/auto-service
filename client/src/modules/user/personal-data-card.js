import React from 'react';

import commonUtils from '@utils/common';

class PersonalDataCard extends React.PureComponent {
  render() {
    const { user = {} } = this.props;
    const { firstName, middleName, lastName, job } = user;

    const isAvailableAdditional = !commonUtils.isEmpty(job);

    return (
      <div className="personal-data-card">
        <span>
          {firstName} {lastName}
        </span>
        {isAvailableAdditional && <span className="subheader">{job}</span>}
      </div>
    );
  }
}

export default PersonalDataCard;
