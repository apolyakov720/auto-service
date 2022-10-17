import Icon from '@components/shared/icon';

// path* - путь по которому доступен роут
// isEnabled* - доступность роута, может быть функцией, которая принимает состояние приложения
// zoneType - имя зоны, используется для кастомной отризовки зон
// isIndex** - индексная страница
// isDefault** - страница по умолчанию
// * - обязательно для заполнения
// ** - в конфиге должны быть заданы: одна страница как индексная и одна как по умолчанию, при этом флаг isEnabled будет игнорироваться
// Примечание: необходимо также указать loader для роута в отдельном объекте

// Этот конфиг кандидат на вынос за пределы модуля

const routes = {
  login: 'login',
  registration: 'registration',
  main: 'main',
};

const paths = {
  [routes.login]: '/',
  [routes.registration]: '/registration',
  [routes.main]: '/main',
};

const zoneTypes = {
  unauthorized: 'unauthorized',
};

const panels = {
  [zoneTypes.unauthorized]: {
    panel1: [
      {
        to: paths[routes.login],
        label: 'Войти',
        icon: Icon.sources.base.boxArrowInRight,
      },
      {
        to: paths[routes.registration],
        label: 'Регистрация',
        icon: Icon.sources.base.clipboard,
      },
    ],
  },
};

// Содержимое роута, которое будет загружено динамически
const loaders = {
  [routes.login]: () => import('@pages/login'),
  [routes.registration]: () => import('@pages/registration'),
  [routes.main]: () => import('@pages/main'),
};

const full = {
  [routes.login]: {
    path: paths[routes.login],
    zoneType: zoneTypes.unauthorized,
    isIndex: true,
    isAuthNoRequired: true,
  },
  [routes.main]: {
    path: paths[routes.main],
    isDefault: true,
  },
  [routes.registration]: {
    path: paths[routes.registration],
    zoneType: zoneTypes.unauthorized,
    isAuthNoRequired: true,
    isEnabled: true,
  },
};

export { routes, zoneTypes, loaders, panels };
export default full;
