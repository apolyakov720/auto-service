import {
  addMonths,
  addWeeks,
  addDays,
  getDate as getDay,
  getMonth,
  startOfWeek,
  startOfMonth,
  isSameDay,
  format,
} from 'date-fns';
import ru from 'date-fns/locale/ru';

/** Возвращает дату начала недели от заданной даты, где начало недели - понедельник */
const getStartOfWeek = (date = new Date()) => startOfWeek(date, { weekStartsOn: 1 });

/** Возвращает дату начала недели для текущего месяца от заданной даты */
const getStartOfWeekMonth = (date = new Date()) => getStartOfWeek(startOfMonth(date));

const formatDisplayedDate = (date) => {
  return format(date, 'LLLL yyyy', { locale: ru });
};

const formatSelectedDate = (date) => {
  return format(date, 'DD.MM.YYYY', { locale: ru });
};

const formatWeekDay = (date) => {
  return format(date, 'eee', { locale: ru }).substring(0, 2);
};

export default {
  addMonths,
  addWeeks,
  addDays,
  getDay,
  getMonth,
  getStartOfWeek,
  getStartOfWeekMonth,
  isSameDay,
  formatDisplayedDate,
  formatSelectedDate,
  formatWeekDay,
};
