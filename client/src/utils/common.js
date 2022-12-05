/** Функция-обертка, которая ограничивает множественные вызовы заданной функции.
 * Аргументы:
 * 1. fn - функция, вызовы которой, необходимо ограничить
 * 2.
 *  {
 *    delay: - отрезок времени, в течении которого, будут игнорироваться все последующие вызовы заданной функции
 *    immediate: - флаг, который определяет, должна ли вызваться заданная функция вначале
 *  }
 **/
function debounce(fn, { delay = 100, immediate = false } = {}) {
  let timeout = null;
  let timestamp = null;
  let context = null;
  let args = null;
  let result = null;

  function later() {
    const lastTimestamp = new Date().getTime() - timestamp;

    if (lastTimestamp >= 0 && delay > lastTimestamp) {
      timeout = setTimeout(later, delay - lastTimestamp);
    } else {
      timeout = null;

      if (!immediate) {
        result = fn.apply(context, args);
      }
    }
  }

  return function () {
    timestamp = new Date().getTime();
    context = this;
    args = arguments;

    const isCallNow = immediate && !timeout;

    if (!timeout) {
      timeout = setTimeout(later, delay);
    }

    if (isCallNow) {
      result = fn.apply(context, args);
    }

    return result;
  };
}

/** Неопределенное значение */
const isNull = (value) => value === undefined || value === null;

/** Пустое значение */
const isEmpty = (value) =>
  isNull(value) ||
  value === false ||
  (Object.keys(value).length === 0 && value.constructor === Object) ||
  value.length === 0;

/** Значение - это число */
const isNumeric = (value) => !isNaN(parseFloat(value)) && isFinite(parseFloat(value));

/** Значение - это функция */
const isFunction = (value) => typeof value === 'function';

/** Значение - это строка */
const isString = (value) => typeof value === 'string' || value instanceof String;

/** Получить значение из объекта по составному ключу, разделенными точками */
const getDescendantValue = (object, key) =>
  key.split('.').reduce((value, chunk) => value?.[chunk], object);

/** Установить значение в объект по составному ключу, разделенными точками */
const setDescendantValue = (object, key, value) => {
  const decomposedKey = key.split('.');
  const chunk = decomposedKey[0];

  if (!chunk) {
    return object;
  }

  if (!Object.prototype.hasOwnProperty.call(object, chunk)) {
    object[chunk] = {};
  }

  value =
    decomposedKey.length <= 1
      ? value
      : setDescendantValue(object[chunk], decomposedKey.slice(1).join('.'), value);

  return {
    ...object,
    [chunk]: value,
  };
};

/** Возвращает строку, где слова разделены пробелами */
const splitStringByWords = (string) =>
  string
    // Находим аббревиатуры (сокращения) и отделяем их
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    // Находим букву в нижнем регистре за которой следует буква в верхнем регистре и отделяем их
    .replace(/([a-z\d])([A-Z])/g, '$1 $2')
    // Находим букву за которой следует цифра и отделяем их
    .replace(/([a-zA-Z])(\d)/g, '$1 $2')
    // Находим цифру за которой следует буква и отделяем их
    .replace(/(\d)([a-zA-Z])/g, '$1 $2')
    // Удаляем пробелы вокруг строки
    .trim();

/**
 * Удаляет из объекта obj1, свойства отсутствующиее в объекте obj2.
 * Возвращает obj1.
 * */
const restrictObjects = (obj1, obj2) => {
  for (let prop in obj1) {
    if (!(prop in obj2)) {
      delete obj1[prop];
    }
  }

  return obj1;
};

/**
 * Удаляет из объекта obj1, свойства присутствующие в объекте obj2.
 * Возвращает obj1.
 * */
const subtractObjects = (obj1, obj2) => {
  for (let prop in obj2) {
    delete obj1[prop];
  }

  return obj1;
};

/** Преобразует массив в объект. */
const arrayToObject = (array) =>
  array.reduce((accumulator, value) => ({ ...accumulator, [value]: value }), {});

/** Получение имени хоста. */
const getHostURL = (url) => url.toString().replace(/^(.*\/\/[^/?#]*).*$/, '$1/');

/** Получить уникальный идентификатор. */
const getGloballyUniqueIdentifier = () => {
  let date = new Date().getTime();

  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
    const r = (date + Math.random() * 16) % 16 | 0;

    date = Math.floor(date / 16);

    return (char === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
};

export {
  debounce,
  isNumeric,
  isNull,
  isEmpty,
  isFunction,
  isString,
  getDescendantValue,
  setDescendantValue,
  splitStringByWords,
  restrictObjects,
  subtractObjects,
  arrayToObject,
  getHostURL,
  getGloballyUniqueIdentifier,
};
