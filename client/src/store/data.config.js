const defaultObjectInitializer = () => ({});
const defaultObjectParser = (response) => response || {};

const dataKeys = {
  configs: 'configs',
  user: 'user',
};

const dataStatuses = {
  NOT_FETCHED: 'NOT_FETCHED',
  FETCHING: 'FETCHING',
  FETCHED: 'FETCHED',
  FETCH_ERROR: 'FETCH_ERROR',
};

export { dataStatuses, dataKeys };
export default {
  [dataKeys.configs]: {
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
  [dataKeys.user]: {
    url: '/user',
    initializer: defaultObjectInitializer,
    parser: defaultObjectParser,
  },
};
