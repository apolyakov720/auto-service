import appTypes from '../action-types/app';
import { dispatch } from '../';

const showLoader = () => {
  dispatch({
    type: appTypes.SHOW_LOADER,
  });
};

const hideLoader = () => {
  dispatch({
    type: appTypes.HIDE_LOADER,
  });
};

export default {
  showLoader,
  hideLoader,
};
