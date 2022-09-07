import React from 'react';
import { connect } from 'react-redux';

import Overlay from '@components/shared/overlay';
import Loader from '@components/shared/loader';

class AppLoader extends React.PureComponent {
  render() {
    const { isShow } = this.props;

    if (isShow) {
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
    isShow: state.app.loader.isShow,
  };
};

export default connect(mapStateToProps)(AppLoader);
