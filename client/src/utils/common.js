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

export default {
  debounce,
  isNumeric,
  isNull,
  isEmpty,
  isFunction,
  getDescendantValue,
  setDescendantValue,
};
