import React from 'react';
import { connect } from 'react-redux';

import PageHeader from './page-header';
import RegistrationHeader from './registration-header';
import RegistrationMain from './registration-main';

class RegistrationPage extends React.Component {
  render() {
    const { configs } = this.props;

    return (
      <div className="page">
        <PageHeader />
        <RegistrationHeader />
        <RegistrationMain configs={configs} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    configs: state.data.configs.data,
  };
};

export default connect(mapStateToProps)(RegistrationPage);
