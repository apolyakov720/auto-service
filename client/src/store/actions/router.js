import routerTypes from '../types/router';
import { dispatch } from '../';

const setRoutes = (payload) => {
  dispatch({
    type: routerTypes.SET_ROUTES,
    payload,
  });
};

export default {
  setRoutes,
};
