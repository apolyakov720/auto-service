// path* - путь по которому доступен роут
// isEnabled* - доступность роута, может быть функцией, которая принимает состояние приложения
// zoneType - имя зоны, используется для кастомной отризовки зон
// isIndex** - индексная страница
// isDefault** - страница по умолчанию
// * - обязательно для заполнения
// ** - в конфиге должны быть заданы: одна страница как индексная и одна как по умолчанию, при этом флаг isEnabled будет игнорироваться
// Примечание: необходимо также указать loader для роута в отдельном объекте

const routes = {
  login: 'login',
  registration: 'registration',
  main: 'main',
  dev: 'dev',
};

const zoneTypes = {
  unauthorized: 'unauthorized',
  // Временно
  registration: 'registration',
};

// Содержимое роута, которое будет загружено динамически
const loaders = {
  [routes.login]: () => import('@pages/login'),
  [routes.registration]: () => import('@pages/registration'),
  [routes.main]: () => import('@pages/main'),
  [routes.dev]: () => import('@pages/development'),
};

const full = {
  [routes.login]: {
    path: '/',
    zoneType: zoneTypes.unauthorized,
    isIndex: true,
  },
  [routes.registration]: {
    path: '/registration',
    zoneType: zoneTypes.registration,
    isEnabled: true,
  },
  [routes.main]: {
    path: '/main',
    isDefault: true,
  },
  [routes.dev]: {
    path: '/dev',
    isEnabled: true,
  },
};

export { routes, zoneTypes, loaders };
export default full;
