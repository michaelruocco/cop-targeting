import * as React from 'react';
import { FC } from 'react';
import {
  formatPersonRole,
  formatGender,
  formatPersonNationality,
  formatPersonDateOfBirth,
  formatPersonLastName,
  formatPersonFirstName,
} from '../../adapters/task/person';
import { formatCheckIn } from '../../adapters/task/booking';
import { Movement, Baggage, Flight } from '../../adapters/task/task';

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

const TaskListCardPersonItem: FC<Props> = ({ movement }) => {
  const person = movement.person;
  const baggage = movement.baggage;
  return (
    <div className="govuk-grid-item">
      <div>
        <h3 className="govuk-heading-s govuk-!-margin-bottom-1 govuk-!-font-size-16 govuk-!-font-weight-regular secondary-text">
          {formatPersonRole(person)}
        </h3>
        <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0">
          <li className="govuk-!-font-weight-bold">
            {formatPersonLastName(person)}
          </li>
          <li className="govuk-!-font-weight-regular">
            {formatPersonFirstName(person)}
          </li>
        </ul>
        <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0">
          <li className="govuk-!-font-weight-regular">
            {formatGender(person)}
          </li>
          <li className="govuk-!-font-weight-regular">
            {formatPersonDateOfBirth(person)}
          </li>
          <li className="govuk-!-font-weight-regular">
            {formatPersonNationality(person)}
          </li>
        </ul>
        <ul className="govuk-body-s govuk-list govuk-!-margin-bottom-0 secondary-text">
          <li className="govuk-!-font-weight-regular">
            {formatCheckedBags(baggage)},{' '}
          </li>
          <li className="govuk-!-font-weight-regular">
            {formatWeight(baggage)}
          </li>
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
    </div>
  );
};

export default TaskListCardPersonItem;
