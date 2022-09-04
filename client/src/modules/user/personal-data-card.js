import React from 'react';

import { commonUtils } from '@utils';

class PersonalDataCard extends React.PureComponent {
  render() {
    const { user = {} } = this.props;
    const { firstName, secondName, lastName, job } = user;

    const isAvailableAdditional = !commonUtils.isEmpty(job);

    return (
      <div className="personal-data-card">
        <div className="personal-data-card__general">
          <span>{firstName}</span>
          <span>
            {secondName} {lastName}
          </span>
        </div>
        {isAvailableAdditional && (
          <div className="personal-data-card__additional">
            <span>{job}</span>
          </div>
        )}
      </div>
    );
  }
}

export default PersonalDataCard;
