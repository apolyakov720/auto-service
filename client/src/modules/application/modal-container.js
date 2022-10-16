import React from 'react';
import { connect } from 'react-redux';

import Modal from '@components/shared/modal';
import Suspense from '@components/functional/suspense';
import modalActions from '@store/actions/modal';
import { routes, loaders } from '../router/config';

class ModalContainer extends React.PureComponent {
  getContent = () => {
    const {
      modal: { data },
    } = this.props;
    const { id } = data;

    if (id === routes.registration) {
      return {
        title: 'Регистрация нового пользователя',
        child: <Suspense loader={loaders[id]} />,
      };
    }

    return {};
  };

  render() {
    const { modal } = this.props;

    const { child, title } = this.getContent();

    if (modal.isOpen && child) {
      return (
        <Modal title={title} onClose={modalActions.closeModal}>
          {child}
        </Modal>
      );
    }

    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    modal: state.modal,
  };
};

export default connect(mapStateToProps)(ModalContainer);
