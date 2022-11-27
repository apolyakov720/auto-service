import { isFunction } from '@utils/common';
// TODO
import { routerConfig } from '@core/configs/router';
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
    (accumulator, [id, { isEnabled, ...value }]) => {
      let isRouteEnabled;

      if (isFunction(isEnabled)) {
        isRouteEnabled = isEnabled(state);
      } else {
        isRouteEnabled = isEnabled || value.isIndex || value.isDefault;
      }

      if (isRouteEnabled) {
        accumulator.push({ id, ...value });
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
