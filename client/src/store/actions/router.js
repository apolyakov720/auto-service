import commonUtils from '@utils/common';
import routerConfig from '@modules/router/config';
import routerTypes from '../types/router';
import { getState, dispatch } from '../';

const setRoutes = (payload) => {
  dispatch({
    type: routerTypes.SET_ROUTES,
    payload,
  });
};

const calculateRoutes = () => {
  const state = getState();

  const preparedRoutes = Object.entries(routerConfig).reduce(
    (accumulator, [key, { isEnabled, ...value }]) => {
      let isRouteEnabled;

      if (commonUtils.isFunction(isEnabled)) {
        isRouteEnabled = isEnabled(state);
      } else {
        isRouteEnabled = isEnabled || value.isIndex || value.isDefault;
      }

      if (isRouteEnabled) {
        accumulator.push({ key, ...value });
      }

      return accumulator;
    },
    [],
  );

  setRoutes(preparedRoutes);
};

export default {
  calculateRoutes,
};
