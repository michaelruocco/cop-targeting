import * as React from 'react';
import { FC } from 'react';
import { Movement } from '../../../../adapters/task/task';
import {
  formatBookedAt,
  formatBookingLeadTime,
} from '../../../../adapters/task/booking';

class Props {
  movement: Movement;
}

const TaskListCardAccountItem: FC<Props> = ({ movement }) => {
  const account = movement.account;
  const booking = movement.booking;
  const departureAt = movement.journey?.departure?.time;
  return (
    <>
      <h3 className="govuk-heading-s govuk-!-margin-bottom-1 govuk-!-font-size-16 govuk-!-font-weight-regular secondary-text">
        Account
      </h3>
      <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0">
        <li className="govuk-!-font-weight-bold">
          {account?.name || 'Unknown'}
        </li>
      </ul>
      <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0">
        <li className="govuk-!-font-weight-regular">
          Booked on {formatBookedAt(booking)}
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

export default TaskListCardAccountItem;
