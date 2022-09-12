import * as React from 'react';
import { FC } from 'react';
import * as _ from 'lodash';
import { Movement, MovementMode } from '../../adapters/task/task';
import { formatPersonRole } from '../../adapters/task/person';
import DepartureStatusTag from './departure-status-tag';

class Props {
  movement: Movement;
}

const toRoRoTitle = (movement: Movement): string => {
  return (
    movement.vehicle?.registrationNumber ||
    movement.trailer?.registrationNumber ||
    toFootPassengerTitle(movement.groupSize)
  );
};

const toFootPassengerTitle = (groupSize: number): string => {
  if (groupSize > 1) {
    return `${groupSize} foot passengers`;
  }
  if (groupSize > 0) {
    return `1 foot passenger`;
  }
  return 'Unknown';
};

const toAirPaxTitle = (movement: Movement): string => {
  return formatPersonRole(movement.person);
};

const formatTitle = (movement: Movement): string => {
  switch (movement.mode) {
    case MovementMode.RoRoAccompaniedFreight:
    case MovementMode.RoRoUnaccompaniedFreight:
    case MovementMode.RoRoTourist:
      return toRoRoTitle(movement);
    case MovementMode.AirPassenger:
      return toAirPaxTitle(movement);
    default:
      return 'unknown';
  }
};

const JourneyTitle: FC<Props> = ({ movement }) => {
  return (
    <span className="govuk-body-s govuk-!-margin-bottom-0 govuk-!-font-weight-bold govuk-!-padding-left-1">
      <span className="govuk-font-weight-bold">
        {formatTitle(movement)}{' '}
        <DepartureStatusTag status={movement.flight?.departureStatus} />
      </span>
    </span>
  );
};

export default JourneyTitle;
