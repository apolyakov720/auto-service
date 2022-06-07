import {
  addWeeks,
  addDays,
  getDate as getDay,
  getMonth,
  startOfWeek,
  startOfMonth,
  isSameDay,
} from 'date-fns';

/** Возвращает дату начала недели от заданной даты, где начало недели - понедельник */
const getStartOfWeek = (date = new Date()) => startOfWeek(date, { weekStartsOn: 1 });

/** Возвращает дату начала недели для текущего месяца от заданной даты */
const getStartOfWeekMonth = (date = new Date()) => getStartOfWeek(startOfMonth(date));

export default {
  addWeeks,
  addDays,
  getDay,
  getMonth,
  getStartOfWeek,
  getStartOfWeekMonth,
  isSameDay,
};
