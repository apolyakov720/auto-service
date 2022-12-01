import { routeNames } from './router';

const moduleLoaderConfig = {
  [routeNames.login]: () => import('@pages/login'),
  [routeNames.registration]: () => import('@pages/registration'),
  [routeNames.main]: () => import('@pages/main'),
  [routeNames.profile]: () => import('@pages/profile'),
};

export { moduleLoaderConfig };
