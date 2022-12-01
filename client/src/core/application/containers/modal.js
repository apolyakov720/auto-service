import React from 'react';

import Modal from '@components/shared/modal';

class ContainerModal extends React.PureComponent {
  render() {
    const { modal } = this.props;

    if (modal) {
      return <Modal />;
    }

    return null;
  }
}

export default ContainerModal;
