import { CSSConstants } from '@constants';

const mergeClasses = (...classes) => {
  return classes
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

          if (value) {
            resultChunkClass = resultChunkClass.concat(key);
          }
        });
      }

      accumulator.push(resultChunkClass);

      return accumulator;
    }, [])
    .join(' ')
    .trim();
};

const mergeModifiers = (baseClass = '', modifiers = {}) => {
  return Object.entries(modifiers)
    .reduce(
      (accumulator, modifier) => {
        const [key, value] = modifier;

        if (value) {
          accumulator.push(`${baseClass}${CSSConstants.DELIMITERS.MODIFIER}${key}`);
        }

        return accumulator;
      },
      [baseClass],
    )
    .join(' ');
};

export default {
  mergeClasses,
  mergeModifiers,
};
