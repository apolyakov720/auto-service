import commonUtils from './common';

const CSSSizes = {
  xxs: 'xxs',
  xs: 'xs',
  s: 's',
  m: 'm',
  l: 'l',
  xl: 'xl',
  xxl: 'xxl',
};

const CSSDelimiters = {
  className: '-',
  modifier: '--',
};

const CSSThemes = {
  primary: 'primary',
  secondary: 'secondary',
  info: 'info',
  warning: 'warning',
  error: 'error',
  disabled: 'disabled',
};

/** Возвращает имя класса по ключу в нижнем регистре, где ключ будет разбит по словам через делимитер класса */
const getClassNameByKey = (key) =>
  commonUtils.splitStringByWords(key).toLowerCase().replace(/\s/g, CSSDelimiters.className);

/**
 * Слияние классов.
 * На выходе формируется строка из имен классов, разделенных пробелами.
 * Если имя класса передано как строка, то слияние в выходную строку происходит как есть.
 * Если передан объект имен классов, то:
 * 1. Проверяем наличие ключа и значения;
 * 2. Если значение это срока, то выходное имя класса получится из конкатинации ключа и значения, иначе будет использоваться ключ;
 * 3. Получившиеся имя класса будет разбито по словам, разделенными через делимитер класса;
 * */
const mergeClasses = (...classes) =>
  classes
    .reduce((accumulator, chunkClass) => {
      let resultChunkClass = '';
      const classChunkType = typeof chunkClass;

      if (classChunkType === 'string') {
        resultChunkClass = chunkClass;
      }

      if (classChunkType === 'object') {
        const chunks = Object.entries(chunkClass);

        chunks.forEach((chunk) => {
          const [key, value] = chunk;

          if (key && value) {
            const keyValue = commonUtils.isString(value)
              ? `${key}${CSSDelimiters.className}${value}`
              : key;
            const preparedKeyValue = getClassNameByKey(keyValue) + ' ';

            resultChunkClass = resultChunkClass.concat(preparedKeyValue);
          }
        });
      }

      accumulator.push(resultChunkClass);

      return accumulator;
    }, [])
    .join(' ')
    .trim();

/**
 * Слияние модификаторов базового класса.
 * На выходе формируется строка из базового класса и базового класса с переданными модификаторами, разделенных пробелами.
 * Модификаторы передаются как объект - ключ и значение, слияние происходит следующим образом:
 * 1. Проверяется наличие ключа и значения;
 * 2. Если значение передано как строка, то оно будет использоваться как модификатор, иначе будет использоваться ключ;
 * 3. Используемый модификатор будет разбит по словам, разделенными через делимитер модификатора;
 * */
const mergeModifiers = (baseClass, modifiers = {}) => {
  if (baseClass) {
    const preparedBaseClass = getClassNameByKey(baseClass);

    return Object.entries(modifiers)
      .reduce(
        (accumulator, modifier) => {
          const [key, value] = modifier;

          if (key && value) {
            const keyValue = commonUtils.isString(value) ? value : key;
            const preparedKeyValue = getClassNameByKey(keyValue);

            accumulator.push(`${preparedBaseClass}${CSSDelimiters.modifier}${preparedKeyValue}`);
          }

          return accumulator;
        },
        [preparedBaseClass],
      )
      .join(' ');
  }

  return '';
};

export { CSSSizes, CSSThemes };
export default {
  mergeClasses,
  mergeModifiers,
};
