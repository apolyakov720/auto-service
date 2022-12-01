import { connect } from 'react-redux';

import Core from './core';

const mapStateToProps = (state) => {
  return {
    application: state.application,
    routes: state.router.routes,
  };
};

export default Core; // connect(mapStateToProps)(Application);
