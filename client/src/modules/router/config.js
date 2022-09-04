import constants from './constants';

// path* - путь по которому доступен роут
// loader* - содержимое роута, которое будет загружено динамически при переходе
// title - заголовок роута, используется, например, для кнопок меню
// isUnauthorizedZone - роут доступен в неавторизованной зоне
// zoneType - имя зоны, используется для кастомной отризовки зон
// isEnabled - доступность роута, может быть функцией, которая принимает состояние приложения
// * - обязательно для заполнения

// TODO сделать нормальный конфиг

const login = {
  path: '/',
  zoneType: constants.ZONE_TYPES.UNAUTHORIZED,
};

const main = {
  path: '/main',
};

const dev = {
  path: '/dev',
};

const routerTree = [login, main, dev];

export const loaders = {
  [login.path]: () => import('@pages/login'),
  [main.path]: () => import('@pages/main'),
  [dev.path]: () => import('@pages/development'),
};

export default routerTree;
