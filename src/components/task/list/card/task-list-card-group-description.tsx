import * as _ from 'lodash';
import * as React from 'react';
import { FC } from 'react';
import { Movement, MovementMode } from '../../../../adapters/task/task';

class Props {
  movement: Movement;
}

const toRoRoGroupDescription = (movement: Movement): string => {
  const vehicle = movement.vehicle;
  if (vehicle && vehicle.make && vehicle.model) {
    return `${vehicle.make} ${vehicle.model}`;
  }
  return toDefaultGroupDescription(movement);
};

const toDefaultGroupDescription = (movement: Movement): string => {
  const description = movement.description;
  switch (description) {
    case 'individual':
      return 'Single Passenger';
    case 'group':
      return `In group of ${movement.groupSize}`;
    default:
      return _.startCase(_.toLower(description));
  }
};

const toGroupDescription = (movement: Movement): string => {
  switch (movement.mode) {
    case MovementMode.RoRoAccompaniedFreight:
    case MovementMode.RoRoUnaccompaniedFreight:
    case MovementMode.RoRoTourist:
      return toRoRoGroupDescription(movement);
    case MovementMode.AirPassenger:
      return toDefaultGroupDescription(movement);
    default:
      return 'unknown';
  }
};

const GroupDescription: FC<Props> = ({ movement }) => {
  return (
    <p className="govuk-body-s content-line-one govuk-!-margin-bottom-0 govuk-!-padding-left-1">
      {toGroupDescription(movement)}
    </p>
  );
};

export default GroupDescription;
