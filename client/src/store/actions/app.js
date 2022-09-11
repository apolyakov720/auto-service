import appTypes from '../types/app';
import { dispatch } from '../';

const authorize = () => {
  dispatch({
    type: appTypes.AUTHORIZE,
  });
};

export default {
  authorize,
};
