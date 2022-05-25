const development = {
  path: '/dev',
  component: () => import('../../pages/development'),
  isEnabled: true,
}

const login = {
  path: '/',
  component: () => import('../../pages/login'),
  isEnabled: true,
};

const main = {
  path: '/main',
  component: () => import('../../pages/main'),
  isEnabled: true,
};

export default [login, main, development];
