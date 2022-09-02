import React from 'react';
import { connect } from 'react-redux';

import Overlay from '@components/shared/overlay';
import Loader from '@components/shared/loader';

class AppLoader extends React.PureComponent {
  render() {
    const { show } = this.props;

    if (show) {
      return (
        <Overlay transparent>
          <Loader />
        </Overlay>
      );
    }

    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    show: state.app.loader.show,
  };
};

export default connect(mapStateToProps)(AppLoader);
