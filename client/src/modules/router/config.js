import Constants from './constants';

// path* - путь по которому доступен роут
// loader* - содержимое роута, которое будет загружено динамически при переходе
// title - заголовок роута, используется, например, для кнопок меню
// isUnauthorizedZone - роут доступен в неавторизованной зоне
// zoneType - имя зоны, используется для кастомной отризовки зон
// isEnabled - доступность роута, может быть функцией, которая принимает состояние приложения
// * - обязательно для заполнения

const login = {
  path: '/',
  isUnauthorizedZone: true,
  zoneType: Constants.ZONE_TYPES.LOGIN,
  loader: () => import('@pages/login'),
};

const main = {
  path: '/main',
  loader: () => import('@pages/main'),
};

const dev = {
  path: '/main',
  loader: () => import('@pages/development'),
};

export default [dev, login, main];
