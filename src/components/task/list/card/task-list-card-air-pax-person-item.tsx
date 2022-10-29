import * as React from 'react';
import { FC } from 'react';
import { formatCheckIn } from '../../../../adapters/task/booking';
import { Movement, Baggage, Flight } from '../../../../adapters/task/task';
import TaskListCardPersonItem from './task-list-card-person-item';

class Props {
  movement: Movement;
}

const formatCheckedBags = (baggage: Baggage): string => {
  if (!baggage || !baggage?.numberOfCheckedBags) {
    return 'Unknown';
  }
  switch (baggage.numberOfCheckedBags) {
    case 0:
      return 'No checked bags';
    case 1:
      return '1 checked bag';
    default:
      return `${baggage.numberOfCheckedBags} checked bags`;
  }
};

const formatWeight = (baggage: Baggage): string => {
  if (!baggage?.weight) {
    return 'Unknown';
  }
  if (baggage.weight.endsWith('kg')) {
    return baggage.weight;
  }
  return `${baggage.weight}kg`;
};

const formatSeatNumber = (flight: Flight) => {
  if (!flight?.seatNumber) {
    return 'Seat Unknown';
  }
  return `Seat ${flight.seatNumber}`;
};

const TaskListCardAirPaxPersonItem: FC<Props> = ({ movement }) => {
  const baggage = movement.baggage;
  return (
    <div>
      <TaskListCardPersonItem movement={movement} />
      <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0 secondary-text">
        <li className="govuk-!-font-weight-regular">
          {formatCheckedBags(baggage)},{' '}
        </li>
        <li className="govuk-!-font-weight-regular">{formatWeight(baggage)}</li>
      </ul>
      <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0 secondary-text">
        <li className="govuk-!-font-weight-regular">
          Check-in {formatCheckIn(movement.booking)},{' '}
        </li>
        <li className="govuk-!-font-weight-regular">
          {formatSeatNumber(movement.flight)}
        </li>
      </ul>
    </div>
  );
};

export default TaskListCardAirPaxPersonItem;
