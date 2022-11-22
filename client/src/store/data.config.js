const defaultObjectInitializer = () => ({});
const defaultObjectParser = (response) => response || {};

const keys = {
  configs: 'configs',
  user: 'user',
};

const statuses = {
  NOT_FETCHED: 'NOT_FETCHED',
  FETCHING: 'FETCHING',
  FETCHED: 'FETCHED',
  FETCH_ERROR: 'FETCH_ERROR',
};

export { statuses, keys };
export default {
  [keys.configs]: {
    // TODO продумать следующие поля - force, immutable, availability
    // force - принудительно отправлять повторный запрос
    // immutable - не отправлять запрос, если значение не должно изменяться
    // availability - доступость для загрузки, например, только когда пользователь авторизован

    // Адрес по которому получаем данные
    url: '/configs',
    // Функция преобразования начального значения
    initializer: defaultObjectInitializer,
    // Функция преобразования конечного значения
    parser: defaultObjectParser,
  },
  [keys.user]: {
    url: '/user',
    initializer: defaultObjectInitializer,
    parser: defaultObjectParser,
  },
};
