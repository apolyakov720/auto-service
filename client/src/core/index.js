import { connect } from 'react-redux';

import Core from './core';

const mapStateToProps = (state) => {
  return {
    application: state.application,
    routes: state.router.list,
    popups: state.popup.list,
    modals: state.modal.list,
    loader: state.loader,
  };
};

export default connect(mapStateToProps)(Core);
