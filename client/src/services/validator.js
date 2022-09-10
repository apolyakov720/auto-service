import commonUtils from '@utils/common';

const types = {
  required: 'required',
  equals: 'equals',
};

class Validator {
  types = {
    [types.required]: {
      validate: (value) => !commonUtils.isEmpty(value),
      default: 'Обязательно для заполнения',
    },
    [types.equals]: {
      validate: (value, params) => {
        const { other } = params;

        if (commonUtils.isEmpty(value) || commonUtils.isEmpty(other)) {
          return false;
        }

        return value === other;
      },
      default: 'Значения не равны',
    },
  };

  // TODO добавить проверки
  validate(config, values) {
    const errors = {};

    Object.entries(config).forEach(([fieldName, rules]) => {
      let error = '';

      for (let i = 0, max = rules.length; i < max; i++) {
        const { handler, message, params = {} } = rules[i];

        const checker = this.types[handler];

        if (!checker) {
          continue;
        }

        const result = checker.validate(values[fieldName], params);

        if (!result) {
          error = message || checker.default;
          break;
        }
      }

      if (error) {
        errors[fieldName] = error;
      }
    });

    return errors;
  }
}

export { types };
export default new Validator();
