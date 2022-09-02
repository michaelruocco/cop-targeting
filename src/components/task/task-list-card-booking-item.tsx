import * as React from 'react';
import { FC } from 'react';
import {
  formatBookingReference,
  formatBookedAt,
  formatBookingLeadTime,
} from '../../adapters/task/booking';
import { Movement } from '../../adapters/task/task';

class Props {
  movement: Movement;
}

const TaskListCardBookingItem: FC<Props> = ({ movement }) => {
  const booking = movement.booking;
  const departureAt = movement.journey?.departure?.time;
  return (
    <>
      <h3 className="govuk-heading-s govuk-!-margin-bottom-1 govuk-!-font-size-16 govuk-!-font-weight-regular secondary-text">
        Booking
      </h3>
      <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0">
        <li className="govuk-!-font-weight-bold">
          {formatBookingReference(booking)}
        </li>
      </ul>
      <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0">
        <li className="govuk-!-font-weight-regular">
          {formatBookedAt(booking)}
        </li>
      </ul>
      <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0 secondary-text">
        <li className="govuk-!-font-weight-regular">
          {formatBookingLeadTime(booking, departureAt)}
        </li>
      </ul>
    </>
  );
};

export default TaskListCardBookingItem;
