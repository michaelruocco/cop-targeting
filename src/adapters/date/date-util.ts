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

export const toLongFormat = (date: Date): string => {
  if (!date) {
    return 'Unknown';
  }
  return dayjs.utc(date).format('D MMM YYYY [at] HH:mm');
};
