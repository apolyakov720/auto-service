import React from 'react';

import Modal from '@components/shared/modal';

class ContainerPopup extends React.PureComponent {
  render() {
    const { popup } = this.props;

    if (popup) {
      return <Modal />;
    }

    return null;
  }
}

export default ContainerPopup;
