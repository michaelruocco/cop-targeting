import {
  calcuateTimeBetween,
  isAfter,
  toShortDateFormat,
  toShortTimeFormat,
} from '../date/date';

export type Booking = {
  reference: string;
  type: string;
  paymentMethod: string;
  bookedAt: Date;
  checkInAt: Date;
};

const unknown = 'Unknown';

export const formatBookingReference = (booking: Booking): string => {
  if (!booking?.reference) {
    return unknown;
  }
  return booking.reference;
};

export const formatBookedAt = (booking: Booking): string => {
  if (!booking?.bookedAt) {
    return unknown;
  }
  return toShortDateFormat(booking.bookedAt);
};

export const formatCheckIn = (booking: Booking): string => {
  if (!booking?.checkInAt) {
    return unknown;
  }
  return toShortTimeFormat(booking.checkInAt);
};

export const formatBookingLeadTime = (
  booking: Booking,
  departureAt: Date,
): string => {
  if (!booking?.bookedAt || !departureAt) {
    return unknown;
  }
  const timeBetween = calcuateTimeBetween(booking.bookedAt, departureAt);
  if (isAfter(booking.bookedAt, departureAt)) {
    return `${timeBetween} after travel`;
  }
  return `${timeBetween} before travel`;
};
