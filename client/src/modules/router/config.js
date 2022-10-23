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
  profile: 'profile',
  messages: 'messages',
  settings: 'settings',
};

const zoneTypes = {
  unauthorized: 'unauthorized',
  default: 'default',
};

const paths = {
  [routes.login]: '/',
  [routes.registration]: '/registration',
  [routes.main]: '/main',
  [routes.profile]: '/profile',
  [routes.messages]: '/messages',
  [routes.settings]: '/settings',
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
  [zoneTypes.default]: {
    panel1: [
      {
        to: paths[routes.main],
        label: 'Главная',
        icon: Icon.sources.base.house,
      },
      {
        to: paths[routes.settings],
        label: 'Настройки',
        icon: Icon.sources.base.gear,
      },
      {
        to: paths[routes.profile],
        label: 'Профиль',
        icon: Icon.sources.base.person,
      },
    ],
  },
};

// Содержимое роута, которое будет загружено динамически
const loaders = {
  [routes.login]: () => import('@pages/login'),
  [routes.registration]: () => import('@pages/registration'),
  [routes.main]: () => import('@pages/main'),
  [routes.profile]: () => import('@pages/profile'),
};

const full = {
  [routes.login]: {
    path: paths[routes.login],
    zoneType: zoneTypes.unauthorized,
    isIndex: true,
    isAuthNoRequired: true,
  },
  [routes.registration]: {
    path: paths[routes.registration],
    zoneType: zoneTypes.unauthorized,
    isAuthNoRequired: true,
    isEnabled: true,
  },
  [routes.main]: {
    path: paths[routes.main],
    isDefault: true,
  },
  [routes.profile]: {
    path: paths[routes.profile],
    isEnabled: true,
  },
};

const redirects = {
  toAuth: '/main',
  fromAuth: '/',
};

export { routes, zoneTypes, loaders, panels, redirects };
export default full;
