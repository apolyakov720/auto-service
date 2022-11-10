import commonUtils from '@utils/common';
import dateUtils from '@utils/date';

const types = {
  required: 'required',
  equals: 'equals',
  email: 'email',
  dateIsBefore: 'dateIsBefore',
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
    [types.email]: {
      validate: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value),
      default: 'Значение поля - неверно',
    },
    [types.dateIsBefore]: {
      validate: (value, params) => {
        const { compare, format } = params;

        const parsedValue = dateUtils.parseDate({ value, format, defaultValue: '' });
        const parsedCompareValue = dateUtils.parseDate({ compare, format });

        return dateUtils.isBefore(parsedValue, parsedCompareValue);
      },
      default: 'Значение даты - неверно',
    },
  };

  validate(config, values) {
    let errors = {};

    Object.entries(config).forEach(([fieldName, rules]) => {
      let error = '';

      for (let i = 0, max = rules.length; i < max; i++) {
        const { handler, message, params = {} } = rules[i];

        const checker = this.types[handler];

        if (!checker) {
          continue;
        }

        const result = checker.validate(commonUtils.getDescendantValue(values, fieldName), params);

        if (!result) {
          error = message || checker.default;
          break;
        }
      }

      if (error) {
        errors = commonUtils.setDescendantValue(errors, fieldName, error);
      }
    });

    return errors;
  }
}

export { types };
export default new Validator();
