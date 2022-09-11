import loaderTypes from '../types/loader';
import { dispatch } from '../';

const showLoader = () => {
  dispatch({
    type: loaderTypes.SHOW,
  });
};

const hideLoader = () => {
  dispatch({
    type: loaderTypes.HIDE,
  });
};

export default {
  showLoader,
  hideLoader,
};
