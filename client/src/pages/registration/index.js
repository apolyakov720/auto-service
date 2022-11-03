import { connect } from 'react-redux';

import RegistrationPage from './entry';
import { keys } from '@store/data.config';
import { selectDataByKey } from '@store/selectors/data';

const mapStateToProps = (state) => {
  return {
    configs: selectDataByKey(keys.configs)(state),
  };
};

export default connect(mapStateToProps)(RegistrationPage);
