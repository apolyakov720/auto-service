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
  format,
  parse,
  toDate,
} from 'date-fns';
import ru from 'date-fns/locale/ru';

/** Возвращает дату начала недели от заданной даты, где начало недели - понедельник */
const getStartOfWeek = (date = new Date()) => startOfWeek(date, { weekStartsOn: 1 });

/** Возвращает дату начала недели для текущего месяца от заданной даты */
const getStartOfWeekMonth = (date = new Date()) => getStartOfWeek(startOfMonth(date));

const formatDisplayedDate = (date) => format(date, 'LLLL yyyy', { locale: ru });

const formatSelectedDate = (date, formatValue = 'dd.MM.yyyy') =>
  format(date, formatValue, { locale: ru });

const formatWeekDay = (date) => format(date, 'eee', { locale: ru }).substring(0, 2);

const getWeekDays = () => {
  const startWeek = new Date();

  return [0, 1, 2, 3, 4, 5, 6].map((value) => formatWeekDay(addDays(startWeek, value)));
};

const parseStringDate = (value) => toDate(Date.parse(value));

export default {
  addMonths,
  addWeeks,
  addDays,
  getDay,
  getMonth,
  getStartOfWeek,
  getStartOfWeekMonth,
  getWeekDays,
  isSameDay,
  isValid,
  formatDisplayedDate,
  formatSelectedDate,
  formatWeekDay,
  parse,
  parseStringDate,
};
