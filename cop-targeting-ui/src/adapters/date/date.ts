import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import * as relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(utc);
dayjs.extend(relativeTime);

export const isFuture = (date: Date): boolean => {
  const now = dayjs.utc();
  return dayjs.utc(date).isAfter(now);
};

export const calcuateTimeFromNow = (date: Date): string => {
  return dayjs.utc(date).fromNow();
};

export const calcuateTimeBetween = (start: Date, end: Date): string => {
  return dayjs.utc(start).from(dayjs.utc(end), true);
};

export const isAfter = (date: Date, otherDate: Date) => {
  if (!date || !otherDate) {
    return false;
  }
  return dayjs.utc(date).isAfter(otherDate);
};

export const toShortDateFormat = (date: Date) => {
  if (!date) {
    return 'Unknown';
  }
  return dayjs.utc(date).format('DD MMM YYYY');
};

export const toShortTimeFormat = (date: Date) => {
  if (!date) {
    return 'Unknown';
  }
  return dayjs.utc(date).format('HH:mm');
};

export const toLongDateTimeFormat = (date: Date): string => {
  if (!date) {
    return 'Unknown';
  }
  return dayjs.utc(date).format('D MMM YYYY [at] HH:mm');
};

export const utcNow = (): Date => {
  return dayjs.utc().toDate();
};
