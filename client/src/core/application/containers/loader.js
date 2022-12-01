import React from 'react';

import Overlay from '@components/shared/overlay';
import Loader from '@components/shared/loader';

class ContainerLoader extends React.PureComponent {
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

export default ContainerLoader;
