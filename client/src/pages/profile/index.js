import { connect } from 'react-redux';

import ProfilePage from './entry';
import { keys } from '@store/data.config';
import { selectDataByKey } from '@store/selectors/data';

const mapStateToProps = (state) => {
  return {
    user: selectDataByKey(keys.user)(state),
  };
};

export default connect(mapStateToProps)(ProfilePage);
