import applicationTypes from '../types/application';
import { dispatch } from '../';

const authorize = () => {
  dispatch({
    type: applicationTypes.AUTHORIZE,
  });
};

export default {
  authorize,
};
