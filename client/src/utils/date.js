import {
  addMonths,
  addWeeks,
  addDays,
  getDate as getDay,
  getMonth,
  startOfWeek,
  startOfMonth,
  isSameDay,
  isValid,
  isBefore,
  format,
  parse,
  toDate,
} from 'date-fns';
import ru from 'date-fns/locale/ru';

/** Форматы, используемые в разных частях приложения */
const formats = {
  default: 'dd.MM.yyyy',
  weekDay: 'eee',
  calendarHeader: 'LLLL yyyy',
};

/** Возвращает дату начала недели от заданной даты, где начало недели - понедельник */
const getStartOfWeek = (date = new Date()) => startOfWeek(date, { weekStartsOn: 1 });

/** Возвращает дату начала недели для текущего месяца от заданной даты */
const getStartOfWeekMonth = (date = new Date()) => getStartOfWeek(startOfMonth(date));

/** Возвращает дату в указанном формате */
const formatDate = (date, formatValue) =>
  date && formatValue ? format(date, formatValue, { locale: ru }) : date;

/**
 * Если значение передано в виде строки, то попытается разобрать это значение как дату по формату
 * Примечание: формат в данном случае обязателен
 * Иначе попытается привести переданное значение к дате
 * В случае невалидного значения возвращает значение по умолчанию или текущую дату
 *
 * Итого, значениями могут быть:
 * 1. Строка и формат строки
 * 2. Экземпляр класса Date
 * 3. Число
 * */
const parseDate = ({ value, format, defaultValue = new Date() }) => {
  if (!value) {
    return defaultValue;
  }

  let current;

  if (format) {
    current = parse(value, format, new Date());
  }

  if (!(current && isValid(current))) {
    current = toDate(value);
  }

  return isValid(current) ? current : defaultValue;
};

export { formats };
export default {
  addMonths,
  addWeeks,
  addDays,
  getDay,
  getMonth,
  getStartOfWeek,
  getStartOfWeekMonth,
  isSameDay,
  isBefore,
  formatDate,
  parseDate,
};
