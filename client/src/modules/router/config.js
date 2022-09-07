// path* - путь по которому доступен роут
// loader* - содержимое роута, которое будет загружено динамически при переходе
// isEnabled* - доступность роута, может быть функцией, которая принимает состояние приложения
// zoneType - имя зоны, используется для кастомной отризовки зон
// * - обязательно для заполнения

const routes = {
  login: 'login',
  main: 'main',
  dev: 'dev',
};

const zoneTypes = {
  unauthorized: 'unauthorized',
};

const loaders = {
  [routes.login]: () => import('@pages/login'),
  [routes.main]: () => import('@pages/main'),
  [routes.dev]: () => import('@pages/development'),
};

const full = {
  [routes.login]: {
    path: '/',
    zoneType: zoneTypes.unauthorized,
    isIndex: true,
    isEnabled: true,
  },
  [routes.main]: {
    path: '/main',
    isDefault: true,
    isEnabled: (state) => state.app.isAuthorized,
  },
  [routes.dev]: {
    path: '/dev',
    isEnabled: false,
  },
};

export { routes, zoneTypes, loaders };
export default full;
