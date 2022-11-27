import { connect } from 'react-redux';

import Application from './entry';

const mapStateToProps = (state) => {
  return {
    application: state.application,
    routes: state.router.routes,
  };
};

export default connect(mapStateToProps)(Application);
