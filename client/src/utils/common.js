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

export default {
  debounce,
};
