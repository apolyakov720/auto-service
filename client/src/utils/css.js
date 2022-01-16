// classNames

const mergeModifiers = (baseClass = '', modifiers = {}) => {
  return Object.entries(modifiers)
    .reduce(
      (accumulator, modifier) => {
        const [key, value] = modifier;

        if (value) {
          accumulator.push(`${baseClass}--${key}`);
        }

        return accumulator;
      },
      [baseClass],
    )
    .join(' ');
};

export default {
  mergeModifiers,
};
