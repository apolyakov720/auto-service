import { createSelector } from '@reduxjs/toolkit';

const selectAllRoutes = (state) => state.router.routes;

const selectRoutes = createSelector([selectAllRoutes], (allRoutes) => {
  const defaultRoute = allRoutes.find((route) => route.isDefault) || {};
  const indexRoute = allRoutes.find((route) => route.isIndex) || {};

  return {
    allRoutes,
    redirects: {
      onAuth: defaultRoute.path,
      offAuth: indexRoute.path,
    },
  };
});

export default {
  selectRoutes,
};
